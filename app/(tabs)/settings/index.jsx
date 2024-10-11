import { View, ScrollView, Text, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const Page = () => {
  const devices = [
    {
      name: 'Broadcast Lists',
      icon: 'megaphone',
      backgroundColor: '#4CAF50', 
    },
    {
      name: 'Starred Messages',
      icon: 'star',
      backgroundColor: '#FFEB3B', 
    },
  ];

  const items = [
    {
      name: 'Account',
      icon: 'key',
      backgroundColor: '#2196F3',
    },
    {
      name: 'Privacy',
      icon: 'lock-closed',
      backgroundColor: '#33A5D1',
    },
    {
      name: 'Chats',
      icon: 'logo-whatsapp',
      backgroundColor: '#4CAF50', 
    },
    {
      name: 'Notifications',
      icon: 'notifications',
      backgroundColor: '#F44336',
    },
  ];

  const support = [
    {
      name: 'Help',
      icon: 'information',
      backgroundColor: '#2196F3',
    },
    {
      name: 'Tell a Friend',
      icon: 'heart',
      backgroundColor: '#F44336',
    },
  ];

  const { signOut } = (''); 

  const onSignOut = () => {
    signOut();
  };

  const renderItem = ({ item }) => (
    <View className="flex-row items-center py-4">
      <View
        className="mr-3 p-2 rounded-md"
        style={{ backgroundColor: item.backgroundColor }}
      >
        <Ionicons name={item.icon} size={22} color="#fff" />
      </View>
      <Text className="text-lg flex-1">{item.name}</Text>
    </View>
  );

  return (
    <View className="flex-1">
      <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Devices Section */}
        <View className="bg-white p-4 mb-4">
          <FlatList
            data={devices}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View className="h-0.5 bg-gray-200" />}
            renderItem={renderItem}
          />
        </View>

        {/* Items Section */}
        <View className="bg-white p-4 mb-4">
          <FlatList
            data={items}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View className="h-0.5 bg-gray-200" />}
            renderItem={renderItem}
          />
        </View>

        {/* Support Section */}
        <View className="bg-white p-4 mb-4">
          <FlatList
            data={support}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View className="h-0.5 bg-gray-200" />}
            renderItem={renderItem}
          />
        </View>

        {/* Log Out Button */}
        <TouchableOpacity onPress={onSignOut}>
          <Text className="text-center text-lg py-4 text-blue-600">
            Log Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Page;
