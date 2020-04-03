import React, {Component} from 'react';

import {
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  View,
  ImageBackground,
} from 'react-native';
import {translate} from '../../config/translate';
import prays from '../../assets/data/prays';
import {ScreenTitle, PrayButton} from '..';

import styles from './styles';

// Icons
import header from '../../assets/img/pray_list_active_bg_1.png';
import bg from '../../assets/img/bg_2.png';
import abp from '../../assets/img/abp.png';

import {Size} from "../../config/typography";

type Props = {};
type State = {};

class PrayContent extends Component<Props, State> {
  render() {
    return (
      <View style={styles.prays_content}>
        <ImageBackground source={header} style={styles.prays_content_bg}>
          <Text style={[styles.title, Size(20)]}>{translate(prays[0].title)}</Text>
        </ImageBackground>
        <View style={styles.prays_content_container}>
          <Image
            source={bg}
            resizeMode={'contain'}
            style={styles.pray_bg}></Image>
          <Image source={abp}></Image>
          <ScrollView>
            <Text style={[styles.main, Size(28)]}>
              {translate(prays[0].text)}
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export {PrayContent};
