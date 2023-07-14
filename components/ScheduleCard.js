import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const ScheduleCard = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainmenuParent}>
      <View style={styles.mainmenu}>
        <Image
          style={[styles.ionhomeIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ionhome.png")}
        />
        <Text style={[styles.trangCh, styles.cNhn1FlexBox]}>Trang chủ</Text>
      </View>
      <Pressable
        style={[styles.cNhn, styles.lchPosition]}
        onPress={() => navigation.navigate("Personal")}
      >
        <Image
          style={[styles.ionhomeIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/gridiconsuser.png")}
        />
        <Text style={[styles.cNhn1, styles.cNhn1FlexBox]}>Cá nhân</Text>
      </Pressable>
      <View style={[styles.tLch, styles.lchPosition]}>
        <Image
          style={[styles.ionhomeIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/simplelineiconsplus.png")}
        />
        <Text style={[styles.tLch1, styles.cNhn1FlexBox]}>{`Đặt lịch `}</Text>
      </View>
      <View style={[styles.thngBo, styles.lchPosition]}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/-icon-bell.png")}
        />
        <Text style={[styles.cNhn1, styles.cNhn1FlexBox]}>Thông báo</Text>
      </View>
      <View style={[styles.lchHn, styles.lchPosition]}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.cNhn1, styles.cNhn1FlexBox]}>Lịch hẹn</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  iconLayout: {
    height: 30,
    width: 30,
  },
  cNhn1FlexBox: {
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_4xs,
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
  },
  lchPosition: {
    top: 2,
    alignItems: "center",
    height: 50,
    width: 50,
    position: "absolute",
  },
  ionhomeIcon: {
    overflow: "hidden",
  },
  trangCh: {
    marginTop: 4,
  },
  mainmenu: {
    marginTop: -24,
    marginLeft: -174,
    top: "50%",
    left: "50%",
    paddingBottom: Padding.p_11xs,
    maxWidth: 50,
    alignItems: "center",
    height: 50,
    width: 50,
    position: "absolute",
  },
  cNhn1: {
    marginTop: 5,
  },
  cNhn: {
    left: 306,
  },
  tLch1: {
    marginTop: 3,
  },
  tLch: {
    left: 156,
  },
  thngBo: {
    left: 231,
  },
  lchHn: {
    left: 81,
  },
  mainmenuParent: {
    top: 748,
    left: 0,
    backgroundColor: Color.darkcyan,
    width: 360,
    height: 52,
    overflow: "hidden",
    position: "absolute",
  },
});

export default ScheduleCard;
