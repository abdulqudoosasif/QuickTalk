import { View, Text, StyleSheet, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import {CodeField,Cursor,useBlurOnFulfill,useClearByFocusCell,} from 'react-native-confirmation-code-field';
import { TouchableOpacity } from 'react-native';
const styles = StyleSheet.create({
    root: {flex: 1, padding: 20},
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {marginTop: 20},
    cell: {
     alignItems:'center',
      width: 50,
      height: 50,
      borderRadius:10,
      lineHeight: 38,
      padding:5,
      fontSize: 24,
      borderWidth: 2,
      borderColor: '#00000030',
      textAlign: 'center',
    },
    focusCell: {
      borderColor: '#000',
    },
  });
const CELL_COUNT = 6;
const Page = () => {
    const params = useLocalSearchParams();
    const router =useRouter();
    const phone = params.phone 
    const signin = params.signin 
    const [code,setCode]=useState('')
    const ref = useBlurOnFulfill({code, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value:  code,
       setValue: setCode,
      });
    useEffect(()=>{
        if (code.length === 6){
            console.log('code',code)
            router.push('chats')
        }
    },[code])
    const verifySignIN =async()=>{}
    const verifyCode =async()=>{}
    const reSendCode =async()=>{}
  return (
    <View className='p-4'>
        <Stack.Screen options={{headerTitle:phone}}/>
        <Text className='text-center mb-3 text-[14px]'>We have sent you an SMS with code  to the number above. </Text>
        <Text className='text-center text-[14   px]'>To complete your phone number verification, please enter the 6-digit activation code </Text>

        <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={code}
        onChangeText={setCode}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoComplete={Platform.select({ android: 'sms-otp', default: 'one-time-code' })}
        testID="my-code-input"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor/> : null)}
          </Text>
        )}
      /> 

        <TouchableOpacity onPress={reSendCode} className='mt-5'>
            <Text className='text-center text-blue-600 text-[16px]'>Don't receive the verification code?</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Page