import React, {Component} from 'react';

import {Text, TouchableOpacity, Image, View} from 'react-native';
import {translate} from '../../config/translate';

import styles from './styles';

// Icons
import ornament from '../../assets/img/ornament_title.png';

type Props = {};
type State = {};

class ScreenTitle extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Image source={ornament} style={styles.ornament} />
        <Text style={styles.title}>МОЛИТВОСЛОВ</Text>
        <Image
          source={ornament}
          style={{...styles.ornament, transform: [{rotate: '180deg'}]}}></Image>
      </View>
    );
  }
}

export {ScreenTitle};
