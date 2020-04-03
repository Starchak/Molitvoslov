import {StyleSheet} from 'react-native';
import {dSize, normalize} from '../../config/typography';
import Colors from '../../config/colors';

export default StyleSheet.create({
  menu_container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 67,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
  },

  menu_bg: {
    position: 'absolute',
    width: '100%',
  },

  menu_ornament: {
    position: 'absolute',
    width: '100%',
    bottom: 25,
  },

  menu_btn: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  menu_pray_icon: {
    width: 28,
    height: 25,
  },

  menu_settings_icon: {
    width: 24,
    height: 22,
  },

  menu_text: {
    marginTop: 4,
    fontSize: normalize(dSize),
    color: Colors.red,
  },
  menu_text_active: {
    color: Colors.gold,
  },
});
