import React, {Component} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import {translate} from '../../config/translate';

import styles from './styles';

type Props = {};
type State = {};

class Settings extends Component<Props, State> {
  changeLang = (lang: string) => {
    console.log(lang);
  };

  changeFontSize = (isRegular: boolean) => {
    console.log(isRegular);
  };

  render() {
    return (
      <View style={styles.settings}>
        <View style={[styles.settings_block, styles.lang_block]}>
          <Text style={styles.title}>{translate('selectLang')}</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.changeLang('ru')}>
            <Text style={styles.btn_text}>{translate('ru')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.changeLang('ua')}>
            <Text style={styles.btn_text}>{translate('ua')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btn_text}>{translate('en')}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        <View style={[styles.settings_block, styles.font_block]}>
          <Text style={styles.title}>{translate('fontSize')}</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.changeFontSize(true)}>
            <Text style={styles.btn_text}>{translate('middle')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.changeFontSize(false)}>
            <Text style={styles.btn_text}>{translate('large')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export {Settings};
