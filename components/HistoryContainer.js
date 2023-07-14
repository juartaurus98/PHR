import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import ABCHospitalSection from "./ABCHospitalSection";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const HistoryContainer = memo(() => {
  return (
    <View style={styles.somethingElse}>
      <Text style={[styles.lchSKhm, styles.xemTtCFlexBox]}> Lịch sử khám</Text>
      <ABCHospitalSection propTop={40} />
      <ABCHospitalSection propTop={172} />
      <Text style={[styles.xemTtC, styles.xemTtCFlexBox]}>Xem tất cả</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  xemTtCFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  lchSKhm: {
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
    top: 300,
    left: 246,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  somethingElse: {
    top: 415,
    left: 10,
    borderRadius: Border.br_xl,
    backgroundColor: Color.whitesmoke,
    height: 324,
    overflow: "hidden",
    width: 340,
    position: "absolute",
  },
});

export default HistoryContainer;
