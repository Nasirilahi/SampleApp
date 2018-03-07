import React from "react-native";
import Dimensions from 'Dimensions';

// Precalculate Device Dimensions for better performance
const { width, height } = Dimensions.get('window');

// Calculating ratio from iPhone breakpoints
const ratioX = width < 375 ? (width < 320 ? 0.75 : 0.875) : 1 ;
const ratioY = height < 568 ? (height < 480 ? 0.75 : 0.875) : 1 ;

// We set our base font size value
const base_unit = 16;

// We're simulating EM by changing font size according to Ratio
const unit = base_unit * ratioX;

// We add an em() shortcut function 
function em(value) {
  return unit * value;
}

// Then we set our styles with the help of the em() function
export default Style = {
  // GENERAL
  DEVICE_WIDTH: width,
  DEVICE_HEIGHT: height,
  RATIO_X: ratioX,
  RATIO_Y: ratioY,
  UNIT: em(1),
  // FONT
  FONT_SIZE: em(1),
  FONT_SIZE_SMALLER: em(0.75),
  FONT_SIZE_SMALL: em(0.875),
  FONT_SIZE_LARGE: em(1.25),
  FONT_SIZE_TITLE: em(1.70),
};
