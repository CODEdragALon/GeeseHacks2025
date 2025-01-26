import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const slidea = () => {
  return (
    <View style={styles.container}>
      <Link href="/1bslide" style={{ color: 'blue' }}>Continue</Link>
      <Image source={require('../assets/images/5.png')} style={styles.image} />
    </View>
  )
}

export default slidea

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