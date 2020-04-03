import {StyleSheet, Dimensions} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  title: {
    width: 'auto',
    textShadowColor: 'rgba(0, 0, 0, 0.54)',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 2,
    color: '#ffffff',
    fontFamily: 'BaskervilleCyrillic-Bold',
    letterSpacing: 1.5,
  },
  ornament: {
    width: SCREEN_WIDTH * 0.9,
  },
});
