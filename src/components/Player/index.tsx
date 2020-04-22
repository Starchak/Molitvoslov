import React, {Component} from 'react';
import TrackPlayer, {Capability, Track} from 'react-native-track-player';

import {Image, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {ProgressBar} from '../ProgressBar';

import styles from '../Player/styles';
import play_img from '../../assets/img/play_active.png';
import download_img from '../../assets/img/download.png';
import pause_img from '../../assets/img/pause.png';
import {currentLang, translate} from '../../config/translate';
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
  downloading: boolean;
};

let playInterval: any;

class Player extends Component<Props, State> {
  state = {
    progress: {position: 0, duration: 0},
    isPlay: false,
    isDownloaded: false,
    downloading: false,
    url: '',
    downloading: false,
  };

  componentDidMount(): void {
    console.log('mount 11');
    TrackPlayer.setupPlayer().then(() => {
      TrackPlayer.updateOptions({
        icon: require('../../assets/img/pray.png'),
        capabilities: [Capability.Play, Capability.Pause, Capability.Stop],
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
              this.setState({
                url: val,
                isDownloaded: true,
              });
              TrackPlayer.add({
                ...this.props.track,
                title: translate(this.props.track.title),
                url: 'file://' + val,
              }).then(() => {
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
    this.Pause(true);
    TrackPlayer.destroy();
    clearInterval(playInterval);
  }

  Progress = () => {
    TrackPlayer.getState().then((evt) => {
      // if (evt.toString() === 'playing') {
      //   if (!this.state.isPlay) {
      //     this.setState({isPlay: true});
      //   }
      // } else {
      //   if (this.state.isPlay) {
      //     this.Pause(false);
      //   }
      // }
    });
    let progress: any;
    TrackPlayer.getPosition().then((position) => {
      progress = {
        position: position,
        duration: this.props.durations,
      };
      if (position >= progress.duration) {
        progress.position = progress.duration;
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
    if (!this.state.downloading) {
      if (!this.state.isDownloaded) {
        console.log('DOWNLOAD!!!!!!!');
        TrackPlayer.setupPlayer();
        // Vlad write code for download here
        // Vlad already writed this code
        this.setState({downloading: true});
        RNFetchBlob.config({
          fileCache: true,
        })
          .fetch('GET', this.props.url[currentLang], {
            'Content-Type': 'audio/mpeg',
          })
          .progress(() => {})
          .then((res) => {
            let path = res.path();
            RNFetchBlob.fs.mv(path, path + '.mp3').then(() => {
              path += '.mp3';
              AsyncStorage.setItem(
                this.props.track.id + '_' + currentLang,
                path,
              );
              this.setState({
                url: path,
                isDownloaded: true,
                downloading: false,
              });
              TrackPlayer.add({
                ...this.props.track,
                url: 'file://' + path,
                duration: this.props.durations[currentLang],
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
        console.log(this.state, this.props.durations[currentLang], 'Play');
      }
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
            this.state.downloading ? (
              <ActivityIndicator size="large" color="#e0c081" />
            ) : (
              <Image style={[styles.play_img]} source={download_img} />
            )
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
