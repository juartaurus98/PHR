import React, { memo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

const LoginContainer = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={styles.frameNgNhp}>
      <Text style={styles.qunMtKhu}>Quên mật khẩu?</Text>
      <View style={[styles.lineParent, styles.lineParentLayout]}>
        <View style={[styles.frameChild, styles.framePosition]} />
        <Text style={[styles.or, styles.orTypo]}>or</Text>
        <View style={[styles.frameItem, styles.framePosition]} />
      </View>
      <Pressable
        style={[styles.frameToTiKhon, styles.frameChildLayout]}
        onPress={() => navigation.navigate("Register1")}
      >
        <Text style={[styles.toTiKhon, styles.ngNhpTypo]}>Tạo tài khoản</Text>
      </Pressable>
      <Pressable
        style={[styles.frameNgNhp1, styles.frameChildLayout]}
        onPress={() => navigation.navigate("MnHnhChnh")}
      >
        <Text style={[styles.ngNhp, styles.ngNhpTypo]}>Đăng nhập</Text>
      </Pressable>
      <View style={[styles.frameMtKhu, styles.lineParentLayout]}>
        <View style={[styles.frameMtKhuChild, styles.frameChildLayout]} />
        <Image
          style={styles.component25Icon}
          contentFit="cover"
          source={require("../assets/component-25.png")}
        />
        <Text style={[styles.mtKhu, styles.mtKhuTypo]}>Mật khẩu</Text>
        <Text style={[styles.mtKhu1, styles.orTypo]}>Mật khẩu</Text>
      </View>
      <View style={styles.frameTiKhon}>
        <View style={[styles.frameTiKhonChild, styles.frameChildLayout]} />
        <Text style={[styles.tiKhon, styles.mtKhuTypo]}>Tài khoản</Text>
        <Text style={[styles.mtKhu1, styles.orTypo]}>Tài khoản</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  lineParentLayout: {
    width: 360,
    position: "absolute",
  },
  framePosition: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    top: 15,
    position: "absolute",
  },
  orTypo: {
    fontSize: FontSize.size_5xl,
    top: 0,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  frameChildLayout: {
    height: 51,
    width: 361,
    borderWidth: 1,
    borderRadius: Border.br_2xs,
    borderColor: "#000",
    borderStyle: "solid",
    position: "absolute",
  },
  ngNhpTypo: {
    textAlign: "center",
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
  },
  mtKhuTypo: {
    color: Color.darkgray_100,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    left: 20,
    textAlign: "left",
    position: "absolute",
  },
  qunMtKhu: {
    top: 208,
    left: 206,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
  },
  frameChild: {
    left: 211,
    width: 150,
  },
  or: {
    left: 167,
    fontFamily: FontFamily.montserratRegular,
  },
  frameItem: {
    width: 148,
    left: 0,
  },
  lineParent: {
    top: 321,
    height: 29,
    left: 3,
  },
  toTiKhon: {
    top: 10,
    left: 99,
    color: Color.black,
    textAlign: "center",
  },
  frameToTiKhon: {
    top: 369,
    backgroundColor: Color.white,
    width: 361,
    borderWidth: 1,
    borderRadius: Border.br_2xs,
    left: 3,
  },
  ngNhp: {
    top: 9,
    left: 114,
    color: Color.white,
  },
  frameNgNhp1: {
    top: 255,
    left: 4,
    backgroundColor: Color.darkcyan,
    width: 361,
    borderWidth: 1,
    borderRadius: Border.br_2xs,
  },
  frameMtKhuChild: {
    top: 42,
    backgroundColor: Color.white,
    width: 361,
    borderWidth: 1,
    borderRadius: Border.br_2xs,
    left: 0,
  },
  component25Icon: {
    marginTop: 11,
    top: "50%",
    left: 327,
    width: 22,
    height: 22,
    position: "absolute",
  },
  mtKhu: {
    top: 55,
  },
  mtKhu1: {
    left: 0,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
  },
  frameMtKhu: {
    top: 105,
    height: 92,
    left: 0,
  },
  frameTiKhonChild: {
    top: 44,
    backgroundColor: Color.white,
    width: 361,
    borderWidth: 1,
    borderRadius: Border.br_2xs,
    left: 0,
  },
  tiKhon: {
    top: 57,
  },
  frameTiKhon: {
    height: 94,
    top: 0,
    width: 360,
    left: 3,
    position: "absolute",
  },
  frameNgNhp: {
    top: 191,
    left: 35,
    width: 365,
    height: 419,
    position: "absolute",
  },
});

export default LoginContainer;
