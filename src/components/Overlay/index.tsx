import React, {Component} from 'react';

import {TouchableWithoutFeedback, View} from 'react-native';

import styles from './styles';

type Props = {
  togleSettings: any;
};

class Overlay extends Component<Props> {
  togleSettings = () => {
    this.props.togleSettings();
  };
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.togleSettings}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
    );
  }
}

export {Overlay};
