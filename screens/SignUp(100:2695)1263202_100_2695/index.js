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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eb8/7150/38f4ab82808425a54ddf4828b1b2d3cf"
        }}
        style={styles.ImageBackground_100_2696}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ded/19c6/357ecd70fd0ee7e1c6ce80b17393f099"
        }}
        style={styles.ImageBackground_100_2704}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06f4/5ab4/0b52fa6376504d33c9f7615ab64d055d"
        }}
        style={styles.ImageBackground_100_2710}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57ab/7711/9ffcaa82f3a329d24d291c8b1b2980a8"
        }}
        style={styles.ImageBackground_100_2718}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4798/a1ef/223b05d3f91ff29a5859d970d1b16556"
        }}
        style={styles.ImageBackground_100_2724}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06f4/5ab4/0b52fa6376504d33c9f7615ab64d055d"
        }}
        style={styles.ImageBackground_100_2731}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06f4/5ab4/0b52fa6376504d33c9f7615ab64d055d"
        }}
        style={styles.ImageBackground_100_2739}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d64a/01ab/6eab8adb9f01b331fa467106198df05d"
        }}
        style={styles.ImageBackground_100_2747}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eb8/7150/38f4ab82808425a54ddf4828b1b2d3cf"
        }}
        style={styles.ImageBackground_100_2753}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ded/19c6/357ecd70fd0ee7e1c6ce80b17393f099"
        }}
        style={styles.ImageBackground_100_2761}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06f4/5ab4/0b52fa6376504d33c9f7615ab64d055d"
        }}
        style={styles.ImageBackground_100_2767}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57ab/7711/9ffcaa82f3a329d24d291c8b1b2980a8"
        }}
        style={styles.ImageBackground_100_2775}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d64a/01ab/6eab8adb9f01b331fa467106198df05d"
        }}
        style={styles.ImageBackground_100_2781}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4798/a1ef/223b05d3f91ff29a5859d970d1b16556"
        }}
        style={styles.ImageBackground_100_2787}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3aa6/8da4/dd657e66d05a7ee35057fc0989fc4a79"
        }}
        style={styles.ImageBackground_100_2794}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3aa6/8da4/dd657e66d05a7ee35057fc0989fc4a79"
        }}
        style={styles.ImageBackground_100_2802}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d64a/01ab/6eab8adb9f01b331fa467106198df05d"
        }}
        style={styles.ImageBackground_100_2810}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eb8/7150/38f4ab82808425a54ddf4828b1b2d3cf"
        }}
        style={styles.ImageBackground_100_2816}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06f4/5ab4/0b52fa6376504d33c9f7615ab64d055d"
        }}
        style={styles.ImageBackground_100_2824}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3aa6/8da4/dd657e66d05a7ee35057fc0989fc4a79"
        }}
        style={styles.ImageBackground_100_2832}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d64a/01ab/6eab8adb9f01b331fa467106198df05d"
        }}
        style={styles.ImageBackground_100_2840}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea42/71a8/49cce3d5be7ddd97bb6d2be0745fc8dd"
        }}
        style={styles.ImageBackground_100_2846}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/262f/db5f/ceeed8231b61778e6d046c5606b0b697"
        }}
        style={styles.ImageBackground_100_2854}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cdc/333d/1c14c9cf9a19d15d97cae5a6fa2ca776"
        }}
        style={styles.ImageBackground_100_2861}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed75/0911/7b53b1a9c8fffa2306042fd572f90808"
        }}
        style={styles.ImageBackground_100_2869}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a823/9fc9/a0293ecb7b084736ec7d1a6d440fffbd"
        }}
        style={styles.ImageBackground_100_2877}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/851a/0e8b/96b6564eb071ce0f7c631930d9ddad7a"
        }}
        style={styles.ImageBackground_100_2883}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef41/dd6e/f4ad4f67103999935b1eae073cf44aa2"
        }}
        style={styles.ImageBackground_100_2891}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e29f/b730/2c25d5f8010ccd8aa225649033b602fb"
        }}
        style={styles.ImageBackground_100_2897}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7362/b4b2/d81ab5578e57e397e6b7a45db5162d9c"
        }}
        style={styles.ImageBackground_100_2905}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/369b/47b7/223b6c37a92b2886bad9fe33990a9f36"
        }}
        style={styles.ImageBackground_100_2911}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99a3/5833/622f375dc4cc30b4d36bb022d997cd1b"
        }}
        style={styles.ImageBackground_100_2917}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cdc/333d/1c14c9cf9a19d15d97cae5a6fa2ca776"
        }}
        style={styles.ImageBackground_100_2924}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e29f/b730/2c25d5f8010ccd8aa225649033b602fb"
        }}
        style={styles.ImageBackground_100_2932}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/369b/47b7/223b6c37a92b2886bad9fe33990a9f36"
        }}
        style={styles.ImageBackground_100_2940}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1b0/277f/4698825a89dbe24d70aa9470e3ca32ce"
        }}
        style={styles.ImageBackground_100_2946}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cdc/333d/1c14c9cf9a19d15d97cae5a6fa2ca776"
        }}
        style={styles.ImageBackground_100_2954}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4459/a070/58956c9ab64b897f97866a55c2ba609d"
        }}
        style={styles.ImageBackground_100_2962}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8572/5973/43a1c11c15bafaf0cfb3257f52aebc42"
        }}
        style={styles.ImageBackground_100_2970}
      />
      <View style={styles.View_100_3024}>
        <View style={styles.View_100_2976}>
          <View style={styles.View_100_2977} />
          <View style={styles.View_100_2978}>
            <Text style={styles.Text_100_2978}>Create your Account</Text>
          </View>
          <View style={styles.View_100_2979}>
            <View style={styles.View_102_8}>
              <View style={styles.View_100_2980} />
              <View style={styles.View_100_2981}>
                <Text style={styles.Text_100_2981}>First Name*</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_100_2982}>
            <View style={styles.View_102_7}>
              <View style={styles.View_100_2983} />
              <View style={styles.View_100_2984}>
                <Text style={styles.Text_100_2984}>Last Name*</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_100_2997}>
          <View style={styles.View_100_2998}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0b2/f61c/420d6e07476b93d7ce154ef2d3eeebd9"
              }}
              style={styles.ImageBackground_100_2999}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_102_3}>
        <View style={styles.View_100_3013} />
        <View style={styles.View_448_6008} />
        <View style={styles.View_448_6009}>
          <Text style={styles.Text_448_6009}>Location*</Text>
        </View>
        <View style={styles.View_100_3014}>
          <Text style={styles.Text_100_3014}>Set Password*</Text>
        </View>
        <View style={styles.View_100_3015}>
          <Text style={styles.Text_100_3015}>
            Password must consist of atleat one upper case, one lower case, one
            numerin and one special case character.A
          </Text>
        </View>
      </View>
      <View style={styles.View_102_4}>
        <View style={styles.View_100_3016} />
        <View style={styles.View_100_3017}>
          <Text style={styles.Text_100_3017}>Confirm Password*</Text>
        </View>
        <View style={styles.View_100_3026}>
          <Text style={styles.Text_100_3026}>
            The password doesn&#39;t match
          </Text>
        </View>
      </View>
      <View style={styles.View_102_2}>
        <View style={styles.View_100_3008} />
        <View style={styles.View_100_3010} />
        <View style={styles.View_100_3009}>
          <Text style={styles.Text_100_3009}>Cell Number*</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fefc/fb92/6fe215df1005a369f79ef75af1b9c838"
          }}
          style={styles.ImageBackground_100_3011}
        />
        <View style={styles.View_100_3012}>
          <Text style={styles.Text_100_3012}>+1 (USA)</Text>
        </View>
        <View style={styles.View_100_3027}>
          <Text style={styles.Text_100_3027}>Please enter a valid Number</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_100_2989}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("97_2378"))
        }
      >
        <Text style={styles.Text_100_2989}>I am already a member.</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_100_2990}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("84_296"))
        }
      >
        <View style={styles.View_100_2991} />
        <View style={styles.View_100_2992}>
          <Text style={styles.Text_100_2992}>Sign up</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_100_3018}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b72e/34a4/7a08ff0ff6b7d428fba32c1a4becdd8e"
          }}
          style={styles.ImageBackground_100_3019}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b72e/34a4/7a08ff0ff6b7d428fba32c1a4becdd8e"
          }}
          style={styles.ImageBackground_100_3020}
        />
        <View style={styles.View_100_3021}>
          <Text style={styles.Text_100_3021}>or</Text>
        </View>
      </View>
      <View style={styles.View_102_6}>
        <View style={styles.View_100_3006} />
        <View style={styles.View_100_3007}>
          <Text style={styles.Text_100_3007}>Email Id*</Text>
        </View>
        <View style={styles.View_102_5}>
          <Text style={styles.Text_102_5}>Please enter a valid email id</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(51, 59, 67, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  ImageBackground_100_2696: {
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
  ImageBackground_100_2704: {
    width: wp("74.60524701841787%"),
    minWidth: wp("74.60524701841787%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.975656702898554%"),
    top: hp("0.07067612611530909%")
  },
  ImageBackground_100_2710: {
    width: wp("94.48513454861111%"),
    minWidth: wp("94.48513454861111%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.81557593599034%"),
    top: hp("-18.442622950819672%")
  },
  ImageBackground_100_2718: {
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
  ImageBackground_100_2724: {
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
  ImageBackground_100_2731: {
    width: wp("94.48513454861111%"),
    minWidth: wp("94.48513454861111%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.057461503623188%"),
    top: hp("2.185792349726776%")
  },
  ImageBackground_100_2739: {
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
  ImageBackground_100_2747: {
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
  ImageBackground_100_2753: {
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
  ImageBackground_100_2761: {
    width: wp("74.60524701841787%"),
    minWidth: wp("74.60524701841787%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.975656702898554%"),
    top: hp("26.983243910992734%")
  },
  ImageBackground_100_2767: {
    width: wp("94.48513454861111%"),
    minWidth: wp("94.48513454861111%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.81557593599034%"),
    top: hp("8.469945355191257%")
  },
  ImageBackground_100_2775: {
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
  ImageBackground_100_2781: {
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
  ImageBackground_100_2787: {
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
  ImageBackground_100_2794: {
    width: wp("94.48513454861111%"),
    minWidth: wp("94.48513454861111%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.057461503623188%"),
    top: hp("29.098360655737704%")
  },
  ImageBackground_100_2802: {
    width: wp("94.48513454861111%"),
    minWidth: wp("94.48513454861111%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.81557593599034%"),
    top: hp("39.48087431693989%")
  },
  ImageBackground_100_2810: {
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
  ImageBackground_100_2816: {
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
  ImageBackground_100_2824: {
    width: wp("94.48513454861111%"),
    minWidth: wp("94.48513454861111%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.81557593599034%"),
    top: hp("66.39344262295081%")
  },
  ImageBackground_100_2832: {
    width: wp("94.48513454861111%"),
    minWidth: wp("94.48513454861111%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.057461503623188%"),
    top: hp("87.02185792349727%")
  },
  ImageBackground_100_2840: {
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
  ImageBackground_100_2846: {
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
  ImageBackground_100_2854: {
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
  ImageBackground_100_2861: {
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
  ImageBackground_100_2869: {
    width: wp("81.15883057820048%"),
    minWidth: wp("81.15883057820048%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.87158439009662%"),
    top: hp("65.755850369813%")
  },
  ImageBackground_100_2877: {
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
  ImageBackground_100_2883: {
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
  ImageBackground_100_2891: {
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
  ImageBackground_100_2897: {
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
  ImageBackground_100_2905: {
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
  ImageBackground_100_2911: {
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
  ImageBackground_100_2917: {
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
  ImageBackground_100_2924: {
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
  ImageBackground_100_2932: {
    width: wp("81.15883057820048%"),
    minWidth: wp("81.15883057820048%"),
    height: hp("27.373216972976433%"),
    minHeight: hp("27.373216972976433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.24780155495169%"),
    top: hp("63.74284087634477%")
  },
  ImageBackground_100_2940: {
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
  ImageBackground_100_2946: {
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
  ImageBackground_100_2954: {
    width: wp("81.15883057820048%"),
    minWidth: wp("81.15883057820048%"),
    height: hp("27.37321488844241%"),
    minHeight: hp("27.37321488844241%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.04007208635266%"),
    top: hp("40.43587648152002%")
  },
  ImageBackground_100_2962: {
    width: wp("81.15883057820048%"),
    minWidth: wp("81.15883057820048%"),
    height: hp("27.37321488844241%"),
    minHeight: hp("27.37321488844241%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.531287741545896%"),
    top: hp("23.63388186595479%")
  },
  ImageBackground_100_2970: {
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
  View_100_3024: {
    width: wp("76.57004830917874%"),
    minWidth: wp("76.57004830917874%"),
    height: hp("99.18032786885246%"),
    minHeight: hp("99.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.594202898550725%"),
    top: hp("13.797814207650273%")
  },
  View_100_2976: {
    width: wp("76.57004830917874%"),
    minWidth: wp("76.57004830917874%"),
    height: hp("90.17692524227289%"),
    minHeight: hp("90.17692524227289%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.003401584312563%")
  },
  View_100_2977: {
    width: wp("76.57004830917874%"),
    minWidth: wp("76.57004830917874%"),
    height: hp("90.17692524227289%"),
    minHeight: hp("90.17692524227289%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_100_2978: {
    width: wp("48.06763285024155%"),
    minWidth: wp("48.06763285024155%"),
    minHeight: hp("3.1440453451187884%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995171%"),
    top: hp("2.572400452660734%"),
    justifyContent: "flex-start"
  },
  Text_100_2978: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_2979: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("5.716444755512509%"),
    minHeight: hp("5.716444755512509%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995171%"),
    top: hp("9.575833388365037%")
  },
  View_102_8: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("5.716444755512509%"),
    minHeight: hp("5.716444755512509%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_100_2980: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("5.716444755512509%"),
    minHeight: hp("5.716444755512509%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 240, 240, 1)",
    borderColor: "rgba(148, 146, 146, 1)",
    borderWidth: 0.5
  },
  View_100_2981: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    minHeight: hp("2.143667043883944%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.106280193236714%"),
    top: hp("1.8578451187884184%"),
    justifyContent: "flex-start"
  },
  Text_100_2981: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_2982: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("5.716444755512509%"),
    minHeight: hp("5.716444755512509%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995171%"),
    top: hp("17.362718634266674%")
  },
  View_102_7: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("5.716444755512509%"),
    minHeight: hp("5.716444755512509%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_100_2983: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("5.716444755512509%"),
    minHeight: hp("5.716444755512509%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 240, 240, 1)",
    borderColor: "rgba(148, 146, 146, 1)",
    borderWidth: 0.5
  },
  View_100_2984: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    minHeight: hp("2.143668086150956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.106280193236714%"),
    top: hp("1.8578451187884184%"),
    justifyContent: "flex-start"
  },
  Text_100_2984: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_2997: {
    width: wp("33.81642512077295%"),
    minWidth: wp("33.81642512077295%"),
    height: hp("5.602116402381105%"),
    minHeight: hp("5.602116402381105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980606%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_100_2998: {
    width: wp("33.79330842391305%"),
    height: hp("5.355395645391746%"),
    top: hp("-0.00016259365394510894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_100_2999: {
    width: wp("33.79330842391305%"),
    height: hp("5.355395645391746%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_102_3: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("15.983606557377051%"),
    minHeight: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.632850241545896%"),
    top: hp("65.43715846994536%")
  },
  View_100_3013: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.103825136612016%"),
    backgroundColor: "rgba(240, 240, 240, 1)",
    borderColor: "rgba(148, 146, 146, 1)",
    borderWidth: 0.5
  },
  View_448_6008: {
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
  View_448_6009: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.106280193236714%"),
    top: hp("1.775956284152997%"),
    justifyContent: "flex-start"
  },
  Text_448_6009: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_3014: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.106280193236714%"),
    top: hp("8.879781420765028%"),
    justifyContent: "flex-start"
  },
  Text_100_3014: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_3015: {
    width: wp("63.76811594202898%"),
    minWidth: wp("63.76811594202898%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594182%"),
    top: hp("12.97814207650272%"),
    justifyContent: "flex-start"
  },
  Text_100_3015: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 6,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_102_4: {
    width: wp("65.45893719806763%"),
    minWidth: wp("65.45893719806763%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.632850241545896%"),
    top: hp("82.65027322404372%")
  },
  View_100_3016: {
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
  View_100_3017: {
    width: wp("28.743961352657006%"),
    minWidth: wp("28.743961352657006%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.106280193236714%"),
    top: hp("1.7759562841530112%"),
    justifyContent: "flex-start"
  },
  Text_100_3017: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_3026: {
    width: wp("63.76811594202898%"),
    minWidth: wp("63.76811594202898%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%"),
    top: hp("6.147540983606561%"),
    justifyContent: "flex-start"
  },
  Text_100_3026: {
    color: "rgba(244, 42, 62, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_102_2: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.632850241545896%"),
    top: hp("56.830601092896174%")
  },
  View_100_3008: {
    width: wp("42.270531400966185%"),
    minWidth: wp("42.270531400966185%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.22222222222222%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 240, 240, 1)",
    borderColor: "rgba(148, 146, 146, 1)",
    borderWidth: 0.5
  },
  View_100_3010: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
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
  View_100_3009: {
    width: wp("20.531400966183575%"),
    minWidth: wp("20.531400966183575%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.87922705314009%"),
    top: hp("1.7759562841530112%"),
    justifyContent: "flex-start"
  },
  Text_100_3009: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_100_3011: {
    width: wp("4.1062801932367154%"),
    minWidth: wp("4.1062801932367154%"),
    height: hp("1.5908121411266223%"),
    minHeight: hp("1.5908121411266223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.932367149758452%"),
    top: hp("1.9125724750789743%")
  },
  View_100_3012: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714975%"),
    top: hp("1.7759562841530112%"),
    justifyContent: "flex-start"
  },
  Text_100_3012: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_3027: {
    width: wp("40.33816425120773%"),
    minWidth: wp("40.33816425120773%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.154589371980677%"),
    top: hp("5.874316939890711%"),
    justifyContent: "flex-start"
  },
  Text_100_3027: {
    color: "rgba(244, 42, 62, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_100_2989: {
    width: wp("34.29951690821256%"),
    minWidth: wp("34.29951690821256%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.367149758454104%"),
    top: hp("107.92349726775956%"),
    justifyContent: "flex-start"
  },
  Text_100_2989: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_100_2990: {
    width: wp("41.30434782608695%"),
    minWidth: wp("41.30434782608695%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.985507246376812%"),
    top: hp("94.12568306010928%")
  },
  View_100_2991: {
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
  View_100_2992: {
    width: wp("30.694019852053138%"),
    minWidth: wp("30.694019852053138%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.305046044685987%"),
    top: hp("1.3661202185792405%"),
    justifyContent: "flex-start"
  },
  Text_100_2992: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_3018: {
    width: wp("49.75845410628019%"),
    minWidth: wp("49.75845410628019%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.879227053140095%"),
    top: hp("102.73224043715847%")
  },
  ImageBackground_100_3019: {
    width: wp("22.342995169082126%"),
    minWidth: wp("22.342995169082126%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.092896174863398%")
  },
  ImageBackground_100_3020: {
    width: wp("22.342995169082126%"),
    minWidth: wp("22.342995169082126%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.41545893719807%"),
    top: hp("1.092896174863398%")
  },
  View_100_3021: {
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
  Text_100_3021: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_102_6: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.632850241545896%"),
    top: hp("48.08743169398907%")
  },
  View_100_3006: {
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
  View_100_3007: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.106280193236714%"),
    top: hp("1.7759562841530112%"),
    justifyContent: "flex-start"
  },
  Text_100_3007: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_102_5: {
    width: wp("47.10144927536232%"),
    minWidth: wp("47.10144927536232%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2077294685990339%"),
    top: hp("5.737704918032797%"),
    justifyContent: "flex-start"
  },
  Text_102_5: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
