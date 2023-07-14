import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import LoginContainer from "../components/LoginContainer";
import { Color } from "../GlobalStyles";

const Login = memo(({ onClose }) => {
  return (
    <View style={styles.login}>
      <Image
        style={styles.background42Icon}
        contentFit="cover"
        source={require("../assets/background4-2.png")}
      />
      <View style={[styles.frame, styles.framePosition]}>
        <LoginContainer />
        <Image
          style={[styles.background41Icon, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/background4-1.png")}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  framePosition: {
    left: 0,
    position: "absolute",
    width: 430,
  },
  background42Icon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  background41Icon: {
    top: 0,
    height: 124,
  },
  frame: {
    top: 111,
    height: 610,
    overflow: "hidden",
    left: 0,
  },
  login: {
    backgroundColor: Color.white,
    height: 955,
    maxHeight: "100%",
    maxWidth: "100%",
    width: 430,
    overflow: "hidden",
  },
});

export default Login;
