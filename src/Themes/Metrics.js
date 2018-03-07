import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window')

// Used via Metrics.baseMargin
const metrics = {
  marginFull: (width === 320) ? 20 : 24,
  marginSmall: (width === 320) ? 10 : 14,
  marginTiny: (width === 320) ? 3 : 5,
  inAppTopMargin: 80,
  inAppBottomPadding: 60,
  section: 25,
  buttonHeight: (width === 320) ? 35 : 45,
  baseMargin: (width === 320) ? 5 : 10,
  doubleBaseMargin: 20,
  textMargin: 35,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  century: 100,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  buttonRadius: 4,
  icons: {
    tiny: (width === 320) ? 10 : 15,
    small: (width === 320) ? 15 : 20,
    medium: (width === 320) ? 20 : 30,
    large: (width === 320) ? 30 : 45,
    xl: 50
  },
  images: {
    small: (width === 320) ? 10 : 20,
    medium: (width === 320) ? 30 : 40,
    large: (width === 320) ? 60 : 80,
    logo: (width === 320) ? 170 : 200
  }
}

export default metrics
