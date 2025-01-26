import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const help = () => {
  return (
    <View>
      <Text>help</Text>
      <Link href="/5slide" style={{ color: 'blue' }}>Slide</Link>
    </View>
  )
}

export default help

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})