import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const finance = () => {
  return (
    <View>
      <Text>15finance</Text>
      <Link href="/16circumstances" style={{ color: 'blue' }}>Your Circumstances</Link>
    </View>
  )
}

export default finance

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})