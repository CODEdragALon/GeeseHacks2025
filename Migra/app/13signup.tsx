import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const signup = () => {
  return (
    <View>
      <Text>Signup</Text>
      <Link href="/14about" style={{ color: 'blue' }}>About You</Link>
    </View>
  )
}

export default signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})