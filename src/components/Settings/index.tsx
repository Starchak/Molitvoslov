import React, {Component} from 'react';

import {View, Text, TouchableOpacity, Image} from 'react-native';
import {translate} from '../../config/translate';

import styles from './styles';

type Props = {};
type State = {};

class Settings extends Component<Props, State> {
  render() {
    return (
      <View style={styles.settings}>
        <View style={[styles.settings_block, styles.lang_block]}></View>
        <View style={[styles.settings_block, styles.font_block]}></View>
      </View>
    );
  }
}

export {Settings};
