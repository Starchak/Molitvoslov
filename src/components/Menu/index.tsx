import React, {Component} from 'react';

import {View, Text, TouchableOpacity, Image} from 'react-native';
import {translate} from '../../config/translate';

import styles from './styles';

// Icons
import bottom_shape_img from '../../assets/img/bottom_shape.png';
import pray_img from '../../assets/img/pray.png';
import pray_active_img from '../../assets/img/pray_active.png';
import menu_img from '../../assets/img/menu.png';
import menu_active_img from '../../assets/img/menu_active.png';

type Props = {};
type State = {
  praysActive: boolean;
  settingsActive: boolean;
};

class Menu extends Component<Props, State> {
  state = {
    praysActive: true,
    settingsActive: false,
  };

  render() {
    return (
      <View style={styles.menu_container}>
        <Image style={styles.menu_bg} source={bottom_shape_img} />
        <TouchableOpacity style={styles.menu_btn}>
          {this.state.praysActive ? (
            <Image style={styles.menu_pray_icon} source={pray_active_img} />
          ) : (
            <Image style={styles.menu_pray_icon} source={pray_img} />
          )}
          <Text style={styles.menu_text}>{translate('prays')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menu_btn, {marginLeft: 26}]}>
          {this.state.settingsActive ? (
            <Image style={styles.menu_settings_icon} source={menu_active_img} />
          ) : (
            <Image style={styles.menu_settings_icon} source={menu_img} />
          )}
          <Text style={styles.menu_text}>{translate('settings')}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export {Menu};
