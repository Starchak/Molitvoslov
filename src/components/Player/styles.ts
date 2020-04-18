import {Dimensions, StyleSheet} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

export default StyleSheet.create({
  player: {
    width: SCREEN_WIDTH * 0.8,
    height: 58,
    borderRadius: 12,
    borderColor: '#e5c077',
    borderStyle: 'solid',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  play: {
    width: 40,
  },
  play_img: {
    height: 40,
    width: 40,
  },
  play_bg: {
    height: '70%',
    position: 'absolute',
    backgroundColor: '#000000',
  },
});
