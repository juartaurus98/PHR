import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import ABCHospitalSection from "./ABCHospitalSection";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const TreatmentHistoryContainer = memo(() => {
  return (
    <View style={styles.somethingElse}>
      <Text style={[styles.lchSIu, styles.lchSIuFlexBox]}>
        {" "}
        Lịch sử điều trị
      </Text>
      <ABCHospitalSection />
      <Text style={[styles.xemTtC, styles.lchSIuFlexBox]}>Xem tất cả</Text>
      <ABCHospitalSection propTop={168} />
    </View>
  );
});

const styles = StyleSheet.create({
  lchSIuFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  lchSIu: {
    top: 13,
    left: 0,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    display: "flex",
    alignItems: "center",
    width: 340,
  },
  xemTtC: {
    top: 296,
    left: 246,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  somethingElse: {
    top: 76,
    left: 10,
    borderRadius: Border.br_xl,
    backgroundColor: Color.whitesmoke,
    height: 318,
    overflow: "hidden",
    width: 340,
    position: "absolute",
  },
});

export default TreatmentHistoryContainer;
