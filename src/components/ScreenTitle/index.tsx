import React, {Component} from 'react';

import {Text, TouchableOpacity, Image, View} from 'react-native';
import {translate} from '../../config/translate';

import styles from './styles';

// Icons
import pray_img from '../../assets/img/pray_bg_1.png';

type Props = {};
type State = {};

class ScreenTitle extends Component<Props, State> {
  render() {
    return (
      <View>
        <Text style={styles.title}>МОЛИТВОСЛОВ</Text>
      </View>
    );
  }
}

export {ScreenTitle};
