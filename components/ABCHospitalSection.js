import React, { useMemo, memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ABCHospitalSection = memo(({ propTop }) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View
      style={[styles.rectangleParent, styles.groupChildLayout, groupViewStyle]}
    >
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <Text style={[styles.bnhVinA, styles.bnhVinAFlexBox]}>
        Bệnh viện đa khoa ABC
      </Text>
      <Image
        style={styles.claritybuildingLineIcon}
        contentFit="cover"
        source={require("../assets/claritybuildingline.png")}
      />
      <Text style={[styles.mKhm091827, styles.khmTypo]}>Mã khám: 091827</Text>
      <Text style={[styles.ngyKhm01062023, styles.khmTypo]}>
        Ngày khám: 01/06/2023
      </Text>
      <Text style={[styles.ngoiTr, styles.khmTypo]}>Ngoại trú</Text>
      <View style={[styles.tipNhnWrapper, styles.bnhVinAFlexBox]}>
        <Text style={styles.tipNhn}>Đã tiếp nhận</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 120,
    width: 340,
    left: 0,
    position: "absolute",
  },
  bnhVinAFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  khmTypo: {
    height: 14,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
  },
  bnhVinA: {
    top: 13,
    left: 40,
    fontSize: FontSize.size_base,
    width: 180,
    height: 19,
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    alignItems: "center",
  },
  claritybuildingLineIcon: {
    top: 10,
    left: 5,
    width: 25,
    height: 25,
    overflow: "hidden",
    position: "absolute",
  },
  mKhm091827: {
    top: 50,
    width: 103,
    left: 14,
    height: 14,
  },
  ngyKhm01062023: {
    top: 77,
    width: 141,
    left: 14,
    height: 14,
  },
  ngoiTr: {
    top: 49,
    left: 255,
    width: 54,
  },
  tipNhn: {
    marginLeft: -37,
    top: 2,
    left: "50%",
    color: Color.white,
    textAlign: "center",
    zIndex: 0,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  tipNhnWrapper: {
    top: 71,
    left: 232,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.darkcyan,
    width: 100,
    height: 20,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_7xs,
  },
  rectangleParent: {
    top: 40,
  },
});

export default ABCHospitalSection;
