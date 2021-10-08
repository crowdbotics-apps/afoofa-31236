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
      <View style={styles.View_376_4017} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dacf/d829/bea1d9504dbea9f80578d35367c83d2a"
        }}
        style={styles.ImageBackground_376_4018}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7936/4f3b/2cafd1404410ae2796c69a7a005afefb"
        }}
        style={styles.ImageBackground_376_4026}
      />
      <View style={styles.View_366_2107}>
        <View style={styles.View_366_2109}>
          <View style={styles.View_366_2110} />
          <View style={styles.View_366_2111}>
            <Text style={styles.Text_366_2111}>Contact Us !!</Text>
          </View>
        </View>
        <View style={styles.View_366_2112}>
          <View style={styles.View_366_2113} />
          <View style={styles.View_366_2114} />
          <View style={styles.View_366_2115}>
            <Text style={styles.Text_366_2115}>Send</Text>
          </View>
          <View style={styles.View_366_2116}>
            <Text style={styles.Text_366_2116}>Email </Text>
          </View>
          <View style={styles.View_366_2117}>
            <Text style={styles.Text_366_2117}>Message...</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_366_2118}>
        <View style={styles.View_366_2119} />
        <View style={styles.View_366_2120}>
          <View style={styles.View_366_2121}>
            <Text style={styles.Text_366_2121}>
              Sept, 2021: Industry...(125)
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b553/c4c2/fa41734c8b0d39f64c5723e5b9e02cc1"
          }}
          style={styles.ImageBackground_366_2122}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c50c/4eb0/3da2ef37030c981da7a8b9d4cc29bfe1"
          }}
          style={styles.ImageBackground_366_2123}
        />
        <View style={styles.View_366_2124}>
          <Text style={styles.Text_366_2124}>Voting Statistics</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/635c/5783/496023e1e70e01deb394cdf024418978"
          }}
          style={styles.ImageBackground_366_2125}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04a3/f204/b904cda475b933cfcbe7021c0194f4e5"
          }}
          style={styles.ImageBackground_366_2129}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9728/5ebd/7e857c53e28e31cc6c7cd62fee3395c3"
          }}
          style={styles.ImageBackground_366_2138}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e39/7835/46ba0e90e430fcef46d5307fac5caa2e"
          }}
          style={styles.ImageBackground_366_2139}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd70/f6b2/9c41ae6925cbcd407db33138b2250423"
          }}
          style={styles.ImageBackground_366_2140}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec2f/2779/49d560eef765aa1bacf2ebb5b18d58ba"
          }}
          style={styles.ImageBackground_366_2141}
        />
        <View style={styles.View_366_2142} />
        <View style={styles.View_366_2143} />
        <View style={styles.View_366_2144}>
          <Text style={styles.Text_366_2144}>Smile</Text>
        </View>
        <View style={styles.View_366_2145}>
          <Text style={styles.Text_366_2145}>Unity</Text>
        </View>
        <View style={styles.View_366_2146} />
        <View style={styles.View_366_2147} />
        <View style={styles.View_366_2148}>
          <Text style={styles.Text_366_2148}>Education</Text>
        </View>
        <View style={styles.View_366_2149}>
          <Text style={styles.Text_366_2149}>Nutrition</Text>
        </View>
        <View style={styles.View_366_2150}>
          <Text style={styles.Text_366_2150}>23%</Text>
        </View>
        <View style={styles.View_366_2151}>
          <Text style={styles.Text_366_2151}>57%</Text>
        </View>
        <View style={styles.View_366_2152}>
          <Text style={styles.Text_366_2152}>16%</Text>
        </View>
        <View style={styles.View_366_2153}>
          <Text style={styles.Text_366_2153}>4%</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_366_2154}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("366_2588"))
        }
      >
        <View style={styles.View_366_2155}>
          <Text style={styles.Text_366_2155}>Voting History</Text>
        </View>
        <View style={styles.View_366_2156}>
          <View style={styles.View_366_2157}>
            <View style={styles.View_366_2158} />
            <View style={styles.View_366_2159} />
            <View style={styles.View_366_2160} />
            <View style={styles.View_366_2161} />
          </View>
          <View style={styles.View_366_2162}>
            <View style={styles.View_366_2163}>
              <Text style={styles.Text_366_2163}>Votes Potential</Text>
            </View>
            <View style={styles.View_366_2164}>
              <Text style={styles.Text_366_2164}>440</Text>
            </View>
          </View>
          <View style={styles.View_366_2165}>
            <View style={styles.View_366_2166}>
              <Text style={styles.Text_366_2166}>Votes Remaining</Text>
            </View>
            <View style={styles.View_366_2167}>
              <Text style={styles.Text_366_2167}>348</Text>
            </View>
          </View>
          <View style={styles.View_366_2168}>
            <View style={styles.View_366_2169}>
              <Text style={styles.Text_366_2169}>Earned Votes</Text>
            </View>
            <View style={styles.View_366_2170}>
              <Text style={styles.Text_366_2170}>461</Text>
            </View>
          </View>
          <View style={styles.View_366_2171}>
            <View style={styles.View_366_2172}>
              <Text style={styles.Text_366_2172}>Votes Made</Text>
            </View>
            <View style={styles.View_366_2173}>
              <Text style={styles.Text_366_2173}>92</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_366_2174}>
        <View style={styles.View_I366_2174_309_5} />
        <View style={styles.View_I366_2174_309_31}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I366_2174_309_27}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("84_296"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/976c/0ce9/9210d0604147826b21cd34337293bc7a"
              }}
              style={styles.ImageBackground_I366_2174_309_9}
            />
            <View style={styles.View_I366_2174_309_23}>
              <Text style={styles.Text_I366_2174_309_23}>Home</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.View_I366_2174_309_28}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/885e/bc12/997de7d2815db6dfc110ec854b91e9af"
              }}
              style={styles.ImageBackground_I366_2174_309_13}
            />
            <View style={styles.View_I366_2174_309_24}>
              <Text style={styles.Text_I366_2174_309_24}>Payment</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I366_2174_309_29}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("91_1327"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e02/16c0/beecfd4f830eb0967f9bc6b64c64324a"
              }}
              style={styles.ImageBackground_I366_2174_309_21}
            />
            <View style={styles.View_I366_2174_309_25}>
              <Text style={styles.Text_I366_2174_309_25}>Categories</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.View_I366_2174_309_30}>
            <View style={styles.View_I366_2174_309_22}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6557/66a8/3b7edc92dd873af83ddbb751e88f5920"
                }}
                style={styles.ImageBackground_I366_2174_309_17}
              />
            </View>
            <View style={styles.View_I366_2174_309_26}>
              <Text style={styles.Text_I366_2174_309_26}>Profile</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I366_2174_309_82}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I366_2174_309_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a6/168b/f07b1d4ab3c24a4549e185c706367dc7"
          }}
          style={styles.ImageBackground_I366_2174_309_459}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I366_2174_309_304}
        />
      </View>
      <View style={styles.View_366_2196}>
        <View style={styles.View_366_2197}>
          <View style={styles.View_366_2198}>
            <Text style={styles.Text_366_2198}>Favourites</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4931/89a4/59c165b51991d0b6d1e0d0c11e7006d7"
          }}
          style={styles.ImageBackground_366_2202}
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_404_5503}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("404_5120"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fa0/e018/a6fca34a4eb8328f2c13bc7880fe0d58"
            }}
            style={styles.ImageBackground_366_2199}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1155/97a4/de0069d240d3678d7f1a2ff68566f6e6"
            }}
            style={styles.ImageBackground_366_2200}
          />
          <View style={styles.View_366_2201} />
          <View style={styles.View_366_2206}>
            <Text style={styles.Text_366_2206}>Smile</Text>
          </View>
          <View style={styles.View_366_2207} />
          <View style={styles.View_366_2208}>
            <Text style={styles.Text_366_2208}>Hope</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_404_5967}>
        <View style={styles.View_404_5968}>
          <View style={styles.View_404_5969}>
            <View style={styles.View_404_5970}>
              <Text style={styles.Text_404_5970}>Follow Us !!</Text>
            </View>
            <View style={styles.View_404_5971}>
              <Text style={styles.Text_404_5971}>info@afoofagives.org</Text>
            </View>
            <View style={styles.View_404_5972}>
              <Text style={styles.Text_404_5972}>vote.afoofagives.org</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae09/3411/34f0987f496f908f2f02a2abbecbd390"
            }}
            style={styles.ImageBackground_404_5973}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/717c/d0d3/b13d0ae408ca217c482f287eace1dfcf"
            }}
            style={styles.ImageBackground_404_5976}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8cf/1197/1fb475e634612c66bc57c5e1de58ae58"
            }}
            style={styles.ImageBackground_404_5979}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/141a/756b/7bf8b38c7d281bda63c070b8ccf39406"
            }}
            style={styles.ImageBackground_404_5982}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9886/8668/60de46f396463b405ca98d9bfcd5a815"
            }}
            style={styles.ImageBackground_404_5985}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/891f/9d9f/3fdc7965b61e6b4c96249d416d6fe1cd"
          }}
          style={styles.ImageBackground_404_5989}
        />
        <View style={styles.View_404_5992}>
          <Text style={styles.Text_404_5992}>1234 - 5678 - 910</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07a4/c76d/db01535ba069fb5065857918e3d1fb12"
        }}
        style={styles.ImageBackground_366_2209}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0d8/7dd6/530d4cf8826c37d9bb91eca7bbe42ee4"
        }}
        style={styles.ImageBackground_366_3370}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d64a/01ab/6eab8adb9f01b331fa467106198df05d"
        }}
        style={styles.ImageBackground_366_3335}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adcc/d23c/e9664a125a8e7e5f1116735e6d101d3e"
        }}
        style={styles.ImageBackground_366_3341}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8645/9ba9/780fc8c6431f513d262d45517b8936fb"
        }}
        style={styles.ImageBackground_366_3348}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d64a/01ab/6eab8adb9f01b331fa467106198df05d"
        }}
        style={styles.ImageBackground_366_3356}
      />
      <View style={styles.View_366_3371} />
      <View style={styles.View_366_3372}>
        <View style={styles.View_366_2212}>
          <Text style={styles.Text_366_2212}>Hello, Amanda !!</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_366_2250}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("366_2387"))
          }
        >
          <View style={styles.View_366_2251} />
          <View style={styles.View_366_2252}>
            <Text style={styles.Text_366_2252}>Edit</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_366_2253}>
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/351b/a363/c05d32e2bc69beaca145ba9477097ace"
            }}
            style={styles.TouchableOpacity_I366_2253_309_905}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("370_3782"))
            }
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_I366_2253_309_907}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("84_296"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5941/ff05/3edac74491b2df1452020b35c38a7db7"
              }}
              style={styles.ImageBackground_I366_2253_309_908}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I366_2253_309_920}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("404_5300"))
            }
          >
            <View style={styles.View_I366_2253_309_920_309_916}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09cf/84fe/62b350b3fc309d6e7b062a2ed623c019"
                }}
                style={styles.ImageBackground_I366_2253_309_920_309_917}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13f3/e564/2658f2adf85f9bd65981cd9de1eb92ab"
            }}
            style={styles.TouchableOpacity_I366_2253_309_928}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("404_5120"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d93/5921/18500cef42bfd4bb09341712035bbd12"
            }}
            style={styles.TouchableOpacity_I366_2253_309_934}
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
  View_2: { height: hp("191.9398907103825%") },
  View_376_4017: {
    width: wp("100.48309178743962%"),
    minWidth: wp("100.48309178743962%"),
    height: hp("50.54644808743169%"),
    minHeight: hp("50.54644808743169%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("132.37704918032787%"),
    backgroundColor: "rgba(243, 243, 243, 1)"
  },
  ImageBackground_376_4018: {
    width: wp("84.65475920893721%"),
    minWidth: wp("84.65475920893721%"),
    height: hp("53.41106477330943%"),
    minHeight: hp("53.41106477330943%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.33816425120773%"),
    top: hp("153.4153005464481%")
  },
  ImageBackground_376_4026: {
    width: wp("77.6881416062802%"),
    minWidth: wp("77.6881416062802%"),
    height: hp("41.50660780609631%"),
    minHeight: hp("41.50660780609631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-19.32367149758454%"),
    top: hp("157.24043715846994%")
  },
  View_366_2107: {
    width: wp("87.43961352657004%"),
    minWidth: wp("87.43961352657004%"),
    height: hp("26.639344262295083%"),
    minHeight: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("134.8360655737705%")
  },
  View_366_2109: {
    width: wp("86.71497584541062%"),
    minWidth: wp("86.71497584541062%"),
    height: hp("26.639344262295083%"),
    minHeight: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_366_2110: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.38164251207729%"),
    top: hp("21.17486338797815%"),
    backgroundColor: "rgba(220, 53, 69, 1)"
  },
  View_366_2111: {
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
  Text_366_2111: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2112: {
    width: wp("85.99033816425121%"),
    minWidth: wp("85.99033816425121%"),
    height: hp("20.081967213114755%"),
    minHeight: hp("20.081967213114755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4492753623188408%"),
    top: hp("5.327868852459005%")
  },
  View_366_2113: {
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
  View_366_2114: {
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
  View_366_2115: {
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
  Text_366_2115: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2116: {
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
  Text_366_2116: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2117: {
    width: wp("23.42995169082126%"),
    minWidth: wp("23.42995169082126%"),
    minHeight: hp("2.0105163907744195%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772937%"),
    top: hp("7.786885245901658%"),
    justifyContent: "flex-start"
  },
  Text_366_2117: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2118: {
    width: wp("112.15773135567633%"),
    minWidth: wp("112.15773135567633%"),
    height: hp("39.359166713360224%"),
    minHeight: hp("39.359166713360224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53.82512827388576%")
  },
  View_366_2119: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("38.66120218579235%"),
    minHeight: hp("38.66120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(243, 243, 243, 1)"
  },
  View_366_2120: {
    width: wp("38.88888888888889%"),
    minWidth: wp("38.88888888888889%"),
    height: hp("1.9125703905449538%"),
    minHeight: hp("1.9125703905449538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.309178743961354%"),
    top: hp("3.9617465493457544%")
  },
  View_366_2121: {
    width: wp("38.88888888888889%"),
    minWidth: wp("38.88888888888889%"),
    minHeight: hp("1.9125703905449538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_366_2121: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_2122: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.61352657004831%"),
    top: hp("3.8251282738857597%")
  },
  ImageBackground_366_2123: {
    width: wp("47.82608695652174%"),
    minWidth: wp("47.82608695652174%"),
    height: hp("0.000004169068049863388%"),
    minHeight: hp("0.000004169068049863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.10144927536232%"),
    top: hp("6.55736454197617%")
  },
  View_366_2124: {
    width: wp("90.57971014492753%"),
    minWidth: wp("90.57971014492753%"),
    minHeight: hp("3.0054665654083417%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("3.5519104837719766%"),
    justifyContent: "flex-start"
  },
  Text_366_2124: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_2125: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("25.27322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("103.14009661835748%")
  },
  ImageBackground_366_2129: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("23.77050014141478%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("108.29299705615942%")
  },
  ImageBackground_366_2138: {
    width: wp("58.342296950483096%"),
    minWidth: wp("58.342296950483096%"),
    height: hp("32.99683951289276%"),
    minHeight: hp("32.99683951289276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5921365489130435%"),
    top: hp("5.701058809874489%")
  },
  ImageBackground_366_2139: {
    width: wp("60.12983091787439%"),
    minWidth: wp("60.12983091787439%"),
    height: hp("34.00786352939293%"),
    minHeight: hp("34.00786352939293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6983695652173911%"),
    top: hp("5.1955217872161015%")
  },
  ImageBackground_366_2140: {
    width: wp("59.929682782306756%"),
    minWidth: wp("59.929682782306756%"),
    height: hp("33.89469417717939%"),
    minHeight: hp("33.89469417717939%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2077294685990339%"),
    top: hp("5.464472536180843%")
  },
  ImageBackground_366_2141: {
    width: wp("60.55819746376812%"),
    minWidth: wp("60.55819746376812%"),
    height: hp("34.25015725724684%"),
    minHeight: hp("34.25015725724684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4118546195652174%"),
    top: hp("4.741130891393439%")
  },
  View_366_2142: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.111111111111114%"),
    top: hp("14.207650273224054%"),
    backgroundColor: "rgba(245, 235, 205, 1)"
  },
  View_366_2143: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.111111111111114%"),
    top: hp("17.896174863387976%"),
    backgroundColor: "rgba(247, 227, 167, 1)"
  },
  View_366_2144: {
    width: wp("17.391304347826086%"),
    minWidth: wp("17.391304347826086%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666666%"),
    top: hp("13.79781420765027%"),
    justifyContent: "flex-start"
  },
  Text_366_2144: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2145: {
    width: wp("17.391304347826086%"),
    minWidth: wp("17.391304347826086%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666666%"),
    top: hp("17.486338797814206%"),
    justifyContent: "flex-start"
  },
  Text_366_2145: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2146: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.111111111111114%"),
    top: hp("21.448087431693985%"),
    backgroundColor: "rgba(250, 215, 111, 1)"
  },
  View_366_2147: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.111111111111114%"),
    top: hp("25.13661202185792%"),
    backgroundColor: "rgba(255, 193, 7, 1)"
  },
  View_366_2148: {
    width: wp("25.845410628019323%"),
    minWidth: wp("25.845410628019323%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666666%"),
    top: hp("21.038251366120214%"),
    justifyContent: "flex-start"
  },
  Text_366_2148: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2149: {
    width: wp("22.946859903381643%"),
    minWidth: wp("22.946859903381643%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666666%"),
    top: hp("24.72677595628415%"),
    justifyContent: "flex-start"
  },
  Text_366_2149: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2150: {
    width: wp("10.144927536231885%"),
    minWidth: wp("10.144927536231885%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.048309178743963%"),
    top: hp("30.737704918032783%"),
    justifyContent: "flex-start"
  },
  Text_366_2150: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2151: {
    width: wp("10.144927536231885%"),
    minWidth: wp("10.144927536231885%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.32367149758454%"),
    top: hp("12.158469945355186%"),
    justifyContent: "flex-start"
  },
  Text_366_2151: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2152: {
    width: wp("10.144927536231885%"),
    minWidth: wp("10.144927536231885%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.96135265700483%"),
    top: hp("21.857923497267755%"),
    justifyContent: "flex-start"
  },
  Text_366_2152: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2153: {
    width: wp("10.144927536231885%"),
    minWidth: wp("10.144927536231885%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.85507246376812%"),
    top: hp("14.754098360655739%"),
    justifyContent: "flex-start"
  },
  Text_366_2153: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_366_2154: {
    width: wp("94.92753623188406%"),
    minWidth: wp("94.92753623188406%"),
    height: hp("12.431693989071038%"),
    minHeight: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%"),
    top: hp("38.3879781420765%")
  },
  View_366_2155: {
    width: wp("90.57971014492753%"),
    minWidth: wp("90.57971014492753%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772946%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_366_2155: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2156: {
    width: wp("94.92753623188406%"),
    minWidth: wp("94.92753623188406%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.874316939890711%")
  },
  View_366_2157: {
    width: wp("94.92753623188406%"),
    minWidth: wp("94.92753623188406%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_366_2158: {
    width: wp("25.845410628019323%"),
    minWidth: wp("25.845410628019323%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(34, 194, 235, 1)"
  },
  View_366_2159: {
    width: wp("26.570048309178745%"),
    minWidth: wp("26.570048309178745%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.35748792270532%"),
    top: hp("0%"),
    backgroundColor: "rgba(40, 59, 70, 1)"
  },
  View_366_2160: {
    width: wp("20.77294685990338%"),
    minWidth: wp("20.77294685990338%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.053140096618357%"),
    top: hp("0%"),
    backgroundColor: "rgba(190, 31, 57, 1)"
  },
  View_366_2161: {
    width: wp("18.115942028985508%"),
    minWidth: wp("18.115942028985508%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.03381642512077%"),
    top: hp("0%"),
    backgroundColor: "rgba(241, 200, 37, 1)"
  },
  View_366_2162: {
    width: wp("22.946859903381643%"),
    minWidth: wp("22.946859903381643%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4492753623188404%"),
    top: hp("0.4098360655737707%")
  },
  View_366_2163: {
    width: wp("22.946859903381643%"),
    minWidth: wp("22.946859903381643%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.6885245901639365%"),
    justifyContent: "flex-start"
  },
  Text_366_2163: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2164: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835749%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_366_2164: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2165: {
    width: wp("25.60386473429952%"),
    minWidth: wp("25.60386473429952%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.84057971014492%"),
    top: hp("0.4098360655737707%")
  },
  View_366_2166: {
    width: wp("25.60386473429952%"),
    minWidth: wp("25.60386473429952%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.6885245901639365%"),
    justifyContent: "flex-start"
  },
  Text_366_2166: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2167: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.48792270531402%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_366_2167: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2168: {
    width: wp("20.28985507246377%"),
    minWidth: wp("20.28985507246377%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.294685990338163%"),
    top: hp("0.4098360655737707%")
  },
  View_366_2169: {
    width: wp("20.28985507246377%"),
    minWidth: wp("20.28985507246377%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.6885245901639365%"),
    justifyContent: "flex-start"
  },
  Text_366_2169: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2170: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.589371980676329%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_366_2170: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2171: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.51690821256038%"),
    top: hp("0.4098360655737707%")
  },
  View_366_2172: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.6885245901639365%"),
    justifyContent: "flex-start"
  },
  Text_366_2172: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2173: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1400966183574965%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_366_2173: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2174: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("182.92349726775956%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I366_2174_309_5: {
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
  View_I366_2174_309_31: {
    flexGrow: 1,
    width: wp("83.33333333333334%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("1.639344262295083%")
  },
  TouchableOpacity_I366_2174_309_27: {
    width: wp("7.729468599033816%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I366_2174_309_9: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I366_2174_309_23: {
    width: wp("7.729468599033816%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I366_2174_309_23: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I366_2174_309_28: {
    width: wp("9.420289855072465%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.913043478260864%")
  },
  ImageBackground_I366_2174_309_13: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594288%")
  },
  View_I366_2174_309_24: {
    width: wp("9.420289855072465%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I366_2174_309_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I366_2174_309_29: {
    width: wp("11.11111111111111%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.58454106280193%")
  },
  ImageBackground_I366_2174_309_21: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  View_I366_2174_309_25: {
    width: wp("11.11111111111111%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I366_2174_309_25: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I366_2174_309_30: {
    width: wp("11.11111111111111%"),
    height: hp("5.56794046704235%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22222222222223%")
  },
  View_I366_2174_309_22: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  ImageBackground_I366_2174_309_17: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I366_2174_309_26: {
    width: wp("11.11111111111111%"),
    top: hp("4.201820248463122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I366_2174_309_26: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I366_2174_309_82: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.57487922705314%"),
    top: hp("0.5464480874316848%")
  },
  ImageBackground_I366_2174_309_380: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.729468599033815%"),
    top: hp("0.5464480874316848%")
  },
  ImageBackground_I366_2174_309_459: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.3671497584541%"),
    top: hp("0.5464480874316848%")
  },
  ImageBackground_I366_2174_309_304: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.091787439613526%"),
    top: hp("0.5464480874316848%")
  },
  View_366_2196: {
    width: wp("107.24637681159422%"),
    minWidth: wp("107.24637681159422%"),
    height: hp("31.830601092896178%"),
    minHeight: hp("31.830601092896178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("96.58469945355192%")
  },
  View_366_2197: {
    width: wp("90.57971014492753%"),
    minWidth: wp("90.57971014492753%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_366_2198: {
    width: wp("90.57971014492753%"),
    minWidth: wp("90.57971014492753%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_366_2198: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_2202: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("28.142076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.69565217391305%")
  },
  TouchableOpacity_404_5503: {
    width: wp("107.24637681159422%"),
    minWidth: wp("107.24637681159422%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043701%")
  },
  ImageBackground_366_2199: {
    width: wp("67.14975845410628%"),
    minWidth: wp("67.14975845410628%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_366_2200: {
    width: wp("30.917874396135264%"),
    minWidth: wp("30.917874396135264%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.32850241545894%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_366_2201: {
    width: wp("67.14975845410628%"),
    minWidth: wp("67.14975845410628%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.125683060109296%"),
    backgroundColor: "rgba(52, 58, 64, 1)",
    opacity: 0.6600000262260437,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_366_2206: {
    width: wp("16.425120772946862%"),
    minWidth: wp("16.425120772946862%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.106280193236715%"),
    top: hp("20.62841530054645%"),
    justifyContent: "flex-start"
  },
  Text_366_2206: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2207: {
    width: wp("30.917874396135264%"),
    minWidth: wp("30.917874396135264%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.32850241545894%"),
    top: hp("19.125683060109296%"),
    backgroundColor: "rgba(52, 58, 64, 1)",
    opacity: 0.6600000262260437,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_366_2208: {
    width: wp("16.425120772946862%"),
    minWidth: wp("16.425120772946862%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.22705314009661%"),
    top: hp("20.62841530054645%"),
    justifyContent: "flex-start"
  },
  Text_366_2208: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5967: {
    width: wp("84.00230223429952%"),
    minWidth: wp("84.00230223429952%"),
    height: hp("11.538462821251708%"),
    minHeight: hp("11.538462821251708%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("164.20765027322403%")
  },
  View_404_5968: {
    width: wp("84.00230223429952%"),
    minWidth: wp("84.00230223429952%"),
    height: hp("11.26523877753586%"),
    minHeight: hp("11.26523877753586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158566%")
  },
  View_404_5969: {
    width: wp("84.00230223429952%"),
    minWidth: wp("84.00230223429952%"),
    height: hp("11.26523877753586%"),
    minHeight: hp("11.26523877753586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_404_5970: {
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
  Text_404_5970: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5971: {
    width: wp("42.010350618961354%"),
    minWidth: wp("42.010350618961354%"),
    minHeight: hp("1.9966333941683745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.991833673007235%"),
    top: hp("4.371584699453564%"),
    justifyContent: "flex-start"
  },
  Text_404_5971: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 9.692307472229004,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5972: {
    width: wp("40.95134642964976%"),
    minWidth: wp("40.95134642964976%"),
    minHeight: hp("2.7952934223446038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.991833673007235%"),
    top: hp("8.469945355191271%"),
    justifyContent: "flex-start"
  },
  Text_404_5972: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 9.692307472229004,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_404_5973: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("3.825136612021879%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.57971014492753%")
  },
  ImageBackground_404_5976: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("7.923497267759558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.57971014492753%")
  },
  ImageBackground_404_5979: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396121%")
  },
  ImageBackground_404_5982: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.628019323671499%")
  },
  ImageBackground_404_5985: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.77294685990338%")
  },
  ImageBackground_404_5989: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.57971014492753%")
  },
  View_404_5992: {
    width: wp("30.193236714975846%"),
    minWidth: wp("30.193236714975846%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.961352657004824%"),
    top: hp("0.6830601092896416%"),
    justifyContent: "flex-start"
  },
  Text_404_5992: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 9.692307472229004,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_2209: {
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
  ImageBackground_366_3370: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("37.15846994535519%"),
    minHeight: hp("37.15846994535519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_366_3335: {
    width: wp("74.60536496074879%"),
    minWidth: wp("74.60536496074879%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-12.183914553140095%"),
    top: hp("-17.349726775956285%")
  },
  ImageBackground_366_3341: {
    width: wp("77.6881416062802%"),
    minWidth: wp("77.6881416062802%"),
    height: hp("41.50661614423241%"),
    minHeight: hp("41.50661614423241%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.733469202898554%"),
    top: hp("0.8379159729337431%")
  },
  ImageBackground_366_3348: {
    width: wp("94.48513454861111%"),
    minWidth: wp("94.48513454861111%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.50156627415459%"),
    top: hp("2.8688524590163933%")
  },
  ImageBackground_366_3356: {
    width: wp("74.60536496074879%"),
    minWidth: wp("74.60536496074879%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-15.942028985507244%"),
    top: hp("3.278688524590164%")
  },
  View_366_3371: {
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
  View_366_3372: {
    width: wp("93.23671497584542%"),
    minWidth: wp("93.23671497584542%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772946%"),
    top: hp("6.557377049180328%")
  },
  View_366_2212: {
    width: wp("52.96436254528986%"),
    minWidth: wp("52.96436254528986%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24402268266908234%"),
    top: hp("7.377049180327868%"),
    justifyContent: "flex-start"
  },
  Text_366_2212: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_366_2250: {
    width: wp("38.563839824879224%"),
    minWidth: wp("38.563839824879224%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.535519125683063%")
  },
  View_366_2251: {
    width: wp("38.563839824879224%"),
    minWidth: wp("38.563839824879224%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_366_2252: {
    width: wp("33.68232469051932%"),
    minWidth: wp("33.68232469051932%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4406985960144922%"),
    top: hp("1.3661202185792334%"),
    justifyContent: "flex-start"
  },
  Text_366_2252: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2253: {
    width: wp("92.99269229317633%"),
    minWidth: wp("92.99269229317633%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24402268266908234%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_I366_2253_309_905: {
    flexGrow: 1,
    width: wp("5.857841749698068%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.40983606557376984%")
  },
  TouchableOpacity_I366_2253_309_907: {
    flexGrow: 1,
    width: wp("19.512733054045896%"),
    height: hp("2.7323602978649038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.810377038043477%"),
    top: hp("0.40983606557376984%")
  },
  ImageBackground_I366_2253_309_908: {
    width: wp("19.512733054045896%"),
    height: hp("2.7323602978649038%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I366_2253_309_920: {
    flexGrow: 1,
    width: wp("5.857841749698068%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.00214183272948%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I366_2253_309_920_309_916: {
    flexGrow: 1,
    width: wp("4.881515134359903%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.488163307669069%"),
    top: hp("0.27322404371584774%")
  },
  ImageBackground_I366_2253_309_920_309_917: {
    width: wp("4.881515134359903%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I366_2253_309_928: {
    flexGrow: 1,
    width: wp("5.857841749698068%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.56849618810386%"),
    top: hp("0%")
  },
  TouchableOpacity_I366_2253_309_934: {
    flexGrow: 1,
    width: wp("5.857841749698068%"),
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
