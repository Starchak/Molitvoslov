import React, {Component} from 'react';

import {SafeAreaView, StatusBar} from 'react-native';
import {Menu, Overlay, PrayContent, Settings} from '../components';

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

  togleSettings = () => {
    this.setState({openSettings: !this.state.openSettings});
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
        <StatusBar barStyle="light-content" />
        <SafeAreaView
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <PrayContent />
          <Menu
            routeName={this.props.route.name}
            navigation={this.props.navigation}
            togleSettings={this.togleSettings}
            openSettings={this.state.openSettings}
          />
          {this.state.openSettings ? (
            <>
              <Settings
                changeLang={this.changeLang}
                changeFontSize={this.changeFontSize}
              />
              <Overlay togleSettings={this.togleSettings} />
            </>
          ) : null}
        </SafeAreaView>
      </>
    );
  }
}

export default PrayScreen;
