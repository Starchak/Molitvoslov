import {Dimensions, StyleSheet} from 'react-native';

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');

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
    justifyContent: 'space-around',
    position: 'relative',
    top: 15,
    paddingHorizontal: 10,
    paddingTop: 25,
  },
  prays_content_bg: {
    height: SCREEN_HEIGHT,
    alignSelf: 'center',
    resizeMode: 'contain',
    position: 'absolute',
    top: -20,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 35,
    marginTop: 45,
  },
  title: {
    width: 'auto',
    textShadowColor: 'rgba(0, 0, 0, 0.54)',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 2,
    color: '#ffffff',
    fontFamily: 'BaskervilleCyrillic-Bold',
    letterSpacing: 1.5,
    fontSize: 30,
  },
  ornament: {
    width: SCREEN_WIDTH * 0.9,
  },
});
