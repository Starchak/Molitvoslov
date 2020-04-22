import React, {Component} from 'react';

import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import {Player} from '..';

import {currentLang, translate} from '../../config/translate';

import styles from './styles';
// Icons
import header from '../../assets/img/pray_bg_1.png';
import bg from '../../assets/img/bg_2.png';

import {Size} from '../../config/typography';
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
  durations: any;
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
          <Text style={styles.title}>{translate(this.props.data.title)}</Text>
          <Text style={styles.sub_title}>
            {translate(this.props.data.sub_title)}
          </Text>
        </ImageBackground>
        <ScrollView stickyHeaderIndices={[2, 0]} style={{top: 10}}>
          <View style={styles.prays_content_container}>
            <Image source={bg} resizeMode={'contain'} style={styles.pray_bg} />
          </View>

          <View style={{position: 'relative', zIndex: 10}}>
            <Text style={[styles.main, Size(18, 30)]}>
              {translate(this.props.data.text)}
            </Text>
          </View>
          {this.props.data.track ? (
            <View style={styles.player_container}>
              <Player
                track={this.props.data.track}
                url={this.props.data.url}
                durations={this.props.data.durations[currentLang]}
              />
            </View>
          ) : (
            <View />
          )}
          <View style={{height: 25}} />
        </ScrollView>
      </View>
    );
  }
}

export {PrayContent};
