import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const clickBtn =(e)=>console.log('Button is clicked');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text>
      <Image source={require("./assets/изтеглен файл.jpg")}></Image>
      <TouchableOpacity  onPress={clickBtn} style={styles.btn}>
        <Text style={styles.textBtn}>CLICK ME</Text>
      </TouchableOpacity>
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
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  btn: {
    borderRadius: 10,
    borderColor: "silver",
    borderWidth: 2,
    padding: 10,
    marginTop: 15,
  },
  textBtn: {
    fontSize: 16,
    color: "silver",
  },
});
