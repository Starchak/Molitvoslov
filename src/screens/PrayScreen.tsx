import React, {Component} from 'react';

import {SafeAreaView, StatusBar} from 'react-native';
import {Menu, PrayContent} from '../components';

import {changeSize} from '../config/typography';

// import {translate} from '../config/translate';

type Props = {
  route: any;
  navigation: any;
};

type State = {
  openSettings: boolean;
};

class PrayScreen extends Component<Props, State> {
  state = {
    openSettings: false,
  };

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
          <PrayContent data={this.props.route.params.data} />
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

export default PrayScreen;
