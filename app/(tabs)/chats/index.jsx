import { View, Text, ScrollView, FlatList, Image } from 'react-native';
import React from 'react';
import chats from '../../../assets/data/chats.json';
import ContasctSwipe from '../../../components/ContactStyleSwipeableRow';
import { Link } from 'expo-router';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Colors from '../../../constants/Colors'; // Ensure you have Colors imported

const Chat = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View className="flex-1">
        <FlatList
          scrollEnabled={false}
          data={chats}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ContasctSwipe>
              {/* Link to the chat page using the id */}
              <Link href={`/chats/${item.id}`} asChild>
                <TouchableHighlight activeOpacity={0.8} underlayColor={Colors.lightGray}>
                  <View className="flex-row items-center py-3 border-b border-gray-300">
                    {/* User profile image */}
                    <Image source={{ uri: item.img }} className="w-[60px] ml-2 h-[60px] rounded-full mr-4" />

                    {/* Chat details */}
                    <View className="flex-1">
                      {/* User's name */}
                      <Text className="font-semibold text-[17px] mb-1">{item.from}</Text>

                      {/* Message */}
                      <Text className="text-gray-600 mb-1">
                        {item.msg.length > 30 ? `${item.msg.slice(0, 30)}...` : item.msg}
                      </Text>

                      {/* Date */}
                      <Text className="text-sm text-gray-400">
                        {new Date(item.date).toLocaleDateString()}
                      </Text>
                    </View>

                    {/* Unread count badge (if any) */}
                    {item.unreadCount > 0 && (
                      <View className="bg-red-500 mr-2 rounded-full px-3 py-1">
                        <Text className="text-white font-bold">{item.unreadCount}</Text>
                      </View>
                    )}
                  </View>
                </TouchableHighlight>
              </Link>
            </ContasctSwipe>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Chat;
