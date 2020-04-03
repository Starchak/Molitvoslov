import React, {Component} from 'react';

import {SafeAreaView, StatusBar, Text} from 'react-native';

import {translate} from '../config/translate';

class PrayScreen extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Pray Screen</Text>
        </SafeAreaView>
      </>
    );
  }
}

export default PrayScreen;
