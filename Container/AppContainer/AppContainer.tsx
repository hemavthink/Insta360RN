/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import { Text, StyleSheet, NativeModules, NativeEventEmitter, Platform, TouchableOpacity, View } from 'react-native';
 import { connect } from 'react-redux';
 import AppStore from '../../core/AppStore';
 
 interface AppProps{
     
 }
 
 interface AppState{
     showConnectButton: boolean
 }
 
 class AppContainer extends Component<AppProps,AppState> {
     state: AppState
 
 
     constructor(props: any) {
         super(props)
         this.state = {
             showConnectButton: true
         }
     }
 
 
     componentDidMount() {
         
     }
 
     componentWillUnmount() {
 
     }
 
     connectCamera = () => {
 
     }
 
 
 
 
     render() {
         return (
             <>
 
                 <View style={styles.container}>
 
 
                     {
                         this.state.showConnectButton ?
                             <TouchableOpacity
                                 testID="login"
                                 accessibilityLabel="login"
                                 onPress={() => this.connectCamera()}
                                 style={styles.submitButton} >
                                 <Text style={styles.submitButtonText}>Connect</Text>
                             </TouchableOpacity> : <>
 
 
                             </>
                     }
 
 
                 </View>
 
             </>
         );
     }
 }
 
 const styles = StyleSheet.create({
     container: {
         flex: 1,
         justifyContent: 'center'
     },
     submitButton: {
         backgroundColor: '#398677',
         padding: 13,
         height: 45,
         width: '40%',
         borderRadius: 7,
         alignSelf: 'center'
     },
     submitButtonText: {
         color: 'white',
         textAlign: 'center',
         fontWeight: "900"
     },
 });
 
 // Make data available on props
 const mapStateToProps = (store: AppStore) => {
     return {
        
     }
 }
 
 // Make functions available on props
 const mapDispatchToProps = (dispatch: any) => {
     return {
         
     }
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
 
 