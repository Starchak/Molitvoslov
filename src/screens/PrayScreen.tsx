import React, {Component} from 'react';

import {SafeAreaView, StatusBar, Text} from 'react-native';
import {Menu} from '../components';

import {translate} from '../config/translate';

type Props = {
  route: any;
};

class PrayScreen extends Component<Props> {
  changeLang = () => {
    this.props.route.params.handleLocalizationChange('ua');
    this.forceUpdate();
  };
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <Text>{translate('hello')}</Text>
        <SafeAreaView
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Pray Screen</Text>
          <Menu />
        </SafeAreaView>
      </>
    );
  }
}

export default PrayScreen;
