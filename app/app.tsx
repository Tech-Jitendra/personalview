/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {config} from './config';
import store from './Store/store';
import {Provider} from 'react-redux';
import {AppNavigator} from './navigators';
import {useColorScheme} from 'react-native';
import * as storage from './utils/mobile-storage';
import {useNavigationPersistence} from './navigators';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {darkThemeColors, lightThemeColors} from './utils/colors';
import {PaperProvider, MD3DarkTheme, MD3LightTheme} from 'react-native-paper';

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  const theme =
    colorScheme === 'dark'
      ? {...MD3DarkTheme, colors: lightThemeColors}
      : {...MD3LightTheme, colors: darkThemeColors};
  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);
  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <PaperProvider theme={theme}>
          <AppNavigator
            initialState={initialNavigationState}
            onStateChange={onNavigationStateChange}
          />
        </PaperProvider>
      </GluestackUIProvider>
    </Provider>
  );
}

export default App;
