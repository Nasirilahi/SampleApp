import React, { Component } from 'react';
import {
    View,
    Animated,
    PanResponder,
    UIManager,
    LayoutAnimation
} from 'react-native'
import Card from '../Card'
import CardHeader from '../CardHeader'
import CardSection from '../CardSection'
import CardEmptySection from '../CardEmptySection'
import {Metrics, Colors} from '../../../Themes'


const horizontalThreshold = 0.25 * Metrics.screenWidth
const swipeAnimationDuration = 300;

export default class CardSwiper extends Component {
    state = {
        pan: new Animated.ValueXY(),
        index: 0
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.data !== this.props.data) {
            this.setState({ index: 0 })
        }
    }

    componentWillMount() {
        this.initializePanResponder()
    }

    initializePanResponder = () => {
        this._panResponder = PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: () => true,

            // Initially, set the value of x and y to 0 (the center of the screen)
            onPanResponderGrant: (e, gestureState) => this.state.pan.setValue({x: 0, y: 0}),
            // onPanResponderMove:(e, {dx, dy}) => this.state.pan.setValue({x: dx, y: dy }) ,
            onPanResponderMove:(e, gestureState) => Animated.event([null, { dx: this.state.pan.x, dy: this.state.pan.y }])(e, gestureState),

            onPanResponderRelease: (e, {dx}) => {
                if(dx > horizontalThreshold){
                    this.swipeCard('right')
                }
                else if(dx < -horizontalThreshold) {
                    this.swipeCard('left')
                }
                else {
                    Animated.spring(this.state.pan, {
                        toValue: { x: 0, y: 0 },
                        friction: 4,
                    }).start()
                }
            }
        });
    }

    swipeCard = (direction) => {
        const x = direction === 'right' ? Metrics.screenWidth : -Metrics.screenWidth
        Animated.timing(this.state.pan, {
            toValue: { x, y: 0 },
            duration: swipeAnimationDuration
        }).start(() => this.onSwipeComplete(direction))
    }

    onSwipeComplete = (direction) => {
        const { onSwipeLeft, onSwipeRight, data } = this.props
        const item = data[this.state.index]
        const x = direction === 'right' ? Metrics.screenWidth : -Metrics.screenWidth
        direction === 'right' ? onSwipeRight && onSwipeRight(item) : onSwipeLeft && onSwipeLeft(item)
        this.state.pan.setValue({ x: 0, y: 0 })
        this.setState({ index: this.state.index + 1 })
    }

    componentWillUpdate() {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)
        LayoutAnimation.spring()
    }

    interpolateRotation = () =>
        this.state.pan.x.interpolate({
            inputRange: [-Metrics.screenWidth * 1.5, 0, Metrics.screenWidth * 1.5],
            outputRange:['-60deg', '0deg', '60deg'],
        })

    renderEmptyView() {
        return (
            <Card  style={{position: 'relative'}}>
                <CardHeader text={'All Done!'} textStyle={{textAlign: 'center', color: Colors.darkgrey, fontWeight: '900' }} />
                <CardEmptySection  text={'No more card is remaining'} />
            </Card>
        );
    }
    renderCards = () =>{
        const {index} = this.state
        let {data} = this.props
        if (this.state.index >= data.length) {
            return this.renderEmptyView();
        }
        return(
            data.map((dataItem, i) =>{
                let { pan } = this.state;
                let rotate = this.interpolateRotation()
                let cardStyle = [pan.getLayout(), {transform: [{rotate}]}]
                if (i < index) { return null }

                if (i === index) {
                    return (
                        <Animated.View key={i}  style={[cardStyle,{ zIndex: 99, position: 'absolute' }]} {...this._panResponder.panHandlers}>
                            <Card>
                                <CardHeader text={dataItem.name} textStyle={{textAlign: 'center'}} />
                                <CardSection item={dataItem} />
                            </Card>
                        </Animated.View>
                    )
                }
                return(
                    <Animated.View  key={i} style={[{ top: 10 * (i - index), zIndex: 5, position: 'absolute' }]}>
                        <Card>
                            <CardHeader text={dataItem.name} textStyle={{textAlign: 'center'}} />
                            <CardSection item={dataItem} />
                        </Card>
                    </Animated.View>
                )
            }).reverse()
        )
    }

    render() {
        return(
            <View>
                {
                    this.renderCards()
                }
            </View>
        )
    }
}
