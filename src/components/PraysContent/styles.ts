import {StyleSheet, Dimensions} from 'react-native';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

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
  },
  prays_content_bg: {
    height: SCREEN_HEIGHT,
    alignSelf: 'center',
    resizeMode: 'contain',
    position: 'absolute',
    top: -20,
  },
});
