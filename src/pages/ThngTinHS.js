import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import GovernmentInfoContainer from "../components/GovernmentInfoContainer";
import { FontFamily, FontSize, Color, Padding } from "../assets/scss/GlobalStyles";

const ThngTinHS = () => {
  return (
    <View style={styles.thngTinHS}>
      <View style={styles.frameFlexBox}>
        <Image
          style={[styles.headerIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/images/header1.png")}
        />
        <Text style={styles.hS}>Hồ Sơ</Text>
      </View>
      <View style={[styles.thngTinHSParent, styles.frameFlexBox]}>
        <View style={styles.thngTinHS1}>
          <View style={styles.mdiaccountCircleOutlineParent}>
            <Image
              style={[styles.mdiaccountCircleOutlineIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/images/mdiaccountcircleoutline.png")}
            />
            <Text style={styles.anMnhHng}>AN MẠNH HÙNG</Text>
          </View>
          <View style={[styles.nhIDin, styles.dinPosition]}>
            <Text style={[styles.nhIDin1, styles.chSScTypo]}>Ảnh đại diện</Text>
            <Image
              style={[styles.nhIDinChild, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/images/ellipse-1.png")}
            />
            <Image
              style={[styles.bicameraIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/images/bicamera.png")}
            />
          </View>
          <View style={[styles.cpNhtHS, styles.cpNhtHSLayout]}>
            <Text style={[styles.cpNhtH, styles.chSScTypo]}>{`Cập nhật hồ
sơ`}</Text>
            <Image
              style={[styles.cpNhtHSChild, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/images/ellipse-1.png")}
            />
            <Image
              style={[styles.mdiformatListBulletedIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/images/mdiformatlistbulleted.png")}
            />
          </View>
          <View style={[styles.chSScKhe, styles.cpNhtHSLayout]}>
            <Text style={[styles.chSSc, styles.chSScPosition]}>{`Chỉ số sức 
khỏe`}</Text>
            <Image
              style={[styles.chSScKheChild, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/images/ellipse-1.png")}
            />
            <Image
              style={[styles.mdiheartIcon, styles.chSScPosition]}
              contentFit="cover"
              source={require("../assets/images/mdiheart.png")}
            />
          </View>
        </View>
        <View style={styles.thngTin}>
          <GovernmentInfoContainer />
          <View style={[styles.linH, styles.linLayout]}>
            <View style={[styles.sInThoiParent, styles.thoiPosition]}>
              <View style={styles.emailFlexBox}>
                <Text style={[styles.sDiNg, styles.sDiNgLayout]}>
                  Số di động
                </Text>
                <Text style={[styles.text, styles.hNiFlexBox]}>0869818757</Text>
              </View>
              <View style={[styles.email, styles.emailFlexBox]}>
                <Text style={[styles.email1, styles.textTypo]}>Email</Text>
                <Text
                  style={[
                    styles.manhhung9299gmailcom,
                    styles.qunLongBinFlexBox,
                  ]}
                >
                  manhhung9299@gmail.com
                </Text>
              </View>
            </View>
            <Text style={[styles.linH1, styles.linH1Typo]}>Liên hệ</Text>
          </View>
          <View style={[styles.linH2, styles.linLayout]}>
            <View style={styles.chaCThngTinWrapper}>
              <Text style={[styles.chaCThng, styles.linH1Typo]}>
                Chưa có thông tin
              </Text>
            </View>
            <Text style={[styles.linH1, styles.linH1Typo]}>Người liên hệ</Text>
          </View>
          <View style={styles.linH3}>
            <View style={[styles.sInThoiGroup, styles.thoiPosition]}>
              <View style={styles.emailFlexBox}>
                <Text style={[styles.tnhtp, styles.hNiTypo]}>Tỉnh/TP</Text>
                <Text style={[styles.hNi, styles.hNiTypo]}>Hà Nội</Text>
              </View>
              <View style={[styles.email, styles.emailFlexBox]}>
                <Text style={[styles.tnhtp, styles.hNiTypo]}>Quận/Huyện</Text>
                <Text style={[styles.qunLongBin, styles.hNiTypo]}>
                  Quận Long Biên
                </Text>
              </View>
              <View style={[styles.email, styles.emailFlexBox]}>
                <Text style={[styles.tnhtp, styles.hNiTypo]}>Phường/Xã</Text>
                <Text style={[styles.qunLongBin, styles.hNiTypo]}>
                  Phường Ngọc Lâm
                </Text>
              </View>
              <View style={[styles.email, styles.emailFlexBox]}>
                <Text style={[styles.tnhtp, styles.hNiTypo]}>Số nhà</Text>
                <Text style={[styles.qunLongBin, styles.hNiTypo]}>
                  Số 2 ngõ 298/26 Ngọc Lâm
                </Text>
              </View>
            </View>
            <Text style={[styles.linH1, styles.linH1Typo]}>
              Địa chỉ liên hệ
            </Text>
          </View>
          <Image
            style={[styles.thngTinChild, styles.thngPosition]}
            contentFit="cover"
            source={require("../assets/images/line-3.png")}
          />
          <Image
            style={[styles.thngTinItem, styles.thngPosition]}
            contentFit="cover"
            source={require("../assets/images/line-4.png")}
          />
          <Image
            style={[styles.thngTinInner, styles.thngPosition]}
            contentFit="cover"
            source={require("../assets/images/line-4.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: 100,
    overflow: "hidden",
  },
  frameFlexBox: {
    justifyContent: "flex-end",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  dinPosition: {
    left: 0,
    position: "absolute",
  },
  chSScTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    color: Color.black,
  },
  childLayout: {
    height: 57,
    width: 57,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 30,
    width: 30,
    overflow: "hidden",
  },
  cpNhtHSLayout: {
    height: 95,
    position: "absolute",
  },
  chSScPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  linLayout: {
    height: 103,
    width: 383,
    left: 16,
    position: "absolute",
  },
  thoiPosition: {
    paddingTop: Padding.p_sm,
    paddingHorizontal: Padding.p_5xs,
    width: 369,
    left: 14,
    top: 24,
    backgroundColor: Color.gainsboro,
    position: "absolute",
    justifyContent: "flex-end",
  },
  sDiNgLayout: {
    width: 84,
    textAlign: "left",
  },
  hNiFlexBox: {
    width: 96,
    display: "flex",
    textAlign: "right",
    alignItems: "center",
  },
  emailFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  textTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    color: Color.black,
  },
  qunLongBinFlexBox: {
    width: 202,
    display: "flex",
    textAlign: "right",
    alignItems: "center",
  },
  linH1Typo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  hNiTypo: {
    height: 17,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    color: Color.black,
  },
  thngPosition: {
    height: 2,
    left: 0,
    position: "absolute",
  },
  headerIcon: {
    maxWidth: "100%",
    alignSelf: "stretch",
    width: "100%",
    height: 100,
  },
  hS: {
    fontSize: 34,
    color: Color.white,
    marginTop: -64,
    textAlign: "right",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  mdiaccountCircleOutlineIcon: {
    width: 100,
  },
  anMnhHng: {
    fontSize: FontSize.size_xl,
    marginTop: 17,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  mdiaccountCircleOutlineParent: {
    left: 64,
    width: 162,
    top: 0,
    position: "absolute",
    alignItems: "center",
  },
  nhIDin1: {
    top: 67,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  nhIDinChild: {
    left: 7,
  },
  bicameraIcon: {
    top: 13,
    left: 21,
    position: "absolute",
  },
  nhIDin: {
    top: 166,
    width: 72,
    height: 82,
  },
  cpNhtH: {
    top: 65,
    left: 0,
    position: "absolute",
    textAlign: "center",
  },
  cpNhtHSChild: {
    left: 6,
  },
  mdiformatListBulletedIcon: {
    top: 14,
    left: 20,
    position: "absolute",
  },
  cpNhtHS: {
    top: 165,
    left: 110,
    width: 70,
  },
  chSSc: {
    marginTop: 17.5,
    marginLeft: -32,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    color: Color.black,
    textAlign: "center",
  },
  chSScKheChild: {
    left: 3,
  },
  mdiheartIcon: {
    marginTop: -33.5,
    marginLeft: -16,
    height: 30,
    width: 30,
    overflow: "hidden",
  },
  chSScKhe: {
    top: 161,
    left: 226,
    width: 64,
  },
  thngTinHS1: {
    width: 290,
    height: 260,
  },
  sDiNg: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    color: Color.black,
  },
  text: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    color: Color.black,
  },
  email1: {
    width: 66,
    textAlign: "left",
  },
  manhhung9299gmailcom: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    color: Color.black,
  },
  email: {
    marginTop: 11,
  },
  sInThoiParent: {
    paddingBottom: 20,
  },
  linH1: {
    left: 0,
    position: "absolute",
    color: Color.black,
    top: 0,
  },
  linH: {
    top: 264,
  },
  chaCThng: {
    color: "#a0a0a0",
    alignSelf: "stretch",
  },
  chaCThngTinWrapper: {
    paddingHorizontal: 108,
    paddingVertical: 0,
    justifyContent: "center",
    width: 369,
    left: 14,
    top: 24,
    backgroundColor: Color.gainsboro,
    position: "absolute",
  },
  linH2: {
    top: 545,
  },
  tnhtp: {
    width: 84,
    textAlign: "left",
  },
  hNi: {
    width: 96,
    display: "flex",
    textAlign: "right",
    alignItems: "center",
  },
  qunLongBin: {
    width: 202,
    display: "flex",
    textAlign: "right",
    alignItems: "center",
  },
  sInThoiGroup: {
    paddingBottom: 5,
  },
  linH3: {
    top: 384,
    height: 144,
    width: 383,
    left: 16,
    position: "absolute",
  },
  thngTinChild: {
    top: 254,
    width: 430,
    height: 2,
  },
  thngTinItem: {
    top: 365,
    width: 430,
    height: 2,
  },
  thngTinInner: {
    top: 535,
    width: 423,
  },
  thngTin: {
    height: 760,
    marginTop: 10,
    backgroundColor: Color.gainsboro,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  thngTinHSParent: {
    backgroundColor: Color.white,
    justifyContent: "flex-end",
  },
  thngTinHS: {
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default ThngTinHS;
