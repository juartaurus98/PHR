import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import AppointmentSchedule from "../components/AppointmentSchedule";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const PersonalInformation = () => {
  return (
    <View style={styles.personalInformation}>
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
            <Text style={[styles.text, styles.textFlexBox]}>100%</Text>
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
      <AppointmentSchedule />
      <View style={[styles.profile, styles.thngLayout1]}>
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
        <Text style={styles.anMnhHng}>AN MẠNH HÙNG</Text>
        <Text style={[styles.text1, styles.text1Position]}>0345 689 101</Text>
        <Text style={[styles.xunThuCu, styles.text1Position]}>
          144 Xuân Thuỷ, Cầu Giấy
        </Text>
      </View>
      <View style={[styles.thngTin, styles.thngLayout1]}>
        <View style={[styles.thngTinHnhChnh, styles.thngLayout1]}>
          <View style={[styles.chiTit, styles.chiTitLayout]}>
            <View style={[styles.nghNghip, styles.sInThoiFlexBox]}>
              <Text style={[styles.ngySinh, styles.namTypo]}>Ngày sinh</Text>
              <Text style={[styles.text2, styles.namTypo]}>08/02/1999</Text>
            </View>
            <View style={[styles.cmnd, styles.cmndFlexBox]}>
              <Text style={[styles.ngySinh, styles.namTypo]}>Giới tính</Text>
              <Text style={[styles.nam, styles.namTypo]}>Nam</Text>
            </View>
            <View style={[styles.cmnd, styles.cmndFlexBox]}>
              <Text style={[styles.hnNhn, styles.namTypo]}>Hôn nhân</Text>
              <Text style={[styles.khngXcNh, styles.namTypo]}>
                Không xác định
              </Text>
            </View>
            <View style={[styles.cmnd, styles.cmndFlexBox]}>
              <Text style={[styles.ngySinh, styles.namTypo]}>Nghề nghiệp</Text>
              <Text style={[styles.text2, styles.namTypo]}>
                Kỹ sư công nghệ thông tin
              </Text>
            </View>
            <View style={[styles.cmnd, styles.cmndFlexBox]}>
              <Text style={[styles.ngySinh, styles.namTypo]}>CCCD/CMND</Text>
              <Text style={[styles.text2, styles.namTypo]}>0330990032237</Text>
            </View>
            <View style={[styles.cmnd, styles.cmndFlexBox]}>
              <Text style={[styles.sBhyt1, styles.hNiTypo]}>{`Số BHYT
`}</Text>
              <Text style={[styles.text2, styles.namTypo]}>
                DN0192735515098
              </Text>
            </View>
          </View>
          <Text style={[styles.thngTinHnh, styles.aChLinTypo]}>
            Thông tin hành chính
          </Text>
        </View>
        <View style={[styles.linH, styles.thngLayout1]}>
          <View style={[styles.sInThoiParent, styles.headerFlexBox]}>
            <View style={styles.sInThoiFlexBox}>
              <Text style={[styles.tnhtp, styles.hNiTypo]}>Tỉnh/TP</Text>
              <Text style={[styles.hNi, styles.hNiTypo]}>Hà Nội</Text>
            </View>
            <View style={styles.cmndFlexBox}>
              <Text style={[styles.tnhtp, styles.hNiTypo]}>Quận/Huyện</Text>
              <Text style={[styles.qunLongBin, styles.hNiTypo]}>
                Quận Long Biên
              </Text>
            </View>
            <View style={styles.cmndFlexBox}>
              <Text style={[styles.tnhtp, styles.hNiTypo]}>Phường/Xã</Text>
              <Text style={[styles.qunLongBin, styles.hNiTypo]}>
                Phường Ngọc Lâm
              </Text>
            </View>
            <View style={styles.cmndFlexBox}>
              <Text style={[styles.tnhtp, styles.hNiTypo]}>Số nhà</Text>
              <Text style={[styles.qunLongBin, styles.hNiTypo]}>
                Số 2 ngõ 298/26 Ngọc Lâm
              </Text>
            </View>
          </View>
          <Text style={[styles.aChLin, styles.aChLinTypo]}>
            Địa chỉ liên hệ
          </Text>
        </View>
        <View style={[styles.thngTinChild, styles.thngLayout]} />
        <View style={[styles.thngTinItem, styles.thngLayout]} />
      </View>
      <View style={[styles.header, styles.headerFlexBox]}>
        <Image
          style={styles.logo11Icon}
          contentFit="cover"
          source={require("../assets/logo1-1.png")}
        />
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
    color: Color.black,
    fontFamily: FontFamily.sFProTextRegular,
    fontSize: FontSize.size_xs,
  },
  textLayout: {
    height: 14,
    position: "absolute",
  },
  textFlexBox: {
    display: "flex",
    textAlign: "right",
  },
  thngLayout1: {
    width: 340,
    position: "absolute",
  },
  mdiaccountLayout: {
    height: 100,
    width: 100,
  },
  text1Position: {
    fontSize: FontSize.size_base,
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
  chiTitLayout: {
    width: 319,
    left: 16,
    backgroundColor: Color.white,
  },
  sInThoiFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  namTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    color: Color.black,
  },
  cmndFlexBox: {
    marginTop: 11,
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  hNiTypo: {
    height: 17,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    color: Color.black,
  },
  aChLinTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  headerFlexBox: {
    justifyContent: "flex-end",
    position: "absolute",
  },
  thngLayout: {
    height: 1,
    width: 341,
    borderTopWidth: 1,
    borderColor: "#b8b3b3",
    borderStyle: "solid",
    left: 0,
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
    top: 3,
    color: Color.black,
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
    textAlign: "right",
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
    width: 200,
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
    marginTop: -2,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
  },
  xunThuCu: {
    marginTop: 38,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  profile: {
    marginTop: -316,
    height: 146,
    backgroundColor: Color.white,
    width: 340,
    top: "50%",
    marginLeft: -170,
    left: "50%",
    overflow: "hidden",
  },
  ngySinh: {
    width: 89,
    textAlign: "left",
  },
  text2: {
    width: 176,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
  },
  nghNghip: {
    height: 22,
  },
  nam: {
    width: 113,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
  },
  cmnd: {
    height: 22,
  },
  hnNhn: {
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
  sBhyt1: {
    textAlign: "left",
    flex: 1,
    height: 17,
  },
  chiTit: {
    top: 20,
    height: 226,
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_base,
    paddingRight: 8,
    position: "absolute",
  },
  thngTinHnh: {
    marginTop: -122.5,
    left: 14,
    top: "50%",
  },
  thngTinHnhChnh: {
    top: 8,
    height: 245,
    backgroundColor: Color.white,
    width: 340,
    left: 0,
  },
  tnhtp: {
    width: 84,
    textAlign: "left",
  },
  hNi: {
    width: 96,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
  },
  qunLongBin: {
    width: 202,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
  },
  sInThoiParent: {
    top: 26,
    height: 104,
    paddingHorizontal: Padding.p_5xs,
    paddingTop: Padding.p_sm,
    paddingBottom: Padding.p_8xs,
    width: 319,
    left: 16,
    backgroundColor: Color.white,
  },
  aChLin: {
    left: 16,
    fontWeight: "700",
    top: 0,
  },
  linH: {
    top: 267,
    height: 128,
    left: 0,
  },
  thngTinChild: {
    top: 253,
  },
  thngTinItem: {
    top: 395,
  },
  thngTin: {
    marginTop: -150,
    height: 486,
    backgroundColor: Color.white,
    width: 340,
    top: "50%",
    marginLeft: -170,
    left: "50%",
    overflow: "hidden",
  },
  logo11Icon: {
    width: 55,
    height: 50,
  },
  header: {
    top: 24,
    backgroundColor: Color.darkcyan,
    height: 50,
    width: 360,
    justifyContent: "flex-end",
    left: 0,
  },
  personalInformation: {
    backgroundColor: Color.lightcyan,
    height: 800,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default PersonalInformation;
