import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const loading = () => {
  return (
    <View>
      <Text>Loading</Text>
      <Link href="/7dashboard" style={{ color: 'blue' }}>Dashboard</Link>
    </View>
  )
}

export default loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})