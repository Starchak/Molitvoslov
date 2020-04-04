import React, {Component} from 'react';

import {Image, PanResponder, TouchableHighlight, View,} from 'react-native';

import TrackPlayer from 'react-native-track-player';

import styles from './styles';
import play from '../../assets/img/play.png';
import wave from '../../assets/img/wave.png';

type Props = {};
type State = {
  xp: number;
  x: number;
  y: number;
  dx: number;
  width: number;
  x0: number;
  play: boolean;
  started: boolean;
  progress: number;
  seek: number;
};

TrackPlayer.setupPlayer().then(() => {
  // The player is ready to be used
});

class Player extends Component<Props, State> {
  state = {
    xp: 0,
    x: 0,
    y: 0,
    dx: 0,
    width: 0,
    x0: 0,
    play: false,
    started: false,
    progress: 0,
    seek: 0,
  };
  _panResponder = PanResponder.create({
    // Ask to be the responder:
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

    onPanResponderGrant: (evt, gestureState) => {
      // The guesture has started. Show visual feedback so the user knows
      // what is happening!
      this.setState({x0: gestureState.x0});
      // gestureState.{x,y}0 will be set to zero now
    },
    onPanResponderMove: (evt, gestureState) => {
      // The most recent move distance is gestureState.move{X,Y}
      // console.log(gestureState.dx);
      this.setState({
        seek:
          (this.state.x0 - this.state.x - this.state.xp + gestureState.dx) /
          this.state.width || 0,
      });
      // The accumulated gesture distance since becoming responder is
      // gestureState.d{x,y}
    },
    onPanResponderTerminationRequest: (evt, gestureState) => true,
    onPanResponderRelease: (evt, gestureState) => {
      // The user has released all touches while this view is the
      // responder. This typically means a gesture has succeeded
    },
    onPanResponderTerminate: (evt, gestureState) => {
      // Another component has become the responder, so this gesture
      // should be cancelled
    },
    onShouldBlockNativeResponder: (evt, gestureState) => {
      // Returns whether this component should block native components from becoming the JS
      // responder. Returns true by default. Is currently only supported on android.
      return true;
    },
  });

  componentDidMount(): void {
    var track = {
      id: 'unique track id', // Must be a string, required
      url: require('../../assets/audio/test.mp3'), // Load media from the app bundle
      title: 'Avaritia',
      artwork: require('../../assets/img/pray_bg_1.png'),
      artist: '',
    };
    TrackPlayer.add([track]).then(function () {
      TrackPlayer.play();
      // let position = await TrackPlayer.getPosition();
      // let buffered = await TrackPlayer.getBufferedPosition();
      console.log(TrackPlayer.getDuration());
    });
    TrackPlayer.updateOptions({
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
      ],
      icon: require('../../assets/img/pray.png'),

    });
  }

  render() {
    return (
      <View
        style={styles.player}
        onLayout={(event) =>
          this.setState({
            xp: event.nativeEvent.layout.x,
          })
        }>
        <View
          style={[
            styles.play_bg,
            {
              marginLeft: this.state.x - 5 || 0,
              marginBottom: this.state.y || 0,
              width: this.state.width - 5 || 0,
            },
          ]}
        />
        <View
          style={[
            styles.play_bg,
            {
              marginLeft: this.state.x - 5 || 0,
              marginBottom: this.state.y || 0,
              width: (this.state.width * this.state.seek) || 0,
              backgroundColor: '#e5c077',
            },
          ]}
        />

        <TouchableHighlight style={styles.play} onPress={() => TrackPlayer.pause()}>
          <Image style={styles.play_img} source={play} tintColor={'#e5c077'}/>
        </TouchableHighlight>
        {/*<Image source={pause}></Image>*/}
        <Image
          source={wave}
          {...this._panResponder.panHandlers}
          onLayout={(event) =>
            this.setState({
              x: event.nativeEvent.layout.x,
              y: event.nativeEvent.layout.y,
              width: event.nativeEvent.layout.width,
            })
          }
        />
      </View>
    );
  }
}

export {Player};
