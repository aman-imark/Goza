import { Dimensions, Platform, PixelRatio } from 'react-native';
export const fontSize = {
  Splash: 35,
  lable: 16,
  txt: 14,
};

export const radious = {
  borderradious: 10,
  radiousfive: 5,
  tagsradious: 50
};
export const paddview = { s: '2%', M: '5%' };


const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function Normalize(size) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}