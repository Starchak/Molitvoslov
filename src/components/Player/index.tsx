/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {Component} from 'react';

import {Image, PanResponder, TouchableHighlight, View} from 'react-native';

import TrackPlayer, {Capability, Track, useProgress} from 'react-native-track-player';

import styles from './styles';
import pause from '../../assets/img/pause.png';
import wave from '../../assets/img/wave.png';
// import {ProgressBar} from '../ProgressBar';

type Props = {
  track: Track;
};
type State = {
  progress: number;
  duration: number;
  x: number;
  width: number;
  x0: number;
  seek: number;
};

function Progress() {
  let progress = useProgress();
  console.log(progress.position);
}

class Player extends Component<Props, State> {
  state = {
    progress: 0,
    duration: 1,
    x: 0,
    width: 0,
    x0: 0,
    seek: 0,
  };
  _panResponder = PanResponder.create({
    // Ask to be the responder:
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

    onPanResponderGrant: (evt, gestureState) => {
      this.setState({x0: gestureState.x0});
    },
    onPanResponderMove: (evt, gestureState) => {
      this.setState({
        seek: this.state.x0 - this.state.x + gestureState.dx || 0,
      });
    },
    onPanResponderTerminationRequest: (evt, gestureState) => true,
    onPanResponderRelease: (evt, gestureState) => {
      console.log(this.state);
    },
    onPanResponderTerminate: (evt, gestureState) => {
    },
    onShouldBlockNativeResponder: (evt, gestureState) => {
      return true;
    },
  });
  progress = setInterval(
    () =>
      TrackPlayer.getPosition().then((evt) =>
        this.setState({progress: (evt / this.state.duration) || 0}),
      ),
    200,
  );

  componentDidMount(): void {
    // let position = await TrackPlayer.getPosition();
    TrackPlayer.destroy();
    TrackPlayer.setupPlayer().then(() => {
      // The player is ready to be used
    });
    TrackPlayer.updateOptions({
      capabilities: [Capability.Play, Capability.Pause, Capability.Stop],
      icon: require('../../assets/img/pray.png'),
    });
    let th = this;
    TrackPlayer.add(this.props.track).then(function () {
      TrackPlayer.play();
      TrackPlayer.getDuration().then((evt) => th.setState({duration: evt}));
    });
  }

  componentWillUnmount(): void {
    clearInterval(this.progress);
  }

  componentDidUpdate() {
    // console.log(this.state);
  }

  render() {
    return (
      <View style={styles.player}>
        <TouchableHighlight
          style={styles.play}
          onPress={() => TrackPlayer.pause()}>
          <Image style={styles.play_img} source={pause}/>
        </TouchableHighlight>
        <View>
          <View
            style={[
              styles.play_bg,
              {
                width: this.state.width,
              },
            ]}
          />
          <View
            style={[
              styles.play_bg,
              {
                width: this.state.seek,
                backgroundColor: '#0064fa',
              },
            ]}
          />
          <View
            style={[
              styles.play_bg,
              {
                width: (this.state.width * this.state.progress) || 0,
                backgroundColor: '#e5c077',
              },
            ]}
          />

          <Image
            source={wave}
            {...this._panResponder.panHandlers}
            ref="Marker"
            onLayout={({nativeEvent}) => {
              this.refs.Marker.measure((x, y, width, height, pageX, pageY) => {
                this.setState({
                  x: pageX,
                  width: width,
                });
              });
            }}
          />
        </View>
      </View>
    );
  }
}

export {Player};
