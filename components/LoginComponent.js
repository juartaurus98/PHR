import React from "react";
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  Image,
  View,
  Pressable,
  TextInput,
  Text,
  Button,
} from "react-native";
import { Navigation } from "react-native-navigation";

import { Border, FontSize, FontFamily } from "../GlobalStyles";

const LoginComponent = () => {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#00BCD4"
        translucent={true}
      />
      <ImageBackground
        source={require("../assets/background/background.png")}
        resizeMode={"cover"}
        style={styles.background}
      />
      <Image
        source={require("../assets/background/brandlogo.png")}
        style={[styles.imageContainer, styles.backgroundIcon]}
        contentFit="cover"
      />
      <View
        style={{
          top: "42%",
          height: "45%",
          width: "100%",
          position: "absolute",
          flex: 1,
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        <View style={{ flex: 2 }}>
          <Text></Text>
          <TextInput
            style={styles.textinput}
            placeholder="Số điện thoại"
            keyboardType="numeric"
          />
        </View>
        <View style={{ flex: 2 }}>
          <TextInput style={styles.textinput} placeholder="Mật khẩu" />
        </View>
        <View style={{ flex: 1 }}>
          <Pressable style={styles.text2}>
            <Text style={{ fontSize: FontSize.size_lg, fontWeight: "bold" }}>
              Quên mật khẩu
            </Text>
          </Pressable>
        </View>
        <View style={{ flex: 2 }}>
          <Pressable style={styles.buttonIn}>
            <Text style={styles.text}>Đăng Nhập</Text>
          </Pressable>
        </View>
        <View style={{ flex: 2 }}>
          <Pressable style={styles.buttonIn}>
            <Text style={styles.text}>Đăng Ký</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
  },
  backgroundIcon: {
    top: "20%",
    height: "12%",
  },
  imageContainer: {
    width: "90%",
    left: 0,
    position: "absolute",
  },
  textinput: {
    alignSelf: "center",
    top: "20%",
    height: "60%",
    width: "100%",
    padding: 10,
    fontWeight: "semibold",
    backgroundColor: "white",
    fontSize: FontSize.size_xl,
    borderWidth: 2,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  buttonIn: {
    justifyContent: "center",
    top: "10%",
    height: "60%",
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#27a1a8",
    borderWidth: 2,
    borderRadius: Border.br_3xs,
  },
  text: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    position: "absolute",
  },
  text2: {
    top: "10%",
    height: "auto",
    width: "auto",
    alignSelf: "flex-end",
  },
});

export default LoginComponent;
