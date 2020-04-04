import React, {Component} from 'react';

import {FlatList, Image, View} from 'react-native';
import prays from '../../assets/data/prays';
import {PrayButton, ScreenTitle} from '..';

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
              <PrayButton data={item}/>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    );
  }
}

export {PraysContent};
