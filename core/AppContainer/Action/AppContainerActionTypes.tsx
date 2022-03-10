import {
    IFormGroupShowLoader,
    IGetOSCInfoSuccess,
    IGetOSCInfoFail

} from "./AppContainerActionInterface";

type AppContainerActionTypes =
    | IFormGroupShowLoader
    | IGetOSCInfoSuccess
    | IGetOSCInfoFail

export default AppContainerActionTypes;