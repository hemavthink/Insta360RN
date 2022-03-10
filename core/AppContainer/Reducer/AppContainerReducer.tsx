import { Reducer } from 'redux';
import AppContainerState from '../State/AppContainerState';
import AppContainerActionTypes from '../Action/AppContainerActionTypes';
import AppContainerActionTypeKey from '../Action/AppContainerActionTypeKey';

const initialState: AppContainerState = {
    showLoader:false,
    getOSCInfoSuccess: false,
    getOSCInfoFail: false
};

const AppContainerReducer: Reducer<AppContainerState, AppContainerActionTypes> = (state = initialState, action) => {
    switch (action.type) {
        case AppContainerActionTypeKey.APP_CONTAINER_LOADER : {
            return {
                ...state,
                showLoader:action.showLoader
            };
        }
        case AppContainerActionTypeKey.GET_OSC_INFO_SUCCESS : {
            return {
                ...state,
                getOSCInfoSuccess:action.getOSCInfoSuccess
            };
        }
        case AppContainerActionTypeKey.GET_OSC_INFO_FAIL : {
            return {
                ...state,
                getOSCInfoFail:action.getOSCInfoFail
            };
        }
        default:
            return state;
    }
};

export default AppContainerReducer;