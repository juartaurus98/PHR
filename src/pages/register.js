import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageBackground } from "react-native";
import MobileRegistrationContainer from "../components/MobileRegistrationContainer";

const RegisterIcon = () => {
  return (
    <ImageBackground
      style={[styles.registerIcon, styles.iconLayout]}
      resizeMode="cover"
      source={require("../assets/images/register.png")}
    >
      <Image
        style={[styles.background41Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/images/background4-1.png")}
      />
      <MobileRegistrationContainer />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  background41Icon: {
    alignSelf: "stretch",
    maxWidth: "100%",
    height: 124,
  },
  registerIcon: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: 111,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default RegisterIcon;
