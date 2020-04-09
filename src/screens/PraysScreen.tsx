import React, {Component} from 'react';

import {SafeAreaView, StatusBar} from 'react-native';
import {Menu, PraysContent} from '../components';

import {changeSize} from '../config/typography';

type Props = {
  route: any;
  navigation: any;
};

type State = {};

class PraysScreen extends Component<Props, State> {
  state = {};

  changeLang = (lang: string) => {
    this.props.route.params.handleLocalizationChange(lang);
    this.forceUpdate();
  };

  changeFontSize = (size: string) => {
    changeSize(size);
    this.forceUpdate();
  };

  render() {
    return (
      <>
        <StatusBar
          backgroundColor="transparent"
          translucent
          barStyle="light-content"
        />

        <SafeAreaView
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <PraysContent />
          <Menu
            routeName={this.props.route.name}
            navigation={this.props.navigation}
            changeLang={this.changeLang}
            changeFontSize={this.changeFontSize}
          />
        </SafeAreaView>
      </>
    );
  }
}

export default PraysScreen;
