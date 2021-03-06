import { Dispatch } from "redux";
import { NativeModules } from "react-native";
import { ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { APIUserManagement } from "../../api/APIUsersManagement";
import AppContainerActionTypeKey from "../../AppContainer/Action/AppContainerActionTypeKey";
import AppContainerActionTypes from "../../AppContainer/Action/AppContainerActionTypes";
import AppContainerState from "../State/AppContainerState";




// For show or Hide loader
export const showHideLoader = (data:boolean): AppContainerActionTypes => {
    return {
        type: AppContainerActionTypeKey.APP_CONTAINER_LOADER,
        showLoader:data,
    };
}

export const appChangeFlag = (): AppContainerActionTypes => {
  return {
    type: AppContainerActionTypeKey.APP_CHANGE_FLAG,
    appChangeFlag: true
  }
}

export const getOSCInfoSuccess = (data:boolean): AppContainerActionTypes => {
  return {
      type: AppContainerActionTypeKey.GET_OSC_INFO_SUCCESS,
      getOSCInfoSuccess: data
  };
}


export const getOSCInfoFail = (data:boolean): AppContainerActionTypes => {
  return {
      type: AppContainerActionTypeKey.GET_OSC_INFO_FAIL,
      getOSCInfoFail: data
  };
}



/** Login Api Call */
export const getOSCInfo: ActionCreator<
  ThunkAction<
    Promise<any>,
    AppContainerState,
    null,
    AppContainerActionTypes
  >
> = () => {
  return (dispatch: Dispatch) => {
    const service = new APIUserManagement();
    dispatch(showHideLoader(true))

    return service.getOSCInfo().then(async (response) => {
      dispatch(showHideLoader(false))
      dispatch(getOSCInfoSuccess(true));
    }).catch((error) => {
      dispatch(showHideLoader(false))
      dispatch(getOSCInfoFail(true));
    });
  }
}

/** Login Api Call */
export const takePicture: ActionCreator<
  ThunkAction<
    Promise<any>,
    AppContainerState,
    null,
    AppContainerActionTypes
  >
> = () => {
  return (dispatch: Dispatch) => {
    const service = new APIUserManagement();
    dispatch(showHideLoader(true))

    return service.takePicture().then(async (response) => {
      return service.getStatus().then(async (response) => {      
        dispatch(showHideLoader(false))
        dispatch(getOSCInfoSuccess(true));
      }).catch((error) => {
        dispatch(showHideLoader(false))
        dispatch(getOSCInfoFail(true));
      });
      
      dispatch(showHideLoader(false))
      dispatch(getOSCInfoSuccess(true));
    }).catch((error) => {
      dispatch(showHideLoader(false))
      dispatch(getOSCInfoFail(true));
    });
  }
}




