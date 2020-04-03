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
import bg from '../../assets/img/pray_list_active_bg_1.png';
import pray_img from '../../assets/img/pray_bg_1.png';
import pray_img_active from '../../assets/img/pray_list_active_bg_1.png';

type Props = {};
type State = {};

class PrayContent extends Component<Props, State> {
  render() {
    return (
      <View style={styles.prays_content}>
        <ImageBackground source={bg} style={styles.prays_content_bg}>
          <Text style={styles.title}>{translate(prays[0].title)}</Text>
        </ImageBackground>
        <View style={styles.prays_content_container}>
          <ScrollView>
            <Text>{translate(prays[0].text)}</Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export {PrayContent};
