import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const services = () => {
  return (
    <View>
      <Text>Services</Text>
      <Link href="/10lbm" style={{ color: 'blue' }}>Land Border Migration</Link>
      <Link href="/11mwo" style={{ color: 'blue' }}>Migrate Workers and Opportunities</Link>
      <Link href="/12sa" style={{ color: 'blue' }}>Studying Abroad</Link>
    </View>
  )
}

export default services

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})