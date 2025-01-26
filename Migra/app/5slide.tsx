import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const slide = () => {
  return (
    <View>
      <Text>Slide</Text>
      <Link href="/6loading" style={{ color: 'blue' }}>Loading</Link>
    </View>
  )
}

export default slide

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})