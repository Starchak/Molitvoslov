import {StyleSheet, Dimensions} from 'react-native';
// import {dSize, normalize} from '../../config/typography';
// import Colors from '../../config/colors';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

export default StyleSheet.create({
  settings: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: SCREEN_HEIGHT / 3,
    backgroundColor: '#fff',
    borderRadius: 24,
    zIndex: 2,
  },

  settings_block: {},

  lang_block: {},

  font_block: {},
});
