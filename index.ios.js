/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  NavigatorIOS,
  ScrollView,
  ListView,
  TouchableOpacity
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import Home from './app/Home';

import * as Reducers from './app/reducers/reducers'

const logger = createLogger();

let store = createStore(combineReducers(Reducers), applyMiddleware(logger, thunk));

export default class AwesomeProject extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <NavigatorIOS
          initialRoute={{
            component: Home,
            title: "Awesome Project"
          }}
          style={{flex: 1}}>

        </NavigatorIOS>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
