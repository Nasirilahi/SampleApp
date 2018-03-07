import React, { Component } from 'react';
import {createRootNavigator} from './components/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const Layout = createRootNavigator();
      return(
            <Provider store={store}>
              <Layout />
            </Provider>
      );
  }
}


