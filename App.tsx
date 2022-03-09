/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import {
   AppState,
   Platform,
   StyleSheet,
 } from 'react-native';
 import { createStore, applyMiddleware } from 'redux'
 import { Provider } from 'react-redux'
 import rootReducer from './core';
 import thunk from 'redux-thunk';
 import { AppearanceProvider, Appearance } from 'react-native-appearance';
 import AppNavigator from './AppNavigator'

 import SplashScreen from 'react-native-splash-screen';

 
 export const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
 
 export default class App extends Component {
   navigator: any;
   state = {
     appState: AppState.currentState,
     showSyncButton: false,
   };
  
 
   componentDidMount() {
     SplashScreen.hide()
     
   }
 
   render() {
     console.disableYellowBox = true
     return (
        <AppearanceProvider>
        <Provider store={store}>
          <AppNavigator ref={nav => { this.navigator = nav; }} />
        </Provider>
      </AppearanceProvider>
     );
   };
 }
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   }
 });
 
 