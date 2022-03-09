
import { combineReducers } from "redux";
import AppContainerReducer from './AppContainer/Reducer/AppContainerReducer';


// Create the root reducer
const rootReducer = combineReducers({
    appContainerState: AppContainerReducer,
});

export default rootReducer;