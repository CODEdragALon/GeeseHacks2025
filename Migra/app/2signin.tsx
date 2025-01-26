import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const signin = () => {
  return (
    <View style={styles.container}>
      <Link href="/6dashboard" style={{ color: 'blue' }}>Sign In</Link>
      <Image source={require('../assets/images/3.png')} style={styles.image} />
    </View>
  )
}

export default signin

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