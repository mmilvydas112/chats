import { Navigation } from 'react-native-navigation';
import { setAuthLoginRoot } from './src/navigation/auth';
import { registerScreens } from './src/navigation/screenRegister';
import { LogBox } from 'react-native';

registerScreens();

LogBox.ignoreAllLogs(true);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(setAuthLoginRoot());
});
