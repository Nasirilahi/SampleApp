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
    }
  }
}

export default ApplicationStyles
