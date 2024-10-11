import { Ionicons } from "@expo/vector-icons";
import { Platform } from 'react-native';
import { Link, Stack, useNavigation } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useEffect } from "react";

const Layout = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Hide the tab bar when this component is mounted
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });

    // Restore the tab bar when the component is unmounted
    return () => {
      navigation.getParent()?.setOptions({ tabBarStyle: undefined });
    };
  }, [navigation]);

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Chats",
          headerLargeTitle: true,
          headerShadowVisible: false,
          headerSearchBarOptions: {
            placeholder: "Search",
          },
          headerRight: () => (
            <View className="flex-row gap-2 items-center">
              <TouchableOpacity>
                <Ionicons name="camera" size={24} color={"gray"} />
              </TouchableOpacity>
              <Link href="(tabs)/settings" asChild>
                <TouchableOpacity>
                  <Entypo name="dots-three-vertical" size={24} color="gray" />
                </TouchableOpacity>
              </Link>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="[id]"
        options={{
          headerBackTitle: "",
          title: "",
          headerLeft: () => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: Platform.OS === 'ios' ? 0 : 0,
                paddingLeft: Platform.OS === 'ios' ? 1 : 10,
                paddingBottom: Platform.OS === 'ios' ? 15 : 10,
              }}
            >
              <Image
                source={{
                  uri: 'https://scontent.fisb1-2.fna.fbcdn.net/v/t39.30808-1/447836730_1468305627455291_7529061190618110294_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGZ7gKqxNADnU4gTR-_pW7R1nNdSR-Np3nWc11JH42neaCtsxq3MVFkcJ0Yq7rTDsFO-_KHbEsO9Ca8Skso4yqB&_nc_ohc=G7yOfefglzoQ7kNvgHlz8o_&_nc_ht=scontent.fisb1-2.fna&_nc_gid=Aw9wGTCOkhDCS06QTvLge9k&oh=00_AYAZfaKbaflBy4iYFztMxuDE5dW5vxHCWZty8EJ3SRRQyg&oe=670EB50E',
                }}
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  marginRight: 10,
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#000',
                }}
              >
                Abdul Qudoos
              </Text>
            </View>
          ),
          headerRight: () => (
            <View className="flex-row gap-3 items-center">
              <TouchableOpacity>
                <FontAwesome name="video-camera" size={20} color="gray" />
              </TouchableOpacity>
              <Link href="(tabs)/calls" asChild>
                <TouchableOpacity>
                  <Ionicons name="call-sharp" size={24} color={'gray'} />
                </TouchableOpacity>
              </Link>
            </View>
          ),
        }}
      />
    </Stack>
  );
};

export default Layout;
