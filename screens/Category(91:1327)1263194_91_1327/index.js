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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d370/4580/afd1424e77354423313f20bfc545b0e6"
        }}
        style={styles.ImageBackground_91_1384}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/092a/082b/df0cc43006912c68b2edbd3253e08a25"
        }}
        style={styles.ImageBackground_91_1336}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cf2/f3b6/2296345227e0a284ed286841ded9e6d3"
        }}
        style={styles.ImageBackground_91_1370}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cf2/f3b6/2296345227e0a284ed286841ded9e6d3"
        }}
        style={styles.ImageBackground_97_1827}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cf2/f3b6/2296345227e0a284ed286841ded9e6d3"
        }}
        style={styles.ImageBackground_91_1371}
      />
      <View style={styles.View_91_1348}>
        <Text style={styles.Text_91_1348}>Education</Text>
      </View>
      <View style={styles.View_178_6463}>
        <Text style={styles.Text_178_6463}>Chris Evans</Text>
      </View>
      <View style={styles.View_178_6464}>
        <Text style={styles.Text_178_6464}>Robert Downy Jr.</Text>
      </View>
      <View style={styles.View_178_6465}>
        <Text style={styles.Text_178_6465}>Tom Holland</Text>
      </View>
      <View style={styles.View_178_6466}>
        <Text style={styles.Text_178_6466}>Scarlett Johanson</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9c7/36d1/965365c63e706504daf16dd1f3768270"
        }}
        style={styles.ImageBackground_91_1425}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e766/8336/826d8a572f14361f8a8c933709cca5cd"
        }}
        style={styles.ImageBackground_91_1426}
      />
      <View style={styles.View_91_1439} />
      <View style={styles.View_91_1440}>
        <Text style={styles.Text_91_1440}>Vote Now</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_370_3689}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("97_1888"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3321/a1d4/8eca551e8988f6225e3d70187dafa456"
          }}
          style={styles.ImageBackground_91_1441}
        />
        <View style={styles.View_95_1444}>
          <View style={styles.View_95_1445}>
            <View style={styles.View_95_1446}>
              <Text style={styles.Text_95_1446}>Nutrition</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e3d/044c/45890773912fe704fd070456a118a554"
            }}
            style={styles.ImageBackground_95_1447}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e766/8336/826d8a572f14361f8a8c933709cca5cd"
            }}
            style={styles.ImageBackground_95_1448}
          />
          <View style={styles.View_95_1461} />
          <View style={styles.View_95_1462}>
            <Text style={styles.Text_95_1462}>Vote Now</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/282b/ba62/039af071a1de7f8cfaa6577e397d0c6c"
            }}
            style={styles.ImageBackground_95_1463}
          />
        </View>
        <View style={styles.View_95_1464}>
          <View style={styles.View_95_1465}>
            <View style={styles.View_95_1466}>
              <Text style={styles.Text_95_1466}>Smile</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9b7/68fc/89b6451370f761ac36e4ca1d9feda462"
            }}
            style={styles.ImageBackground_95_1467}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e766/8336/826d8a572f14361f8a8c933709cca5cd"
            }}
            style={styles.ImageBackground_95_1468}
          />
          <View style={styles.View_95_1481} />
          <View style={styles.View_95_1482}>
            <Text style={styles.Text_95_1482}>Vote Now</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7722/3005/b79e67c75556deda7ebbdc08c0932546"
            }}
            style={styles.ImageBackground_95_1483}
          />
        </View>
        <View style={styles.View_95_1484}>
          <View style={styles.View_95_1485}>
            <View style={styles.View_95_1486}>
              <Text style={styles.Text_95_1486}>Unity</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2986/7945/5eb4d3d6cc33777c15370c0031b723f7"
            }}
            style={styles.ImageBackground_95_1487}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e766/8336/826d8a572f14361f8a8c933709cca5cd"
            }}
            style={styles.ImageBackground_95_1488}
          />
          <View style={styles.View_95_1501} />
          <View style={styles.View_95_1502}>
            <Text style={styles.Text_95_1502}>Vote Now</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d69/73a5/940741629341a3bf8c9db52b1b61b178"
            }}
            style={styles.ImageBackground_95_1503}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_325_1336}>
        <View style={styles.View_I325_1336_309_5} />
        <View style={styles.View_I325_1336_309_31}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I325_1336_309_27}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("84_296"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/976c/0ce9/9210d0604147826b21cd34337293bc7a"
              }}
              style={styles.ImageBackground_I325_1336_309_9}
            />
            <View style={styles.View_I325_1336_309_23}>
              <Text style={styles.Text_I325_1336_309_23}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I325_1336_309_28}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("395_4045"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/885e/bc12/997de7d2815db6dfc110ec854b91e9af"
              }}
              style={styles.ImageBackground_I325_1336_309_13}
            />
            <View style={styles.View_I325_1336_309_24}>
              <Text style={styles.Text_I325_1336_309_24}>Payment</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.View_I325_1336_309_29}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5553/b2a0/0c0ea7b972b47053ccb8d17c423cb0a1"
              }}
              style={styles.ImageBackground_I325_1336_309_21}
            />
            <View style={styles.View_I325_1336_309_25}>
              <Text style={styles.Text_I325_1336_309_25}>Categories</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I325_1336_309_30}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("366_2056"))
            }
          >
            <View style={styles.View_I325_1336_309_22}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e78a/f2e8/65d02d5776406a7cb63ff6df1140761a"
                }}
                style={styles.ImageBackground_I325_1336_309_17}
              />
            </View>
            <View style={styles.View_I325_1336_309_26}>
              <Text style={styles.Text_I325_1336_309_26}>Profile</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I325_1336_309_82}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a6/168b/f07b1d4ab3c24a4549e185c706367dc7"
          }}
          style={styles.ImageBackground_I325_1336_309_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I325_1336_309_459}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I325_1336_309_304}
        />
      </View>
      <View style={styles.View_325_1471}>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e3f/deee/44d222dda2d057444ed53cc817bf9c36"
          }}
          style={styles.TouchableOpacity_I325_1471_309_905}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("370_3782"))
          }
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_I325_1471_309_907}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("84_296"))
          }
        >
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e687/1aeb/51fe8bba2fec823fe6046aa2fd76e005"
            }}
            style={styles.TouchableOpacity_I325_1471_309_908}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("84_296"))
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I325_1471_309_920}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("404_5300"))
          }
        >
          <View style={styles.View_I325_1471_309_920_309_916}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ec0/6a88/c027f71c44876580f3e2e99a2c61b1cd"
              }}
              style={styles.ImageBackground_I325_1471_309_920_309_917}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8afc/7ef8/e70dbca284eefa64ba40a3bd3ae2d50d"
          }}
          style={styles.TouchableOpacity_I325_1471_309_928}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("404_5120"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8efb/9320/dbc31fd36bf87365f8a113c713f1ed95"
          }}
          style={styles.TouchableOpacity_I325_1471_309_934}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("366_2726"))
          }
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d64a/01ab/6eab8adb9f01b331fa467106198df05d"
        }}
        style={styles.ImageBackground_366_3374}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adcc/d23c/e9664a125a8e7e5f1116735e6d101d3e"
        }}
        style={styles.ImageBackground_366_3380}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d64a/01ab/6eab8adb9f01b331fa467106198df05d"
        }}
        style={styles.ImageBackground_366_3387}
      />
      <View style={styles.View_91_1386} />
      <View style={styles.View_91_1442}>
        <View style={styles.View_91_1342}>
          <View style={styles.View_91_1343}>
            <Text style={styles.Text_91_1343}>Sept, 2021: Industry...</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b7c/9ddf/627c02161c4e41ed861cb2cbc4e15372"
          }}
          style={styles.ImageBackground_91_1382}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23d4/947f/fe37bed89cefd7f343d44d98f06d8617"
          }}
          style={styles.ImageBackground_91_1383}
        />
        <View style={styles.View_91_1411}>
          <Text style={styles.Text_91_1411}>
            Epsom salt, chemically known as magnesium sulfate (MgSO4), is a pure
            mineral compound. While in medicine, Epsom salt possesses a number
            of clinical applications; in skincare, its main purpose is to
            provide topical exfoliation to achieve smoother, softer skin. This
            can be achieved by using the salt crystals as an exfoliate to
            mechanically stimulate and rejuvenate the top layers of the skin’s
            surface. The common method of use for Epsom salt is to dilute the
            mineral in warm bath water. Subsequently
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("225.81967213114754%") },
  ImageBackground_91_1384: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("34.2896174863388%"),
    minHeight: hp("34.2896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.792349726775956%"),
    resizeMode: "cover"
  },
  ImageBackground_91_1336: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_91_1370: {
    width: wp("93.47826086956522%"),
    minWidth: wp("93.47826086956522%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772946%"),
    top: hp("130.19125683060108%")
  },
  ImageBackground_97_1827: {
    width: wp("93.47826086956522%"),
    minWidth: wp("93.47826086956522%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772946%"),
    top: hp("88.52459016393442%")
  },
  ImageBackground_91_1371: {
    width: wp("93.47826086956522%"),
    minWidth: wp("93.47826086956522%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772946%"),
    top: hp("171.5846994535519%")
  },
  View_91_1348: {
    width: wp("52.41545893719807%"),
    minWidth: wp("52.41545893719807%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.946859903381643%"),
    top: hp("49.45355191256831%"),
    justifyContent: "flex-start"
  },
  Text_91_1348: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_178_6463: {
    width: wp("52.41545893719807%"),
    minWidth: wp("52.41545893719807%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.946859903381643%"),
    top: hp("52.595628415300546%"),
    justifyContent: "flex-start"
  },
  Text_178_6463: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_178_6464: {
    width: wp("52.41545893719807%"),
    minWidth: wp("52.41545893719807%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.946859903381643%"),
    top: hp("93.98907103825137%"),
    justifyContent: "flex-start"
  },
  Text_178_6464: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_178_6465: {
    width: wp("52.41545893719807%"),
    minWidth: wp("52.41545893719807%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.946859903381643%"),
    top: hp("135.10928961748633%"),
    justifyContent: "flex-start"
  },
  Text_178_6465: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_178_6466: {
    width: wp("52.41545893719807%"),
    minWidth: wp("52.41545893719807%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.946859903381643%"),
    top: hp("177.18579234972677%"),
    justifyContent: "flex-start"
  },
  Text_178_6466: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_91_1425: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.420289855072465%"),
    top: hp("48.90710382513661%"),
    resizeMode: "cover",
    borderColor: "rgba(50, 50, 48, 1)",
    borderWidth: 1
  },
  ImageBackground_91_1426: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("80.60109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.352657004830919%")
  },
  View_91_1439: {
    width: wp("38.164251207729464%"),
    minWidth: wp("38.164251207729464%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.41545893719807%"),
    top: hp("80.05464480874316%"),
    backgroundColor: "rgba(220, 53, 69, 1)"
  },
  View_91_1440: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.830917874396135%"),
    top: hp("81.4207650273224%"),
    justifyContent: "flex-start"
  },
  Text_91_1440: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_370_3689: {
    width: wp("81.15942028985508%"),
    minWidth: wp("81.15942028985508%"),
    height: hp("153.4153005464481%"),
    minHeight: hp("153.4153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.420289855072465%"),
    top: hp("56.69398907103825%")
  },
  ImageBackground_91_1441: {
    width: wp("80.91787439613528%"),
    minWidth: wp("80.91787439613528%"),
    height: hp("21.584699453551913%"),
    minHeight: hp("21.584699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980606%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_95_1444: {
    width: wp("81.15942028985508%"),
    minWidth: wp("81.15942028985508%"),
    height: hp("36.6120218579235%"),
    minHeight: hp("36.6120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.743169398907106%")
  },
  View_95_1445: {
    width: wp("52.41545893719807%"),
    minWidth: wp("52.41545893719807%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.526570048309178%"),
    top: hp("0.5464480874316848%")
  },
  View_95_1446: {
    width: wp("52.41545893719807%"),
    minWidth: wp("52.41545893719807%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_95_1446: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_95_1447: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(122, 95, 65, 1)",
    borderWidth: 1
  },
  ImageBackground_95_1448: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("31.69398907103823%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9323671497584538%")
  },
  View_95_1461: {
    width: wp("38.164251207729464%"),
    minWidth: wp("38.164251207729464%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.9951690821256%"),
    top: hp("31.147540983606547%"),
    backgroundColor: "rgba(220, 53, 69, 1)"
  },
  View_95_1462: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.41062801932367%"),
    top: hp("32.51366120218579%"),
    justifyContent: "flex-start"
  },
  Text_95_1462: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_95_1463: {
    width: wp("80.91787439613528%"),
    minWidth: wp("80.91787439613528%"),
    height: hp("21.584699453551913%"),
    minHeight: hp("21.584699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980606%"),
    top: hp("7.786885245901644%"),
    resizeMode: "cover"
  },
  View_95_1464: {
    width: wp("81.15942028985508%"),
    minWidth: wp("81.15942028985508%"),
    height: hp("36.6120218579235%"),
    minHeight: hp("36.6120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("75.27322404371583%")
  },
  View_95_1465: {
    width: wp("52.41545893719807%"),
    minWidth: wp("52.41545893719807%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.526570048309178%"),
    top: hp("0.5464480874317132%")
  },
  View_95_1466: {
    width: wp("52.41545893719807%"),
    minWidth: wp("52.41545893719807%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_95_1466: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_95_1467: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(21, 30, 39, 1)",
    borderWidth: 1
  },
  ImageBackground_95_1468: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("31.69398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9323671497584538%")
  },
  View_95_1481: {
    width: wp("38.164251207729464%"),
    minWidth: wp("38.164251207729464%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.9951690821256%"),
    top: hp("31.147540983606547%"),
    backgroundColor: "rgba(220, 53, 69, 1)"
  },
  View_95_1482: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.41062801932367%"),
    top: hp("32.5136612021858%"),
    justifyContent: "flex-start"
  },
  Text_95_1482: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_95_1483: {
    width: wp("80.91787439613528%"),
    minWidth: wp("80.91787439613528%"),
    height: hp("21.584699453551913%"),
    minHeight: hp("21.584699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980606%"),
    top: hp("7.786885245901658%"),
    resizeMode: "cover"
  },
  View_95_1484: {
    width: wp("81.15942028985508%"),
    minWidth: wp("81.15942028985508%"),
    height: hp("36.6120218579235%"),
    minHeight: hp("36.6120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("116.80327868852459%")
  },
  View_95_1485: {
    width: wp("52.41545893719807%"),
    minWidth: wp("52.41545893719807%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.526570048309178%"),
    top: hp("0.5464480874316848%")
  },
  View_95_1486: {
    width: wp("52.41545893719807%"),
    minWidth: wp("52.41545893719807%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_95_1486: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_95_1487: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(131, 105, 80, 1)",
    borderWidth: 1
  },
  ImageBackground_95_1488: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("31.69398907103823%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9323671497584538%")
  },
  View_95_1501: {
    width: wp("38.164251207729464%"),
    minWidth: wp("38.164251207729464%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.9951690821256%"),
    top: hp("31.147540983606575%"),
    backgroundColor: "rgba(220, 53, 69, 1)"
  },
  View_95_1502: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.41062801932367%"),
    top: hp("32.51366120218577%"),
    justifyContent: "flex-start"
  },
  Text_95_1502: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_95_1503: {
    width: wp("80.91787439613528%"),
    minWidth: wp("80.91787439613528%"),
    height: hp("21.584699453551913%"),
    minHeight: hp("21.584699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980606%"),
    top: hp("7.78688524590163%"),
    resizeMode: "cover"
  },
  View_325_1336: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("216.8032786885246%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I325_1336_309_5: {
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
  View_I325_1336_309_31: {
    flexGrow: 1,
    width: wp("83.33333333333334%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("1.6393442622950545%")
  },
  TouchableOpacity_I325_1336_309_27: {
    width: wp("7.729468599033816%"),
    height: hp("5.46448087431694%"),
    top: hp("0.13661202185795673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I325_1336_309_9: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I325_1336_309_23: {
    width: wp("7.729468599033816%"),
    top: hp("4.098360655737679%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I325_1336_309_23: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I325_1336_309_28: {
    width: wp("9.420289855072465%"),
    height: hp("5.46448087431694%"),
    top: hp("0.13661202185795673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.913043478260864%")
  },
  ImageBackground_I325_1336_309_13: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594288%")
  },
  View_I325_1336_309_24: {
    width: wp("9.420289855072465%"),
    top: hp("4.098360655737679%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I325_1336_309_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I325_1336_309_29: {
    width: wp("11.11111111111111%"),
    height: hp("5.46448087431694%"),
    top: hp("0.13661202185795673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.58454106280193%")
  },
  ImageBackground_I325_1336_309_21: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  View_I325_1336_309_25: {
    width: wp("11.11111111111111%"),
    top: hp("4.098360655737679%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I325_1336_309_25: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I325_1336_309_30: {
    width: wp("11.11111111111111%"),
    height: hp("5.56794046704235%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22222222222223%")
  },
  View_I325_1336_309_22: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  ImageBackground_I325_1336_309_17: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I325_1336_309_26: {
    width: wp("11.11111111111111%"),
    top: hp("4.20182024846315%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I325_1336_309_26: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I325_1336_309_82: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.57487922705314%"),
    top: hp("0.5464480874316564%")
  },
  ImageBackground_I325_1336_309_380: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.729468599033815%"),
    top: hp("0.5464480874316564%")
  },
  ImageBackground_I325_1336_309_459: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.3671497584541%"),
    top: hp("0.5464480874316564%")
  },
  ImageBackground_I325_1336_309_304: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.091787439613526%"),
    top: hp("0.5464480874316564%")
  },
  View_325_1471: {
    width: wp("92.02898550724638%"),
    minWidth: wp("92.02898550724638%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("6.284153005464481%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_I325_1471_309_905: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  TouchableOpacity_I325_1471_309_907: {
    flexGrow: 1,
    width: wp("19.31046195652174%"),
    height: hp("2.7323602978649038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033817%"),
    top: hp("0.4098360655737707%")
  },
  TouchableOpacity_I325_1471_309_908: {
    width: wp("19.31046195652174%"),
    height: hp("2.7323602978649038%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I325_1471_309_920: {
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
  View_I325_1471_309_920_309_916: {
    flexGrow: 1,
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%"),
    top: hp("0.27322404371584685%")
  },
  ImageBackground_I325_1471_309_920_309_917: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I325_1471_309_928: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.743961352657%"),
    top: hp("0%")
  },
  TouchableOpacity_I325_1471_309_934: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.23188405797102%"),
    top: hp("0%")
  },
  ImageBackground_366_3374: {
    width: wp("74.60536496074879%"),
    minWidth: wp("74.60536496074879%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-14.11628170289855%"),
    top: hp("-5.737704918032787%")
  },
  ImageBackground_366_3380: {
    width: wp("77.6881416062802%"),
    minWidth: wp("77.6881416062802%"),
    height: hp("41.50661614423241%"),
    minHeight: hp("41.50661614423241%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.8011020531401%"),
    top: hp("12.44993366178919%")
  },
  ImageBackground_366_3387: {
    width: wp("74.60536496074879%"),
    minWidth: wp("74.60536496074879%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-17.874396135265698%"),
    top: hp("14.89071038251366%")
  },
  View_91_1386: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("34.83606557377049%"),
    minHeight: hp("34.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.245901639344263%")
  },
  View_91_1442: {
    width: wp("89.3719806763285%"),
    minWidth: wp("89.3719806763285%"),
    height: hp("28.278688524590162%"),
    minHeight: hp("28.278688524590162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.072463768115942%"),
    top: hp("13.524590163934427%")
  },
  View_91_1342: {
    width: wp("47.10144927536232%"),
    minWidth: wp("47.10144927536232%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.72463768115942%"),
    top: hp("0%")
  },
  View_91_1343: {
    width: wp("47.10144927536232%"),
    minWidth: wp("47.10144927536232%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_91_1343: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_91_1382: {
    width: wp("4.1062801932367154%"),
    minWidth: wp("4.1062801932367154%"),
    height: hp("1.5908110988596098%"),
    minHeight: hp("1.5908110988596098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.135265700483096%"),
    top: hp("0.9544883269429842%")
  },
  ImageBackground_91_1383: {
    width: wp("50.24154589371981%"),
    minWidth: wp("50.24154589371981%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.688524590163933%")
  },
  View_91_1411: {
    width: wp("88.40579710144928%"),
    minWidth: wp("88.40579710144928%"),
    minHeight: hp("24.453551912568305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9661835748792269%"),
    top: hp("3.8251366120218577%"),
    justifyContent: "flex-start"
  },
  Text_91_1411: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "justify",
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
