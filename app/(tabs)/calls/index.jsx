import { View, Text, TouchableOpacity, FlatList, ScrollView, Image, } from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import calls from '../../../assets/data/calls.json';
import SwipeableRow from '../../../components/AppleStyleSwipeableRow';
import { Ionicons } from '@expo/vector-icons';

const Calls = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [items, setItems] = useState(calls);
  const [selectedItems, setSelectedItems] = useState([]); 

  // Toggle edit mode
  const onEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      setItems(items.filter((item) => !selectedItems.includes(item.id)));
      setSelectedItems([]);
    }
  };
  const toggleSelectItem = (item) => {
    if (selectedItems.includes(item.id)) {
      setSelectedItems(selectedItems.filter((id) => id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item.id]);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={onEdit}>
              <Text className="text-[#4781ff] text-lg pr-3">
                {isEditing ? 'Done' : 'Edit'}
              </Text>
            </TouchableOpacity>
          ),
        }}
      />

      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <FlatList
          scrollEnabled={false}
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const isSelected = selectedItems.includes(item.id);

            return (
              <SwipeableRow onDelete={() => setItems(items.filter((i) => i.id !== item.id))}>

                <View className="flex-row items-center py-4 px-3 border-b border-gray-200">
                  {isEditing && (
                    <TouchableOpacity onPress={() => toggleSelectItem(item)}>
                      <Ionicons
                        name={isSelected ? 'remove-circle' : 'remove-circle-outline'}
                        size={24}
                        color={isSelected ? 'red' : 'gray'}
                        style={{ marginRight: 10 }}
                      />
                    </TouchableOpacity>
                  )}

                  {/* Display user profile image */}
                  <Image
                    source={{ uri: item.img }}
                    className="w-12 h-12 rounded-full mr-3"
                  />

                  <View className="flex-1">
                    {/* Display the name and call type */}
                    <Text className="text-lg font-semibold">{item.name}</Text>

                    {/* Display call date and status */}
                    <Text className="text-sm text-gray-500">
                      {new Date(item.date).toLocaleDateString()} - {item.incoming ? 'Incoming' : 'Outgoing'} {item.missed && '(Missed)'}
                    </Text>
                  </View>

                  {/* If the call is a video call */}
                  {item.video && (
                    <Text className="text-sm text-blue-500">Video</Text>
                  )}
                </View>
              </SwipeableRow>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Calls;
