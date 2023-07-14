import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import AppointmentSchedule from "../components/AppointmentSchedule";
import TreatmentHistoryContainer from "../components/TreatmentHistoryContainer";
import HistoryContainer from "../components/HistoryContainer";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const MedicalHistory = () => {
  return (
    <View style={styles.medicalHistory}>
      <View style={[styles.statusBar, styles.statusPosition]}>
        <View style={styles.statusBar1Position}>
          <View style={[styles.statusBarChild, styles.statusPosition]} />
          <Image
            style={[styles.backgroundIcon, styles.statusBar1Position]}
            contentFit="cover"
            source={require("../assets/background1.png")}
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
          <Text style={[styles.time, styles.gsClr]}>9:41 AM</Text>
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
      <View style={[styles.header, styles.statusPosition]}>
        <Image
          style={styles.logo11Icon}
          contentFit="cover"
          source={require("../assets/logo1-1.png")}
        />
      </View>
      <AppointmentSchedule />
      <TreatmentHistoryContainer />
      <HistoryContainer />
      <Image
        style={styles.medicalHistoryChild}
        contentFit="cover"
        source={require("../assets/line-5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  statusPosition: {
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
  gsClr: {
    color: Color.black,
    fontSize: FontSize.size_xs,
  },
  textLayout: {
    height: 14,
    position: "absolute",
  },
  statusBarChild: {
    backgroundColor: Color.dodgerblue,
    height: 24,
    top: 0,
  },
  backgroundIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
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
  statusBar: {
    height: 20,
    top: 0,
  },
  logo11Icon: {
    width: 55,
    height: 50,
  },
  header: {
    top: 20,
    backgroundColor: Color.darkcyan,
    justifyContent: "flex-end",
    height: 50,
  },
  medicalHistoryChild: {
    top: 404,
    left: 10,
    width: 340,
    height: 1,
    position: "absolute",
  },
  medicalHistory: {
    backgroundColor: Color.lightcyan,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default MedicalHistory;
