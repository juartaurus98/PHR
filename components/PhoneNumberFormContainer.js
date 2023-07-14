import React, { useMemo, memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PhoneNumberFormContainer = memo(({ phoneNumber, fullName, propTop }) => {
  const frameSInThoiStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.frameSInThoi, frameSInThoiStyle]}>
      <View style={styles.frameSInThoiChild} />
      <Text style={[styles.sInThoi, styles.thoiFlexBox]}>{phoneNumber}</Text>
      <Text style={[styles.sInThoi1, styles.thoiFlexBox]}>{fullName}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  thoiFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  frameSInThoiChild: {
    top: 44,
    left: 30,
    borderRadius: Border.br_2xs,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 301,
    height: 51,
    position: "absolute",
  },
  sInThoi: {
    top: 57,
    left: 47,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemibold,
    color: Color.darkgray_100,
  },
  sInThoi1: {
    left: 35,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.black,
    top: 0,
  },
  frameSInThoi: {
    marginLeft: -177,
    left: "50%",
    width: 360,
    height: 90,
    top: 0,
    position: "absolute",
  },
});

export default PhoneNumberFormContainer;
