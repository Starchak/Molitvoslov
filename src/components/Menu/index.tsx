import React, {Component} from 'react';

import {View, Text, TouchableOpacity, Image} from 'react-native';
import {translate} from '../../config/translate';

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
  openSettings: boolean;
  togleSettings: any;
};
type State = {
  praysActive: boolean;
};

class Menu extends Component<Props, State> {
  state = {
    praysActive: false,
  };

  componentDidMount() {
    if (this.props.routeName === 'Prays') {
      this.setState({praysActive: true});
    }
  }

  navigateToPrays = () => {
    if (this.props.routeName !== 'Prays') {
      this.props.navigation.navigate('Prays');
    }
  };

  togleSettings = () => {
    this.props.togleSettings();
  };

  render() {
    return (
      <View style={styles.menu_container}>
        {this.props.openSettings ? (
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
                ? [styles.menu_text, styles.menu_text_active]
                : styles.menu_text
            }>
            {translate('prays')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menu_btn, {marginLeft: 26}]}
          onPress={this.togleSettings}>
          {this.props.openSettings ? (
            <Image style={styles.menu_settings_icon} source={menu_active_img} />
          ) : (
            <Image style={styles.menu_settings_icon} source={menu_img} />
          )}
          <Text
            style={
              this.props.openSettings
                ? [styles.menu_text, styles.menu_text_active]
                : styles.menu_text
            }>
            {translate('settings')}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export {Menu};
