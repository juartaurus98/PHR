import React, { memo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const LoginFrame = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={styles.frameNgNhp}>
      <Text style={styles.qunMtKhu}>Quên mật khẩu?</Text>
      <Pressable
        style={[styles.frameToTiKhon, styles.frameChildLayout]}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={[styles.toTiKhon, styles.ngNhpTypo]}>Tạo tài khoản</Text>
      </Pressable>
      <Pressable
        style={styles.buttonNgNhp}
        onPress={() => navigation.navigate("Permission")}
      >
        <Text style={[styles.ngNhp, styles.ngNhpTypo]}>Đăng nhập</Text>
      </Pressable>
      <View style={[styles.frameSInThoi, styles.framePosition]}>
        <View style={[styles.frameSInThoiChild, styles.frameChildLayout]} />
        <Text style={[styles.sInThoi, styles.mtKhuTypo]}>Số điện thoại</Text>
        <Text style={styles.sInThoi1}>Số điện thoại</Text>
      </View>
      <View style={[styles.frameMtKhu, styles.framePosition]}>
        <View style={[styles.frameMtKhuChild, styles.frameChildLayout]} />
        <Text style={[styles.mtKhu, styles.mtKhuTypo]}>Mật khẩu</Text>
        <Text style={styles.sInThoi1}>Mật khẩu</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  frameChildLayout: {
    height: 51,
    backgroundColor: Color.white,
    width: 301,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    borderRadius: Border.br_2xs,
    left: 30,
    position: "absolute",
  },
  ngNhpTypo: {
    textAlign: "center",
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
  },
  framePosition: {
    height: 90,
    left: "50%",
    marginLeft: -177,
    width: 360,
    position: "absolute",
  },
  mtKhuTypo: {
    color: Color.darkgray_100,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  qunMtKhu: {
    top: 208,
    left: 175,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    color: Color.black,
    position: "absolute",
  },
  toTiKhon: {
    top: 10,
    left: 64,
    color: Color.black,
    textAlign: "center",
  },
  frameToTiKhon: {
    top: 333,
  },
  ngNhp: {
    top: 15,
    left: 80,
    color: Color.white,
  },
  buttonNgNhp: {
    top: 252,
    backgroundColor: Color.darkcyan,
    height: 60,
    width: 301,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    borderRadius: Border.br_2xs,
    left: 30,
    position: "absolute",
  },
  frameSInThoiChild: {
    top: 44,
  },
  sInThoi: {
    top: 57,
    left: 47,
  },
  sInThoi1: {
    left: 35,
    top: 0,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
  },
  frameSInThoi: {
    top: 0,
  },
  frameMtKhuChild: {
    top: 40,
  },
  mtKhu: {
    top: 53,
    left: 46,
  },
  frameMtKhu: {
    top: 104,
  },
  frameNgNhp: {
    top: 285,
    left: 0,
    height: 419,
    width: 360,
    position: "absolute",
  },
});

export default LoginFrame;
