/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */

// "registration_id": "etszle24XEAwhM3dEGB87J:APA91bHgafIoEyE2_1ew0ymZ-TSzZZZU_g473SmKLVY1Uh6aUN8c-M3WmZyzmMUl8YaV4HogRyK53A3pZIpXY1k4pukRrW0iLYMT25RJJRAqbpQSel76GOGW_ePikzEM5NyESu24kWla",
// "type": "ios",
import React, {createRef, useEffect, useRef} from 'react';
import {useColorScheme} from 'react-native';

// import {
//   getThemeTypography,
//   appendLanguageKeyToThemeTypography,
// } from '../utils/theme';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef, useBackButtonHandler} from './navigation-utilities';
import * as Screens from "./../Screens/index"
// import firebase, {ReactNativeFirebase} from '@react-native-firebase/app';

// import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
// import {useStores} from '../models';
// import * as Device from 'expo-device';
// import * as Notifications from 'expo-notifications';

// import NotificationPopup from 'react-native-push-notification-popup';
// import * as storage from './../utils/mobile-storage';

// import {View, Text, useTheme, Row, Image} from 'native-base';
// import {Images} from '../../assets';
import {Platform} from 'react-native';
/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type NavigatorParamList = {
  dummy: undefined;
  ChatScreen: undefined;
  LoginScreen: undefined;
};

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<NavigatorParamList>();

const RNfirebaseConfig = {
  apiKey: 'AIzaSyCZjIFVIKUoIV0Wo6kgmFQ1TgdH3q1u4x4',
  authDomain: 'batzawaj-7352a.firebaseapp.com',
  projectId: 'batzawaj-7352a',
  storageBucket: 'batzawaj-7352a.appspot.com',
  messagingSenderId: '389252601638',
  appId: '1:389252601638:ios:ebffdbba4494bec93f53e7',
  measurementId: 'G-JZ6NTTJL6Z',
  databaseURL: 'https://batzawaj-7352a.firebaseio.com/',
};

// let app: ReactNativeFirebase.FirebaseApp;
// if (firebase.apps.length === 0) {
//   firebase.initializeApp(RNfirebaseConfig);
// } else {
//   app = firebase.app();
// }

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // gestureEnabled: false,
      }}
      initialRouteName="ChatScreen">
      <Stack.Screen name="ChatScreen" component={Screens.ChatScreen} />
      {/*<Stack.Screen name="dummy" component={Screens.DummyScreen} />*/}
    </Stack.Navigator>
  );
};

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme();

//   useEffect(() => {
//     const unsubscribe = messaging().onMessage(async remoteMessage => {
//       console.log(JSON.stringify(remoteMessage));
//     });
//     return unsubscribe;
//   }, []);
//   const {pushNotificationsStore, userStore, i18nStore} = useStores();
//   let popupRef = useRef(null);
//   const theme = useTheme();

//   const checkPermission = async () => {
//     const isReg = firebase.messaging().isDeviceRegisteredForRemoteMessages;

//     const enabled = await firebase.messaging().hasPermission();
//     if (enabled == 1) {
//       // Get FCM Token
//       getToken();
//     } else {
//       // Request Permission
//       requestPermission();
//     }
//   };

//   const requestPermission = async () => {
//     try {
//       const authStatus = await messaging().requestPermission();
//       const enabled =
//         authStatus == messaging.AuthorizationStatus.AUTHORIZED ||
//         authStatus == messaging.AuthorizationStatus.PROVISIONAL;
//       if (enabled) {
//         getToken();
//       }
//     } catch (error) {}
//   };

//   // TODO: Get FCM Token
//   const getToken = async () => {
//     let fcmToken = await messaging().getToken();
//     let data = {
//       registration_id: fcmToken,
//       type: Platform.OS,
//     };
//     console.log('this is working or not how we know that ', data);
//     pushNotificationsStore.setFCMToken(data);
//     // AuthActions.setFCMToken(dispatch, data)
//   };
//   const backgroundHandler = () => {
//     messaging().onNotificationOpenedApp(async remoteMessage => {
//       console.log('this is background message for you ', remoteMessage);
//     });
//     messaging()
//       .getInitialNotification()
//       .then(async remoteMessage => {
//         console.log('this is remote message for you ', remoteMessage);
//       });
//   };

//   // TODO: Listen to notification in foreground state
//   const foreground = () => {
//     messaging().onMessage(async remoteMessage => {
//       console.log('FOREGROUND :: ', remoteMessage);
//       popupRef.current.show({
//         appTitle: 'Admin',
//         title: remoteMessage.notification.title,
//         body: remoteMessage.notification.body,
//         slideOutTime: 2000,
//       });
//     });
//   };

//   const renderCustomPopup = ({
//     appIconSource,
//     appTitle,
//     timeText,
//     title,
//     body,
//   }) => (
//     <View
//       p={5}
//       borderRadius={'5'}
//       borderColor={'white'}
//       borderWidth={'2px'}
//       bg={'#f0f0f0'}>
//       <Row alignItems={'center'}>
//         <Image
//           height={'40px'}
//           width={'40px'}
//           source={Images.app_logo2}
//           alt={'push'}
//         />
//         <View>
//           <Text
//             mx={'4'}
//             {...getThemeTypography(
//               theme,
//               appendLanguageKeyToThemeTypography(
//                 'heading.6',
//                 i18nStore.getCurrentLanguage(),
//               ),
//             )}>
//             {title}
//           </Text>
//           <Text
//             mx={'4'}
//             {...getThemeTypography(
//               theme,
//               appendLanguageKeyToThemeTypography(
//                 'paragraph.6',
//                 i18nStore.getCurrentLanguage(),
//               ),
//             )}>
//             {body}
//           </Text>
//         </View>
//       </Row>

//       {/* <Button title='My button' onPress={() => console.log('Popup button onPress!')} /> */}
//     </View>
//   );

//   // TODO: Display notification popup when app is in foreground
//   const getNotificationPopup = () => {
//     return (
//       <NotificationPopup
//         renderPopupContent={renderCustomPopup}
//         shouldChildHandleResponderStart={true}
//         shouldChildHandleResponderMove={true}
//         ref={popupRef}
//       />
//     );
//   };
//   useEffect(() => {
//     setTimeout(() => {
//       checkPermission();
//       foreground();
//       backgroundHandler();
//     }, 1000);

//     storage.getItem('access_token').then(t => {
//       if (t) {
//         userStore.getLoggedInUser();
//       } else {
//         userStore.logoutUser();
//       }
//     });
//   }, []);
  useBackButtonHandler(canExit);

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      {...props}>
      <AppStack />
      {/* {getNotificationPopup()} */}
    </NavigationContainer>
  );
};

AppNavigator.displayName = 'AppNavigator';

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ['dummy'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
