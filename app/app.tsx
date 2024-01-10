/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { AppNavigator } from './navigators';
import * as storage from "./utils/mobile-storage"
import { useNavigationPersistence } from './navigators';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE"

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
    <AppNavigator
      initialState={initialNavigationState}
      onStateChange={onNavigationStateChange}
    />
  );
}


export default App;
