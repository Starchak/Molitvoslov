import React, {Component} from 'react';

import {Text, TouchableOpacity, Image} from 'react-native';
import {translate} from '../../config/translate';

import styles from './styles';

// Icons
import pray_img from '../../assets/img/pray_bg_1.png';

type Props = {};
type State = {};

class PrayButton extends Component<Props, State> {
  render() {
    return (
      <TouchableOpacity style={styles.pray_btn}>
        <Image source={pray_img} style={styles.pray_btn_img}/>
        <Text style={styles.pray_btn_text}>ОТЧЕ НАШ</Text>
      </TouchableOpacity>
    );
  }
}

export {PrayButton};
