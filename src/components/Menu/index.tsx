import React, {Component} from 'react';

import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Size} from '../../config/typography';
import {translate} from '../../config/translate';

import {Settings, Overlay} from '..';

import styles from './styles';

// Icons
import bottom_shape_img from '../../assets/img/bottom_shape.png';

import ornament_light_img from '../../assets/img/ornament_light.png';
import ornament_dark_img from '../../assets/img/ornament_dark.png';

import pray_img from '../../assets/img/pray.png';
import pray_active_img from '../../assets/img/pray_active.png';

import menu_img from '../../assets/img/menu.png';
import menu_active_img from '../../assets/img/menu_active.png';

type Props = {
  routeName: string;
  navigation: any;
  changeLang: any;
  changeFontSize: any;
};

type State = {
  praysActive: boolean;
  openSettings: boolean;
  show: boolean;
};

class Menu extends Component<Props, State> {
  state = {
    openSettings: false,
    praysActive: false,
    show: false,
  };

  componentDidMount() {
    if (this.props.routeName === 'Prays') {
      this.setState({praysActive: true});
    }
  }

  navigateToPrays = () => {
    if (this.props.routeName !== 'Prays') {
      this.props.navigation.navigate('Prays', {fix: ['fix']});
    }
  };

  togleSettings = () => {
    let openSettings = this.state.openSettings;
    if (openSettings) {
      openSettings = false;
      this.setState({show: openSettings});
      setTimeout(() => {
        this.setState({openSettings});
      }, 600);
    } else {
      openSettings = true;
      this.setState({openSettings, show: openSettings});
    }
  };

  render() {
    return (
      <>
        <View style={styles.menu_container}>
          {this.state.show ? (
            <Image style={styles.menu_ornament} source={ornament_dark_img} />
          ) : (
            <Image style={styles.menu_ornament} source={ornament_light_img} />
          )}

          <Image style={styles.menu_bg} source={bottom_shape_img} />
          <TouchableOpacity
            style={styles.menu_btn}
            onPress={this.navigateToPrays}>
            {this.state.praysActive ? (
              <Image style={styles.menu_pray_icon} source={pray_active_img} />
            ) : (
              <Image style={styles.menu_pray_icon} source={pray_img} />
            )}
            <Text
              style={
                this.state.praysActive
                  ? [styles.menu_text, styles.menu_text_active, Size(12)]
                  : [styles.menu_text, Size(12)]
              }>
              {translate('prays')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.menu_btn, {marginLeft: 26}]}
            onPress={this.togleSettings}>
            {this.state.show ? (
              <Image
                style={styles.menu_settings_icon}
                source={menu_active_img}
              />
            ) : (
              <Image style={styles.menu_settings_icon} source={menu_img} />
            )}
            <Text
              style={
                this.state.show
                  ? [styles.menu_text, styles.menu_text_active, Size(12)]
                  : [styles.menu_text, Size(12)]
              }>
              {translate('settings')}
            </Text>
          </TouchableOpacity>
        </View>
        {this.state.openSettings ? (
          <>
            <Settings
              changeLang={this.props.changeLang}
              changeFontSize={this.props.changeFontSize}
              togleSettings={this.togleSettings}
              show={this.state.show}
            />
            <Overlay
              togleSettings={this.togleSettings}
              show={this.state.show}
            />
          </>
        ) : null}
      </>
    );
  }
}

export {Menu};
