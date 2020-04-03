import {StyleSheet} from 'react-native';
import {dSize, normalize} from '../../config/typography';

export default StyleSheet.create({
  pray_btn: {
    width: 376,
    height: 115,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderStyle: 'solid',
    shadowColor: '#f1ea90',
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  pray_btn_img: {
    position: 'absolute',
  },
  pray_btn_text: {
    width: 117,
    height: 31,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 2,
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1,
    lineHeight: 30,
  },
});
