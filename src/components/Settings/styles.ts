import {Dimensions, StyleSheet} from 'react-native';
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
    marginBottom: 5,
    fontFamily: 'Lato-Bold',
    fontSize: 12,
  },

  btn: {
    marginVertical: 5,
    paddingBottom: 1,
  },

  btn_active: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.red,
  },

  btn_text: {
    color: Colors.red,
    fontFamily: 'Lato-Light',
    fontSize: 12,
  },
});
