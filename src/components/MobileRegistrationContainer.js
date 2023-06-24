import React, { memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize, Padding } from "../assets/scss/GlobalStyles";

const MobileRegistrationContainer = memo(() => {
  return (
    <View style={styles.ngK}>
      <View style={[styles.nhpLiMtKhu, styles.khuLayout]}>
        <View style={[styles.nhpLiMtKhuChild, styles.khuChildLayout]} />
        <Image
          style={styles.component24Icon}
          contentFit="cover"
          source={require("../assets/images/component-24.png")}
        />
        <Text style={[styles.nhpLiMt, styles.nhpLiMtPosition]}>
          Nhập lại mật khẩu
        </Text>
        <Text style={[styles.nhpLiMtContainer, styles.ngK2Typo]}>
          <Text style={styles.nhpLiMt1}>{`Nhập lại mật khẩu `}</Text>
          <Text style={styles.text}>*</Text>
        </Text>
      </View>
      <View style={[styles.mtKhu, styles.khuLayout]}>
        <Image
          style={[styles.mtKhuChild, styles.mtKhuChildPosition]}
          contentFit="cover"
          source={require("../assets/images/rectangle-6.png")}
        />
        <Image
          style={styles.component24Icon}
          contentFit="cover"
          source={require("../assets/images/component-24.png")}
        />
        <Text style={[styles.nhpLiMt, styles.nhpLiMtPosition]}>Mật khẩu</Text>
        <Text style={[styles.nhpLiMtContainer, styles.ngK2Typo]}>
          <Text style={styles.nhpLiMt1}>{`Mật khẩu `}</Text>
          <Text style={styles.text}>*</Text>
        </Text>
      </View>
      <View style={[styles.hTn, styles.khuLayout]}>
        <Image
          style={[styles.mtKhuChild, styles.mtKhuChildPosition]}
          contentFit="cover"
          source={require("../assets/images/rectangle-6.png")}
        />
        <Text style={[styles.nhpLiMt, styles.nhpLiMtPosition]}>Họ tên</Text>
        <Text style={[styles.nhpLiMtContainer, styles.ngK2Typo]}>
          <Text style={styles.nhpLiMt1}>{`Họ tên `}</Text>
          <Text style={styles.text}>*</Text>
          <Text style={styles.nhpLiMt1}>{` `}</Text>
        </Text>
      </View>
      <View style={styles.ngK1}>
        <Text style={[styles.ngK2, styles.ngK2Typo]}>Đăng ký</Text>
      </View>
      <View style={[styles.sInThoi, styles.khuLayout]}>
        <Image
          style={[styles.mtKhuChild, styles.mtKhuChildPosition]}
          contentFit="cover"
          source={require("../assets/images/rectangle-6.png")}
        />
        <Text style={[styles.sInThoi1, styles.nhpLiMtPosition]}>
          Số điện thoại
        </Text>
        <Text style={[styles.nhpLiMtContainer, styles.ngK2Typo]}>
          <Text style={styles.nhpLiMt1}>{`Điện thoại đi động `}</Text>
          <Text style={styles.text}>*</Text>
        </Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  khuLayout: {
    height: 81,
    width: 360,
    left: 0,
    position: "absolute",
  },
  khuChildLayout: {
    height: 51,
    marginTop: -10,
    width: 361,
    borderRadius: Border.br_2xs,
  },
  nhpLiMtPosition: {
    color: Color.darkgray_100,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    marginLeft: -171,
    marginTop: 5.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  ngK2Typo: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  mtKhuChildPosition: {
    marginLeft: -180,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  nhpLiMtKhuChild: {
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    left: "50%",
    top: "50%",
    marginLeft: -180.5,
    height: 51,
    marginTop: -10,
    position: "absolute",
  },
  component24Icon: {
    marginLeft: 149,
    width: 20,
    height: 20,
    marginTop: 5.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  nhpLiMt: {
    textAlign: "left",
  },
  nhpLiMt1: {
    color: Color.black,
  },
  text: {
    color: Color.red,
  },
  nhpLiMtContainer: {
    marginTop: -40.5,
    fontSize: FontSize.size_xl,
    marginLeft: -180,
    left: "50%",
    top: "50%",
    position: "absolute",
    textAlign: "left",
  },
  nhpLiMtKhu: {
    top: 282,
  },
  mtKhuChild: {
    height: 51,
    marginTop: -10,
    width: 361,
    borderRadius: Border.br_2xs,
    marginLeft: -180,
  },
  mtKhu: {
    top: 188,
  },
  hTn: {
    top: 94,
  },
  ngK2: {
    fontSize: FontSize.size_5xl,
    color: Color.white,
    textAlign: "center",
    alignSelf: "stretch",
  },
  ngK1: {
    marginTop: 176.5,
    backgroundColor: Color.darkcyan,
    paddingHorizontal: Padding.p_107xl,
    paddingVertical: Padding.p_3xs,
    width: 361,
    borderRadius: Border.br_2xs,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    left: "50%",
    top: "50%",
    marginLeft: -180.5,
    position: "absolute",
  },
  sInThoi1: {
    textAlign: "center",
  },
  sInThoi: {
    top: 0,
  },
  ngK: {
    height: 453,
    marginTop: 65,
    alignSelf: "stretch",
  },
});

export default MobileRegistrationContainer;
