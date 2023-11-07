import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Login from "./screens/Login.js";
import Register from "./screens/Register.js";
import Permission from "./screens/Permission.js";

export default function App() {
  return (
    <View>
      <Permission />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
