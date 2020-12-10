import React, {Component} from 'react';

import {FlatList, Image, Text, View} from 'react-native';
import prays from '../../assets/data/prays';
import {PrayButton} from '..';

import styles from './styles';
// Icons
import bg from '../../assets/img/pray_list_bg.png';
import ornament from '../../assets/img/ornament_line.png';

type Props = {};
type State = {};
function Footer() {
  return <View style={{height: 25}}></View>;
}

class PraysContent extends Component<Props, State> {
  render() {
    return (
      <View style={styles.prays_content}>
        <Image source={bg} style={styles.prays_content_bg} />
        <View style={styles.prays_content_container}>
          <View style={styles.container}>
            <Image
              source={ornament}
              style={{...styles.ornament, transform: [{rotate: '180deg'}]}}
            />
            <Text style={styles.title}>MOLITVOSLOV</Text>
            <Image source={ornament} style={styles.ornament} />
          </View>
          <FlatList
            data={prays}
            renderItem={({item}) => <PrayButton data={item} />}
            keyExtractor={(item) => item.id}
            ListFooterComponent={<Footer />}
          />
        </View>
      </View>
    );
  }
}

export {PraysContent};
