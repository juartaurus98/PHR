import React, { memo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const UtilityContainer = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={styles.tinCh}>
      <View style={styles.linHParent}>
        <View style={[styles.linH, styles.linHPosition]}>
          <Text style={styles.tinCh1}>Tiện ích</Text>
        </View>
        <Pressable
          style={[styles.lchSKhmBnh, styles.khePosition]}
          onPress={() => navigation.navigate("MedicalHistory")}
        >
          <Image
            style={[styles.vectorIcon, styles.linHPosition]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Text style={[styles.lchSKhm, styles.chSScTypo]}>{`Lịch sử 
khám bệnh`}</Text>
        </Pressable>
        <View style={[styles.thngTinTimChng, styles.chSScKhePosition]}>
          <Image
            style={[styles.groupIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group.png")}
          />
          <Text style={[styles.thngTinTim, styles.thngTypo]}>{`Thông tin
tiêm chủng`}</Text>
        </View>
        <View style={[styles.nhGiScKhe, styles.khePosition]}>
          <Image
            style={[styles.vectorIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
          <Text style={[styles.thngTinTim, styles.thngTypo]}>{`Đánh giá
sức khỏe`}</Text>
        </View>
        <View style={[styles.thngTinTKhm, styles.khePosition]}>
          <Image
            style={[styles.vectorIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
          <Text style={[styles.thngTinT, styles.thngTypo]}>{`Thông tin 
đặt khám`}</Text>
        </View>
        <View style={[styles.thngTinBcS, styles.thngTinBcSPosition]}>
          <Text style={[styles.thngTinBc, styles.chSScTypo]}>{`Thông tin
bác sĩ`}</Text>
          <Image
            style={[styles.vectorIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/clip-path-group.png")}
          />
        </View>
        <View style={[styles.chSScKhe, styles.chSScKhePosition]}>
          <Image
            style={[styles.vectorIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
          <Text style={[styles.chSSc, styles.chSScPosition]}>{`Chỉ số
sức khỏe`}</Text>
        </View>
        <Pressable
          style={[styles.hSScKhe, styles.khePosition]}
          onPress={() => navigation.navigate("PersonalHealthIndex")}
        >
          <Image
            style={[styles.vectorIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
          <Text style={[styles.thngTinTim, styles.thngTypo]}>{`Hồ sơ 
sức khỏe`}</Text>
        </Pressable>
        <View style={[styles.thnhVinGiaNh, styles.thngTinBcSPosition]}>
          <Image
            style={[styles.vectorIcon, styles.linHPosition]}
            contentFit="cover"
            source={require("../assets/vector6.png")}
          />
          <Text style={[styles.thnhVinGia, styles.thngTypo]}>{`Thành viên 
gia đình`}</Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  linHPosition: {
    top: 0,
    position: "absolute",
  },
  khePosition: {
    height: 50,
    width: 50,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  chSScTypo: {
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.darkcyan,
    fontSize: FontSize.size_5xs,
    width: 50,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  chSScKhePosition: {
    marginLeft: 95,
    height: 50,
    width: 50,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  thngTypo: {
    height: 20,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.darkcyan,
    fontSize: FontSize.size_5xs,
    width: 50,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  thngTinBcSPosition: {
    marginLeft: -145,
    height: 50,
    width: 50,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  chSScPosition: {
    top: 30,
    alignItems: "center",
    left: 0,
  },
  tinCh1: {
    fontSize: FontSize.size_base,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 0,
    top: 0,
    position: "absolute",
  },
  linH: {
    width: 62,
    height: 19,
    left: 0,
    overflow: "hidden",
  },
  vectorIcon: {
    width: 30,
    height: 30,
    left: 10,
  },
  lchSKhm: {
    alignItems: "center",
    marginLeft: -25,
    left: "50%",
    top: "50%",
    marginTop: 5,
  },
  lchSKhmBnh: {
    marginLeft: 15,
    width: 50,
    left: "50%",
    top: "50%",
    marginTop: -41,
  },
  groupIcon: {
    height: "63.25%",
    width: "63.25%",
    top: "-1.62%",
    right: "18.38%",
    bottom: "38.38%",
    left: "18.38%",
  },
  thngTinTim: {
    top: 30,
    alignItems: "center",
    left: 0,
  },
  thngTinTimChng: {
    marginTop: 40,
  },
  vectorIcon1: {
    height: "60%",
    width: "60%",
    top: "0%",
    right: "20%",
    bottom: "40%",
    left: "20%",
  },
  nhGiScKhe: {
    marginTop: 40,
    marginLeft: 15,
    width: 50,
    left: "50%",
    top: "50%",
  },
  thngTinT: {
    top: 32,
    alignItems: "center",
    left: 0,
  },
  thngTinTKhm: {
    marginLeft: -65,
    marginTop: 40,
  },
  thngTinBc: {
    marginTop: 7,
    alignItems: "center",
    marginLeft: -25,
    left: "50%",
    top: "50%",
  },
  thngTinBcS: {
    marginTop: 39,
  },
  chSSc: {
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.darkcyan,
    fontSize: FontSize.size_5xs,
    width: 50,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  chSScKhe: {
    marginTop: -41,
  },
  hSScKhe: {
    marginLeft: -64,
    marginTop: -41,
  },
  thnhVinGia: {
    alignItems: "flex-end",
    marginLeft: -25,
    left: "50%",
    top: "50%",
    marginTop: 5,
  },
  thnhVinGiaNh: {
    marginTop: -41,
  },
  linHParent: {
    top: 28,
    left: 25,
    width: 290,
    height: 180,
    position: "absolute",
  },
  tinCh: {
    top: 240,
    borderRadius: Border.br_xl,
    backgroundColor: Color.whitesmoke,
    width: 340,
    height: 235,
    overflow: "hidden",
    left: 10,
    position: "absolute",
  },
});

export default UtilityContainer;
