import React, {Component} from 'react';

import {Image, ImageBackground, ScrollView, Text, View,} from 'react-native';
import {translate} from '../../config/translate';
import prays from '../../assets/data/prays';

import styles from './styles';
// Icons
import header from '../../assets/img/pray_bg_1.png';
import bg from '../../assets/img/bg_2.png';
import abp from '../../assets/img/abp.png';

import {Size} from '../../config/typography';

type Props = {};
type State = {};

class PrayContent extends Component<Props, State> {
  render() {
    return (
      <View style={styles.prays_content}>
        <ImageBackground source={header} style={styles.prays_content_bg}>
          <Text style={[styles.title, Size(20)]}>
            {translate(prays[0].title)}
          </Text>
          <Text style={[styles.sub_title, Size(12)]}>
            {translate(prays[0].title)}
          </Text>
        </ImageBackground>
        <View style={styles.prays_content_container}>
          <Image
            source={bg}
            resizeMode={'contain'}
            style={styles.pray_bg}></Image>
          <Image source={abp}></Image>
          <ScrollView>
            <Text style={[styles.main, Size(18, 30)]}>
              {translate(prays[0].text)}
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export {PrayContent};
