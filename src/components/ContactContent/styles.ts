import {Platform, StyleSheet, Dimensions} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
// const ratio = SCREEN_WIDTH / SCREEN_HEIGHT;

export default StyleSheet.create({
  contact_content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  prays_content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 67,
  },
  prays_content_container: {
    height: SCREEN_HEIGHT,
    position: 'absolute',
    flex: 1,
    marginTop: 113,
    paddingTop: 7,
    top: -10,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: '#ffffff',
    width: '100%',
    overflow: 'hidden',
  },
  prays_content_bg: {
    position: 'absolute',
    width: '102%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
    ...ifIphoneX(
      {
        minHeight: 250,
        top: Platform.OS === 'ios' ? -45 : -10,
      },
      {
        minHeight: 150,
        top: Platform.OS === 'ios' ? -20 : -10,
      },
    ),
  },
  title: {
    color: '#ffffff',
    fontFamily: 'Lato',
    fontWeight: '700',
    letterSpacing: 1,
    width: '80%',
    textAlign: 'center',
    fontSize: 20,
  },
  sub_title: {
    color: '#ffffff',
    fontFamily: 'Lato',
    fontWeight: '400',
    letterSpacing: 0.6,
    lineHeight: 19,
    fontSize: 12,
  },
  main: {
    color: '#344252',
    fontFamily: 'Lato-Semibold',
    fontSize: 18,
  },
  link: {
    color: '#2A5DB0',
    fontFamily: 'Lato-Semibold',
    fontSize: 15,
    lineHeight: 25,
  },
  p: {
    paddingTop: 15,
    textAlign: 'center',
    paddingHorizontal: 35,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  pray_bg: {
    position: 'absolute',
    top: 0,
    width: '102%',
  },
});
