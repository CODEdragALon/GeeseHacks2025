import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const signin = () => {
  return (
    <View style={styles.container}>
      <Link href="/12lbm" style={{ color: 'blue' }}>Land Border Migration</Link>
      <Link href="/13mwo" style={{ color: 'blue' }}>Migrate Workers and Opportunities</Link>
      <Link href="/14sa" style={{ color: 'blue' }}>Studying Abroad</Link>
      <Link href="/6dashboard" style={{ color: 'blue' }}>Return</Link>
      <Image source={require('../assets/images/Ways to Migrate (2).png')} style={styles.image} />
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