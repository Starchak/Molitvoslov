import {PixelRatio, Dimensions, Platform} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 320;

let dSize = 12;

export const changeSize = (newSize: number) => {
  dSize = newSize;
};

export const normalize = (size: number) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export {dSize};
