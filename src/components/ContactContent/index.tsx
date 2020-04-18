import React, {Component} from 'react';

import {
  Image,
  ImageBackground,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';
import header from '../../assets/img/pray_bg_1.png';
import {translate} from '../../config/translate';
import bg from '../../assets/img/bg_2.png';

type Props = {};
type State = {};

class ContactContent extends Component<Props, State> {
  render() {
    return (
      <View style={styles.contact_content}>
        <View style={styles.prays_content}>
          <ImageBackground source={header} style={styles.prays_content_bg}>
            <Text style={styles.title}>{translate('contactTitle')}</Text>
          </ImageBackground>
          <View style={styles.prays_content_container}>
            <Image source={bg} resizeMode={'contain'} style={styles.pray_bg} />
            <ScrollView>
              <Text style={[styles.p, styles.main]}>
                {translate('contactSubTitle')}{' '}
              </Text>

              <Text style={[styles.p, styles.main]}>
                {translate('contactP1')}
              </Text>
              <View style={styles.p}>
                <Text style={styles.main}>{translate('contactP2')}</Text>
                <TouchableOpacity
                  onPress={async () =>
                    await Linking.openURL('https://newlife.bible/home')
                  }>
                  <Text style={styles.link}>https://newlife.bible/home</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.p}>
                <Text style={styles.main}>{translate('contactP3')}</Text>
                <TouchableOpacity
                  onPress={async () =>
                    await Linking.openURL('https://newlife.bible/find-a-church')
                  }>
                  <Text style={styles.link}>
                    https://newlife.bible/find-a-church
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.p}>
                <Text style={styles.main}>{translate('contactP4')}</Text>
                <TouchableOpacity
                  onPress={async () =>
                    await Linking.openURL(
                      'https://newlife.bible/article/does-god-exist',
                    )
                  }>
                  <Text style={styles.link}>
                    https://newlife.bible/article/does-god-exist
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.p}>
                <Text style={styles.main}>{translate('contactP5')}</Text>
                <TouchableOpacity
                  onPress={async () =>
                    await Linking.openURL('mailto:molitvoslov@gmail.com')
                  }>
                  <Text style={styles.link}>molitvoslov@gmail.com</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.p}>
                <Text style={styles.main}>{translate('contactP6')}</Text>
                <TouchableOpacity
                  onPress={async () =>
                    await Linking.openURL('https://molitvoslov.app/')
                  }>
                  <Text style={styles.link}>https://molitvoslov.app/</Text>
                </TouchableOpacity>
              </View>
              <View style={{height: 25}} />
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

export {ContactContent};
