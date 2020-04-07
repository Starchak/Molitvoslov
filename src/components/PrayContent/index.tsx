import React, {Component} from 'react';

import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import {translate} from '../../config/translate';

import styles from './styles';
// Icons
import header from '../../assets/img/pray_bg_1.png';
import bg from '../../assets/img/bg_2.png';

import {Size} from '../../config/typography';
import Player from '../PlayerFunc';
import {Track} from 'react-native-track-player';

type Data = {
  title: string;
  sub_title: string;
  text: string;
  img: any;
  img_active: any;
  id: number;
  track: Track;
  url: object;
};

type Props = {
  data: Data;
};
type State = {};

class PrayContent extends Component<Props, State> {
  render() {
    return (
      <View style={styles.prays_content}>
        <ImageBackground source={header} style={styles.prays_content_bg}>
          <Text style={[styles.title, Size(20)]}>
            {translate(this.props.data.title)}
          </Text>
          <Text style={[styles.sub_title, Size(12)]}>
            {translate(this.props.data.sub_title)}
          </Text>
        </ImageBackground>
        <View style={styles.prays_content_container}>
          <Image source={bg} resizeMode={'contain'} style={styles.pray_bg} />
          {this.props.data.track ? (
            <Player track={this.props.data.track} url={this.props.data.url} />
          ) : null}
          <ScrollView>
            <Text style={[styles.main, Size(18, 30)]}>
              {translate(this.props.data.text)}
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export {PrayContent};
