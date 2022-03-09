import { Reducer } from 'redux';
import AppContainerState from '../State/AppContainerState';
import AppContainerActionTypes from '../Action/AppContainerActionTypes';
import AppContainerActionTypeKey from '../Action/AppContainerActionTypeKey';

const initialState: AppContainerState = {
    showLoader:false,
};

const AppContainerReducer: Reducer<AppContainerState, AppContainerActionTypes> = (state = initialState, action) => {
    switch (action.type) {
        case AppContainerActionTypeKey.APP_CONTAINER_LOADER : {
            return {
                ...state,
                showLoader:action.showLoader
            };
        }
        default:
            return state;
    }
};

export default AppContainerReducer;