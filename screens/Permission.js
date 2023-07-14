import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Permission = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.permission}>
      <Image
        style={[styles.background423x1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/background423x-1.png")}
      />
      <Image
        style={[styles.background413xIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/background413x.png")}
      />
      <View style={styles.statusPosition}>
        <View style={styles.statusBar1Position}>
          <View style={[styles.statusBarChild, styles.statusPosition]} />
          <Image
            style={[styles.backgroundIcon, styles.statusBar1Position]}
            contentFit="cover"
            source={require("../assets/background.png")}
          />
          <Text style={styles.gs}>MS</Text>
          <View style={styles.battery}>
            <Text style={styles.text}>100%</Text>
            <Image
              style={styles.batteryIcon}
              contentFit="cover"
              source={require("../assets/battery.png")}
            />
          </View>
          <Text style={styles.time}>9:41 AM</Text>
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.mobileSignalIcon}
            contentFit="cover"
            source={require("../assets/mobile-signal.png")}
          />
        </View>
      </View>
      <View style={[styles.frameNgNhp, styles.iconPosition]}>
        <Pressable
          style={[styles.buttonNgNhp, styles.buttonLayout]}
          onPress={() => navigation.navigate("MainMenuDoctor")}
        >
          <Text style={[styles.bcS, styles.bcSTypo]}>Bác sĩ</Text>
        </Pressable>
        <Pressable
          style={[styles.buttonNgNhp1, styles.buttonLayout]}
          onPress={() => navigation.navigate("MainMenuPatient")}
        >
          <Text style={[styles.bnhNhn, styles.bcSTypo]}>Bệnh nhân</Text>
        </Pressable>
        <Text style={styles.vuiLngChn}>Vui lòng chọn loại tài khoản</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  statusPosition: {
    height: 24,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  statusBar1Position: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  buttonLayout: {
    height: 61,
    width: 301,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: Color.darkcyan,
    borderRadius: Border.br_2xs,
    left: 30,
    position: "absolute",
  },
  bcSTypo: {
    color: Color.white,
    fontSize: FontSize.size_5xl,
    top: 15,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  background423x1Icon: {
    top: 0,
    left: 0,
    height: 800,
  },
  background413xIcon: {
    top: 136,
    height: 104,
  },
  statusBarChild: {
    backgroundColor: Color.dodgerblue,
  },
  backgroundIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  gs: {
    left: 26,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.sFProTextRegular,
    fontSize: FontSize.size_xs,
    top: 3,
    position: "absolute",
  },
  text: {
    right: 28,
    textAlign: "right",
    alignItems: "flex-end",
    width: 33,
    display: "flex",
    height: 14,
    color: Color.black,
    fontFamily: FontFamily.sFProTextRegular,
    fontSize: FontSize.size_xs,
    top: 0,
    position: "absolute",
  },
  batteryIcon: {
    top: 2,
    right: 0,
    width: 25,
    height: 11,
    position: "absolute",
  },
  battery: {
    top: 4,
    right: 5,
    width: 61,
    height: 14,
    position: "absolute",
  },
  time: {
    marginLeft: -24,
    left: "50%",
    fontWeight: "600",
    fontFamily: FontFamily.sFProTextSemibold,
    textAlign: "center",
    color: Color.black,
    fontSize: FontSize.size_xs,
    top: 3,
    position: "absolute",
  },
  wifiIcon: {
    width: 13,
    height: 9,
  },
  mobileSignalIcon: {
    width: 15,
    height: 10,
  },
  bcS: {
    left: 113,
  },
  buttonNgNhp: {
    top: 150,
  },
  bnhNhn: {
    left: 81,
  },
  buttonNgNhp1: {
    top: 254,
  },
  vuiLngChn: {
    top: 82,
    fontSize: FontSize.size_xl,
    textDecoration: "underline",
    textAlign: "justify",
    alignItems: "center",
    width: 300,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    left: 30,
    display: "flex",
    color: Color.black,
    position: "absolute",
  },
  frameNgNhp: {
    top: 285,
    height: 360,
  },
  permission: {
    backgroundColor: Color.white,
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
  },
});

export default Permission;
