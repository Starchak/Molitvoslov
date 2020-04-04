import React, {Component} from 'react';

import {TouchableWithoutFeedback, Animated} from 'react-native';

import styles from './styles';

type Props = {
  togleSettings: any;
  show: boolean;
};

type State = {
  fadeAnim: any;
};

class Overlay extends Component<Props, State> {
  state = {
    fadeAnim: new Animated.Value(0),
  };

  togleSettings = () => {
    this.fadeOut();
    this.props.togleSettings();
  };

  componentDidMount() {
    this.fadeIn();
  }

  componentDidUpdate() {
    if (this.props.show) {
      this.fadeIn();
    } else {
      this.fadeOut();
    }
  }

  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 0.5,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.togleSettings}>
        <Animated.View
          style={[styles.overlay, {opacity: this.state.fadeAnim}]}
        />
      </TouchableWithoutFeedback>
    );
  }
}

export {Overlay};
