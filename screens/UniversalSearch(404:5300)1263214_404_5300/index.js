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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7463/9666/f3dbe0b777ed49fecb4ead5afa85c7dd"
        }}
        style={styles.ImageBackground_404_5319}
      />
      <View style={styles.View_404_5320} />
      <View style={styles.View_404_5321}>
        <Text style={styles.Text_404_5321}>#gdhd847595jnfh</Text>
      </View>
      <View style={styles.View_404_5322}>
        <Text style={styles.Text_404_5322}>06:53:20 GMT</Text>
      </View>
      <View style={styles.View_404_5323}>
        <View style={styles.View_I404_5323_309_5} />
        <View style={styles.View_I404_5323_309_31}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I404_5323_309_27}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("84_296"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/976c/0ce9/9210d0604147826b21cd34337293bc7a"
              }}
              style={styles.ImageBackground_I404_5323_309_9}
            />
            <View style={styles.View_I404_5323_309_23}>
              <Text style={styles.Text_I404_5323_309_23}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I404_5323_309_28}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("395_4045"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/885e/bc12/997de7d2815db6dfc110ec854b91e9af"
              }}
              style={styles.ImageBackground_I404_5323_309_13}
            />
            <View style={styles.View_I404_5323_309_24}>
              <Text style={styles.Text_I404_5323_309_24}>Payment</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I404_5323_309_29}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("91_1327"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e02/16c0/beecfd4f830eb0967f9bc6b64c64324a"
              }}
              style={styles.ImageBackground_I404_5323_309_21}
            />
            <View style={styles.View_I404_5323_309_25}>
              <Text style={styles.Text_I404_5323_309_25}>Categories</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I404_5323_309_30}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("366_2056"))
            }
          >
            <View style={styles.View_I404_5323_309_22}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e78a/f2e8/65d02d5776406a7cb63ff6df1140761a"
                }}
                style={styles.ImageBackground_I404_5323_309_17}
              />
            </View>
            <View style={styles.View_I404_5323_309_26}>
              <Text style={styles.Text_I404_5323_309_26}>Profile</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I404_5323_309_82}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I404_5323_309_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I404_5323_309_459}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I404_5323_309_304}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/608b/d282/3f52315d6d4316e45a84752225f2632f"
        }}
        style={styles.ImageBackground_404_5324}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7eed/e5e9/02698dee1c5073986e54d17e7c62c827"
        }}
        style={styles.ImageBackground_404_5330}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0798/13bf/c33d1ad3d59f06b2e16fee38a0fb9bc9"
        }}
        style={styles.ImageBackground_404_5337}
      />
      <View style={styles.View_404_5343}>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e3f/deee/44d222dda2d057444ed53cc817bf9c36"
          }}
          style={styles.TouchableOpacity_I404_5343_309_905}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("370_3782"))
          }
        />
        <View style={styles.View_I404_5343_309_907}>
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e687/1aeb/51fe8bba2fec823fe6046aa2fd76e005"
            }}
            style={styles.TouchableOpacity_I404_5343_309_908}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("84_296"))
            }
          />
        </View>
        <View style={styles.View_I404_5343_309_920}>
          <View style={styles.View_I404_5343_309_920_309_916}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/835b/6e14/990b5e9fa6d2c3d6c752a14bae98a079"
              }}
              style={styles.ImageBackground_I404_5343_309_920_309_917}
            />
          </View>
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/424a/61f1/88ada7f713f7dd00775403106f37f8c8"
          }}
          style={styles.TouchableOpacity_I404_5343_309_928}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("404_5120"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8efb/9320/dbc31fd36bf87365f8a113c713f1ed95"
          }}
          style={styles.TouchableOpacity_I404_5343_309_934}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("366_2726"))
          }
        />
      </View>
      <View style={styles.View_404_5505} />
      <View style={styles.View_404_5506}>
        <Text style={styles.Text_404_5506}>Search here</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30e9/1435/bc19c44a8ba6986f170a02603311a883"
        }}
        style={styles.ImageBackground_404_5507}
      />
      <View style={styles.View_404_5521}>
        <View style={styles.View_404_5512}>
          <Text style={styles.Text_404_5512}>Recent Search</Text>
        </View>
        <View style={styles.View_404_5513}>
          <Text style={styles.Text_404_5513}>Lorem Ipsum </Text>
        </View>
        <View style={styles.View_404_5515}>
          <Text style={styles.Text_404_5515}>dummy text </Text>
        </View>
        <View style={styles.View_404_5516}>
          <Text style={styles.Text_404_5516}>Lorem Ipsum </Text>
        </View>
        <View style={styles.View_404_5517}>
          <Text style={styles.Text_404_5517}>dummy text </Text>
        </View>
        <View style={styles.View_404_5518}>
          <Text style={styles.Text_404_5518}>dummy text </Text>
        </View>
      </View>
      <View style={styles.View_404_5522}>
        <View style={styles.View_404_5523}>
          <Text style={styles.Text_404_5523}>Trending</Text>
        </View>
        <View style={styles.View_404_5524}>
          <Text style={styles.Text_404_5524}>Lorem Ipsum </Text>
        </View>
        <View style={styles.View_404_5525}>
          <Text style={styles.Text_404_5525}>dummy text </Text>
        </View>
        <View style={styles.View_404_5526}>
          <Text style={styles.Text_404_5526}>Lorem Ipsum </Text>
        </View>
        <View style={styles.View_404_5527}>
          <Text style={styles.Text_404_5527}>dummy text </Text>
        </View>
        <View style={styles.View_404_5528}>
          <Text style={styles.Text_404_5528}>dummy text </Text>
        </View>
        <View style={styles.View_404_5529}>
          <Text style={styles.Text_404_5529}>Lorem Ipsum </Text>
        </View>
        <View style={styles.View_404_5530}>
          <Text style={styles.Text_404_5530}>dummy text </Text>
        </View>
        <View style={styles.View_404_5531}>
          <Text style={styles.Text_404_5531}>Lorem Ipsum </Text>
        </View>
        <View style={styles.View_404_5532}>
          <Text style={styles.Text_404_5532}>dummy text </Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b87d/b0ca/73c994784b1e7a1fe4de8a2f63fcdc5b"
        }}
        style={styles.ImageBackground_404_5519}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b87d/b0ca/73c994784b1e7a1fe4de8a2f63fcdc5b"
        }}
        style={styles.ImageBackground_404_5520}
      />
      <View style={styles.View_404_5552}>
        <View style={styles.View_404_5553} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c474/d119/669c15ef12a815b20d83df04364e5b38"
          }}
          style={styles.ImageBackground_404_5554}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  ImageBackground_404_5319: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("116.93989071038251%")
  },
  View_404_5320: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(52, 58, 64, 1)"
  },
  View_404_5321: {
    width: wp("28.502415458937197%"),
    minWidth: wp("28.502415458937197%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.130434782608695%"),
    top: hp("113.52459016393443%"),
    justifyContent: "flex-start"
  },
  Text_404_5321: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5322: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.63768115942028%"),
    top: hp("113.52459016393443%"),
    justifyContent: "flex-start"
  },
  Text_404_5322: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5323: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("113.3879781420765%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I404_5323_309_5: {
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
  View_I404_5323_309_31: {
    flexGrow: 1,
    width: wp("83.33333333333334%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("1.639344262295083%")
  },
  TouchableOpacity_I404_5323_309_27: {
    width: wp("7.729468599033816%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I404_5323_309_9: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I404_5323_309_23: {
    width: wp("7.729468599033816%"),
    top: hp("4.0983606557377215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I404_5323_309_23: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I404_5323_309_28: {
    width: wp("9.420289855072465%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.913043478260864%")
  },
  ImageBackground_I404_5323_309_13: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594288%")
  },
  View_I404_5323_309_24: {
    width: wp("9.420289855072465%"),
    top: hp("4.0983606557377215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I404_5323_309_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I404_5323_309_29: {
    width: wp("11.11111111111111%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.58454106280193%")
  },
  ImageBackground_I404_5323_309_21: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  View_I404_5323_309_25: {
    width: wp("11.11111111111111%"),
    top: hp("4.0983606557377215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I404_5323_309_25: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I404_5323_309_30: {
    width: wp("11.11111111111111%"),
    height: hp("5.56794880517845%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22222222222223%")
  },
  View_I404_5323_309_22: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  ImageBackground_I404_5323_309_17: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I404_5323_309_26: {
    width: wp("11.11111111111111%"),
    top: hp("4.2018285865992056%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I404_5323_309_26: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I404_5323_309_82: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.57487922705314%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I404_5323_309_380: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.729468599033815%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I404_5323_309_459: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.3671497584541%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I404_5323_309_304: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.091787439613526%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_404_5324: {
    width: wp("74.60536496074879%"),
    minWidth: wp("74.60536496074879%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-29.227053140096622%"),
    top: hp("-18.169398907103826%")
  },
  ImageBackground_404_5330: {
    width: wp("76.40280608393721%"),
    minWidth: wp("76.40280608393721%"),
    height: hp("40.75205234881958%"),
    minHeight: hp("40.75205234881958%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.54160533665459%"),
    top: hp("-21.721311475409834%")
  },
  ImageBackground_404_5337: {
    width: wp("86.59479261020532%"),
    minWidth: wp("86.59479261020532%"),
    height: hp("47.12343476509136%"),
    minHeight: hp("47.12343476509136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.874294704861112%"),
    top: hp("-16.052946497182376%")
  },
  View_404_5343: {
    width: wp("92.02898550724638%"),
    minWidth: wp("92.02898550724638%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("5.191256830601093%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_I404_5343_309_905: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  View_I404_5343_309_907: {
    flexGrow: 1,
    width: wp("19.31046195652174%"),
    height: hp("2.7323602978649038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033815%"),
    top: hp("0.4098360655737707%")
  },
  TouchableOpacity_I404_5343_309_908: {
    width: wp("19.31046195652174%"),
    height: hp("2.7323602978649038%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I404_5343_309_920: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.256038647343%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I404_5343_309_920_309_916: {
    flexGrow: 1,
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.483091787439605%"),
    top: hp("0.27322404371584685%")
  },
  ImageBackground_I404_5343_309_920_309_917: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I404_5343_309_928: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.74396135265701%"),
    top: hp("0%")
  },
  TouchableOpacity_I404_5343_309_934: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.23188405797102%"),
    top: hp("0%")
  },
  View_404_5505: {
    width: wp("79.46859903381642%"),
    minWidth: wp("79.46859903381642%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.285024154589372%"),
    top: hp("14.754098360655737%"),
    backgroundColor: "rgba(240, 240, 240, 1)",
    borderColor: "rgba(148, 146, 146, 1)",
    borderWidth: 0.5
  },
  View_404_5506: {
    width: wp("45.169082125603865%"),
    minWidth: wp("45.169082125603865%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.908212560386474%"),
    top: hp("16.39344262295082%"),
    justifyContent: "flex-start"
  },
  Text_404_5506: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_404_5507: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("16.530054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.29951690821255%")
  },
  View_404_5521: {
    width: wp("82.1256038647343%"),
    minWidth: wp("82.1256038647343%"),
    height: hp("22.950819672131146%"),
    minHeight: hp("22.950819672131146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("24.043715846994534%")
  },
  View_404_5512: {
    width: wp("36.95652173913043%"),
    minWidth: wp("36.95652173913043%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_404_5512: {
    color: "rgba(125, 125, 125, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5513: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.44927536231884%"),
    top: hp("4.508196721311474%"),
    justifyContent: "flex-start"
  },
  Text_404_5513: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5515: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.44927536231884%"),
    top: hp("8.606557377049182%"),
    justifyContent: "flex-start"
  },
  Text_404_5515: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5516: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.44927536231884%"),
    top: hp("12.704918032786889%"),
    justifyContent: "flex-start"
  },
  Text_404_5516: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5517: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.44927536231884%"),
    top: hp("16.803278688524596%"),
    justifyContent: "flex-start"
  },
  Text_404_5517: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5518: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.44927536231884%"),
    top: hp("20.901639344262296%"),
    justifyContent: "flex-start"
  },
  Text_404_5518: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5522: {
    width: wp("82.1256038647343%"),
    minWidth: wp("82.1256038647343%"),
    height: hp("39.34426229508197%"),
    minHeight: hp("39.34426229508197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("55.73770491803278%")
  },
  View_404_5523: {
    width: wp("36.95652173913043%"),
    minWidth: wp("36.95652173913043%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_404_5523: {
    color: "rgba(125, 125, 125, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5524: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.44927536231884%"),
    top: hp("4.508196721311471%"),
    justifyContent: "flex-start"
  },
  Text_404_5524: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5525: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.44927536231884%"),
    top: hp("8.606557377049178%"),
    justifyContent: "flex-start"
  },
  Text_404_5525: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5526: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.44927536231884%"),
    top: hp("12.7049180327869%"),
    justifyContent: "flex-start"
  },
  Text_404_5526: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5527: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.44927536231884%"),
    top: hp("16.803278688524593%"),
    justifyContent: "flex-start"
  },
  Text_404_5527: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5528: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.44927536231884%"),
    top: hp("20.9016393442623%"),
    justifyContent: "flex-start"
  },
  Text_404_5528: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5529: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594182%"),
    top: hp("24.999999999999993%"),
    justifyContent: "flex-start"
  },
  Text_404_5529: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5530: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594182%"),
    top: hp("29.098360655737714%"),
    justifyContent: "flex-start"
  },
  Text_404_5530: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5531: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594182%"),
    top: hp("33.19672131147542%"),
    justifyContent: "flex-start"
  },
  Text_404_5531: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5532: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594182%"),
    top: hp("37.295081967213115%"),
    justifyContent: "flex-start"
  },
  Text_404_5532: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_404_5519: {
    width: wp("94.08212560386472%"),
    minWidth: wp("94.08212560386472%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.536231884057971%"),
    top: hp("51.36612021857923%")
  },
  ImageBackground_404_5520: {
    width: wp("94.08212560386472%"),
    minWidth: wp("94.08212560386472%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.536231884057971%"),
    top: hp("22.540983606557376%")
  },
  View_404_5552: {
    width: wp("5.072463768115942%"),
    minWidth: wp("5.072463768115942%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("16.120218579234972%")
  },
  View_404_5553: {
    width: wp("5.072463768115942%"),
    minWidth: wp("5.072463768115942%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 240, 240, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 0.5
  },
  ImageBackground_404_5554: {
    width: wp("2.8127476788949277%"),
    minWidth: wp("2.8127476788949277%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2077294685990339%"),
    top: hp("0.27322404371584597%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
