import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const help = () => {
  return (
    <View style={styles.container}>
      <Link href="/" style={{ color: 'blue' }}>To Be Continued</Link>
      <Image source={require('../assets/images/4.png')} style={styles.image} />
    </View>
  )
}

export default help

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