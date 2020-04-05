/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {Component} from 'react';

import {Image, PanResponder, View,} from 'react-native';

import styles from './styles';
import wave from '../../assets/img/wave.png';

type Props = {
  duration: any;
  buffered: any;
  progress: number;
};
type State = {
  x: number;
  dx: number;
  width: number;
  x0: number;
  seek: number;
};

class ProgressBar extends Component<Props, State> {

  state = {
    x: 0,
    dx: 0,
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
        seek:
          (this.state.x0 - this.state.x + gestureState.dx) ||
          0,
      });
    },
    onPanResponderTerminationRequest: (evt, gestureState) => true,
    onPanResponderRelease: (evt, gestureState) => {
    },
    onPanResponderTerminate: (evt, gestureState) => {
    },
    onShouldBlockNativeResponder: (evt, gestureState) => {
      return true;
    },
  });

  componentDidUpdate(): void {
    // console.log(this.state)
  }

  render() {
    return (
      <View>
        <View
          style={[
            styles.play_bg,
            {
              width: this.state.width,
            },
          ]}
        />
        {/*<View*/}
        {/*  style={[*/}
        {/*    styles.play_bg,*/}
        {/*    {*/}
        {/*      width: this.state.width * this.props.progress / this.props.duration,*/}
        {/*      backgroundColor: '#e5c077',*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*/>*/}
        <View
          style={[
            styles.play_bg,
            {
              width: this.state.seek,
              backgroundColor: '#0064fa',
            },
          ]}
        />

        <Image
          source={wave}
          {...this._panResponder.panHandlers}
          onLayout={(event) =>
            this.setState({
              x: event.nativeEvent.layout.x,
              width: event.nativeEvent.layout.width,
            })
          }
        />
      </View>
    );
  }
}

export {ProgressBar};
