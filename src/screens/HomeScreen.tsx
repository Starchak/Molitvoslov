import React, {Component} from 'react';

import {SafeAreaView, StatusBar, Text, TouchableOpacity} from 'react-native';
import {Menu} from '../components';

import {translate} from '../config/translate';

type Props = {
  route: any;
};

class HomeScreen extends Component<Props> {
  changeLang = () => {
    this.props.route.params.handleLocalizationChange('ua');
    this.forceUpdate();
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>{translate('hello')}</Text>
          <TouchableOpacity onPress={this.changeLang}>
            <Text>Change Lang</Text>
          </TouchableOpacity>
          <Menu />
        </SafeAreaView>
      </>
    );
  }
}

export default HomeScreen;
