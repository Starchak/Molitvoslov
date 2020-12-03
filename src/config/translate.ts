import memoize from 'lodash.memoize';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import {I18nManager} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

let currentLang = '';

const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  ru: () => require('../assets/translations/ru.json'),
  ua: () => require('../assets/translations/ua.json'),
  en: () => require('../assets/translations/en.json'),
  hy: () => require('../assets/translations/hy.json'),
  ro: () => require('../assets/translations/ro.json'),
};

const translate = memoize(
  (key, config?) => {
    return i18n.t(key, config);
  },
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

const setI18nConfig = (setLang?: string) => {
  // fallback if no available language fits
  const fallback = {languageTag: 'ru', isRTL: false};
  let userLang = null;

  switch (setLang) {
    case 'ru':
      userLang = {languageTag: 'ru', isRTL: false};
      break;
    case 'ua':
      userLang = {languageTag: 'ua', isRTL: false};
      break;
    case 'en':
      userLang = {languageTag: 'en', isRTL: false};
      break;
    case 'hy':
      userLang = {languageTag: 'hy', isRTL: false};
      break;
    case 'ro':
      userLang = {languageTag: 'ro', isRTL: false};
      break;
    default:
  }

  const {languageTag, isRTL} =
    userLang ||
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  currentLang = languageTag;
  storeData(languageTag);

  // clear translation cache
  translate.cache.clear!();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.translations = {
    [languageTag]: (translationGetters as any)[languageTag](),
  };
  i18n.locale = languageTag;
};

const storeData = async (lang: string) => {
  try {
    await AsyncStorage.setItem('@lang', lang);
  } catch (e) {
    // saving error
  }
};

export {setI18nConfig, translate, currentLang};
