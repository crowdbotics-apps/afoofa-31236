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
      <View style={styles.View_404_5273}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cf2/f3b6/2296345227e0a284ed286841ded9e6d3"
          }}
          style={styles.ImageBackground_404_5123}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cf2/f3b6/2296345227e0a284ed286841ded9e6d3"
          }}
          style={styles.ImageBackground_404_5124}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cf2/f3b6/2296345227e0a284ed286841ded9e6d3"
          }}
          style={styles.ImageBackground_404_5125}
        />
        <View style={styles.View_404_5126}>
          <Text style={styles.Text_404_5126}>Education</Text>
        </View>
        <View style={styles.View_404_5127}>
          <Text style={styles.Text_404_5127}>Chris Evans</Text>
        </View>
        <View style={styles.View_404_5128}>
          <Text style={styles.Text_404_5128}>Robert Downy Jr.</Text>
        </View>
        <View style={styles.View_404_5129}>
          <Text style={styles.Text_404_5129}>Tom Holland</Text>
        </View>
        <View style={styles.View_404_5130}>
          <Text style={styles.Text_404_5130}>Scarlett Johanson</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9c7/36d1/965365c63e706504daf16dd1f3768270"
          }}
          style={styles.ImageBackground_404_5131}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e766/8336/826d8a572f14361f8a8c933709cca5cd"
          }}
          style={styles.ImageBackground_404_5132}
        />
        <View style={styles.View_404_5136} />
        <View style={styles.View_404_5137}>
          <Text style={styles.Text_404_5137}>Vote Now</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_404_5138}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("97_1888"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3321/a1d4/8eca551e8988f6225e3d70187dafa456"
            }}
            style={styles.ImageBackground_404_5139}
          />
          <View style={styles.View_404_5140}>
            <View style={styles.View_404_5141}>
              <View style={styles.View_404_5142}>
                <Text style={styles.Text_404_5142}>Nutrition</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e3d/044c/45890773912fe704fd070456a118a554"
              }}
              style={styles.ImageBackground_404_5143}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e766/8336/826d8a572f14361f8a8c933709cca5cd"
              }}
              style={styles.ImageBackground_404_5144}
            />
            <View style={styles.View_404_5148} />
            <View style={styles.View_404_5149}>
              <Text style={styles.Text_404_5149}>Vote Now</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/282b/ba62/039af071a1de7f8cfaa6577e397d0c6c"
              }}
              style={styles.ImageBackground_404_5150}
            />
          </View>
          <View style={styles.View_404_5151}>
            <View style={styles.View_404_5152}>
              <View style={styles.View_404_5153}>
                <Text style={styles.Text_404_5153}>Smile</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9b7/68fc/89b6451370f761ac36e4ca1d9feda462"
              }}
              style={styles.ImageBackground_404_5154}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e766/8336/826d8a572f14361f8a8c933709cca5cd"
              }}
              style={styles.ImageBackground_404_5155}
            />
            <View style={styles.View_404_5159} />
            <View style={styles.View_404_5160}>
              <Text style={styles.Text_404_5160}>Vote Now</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7722/3005/b79e67c75556deda7ebbdc08c0932546"
              }}
              style={styles.ImageBackground_404_5161}
            />
          </View>
          <View style={styles.View_404_5162}>
            <View style={styles.View_404_5163}>
              <View style={styles.View_404_5164}>
                <Text style={styles.Text_404_5164}>Unity</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2986/7945/5eb4d3d6cc33777c15370c0031b723f7"
              }}
              style={styles.ImageBackground_404_5165}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e766/8336/826d8a572f14361f8a8c933709cca5cd"
              }}
              style={styles.ImageBackground_404_5166}
            />
            <View style={styles.View_404_5170} />
            <View style={styles.View_404_5171}>
              <Text style={styles.Text_404_5171}>Vote Now</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d69/73a5/940741629341a3bf8c9db52b1b61b178"
              }}
              style={styles.ImageBackground_404_5172}
            />
          </View>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d7f/ada5/0bfdf668cb5ef5614e36a1be1de004b5"
        }}
        style={styles.ImageBackground_404_5122}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7eed/e5e9/02698dee1c5073986e54d17e7c62c827"
        }}
        style={styles.ImageBackground_404_5259}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b301/9a4a/4fd4bc9192944aebc984ddb3395b308a"
        }}
        style={styles.ImageBackground_404_5293}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0910/fdfa/378a7c61d31bb56173e40f07f63ad6d5"
        }}
        style={styles.ImageBackground_404_5266}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/103e/a1a8/d5fd56fc2d28c7c8f18b4a3270c52271"
        }}
        style={styles.ImageBackground_404_5253}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7cc/b1b3/8a5fe45b3f22e2807a9ba092f31ebcda"
        }}
        style={styles.ImageBackground_404_5287}
      />
      <View style={styles.View_404_5174}>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e3f/deee/44d222dda2d057444ed53cc817bf9c36"
          }}
          style={styles.TouchableOpacity_I404_5174_309_905}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("370_3782"))
          }
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_I404_5174_309_907}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("84_296"))
          }
        >
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e687/1aeb/51fe8bba2fec823fe6046aa2fd76e005"
            }}
            style={styles.TouchableOpacity_I404_5174_309_908}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("84_296"))
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I404_5174_309_920}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("404_5300"))
          }
        >
          <View style={styles.View_I404_5174_309_920_309_916}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ec0/6a88/c027f71c44876580f3e2e99a2c61b1cd"
              }}
              style={styles.ImageBackground_I404_5174_309_920_309_917}
            />
          </View>
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8884/8bd2/de6dd3a94736bea95a1d0d2da1182a49"
          }}
          style={styles.ImageBackground_I404_5174_309_928}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8efb/9320/dbc31fd36bf87365f8a113c713f1ed95"
          }}
          style={styles.TouchableOpacity_I404_5174_309_934}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("366_2726"))
          }
        />
      </View>
      <View style={styles.View_404_5173}>
        <View style={styles.View_I404_5173_309_5} />
        <View style={styles.View_I404_5173_309_31}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I404_5173_309_27}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("84_296"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/976c/0ce9/9210d0604147826b21cd34337293bc7a"
              }}
              style={styles.ImageBackground_I404_5173_309_9}
            />
            <View style={styles.View_I404_5173_309_23}>
              <Text style={styles.Text_I404_5173_309_23}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I404_5173_309_28}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("395_4045"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/885e/bc12/997de7d2815db6dfc110ec854b91e9af"
              }}
              style={styles.ImageBackground_I404_5173_309_13}
            />
            <View style={styles.View_I404_5173_309_24}>
              <Text style={styles.Text_I404_5173_309_24}>Payment</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I404_5173_309_29}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("91_1327"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e02/16c0/beecfd4f830eb0967f9bc6b64c64324a"
              }}
              style={styles.ImageBackground_I404_5173_309_21}
            />
            <View style={styles.View_I404_5173_309_25}>
              <Text style={styles.Text_I404_5173_309_25}>Categories</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I404_5173_309_30}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("366_2056"))
            }
          >
            <View style={styles.View_I404_5173_309_22}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e78a/f2e8/65d02d5776406a7cb63ff6df1140761a"
                }}
                style={styles.ImageBackground_I404_5173_309_17}
              />
            </View>
            <View style={styles.View_I404_5173_309_26}>
              <Text style={styles.Text_I404_5173_309_26}>Profile</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I404_5173_309_82}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I404_5173_309_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I404_5173_309_459}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I404_5173_309_304}
        />
      </View>
      <View style={styles.View_404_5283}>
        <View style={styles.View_404_5284} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2303/11f9/c4de385f7b30ae1a2b80f690d5cee771"
          }}
          style={styles.ImageBackground_404_5285}
        />
      </View>
      <View style={styles.View_404_5286}>
        <Text style={styles.Text_404_5286}>Favourites</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("189.20765027322403%") },
  View_404_5273: {
    width: wp("93.47826086956522%"),
    minWidth: wp("93.47826086956522%"),
    height: hp("161.20218579234972%"),
    minHeight: hp("161.20218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.140096618357488%"),
    top: hp("21.994535519125684%")
  },
  ImageBackground_404_5123: {
    width: wp("93.47826086956522%"),
    minWidth: wp("93.47826086956522%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("81.28415300546447%")
  },
  ImageBackground_404_5124: {
    width: wp("93.47826086956522%"),
    minWidth: wp("93.47826086956522%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39.61748633879781%")
  },
  ImageBackground_404_5125: {
    width: wp("93.47826086956522%"),
    minWidth: wp("93.47826086956522%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("122.6775956284153%")
  },
  View_404_5126: {
    width: wp("52.41545893719807%"),
    minWidth: wp("52.41545893719807%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.565217391304348%"),
    top: hp("0.5464480874316919%"),
    justifyContent: "flex-start"
  },
  Text_404_5126: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5127: {
    width: wp("52.41545893719807%"),
    minWidth: wp("52.41545893719807%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.565217391304348%"),
    top: hp("3.688524590163933%"),
    justifyContent: "flex-start"
  },
  Text_404_5127: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5128: {
    width: wp("52.41545893719807%"),
    minWidth: wp("52.41545893719807%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.565217391304348%"),
    top: hp("45.08196721311476%"),
    justifyContent: "flex-start"
  },
  Text_404_5128: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5129: {
    width: wp("52.41545893719807%"),
    minWidth: wp("52.41545893719807%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.565217391304348%"),
    top: hp("86.20218579234972%"),
    justifyContent: "flex-start"
  },
  Text_404_5129: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5130: {
    width: wp("52.41545893719807%"),
    minWidth: wp("52.41545893719807%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.565217391304348%"),
    top: hp("128.27868852459014%"),
    justifyContent: "flex-start"
  },
  Text_404_5130: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_404_5131: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995169%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(50, 50, 48, 1)",
    borderWidth: 1
  },
  ImageBackground_404_5132: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("31.693989071038253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753623%")
  },
  View_404_5136: {
    width: wp("38.164251207729464%"),
    minWidth: wp("38.164251207729464%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.03381642512077%"),
    top: hp("31.147540983606554%"),
    backgroundColor: "rgba(220, 53, 69, 1)"
  },
  View_404_5137: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.449275362318836%"),
    top: hp("32.513661202185794%"),
    justifyContent: "flex-start"
  },
  Text_404_5137: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_404_5138: {
    width: wp("81.15942028985508%"),
    minWidth: wp("81.15942028985508%"),
    height: hp("153.4153005464481%"),
    minHeight: hp("153.4153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995169%"),
    top: hp("7.786885245901637%")
  },
  ImageBackground_404_5139: {
    width: wp("80.91787439613528%"),
    minWidth: wp("80.91787439613528%"),
    height: hp("21.584699453551913%"),
    minHeight: hp("21.584699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980784%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_404_5140: {
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
  View_404_5141: {
    width: wp("52.41545893719807%"),
    minWidth: wp("52.41545893719807%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.52657004830918%"),
    top: hp("0.5464480874316919%")
  },
  View_404_5142: {
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
  Text_404_5142: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_404_5143: {
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
  ImageBackground_404_5144: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("31.693989071038253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9323671497584538%")
  },
  View_404_5148: {
    width: wp("38.164251207729464%"),
    minWidth: wp("38.164251207729464%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.9951690821256%"),
    top: hp("31.147540983606554%"),
    backgroundColor: "rgba(220, 53, 69, 1)"
  },
  View_404_5149: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.41062801932367%"),
    top: hp("32.513661202185794%"),
    justifyContent: "flex-start"
  },
  Text_404_5149: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_404_5150: {
    width: wp("80.91787439613528%"),
    minWidth: wp("80.91787439613528%"),
    height: hp("21.584699453551913%"),
    minHeight: hp("21.584699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980784%"),
    top: hp("7.786885245901637%"),
    resizeMode: "cover"
  },
  View_404_5151: {
    width: wp("81.15942028985508%"),
    minWidth: wp("81.15942028985508%"),
    height: hp("36.6120218579235%"),
    minHeight: hp("36.6120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("75.27322404371584%")
  },
  View_404_5152: {
    width: wp("52.41545893719807%"),
    minWidth: wp("52.41545893719807%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.52657004830918%"),
    top: hp("0.5464480874316848%")
  },
  View_404_5153: {
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
  Text_404_5153: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_404_5154: {
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
  ImageBackground_404_5155: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("31.693989071038274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9323671497584538%")
  },
  View_404_5159: {
    width: wp("38.164251207729464%"),
    minWidth: wp("38.164251207729464%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.9951690821256%"),
    top: hp("31.14754098360656%"),
    backgroundColor: "rgba(220, 53, 69, 1)"
  },
  View_404_5160: {
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
  Text_404_5160: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_404_5161: {
    width: wp("80.91787439613528%"),
    minWidth: wp("80.91787439613528%"),
    height: hp("21.584699453551913%"),
    minHeight: hp("21.584699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980784%"),
    top: hp("7.786885245901644%"),
    resizeMode: "cover"
  },
  View_404_5162: {
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
  View_404_5163: {
    width: wp("52.41545893719807%"),
    minWidth: wp("52.41545893719807%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.52657004830918%"),
    top: hp("0.5464480874316848%")
  },
  View_404_5164: {
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
  Text_404_5164: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_404_5165: {
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
  ImageBackground_404_5166: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("31.69398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9323671497584538%")
  },
  View_404_5170: {
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
  View_404_5171: {
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
  Text_404_5171: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_404_5172: {
    width: wp("80.91787439613528%"),
    minWidth: wp("80.91787439613528%"),
    height: hp("21.584699453551913%"),
    minHeight: hp("21.584699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980784%"),
    top: hp("7.786885245901658%"),
    resizeMode: "cover"
  },
  ImageBackground_404_5122: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("18.989071038251364%"),
    minHeight: hp("18.989071038251364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_404_5259: {
    width: wp("76.40280608393721%"),
    minWidth: wp("76.40280608393721%"),
    height: hp("40.75205234881958%"),
    minHeight: hp("40.75205234881958%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.83146040911836%"),
    top: hp("-21.721311475409834%")
  },
  ImageBackground_404_5293: {
    width: wp("87.61935763888889%"),
    minWidth: wp("87.61935763888889%"),
    height: hp("44.414645335713374%"),
    minHeight: hp("44.414645335713374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.739970184178745%"),
    top: hp("-11.748633879781421%")
  },
  ImageBackground_404_5266: {
    width: wp("85.81324775437803%"),
    minWidth: wp("85.81324775437803%"),
    height: hp("46.868225264418975%"),
    minHeight: hp("46.868225264418975%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.945694633152172%"),
    top: hp("-16.052946497182376%")
  },
  ImageBackground_404_5253: {
    width: wp("74.60536496074879%"),
    minWidth: wp("74.60536496074879%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8.937198067632849%"),
    top: hp("-18.169398907103826%")
  },
  ImageBackground_404_5287: {
    width: wp("65.81936896135265%"),
    minWidth: wp("65.81936896135265%"),
    height: hp("35.84926584379269%"),
    minHeight: hp("35.84926584379269%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-18.84057971014493%"),
    top: hp("-8.100482544612364%")
  },
  View_404_5174: {
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
  TouchableOpacity_I404_5174_309_905: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  TouchableOpacity_I404_5174_309_907: {
    flexGrow: 1,
    width: wp("19.31046195652174%"),
    height: hp("2.7323602978649038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033817%"),
    top: hp("0.4098360655737707%")
  },
  TouchableOpacity_I404_5174_309_908: {
    width: wp("19.31046195652174%"),
    height: hp("2.7323602978649038%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I404_5174_309_920: {
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
  View_I404_5174_309_920_309_916: {
    flexGrow: 1,
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%"),
    top: hp("0.27322404371584685%")
  },
  ImageBackground_I404_5174_309_920_309_917: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I404_5174_309_928: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.743961352657%"),
    top: hp("0%")
  },
  TouchableOpacity_I404_5174_309_934: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.23188405797102%"),
    top: hp("0%")
  },
  View_404_5173: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("180.19125683060108%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I404_5173_309_5: {
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
  View_I404_5173_309_31: {
    flexGrow: 1,
    width: wp("83.33333333333334%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("1.639344262295083%")
  },
  TouchableOpacity_I404_5173_309_27: {
    width: wp("7.729468599033816%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I404_5173_309_9: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I404_5173_309_23: {
    width: wp("7.729468599033816%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I404_5173_309_23: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I404_5173_309_28: {
    width: wp("9.420289855072465%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.913043478260864%")
  },
  ImageBackground_I404_5173_309_13: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594288%")
  },
  View_I404_5173_309_24: {
    width: wp("9.420289855072465%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I404_5173_309_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I404_5173_309_29: {
    width: wp("11.11111111111111%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.58454106280193%")
  },
  ImageBackground_I404_5173_309_21: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  View_I404_5173_309_25: {
    width: wp("11.11111111111111%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I404_5173_309_25: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I404_5173_309_30: {
    width: wp("11.11111111111111%"),
    height: hp("5.56794046704235%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22222222222223%")
  },
  View_I404_5173_309_22: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  ImageBackground_I404_5173_309_17: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I404_5173_309_26: {
    width: wp("11.11111111111111%"),
    top: hp("4.201820248463122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I404_5173_309_26: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I404_5173_309_82: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.57487922705314%"),
    top: hp("0.5464480874317132%")
  },
  ImageBackground_I404_5173_309_380: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.729468599033815%"),
    top: hp("0.5464480874317132%")
  },
  ImageBackground_I404_5173_309_459: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.3671497584541%"),
    top: hp("0.5464480874317132%")
  },
  ImageBackground_I404_5173_309_304: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.091787439613526%"),
    top: hp("0.5464480874317132%")
  },
  View_404_5283: {
    width: wp("5.072463768115942%"),
    minWidth: wp("5.072463768115942%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("13.25136612021858%")
  },
  View_404_5284: {
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
  ImageBackground_404_5285: {
    width: wp("2.8126887077294684%"),
    minWidth: wp("2.8126887077294684%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2077294685990343%"),
    top: hp("0.27322404371584597%")
  },
  View_404_5286: {
    width: wp("55.55555555555556%"),
    minWidth: wp("55.55555555555556%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.352657004830919%"),
    top: hp("13.25136612021858%"),
    justifyContent: "flex-start"
  },
  Text_404_5286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
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
