import {Dimensions, StyleSheet} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

export default StyleSheet.create({
  pray_btn: {
    width: SCREEN_WIDTH - 20,
    height: 115,
    shadowColor: 'rgba(0, 0, 0, 0.4)',
    shadowOffset: {width: 3, height: 0},
    shadowRadius: 6,
    borderRadius: 20,
    borderColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: 7,
  },
  pray_btn_active: {
    width: SCREEN_WIDTH - 20,
    height: 115,
    shadowColor: '#f1ea90',
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 10,
    borderRadius: 20,
    borderColor: '#f5ebd6',
    borderStyle: 'solid',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: 7,
  },
  pray_btn_img: {
    position: 'absolute',
  },
  pray_btn_text: {
    width: '70%',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 2,
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
    fontWeight: '700',
    letterSpacing: 1,
  },
});
