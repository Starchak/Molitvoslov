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
    justifyContent: 'space-around',
  },
  prays_content_bg: {
    position: 'absolute',
    top: 0,
    width: '102%',
  },
});
