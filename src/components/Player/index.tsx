import React, {Component} from 'react';
import TrackPlayer, {Capability, Track} from 'react-native-track-player';

import {Image, TouchableOpacity, View} from 'react-native';
import {ProgressBar} from '../ProgressBar';

import styles from '../Player/styles';
import play_img from '../../assets/img/play_active.png';
import download_img from '../../assets/img/play.png';
import pause_img from '../../assets/img/pause.png';

type Props = {
  track: Track;
};

type State = {
  isDownload: boolean;
  isPlay: boolean;
  progress: any;
};

let playInterval: any;

class Player extends Component<Props, State> {
  state = {
    progress: {position: 0, duration: 0},
    isPlay: false,
    isDownload: false,
  };

  componentDidMount(): void {
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
    });

    TrackPlayer.add(this.props.track).then(() => {});
  }

  componentWillUnmount(): void {
    TrackPlayer.destroy();
  }

  Progress = () => {
    let progress: any;

    TrackPlayer.getPosition().then((position) => {
      progress = {position: position, duration: this.props.track.duration};
      this.setState({progress});
      if (position >= progress.duration - 0.8) {
        this.Pause(true);
      }
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
    if (this.state.isDownload) {
      // Vlad write code for download here
    }

    if (this.state.isPlay) {
      this.Pause(false);
    } else {
      TrackPlayer.play();
      playInterval = setInterval(this.Progress, 1000);
      this.setState({isPlay: true});
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
          {this.state.isDownload ? (
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
