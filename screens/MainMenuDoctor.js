import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import AppointmentSchedule from "../components/AppointmentSchedule";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const MainMenuDoctor = () => {
  return (
    <View style={styles.mainmenuDoctor}>
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
      <View style={styles.header}>
        <Image
          style={styles.logo11Icon}
          contentFit="cover"
          source={require("../assets/logo1-1.png")}
        />
      </View>
      <View style={[styles.profile, styles.tinChBg]}>
        <View style={styles.mdiaccountCircleOutlineWrapper}>
          <Image
            style={styles.mdiaccountCircleOutlineIcon}
            contentFit="cover"
            source={require("../assets/mdiaccountcircleoutline.png")}
          />
        </View>
        <Text style={styles.nguynTunMinh}>Nguyễn Tuấn Minh</Text>
        <Text style={[styles.text1, styles.text1Position]}>0345 689 101</Text>
        <Text style={[styles.xunThuCu, styles.text1Position]}>
          144 Xuân Thuỷ, Cầu Giấy
        </Text>
      </View>
      <View style={[styles.tinCh, styles.tinChPosition]}>
        <Text style={[styles.thngTinHnh, styles.thngTinHnhTypo]}>
          Thông tin hành nghề
        </Text>
      </View>
      <Image
        style={[styles.mainmenuDoctorChild, styles.tinChPosition]}
        contentFit="cover"
        source={require("../assets/line-51.png")}
      />
      <AppointmentSchedule />
      <View style={[styles.somethingElse, styles.tinChPosition]}>
        <Text style={[styles.somethingElse1, styles.thngTinHnhTypo]}>
          Something Else
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusPosition: {
    height: 24,
    top: 0,
    width: 360,
    left: 0,
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
  tinChBg: {
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  text1Position: {
    fontSize: FontSize.size_sm,
    width: 200,
    marginLeft: -40,
    alignItems: "center",
    top: "50%",
    left: "50%",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  tinChPosition: {
    left: 10,
    width: 340,
    position: "absolute",
  },
  thngTinHnhTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    alignItems: "center",
    display: "flex",
    color: Color.black,
    position: "absolute",
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
    fontWeight: "600",
    fontFamily: FontFamily.sFProTextSemibold,
    textAlign: "center",
    left: "50%",
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
  logo11Icon: {
    width: 55,
    height: 50,
  },
  header: {
    top: 24,
    backgroundColor: Color.darkcyan,
    justifyContent: "flex-end",
    height: 50,
    width: 360,
    left: 0,
    position: "absolute",
  },
  mdiaccountCircleOutlineIcon: {
    height: 100,
    width: 100,
    overflow: "hidden",
  },
  mdiaccountCircleOutlineWrapper: {
    top: 30,
    left: 20,
    alignItems: "center",
    height: 100,
    width: 100,
    position: "absolute",
  },
  nguynTunMinh: {
    marginTop: -53,
    height: 40,
    width: 200,
    fontSize: FontSize.size_xl,
    marginLeft: -40,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    alignItems: "center",
    top: "50%",
    left: "50%",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  text1: {
    marginTop: -1,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
  },
  xunThuCu: {
    marginTop: 39,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  profile: {
    marginTop: -316,
    marginLeft: -170,
    height: 146,
    width: 340,
    top: "50%",
    borderRadius: Border.br_xl,
    left: "50%",
    position: "absolute",
  },
  thngTinHnh: {
    top: 12,
    left: 14,
    width: 286,
    height: 25,
    textAlign: "left",
  },
  tinCh: {
    top: 240,
    height: 235,
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  mainmenuDoctorChild: {
    top: 489,
    height: 1,
  },
  somethingElse1: {
    top: 76,
    justifyContent: "center",
    width: 340,
    textAlign: "center",
    left: 0,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  somethingElse: {
    top: 505,
    height: 225,
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  mainmenuDoctor: {
    backgroundColor: Color.lightcyan,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default MainMenuDoctor;
