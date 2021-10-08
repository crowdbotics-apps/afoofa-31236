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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e91e/d556/c8b8325c9208013399f32c1785c3c78f"
        }}
        style={styles.ImageBackground_404_6000}
      />
      <View style={styles.View_404_5731} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e16a/f05f/5d36e27754ae8b70c769cad0c31329cb"
        }}
        style={styles.ImageBackground_404_5732}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a38/512b/6b0f25fcb40b14261dcc30a141baf4f2"
        }}
        style={styles.ImageBackground_404_5740}
      />
      <View style={styles.View_404_5787}>
        <View style={styles.View_I404_5787_309_5} />
        <View style={styles.View_I404_5787_309_31}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I404_5787_309_27}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("84_296"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/976c/0ce9/9210d0604147826b21cd34337293bc7a"
              }}
              style={styles.ImageBackground_I404_5787_309_9}
            />
            <View style={styles.View_I404_5787_309_23}>
              <Text style={styles.Text_I404_5787_309_23}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I404_5787_309_28}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("395_4045"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/885e/bc12/997de7d2815db6dfc110ec854b91e9af"
              }}
              style={styles.ImageBackground_I404_5787_309_13}
            />
            <View style={styles.View_I404_5787_309_24}>
              <Text style={styles.Text_I404_5787_309_24}>Payment</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I404_5787_309_29}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("91_1327"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e02/16c0/beecfd4f830eb0967f9bc6b64c64324a"
              }}
              style={styles.ImageBackground_I404_5787_309_21}
            />
            <View style={styles.View_I404_5787_309_25}>
              <Text style={styles.Text_I404_5787_309_25}>Categories</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I404_5787_309_30}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("366_2056"))
            }
          >
            <View style={styles.View_I404_5787_309_22}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e78a/f2e8/65d02d5776406a7cb63ff6df1140761a"
                }}
                style={styles.ImageBackground_I404_5787_309_17}
              />
            </View>
            <View style={styles.View_I404_5787_309_26}>
              <Text style={styles.Text_I404_5787_309_26}>Profile</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I404_5787_309_82}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I404_5787_309_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I404_5787_309_459}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I404_5787_309_304}
        />
      </View>
      <View style={styles.View_404_5919}>
        <View style={styles.View_404_5920}>
          <View style={styles.View_404_5921} />
          <View style={styles.View_404_5922}>
            <Text style={styles.Text_404_5922}>Leave your message !!</Text>
          </View>
        </View>
        <View style={styles.View_404_5923}>
          <View style={styles.View_404_5924} />
          <View style={styles.View_404_5925} />
          <View style={styles.View_404_5926}>
            <Text style={styles.Text_404_5926}>Send</Text>
          </View>
          <View style={styles.View_404_5927}>
            <Text style={styles.Text_404_5927}>Email </Text>
          </View>
          <View style={styles.View_404_5928}>
            <Text style={styles.Text_404_5928}>Message...</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_404_5929}>
        <Text style={styles.Text_404_5929}>
          CT Headquarters 123 Address Street City, State 00000
        </Text>
      </View>
      <View style={styles.View_404_5940}>
        <View style={styles.View_404_5788}>
          <View style={styles.View_404_5789}>
            <View style={styles.View_404_5790}>
              <Text style={styles.Text_404_5790}>Follow Us !!</Text>
            </View>
            <View style={styles.View_404_5791}>
              <Text style={styles.Text_404_5791}>info@afoofagives.org</Text>
            </View>
            <View style={styles.View_404_5792}>
              <Text style={styles.Text_404_5792}>vote.afoofagives.org</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae09/3411/34f0987f496f908f2f02a2abbecbd390"
            }}
            style={styles.ImageBackground_404_5793}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/717c/d0d3/b13d0ae408ca217c482f287eace1dfcf"
            }}
            style={styles.ImageBackground_404_5796}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8cf/1197/1fb475e634612c66bc57c5e1de58ae58"
            }}
            style={styles.ImageBackground_404_5799}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/141a/756b/7bf8b38c7d281bda63c070b8ccf39406"
            }}
            style={styles.ImageBackground_404_5802}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9886/8668/60de46f396463b405ca98d9bfcd5a815"
            }}
            style={styles.ImageBackground_404_5805}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/891f/9d9f/3fdc7965b61e6b4c96249d416d6fe1cd"
          }}
          style={styles.ImageBackground_404_5933}
        />
        <View style={styles.View_404_5934}>
          <Text style={styles.Text_404_5934}>1234 - 5678 - 910</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0d5/1228/99a0b730bdcd0ac14b7b1b227915d173"
        }}
        style={styles.ImageBackground_404_5999}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f38/f34b/c7b39b4c2cb05d071139950c8e1e33ef"
        }}
        style={styles.ImageBackground_404_5997}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07a4/c76d/db01535ba069fb5065857918e3d1fb12"
        }}
        style={styles.ImageBackground_404_5809}
      />
      <View style={styles.View_404_5810} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/608b/d282/3f52315d6d4316e45a84752225f2632f"
        }}
        style={styles.ImageBackground_404_5811}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30b4/39c3/d8337398c07ad3ff42b3366a67bf2447"
        }}
        style={styles.ImageBackground_404_5817}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78f7/8587/a2af48a540eff43b789e096425057a77"
        }}
        style={styles.ImageBackground_404_5824}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/608b/d282/3f52315d6d4316e45a84752225f2632f"
        }}
        style={styles.ImageBackground_404_5832}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/652b/227a/7c6f30963627e2b544deba8d0d09b6e9"
        }}
        style={styles.ImageBackground_404_5838}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/608b/d282/3f52315d6d4316e45a84752225f2632f"
        }}
        style={styles.ImageBackground_404_5846}
      />
      <View style={styles.View_404_5852}>
        <Text style={styles.Text_404_5852}>Contact Us !!</Text>
      </View>
      <View style={styles.View_404_5862}>
        <View style={styles.View_404_5863} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2303/11f9/c4de385f7b30ae1a2b80f690d5cee771"
          }}
          style={styles.ImageBackground_404_5864}
        />
      </View>
      <View style={styles.View_404_5865}>
        <View style={styles.View_404_5866}>
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/351b/a363/c05d32e2bc69beaca145ba9477097ace"
            }}
            style={styles.TouchableOpacity_I404_5866_309_905}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("370_3782"))
            }
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_I404_5866_309_907}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("84_296"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5941/ff05/3edac74491b2df1452020b35c38a7db7"
              }}
              style={styles.ImageBackground_I404_5866_309_908}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I404_5866_309_920}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("404_5300"))
            }
          >
            <View style={styles.View_I404_5866_309_920_309_916}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09cf/84fe/62b350b3fc309d6e7b062a2ed623c019"
                }}
                style={styles.ImageBackground_I404_5866_309_920_309_917}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13f3/e564/2658f2adf85f9bd65981cd9de1eb92ab"
            }}
            style={styles.TouchableOpacity_I404_5866_309_928}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("404_5120"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d93/5921/18500cef42bfd4bb09341712035bbd12"
            }}
            style={styles.TouchableOpacity_I404_5866_309_934}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("366_2726"))
            }
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  ImageBackground_404_6000: {
    width: wp("126.57004830917874%"),
    minWidth: wp("126.57004830917874%"),
    height: hp("33.60655737704918%"),
    minHeight: hp("33.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-15.942028985507244%"),
    top: hp("38.25136612021858%")
  },
  View_404_5731: {
    width: wp("100.48309178743962%"),
    minWidth: wp("100.48309178743962%"),
    height: hp("32.92349726775956%"),
    minHeight: hp("32.92349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.4830917874396135%"),
    top: hp("87.8415300546448%"),
    backgroundColor: "rgba(243, 243, 243, 1)"
  },
  ImageBackground_404_5732: {
    width: wp("71.32892700785024%"),
    minWidth: wp("71.32892700785024%"),
    height: hp("52.15504130379098%"),
    minHeight: hp("52.15504130379098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.893719806763286%"),
    top: hp("85.65573770491804%")
  },
  ImageBackground_404_5740: {
    width: wp("67.84821293780193%"),
    minWidth: wp("67.84821293780193%"),
    height: hp("32.79273027930755%"),
    minHeight: hp("32.79273027930755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-14.975845410628018%"),
    top: hp("91.80327868852459%")
  },
  View_404_5787: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.4830917874396135%"),
    top: hp("113.3879781420765%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I404_5787_309_5: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(52, 58, 64, 1)"
  },
  View_I404_5787_309_31: {
    flexGrow: 1,
    width: wp("83.33333333333334%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.21256038647343%"),
    top: hp("1.639344262295083%")
  },
  TouchableOpacity_I404_5787_309_27: {
    width: wp("7.729468599033816%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I404_5787_309_9: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I404_5787_309_23: {
    width: wp("7.729468599033816%"),
    top: hp("4.0983606557377215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I404_5787_309_23: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I404_5787_309_28: {
    width: wp("9.420289855072465%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.91304347826087%")
  },
  ImageBackground_I404_5787_309_13: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594182%")
  },
  View_I404_5787_309_24: {
    width: wp("9.420289855072465%"),
    top: hp("4.0983606557377215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I404_5787_309_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I404_5787_309_29: {
    width: wp("11.11111111111111%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.58454106280193%")
  },
  ImageBackground_I404_5787_309_21: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  View_I404_5787_309_25: {
    width: wp("11.11111111111111%"),
    top: hp("4.0983606557377215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I404_5787_309_25: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I404_5787_309_30: {
    width: wp("11.11111111111111%"),
    height: hp("5.56794880517845%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22222222222221%")
  },
  View_I404_5787_309_22: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  ImageBackground_I404_5787_309_17: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I404_5787_309_26: {
    width: wp("11.11111111111111%"),
    top: hp("4.2018285865992056%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I404_5787_309_26: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I404_5787_309_82: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.57487922705314%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I404_5787_309_380: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.729468599033815%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I404_5787_309_459: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.3671497584541%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I404_5787_309_304: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.091787439613526%"),
    top: hp("0.546448087431699%")
  },
  View_404_5919: {
    width: wp("85.99033816425121%"),
    minWidth: wp("85.99033816425121%"),
    height: hp("26.639344262295083%"),
    minHeight: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("59.83606557377049%")
  },
  View_404_5920: {
    width: wp("85.99033816425121%"),
    minWidth: wp("85.99033816425121%"),
    height: hp("26.639344262295083%"),
    minHeight: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_404_5921: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.65700483091787%"),
    top: hp("21.174863387978142%"),
    backgroundColor: "rgba(220, 53, 69, 1)"
  },
  View_404_5922: {
    width: wp("57.2463768115942%"),
    minWidth: wp("57.2463768115942%"),
    minHeight: hp("2.948756817260075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_404_5922: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5923: {
    width: wp("85.99033816425121%"),
    minWidth: wp("85.99033816425121%"),
    height: hp("20.081967213114755%"),
    minHeight: hp("20.081967213114755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.327868852459012%")
  },
  View_404_5924: {
    width: wp("85.99033816425121%"),
    minWidth: wp("85.99033816425121%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(52, 58, 64, 1)",
    borderWidth: 0.5
  },
  View_404_5925: {
    width: wp("85.99033816425121%"),
    minWidth: wp("85.99033816425121%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.69398907103826%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(52, 58, 64, 1)",
    borderWidth: 0.5
  },
  View_404_5926: {
    width: wp("19.565217391304348%"),
    minWidth: wp("19.565217391304348%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.420289855072454%"),
    top: hp("17.21311475409837%"),
    justifyContent: "flex-start"
  },
  Text_404_5926: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5927: {
    width: wp("23.42995169082126%"),
    minWidth: wp("23.42995169082126%"),
    minHeight: hp("2.0105163907744195%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772937%"),
    top: hp("1.5852130827356632%"),
    justifyContent: "flex-start"
  },
  Text_404_5927: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5928: {
    width: wp("23.42995169082126%"),
    minWidth: wp("23.42995169082126%"),
    minHeight: hp("2.0105163907744195%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772937%"),
    top: hp("7.786885245901644%"),
    justifyContent: "flex-start"
  },
  Text_404_5928: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5929: {
    width: wp("43.23671497584541%"),
    minWidth: wp("43.23671497584541%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("46.72131147540984%"),
    justifyContent: "flex-start"
  },
  Text_404_5929: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5940: {
    width: wp("84.00224326313406%"),
    minWidth: wp("84.00224326313406%"),
    height: hp("11.538462821251708%"),
    minHeight: hp("11.538462821251708%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("91.66666666666666%")
  },
  View_404_5788: {
    width: wp("84.00224326313406%"),
    minWidth: wp("84.00224326313406%"),
    height: hp("11.26523877753586%"),
    minHeight: hp("11.26523877753586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158566%")
  },
  View_404_5789: {
    width: wp("84.00224326313406%"),
    minWidth: wp("84.00224326313406%"),
    height: hp("11.26523877753586%"),
    minHeight: hp("11.26523877753586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_404_5790: {
    width: wp("57.2463768115942%"),
    minWidth: wp("57.2463768115942%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_404_5790: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5791: {
    width: wp("42.01040959012681%"),
    minWidth: wp("42.01040959012681%"),
    minHeight: hp("1.9966333941683745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.99183367300725%"),
    top: hp("4.37158469945355%"),
    justifyContent: "flex-start"
  },
  Text_404_5791: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 9.692307472229004,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5792: {
    width: wp("40.95134642964976%"),
    minWidth: wp("40.95134642964976%"),
    minHeight: hp("2.7952934223446038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.99183367300725%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_404_5792: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 9.692307472229004,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_404_5793: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.579710144927546%")
  },
  ImageBackground_404_5796: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("7.923497267759572%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.579710144927546%")
  },
  ImageBackground_404_5799: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.483091787439613%")
  },
  ImageBackground_404_5802: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.628019323671499%")
  },
  ImageBackground_404_5805: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.77294685990338%")
  },
  ImageBackground_404_5933: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.579710144927546%")
  },
  View_404_5934: {
    width: wp("30.193236714975846%"),
    minWidth: wp("30.193236714975846%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.961352657004824%"),
    top: hp("0.6830601092896273%"),
    justifyContent: "flex-start"
  },
  Text_404_5934: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 9.692307472229004,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_404_5999: {
    width: wp("44.20289855072464%"),
    minWidth: wp("44.20289855072464%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.82125603864734%"),
    top: hp("41.80327868852459%")
  },
  ImageBackground_404_5997: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("42.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.75845410628019%")
  },
  ImageBackground_404_5809: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("37.15846994535519%"),
    minHeight: hp("37.15846994535519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_404_5810: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("37.15846994535519%"),
    minHeight: hp("37.15846994535519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(52, 58, 64, 1)"
  },
  ImageBackground_404_5811: {
    width: wp("74.60536496074879%"),
    minWidth: wp("74.60536496074879%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-11.700822765700483%"),
    top: hp("-14.89071038251366%")
  },
  ImageBackground_404_5817: {
    width: wp("41.505321557971016%"),
    minWidth: wp("41.505321557971016%"),
    height: hp("22.175122870773563%"),
    minHeight: hp("22.175122870773563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.35259803366546%"),
    top: hp("15.027322404371585%")
  },
  ImageBackground_404_5824: {
    width: wp("94.48513454861111%"),
    minWidth: wp("94.48513454861111%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2077294685990339%"),
    top: hp("-6.420765027322404%")
  },
  ImageBackground_404_5832: {
    width: wp("74.60536496074879%"),
    minWidth: wp("74.60536496074879%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9.66183574879227%"),
    top: hp("-22.404371584699454%")
  },
  ImageBackground_404_5838: {
    width: wp("94.48513454861111%"),
    minWidth: wp("94.48513454861111%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.98101600241546%"),
    top: hp("-21.44808743169399%")
  },
  ImageBackground_404_5846: {
    width: wp("74.60536496074879%"),
    minWidth: wp("74.60536496074879%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-14.009661835748794%"),
    top: hp("5.737704918032787%")
  },
  View_404_5852: {
    width: wp("41.78743961352657%"),
    minWidth: wp("41.78743961352657%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.83574879227053%"),
    top: hp("14.617486338797814%"),
    justifyContent: "flex-start"
  },
  Text_404_5852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5862: {
    width: wp("5.072463768115942%"),
    minWidth: wp("5.072463768115942%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("16.39344262295082%")
  },
  View_404_5863: {
    width: wp("5.072463768115942%"),
    minWidth: wp("5.072463768115942%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_404_5864: {
    width: wp("2.8127476788949277%"),
    minWidth: wp("2.8127476788949277%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2077294685990339%"),
    top: hp("0.27322404371584597%")
  },
  View_404_5865: {
    width: wp("92.99263332201086%"),
    minWidth: wp("92.99263332201086%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6257241659118358%"),
    top: hp("5.05464480874317%")
  },
  View_404_5866: {
    width: wp("92.99263332201086%"),
    minWidth: wp("92.99263332201086%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_I404_5866_309_905: {
    flexGrow: 1,
    width: wp("5.857782778532608%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.40983606557376984%")
  },
  TouchableOpacity_I404_5866_309_907: {
    flexGrow: 1,
    width: wp("19.512674082880434%"),
    height: hp("2.7323602978649038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8103770380434785%"),
    top: hp("0.40983606557376984%")
  },
  ImageBackground_I404_5866_309_908: {
    width: wp("19.512674082880434%"),
    height: hp("2.7323602978649038%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I404_5866_309_920: {
    flexGrow: 1,
    width: wp("5.857782778532608%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.00220080389492%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I404_5866_309_920_309_916: {
    flexGrow: 1,
    width: wp("4.881515134359903%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.48816330766909743%"),
    top: hp("0.27322404371584597%")
  },
  ImageBackground_I404_5866_309_920_309_917: {
    width: wp("4.881515134359903%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I404_5866_309_928: {
    flexGrow: 1,
    width: wp("5.857782778532608%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.56849618810386%"),
    top: hp("0%")
  },
  TouchableOpacity_I404_5866_309_934: {
    flexGrow: 1,
    width: wp("5.857782778532608%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.13485054347827%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
