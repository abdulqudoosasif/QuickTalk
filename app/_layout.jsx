import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"
      options={{
        headerShown:false,
      }} 
      />
       <Stack.Screen name="otp"
      options={{
        headerShown:true,
        title:'Enter Your Phone Number',
        headerBackVisible:false,
      }} 
      />
       <Stack.Screen name="verify/[phone]"
      options={{
        headerShown:true,
        headerBackVisible:false,
        headerBackTitle:'Edit Number'
      }} 
      />
        <Stack.Screen name="(tabs)"
      options={{
        headerShown:false,
        headerBackVisible:false,}} 
      />
    </Stack>
  );
}
