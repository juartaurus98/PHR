import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding } from "../assets/scss/GlobalStyles";

const GovernmentInfoContainer = memo(() => {
  return (
    <View style={styles.thngTinHnhChnh}>
      <View style={styles.chiTit}>
        <View style={styles.ngySinh}>
          <Text style={[styles.text, styles.textFlexBox]}>09/02/1999</Text>
          <Text style={[styles.ngySinh1, styles.hnNhn1Position]}>
            Ngày sinh
          </Text>
        </View>
        <View style={[styles.giiTnh, styles.hnNhnSpaceBlock]}>
          <Image
            style={styles.tablergenderDemiboyIcon}
            contentFit="cover"
            source={require("../assets/images/tablergenderdemiboy.png")}
          />
          <Text style={[styles.nam, styles.textFlexBox]}>Nam</Text>
          <Text style={[styles.giiTnh1, styles.hnNhn1Position]}>Giới tính</Text>
        </View>
        <View style={[styles.hnNhn, styles.hnNhnSpaceBlock]}>
          <Text style={[styles.khngXcNh, styles.textFlexBox]}>
            Không xác định
          </Text>
          <Text style={[styles.hnNhn1, styles.hnNhn1Position]}>Hôn nhân</Text>
        </View>
        <View style={[styles.nghNghip, styles.hnNhnSpaceBlock]}>
          <Text style={[styles.nghNghip1, styles.textTypo]}>Nghề nghiệp</Text>
          <Text style={[styles.kSCng, styles.textFlexBox]}>
            Kỹ sư công nghệ thông tin
          </Text>
        </View>
        <View style={[styles.nghNghip, styles.hnNhnSpaceBlock]}>
          <Text style={[styles.nghNghip1, styles.textTypo]}>CMND/CCCD</Text>
          <Text style={[styles.text1, styles.textFlexBox]}>0330990032237</Text>
        </View>
        <View style={[styles.nghNghip, styles.hnNhnSpaceBlock]}>
          <Text style={[styles.sBhyt1, styles.sBhyt1Typo]}>Số BHYT</Text>
          <Text style={[styles.dn0192735515098, styles.sBhyt1Typo]}>
            DN0192735515098
          </Text>
        </View>
      </View>
      <Text style={[styles.thngTinHnh, styles.hnNhn1Position]}>
        Thông tin hành chính
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  textFlexBox: {
    display: "flex",
    textAlign: "right",
    alignItems: "center",
  },
  hnNhn1Position: {
    left: 0,
    textAlign: "left",
    top: 0,
    color: Color.black,
    position: "absolute",
  },
  hnNhnSpaceBlock: {
    marginTop: 11,
    alignSelf: "stretch",
  },
  textTypo: {
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
  },
  sBhyt1Typo: {
    height: 21,
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
  },
  text: {
    left: 257,
    width: 96,
    alignItems: "center",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    top: 5,
    textAlign: "right",
    position: "absolute",
  },
  ngySinh1: {
    width: 84,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    left: 0,
  },
  ngySinh: {
    height: 22,
    alignSelf: "stretch",
  },
  tablergenderDemiboyIcon: {
    left: 293,
    width: 25,
    overflow: "hidden",
    height: 26,
    top: 0,
    position: "absolute",
  },
  nam: {
    left: 313,
    width: 40,
    alignItems: "center",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    top: 5,
    textAlign: "right",
    position: "absolute",
  },
  giiTnh1: {
    width: 66,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    left: 0,
  },
  giiTnh: {
    height: 26,
  },
  khngXcNh: {
    top: 6,
    left: 237,
    width: 116,
    alignItems: "center",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  hnNhn1: {
    width: 68,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    left: 0,
  },
  hnNhn: {
    height: 23,
  },
  nghNghip1: {
    width: 89,
    textAlign: "left",
  },
  kSCng: {
    width: 176,
    alignItems: "center",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
  },
  nghNghip: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text1: {
    width: 113,
    alignItems: "center",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
  },
  sBhyt1: {
    width: 87,
    textAlign: "left",
  },
  dn0192735515098: {
    width: 143,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
  },
  chiTit: {
    top: 24,
    left: 14,
    backgroundColor: Color.gainsboro,
    width: 369,
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_base,
    paddingRight: 8,
    justifyContent: "flex-end",
    position: "absolute",
  },
  thngTinHnh: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
  },
  thngTinHnhChnh: {
    top: 28,
    left: 16,
    width: 383,
    height: 219,
    position: "absolute",
  },
});

export default GovernmentInfoContainer;
