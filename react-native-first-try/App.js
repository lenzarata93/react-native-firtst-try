import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image source={require("./assets/изтеглен файл.jpg")}></Image>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const style = {
  backgroundColor: "red",
  textAlign: "center",
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "140px",
  },
});
