import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const languages = () => {
  return (
    <View style={styles.container}>
      <Link href="/" style={{ color: 'blue' }}>Exit</Link>
      <Image source={require('../assets/images/2.png')} style={styles.image} />
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
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
})