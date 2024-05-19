import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Root = () => {
  return (
    <View style={styles.container}>
      <Text>Root</Text>
    </View>
  )
}

export default Root

const styles = StyleSheet.create({
  container: {
    flex:  1,
    alignItems : "center",
    justifyContent: "center" }
})