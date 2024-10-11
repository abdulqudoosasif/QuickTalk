import { View, Text, KeyboardAvoidingView, Platform, Linking, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import Foundation from '@expo/vector-icons/Foundation';         
import React, { useState, useEffect } from 'react'
import { useRouter } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Otp = () => {
  const [loading, setLoading] = useState(false)
  const [phoneNo, setPhoneNo] = useState('') 
  const [error, setError] = useState('') 
  const router = useRouter();
  const {bottom} = useSafeAreaInsets();
  
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0;
  
  const openLink = (url) => {
    Linking.openURL(url);
  }

  useEffect(() => {
    setLoading(false); 
  }, []);

  const sendOTP = async () => {
    if (phoneNo.trim() !== '' && phoneNo.trim().length >= 11) {
      setLoading(true); 
      setTimeout(() => {
        router.push(`/verify/${phoneNo}`);
        setLoading(false); 
      }, 1000);
    } else {
      setError('Phone number must be at least 11 digits'); 
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  }
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={{ flex: 1 }}
    >
      <View className='p-4 flex-1'>
        {loading ? (
            <View className='flex-1 items-center gap-4 justify-center'>
                <ActivityIndicator size={'large'} color='#4781ff'/>
                <Text>Loading...</Text>
            </View>
        ) : (
            <>
              <Text>
                Whatsapp will need to verify your account. Carrier charges may apply.
              </Text>

              <View className='bg-white py-4 px-3 rounded-lg mt-10'>
                <View className='flex-row justify-between'>
                  <Text className='text-lg font-bold text-black'>Number</Text>
                  <Foundation name="telephone" size={34} color='#4781ff' />
                </View>
                <View className='bg-gray-300 h-[1px] mt-2' />
                
                {/* Phone Number Input */}
                <TextInput
                  className='text-[17px]'
                  placeholder="Enter phone number"
                  value={phoneNo}
                  onChangeText={setPhoneNo}  
                  keyboardType="phone-pad"
                  autoFocus
                  style={{ borderColor: '#fff', borderWidth: 1, padding: 10, marginTop: 10, borderRadius: 5 }}
                />
                
              </View>
              {error &&(<Text className='text-red-600 p-2 mt-1'>{error}</Text>)}

              <Text className='p-2 mb-11 text-[#181818]'>
                You must be {''}
                <Text
                  className='font-semibold text-[#4781ff]'
                  onPress={() => openLink('https://your-privacy-policy-link.com')}
                >
                  at least 16 years old
                </Text>
                {' to register. Learn how Whatsapp works with the '}
                <Text
                  className='font-semibold text-[#4781ff]'
                  onPress={() => openLink('https://your-terms-of-service-link.com')}
                >
                  Meta companies
                </Text>.
              </Text>

              <View style={{flex: 1}} />
              <TouchableOpacity
                onPress={sendOTP}
                disabled={phoneNo.trim() === ''}  
                style={{
                  backgroundColor: phoneNo.trim() === '' ? '#B0B0B0' : '#4781ff',  
                  padding: 10,
                  borderRadius: 5,
                  marginBottom: bottom
                }}
              >
                <Text className="font-medium text-lg text-white text-center">
                  Next
                </Text>
              </TouchableOpacity>
            </>
        )}
      </View>
    </KeyboardAvoidingView>
  )
}

export default Otp;
