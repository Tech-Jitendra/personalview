import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icons as IconLink} from '../../theme/icons';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackScreenProps} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, Pressable, Theme, useTheme} from '@gluestack-ui/themed';
import {NavigatorParamList} from './../../navigators/index';
import {windowHeight} from '../../utils/global';
import {config} from '@gluestack-ui/config';

export const ProfileScreen: React.FC<
  StackScreenProps<NavigatorParamList, 'ProfileScreen'>
> = ({navigation}) => {
  const user = {
    name: 'John Doe',
    username: 'johndoe',
    profileName: 'John',
    nickname: 'JD',
    email: 'john.doe@example.com',
  };

  const handleEditProfile = () => {
    // Navigation logic for editing profile
  };
  const theme = useTheme();

  const rightButtons = [
    {
      icon: IconLink.videocam,
      handler: () => alert('Video call'),
    },
    {
      icon: IconLink.call,
      handler: () => alert('Voice call'),
    },
    {
      icon: IconLink.informationCircle,
      handler: () => alert('More info'),
    },
  ];

  console.log('this is theme ', theme);

  return (
    <View height={windowHeight}>
      <LinearGradient
        colors={['#EAF6FF', config.tokens.colors.emerald600]}
        style={{padding: 20, height: windowHeight}}>
        <View
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          {/* user name */}
          <View>
            <Text fontSize={24} fontWeight="bold" color='$purple700'>
              Jitendra
            </Text>
          </View>
          {/* audio or video call icon */}
          <View
            width={120}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            {rightButtons.map((item, id) => (
              <Pressable onPress={item.handler}>
                <Icon
                  name={item.icon}
                  size={30}
                  color={config.tokens.colors.red400}
                />
              </Pressable>
            ))}
          </View>
        </View>
        <View bg="white" borderRadius={20} p={20} pb={40} mt={20}>
          <View mt={20} mb={40}>
            <Text fontSize={24} fontWeight="bold">
              {user.name}
            </Text>
            <Text fontSize={16} color="gray400">
              @{user.username}
            </Text>
            <Text fontSize={18}>{user.profileName}</Text>
            <Text fontSize={16} color="gray400">
              {user.nickname}
            </Text>
            {user.email && (
              <Text fontSize={16} color="gray400">
                {user.email}
              </Text>
            )}
          </View>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              alignItems: 'center',
              paddingVertical: 10,
              backgroundColor: '#007BFF',
            }}
            onPress={handleEditProfile}>
            <Text color="white" fontSize={16} fontWeight="bold">
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};
