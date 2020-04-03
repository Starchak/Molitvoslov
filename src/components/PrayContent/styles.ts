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
    paddingTop: 93,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: '#ffffff',
    width: 375,
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
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1,
  }
});
