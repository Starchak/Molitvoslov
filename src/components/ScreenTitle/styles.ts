import {StyleSheet} from 'react-native';
import {dSize, normalize} from '../../config/typography';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
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
    width: 232,
    height: 26,
  },
});
