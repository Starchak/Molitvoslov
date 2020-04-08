import React, {Component} from 'react';

import {Animated, Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {currentLang, translate} from '../../config/translate';
import {currentSize, Size} from '../../config/typography';

import styles from './styles';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

type Props = {
  changeLang: any;
  changeFontSize: any;
  togleSettings: any;
  show: boolean;
};

type State = {
  showAnim: any;
};

class Settings extends Component<Props, State> {
  state = {
    showAnim: new Animated.Value(-(SCREEN_HEIGHT / 3 + 87)),
  };
  changeLang = (lang: string) => {
    this.props.changeLang(lang);
    this.props.togleSettings();
  };

  changeFontSize = (size: string) => {
    this.props.changeFontSize(size);
  };

  componentDidMount() {
    this.show();
  }

  componentDidUpdate() {
    if (this.props.show) {
      this.show();
    } else {
      this.hide();
    }
  }

  show = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.showAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  hide = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(this.state.showAnim, {
      toValue: -(SCREEN_HEIGHT / 3 + 87),
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  render() {
    return (
      <Animated.View style={[styles.settings, {bottom: this.state.showAnim}]}>
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
      </Animated.View>
    );
  }
}

export {Settings};
