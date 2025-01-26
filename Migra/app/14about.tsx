import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const about = () => {
  return (
    <View>
      <Text>About</Text>
      <Link href="/15finance" style={{ color: 'blue' }}>Financial Information</Link>
    </View>
  )
}

export default about

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})