/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import store from './Store/store';
import {Provider} from 'react-redux';
import {AppNavigator} from './navigators';
import type {PropsWithChildren} from 'react';
import * as storage from './utils/mobile-storage';
import {useNavigationPersistence} from './navigators';
import {StyleSheet, Text, useColorScheme} from 'react-native';
import {darkThemeColors, lightThemeColors} from './utils/colors';
import {PaperProvider, MD3DarkTheme, MD3LightTheme} from 'react-native-paper';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

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
      <PaperProvider theme={theme}>
        <AppNavigator
          initialState={initialNavigationState}
          onStateChange={onNavigationStateChange}
        />
      </PaperProvider>
    </Provider>
  );
}

export default App;
