import React from 'react';
import { StackNavigator } from 'react-navigation';
import Routes from './routes/routes';

// we can also configure this function for returning initial screen on checking whether user token is persisted or not.
export const createRootNavigator = () => {
  return StackNavigator(
    {
       ...Routes
    },
    {
        mode: "modal",
        initialRouteName:  "Home"
    }
  );
};