import {StyleSheet} from 'react-native';
import {dSize, normalize} from '../../config/typography';

export default StyleSheet.create({
  prays_content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 67,
  },
  prays_content_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 113,
    paddingTop: 7,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: '#ffffff',
    width: 375,
    overflow: 'hidden',
  },
  prays_content_bg: {
    position: 'absolute',
    top: 0,
    width: '102%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 140,
  },
  title: {
    color: '#ffffff',
    fontFamily: 'Lato',
    fontWeight: '700',
    letterSpacing: 1,
  },
  main: {
    textAlign: 'center',
    color: '#344252',
    fontFamily: 'Lato-Semibold',
  },
  pray_bg: {
    position: 'absolute',
    top: 0,
    width: '102%',
  },
});
