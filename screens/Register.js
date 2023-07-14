import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PhoneNumberFormContainer from "../components/PhoneNumberFormContainer";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Register = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.register}>
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
          <Text style={[styles.gs, styles.gsClr]}>MS</Text>
          <View style={[styles.battery, styles.textLayout]}>
            <Text style={[styles.text, styles.textLayout]}>100%</Text>
            <Image
              style={styles.batteryIcon}
              contentFit="cover"
              source={require("../assets/battery.png")}
            />
          </View>
          <Text style={[styles.time, styles.timeFlexBox]}>9:41 AM</Text>
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
      <View style={[styles.frameNgK, styles.iconPosition]}>
        <Pressable
          style={styles.frameToTiKhon}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[styles.toTiKhon, styles.timeFlexBox]}>
            Tạo tài khoản
          </Text>
        </Pressable>
        <PhoneNumberFormContainer
          phoneNumber="Số điện thoại"
          fullName="Số điện thoại"
          propTop={0}
        />
        <PhoneNumberFormContainer
          phoneNumber="Họ tên"
          fullName="Họ tên "
          propTop={105}
        />
        <PhoneNumberFormContainer
          phoneNumber="Mật khẩu"
          fullName="Mật khẩu"
          propTop={210}
        />
        <PhoneNumberFormContainer
          phoneNumber="Nhập lại mật khẩu"
          fullName="Nhập lại mật khẩu"
          propTop={315}
        />
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
  gsClr: {
    color: Color.black,
    fontSize: FontSize.size_xs,
  },
  textLayout: {
    height: 14,
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  background423x1Icon: {
    top: 0,
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
    overflow: "hidden",
    maxHeight: "100%",
  },
  gs: {
    left: 26,
    textAlign: "left",
    fontFamily: FontFamily.sFProTextRegular,
    color: Color.black,
    fontSize: FontSize.size_xs,
    top: 3,
    position: "absolute",
  },
  text: {
    right: 28,
    textAlign: "right",
    display: "flex",
    alignItems: "flex-end",
    width: 33,
    color: Color.black,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.sFProTextRegular,
    top: 0,
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
  },
  time: {
    marginLeft: -24,
    left: "50%",
    fontWeight: "600",
    fontFamily: FontFamily.sFProTextSemibold,
    color: Color.black,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    top: 3,
  },
  wifiIcon: {
    width: 13,
    height: 9,
  },
  mobileSignalIcon: {
    width: 15,
    height: 10,
  },
  toTiKhon: {
    top: 10,
    left: 64,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.white,
  },
  frameToTiKhon: {
    top: 440,
    left: 33,
    borderRadius: Border.br_2xs,
    backgroundColor: Color.darkcyan,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 301,
    height: 51,
    position: "absolute",
  },
  frameNgK: {
    top: 251,
    height: 490,
  },
  register: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    width: "100%",
  },
});

export default Register;
