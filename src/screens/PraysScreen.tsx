import React, {Component} from 'react';

import {SafeAreaView, StatusBar, Text} from 'react-native';
import {Menu, Settings, Overlay} from '../components';

import {translate} from '../config/translate';

type Props = {
  route: any;
  navigation: any;
};

type State = {
  openSettings: boolean;
};

class PraysScreen extends Component<Props, State> {
  state = {
    openSettings: false,
  };

  togleSettings = () => {
    this.setState({openSettings: !this.state.openSettings});
  };

  changeLang = () => {
    this.props.route.params.handleLocalizationChange('ua');
    this.forceUpdate();
  };

  render() {
    console.log(this.props);
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>{translate('hello')}</Text>
          <Menu
            routeName={this.props.route.name}
            navigation={this.props.navigation}
            togleSettings={this.togleSettings}
            openSettings={this.state.openSettings}
          />
          {this.state.openSettings ? (
            <>
              <Settings />
              <Overlay />
            </>
          ) : null}
        </SafeAreaView>
      </>
    );
  }
}

export default PraysScreen;
