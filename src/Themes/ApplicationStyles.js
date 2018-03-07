import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

const ApplicationStyles = {
  screen: {
    emptyContainer: {
      height: 300,
      marginHorizontal: Metrics.marginFull,
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: Colors.transparent
    },
    emptyText: {
      ...Fonts.style.caption,
      color: Colors.sm_darkgrey
    },
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.white
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.transparent
    },
    titleText: {
      ...Fonts.style.h1,
      color: Colors.text
    },
    headerContainer: {
      marginHorizontal: Metrics.marginFull,
      marginTop: Metrics.marginSmall
    },
    seperator: {
      marginHorizontal: Metrics.marginFull,
      flex: 1,
      marginTop: Metrics.marginFull,
      height: 1,
      backgroundColor: Colors.sm_coolgrey
    }
  }
}

export default ApplicationStyles
