import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const signin = () => {
  return (
    <View>
      <Text>Help</Text>
      <Link href="/4help" style={{ color: 'blue' }}>Help</Link>
    </View>
  )
}

export default signin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})