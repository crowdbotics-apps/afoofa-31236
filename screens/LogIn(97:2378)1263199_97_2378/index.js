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
        style={styles.ImageBackground_97_2379}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ded/19c6/357ecd70fd0ee7e1c6ce80b17393f099"
        }}
        style={styles.ImageBackground_97_2387}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06f4/5ab4/0b52fa6376504d33c9f7615ab64d055d"
        }}
        style={styles.ImageBackground_97_2393}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d64a/01ab/6eab8adb9f01b331fa467106198df05d"
        }}
        style={styles.ImageBackground_97_2401}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd78/3ef5/a664464f509e0d1d2db9353248d5770b"
        }}
        style={styles.ImageBackground_97_2407}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06f4/5ab4/0b52fa6376504d33c9f7615ab64d055d"
        }}
        style={styles.ImageBackground_97_2414}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06f4/5ab4/0b52fa6376504d33c9f7615ab64d055d"
        }}
        style={styles.ImageBackground_97_2422}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57ab/7711/9ffcaa82f3a329d24d291c8b1b2980a8"
        }}
        style={styles.ImageBackground_97_2430}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bee0/60c6/1982c499ee3b18d8e8515fee4f54fef7"
        }}
        style={styles.ImageBackground_97_2436}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ded/19c6/357ecd70fd0ee7e1c6ce80b17393f099"
        }}
        style={styles.ImageBackground_97_2444}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06f4/5ab4/0b52fa6376504d33c9f7615ab64d055d"
        }}
        style={styles.ImageBackground_97_2450}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d64a/01ab/6eab8adb9f01b331fa467106198df05d"
        }}
        style={styles.ImageBackground_97_2458}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57ab/7711/9ffcaa82f3a329d24d291c8b1b2980a8"
        }}
        style={styles.ImageBackground_97_2464}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd78/3ef5/a664464f509e0d1d2db9353248d5770b"
        }}
        style={styles.ImageBackground_97_2470}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3aa6/8da4/dd657e66d05a7ee35057fc0989fc4a79"
        }}
        style={styles.ImageBackground_97_2477}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3aa6/8da4/dd657e66d05a7ee35057fc0989fc4a79"
        }}
        style={styles.ImageBackground_97_2485}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57ab/7711/9ffcaa82f3a329d24d291c8b1b2980a8"
        }}
        style={styles.ImageBackground_97_2493}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bee0/60c6/1982c499ee3b18d8e8515fee4f54fef7"
        }}
        style={styles.ImageBackground_97_2499}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06f4/5ab4/0b52fa6376504d33c9f7615ab64d055d"
        }}
        style={styles.ImageBackground_97_2507}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3aa6/8da4/dd657e66d05a7ee35057fc0989fc4a79"
        }}
        style={styles.ImageBackground_97_2515}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57ab/7711/9ffcaa82f3a329d24d291c8b1b2980a8"
        }}
        style={styles.ImageBackground_97_2523}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea42/71a8/49cce3d5be7ddd97bb6d2be0745fc8dd"
        }}
        style={styles.ImageBackground_97_2529}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/262f/db5f/ceeed8231b61778e6d046c5606b0b697"
        }}
        style={styles.ImageBackground_97_2537}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e29f/b730/2c25d5f8010ccd8aa225649033b602fb"
        }}
        style={styles.ImageBackground_97_2544}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cdc/333d/1c14c9cf9a19d15d97cae5a6fa2ca776"
        }}
        style={styles.ImageBackground_97_2552}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7362/b4b2/d81ab5578e57e397e6b7a45db5162d9c"
        }}
        style={styles.ImageBackground_97_2560}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7aa/f741/2779074563550040e56d279ddac61a3a"
        }}
        style={styles.ImageBackground_97_2566}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bfe/6116/3c21586e7e911c71af665536d64712b3"
        }}
        style={styles.ImageBackground_97_2574}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e29f/b730/2c25d5f8010ccd8aa225649033b602fb"
        }}
        style={styles.ImageBackground_97_2580}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7362/b4b2/d81ab5578e57e397e6b7a45db5162d9c"
        }}
        style={styles.ImageBackground_97_2588}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1574/e756/87b61e69087eccfd5555fa8ef21af8c9"
        }}
        style={styles.ImageBackground_97_2594}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99a3/5833/622f375dc4cc30b4d36bb022d997cd1b"
        }}
        style={styles.ImageBackground_97_2600}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cdc/333d/1c14c9cf9a19d15d97cae5a6fa2ca776"
        }}
        style={styles.ImageBackground_97_2607}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e29f/b730/2c25d5f8010ccd8aa225649033b602fb"
        }}
        style={styles.ImageBackground_97_2615}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a823/9fc9/a0293ecb7b084736ec7d1a6d440fffbd"
        }}
        style={styles.ImageBackground_97_2623}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea42/71a8/49cce3d5be7ddd97bb6d2be0745fc8dd"
        }}
        style={styles.ImageBackground_97_2629}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e29f/b730/2c25d5f8010ccd8aa225649033b602fb"
        }}
        style={styles.ImageBackground_97_2637}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e29f/b730/2c25d5f8010ccd8aa225649033b602fb"
        }}
        style={styles.ImageBackground_97_2645}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a823/9fc9/a0293ecb7b084736ec7d1a6d440fffbd"
        }}
        style={styles.ImageBackground_97_2653}
      />
      <View style={styles.View_100_3023}>
        <View style={styles.View_97_2659}>
          <View style={styles.View_97_2660} />
          <View style={styles.View_97_2661}>
            <Text style={styles.Text_97_2661}>Sign in</Text>
          </View>
          <View style={styles.View_97_2662}>
            <View style={styles.View_97_2663} />
            <View style={styles.View_97_2664}>
              <Text style={styles.Text_97_2664}>Email Id</Text>
            </View>
          </View>
          <View style={styles.View_97_2665}>
            <View style={styles.View_97_2666} />
            <View style={styles.View_97_2667}>
              <Text style={styles.Text_97_2667}>Password</Text>
            </View>
          </View>
          <View style={styles.View_97_2668}>
            <View style={styles.View_97_2669} />
            <View style={styles.View_97_2670}>
              <Text style={styles.Text_97_2670}>
                I agree to terms and conditions
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_97_2671}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("103_9"))
            }
          >
            <Text style={styles.Text_97_2671}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_97_2672}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("100_2695"))
            }
          >
            <Text style={styles.Text_97_2672}>I am not a member.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_97_2673}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("84_296"))
            }
          >
            <View style={styles.View_97_2674} />
            <View style={styles.View_97_2675}>
              <Text style={styles.Text_97_2675}>Sign in</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.View_97_2676}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b72e/34a4/7a08ff0ff6b7d428fba32c1a4becdd8e"
              }}
              style={styles.ImageBackground_97_2677}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b72e/34a4/7a08ff0ff6b7d428fba32c1a4becdd8e"
              }}
              style={styles.ImageBackground_97_2678}
            />
            <View style={styles.View_97_2679}>
              <Text style={styles.Text_97_2679}>or</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_97_2680}>
          <View style={styles.View_97_2681}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0b2/f61c/420d6e07476b93d7ce154ef2d3eeebd9"
              }}
              style={styles.ImageBackground_97_2682}
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
  ImageBackground_97_2379: {
    width: wp("94.4850166062802%"),
    minWidth: wp("94.4850166062802%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.3478260869565215%"),
    top: hp("-6.010926877214609%")
  },
  ImageBackground_97_2387: {
    width: wp("74.60512907608695%"),
    minWidth: wp("74.60512907608695%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.975656702898554%"),
    top: hp("0.07067612611530909%")
  },
  ImageBackground_97_2393: {
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
  ImageBackground_97_2401: {
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
  ImageBackground_97_2407: {
    width: wp("77.6881416062802%"),
    minWidth: wp("77.6881416062802%"),
    height: hp("41.50661614423241%"),
    minHeight: hp("41.50661614423241%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.28936443236715%"),
    top: hp("0.1548516945760758%")
  },
  ImageBackground_97_2414: {
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
  ImageBackground_97_2422: {
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
  ImageBackground_97_2430: {
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
  ImageBackground_97_2436: {
    width: wp("94.4850166062802%"),
    minWidth: wp("94.4850166062802%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.3478260869565215%"),
    top: hp("20.90164038652931%")
  },
  ImageBackground_97_2444: {
    width: wp("74.60512907608695%"),
    minWidth: wp("74.60512907608695%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.975656702898554%"),
    top: hp("26.983243910992734%")
  },
  ImageBackground_97_2450: {
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
  ImageBackground_97_2458: {
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
  ImageBackground_97_2464: {
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
  ImageBackground_97_2470: {
    width: wp("77.6881416062802%"),
    minWidth: wp("77.6881416062802%"),
    height: hp("41.50661197516436%"),
    minHeight: hp("41.50661197516436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.28936443236715%"),
    top: hp("27.067420000587006%")
  },
  ImageBackground_97_2477: {
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
  ImageBackground_97_2485: {
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
  ImageBackground_97_2493: {
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
  ImageBackground_97_2499: {
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
  ImageBackground_97_2507: {
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
  ImageBackground_97_2515: {
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
  ImageBackground_97_2523: {
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
  ImageBackground_97_2529: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.373225311112538%"),
    minHeight: hp("27.373225311112538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.9097222222222223%"),
    top: hp("109.69017320643357%")
  },
  ImageBackground_97_2537: {
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
  ImageBackground_97_2544: {
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
  ImageBackground_97_2552: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.87158439009662%"),
    top: hp("65.755850369813%")
  },
  ImageBackground_97_2560: {
    width: wp("58.203596769323674%"),
    minWidth: wp("58.203596769323674%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.60901645531401%"),
    top: hp("110.69711987438097%")
  },
  ImageBackground_97_2566: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.373221142044486%"),
    minHeight: hp("27.373221142044486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.88254830917874%"),
    top: hp("86.38321089614284%")
  },
  ImageBackground_97_2574: {
    width: wp("58.203596769323674%"),
    minWidth: wp("58.203596769323674%"),
    height: hp("27.373221142044486%"),
    minHeight: hp("27.373221142044486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7604072312801933%"),
    top: hp("72.79015629669357%")
  },
  ImageBackground_97_2580: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9.167657382246377%"),
    top: hp("90.59909341113816%")
  },
  ImageBackground_97_2588: {
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
  ImageBackground_97_2594: {
    width: wp("58.203596769323674%"),
    minWidth: wp("58.203596769323674%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.310546875%"),
    top: hp("76.77736542915386%")
  },
  ImageBackground_97_2600: {
    width: wp("61.17126169987923%"),
    minWidth: wp("61.17126169987923%"),
    height: hp("27.95320104380123%"),
    minHeight: hp("27.95320104380123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3.260869565217391%"),
    top: hp("70.47336765977202%")
  },
  ImageBackground_97_2607: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.32355827294686%"),
    top: hp("73.79709879557291%")
  },
  ImageBackground_97_2615: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.24780155495169%"),
    top: hp("63.74284087634477%")
  },
  ImageBackground_97_2623: {
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
  ImageBackground_97_2629: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.373221142044486%"),
    minHeight: hp("27.373221142044486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.09027777777779%"),
    top: hp("36.21999083972368%")
  },
  ImageBackground_97_2637: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.37321488844241%"),
    minHeight: hp("27.37321488844241%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.04007208635266%"),
    top: hp("40.43587648152002%")
  },
  ImageBackground_97_2645: {
    width: wp("81.15894852053141%"),
    minWidth: wp("81.15894852053141%"),
    height: hp("27.37321488844241%"),
    minHeight: hp("27.37321488844241%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.531287741545896%"),
    top: hp("23.63388186595479%")
  },
  ImageBackground_97_2653: {
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
  View_100_3023: {
    width: wp("76.57004830917874%"),
    minWidth: wp("76.57004830917874%"),
    height: hp("66.2568306010929%"),
    minHeight: hp("66.2568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.594202898550725%"),
    top: hp("28.005464480874316%")
  },
  View_97_2659: {
    width: wp("76.57004830917874%"),
    minWidth: wp("76.57004830917874%"),
    height: hp("57.650273224043715%"),
    minHeight: hp("57.650273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.606557377049185%")
  },
  View_97_2660: {
    width: wp("76.57004830917874%"),
    minWidth: wp("76.57004830917874%"),
    height: hp("57.650273224043715%"),
    minHeight: hp("57.650273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_97_2661: {
    width: wp("37.19806763285024%"),
    minWidth: wp("37.19806763285024%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("2.4590163934426172%"),
    justifyContent: "flex-start"
  },
  Text_97_2661: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_97_2662: {
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
  View_97_2663: {
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
  View_97_2664: {
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
  Text_97_2664: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_97_2665: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995171%"),
    top: hp("17.486338797814206%")
  },
  View_97_2666: {
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
  View_97_2667: {
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
  Text_97_2667: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_97_2668: {
    width: wp("52.65700483091788%"),
    minWidth: wp("52.65700483091788%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995171%"),
    top: hp("32.78688524590164%")
  },
  View_97_2669: {
    width: wp("4.150390625%"),
    minWidth: wp("4.150390625%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_97_2670: {
    width: wp("46.95024720712561%"),
    minWidth: wp("46.95024720712561%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.706757623792267%"),
    top: hp("0.2732240437158424%"),
    justifyContent: "flex-start"
  },
  Text_97_2670: {
    color: "rgba(51, 59, 67, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_97_2671: {
    width: wp("43.71980676328502%"),
    minWidth: wp("43.71980676328502%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.763285024154589%"),
    top: hp("25.40983606557377%"),
    justifyContent: "flex-start"
  },
  Text_97_2671: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_97_2672: {
    width: wp("28.502415458937197%"),
    minWidth: wp("28.502415458937197%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.15458937198067%"),
    top: hp("53.142076502732245%"),
    justifyContent: "flex-start"
  },
  Text_97_2672: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_97_2673: {
    width: wp("41.30434782608695%"),
    minWidth: wp("41.30434782608695%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.632850241545896%"),
    top: hp("39.75409836065574%")
  },
  View_97_2674: {
    width: wp("41.30434782608695%"),
    minWidth: wp("41.30434782608695%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(220, 53, 69, 1)"
  },
  View_97_2675: {
    width: wp("30.694019852053138%"),
    minWidth: wp("30.694019852053138%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.305046044685987%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "flex-start"
  },
  Text_97_2675: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_97_2676: {
    width: wp("49.75845410628019%"),
    minWidth: wp("49.75845410628019%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.28502415458937%"),
    top: hp("48.224043715846996%")
  },
  ImageBackground_97_2677: {
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
  ImageBackground_97_2678: {
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
  View_97_2679: {
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
  Text_97_2679: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_97_2680: {
    width: wp("33.81642512077295%"),
    minWidth: wp("33.81642512077295%"),
    height: hp("5.355190839923797%"),
    minHeight: hp("5.355190839923797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980606%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_97_2681: {
    width: wp("33.79330842391305%"),
    height: hp("5.355395645391746%"),
    top: hp("-0.0001631147874512351%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_97_2682: {
    width: wp("33.79330842391305%"),
    height: hp("5.355395645391746%"),
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
