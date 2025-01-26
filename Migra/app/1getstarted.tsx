import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const getstarted = () => {
  return (
    <View>
      <Text>Get Started</Text>
      <Link href="/2languages" style={{ color: 'blue' }}>Language</Link>
    </View>
  )
}

export default getstarted

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})