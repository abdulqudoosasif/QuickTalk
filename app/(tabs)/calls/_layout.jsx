import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { TouchableOpacity } from 'react-native';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Calls',
          headerLargeTitle: true,
          headerShadowVisible: false,
          headerSearchBarOptions: {
            placeholder: 'Search',
          },
          headerRight: () => {
            return (
              <TouchableOpacity>
                <Ionicons name="call-sharp" size={24} color={'#4781ff'} />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Stack>
  );
};

export default Layout;
