// Import necessary dependencies
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import {Icons} from '../../theme/icons';
import {Appbar, Avatar, IconButton, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {palette} from '../../theme';
const MessageBar = () => {
  const theme = useTheme();

  // Customize your own blue color variants
  const primaryColor = '#2196F3'; // Blue
  const accentColor = '#64B5F6'; // Light Blue

  return (
    <Appbar.Header
      style={{
        backgroundColor: primaryColor,
        elevation: 0, // Remove shadow
      }}>
      {/* Left icon (e.g., user avatar) */}
      <Appbar.Action
        icon={() => (
          <Avatar.Image
            size={30}
            source={{
              uri: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
            }}
          />
        )}
      />

      {/* Title */}
      <Appbar.Content
        title="Messenger"
        titleStyle={{fontSize: 20, fontWeight: 'bold', color: 'white'}}
      />

      {/* Right icons (e.g., search, settings, etc.) */}
      {/* <View style={styles.rightIconsContainer}> */}
        <Icon size={50} color={palette.davysGrey} name={Icons.infoIcon} />
      {/* </View> */}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  rightIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
});

export default MessageBar;
