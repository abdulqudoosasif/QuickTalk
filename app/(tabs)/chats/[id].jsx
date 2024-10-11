import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { View, Text } from 'react-native';
import messageData from '../../../assets/data/messages.json'; // Corrected typo in `messegeData`

const Page = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      ...messageData.map((message) => {
        return {
          _id: message.id,
          text: message.msg,
          createdAt: new Date(message.date),
          user: {
            _id: message.from,
            name: message.from === 'you' ? 'You' : 'Bob', 
          },
        };
      }),
      {
        _id: 0,
        system: true,
        text: 'All your base are belong to us',
        createdAt: new Date(),
        user: {
          _id: 0,
          name: 'Bot',
        },
      },
    ]);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor:'white'}}>
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages))}
        user={{
          _id: 'you', // Replace with the current user ID
        }}
      />
    </View>
  );
};

export default Page;
