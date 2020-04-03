import {PixelRatio, Dimensions, Platform} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 320;

let dSize = 1;
let currentSize = 'middle';

export const changeSize = (newSize: string, callback: any) => {
  currentSize = newSize;
  console.log(newSize);
  switch (currentSize) {
    case 'middle':
      dSize = 1;
      break;
    case 'large':
      dSize = 1.2;
      break;
  }
  console.log(dSize);
  return callback();
};

export const normalize = (size: number) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

const Size = (size: number) => {
  return {fontSize: normalize(size * dSize)};
};

export {dSize, currentSize, Size};
