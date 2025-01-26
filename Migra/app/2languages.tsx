import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const languages = () => {
  return (
    <View>
      <Text>languages</Text>
      <Link href="/13signup" style={{ color: 'blue' }}>Sign Up</Link>
    </View>
  )
}

export default languages

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})