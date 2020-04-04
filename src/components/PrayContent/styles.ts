import {StyleSheet} from 'react-native';

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
    width: '100%',
    overflow: 'hidden',
  },
  prays_content_bg: {
    position: 'absolute',
    top: 0,
    width: '102%',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 140,
  },
  title: {
    color: '#ffffff',
    fontFamily: 'Lato',
    fontWeight: '700',
    letterSpacing: 1,
    width: '80%',
    textAlign: 'center',
  },
  sub_title: {
    color: '#ffffff',
    fontFamily: 'Lato',
    fontWeight: '400',
    letterSpacing: 0.6,
    lineHeight: 19,
  },
  main: {
    textAlign: 'center',
    color: '#344252',
    fontFamily: 'Lato-Semibold',
    paddingHorizontal: 25,
    paddingTop: 10,
  },
  pray_bg: {
    position: 'absolute',
    top: 0,
    width: '102%',
  },
});
