
import Metrics from './Metrics'
import Colors from './Colors'
const type = {
  base: 'Avenir-Book',
  bold: 'Avenir-Black',
  emphasis: 'HelveticaNeue-Italic',
}

const size = {
  title: Metrics.screenWidth <= 320 ? 21 : 25,
  h1: Metrics.screenWidth <= 320 ? 16 : 20,
  h2: Metrics.screenWidth <= 320 ? 16 : 20,
  subheading: Metrics.screenWidth <= 320 ? 16 : 20,
  body: Metrics.screenWidth <= 320 ? 14 : 18,
  caption: Metrics.screenWidth <= 320 ? 14 : 18,
  captionSmall: Metrics.screenWidth <= 320 ? 12 : 15,
  small: Metrics.screenWidth <= 320 ? 12 : 15,
  tiny: Metrics.screenWidth <= 320 ? 10 : 12
}

const style = {
  title: {
    fontFamily: type.bold,
    fontSize: size.title,
    color: Colors.darkgrey
  },
  h1: {
    fontFamily: type.bold,
    fontSize: size.h1,
    color: Colors.darkgrey
  },
  h2: {
    fontFamily: type.bold,
    fontSize: size.h2,
    color: Colors.darkgrey
  },
  subheading: {
    fontFamily: type.base,
    fontSize: size.subheading,
    color: Colors.darkgrey
  },
  body: {
    fontFamily: type.base,
    fontSize: size.body,
    color: Colors.darkgrey
  },
  caption: {
    fontFamily: type.base,
    fontSize: size.caption,
    color: Colors.darkgrey
  },
  captionSmall: {
    fontFamily: type.base,
    fontSize: size.captionSmall,
    color: Colors.darkgrey
  },
  bold: {
    fontFamily: type.bold,
    fontSize: size.body,
    color: Colors.darkgrey
  },
  regular: {
    fontFamily: type.base,
    fontSize: size.body,
    color: Colors.darkgrey
  },
  smallBold: {
    fontFamily: type.bold,
    fontSize: size.small,
    color: Colors.darkgrey
  },
  smallRegular: {
    fontFamily: type.base,
    fontSize: size.small,
    color: Colors.darkgrey
  },
  smallLightItalic: {
    fontFamily: type.emphasis,
    fontSize: size.small,
    color: Colors.darkgrey
  },
  tinyBold: {
    fontFamily: type.bold,
    fontSize: size.tiny,
    color: Colors.darkgrey
  },
  tinyRegular: {
    fontFamily: type.base,
    fontSize: size.tiny,
    color: Colors.darkgrey
  },
  tinyLightItalic: {
    fontFamily: type.emphasis,
    fontSize: size.tiny,
    color: Colors.darkgrey
  }
}

export default {
  type,
  size,
  style
}
