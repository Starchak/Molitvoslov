import React, {Component} from 'react';

import {Text, Image, View} from 'react-native';
import {translate} from '../../config/translate';

import styles from './styles';

// Icons
import ornament from '../../assets/img/ornament_line.png';
import {Size} from '../../config/typography';

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
        <Text style={[styles.title, Size(30)]}>МОЛИТВОСЛОВ</Text>
        <Image source={ornament} style={styles.ornament}></Image>
      </View>
    );
  }
}

export {ScreenTitle};
