import {StyleSheet} from 'react-native';
import {dSize, normalize} from '../../config/typography';

export default StyleSheet.create({
  title: {
    width: 244,
    height: 37,
    textShadowColor: 'rgba(0, 0, 0, 0.54)',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 2,
    color: '#ffffff',
    // fontFamily: 'Baskerville Cyrillic',
    fontSize: 30,
    fontWeight: '700',
    letterSpacing: 1.5,
    lineHeight: 19,
  },
});
