import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize, Border, Padding } from "../assets/scss/GlobalStyles";

const ThngTinCNhn = () => {
  return (
    <View style={styles.thngTinCNhn}>
      <Image
        style={[styles.headerIcon, styles.lchSPosition]}
        contentFit="cover"
        source={require("../assets/images/header.png")}
      />
      <View style={styles.thngTinCNhn1}>
        <View style={styles.mdiaccountCircleOutlineParent}>
          <Image
            style={styles.mdiaccountCircleOutlineIcon}
            contentFit="cover"
            source={require("../assets/images/mdiaccountcircleoutline.png")}
          />
          <Text style={styles.anMnhHng}>AN MẠNH HÙNG</Text>
        </View>
        <View style={styles.hS}>
          <Text style={[styles.hS1, styles.xemTypo]}>Hồ sơ</Text>
          <Image
            style={[styles.hSChild, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/images/ellipse-1.png")}
          />
          <Image
            style={styles.mdiformatListBulletedIcon}
            contentFit="cover"
            source={require("../assets/images/mdiformatlistbulleted.png")}
          />
        </View>
        <View style={[styles.linKtHS, styles.linKtHSLayout]}>
          <Text style={[styles.linKtH, styles.chSScTypo]}>{`Liên kết hồ 
sơ`}</Text>
          <Image
            style={[styles.linKtHSChild, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/images/ellipse-1.png")}
          />
          <Image
            style={[styles.materialSymbolslinkIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/images/materialsymbolslink.png")}
          />
        </View>
        <View style={[styles.chSScKhe, styles.linKtHSLayout]}>
          <Text style={[styles.chSSc, styles.iconPosition]}>{`Chỉ số sức 
khỏe`}</Text>
          <Image
            style={[styles.chSScKheChild, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/images/ellipse-1.png")}
          />
          <Image
            style={[styles.mdiheartIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/images/mdiheart.png")}
          />
        </View>
      </View>
      <View style={[styles.lchS, styles.lchSPosition]}>
        <View style={styles.lchSIuTr}>
          <View style={[styles.lchSIuTrChild, styles.lchChildShadowBox]} />
          <Text style={[styles.bnhVinA, styles.bnhTypo]}>
            Bệnh viện đa khoa ABC
          </Text>
          <Image
            style={[
              styles.claritybuildingLineIcon,
              styles.claritybuildingIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/images/claritybuildingline.png")}
          />
          <Text style={[styles.mKhm091827, styles.ngoiTrTypo]}>
            Mã khám: 091827
          </Text>
          <Text style={[styles.ngyKhm01062023, styles.ngyTypo]}>
            Ngày khám: 01/06/2023
          </Text>
          <Text style={[styles.ngoiTr, styles.ngoiTrTypo]}>Ngoại trú</Text>
          <View style={[styles.tipNhnWrapper, styles.tipLayout]}>
            <Text style={[styles.tipNhn, styles.bnhTypo]}>Đã tiếp nhận</Text>
          </View>
          <Text style={[styles.lchSIu, styles.lchTypo]}>
            Lịch sử điều trị (gần đây)
          </Text>
          <Text style={[styles.xemTtC, styles.xemTypo]}>Xem tất cả</Text>
        </View>
        <View style={styles.lchSKhm}>
          <View style={[styles.lchSKhmChild, styles.lchChildShadowBox]} />
          <Text style={[styles.bnhVinA1, styles.bnhTypo]}>
            Bệnh viện đa khoa ABC
          </Text>
          <Image
            style={[
              styles.claritybuildingLineIcon1,
              styles.claritybuildingIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/images/claritybuildingline.png")}
          />
          <Text style={[styles.mKhm0918271, styles.ngoiTr1Typo]}>
            Mã khám: 091827
          </Text>
          <Text style={[styles.ngyKhm010620231, styles.ngyTypo]}>
            Ngày khám: 01/06/2023
          </Text>
          <Text style={[styles.ngoiTr1, styles.ngoiTr1Typo]}>Ngoại trú</Text>
          <View style={[styles.tipNhnContainer, styles.tipLayout]}>
            <Text style={[styles.tipNhn, styles.bnhTypo]}>Đã tiếp nhận</Text>
          </View>
          <Text style={[styles.lchSKhm1, styles.lchTypo]}>Lịch sử khám</Text>
          <Text style={[styles.xemTtC1, styles.xemTypo]}>Xem tất cả</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lchSPosition: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  xemTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.black,
    position: "absolute",
  },
  childLayout: {
    height: 57,
    width: 57,
    top: 0,
    position: "absolute",
  },
  linKtHSLayout: {
    height: 95,
    position: "absolute",
  },
  chSScTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.black,
  },
  iconPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  lchChildShadowBox: {
    height: 127,
    width: 403,
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_5xs,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  bnhTypo: {
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
  },
  claritybuildingIconLayout: {
    height: 26,
    width: 26,
    left: 5,
    position: "absolute",
    overflow: "hidden",
  },
  ngoiTrTypo: {
    top: 106,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  ngyTypo: {
    left: 18,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  tipLayout: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: 0,
    height: 32,
    width: 127,
    backgroundColor: Color.darkcyan,
    borderRadius: Border.br_3xs,
    left: 261,
    alignItems: "center",
    position: "absolute",
  },
  lchTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  ngoiTr1Typo: {
    top: 108,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  headerIcon: {
    height: 100,
    top: 0,
    width: 430,
  },
  mdiaccountCircleOutlineIcon: {
    width: 100,
    height: 100,
    overflow: "hidden",
  },
  anMnhHng: {
    marginTop: 17,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    alignSelf: "stretch",
  },
  mdiaccountCircleOutlineParent: {
    left: 57,
    width: 162,
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  hS1: {
    left: 12,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    top: 65,
  },
  hSChild: {
    left: 0,
  },
  mdiformatListBulletedIcon: {
    top: 14,
    left: 14,
    height: 30,
    width: 30,
    position: "absolute",
    overflow: "hidden",
  },
  hS: {
    top: 166,
    height: 80,
    width: 57,
    left: 0,
    position: "absolute",
  },
  linKtH: {
    top: 65,
    fontWeight: "500",
    left: 0,
    position: "absolute",
  },
  linKtHSChild: {
    left: 4,
  },
  materialSymbolslinkIcon: {
    marginLeft: -15,
    marginTop: -33.5,
    top: "50%",
    height: 30,
    width: 30,
    overflow: "hidden",
  },
  linKtHS: {
    top: 165,
    left: 105,
    width: 66,
  },
  chSSc: {
    marginTop: 17.5,
    marginLeft: -32,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.black,
  },
  chSScKheChild: {
    left: 3,
  },
  mdiheartIcon: {
    marginLeft: -16,
    marginTop: -33.5,
    top: "50%",
    height: 30,
    width: 30,
    overflow: "hidden",
  },
  chSScKhe: {
    top: 161,
    left: 219,
    width: 64,
  },
  thngTinCNhn1: {
    top: 123,
    left: 77,
    width: 283,
    height: 260,
    position: "absolute",
  },
  lchSIuTrChild: {
    top: 42,
  },
  bnhVinA: {
    left: 37,
    fontWeight: "600",
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xl,
    position: "absolute",
    top: 62,
  },
  claritybuildingLineIcon: {
    top: 60,
  },
  mKhm091827: {
    fontSize: FontSize.size_base,
    left: 17,
  },
  ngyKhm01062023: {
    top: 138,
  },
  ngoiTr: {
    left: 289,
    fontSize: FontSize.size_base,
  },
  tipNhn: {
    color: Color.white,
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  tipNhnWrapper: {
    top: 132,
  },
  lchSIu: {
    left: 0,
  },
  xemTtC: {
    top: 183,
    left: 306,
    fontSize: FontSize.size_base,
  },
  lchSIuTr: {
    height: 202,
    alignSelf: "stretch",
  },
  lchSKhmChild: {
    top: 44,
  },
  bnhVinA1: {
    top: 64,
    left: 37,
    fontWeight: "600",
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  claritybuildingLineIcon1: {
    top: 62,
  },
  mKhm0918271: {
    left: 17,
  },
  ngyKhm010620231: {
    top: 140,
  },
  ngoiTr1: {
    left: 289,
  },
  tipNhnContainer: {
    top: 134,
  },
  lchSKhm1: {
    left: 5,
    fontSize: FontSize.size_lg,
  },
  xemTtC1: {
    top: 185,
    left: 307,
    fontSize: FontSize.size_base,
  },
  lchSKhm: {
    height: 204,
    marginTop: 22,
    alignSelf: "stretch",
  },
  lchS: {
    top: 404,
    backgroundColor: Color.gainsboro,
    paddingLeft: 13,
    paddingTop: 18,
    paddingRight: Padding.p_sm,
    paddingBottom: 82,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  thngTinCNhn: {
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default ThngTinCNhn;
