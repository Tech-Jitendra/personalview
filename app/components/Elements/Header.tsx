// Import necessary dependencies
import React from 'react';
import {palette} from '../../theme';
import {Icons} from '../../theme/icons';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/Ionicons';
import {Appbar, Avatar, IconButton, Text, useTheme} from 'react-native-paper';

const MessageBar = () => {
  const theme = useTheme();

  // Customize your own blue color variants
  const primaryColor = '#2196F3'; // Blue
  const accentColor = '#64B5F6'; // Light Blue

  const rightButton = [
    {
      icon: Icons.videocam,
      handler: () => alert('to be added'),
    },
    {
      icon: Icons.call,
      handler: () => alert('to be added'),
    },
    {
      icon: Icons.informationCircle,
      handler: () => alert('to be added'),
    },
  ];

  return (
    <Appbar.Header
      style={{
        height: 90,
        backgroundColor: palette.white_60,
        elevation: 0, // Remove shadow
        justifyContent: 'space-between',
      }}>
      {/* Left icon (e.g., user avatar) */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Avatar.Image
          size={50}
          source={{
            uri: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
          }}
        />

        {/* Title */}
        <View style={{marginLeft: 30}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            jitendra
          </Text>
          <Text style={{fontSize: 10, fontWeight: 'bold', color: 'black'}}>
            online 56 minutes ago
          </Text>
        </View>
      </View>
      {/* Right icons (e.g., search, settings, etc.) */}
      <View style={styles.rightIconsContainer}>
          {rightButton.map((item, id) => (
            <IconButton
              key={id}
              style={{margin: 0}}
              onPress={item.handler}
              icon={() => (
                <Icon size={25} color={palette.davysGrey} name={item.icon} />
              )}
            />
          ))}
      </View>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  rightIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginRight: 10,
  },
});

export default MessageBar;
