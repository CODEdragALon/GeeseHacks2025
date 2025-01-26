import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router';

// Import your global CSS file
import "../global.css";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false }} />
    </Stack>
  )
}

export default RootLayout
