import {Dimensions, StyleSheet} from 'react-native';

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');
const ratio = SCREEN_WIDTH / SCREEN_HEIGHT;

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
    paddingTop: 25,
  },
  prays_content_bg: {
    height: SCREEN_HEIGHT + 25,
    alignSelf: 'center',
    resizeMode: 'cover',
    position: 'absolute',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: ratio > 0.5 ? 10 : 35,
    marginTop: ratio > 0.5 ? 5 : 45,
  },
  title: {
    width: 'auto',
    textShadowColor: 'rgba(0, 0, 0, 0.54)',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 2,
    color: '#ffffff',
    fontFamily: 'times',
    letterSpacing: 1.5,
    fontSize: 30,
  },
  ornament: {
    width: SCREEN_WIDTH * 0.9,
  },
});
