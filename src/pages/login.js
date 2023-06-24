import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import LoginContainer from "../components/LoginContainer";
import { Color } from "../assets/scss/GlobalStyles";

const Login = () => {
  return (
    <View style={styles.login}>
      <Image
        style={styles.background42Icon}
        contentFit="cover"
        source={require("../assets/images/background4-2.png")}
      />
      <View style={[styles.frame, styles.framePosition]}>
        <LoginContainer />
        <Image
          style={[styles.background41Icon, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/images/background4-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  background42Icon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  background41Icon: {
    top: 0,
    height: 124,
  },
  frame: {
    top: 111,
    height: 610,
    overflow: "hidden",
  },
  login: {
    backgroundColor: Color.white,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default Login;
