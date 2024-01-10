import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {NavigatorParamList} from '../../navigators';

export const ChatScreen: FC<
  StackScreenProps<NavigatorParamList, 'ChatScreen'>
> = ({navigation}) => {
  return (
    <View>
      <Text>ChatScreen</Text>
    </View>
  );
};

