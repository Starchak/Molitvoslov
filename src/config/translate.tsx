import memoize from 'lodash.memoize';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import {I18nManager} from 'react-native';

const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  ru: () => require('../translations/ru.json'),
  ua: () => require('../translations/ua.json'),
};

const translate = memoize(
  (key, config?) => {
    return i18n.t(key, config);
  },
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

const setI18nConfig = (setLang?: string) => {
  console.log('call ', setLang);
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
    default:
  }

  const {languageTag, isRTL} =
    userLang ||
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

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

export {setI18nConfig, translate};
