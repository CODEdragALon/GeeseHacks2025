import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const circumstances = () => {
  return (
    <View>
      <Text>Circumstances</Text>
      <Link href="/" style={{ color: 'blue' }}>End</Link>
    </View>
  )
}

export default circumstances

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})