/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {Component} from 'react';

import {Image, PanResponder, View, Dimensions} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

import styles from './styles';
import wave from '../../assets/img/wave.png';

type Props = {
  progress: any;
  SeekTo: any;
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

  seekTo = (pos: number) => {
    this.props.SeekTo(Math.ceil(pos));
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
      let seek = this.state.x0 - this.state.x + gestureState.dx;
      if (seek < 0) {
        this.setState({
          seek: 0,
        });
      } else if (seek > this.state.width) {
        this.setState({
          seek: this.state.width,
        });
      } else {
        this.setState({
          seek: seek,
        });
      }
    },
    onPanResponderTerminationRequest: (evt, gestureState) => true,
    onPanResponderRelease: (evt, gestureState) => {
      this.setState({seek: 0});
      this.seekTo(
        (this.props.progress.duration * this.state.seek) / this.state.width,
      );
    },
    onPanResponderTerminate: (evt, gestureState) => {},
    onShouldBlockNativeResponder: (evt, gestureState) => {
      return true;
    },
  });

  componentDidUpdate(): void {
    // console.log(this.props.progress, this.state);
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
        <View
          style={[
            styles.play_bg,
            {
              width:
                (this.state.width * this.props.progress.position) /
                (this.props.progress.duration || 1),
              backgroundColor: '#e5c077',
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

        <Image
          source={wave}
          {...this._panResponder.panHandlers}
          ref={(ref) => (this.Marker = ref)}
          onLayout={({nativeEvent}) => {
            this.Marker.measure((x, y, width, height, pageX, pageY) => {
              if (pageX > SCREEN_WIDTH) {
                pageX = pageX - SCREEN_WIDTH;
              }
              this.setState({
                x: pageX,
                width: width,
              });
            });
          }}
        />
      </View>
    );
  }
}

export {ProgressBar};
