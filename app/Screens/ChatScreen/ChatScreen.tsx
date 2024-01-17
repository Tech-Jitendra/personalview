import Video from 'react-native-video';
import {View, Text} from 'react-native';
import {Avatar, MD3Colors, useTheme, withTheme} from 'react-native-paper';
import {GiftedChat} from 'react-native-gifted-chat';
import {NavigatorParamList} from '../../navigators';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC, useCallback, useEffect, useState} from 'react';
import MessageBar from '../../components/Elements/Header';

type User = {
  _id: number;
  name: string;
  avatar: string;
};

type ChatItem = {
  _id: number;
  text: string;
  createdAt: Date;
  user: User;
};

export const ChatScreen: FC<
  StackScreenProps<NavigatorParamList, 'ChatScreen'>
> = ({navigation}) => {
  const {colors} = useTheme();
  const [messages, setMessages] = useState<any>([]);

  const generateRandomText = (): string => {
    const texts: string[] = [
      'Hello developer',
      'How are you?',
      'Nice to meet you',
      'What do you think about React Native?',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      // Add more random texts as needed
    ];
    const randomIndex: number = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
  };

  const generateRandomUser = (id: number): User => {
    // console.log('id - ', id % 2);
    let newID = id % 2;
    return {
      _id: newID + 1,
      name: `User ${id}`,
      avatar:
        'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
    };
  };

  const generateRandomDate = (daysAgo: number): Date => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - daysAgo);
    return currentDate;
  };

  const generateChatItems = (count: number): ChatItem[] => {
    const chatItems: ChatItem[] = [];

    for (let i = 1; i <= count; i++) {
      const chatItem: ChatItem = {
        _id: i,
        text: generateRandomText(),
        createdAt: generateRandomDate(i),
        user: generateRandomUser(i),
      };

      chatItems.push(chatItem);
    }

    return chatItems;
  };

  // Generate 100 chat items
  const chatList: ChatItem[] = generateChatItems(10);

  // console.log('this is chatlist ', chatList);

  useEffect(() => {
    setMessages(chatList);
  }, []);

  const onSend = useCallback((messages = []) => {
    // console.log('this is message from me ', messages);
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const baseColors = {
    grey: ' #F7F8FB',
    green: '#13322B',
    yellow: 'yellow',
  };

  return (
    <React.Fragment>
      <MessageBar />
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 2,
        }}
        timeTextStyle={{
          right: {
            color: 'white',
          },
        }}
        onPressAvatar={() => {
          alert('you can view avatar and profile');
        }}
        renderAvatar={img => {
          return (
            <Avatar.Image
              size={50}
              // style={{borderRadius: 60}}
              source={{uri: `${img.currentMessage?.user.avatar}`}}
            />
          );
        }}
        messagesContainerStyle={{
          backgroundColor: baseColors.green,
        }}
        renderAvatarOnTop={true}
        // renderUsername={user => {
        //   console.log('this is jitendra ', user);
        //   return <Text>{'user'}</Text>;
        // }}
        renderMessageVideo={item => {
          return (
            <Video
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
    </React.Fragment>
  );
};
