import React, {Component} from 'react';
import TrackPlayer, {Capability, Track} from 'react-native-track-player';

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
    console.log('test');
    TrackPlayer.setupPlayer().then(() => {
      TrackPlayer.updateOptions({
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.Stop,
          Capability.SeekTo,
        ],
        compactCapabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.Stop,
          Capability.SeekTo,
        ],
        notificationCapabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.Stop,
          Capability.SeekTo,
        ],
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
  }

  Progress = () => {
    let progress: any;

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
      console.log(position);
      TrackPlayer.seekTo(pos).then((p) => {
        console.log(p);
      });
    });
  }

  PlayPause() {
    if (!this.state.isDownloaded) {
      // Vlad write code for download here
      RNFetchBlob.config({
        fileCache: true,
      })
        .fetch('GET', this.props.url[currentLang], {})
        .then((res) => {
          let path = res.path();
          // console.log('The file saved to ', path);
          AsyncStorage.setItem(this.props.track.id + '_' + currentLang, path);
          this.setState({url: path, isDownloaded: true});

          TrackPlayer.add({...this.props.track, url: path}).then(() => {
            TrackPlayer.getQueue().then((evt) => {
              console.log(evt);
            });
          });
        });
    }

    if (this.state.isPlay) {
      this.Pause(false);
    } else {
      TrackPlayer.play();
      playInterval = setInterval(this.Progress, 100);
      this.setState({isPlay: true});
      console.log(this.state);
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
