import {Platform, StyleSheet, Dimensions} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');

export default StyleSheet.create({
  prays_content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 67,
  },
  prays_content_container: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    position: 'absolute',
    zIndex: -2,
    flex: 1,
    marginTop: 113,
    top: -10,
    paddingTop: 7,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  scroll_view: {
    top: 10,
    width: SCREEN_WIDTH,
  },
  player_container: {
    width: SCREEN_WIDTH,
    height: 75,
    backgroundColor: '#fff',
    position: 'absolute',
    left: 0,
    zIndex: 11,
    top: 100,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
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
    textAlign: 'center',
    color: '#344252',
    fontFamily: 'Lato-Semibold',
    paddingHorizontal: 25,
    paddingTop: 200,
  },
  pray_bg: {
    position: 'absolute',
    width: '102%',
  },
});
