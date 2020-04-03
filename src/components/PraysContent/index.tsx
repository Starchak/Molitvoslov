import React, {Component} from 'react';

import {Text, TouchableOpacity, Image, ScrollView, SafeAreaView, View} from 'react-native';
import {translate} from '../../config/translate';

import styles from './styles';

// Icons
import bg from "../../assets/img/pray_list_bg.png";
import {ScreenTitle, PrayButton} from '..';

type Props = {};
type State = {};

class PraysContent extends Component<Props, State> {
  render() {
    return (
      <View style={styles.prays_content}>
        <ScreenTitle></ScreenTitle>
        <Image source={bg} style={styles.prays_content_bg}></Image>
        <ScrollView>
          <PrayButton></PrayButton>
        </ScrollView>
      </View>
    );
  }
}

export {PraysContent};
