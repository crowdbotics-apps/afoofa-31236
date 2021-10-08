import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a823/9fc9/a0293ecb7b084736ec7d1a6d440fffbd"
        }}
        style={styles.ImageBackground_835_2993}
      />
      <View style={styles.View_835_3037}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eb8/7150/38f4ab82808425a54ddf4828b1b2d3cf"
          }}
          style={styles.ImageBackground_835_2749}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ded/19c6/357ecd70fd0ee7e1c6ce80b17393f099"
          }}
          style={styles.ImageBackground_835_2757}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06f4/5ab4/0b52fa6376504d33c9f7615ab64d055d"
          }}
          style={styles.ImageBackground_835_2763}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d64a/01ab/6eab8adb9f01b331fa467106198df05d"
          }}
          style={styles.ImageBackground_835_2771}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4798/a1ef/223b05d3f91ff29a5859d970d1b16556"
          }}
          style={styles.ImageBackground_835_2777}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06f4/5ab4/0b52fa6376504d33c9f7615ab64d055d"
          }}
          style={styles.ImageBackground_835_2784}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06f4/5ab4/0b52fa6376504d33c9f7615ab64d055d"
          }}
          style={styles.ImageBackground_835_2792}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57ab/7711/9ffcaa82f3a329d24d291c8b1b2980a8"
          }}
          style={styles.ImageBackground_835_2800}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eb8/7150/38f4ab82808425a54ddf4828b1b2d3cf"
          }}
          style={styles.ImageBackground_835_2806}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ded/19c6/357ecd70fd0ee7e1c6ce80b17393f099"
          }}
          style={styles.ImageBackground_835_2814}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06f4/5ab4/0b52fa6376504d33c9f7615ab64d055d"
          }}
          style={styles.ImageBackground_835_2820}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d64a/01ab/6eab8adb9f01b331fa467106198df05d"
          }}
          style={styles.ImageBackground_835_2828}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57ab/7711/9ffcaa82f3a329d24d291c8b1b2980a8"
          }}
          style={styles.ImageBackground_835_2834}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4798/a1ef/223b05d3f91ff29a5859d970d1b16556"
          }}
          style={styles.ImageBackground_835_2840}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3aa6/8da4/dd657e66d05a7ee35057fc0989fc4a79"
          }}
          style={styles.ImageBackground_835_2847}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3aa6/8da4/dd657e66d05a7ee35057fc0989fc4a79"
          }}
          style={styles.ImageBackground_835_2855}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57ab/7711/9ffcaa82f3a329d24d291c8b1b2980a8"
          }}
          style={styles.ImageBackground_835_2863}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eb8/7150/38f4ab82808425a54ddf4828b1b2d3cf"
          }}
          style={styles.ImageBackground_835_2869}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06f4/5ab4/0b52fa6376504d33c9f7615ab64d055d"
          }}
          style={styles.ImageBackground_835_2877}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3aa6/8da4/dd657e66d05a7ee35057fc0989fc4a79"
          }}
          style={styles.ImageBackground_835_2885}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57ab/7711/9ffcaa82f3a329d24d291c8b1b2980a8"
          }}
          style={styles.ImageBackground_835_2893}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/851a/0e8b/96b6564eb071ce0f7c631930d9ddad7a"
          }}
          style={styles.ImageBackground_835_2899}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99a3/5833/622f375dc4cc30b4d36bb022d997cd1b"
          }}
          style={styles.ImageBackground_835_2907}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cdc/333d/1c14c9cf9a19d15d97cae5a6fa2ca776"
          }}
          style={styles.ImageBackground_835_2914}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e29f/b730/2c25d5f8010ccd8aa225649033b602fb"
          }}
          style={styles.ImageBackground_835_2922}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7362/b4b2/d81ab5578e57e397e6b7a45db5162d9c"
          }}
          style={styles.ImageBackground_835_2930}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7aa/f741/2779074563550040e56d279ddac61a3a"
          }}
          style={styles.ImageBackground_835_2936}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bfe/6116/3c21586e7e911c71af665536d64712b3"
          }}
          style={styles.ImageBackground_835_2944}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cdc/333d/1c14c9cf9a19d15d97cae5a6fa2ca776"
          }}
          style={styles.ImageBackground_835_2950}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a823/9fc9/a0293ecb7b084736ec7d1a6d440fffbd"
          }}
          style={styles.ImageBackground_835_2958}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a823/9fc9/a0293ecb7b084736ec7d1a6d440fffbd"
          }}
          style={styles.ImageBackground_835_2964}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/262f/db5f/ceeed8231b61778e6d046c5606b0b697"
          }}
          style={styles.ImageBackground_835_2970}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e29f/b730/2c25d5f8010ccd8aa225649033b602fb"
          }}
          style={styles.ImageBackground_835_2977}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cdc/333d/1c14c9cf9a19d15d97cae5a6fa2ca776"
          }}
          style={styles.ImageBackground_835_2985}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/851a/0e8b/96b6564eb071ce0f7c631930d9ddad7a"
          }}
          style={styles.ImageBackground_835_2999}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e29f/b730/2c25d5f8010ccd8aa225649033b602fb"
          }}
          style={styles.ImageBackground_835_3007}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cdc/333d/1c14c9cf9a19d15d97cae5a6fa2ca776"
          }}
          style={styles.ImageBackground_835_3015}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a823/9fc9/a0293ecb7b084736ec7d1a6d440fffbd"
          }}
          style={styles.ImageBackground_835_3023}
        />
      </View>
      <View style={styles.View_835_3047}>
        <View style={styles.View_835_3038}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6117/3650/5695b01d93fe6716b06c1bc64d8b98e0"
            }}
            style={styles.ImageBackground_835_3039}
          />
        </View>
        <View style={styles.View_835_3046} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(51, 59, 67, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  ImageBackground_835_2993: {
    width: wp("58.203596769323674%"),
    minWidth: wp("58.203596769323674%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.81674592391305%"),
    top: hp("60.533900860228826%")
  },
  View_835_3037: {
    width: wp("181.30236639492753%"),
    minWidth: wp("181.30236639492753%"),
    height: hp("156.5129681363132%"),
    minHeight: hp("156.5129681363132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-27.053140096618357%"),
    top: hp("-18.442622950819672%")
  },
  ImageBackground_835_2749: {
    width: wp("94.4850166062802%"),
    minWidth: wp("94.4850166062802%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.705314009661834%"),
    top: hp("12.431696073605064%")
  },
  ImageBackground_835_2757: {
    width: wp("74.60512907608695%"),
    minWidth: wp("74.60512907608695%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.02879679951691%"),
    top: hp("18.51329907693498%")
  },
  ImageBackground_835_2763: {
    width: wp("94.4850166062802%"),
    minWidth: wp("94.4850166062802%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.868716032608695%"),
    top: hp("0%")
  },
  ImageBackground_835_2771: {
    width: wp("74.60512907608695%"),
    minWidth: wp("74.60512907608695%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.425120772946862%"),
    top: hp("0.4098360655737707%")
  },
  ImageBackground_835_2777: {
    width: wp("77.6881416062802%"),
    minWidth: wp("77.6881416062802%"),
    height: hp("41.50661614423241%"),
    minHeight: hp("41.50661614423241%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.3425045289855%"),
    top: hp("18.59747464539575%")
  },
  ImageBackground_835_2784: {
    width: wp("94.4850166062802%"),
    minWidth: wp("94.4850166062802%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.110601600241544%"),
    top: hp("20.628415300546447%")
  },
  ImageBackground_835_2792: {
    width: wp("94.4850166062802%"),
    minWidth: wp("94.4850166062802%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.36231884057971%"),
    top: hp("62.29508196721311%")
  },
  ImageBackground_835_2800: {
    width: wp("74.60512907608695%"),
    minWidth: wp("74.60512907608695%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.66700634057971%"),
    top: hp("21.038251366120218%")
  },
  ImageBackground_835_2806: {
    width: wp("94.4850166062802%"),
    minWidth: wp("94.4850166062802%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.705314009661834%"),
    top: hp("39.34426333734898%")
  },
  ImageBackground_835_2814: {
    width: wp("74.60512907608695%"),
    minWidth: wp("74.60512907608695%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.02879679951691%"),
    top: hp("45.42586686181241%")
  },
  ImageBackground_835_2820: {
    width: wp("94.4850166062802%"),
    minWidth: wp("94.4850166062802%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.868716032608695%"),
    top: hp("26.91256830601093%")
  },
  ImageBackground_835_2828: {
    width: wp("74.60512907608695%"),
    minWidth: wp("74.60512907608695%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.425120772946862%"),
    top: hp("27.3224043715847%")
  },
  ImageBackground_835_2834: {
    width: wp("74.60512907608695%"),
    minWidth: wp("74.60512907608695%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.869565217391305%"),
    top: hp("60.79234972677595%")
  },
  ImageBackground_835_2840: {
    width: wp("77.6881416062802%"),
    minWidth: wp("77.6881416062802%"),
    height: hp("41.50661197516436%"),
    minHeight: hp("41.50661197516436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.3425045289855%"),
    top: hp("45.510042951406675%")
  },
  ImageBackground_835_2847: {
    width: wp("94.4850166062802%"),
    minWidth: wp("94.4850166062802%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.110601600241544%"),
    top: hp("47.540983606557376%")
  },
  ImageBackground_835_2855: {
    width: wp("94.4850166062802%"),
    minWidth: wp("94.4850166062802%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.868716032608695%"),
    top: hp("57.92349726775956%")
  },
  ImageBackground_835_2863: {
    width: wp("74.60512907608695%"),
    minWidth: wp("74.60512907608695%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.66700634057971%"),
    top: hp("78.96174863387978%")
  },
  ImageBackground_835_2869: {
    width: wp("94.4850166062802%"),
    minWidth: wp("94.4850166062802%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.705314009661834%"),
    top: hp("97.26775956284153%")
  },
  ImageBackground_835_2877: {
    width: wp("94.4850166062802%"),
    minWidth: wp("94.4850166062802%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.868716032608695%"),
    top: hp("84.83606557377048%")
  },
  ImageBackground_835_2885: {
    width: wp("94.4850166062802%"),
    minWidth: wp("94.4850166062802%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.110601600241544%"),
    top: hp("105.46448087431693%")
  },
  ImageBackground_835_2893: {
    width: wp("74.60512907608695%"),
    minWidth: wp("74.60512907608695%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.66700634057971%"),
    top: hp("47.950819672131146%")
  },
  ImageBackground_835_2899: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.373225311112538%"),
    minHeight: hp("27.373225311112538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.143417874396135%"),
    top: hp("128.13279615725324%")
  },
  ImageBackground_835_2907: {
    width: wp("61.17126169987923%"),
    minWidth: wp("61.17126169987923%"),
    height: hp("27.95320104380123%"),
    minHeight: hp("27.95320104380123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("112.22295708995047%")
  },
  ImageBackground_835_2914: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.58442783816425%"),
    top: hp("115.54668822575137%")
  },
  ImageBackground_835_2922: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.92472448671498%"),
    top: hp("84.19847332063267%")
  },
  ImageBackground_835_2930: {
    width: wp("58.203596769323674%"),
    minWidth: wp("58.203596769323674%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.66215655193237%"),
    top: hp("129.13973448706457%")
  },
  ImageBackground_835_2936: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.373221142044486%"),
    minHeight: hp("27.373221142044486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.935688405797094%"),
    top: hp("104.82583384696251%")
  },
  ImageBackground_835_2944: {
    width: wp("58.203596769323674%"),
    minWidth: wp("58.203596769323674%"),
    height: hp("27.373221142044486%"),
    minHeight: hp("27.373221142044486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.81354732789855%"),
    top: hp("91.23277924751324%")
  },
  ImageBackground_835_2950: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.88548271437198%"),
    top: hp("109.04171636195782%")
  },
  ImageBackground_835_2958: {
    width: wp("58.203596769323674%"),
    minWidth: wp("58.203596769323674%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.96297554347826%"),
    top: hp("122.6347709614071%")
  },
  ImageBackground_835_2964: {
    width: wp("58.203596769323674%"),
    minWidth: wp("58.203596769323674%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.36368697161836%"),
    top: hp("95.21998837997353%")
  },
  ImageBackground_835_2970: {
    width: wp("61.17126169987923%"),
    minWidth: wp("61.17126169987923%"),
    height: hp("27.95320104380123%"),
    minHeight: hp("27.95320104380123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.792270531400966%"),
    top: hp("88.91599061059169%")
  },
  ImageBackground_835_2977: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.37669836956522%"),
    top: hp("92.23972174639258%")
  },
  ImageBackground_835_2985: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.30094165157004%"),
    top: hp("82.18546382716444%")
  },
  ImageBackground_835_2999: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.373221142044486%"),
    minHeight: hp("27.373221142044486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("100.14341787439614%"),
    top: hp("54.66261379054335%")
  },
  ImageBackground_835_3007: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.37321488844241%"),
    minHeight: hp("27.37321488844241%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.09321218297102%"),
    top: hp("58.878499432339694%")
  },
  ImageBackground_835_3015: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.37321488844241%"),
    minHeight: hp("27.37321488844241%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.58442783816426%"),
    top: hp("42.07650481677446%")
  },
  ImageBackground_835_3023: {
    width: wp("58.203596769323674%"),
    minWidth: wp("58.203596769323674%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.45442708333333%"),
    top: hp("105.83277634584186%")
  },
  View_835_3047: {
    width: wp("87.19806763285024%"),
    minWidth: wp("87.19806763285024%"),
    height: hp("15.710382513661203%"),
    minHeight: hp("15.710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("53.41530054644809%")
  },
  View_835_3038: {
    width: wp("62.56038647342995%"),
    height: hp("8.852111316118085%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.318840579710145%")
  },
  ImageBackground_835_3039: {
    width: wp("62.56038647342995%"),
    height: hp("8.852111316118085%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_835_3046: {
    width: wp("87.19806763285024%"),
    minWidth: wp("87.19806763285024%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.344262295081968%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
