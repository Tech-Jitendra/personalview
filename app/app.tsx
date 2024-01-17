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
import {PaperProvider} from 'react-native-paper';
import * as storage from './utils/mobile-storage';
import {useNavigationPersistence} from './navigators';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);
  return (
    <Provider store={store}> 
      <PaperProvider>
        <AppNavigator
          initialState={initialNavigationState}
          onStateChange={onNavigationStateChange}
        />
      </PaperProvider>
    </Provider>
  );
}

export default App;
