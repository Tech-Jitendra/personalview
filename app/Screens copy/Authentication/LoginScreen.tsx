import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {NavigatorParamList} from '../../navigators';
import {StackScreenProps} from '@react-navigation/stack';

export const LoginScreen: FC<
  StackScreenProps<NavigatorParamList, 'LoginScreen'>
> = ({navigation}) => {
  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  );
};
