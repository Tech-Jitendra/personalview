import {View, Text} from 'react-native';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {NavigatorParamList} from '../../navigators';
import {GiftedChat} from 'react-native-gifted-chat';
import Video from 'react-native-video';

export const ChatScreen: FC<
  StackScreenProps<NavigatorParamList, 'ChatScreen'>
> = ({navigation}) => {
  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 3,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        // text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
          // avatar: 'httpshttps://facebook.github.io/react/img/logo_og.png',
        },
        video:
          'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    // console.log('this is message from me ', messages);
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderMessageVideo={item => {
        return (
          <Video
          con
            source={{uri: item.currentMessage?.video}} // Can be a URL or a local file.
            onBuffer={() => console.log('video onBuffer')} // Callback when remote video is buffering
            onError={() => console.log('video error')} // Callback when video cannot be loaded
            style={{
              height: 100,
              width: 200,
            }}
            
          />
        );
      }}
    />
  );
};
