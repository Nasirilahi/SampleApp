import React, { Component } from 'react';
import { View } from 'react-native';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import styles from './styles'
import {getData} from '../../../actions/homeActions'
import CardSwiper from '../../common/CardSwiper'
import withSpinner from '../../common/HOCs/withSpinner';
const CardSwiperWithSpinner = withSpinner(CardSwiper);

class HomeScreen extends Component {
    static navigationOptions = {
      header:null
    };

    componentDidMount(){
        this.props.getDataList();
    }

    render() {
        const {data, isLoading} = this.props
        return(
            <View style={[styles.mainContainer, styles.container]}>
                <CardSwiperWithSpinner
                    data={data}
                    isLoading={isLoading}
                />
            </View>
         );
    }
}


// bind all action creators and get them in props
const mapDispatchToProps = (dispatch) => ({
    getDataList: bindActionCreators(getData, dispatch)
})

// get state from store and destructure only required state values
const mapStateToProps = ({homeReducer: {data, isLoading}}) =>({data, isLoading})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
