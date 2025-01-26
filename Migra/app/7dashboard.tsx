import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const dashboard = () => {
  return (
    <View>
      <Text>Dashboard</Text>
      <Link href="/8menu" style={{ color: 'blue' }}>Menu</Link>
      <Link href="/9services" style={{ color: 'blue' }}>Services</Link>
    </View>
  )
}

export default dashboard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})