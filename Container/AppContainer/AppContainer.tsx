/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { Text, StyleSheet, NativeModules, NativeEventEmitter, Platform, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { appChangeFlag, getOSCInfo } from '../../core/AppContainer/Action/AppContainerAction';
import AppStore from '../../core/AppStore';

interface AppProps {
    showLoader: boolean
    getOSCInfoFunc: any
    appChangeFlagFunc: any
    getOSCInfoSuccess: boolean,
    getOSCInfoFail: boolean
}

interface AppState {
    showConnectButton: boolean
}

class AppContainer extends Component<AppProps, AppState> {
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

    componentDidUpdate(prevProps, prevState) {
        if (this.props.getOSCInfoSuccess) {
            this.props.appChangeFlagFunc()
        }
    }

    connectCamera = () => {
        this.props.getOSCInfoFunc()
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
                    {this.props.showLoader ?
                        <View style={{ position: 'absolute', height: '100%', right: 0, left: 0, backgroundColor: 'rgba(52, 52, 52, 0.8)' }}>
                            <ActivityIndicator animating={this.props.showLoader} size="large" color="#398677" style={{ alignItems: 'center', position: 'absolute', top: '50%', left: 0, right: 0 }} />
                        </View> : <></>}

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
        showLoader: store.appContainerState.showLoader,
        getOSCInfoSuccess: store.appContainerState.getOSCInfoSuccess,
        getOSCInfoFail: store.appContainerState.getOSCInfoFail
    }
}

// Make functions available on props
const mapDispatchToProps = (dispatch: any) => {
    return {
        getOSCInfoFunc: () => dispatch(getOSCInfo()),
        appChangeFlagFunc: () => dispatch(appChangeFlag())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

