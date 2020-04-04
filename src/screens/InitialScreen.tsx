import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {Image, StyleSheet} from 'react-native';

import splash_screen from '../assets/img/splash_screen.png';

import {changeSize} from '../config/typography';
import {navigate} from "../config/nav";

type Props = {
  navigation: any;
  route: any;
};

class InitialScreen extends Component<Props> {
  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const lang = await AsyncStorage.getItem('@lang');
      if (lang !== null) {
        this.changeLang(lang);
        const size = await AsyncStorage.getItem('@size');
        if (size !== null) {
          changeSize(size);
        }
        // this.props.navigation.navigate('Prays');
        navigate({name: 'Prays'});
      } else {
        this.changeLang();
        // this.props.navigation.navigate('Prays');
        navigate({name: 'Prays'});
      }
    } catch (e) {
      this.changeLang();
      // this.props.navigation.navigate('Prays');
      navigate({name: 'Prays'});
    }
  };

  changeLang = (lang?: string) => {
    this.props.route.params.handleLocalizationChange(lang);
  };

  render() {
    return <Image source={splash_screen} style={styles.image} />;
  }
}

const styles = StyleSheet.create({
  image: {
    height: '102%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});

export default InitialScreen;
