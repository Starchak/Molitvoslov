import {StyleSheet} from 'react-native';
import {dSize, normalize} from '../../config/typography';

export default StyleSheet.create({
  container: {
    paddingTop: 72,
    paddingBottom: 47,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    width: 'auto',
    height: 37,
    textShadowColor: 'rgba(0, 0, 0, 0.54)',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 2,
    color: '#ffffff',
    fontFamily: 'BaskervilleCyrillic-Bold',
    fontSize: 30,
    letterSpacing: 1.5,
    lineHeight: 35,
  },
  ornament: {
    width: 232,
    height: 26,
  },
});
