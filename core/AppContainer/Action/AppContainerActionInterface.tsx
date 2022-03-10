import keys from "./AppContainerActionTypeKey";



export interface IFormGroupShowLoader {
    readonly type: keys.APP_CONTAINER_LOADER;
    readonly showLoader: any;
   
}


export interface IGetOSCInfoSuccess {
    readonly type: keys.GET_OSC_INFO_SUCCESS;
    readonly getOSCInfoSuccess: boolean;
   
}

export interface IGetOSCInfoFail {
    readonly type: keys.GET_OSC_INFO_FAIL;
    readonly getOSCInfoFail: boolean;
   
}
