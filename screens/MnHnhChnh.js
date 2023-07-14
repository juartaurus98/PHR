import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MnHnhChnh = () => {
  return (
    <View style={styles.mnHnhChnh}>
      <View style={[styles.header, styles.hnhLayout]}>
        <Image
          style={styles.logo11Icon}
          contentFit="cover"
          source={require("../assets/logo1-11.png")}
        />
      </View>
      <View style={[styles.mnHnhChnhChild, styles.hnhShadowBox]} />
      <Text style={[styles.sInThoi, styles.hVTnTypo]}>Số điện thoại:</Text>
      <Text style={[styles.hVTn, styles.hVTnTypo]}>{`Họ và Tên: `}</Text>
      <Image
        style={[styles.mnHnhChnhItem, styles.hnhLayout]}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />
      <View style={[styles.mnHnhChnhInner, styles.hnhShadowBox]} />
      <Text style={styles.tinCh}>Tiện ích</Text>
      <View style={[styles.lchSKhmBnh, styles.chSScKhePosition]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
        <Text style={[styles.lchSKhm, styles.lchTypo]}>{`Lịch sử 
khám bệnh`}</Text>
      </View>
      <View style={[styles.hSScKhe, styles.kheLayout]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Text style={[styles.hSSc, styles.lchTypo]}>{`Hồ sơ 
sức khỏe`}</Text>
      </View>
      <View style={[styles.thnhVinGiaNh, styles.hSScKhePosition]}>
        <Image
          style={styles.mdifamilyIcon}
          contentFit="cover"
          source={require("../assets/mdifamily.png")}
        />
        <Text style={[styles.thnhVinGia, styles.lchTypo]}>{`Thành viên 
gia đình`}</Text>
      </View>
      <View style={[styles.chSScKhe, styles.kheLayout]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector21.png")}
        />
        <Text style={[styles.lchSKhm, styles.lchTypo]}>{`Chỉ số
sức khỏe`}</Text>
      </View>
      <View style={styles.thngTinTimChng}>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group1.png")}
        />
        <Text style={[styles.thngTinTim, styles.lchTypo]}>{`Thông tin
tiêm chủng`}</Text>
      </View>
      <View style={[styles.rectangleView, styles.hnhLayout]} />
      <View style={[styles.qungCo, styles.qungCoFlexBox]}>
        <Text style={styles.qungCo1}>Quảng cáo</Text>
        <Image
          style={[styles.qungCoChild, styles.qungCoChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-13.png")}
        />
      </View>
      <View style={[styles.thngTinTKhm, styles.thngTinTKhmLayout]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector31.png")}
        />
        <Text style={[styles.thngTinT, styles.lchTypo]}>{`Thông tin 
đặt khám`}</Text>
      </View>
      <View style={[styles.thngTinBcS, styles.nhGiScKhePosition]}>
        <View
          style={[styles.materialSymbolsmedicalInfor, styles.headerPosition]}
        />
        <Text style={[styles.thngTinBc, styles.lchTypo]}>{`Thông tin
bác sĩ`}</Text>
        <Image
          style={[styles.clipPathGroup, styles.qungCoChildLayout]}
          contentFit="cover"
          source={require("../assets/clip-path-group1.png")}
        />
      </View>
      <View style={[styles.nhGiScKhe, styles.nhGiScKhePosition]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector41.png")}
        />
        <Text style={[styles.nhGiSc, styles.lchTypo]}>{`Đánh giá
sức khỏe`}</Text>
      </View>
      <View style={[styles.ionhomeParent, styles.thngTinTKhmLayout]}>
        <Image
          style={[styles.ionhomeIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ionhome1.png")}
        />
        <Text style={[styles.trangCh, styles.lchTypo]}>Trang chủ</Text>
      </View>
      <View style={[styles.lchHn, styles.lchHnPosition]}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/vector51.png")}
        />
        <Text style={[styles.lchHn1, styles.lchTypo]}>Lịch hẹn</Text>
      </View>
      <Text style={[styles.thngBo, styles.qungCoFlexBox]}>Thông báo</Text>
      <View style={styles.simpleLineIconsplusParent}>
        <Image
          style={[styles.ionhomeIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/simplelineiconsplus1.png")}
        />
        <Text style={[styles.hSSc, styles.lchTypo]}>{`Đặt lịch `}</Text>
      </View>
      <Image
        style={styles.guidanceuser1Icon}
        contentFit="cover"
        source={require("../assets/guidanceuser1.png")}
      />
      <View style={[styles.gridiconsuserParent, styles.lchHnPosition]}>
        <Image
          style={[styles.ionhomeIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/gridiconsuser1.png")}
        />
        <Text style={[styles.lchHn1, styles.lchTypo]}>Cá nhân</Text>
      </View>
      <Image
        style={styles.icbaselineNotificationsNoneIcon}
        contentFit="cover"
        source={require("../assets/icbaselinenotificationsnone.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  hnhLayout: {
    width: 430,
    left: 0,
  },
  hnhShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  hVTnTypo: {
    textAlign: "center",
    left: 174,
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  chSScKhePosition: {
    top: 395,
    height: 76,
    position: "absolute",
  },
  lchTypo: {
    color: Color.white,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  kheLayout: {
    width: 55,
    alignItems: "center",
  },
  hSScKhePosition: {
    top: 398,
    position: "absolute",
  },
  qungCoFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  qungCoChildLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  thngTinTKhmLayout: {
    width: 59,
    alignItems: "center",
    position: "absolute",
  },
  nhGiScKhePosition: {
    height: 80,
    top: 495,
    position: "absolute",
  },
  headerPosition: {
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 30,
    width: 30,
  },
  lchHnPosition: {
    height: 50,
    top: 901,
    alignItems: "center",
    position: "absolute",
  },
  logo11Icon: {
    width: 100,
    height: 98,
  },
  header: {
    justifyContent: "flex-end",
    backgroundColor: Color.darkcyan,
    width: 430,
    top: 0,
    position: "absolute",
  },
  mnHnhChnhChild: {
    top: 132,
    left: 15,
    borderRadius: Border.br_xl,
    width: 386,
    height: 175,
    backgroundColor: Color.gainsboro_100,
  },
  sInThoi: {
    top: 230,
  },
  hVTn: {
    top: 178,
  },
  mnHnhChnhItem: {
    top: 337,
    height: 3,
    position: "absolute",
  },
  mnHnhChnhInner: {
    top: 382,
    height: 211,
    width: 430,
    left: 0,
    backgroundColor: Color.darkcyan,
  },
  tinCh: {
    top: 350,
    left: 8,
    textAlign: "right",
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  vectorIcon: {
    width: 40,
    height: 40,
  },
  lchSKhm: {
    marginTop: 6,
  },
  lchSKhmBnh: {
    left: 237,
    width: 65,
    alignItems: "center",
    height: 76,
  },
  hSSc: {
    marginTop: 3,
  },
  hSScKhe: {
    height: 73,
    left: 124,
    top: 398,
    position: "absolute",
  },
  mdifamilyIcon: {
    width: 60,
    height: 60,
    overflow: "hidden",
  },
  thnhVinGia: {
    marginTop: -14,
  },
  thnhVinGiaNh: {
    left: 16,
    width: 68,
    alignItems: "center",
    height: 76,
  },
  chSScKhe: {
    left: 353,
    height: 76,
    top: 395,
    position: "absolute",
  },
  groupIcon: {
    width: 42,
    height: 42,
  },
  thngTinTim: {
    marginTop: 13,
  },
  thngTinTimChng: {
    left: 348,
    width: 66,
    height: 83,
    top: 495,
    alignItems: "center",
    position: "absolute",
  },
  rectangleView: {
    top: 684,
    height: 212,
    backgroundColor: Color.gainsboro_100,
    position: "absolute",
  },
  qungCo1: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  qungCoChild: {
    alignSelf: "stretch",
    height: 57,
    marginTop: 150,
    width: "100%",
  },
  qungCo: {
    top: 733,
    width: 430,
    left: 0,
  },
  thngTinT: {
    marginTop: 12,
  },
  thngTinTKhm: {
    top: 493,
    height: 82,
    left: 124,
  },
  materialSymbolsmedicalInfor: {
    left: 48,
    width: 26,
    height: 26,
    overflow: "hidden",
  },
  thngTinBc: {
    top: 50,
    left: 0,
    color: Color.white,
    position: "absolute",
  },
  clipPathGroup: {
    height: "50%",
    width: "54.05%",
    top: "0%",
    right: "35.14%",
    bottom: "50%",
    left: "10.81%",
    maxHeight: "100%",
    position: "absolute",
  },
  thngTinBcS: {
    left: 23,
    width: 74,
  },
  nhGiSc: {
    marginTop: 10,
  },
  nhGiScKhe: {
    left: 242,
    width: 55,
    alignItems: "center",
  },
  ionhomeIcon: {
    overflow: "hidden",
  },
  trangCh: {
    marginTop: 4,
  },
  ionhomeParent: {
    top: 902,
    left: 5,
    height: 49,
  },
  lchHn1: {
    marginTop: 5,
  },
  lchHn: {
    left: 103,
    width: 50,
  },
  thngBo: {
    top: 936,
    left: 266,
    display: "flex",
    width: 69,
    color: Color.white,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  simpleLineIconsplusParent: {
    top: 903,
    left: 192,
    width: 45,
    height: 48,
    alignItems: "center",
    position: "absolute",
  },
  guidanceuser1Icon: {
    top: 174,
    left: 40,
    width: 90,
    height: 90,
    position: "absolute",
    overflow: "hidden",
  },
  gridiconsuserParent: {
    left: 366,
    width: 49,
  },
  icbaselineNotificationsNoneIcon: {
    left: 286,
    top: 901,
    height: 30,
    width: 30,
    position: "absolute",
    overflow: "hidden",
  },
  mnHnhChnh: {
    backgroundColor: Color.white,
    flex: 1,
    height: 955,
    overflow: "hidden",
    width: "100%",
  },
});

export default MnHnhChnh;
