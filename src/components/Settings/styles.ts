import {StyleSheet, Dimensions} from 'react-native';
import {dSize, normalize} from '../../config/typography';
import Colors from '../../config/colors';

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 9,
    paddingBottom: 87,
  },

  settings_block: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 14,
  },

  lang_block: {},

  font_block: {},

  line: {
    width: 1,
    height: '100%',
    backgroundColor: '#707070',
  },

  title: {
    color: Colors.red,
    fontSize: normalize(dSize),
    fontWeight: 'bold',
    marginBottom: 5,
  },

  btn: {
    marginVertical: 5,
  },

  btn_text: {
    color: Colors.red,
    fontSize: normalize(dSize),
  },
});
