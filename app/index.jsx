import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'expo-image' 
// import welcome from '../assets/images/react-logo@3x.png' 
import { Link } from 'expo-router'
import * as Linking from 'expo-linking'

const openLink = (url) => {
  Linking.openURL(url)
}

const Index = () => {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
        <Image 
        //   source={welcome} 
        //   className='h-[300px] w-full' 
        // 
        />
      <Text className='mt-[79px] mb-[19px] text-2xl font-bold text-[#000000]'>
        Welcome to QuickTalk  
      </Text>
      <Text className='p-2 mb-11 text-[#181818]'>
        Read our {''}
        <Text
          className='font-semibold text-[#4781ff]'
          onPress={() => openLink('https://your-privacy-policy-link.com')}>
          Privacy Policy
        </Text>
        .{' Tap agree & Continue to accept the '}
        <Text
          className='font-semibold text-[#4781ff]'
          onPress={() => openLink('https://your-terms-of-service-link.com')}>
          Terms of Service
        </Text>
      </Text>
      <Link href={'/otp'} replace asChild>  
        <TouchableOpacity activeOpacity={0.7}>
          <Text className='text-lg font-semibold text-[#4781ff]'>
            AGREE & CONTINUE
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  )
}

export default Index
