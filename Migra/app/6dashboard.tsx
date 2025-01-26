import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const dashboard = () => {
  return (
    <View style={styles.container}>
      <Link href="/7switch" style={{ color: 'blue' }}>Switch Language</Link>
      <Link href="/8menu" style={{ color: 'blue' }}>Menu</Link>
      <Link href="/9wtm" style={{ color: 'blue' }}>Ways to Immigrate</Link>
      <Link href="/10ip" style={{ color: 'blue' }}>Immigration Policies</Link>
      <Link href="/15pa" style={{ color: 'blue' }}>Planning and Assessment</Link>
      <Image source={require('../assets/images/9.png')} style={styles.image} />
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
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
})