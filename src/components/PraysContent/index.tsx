import React, {Component} from 'react';

import {Image, FlatList, View} from 'react-native';
import {translate} from '../../config/translate';
import prays from '../../assets/data/prays';
import {ScreenTitle, PrayButton} from '..';

import styles from './styles';

// Icons
import bg from '../../assets/img/pray_list_bg.png';

type Props = {};
type State = {};

class PraysContent extends Component<Props, State> {
  render() {
    return (
      <View style={styles.prays_content}>
        <Image source={bg} style={styles.prays_content_bg} />
        <View style={styles.prays_content_container}>
          <ScreenTitle />
          <FlatList
            data={prays}
            renderItem={({item}) => (
              <PrayButton
                bg={item.img}
                bg_active={item.img_active}
                title={translate(item.title)}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    );
  }
}

export {PraysContent};
