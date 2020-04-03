import React, {Component} from 'react';

import {Text, TouchableOpacity, Image, ScrollView, SafeAreaView, View} from 'react-native';
import {translate} from '../../config/translate';

import {ScreenTitle, PrayButton} from '..';

import styles from './styles';

// Icons
import bg from "../../assets/img/pray_list_bg.png";
import pray_img from '../../assets/img/pray_bg_1.png';
import pray_img_active from '../../assets/img/pray_list_active_bg_1.png';

type Props = {};
type State = {};


class PraysContent extends Component<Props, State> {
  render() {
    return (
      <View style={styles.prays_content}>
        <Image source={bg} style={styles.prays_content_bg}></Image>
        <View style={styles.prays_content_container}>
          <ScreenTitle></ScreenTitle>
          <ScrollView>
            <PrayButton
              bg={pray_img}
              bg_active={pray_img_active}
              title={'ОТЧЕ НАШ'}></PrayButton>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export {PraysContent};
