import React, { Component } from 'react';
import { View } from 'react-native';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import styles from './styles'
import {getData} from '../../../actions/homeActions'
import CardList from '../../common/CardList'
import withSpinner from '../../common/HOCs/withSpinner';
const CardListWithSpinner = withSpinner(CardList);

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
                <CardListWithSpinner
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
