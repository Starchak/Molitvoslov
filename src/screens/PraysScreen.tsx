import React, {Component} from 'react';

import {SafeAreaView, StatusBar, Text} from 'react-native';

import {translate} from '../config/translate';

class PraysScreen extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Prays Screen</Text>
        </SafeAreaView>
      </>
    );
  }
}

export default PraysScreen;
