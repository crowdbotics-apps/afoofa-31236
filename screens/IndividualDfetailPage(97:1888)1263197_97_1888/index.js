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
      <View style={styles.View_97_1901}>
        <View style={styles.View_97_1902}>
          <View style={styles.View_97_1903}>
            <Text style={styles.Text_97_1903}>Summary</Text>
          </View>
          <View style={styles.View_97_1904}>
            <Text style={styles.Text_97_1904}>
              Epsom salt, chemically known as magnesium sulfate (MgSO4), is a
              pure mineral compound. While in medicine, Epsom salt possesses a
              number of clinical applications; in skincare, its main purpose is
              to provide topical exfoliation to achieve smoother, softer skin.
              This can be achieved by using the salt crystals as an exfoliate to
              mechanically stimulate and rejuvenate the top layers of the skin’s
              surface. The common method of use for Epsom salt is to dilute the
              mineral in warm bath water. Subsequently
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b75c/6da1/e26745706a7b90b998b4a1e11e8e584c"
            }}
            style={styles.ImageBackground_97_1905}
          />
        </View>
        <View style={styles.View_97_1906}>
          <View style={styles.View_97_1907}>
            <Text style={styles.Text_97_1907}>How we work</Text>
          </View>
          <View style={styles.View_97_1908}>
            <Text style={styles.Text_97_1908}>
              Epsom salt, chemically known as magnesium sulfate (MgSO4), is a
              pure mineral compound. While in medicine, Epsom salt possesses a
              number of clinical applications; in skincare, its main purpose is
              to provide topical exfoliation to achieve smoother, softer skin.
              This can be achieved by using the salt crystals as an exfoliate to
              mechanically stimulate and rejuvenate the top layers of the skin’s
              surface. The common method of use for Epsom salt is to dilute the
              mineral in warm bath water. Subsequently
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c2d/7a16/1e895c486ff5714a3e900268c775c2e4"
            }}
            style={styles.ImageBackground_97_1909}
          />
        </View>
        <View style={styles.View_97_1910}>
          <View style={styles.View_97_1911}>
            <Text style={styles.Text_97_1911}>About the Organization</Text>
          </View>
          <View style={styles.View_97_1912}>
            <Text style={styles.Text_97_1912}>
              Epsom salt, chemically known as magnesium sulfate (MgSO4), is a
              pure mineral compound. While in medicine, Epsom salt possesses a
              number of clinical applications; in skincare, its main purpose is
              to provide topical exfoliation to achieve smoother, softer skin.
              This can be achieved by using the salt crystals as an exfoliate to
              mechanically stimulate and rejuvenate the top layers of the skin’s
              surface. The common method of use for Epsom salt is to dilute the
              mineral in warm bath water. Subsequently
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf4b/dcf0/2362b115fef47c40317ff26eebe0d044"
            }}
            style={styles.ImageBackground_97_1913}
          />
        </View>
      </View>
      <View style={styles.View_325_1337}>
        <View style={styles.View_I325_1337_309_5} />
        <View style={styles.View_I325_1337_309_31}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I325_1337_309_27}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("84_296"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/976c/0ce9/9210d0604147826b21cd34337293bc7a"
              }}
              style={styles.ImageBackground_I325_1337_309_9}
            />
            <View style={styles.View_I325_1337_309_23}>
              <Text style={styles.Text_I325_1337_309_23}>Home</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.View_I325_1337_309_28}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/885e/bc12/997de7d2815db6dfc110ec854b91e9af"
              }}
              style={styles.ImageBackground_I325_1337_309_13}
            />
            <View style={styles.View_I325_1337_309_24}>
              <Text style={styles.Text_I325_1337_309_24}>Payment</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I325_1337_309_29}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("91_1327"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e02/16c0/beecfd4f830eb0967f9bc6b64c64324a"
              }}
              style={styles.ImageBackground_I325_1337_309_21}
            />
            <View style={styles.View_I325_1337_309_25}>
              <Text style={styles.Text_I325_1337_309_25}>Categories</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I325_1337_309_30}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("366_2056"))
            }
          >
            <View style={styles.View_I325_1337_309_22}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e78a/f2e8/65d02d5776406a7cb63ff6df1140761a"
                }}
                style={styles.ImageBackground_I325_1337_309_17}
              />
            </View>
            <View style={styles.View_I325_1337_309_26}>
              <Text style={styles.Text_I325_1337_309_26}>Profile</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I325_1337_309_82}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I325_1337_309_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I325_1337_309_459}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I325_1337_309_304}
        />
      </View>
      <View style={styles.View_655_2405}>
        <View style={styles.View_97_1896}>
          <View style={styles.View_97_1898}>
            <Text style={styles.Text_97_1898}>Amanda Green</Text>
          </View>
          <View style={styles.View_97_1899}>
            <Text style={styles.Text_97_1899}>NGO Admin</Text>
          </View>
          <View style={styles.View_97_1900}>
            <Text style={styles.Text_97_1900}>
              Epsom salt, chemically known as magnesium sulfate (MgSO4), is a
              pure mineral compound. While in med
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/801e/47f7/67096a8ac193ddc5831283f7065be84a"
          }}
          style={styles.ImageBackground_97_2694}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef11/11ba/f23ea983defdc0a2fa313513cc4bff7c"
          }}
          style={styles.ImageBackground_655_2404}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2624/609e/d94ce07849ec6f1a4169e189d62daf5f"
        }}
        style={styles.ImageBackground_97_1917}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8775/97a7/e3db63e3cdaac18019b7c2fdf688a218"
        }}
        style={styles.ImageBackground_97_1918}
      />
      <View style={styles.View_97_1948}>
        <View style={styles.View_97_1949}>
          <View style={styles.View_97_1950} />
        </View>
        <View style={styles.View_97_1951}>
          <View style={styles.View_97_1952}>
            <View style={styles.View_97_1953}>
              <Text style={styles.Text_97_1953}>Profile</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b05/fe30/071bc7c784a4d90f554867a73412b513"
              }}
              style={styles.ImageBackground_97_1954}
            />
          </View>
          <View style={styles.View_97_1960}>
            <View style={styles.View_97_1961}>
              <Text style={styles.Text_97_1961}>Home</Text>
            </View>
            <View style={styles.View_97_1962}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c957/2882/5606a7b518cc04269b5bd8aaca71e1b5"
                }}
                style={styles.ImageBackground_97_1963}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e032/1d99/af1ff4da3630193bedaf83601a385407"
                }}
                style={styles.ImageBackground_97_1964}
              />
            </View>
          </View>
          <View style={styles.View_97_1968}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7468/b349/2a906dfb53ca685e9b6f8003e1395bd9"
              }}
              style={styles.ImageBackground_97_1969}
            />
            <View style={styles.View_97_1976}>
              <Text style={styles.Text_97_1976}>Payments</Text>
            </View>
          </View>
          <View style={styles.View_97_1977}>
            <View style={styles.View_97_1978}>
              <Text style={styles.Text_97_1978}>Categories</Text>
            </View>
            <View style={styles.View_97_1979}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf1c/a66b/a5b9ef23deaf8735957baf95b7bea0bf"
                }}
                style={styles.ImageBackground_97_1980}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b65/63b1/e0375c2989b8b4b43b06552370db2b9e"
                }}
                style={styles.ImageBackground_97_1981}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_97_2017} />
      <View style={styles.View_97_1923}>
        <Text style={styles.Text_97_1923}>Unity</Text>
      </View>
      <View style={styles.View_97_1925}>
        <Text style={styles.Text_97_1925}>
          Epsom salt, chemically known as magnesium sulfate (MgSO4), is a pure
          mineral compound. While in medicine, Epsom salt possesses a number of
          clinical ap
        </Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_376_4015}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("376_3868"))
        }
      >
        <View style={styles.View_97_1926} />
        <View style={styles.View_97_1928}>
          <Text style={styles.Text_97_1928}>Vote Now</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_105_643}>
        <View style={styles.View_105_642} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2303/11f9/c4de385f7b30ae1a2b80f690d5cee771"
          }}
          style={styles.ImageBackground_105_641}
        />
      </View>
      <View style={styles.View_97_1988}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/deff/9965/45c99ade289eba5c9febb5de9d40ba6f"
          }}
          style={styles.ImageBackground_97_2012}
        />
      </View>
      <View style={styles.View_370_3794}>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e3f/deee/44d222dda2d057444ed53cc817bf9c36"
          }}
          style={styles.TouchableOpacity_I370_3794_309_905}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("370_3782"))
          }
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_I370_3794_309_907}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("84_296"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e687/1aeb/51fe8bba2fec823fe6046aa2fd76e005"
            }}
            style={styles.ImageBackground_I370_3794_309_908}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I370_3794_309_920}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("404_5300"))
          }
        >
          <View style={styles.View_I370_3794_309_920_309_916}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ec0/6a88/c027f71c44876580f3e2e99a2c61b1cd"
              }}
              style={styles.ImageBackground_I370_3794_309_920_309_917}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8afc/7ef8/e70dbca284eefa64ba40a3bd3ae2d50d"
          }}
          style={styles.TouchableOpacity_I370_3794_309_928}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("404_5120"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8efb/9320/dbc31fd36bf87365f8a113c713f1ed95"
          }}
          style={styles.TouchableOpacity_I370_3794_309_934}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("366_2726"))
          }
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("199.18032786885246%") },
  View_97_1901: {
    width: wp("88.40579710144928%"),
    minWidth: wp("88.40579710144928%"),
    height: hp("88.79781420765028%"),
    minHeight: hp("88.79781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("80.60109289617486%")
  },
  View_97_1902: {
    width: wp("88.40579710144928%"),
    minWidth: wp("88.40579710144928%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_97_1903: {
    width: wp("34.05797101449276%"),
    minWidth: wp("34.05797101449276%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_97_1903: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_97_1904: {
    width: wp("88.40579710144928%"),
    minWidth: wp("88.40579710144928%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.4644808743169335%"),
    justifyContent: "flex-start"
  },
  Text_97_1904: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_97_1905: {
    width: wp("48.91304347826087%"),
    minWidth: wp("48.91304347826087%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0869565217391308%"),
    top: hp("3.0054644808743234%")
  },
  View_97_1906: {
    width: wp("88.40579710144928%"),
    minWidth: wp("88.40579710144928%"),
    height: hp("25.81967213114754%"),
    minHeight: hp("25.81967213114754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30.874316939890704%")
  },
  View_97_1907: {
    width: wp("34.05797101449276%"),
    minWidth: wp("34.05797101449276%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_97_1907: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_97_1908: {
    width: wp("88.40579710144928%"),
    minWidth: wp("88.40579710144928%"),
    minHeight: hp("20.081967213114755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032804%"),
    justifyContent: "flex-start"
  },
  Text_97_1908: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_97_1909: {
    width: wp("48.91304347826087%"),
    minWidth: wp("48.91304347826087%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0869565217391308%"),
    top: hp("3.0054644808743234%")
  },
  View_97_1910: {
    width: wp("88.40579710144928%"),
    minWidth: wp("88.40579710144928%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("62.70491803278691%")
  },
  View_97_1911: {
    width: wp("53.864734299516904%"),
    minWidth: wp("53.864734299516904%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_97_1911: {
    color: "rgba(255, 193, 7, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_97_1912: {
    width: wp("88.40579710144928%"),
    minWidth: wp("88.40579710144928%"),
    minHeight: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032762%"),
    justifyContent: "flex-start"
  },
  Text_97_1912: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_97_1913: {
    width: wp("48.91304347826087%"),
    minWidth: wp("48.91304347826087%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0869565217391308%"),
    top: hp("3.005464480874309%")
  },
  View_325_1337: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("190.1639344262295%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I325_1337_309_5: {
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
  View_I325_1337_309_31: {
    flexGrow: 1,
    width: wp("83.33333333333334%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("1.639344262295083%")
  },
  TouchableOpacity_I325_1337_309_27: {
    width: wp("7.729468599033816%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I325_1337_309_9: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I325_1337_309_23: {
    width: wp("7.729468599033816%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I325_1337_309_23: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I325_1337_309_28: {
    width: wp("9.420289855072465%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.913043478260864%")
  },
  ImageBackground_I325_1337_309_13: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594288%")
  },
  View_I325_1337_309_24: {
    width: wp("9.420289855072465%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I325_1337_309_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I325_1337_309_29: {
    width: wp("11.11111111111111%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.58454106280193%")
  },
  ImageBackground_I325_1337_309_21: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  View_I325_1337_309_25: {
    width: wp("11.11111111111111%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I325_1337_309_25: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I325_1337_309_30: {
    width: wp("11.11111111111111%"),
    height: hp("5.56794046704235%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22222222222223%")
  },
  View_I325_1337_309_22: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  ImageBackground_I325_1337_309_17: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I325_1337_309_26: {
    width: wp("11.11111111111111%"),
    top: hp("4.201820248463122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I325_1337_309_26: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I325_1337_309_82: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.57487922705314%"),
    top: hp("0.5464480874316848%")
  },
  ImageBackground_I325_1337_309_380: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.729468599033815%"),
    top: hp("0.5464480874316848%")
  },
  ImageBackground_I325_1337_309_459: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.3671497584541%"),
    top: hp("0.5464480874316848%")
  },
  ImageBackground_I325_1337_309_304: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.091787439613526%"),
    top: hp("0.5464480874316848%")
  },
  View_655_2405: {
    width: wp("81.15942028985508%"),
    minWidth: wp("81.15942028985508%"),
    height: hp("15.642076502732241%"),
    minHeight: hp("15.642076502732241%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.420289855072465%"),
    top: hp("58.333333333333336%")
  },
  View_97_1896: {
    width: wp("49.51690821256038%"),
    minWidth: wp("49.51690821256038%"),
    height: hp("15.573770491803279%"),
    minHeight: hp("15.573770491803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.642512077294686%"),
    top: hp("0%")
  },
  View_97_1898: {
    width: wp("48.309178743961354%"),
    minWidth: wp("48.309178743961354%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_97_1898: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_97_1899: {
    width: wp("48.309178743961354%"),
    minWidth: wp("48.309178743961354%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.37158469945355%"),
    justifyContent: "flex-start"
  },
  Text_97_1899: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_97_1900: {
    width: wp("49.51690821256038%"),
    minWidth: wp("49.51690821256038%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.377049180327866%"),
    justifyContent: "flex-start"
  },
  Text_97_1900: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_97_2694: {
    width: wp("27.294685990338163%"),
    minWidth: wp("27.294685990338163%"),
    height: hp("15.437158469945356%"),
    minHeight: hp("15.437158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(254, 190, 64, 1)",
    borderWidth: 2
  },
  ImageBackground_655_2404: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("15.368852459016393%"),
    minHeight: hp("15.368852459016393%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.468599033816428%"),
    top: hp("0.2732240437158495%")
  },
  ImageBackground_97_1917: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("51.61846556950137%"),
    minHeight: hp("51.61846556950137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_97_1918: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("51.61846556950137%"),
    minHeight: hp("51.61846556950137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_97_1948: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("65.90082554217896%"),
    minHeight: hp("65.90082554217896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("192.97895587858608%")
  },
  View_97_1949: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56.88443209955602%")
  },
  View_97_1950: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(52, 58, 64, 1)"
  },
  View_97_1951: {
    width: wp("86.95652173913044%"),
    minWidth: wp("86.95652173913044%"),
    height: hp("65.29134114583334%"),
    minHeight: hp("65.29134114583334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("0%")
  },
  View_97_1952: {
    width: wp("9.903381642512077%"),
    minWidth: wp("9.903381642512077%"),
    height: hp("64.70283549991461%"),
    minHeight: hp("64.70283549991461%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.05314009661835%"),
    top: hp("0.10512721994535923%")
  },
  View_97_1953: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371981672%"),
    top: hp("62.653655172045745%"),
    justifyContent: "flex-start"
  },
  Text_97_1953: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_97_1954: {
    width: wp("9.420289855072465%"),
    height: hp("4.099227821892076%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_97_1960: {
    width: wp("10.517271474939612%"),
    minWidth: wp("10.517271474939612%"),
    height: hp("64.48531020534494%"),
    minHeight: hp("64.48531020534494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.7324552275443921%")
  },
  View_97_1961: {
    width: wp("10.517271474939612%"),
    minWidth: wp("10.517271474939612%"),
    minHeight: hp("2.34801912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("62.13729107966188%"),
    justifyContent: "flex-start"
  },
  Text_97_1961: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_97_1962: {
    width: wp("7.6489139870169085%"),
    minWidth: wp("7.6489139870169085%"),
    height: hp("61.98076758879781%"),
    minHeight: hp("61.98076758879781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.44927536231884%"),
    top: hp("0%")
  },
  ImageBackground_97_1963: {
    width: wp("7.6489139870169085%"),
    minWidth: wp("7.6489139870169085%"),
    height: hp("4.3260584763490435%"),
    minHeight: hp("4.3260584763490435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("57.654709112448785%")
  },
  ImageBackground_97_1964: {
    width: wp("6.073794157608696%"),
    height: hp("2.6430223808913933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.717089371980677%")
  },
  View_97_1968: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: hp("65.08115341103142%"),
    minHeight: hp("65.08115341103142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.772946859903385%"),
    top: hp("0%")
  },
  ImageBackground_97_1969: {
    width: wp("9.66183574879227%"),
    height: hp("4.204321689293033%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8985507246376763%")
  },
  View_97_1976: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("63.03197308316254%"),
    justifyContent: "flex-start"
  },
  Text_97_1976: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_97_1977: {
    width: wp("18.115942028985508%"),
    minWidth: wp("18.115942028985508%"),
    height: hp("64.93083349342554%"),
    minHeight: hp("64.93083349342554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.376811594202906%"),
    top: hp("0.36047429986336965%")
  },
  View_97_1978: {
    width: wp("18.115942028985508%"),
    minWidth: wp("18.115942028985508%"),
    minHeight: hp("2.3644285775273226%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("62.56640491589823%"),
    justifyContent: "flex-start"
  },
  Text_97_1978: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 10.846153259277344,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_97_1979: {
    width: wp("8.918563179347826%"),
    minWidth: wp("8.918563179347826%"),
    height: hp("62.25112331369536%"),
    minHeight: hp("62.25112331369536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.459281589673914%"),
    top: hp("0%")
  },
  ImageBackground_97_1980: {
    width: wp("8.918563179347826%"),
    minWidth: wp("8.918563179347826%"),
    height: hp("5.044138757257514%"),
    minHeight: hp("5.044138757257514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("57.20701790898224%")
  },
  ImageBackground_97_1981: {
    width: wp("6.295525739734299%"),
    height: hp("2.7394779392930326%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.311518719806756%")
  },
  View_97_2017: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("51.63934426229508%"),
    minHeight: hp("51.63934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_97_1923: {
    width: wp("64.00966183574879%"),
    minWidth: wp("64.00966183574879%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.285024154589372%"),
    top: hp("12.431693989071038%"),
    justifyContent: "flex-start"
  },
  Text_97_1923: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_97_1925: {
    width: wp("87.68115942028986%"),
    minWidth: wp("87.68115942028986%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("19.53551912568306%"),
    justifyContent: "flex-start"
  },
  Text_97_1925: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_376_4015: {
    width: wp("34.54106280193236%"),
    minWidth: wp("34.54106280193236%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("33.060109289617486%")
  },
  View_97_1926: {
    width: wp("34.54106280193236%"),
    minWidth: wp("34.54106280193236%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(220, 53, 69, 1)"
  },
  View_97_1928: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995168%"),
    top: hp("1.2295081967213122%"),
    justifyContent: "flex-start"
  },
  Text_97_1928: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_643: {
    width: wp("5.072463768115942%"),
    minWidth: wp("5.072463768115942%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("14.071038251366119%")
  },
  View_105_642: {
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
  ImageBackground_105_641: {
    width: wp("2.8126887077294684%"),
    minWidth: wp("2.8126887077294684%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.207729468599033%"),
    top: hp("0.27322404371584774%")
  },
  View_97_1988: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.33816425120773%"),
    top: hp("13.797814207650273%")
  },
  ImageBackground_97_2012: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_370_3794: {
    width: wp("92.02898550724638%"),
    minWidth: wp("92.02898550724638%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("6.147540983606557%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_I370_3794_309_905: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  TouchableOpacity_I370_3794_309_907: {
    flexGrow: 1,
    width: wp("19.31046195652174%"),
    height: hp("2.732357171063866%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033817%"),
    top: hp("0.4098360655737707%")
  },
  ImageBackground_I370_3794_309_908: {
    width: wp("19.31046195652174%"),
    height: hp("2.732357171063866%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I370_3794_309_920: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.25603864734299%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I370_3794_309_920_309_916: {
    flexGrow: 1,
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%"),
    top: hp("0.27322404371584685%")
  },
  ImageBackground_I370_3794_309_920_309_917: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I370_3794_309_928: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.743961352657%"),
    top: hp("0%")
  },
  TouchableOpacity_I370_3794_309_934: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.23188405797102%"),
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
