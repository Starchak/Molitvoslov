import React, {Component} from 'react';

import {Image, Text, View} from 'react-native';

import styles from './styles';
// Icons
import ornament from '../../assets/img/ornament_line.png';

type Props = {};
type State = {};

class ScreenTitle extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={ornament}
          style={{...styles.ornament, transform: [{rotate: '180deg'}]}}
        />
        <Text style={styles.title}>МОЛИТВОСЛОВ</Text>
        <Image source={ornament} style={styles.ornament}></Image>
      </View>
    );
  }
}

export {ScreenTitle};
