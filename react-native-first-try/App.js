import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginForm from './frontend/Login'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
      <LoginForm/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex:  1,
    alignItems : "center",
    justifyContent: "center" }
})