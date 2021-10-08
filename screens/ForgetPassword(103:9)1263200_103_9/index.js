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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bee0/60c6/1982c499ee3b18d8e8515fee4f54fef7"
        }}
        style={styles.ImageBackground_103_10}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ded/19c6/357ecd70fd0ee7e1c6ce80b17393f099"
        }}
        style={styles.ImageBackground_103_18}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3aa6/8da4/dd657e66d05a7ee35057fc0989fc4a79"
        }}
        style={styles.ImageBackground_103_24}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d64a/01ab/6eab8adb9f01b331fa467106198df05d"
        }}
        style={styles.ImageBackground_103_32}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4798/a1ef/223b05d3f91ff29a5859d970d1b16556"
        }}
        style={styles.ImageBackground_103_38}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3aa6/8da4/dd657e66d05a7ee35057fc0989fc4a79"
        }}
        style={styles.ImageBackground_103_45}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3aa6/8da4/dd657e66d05a7ee35057fc0989fc4a79"
        }}
        style={styles.ImageBackground_103_53}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57ab/7711/9ffcaa82f3a329d24d291c8b1b2980a8"
        }}
        style={styles.ImageBackground_103_61}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bee0/60c6/1982c499ee3b18d8e8515fee4f54fef7"
        }}
        style={styles.ImageBackground_103_67}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ded/19c6/357ecd70fd0ee7e1c6ce80b17393f099"
        }}
        style={styles.ImageBackground_103_75}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3aa6/8da4/dd657e66d05a7ee35057fc0989fc4a79"
        }}
        style={styles.ImageBackground_103_81}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d64a/01ab/6eab8adb9f01b331fa467106198df05d"
        }}
        style={styles.ImageBackground_103_89}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57ab/7711/9ffcaa82f3a329d24d291c8b1b2980a8"
        }}
        style={styles.ImageBackground_103_95}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd78/3ef5/a664464f509e0d1d2db9353248d5770b"
        }}
        style={styles.ImageBackground_103_101}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3aa6/8da4/dd657e66d05a7ee35057fc0989fc4a79"
        }}
        style={styles.ImageBackground_103_108}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3aa6/8da4/dd657e66d05a7ee35057fc0989fc4a79"
        }}
        style={styles.ImageBackground_103_116}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57ab/7711/9ffcaa82f3a329d24d291c8b1b2980a8"
        }}
        style={styles.ImageBackground_103_124}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bee0/60c6/1982c499ee3b18d8e8515fee4f54fef7"
        }}
        style={styles.ImageBackground_103_130}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3aa6/8da4/dd657e66d05a7ee35057fc0989fc4a79"
        }}
        style={styles.ImageBackground_103_138}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3aa6/8da4/dd657e66d05a7ee35057fc0989fc4a79"
        }}
        style={styles.ImageBackground_103_146}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57ab/7711/9ffcaa82f3a329d24d291c8b1b2980a8"
        }}
        style={styles.ImageBackground_103_154}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/851a/0e8b/96b6564eb071ce0f7c631930d9ddad7a"
        }}
        style={styles.ImageBackground_103_160}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99a3/5833/622f375dc4cc30b4d36bb022d997cd1b"
        }}
        style={styles.ImageBackground_103_168}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cdc/333d/1c14c9cf9a19d15d97cae5a6fa2ca776"
        }}
        style={styles.ImageBackground_103_175}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e29f/b730/2c25d5f8010ccd8aa225649033b602fb"
        }}
        style={styles.ImageBackground_103_183}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1574/e756/87b61e69087eccfd5555fa8ef21af8c9"
        }}
        style={styles.ImageBackground_103_191}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea42/71a8/49cce3d5be7ddd97bb6d2be0745fc8dd"
        }}
        style={styles.ImageBackground_103_197}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef41/dd6e/f4ad4f67103999935b1eae073cf44aa2"
        }}
        style={styles.ImageBackground_103_205}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cdc/333d/1c14c9cf9a19d15d97cae5a6fa2ca776"
        }}
        style={styles.ImageBackground_103_211}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a823/9fc9/a0293ecb7b084736ec7d1a6d440fffbd"
        }}
        style={styles.ImageBackground_103_219}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a823/9fc9/a0293ecb7b084736ec7d1a6d440fffbd"
        }}
        style={styles.ImageBackground_103_225}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99a3/5833/622f375dc4cc30b4d36bb022d997cd1b"
        }}
        style={styles.ImageBackground_103_231}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e29f/b730/2c25d5f8010ccd8aa225649033b602fb"
        }}
        style={styles.ImageBackground_103_238}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cdc/333d/1c14c9cf9a19d15d97cae5a6fa2ca776"
        }}
        style={styles.ImageBackground_103_246}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a823/9fc9/a0293ecb7b084736ec7d1a6d440fffbd"
        }}
        style={styles.ImageBackground_103_254}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/851a/0e8b/96b6564eb071ce0f7c631930d9ddad7a"
        }}
        style={styles.ImageBackground_103_260}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e29f/b730/2c25d5f8010ccd8aa225649033b602fb"
        }}
        style={styles.ImageBackground_103_268}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a59d/8d36/c799a1660261298ca2f171b6a4511f8f"
        }}
        style={styles.ImageBackground_103_276}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58c1/f2f6/022678fe416da5f486feb57cabb475ac"
        }}
        style={styles.ImageBackground_103_284}
      />
      <View style={styles.View_103_290}>
        <View style={styles.View_103_291}>
          <View style={styles.View_103_292} />
          <View style={styles.View_103_293}>
            <Text style={styles.Text_103_293}>Sign in</Text>
          </View>
          <View style={styles.View_103_294}>
            <View style={styles.View_103_295} />
            <View style={styles.View_103_296}>
              <Text style={styles.Text_103_296}>Email Id</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_103_304}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("97_2378"))
            }
          >
            <Text style={styles.Text_103_304}>I am already a member.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_103_305}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("103_321"))
            }
          >
            <View style={styles.View_103_306} />
            <View style={styles.View_103_307}>
              <Text style={styles.Text_103_307}>Reset Password</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.View_103_308}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b72e/34a4/7a08ff0ff6b7d428fba32c1a4becdd8e"
              }}
              style={styles.ImageBackground_103_309}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b72e/34a4/7a08ff0ff6b7d428fba32c1a4becdd8e"
              }}
              style={styles.ImageBackground_103_310}
            />
            <View style={styles.View_103_311}>
              <Text style={styles.Text_103_311}>or</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_103_312}>
          <View style={styles.View_103_313}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0b2/f61c/420d6e07476b93d7ce154ef2d3eeebd9"
              }}
              style={styles.ImageBackground_103_314}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(51, 59, 67, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  ImageBackground_103_10: {
    width: wp("94.4850166062802%"),
    minWidth: wp("94.4850166062802%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.3478260869565215%"),
    top: hp("-6.0109289617486334%")
  },
  ImageBackground_103_18: {
    width: wp("74.60512907608695%"),
    minWidth: wp("74.60512907608695%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.975656702898554%"),
    top: hp("0.07067404158128415%")
  },
  ImageBackground_103_24: {
    width: wp("94.4850166062802%"),
    minWidth: wp("94.4850166062802%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.81557593599034%"),
    top: hp("-18.442622950819672%")
  },
  ImageBackground_103_32: {
    width: wp("74.60512907608695%"),
    minWidth: wp("74.60512907608695%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10.628019323671497%"),
    top: hp("-18.0327868852459%")
  },
  ImageBackground_103_38: {
    width: wp("77.6881416062802%"),
    minWidth: wp("77.6881416062802%"),
    height: hp("41.50660780609631%"),
    minHeight: hp("41.50660780609631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.28936443236715%"),
    top: hp("0.15485586364412568%")
  },
  ImageBackground_103_45: {
    width: wp("94.4850166062802%"),
    minWidth: wp("94.4850166062802%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.057461503623188%"),
    top: hp("2.185792349726776%")
  },
  ImageBackground_103_53: {
    width: wp("94.4850166062802%"),
    minWidth: wp("94.4850166062802%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.6908212560386473%"),
    top: hp("43.85245901639344%")
  },
  ImageBackground_103_61: {
    width: wp("74.60512907608695%"),
    minWidth: wp("74.60512907608695%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-14.386133756038646%"),
    top: hp("2.5956284153005464%")
  },
  ImageBackground_103_67: {
    width: wp("94.4850166062802%"),
    minWidth: wp("94.4850166062802%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.3478260869565215%"),
    top: hp("20.901639344262296%")
  },
  ImageBackground_103_75: {
    width: wp("74.60512907608695%"),
    minWidth: wp("74.60512907608695%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.975656702898554%"),
    top: hp("26.983242347592213%")
  },
  ImageBackground_103_81: {
    width: wp("94.4850166062802%"),
    minWidth: wp("94.4850166062802%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.81557593599034%"),
    top: hp("8.469945355191257%")
  },
  ImageBackground_103_89: {
    width: wp("74.60512907608695%"),
    minWidth: wp("74.60512907608695%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10.628019323671497%"),
    top: hp("8.879781420765028%")
  },
  ImageBackground_103_95: {
    width: wp("74.60512907608695%"),
    minWidth: wp("74.60512907608695%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-16.183574879227052%"),
    top: hp("42.349726775956285%")
  },
  ImageBackground_103_101: {
    width: wp("77.6881416062802%"),
    minWidth: wp("77.6881416062802%"),
    height: hp("41.50660780609631%"),
    minHeight: hp("41.50660780609631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.28936443236715%"),
    top: hp("27.06742416965505%")
  },
  ImageBackground_103_108: {
    width: wp("94.4850166062802%"),
    minWidth: wp("94.4850166062802%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.057461503623188%"),
    top: hp("29.098360655737704%")
  },
  ImageBackground_103_116: {
    width: wp("94.4850166062802%"),
    minWidth: wp("94.4850166062802%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.81557593599034%"),
    top: hp("39.48087431693989%")
  },
  ImageBackground_103_124: {
    width: wp("74.60512907608695%"),
    minWidth: wp("74.60512907608695%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-14.386133756038646%"),
    top: hp("60.5191256830601%")
  },
  ImageBackground_103_130: {
    width: wp("94.4850166062802%"),
    minWidth: wp("94.4850166062802%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.3478260869565215%"),
    top: hp("78.82513661202186%")
  },
  ImageBackground_103_138: {
    width: wp("94.4850166062802%"),
    minWidth: wp("94.4850166062802%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.81557593599034%"),
    top: hp("66.39344262295081%")
  },
  ImageBackground_103_146: {
    width: wp("94.4850166062802%"),
    minWidth: wp("94.4850166062802%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.057461503623188%"),
    top: hp("87.02185792349727%")
  },
  ImageBackground_103_154: {
    width: wp("74.60512907608695%"),
    minWidth: wp("74.60512907608695%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-14.386133756038646%"),
    top: hp("29.508196721311474%")
  },
  ImageBackground_103_160: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.9097222222222223%"),
    top: hp("109.69018154456967%")
  },
  ImageBackground_103_168: {
    width: wp("61.17126169987923%"),
    minWidth: wp("61.17126169987923%"),
    height: hp("27.95320104380123%"),
    minHeight: hp("27.95320104380123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-27.053140096618357%"),
    top: hp("93.7803341391308%")
  },
  ImageBackground_103_175: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-11.468712258454106%"),
    top: hp("97.1040652749317%")
  },
  ImageBackground_103_183: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.87158439009662%"),
    top: hp("65.75585870794912%")
  },
  ImageBackground_103_191: {
    width: wp("58.203596769323674%"),
    minWidth: wp("58.203596769323674%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.60901645531401%"),
    top: hp("110.69711153624489%")
  },
  ImageBackground_103_197: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.88254830917874%"),
    top: hp("86.383223403347%")
  },
  ImageBackground_103_205: {
    width: wp("58.203596769323674%"),
    minWidth: wp("58.203596769323674%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7604072312801933%"),
    top: hp("72.79016046576162%")
  },
  ImageBackground_103_211: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9.167657382246377%"),
    top: hp("90.59910174927424%")
  },
  ImageBackground_103_219: {
    width: wp("58.203596769323674%"),
    minWidth: wp("58.203596769323674%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.9098354468599%"),
    top: hp("104.19214801058743%")
  },
  ImageBackground_103_225: {
    width: wp("58.203596769323674%"),
    minWidth: wp("58.203596769323674%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.310546875%"),
    top: hp("76.77737376728996%")
  },
  ImageBackground_103_231: {
    width: wp("61.17126169987923%"),
    minWidth: wp("61.17126169987923%"),
    height: hp("27.95320104380123%"),
    minHeight: hp("27.95320104380123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3.260869565217391%"),
    top: hp("70.47335932163593%")
  },
  ImageBackground_103_238: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.32355827294686%"),
    top: hp("73.79709045743682%")
  },
  ImageBackground_103_246: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.24780155495169%"),
    top: hp("63.742832538208674%")
  },
  ImageBackground_103_254: {
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
  ImageBackground_103_260: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.09027777777779%"),
    top: hp("36.21999605105874%")
  },
  ImageBackground_103_268: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.04007208635266%"),
    top: hp("40.435874396986%")
  },
  ImageBackground_103_276: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.531287741545896%"),
    top: hp("23.633879781420767%")
  },
  ImageBackground_103_284: {
    width: wp("58.203596769323674%"),
    minWidth: wp("58.203596769323674%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.40128698671497%"),
    top: hp("87.3901533950222%")
  },
  View_103_290: {
    width: wp("76.57004830917874%"),
    minWidth: wp("76.57004830917874%"),
    height: hp("47.404371584699454%"),
    minHeight: hp("47.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.594202898550725%"),
    top: hp("37.56830601092896%")
  },
  View_103_291: {
    width: wp("76.57004830917874%"),
    minWidth: wp("76.57004830917874%"),
    height: hp("38.79781420765027%"),
    minHeight: hp("38.79781420765027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.606557377049185%")
  },
  View_103_292: {
    width: wp("76.57004830917874%"),
    minWidth: wp("76.57004830917874%"),
    height: hp("38.79781420765027%"),
    minHeight: hp("38.79781420765027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_103_293: {
    width: wp("37.19806763285024%"),
    minWidth: wp("37.19806763285024%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_103_293: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_103_294: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995171%"),
    top: hp("8.606557377049178%")
  },
  View_103_295: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 240, 240, 1)",
    borderColor: "rgba(148, 146, 146, 1)",
    borderWidth: 0.5
  },
  View_103_296: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.106280193236714%"),
    top: hp("1.775956284153004%"),
    justifyContent: "flex-start"
  },
  Text_103_296: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_103_304: {
    width: wp("35.507246376811594%"),
    minWidth: wp("35.507246376811594%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.53140096618357%"),
    top: hp("30.87431693989071%"),
    justifyContent: "flex-start"
  },
  Text_103_304: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_103_305: {
    width: wp("50.24154589371981%"),
    minWidth: wp("50.24154589371981%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.043478260869568%"),
    top: hp("17.759562841530062%")
  },
  View_103_306: {
    width: wp("50.24154589371981%"),
    minWidth: wp("50.24154589371981%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(220, 53, 69, 1)"
  },
  View_103_307: {
    width: wp("44.65909948671498%"),
    minWidth: wp("44.65909948671498%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9381793478260825%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "flex-start"
  },
  Text_103_307: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_103_308: {
    width: wp("49.75845410628019%"),
    minWidth: wp("49.75845410628019%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.28502415458937%"),
    top: hp("26.22950819672132%")
  },
  ImageBackground_103_309: {
    width: wp("22.342995169082126%"),
    minWidth: wp("22.342995169082126%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0928961748633839%")
  },
  ImageBackground_103_310: {
    width: wp("22.342995169082126%"),
    minWidth: wp("22.342995169082126%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.41545893719807%"),
    top: hp("1.0928961748633839%")
  },
  View_103_311: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.342995169082126%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_103_311: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_103_312: {
    width: wp("33.81642512077295%"),
    minWidth: wp("33.81642512077295%"),
    height: hp("5.355184586321721%"),
    minHeight: hp("5.355184586321721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980606%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_103_313: {
    width: wp("33.79330842391305%"),
    height: hp("5.355401377860314%"),
    top: hp("-0.00016676272198878905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_103_314: {
    width: wp("33.79330842391305%"),
    height: hp("5.355401377860314%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
