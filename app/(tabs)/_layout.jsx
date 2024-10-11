import React from 'react'
import { Stack, Tabs } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import Fontisto from '@expo/vector-icons/Fontisto';

const _layout = () => {
  return (
    <GestureHandlerRootView className='flex-1'>
     <Tabs >
        <Tabs.Screen name='chats' options={{
            headerBackVisible:false,
            headerShown:false,
            title:'Chat',
            tabBarIcon:({size,color})=>(
                <Ionicons name="chatbubbles" size={size} color={color} />
            )
        }}/>
        <Tabs.Screen name='updates' options={{
            headerBackVisible:false,
            title:'Updates',
            tabBarIcon:({size,color})=>(
                <MaterialIcons name="update"size={size} color={color} />
            )
        }}/>
        <Tabs.Screen name='communities' options={{
            headerBackVisible:false,
            title:'Communities',
            tabBarIcon:({size,color})=>(
                <Ionicons name="people-sharp" size={size} color={color} />
            )
        }}/>
        <Tabs.Screen name='calls'  options={{
            headerBackVisible:false,
            headerShown:false,
            tabBarIcon:({size,color})=>(
                <Ionicons name="call-sharp" size={size} color={color} />
            )
        }}/>
        <Tabs.Screen name='settings'  options={{
            headerBackVisible:false,
           headerShown:false,
            tabBarIcon:({size,color})=>(
            <Fontisto name="player-settings" size={size} color={color} />
        )
        }}/>
     </Tabs>
     </GestureHandlerRootView>
  )
}

export default _layout