import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const slides = () => {
  return (
    <View style={styles.container}>
      <Link href="/6dashboard" style={{ color: 'blue' }}>Create Account</Link>
      <Image source={require('../assets/images/Budgeting and Planning.png')} style={styles.image} />
    </View>
  )
}

export default slides

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
})