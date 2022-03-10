import {
    IFormGroupShowLoader,
    IGetOSCInfoSuccess,
    IGetOSCInfoFail,
    IAppChangeFlag

} from "./AppContainerActionInterface";

type AppContainerActionTypes =
    | IFormGroupShowLoader
    | IGetOSCInfoSuccess
    | IGetOSCInfoFail
    | IAppChangeFlag

export default AppContainerActionTypes;