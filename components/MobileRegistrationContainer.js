import React, { memo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const MobileRegistrationContainer = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={styles.ngK}>
      <View style={[styles.nhpLiMtKhu, styles.khuLayout]}>
        <View style={[styles.nhpLiMtKhuChild, styles.khuChildPosition]} />
        <Image
          style={styles.component24Icon}
          contentFit="cover"
          source={require("../assets/component-24.png")}
        />
        <Text style={[styles.nhpLiMt, styles.nhpPosition]}>
          Nhập lại mật khẩu
        </Text>
        <Text style={[styles.nhpLiMtContainer, styles.ngK2Typo]}>
          <Text style={styles.nhpLiMt1}>{`Nhập lại mật khẩu `}</Text>
          <Text style={styles.text}>*</Text>
        </Text>
      </View>
      <View style={[styles.mtKhu, styles.khuLayout]}>
        <Image
          style={[styles.mtKhuChild, styles.khuChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-6.png")}
        />
        <Image
          style={styles.component24Icon}
          contentFit="cover"
          source={require("../assets/component-24.png")}
        />
        <Text style={[styles.nhpLiMt, styles.nhpPosition]}>Mật khẩu</Text>
        <Text style={[styles.nhpLiMtContainer, styles.ngK2Typo]}>
          <Text style={styles.nhpLiMt1}>{`Mật khẩu `}</Text>
          <Text style={styles.text}>*</Text>
        </Text>
      </View>
      <View style={[styles.hTn, styles.khuLayout]}>
        <Image
          style={[styles.mtKhuChild, styles.khuChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-6.png")}
        />
        <Text style={[styles.nhpLiMt, styles.nhpPosition]}>Họ tên</Text>
        <Text style={[styles.nhpLiMtContainer, styles.ngK2Typo]}>
          <Text style={styles.nhpLiMt1}>{`Họ tên `}</Text>
          <Text style={styles.text}>*</Text>
          <Text style={styles.nhpLiMt1}>{` `}</Text>
        </Text>
      </View>
      <Pressable
        style={styles.ngK1}
        onPress={() => navigation.navigate("false")}
      >
        <Text style={[styles.ngK2, styles.ngK2Typo]}>Đăng ký</Text>
      </Pressable>
      <View style={[styles.sInThoi, styles.khuLayout]}>
        <Image
          style={[styles.mtKhuChild, styles.khuChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-6.png")}
        />
        <Text style={[styles.sInThoi1, styles.nhpLiMtTypo]}>Số điện thoại</Text>
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
    left: 35,
    position: "absolute",
  },
  khuChildPosition: {
    height: 51,
    marginTop: -10,
    width: 361,
    borderRadius: Border.br_2xs,
    left: "50%",
    top: "50%",
    marginLeft: -180.5,
    position: "absolute",
  },
  nhpPosition: {
    textAlign: "left",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  ngK2Typo: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  nhpLiMtTypo: {
    color: Color.darkgray_100,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    marginLeft: -171,
    marginTop: 5.5,
  },
  nhpLiMtKhuChild: {
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    height: 51,
    marginTop: -10,
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
    color: Color.darkgray_100,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    marginLeft: -171,
    marginTop: 5.5,
  },
  nhpLiMt1: {
    color: Color.black,
  },
  text: {
    color: Color.red,
  },
  nhpLiMtContainer: {
    marginTop: -40.5,
    marginLeft: -180,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  nhpLiMtKhu: {
    top: 281,
  },
  mtKhuChild: {
    height: 51,
    marginTop: -10,
  },
  mtKhu: {
    top: 187,
  },
  hTn: {
    top: 93,
  },
  ngK2: {
    fontSize: FontSize.size_5xl,
    color: Color.white,
    textAlign: "center",
    alignSelf: "stretch",
  },
  ngK1: {
    marginTop: 177,
    backgroundColor: Color.darkcyan,
    paddingHorizontal: Padding.p_107xl,
    paddingVertical: Padding.p_3xs,
    width: 361,
    borderRadius: Border.br_2xs,
    marginLeft: -180.5,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  sInThoi1: {
    textAlign: "center",
    left: "50%",
    top: "50%",
    color: Color.darkgray_100,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    marginLeft: -171,
    position: "absolute",
  },
  sInThoi: {
    top: -1,
  },
  ngK: {
    height: 453,
    marginTop: 65,
    alignSelf: "stretch",
  },
});

export default MobileRegistrationContainer;
