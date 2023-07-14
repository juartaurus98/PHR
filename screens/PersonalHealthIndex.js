import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import AppointmentSchedule from "../components/AppointmentSchedule";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const PersonalHealthIndex = () => {
  return (
    <View style={styles.personalHealthIndex}>
      <View style={styles.statusPosition}>
        <View style={styles.statusBar1Position}>
          <View style={[styles.statusBarChild, styles.statusPosition]} />
          <Image
            style={[styles.backgroundIcon, styles.statusBar1Position]}
            contentFit="cover"
            source={require("../assets/background.png")}
          />
          <Text style={[styles.gs, styles.gsTypo]}>MS</Text>
          <View style={[styles.battery, styles.textLayout]}>
            <Text style={[styles.text, styles.cmFlexBox]}>100%</Text>
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
      <AppointmentSchedule />
      <View style={[styles.profile, styles.tinLayout]}>
        <View
          style={[
            styles.mdiaccountCircleOutlineWrapper,
            styles.mdiaccountLayout,
          ]}
        >
          <Image
            style={[
              styles.mdiaccountCircleOutlineIcon,
              styles.mdiaccountLayout,
            ]}
            contentFit="cover"
            source={require("../assets/mdiaccountcircleoutline.png")}
          />
        </View>
        <Text style={[styles.anMnhHng, styles.text1Position]}>
          AN MẠNH HÙNG
        </Text>
        <Text style={[styles.text1, styles.chSCTypo]}>0345 689 101</Text>
        <Text style={[styles.xunThuCu, styles.chSCTypo]}>
          144 Xuân Thuỷ, Cầu Giấy
        </Text>
      </View>
      <View style={[styles.thngTin, styles.tinLayout]}>
        <View style={[styles.thngTinHnhChnh, styles.tinLayout]}>
          <View style={[styles.chiTit, styles.chSCPosition]}>
            <View style={styles.cmndFlexBox}>
              <Text style={[styles.chiuCao, styles.cmTypo]}>Chiều cao</Text>
              <Text style={[styles.cm, styles.cmTypo]}>170cm</Text>
            </View>
            <View style={[styles.cmnd, styles.cmndFlexBox]}>
              <Text style={[styles.chiuCao, styles.cmTypo]}>Cân nặng</Text>
              <Text style={[styles.kg, styles.cmTypo]}>70kg</Text>
            </View>
            <View style={[styles.cmnd, styles.cmndFlexBox]}>
              <Text style={[styles.bmi, styles.cmTypo]}>BMI</Text>
              <Text style={[styles.khngXcNh, styles.cmTypo]}>
                Không xác định
              </Text>
            </View>
            <View style={[styles.cmnd, styles.cmndFlexBox]}>
              <Text style={[styles.chiuCao, styles.cmTypo]}>Huyết áp</Text>
              <Text style={[styles.cm, styles.cmTypo]}>Không xác định</Text>
            </View>
            <View style={[styles.cmnd, styles.cmndFlexBox]}>
              <Text style={[styles.chiuCao, styles.cmTypo]}>Nhịp tim</Text>
              <Text style={[styles.cm, styles.cmTypo]}>Không xác định</Text>
            </View>
            <View style={[styles.cmnd, styles.cmndFlexBox]}>
              <Text style={[styles.ngHuyt, styles.ngHuytTypo]}>{`Đường huyết
`}</Text>
              <Text style={[styles.cm, styles.cmTypo]}>Không xác định</Text>
            </View>
            <View style={[styles.cmnd, styles.cmndFlexBox]}>
              <Text style={[styles.ngHuyt, styles.ngHuytTypo]}>{`Thân nhiệt
`}</Text>
              <Text style={[styles.cm, styles.cmTypo]}>Không xác định</Text>
            </View>
            <View style={[styles.cmnd, styles.cmndFlexBox]}>
              <Text
                style={[styles.nngOxi, styles.ngHuytTypo]}
              >{`Nồng độ Oxi trong máu
`}</Text>
              <Text style={[styles.cm, styles.cmTypo]}>Không xác định</Text>
            </View>
          </View>
          <Text style={[styles.chSC, styles.chSCPosition]}>Chỉ số cơ bản</Text>
          <View style={styles.thngTinHnhChnhChild} />
        </View>
        <View style={[styles.tinS, styles.tinLayout]}>
          <Text style={[styles.chSC, styles.chSCPosition]}>Tiền sử bệnh</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  gsTypo: {
    fontFamily: FontFamily.sFProTextRegular,
    fontSize: FontSize.size_xs,
    color: Color.black,
  },
  textLayout: {
    height: 14,
    position: "absolute",
  },
  cmFlexBox: {
    display: "flex",
    textAlign: "right",
  },
  tinLayout: {
    width: 340,
    position: "absolute",
  },
  mdiaccountLayout: {
    height: 100,
    width: 100,
  },
  text1Position: {
    width: 200,
    marginLeft: -40,
    alignItems: "center",
    top: "50%",
    left: "50%",
    display: "flex",
    position: "absolute",
  },
  chSCTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
  },
  chSCPosition: {
    left: 16,
    position: "absolute",
  },
  cmTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    color: Color.black,
  },
  cmndFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    height: 22,
    alignSelf: "stretch",
    alignItems: "center",
  },
  ngHuytTypo: {
    height: 17,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.black,
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
    top: 3,
    fontFamily: FontFamily.sFProTextRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  text: {
    right: 28,
    alignItems: "flex-end",
    width: 33,
    height: 14,
    position: "absolute",
    color: Color.black,
    fontFamily: FontFamily.sFProTextRegular,
    fontSize: FontSize.size_xs,
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
    overflow: "hidden",
  },
  mdiaccountCircleOutlineWrapper: {
    top: 30,
    left: 20,
    alignItems: "center",
    position: "absolute",
  },
  anMnhHng: {
    marginTop: -53,
    fontSize: FontSize.size_xl,
    height: 40,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    width: 200,
    marginLeft: -40,
    textAlign: "left",
    color: Color.black,
  },
  text1: {
    marginTop: -2,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    width: 200,
    marginLeft: -40,
    alignItems: "center",
    top: "50%",
    left: "50%",
    display: "flex",
    position: "absolute",
    fontSize: FontSize.size_base,
  },
  xunThuCu: {
    marginTop: 38,
    width: 200,
    marginLeft: -40,
    alignItems: "center",
    top: "50%",
    left: "50%",
    display: "flex",
    position: "absolute",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  profile: {
    marginTop: -316,
    height: 146,
    backgroundColor: Color.white,
    top: "50%",
    marginLeft: -170,
    width: 340,
    left: "50%",
    overflow: "hidden",
  },
  chiuCao: {
    width: 89,
    textAlign: "left",
  },
  cm: {
    width: 176,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
  },
  kg: {
    width: 113,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
  },
  cmnd: {
    marginTop: 11,
  },
  bmi: {
    width: 87,
    height: 21,
    textAlign: "left",
  },
  khngXcNh: {
    width: 143,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
  },
  ngHuyt: {
    flex: 1,
    height: 17,
  },
  nngOxi: {
    width: 154,
  },
  chiTit: {
    top: 19,
    width: 319,
    height: 282,
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_2xs,
    paddingRight: 8,
    paddingBottom: Padding.p_2xs,
    backgroundColor: Color.white,
  },
  chSC: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    top: 0,
  },
  thngTinHnhChnhChild: {
    top: 301,
    borderStyle: "solid",
    borderColor: "#b8b3b3",
    borderTopWidth: 1,
    width: 341,
    height: 1,
    left: 0,
    position: "absolute",
  },
  thngTinHnhChnh: {
    top: 8,
    height: 301,
    backgroundColor: Color.white,
    left: 0,
  },
  tinS: {
    top: 321,
    height: 165,
    left: 0,
    overflow: "hidden",
  },
  thngTin: {
    marginTop: -150,
    height: 486,
    backgroundColor: Color.white,
    top: "50%",
    marginLeft: -170,
    width: 340,
    left: "50%",
    overflow: "hidden",
  },
  personalHealthIndex: {
    backgroundColor: Color.lightcyan,
    height: 800,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default PersonalHealthIndex;
