import React, {Component} from 'react';

import {View} from 'react-native';

import styles from './styles';

type Props = {};
type State = {};

class Overlay extends Component<Props, State> {
  render() {
    return <View style={styles.overlay} />;
  }
}

export {Overlay};
