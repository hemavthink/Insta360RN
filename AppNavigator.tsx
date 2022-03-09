import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import AppContainer from './Container/AppContainer/AppContainer';


const RootStack = createStackNavigator(
    {
      home: {screen: AppContainer},
   
    },
    {
      initialRouteName: 'home',
      headerMode : 'none',
      defaultNavigationOptions: {
        gestureEnabled: false
      }
    }
  );


  const prevGetStateForActionHomeStack = RootStack.router.getStateForAction;
  RootStack.router.getStateForAction = (action, state) => {
  
    if (action.type == 'Navigation/COMPLETE_TRANSITION') {
      var showButton = false
      state.routes.map((element, index) => {
        if (state.index == index && (element.routeName == "Home" || element.routeName == "siteInfo" || element.routeName == "formGroupContainer")) {
          showButton = true
        } else {
          showButton = false
        }
      })
      window['App'].setState({ showSyncButton: showButton })
    } else if (action.type == 'Navigation/INIT') {
      if (window['App'] != null)
        window['App'].setState({ showSyncButton: false })
    }
  
    return prevGetStateForActionHomeStack(action, state);
  
  }
  
const MainAppContainer = createAppContainer(RootStack);

export default MainAppContainer;