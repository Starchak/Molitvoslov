import React, {Component} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import {translate, currentLang} from '../../config/translate';
import {currentSize, Size} from '../../config/typography';

import styles from './styles';

type Props = {
  changeLang: any;
  changeFontSize: any;
};

type State = {};

class Settings extends Component<Props, State> {
  changeLang = (lang: string) => {
    this.props.changeLang(lang);
  };

  changeFontSize = (size: string) => {
    this.props.changeFontSize(size);
  };

  render() {
    return (
      <View style={styles.settings}>
        <View style={[styles.settings_block, styles.lang_block]}>
          <Text style={[styles.title, Size(12)]}>
            {translate('selectLang')}
          </Text>
          <TouchableOpacity
            style={
              currentLang === 'ru'
                ? [styles.btn, styles.btn_active]
                : styles.btn
            }
            onPress={() => this.changeLang('ru')}>
            <Text style={[styles.btn_text, Size(12)]}>{translate('ru')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              currentLang === 'ua'
                ? [styles.btn, styles.btn_active]
                : styles.btn
            }
            onPress={() => this.changeLang('ua')}>
            <Text style={[styles.btn_text, Size(12)]}>{translate('ua')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              currentLang === 'en'
                ? [styles.btn, styles.btn_active]
                : styles.btn
            }
            onPress={() => this.changeLang('en')}>
            <Text style={[styles.btn_text, Size(12)]}>{translate('en')}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        <View style={[styles.settings_block, styles.font_block]}>
          <Text style={[styles.title, Size(12)]}>{translate('fontSize')}</Text>
          <TouchableOpacity
            style={
              currentSize === 'middle'
                ? [styles.btn, styles.btn_active]
                : styles.btn
            }
            onPress={() => this.changeFontSize('middle')}>
            <Text style={[styles.btn_text, Size(12)]}>
              {translate('middle')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              currentSize === 'large'
                ? [styles.btn, styles.btn_active]
                : styles.btn
            }
            onPress={() => this.changeFontSize('large')}>
            <Text style={[styles.btn_text, Size(12)]}>
              {translate('large')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export {Settings};
