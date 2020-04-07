import React, {Component} from 'react';
import TrackPlayer, {Track} from 'react-native-track-player';

import {AsyncStorage, Image, TouchableOpacity, View} from 'react-native';
import {ProgressBar} from '../ProgressBar';

import styles from '../Player/styles';
import play_img from '../../assets/img/play_active.png';
import download_img from '../../assets/img/play.png';
import pause_img from '../../assets/img/pause.png';
import {currentLang} from '../../config/translate';
import RNFetchBlob from 'rn-fetch-blob';

type Props = {
  track: Track;
  url: any;
  durations: any;
};

type State = {
  isDownloaded: boolean;
  isPlay: boolean;
  progress: any;
  url: string;
};

let playInterval: any;

class Player extends Component<Props, State> {
  state = {
    progress: {position: 0, duration: 0},
    isPlay: false,
    isDownloaded: false,
    url: '',
  };

  componentDidMount(): void {
    TrackPlayer.setupPlayer().then(() => {
      TrackPlayer.updateOptions({
        icon: require('../../assets/img/pray.png'),
      });
      console.log(this.props.url);
    });

    AsyncStorage.getItem(this.props.track.id + '_' + currentLang).then(
      (val) => {
        console.log(val);
        console.log(this.props.url[currentLang]);
        if (val) {
          RNFetchBlob.fs.exists(val).then((exist) => {
            // console.log(`file ${exist ? '' : 'not'} exists`);
            if (exist) {
              this.setState({url: val, isDownloaded: true});
              TrackPlayer.add({...this.props.track, url: val}).then(() => {
                TrackPlayer.getQueue().then((evt) => {
                  console.log(evt);
                });
              });
            } else {
              console.log('Error');
            }
          });
        }
      },
    );
  }

  componentWillUnmount(): void {
    TrackPlayer.destroy();
    clearInterval(playInterval);
  }

  Progress = () => {
    TrackPlayer.getState().then((evt) => {
      console.log(evt);
    });
    let progress: any;
    TrackPlayer.getState().then((evt) => {
      console.log(evt);
    });
    TrackPlayer.getPosition().then((position) => {
      progress = {position: position, duration: this.props.track.duration};
      if (position >= progress.duration) {
        progress.position = this.props.track.duration;
        this.Pause(true);
      }
      this.setState({progress});
    });
  };

  SeekTo(pos: number) {
    TrackPlayer.getPosition().then((position) => {
      TrackPlayer.seekTo(pos).then((p) => {});
    });
  }

  PlayPause() {
    if (!this.state.isDownloaded) {
      // Vlad write code for download here
      RNFetchBlob.config({
        fileCache: true,
      })
        .fetch('GET', this.props.url[currentLang], {
          'Content-Type': 'audio/mpeg',
        })
        .then((res) => {
          let path = res.path();
          RNFetchBlob.fs.mv(path, path + '.mp3').then(() => {
            path += '.mp3';
            AsyncStorage.setItem(this.props.track.id + '_' + currentLang, path);
            this.setState({url: path, isDownloaded: true});

            TrackPlayer.add({
              ...this.props.track,
              url: path,
              duration: this.props.durations[currentLang],
            }).then(() => {
              TrackPlayer.getQueue().then((evt) => {
                console.log(evt);
              });
            });
          });
        });
    } else if (this.state.isPlay) {
      this.Pause(false);
    } else {
      TrackPlayer.play()
        .then((el) => {
          console.log(el);
        })
        .catch((e) => {
          console.log(e);
        });
      playInterval = setInterval(this.Progress, 100);
      this.setState({isPlay: true});
      console.log(this.state, this.props.durations, 'Play');
    }
  }

  Pause = (isStop: boolean) => {
    if (isStop) {
      TrackPlayer.stop();
    } else {
      TrackPlayer.pause();
    }
    this.setState({isPlay: false});
    clearInterval(playInterval);
  };

  render() {
    return (
      <View style={styles.player}>
        <TouchableOpacity style={styles.play} onPress={() => this.PlayPause()}>
          {!this.state.isDownloaded ? (
            <Image style={styles.play_img} source={download_img} />
          ) : this.state.isPlay ? (
            <Image style={styles.play_img} source={pause_img} />
          ) : (
            <Image style={styles.play_img} source={play_img} />
          )}
        </TouchableOpacity>
        <ProgressBar SeekTo={this.SeekTo} progress={this.state.progress} />
      </View>
    );
  }
}

export {Player};
