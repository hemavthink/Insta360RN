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



/** Login Api Call */
export const actionLogin: ActionCreator<
ThunkAction<
  Promise<any>,
  AppContainerState,
  null,
  AppContainerActionTypes
>
> = (data: any , loginurl:any, userLoginKey: string) => {
return (dispatch: Dispatch) => {
  const service = new APIUserManagement();
  dispatch(showHideLoader(true))

  return service.userLogin(data,loginurl).then(async (response) => {
    
  }).catch((error) => {
    
  });
}
}



