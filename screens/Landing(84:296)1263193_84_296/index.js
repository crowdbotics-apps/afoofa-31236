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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/996d/5acf/0277cb0d4e2d34e846b2e4db897d2bb6"
        }}
        style={styles.ImageBackground_84_297}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e31/b176/4d768c4989374d658179e575279d214b"
        }}
        style={styles.ImageBackground_84_298}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8638/3126/d82e8c2a324db5315f2d8f8cc7e9acff"
        }}
        style={styles.ImageBackground_84_306}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8645/9ba9/780fc8c6431f513d262d45517b8936fb"
        }}
        style={styles.ImageBackground_84_312}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d64a/01ab/6eab8adb9f01b331fa467106198df05d"
        }}
        style={styles.ImageBackground_84_320}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adcc/d23c/e9664a125a8e7e5f1116735e6d101d3e"
        }}
        style={styles.ImageBackground_84_355}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6265/1d3f/d01949dc968999189310dd3de440d686"
        }}
        style={styles.ImageBackground_84_362}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d64a/01ab/6eab8adb9f01b331fa467106198df05d"
        }}
        style={styles.ImageBackground_84_370}
      />
      <View style={styles.View_91_1252}>
        <View style={styles.View_91_1201} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3c5/c55d/e9e4ff507182c9c3f618ccf68eb3dd28"
          }}
          style={styles.ImageBackground_91_1202}
        />
        <View style={styles.View_85_528}>
          <View style={styles.View_84_350}>
            <View style={styles.View_84_351} />
            <View style={styles.View_84_352} />
            <View style={styles.View_84_353}>
              <Text style={styles.Text_84_353}>Subscribe</Text>
            </View>
            <View style={styles.View_84_354}>
              <Text style={styles.Text_84_354}>Subscribe To Us !!</Text>
            </View>
          </View>
          <View style={styles.View_84_384}>
            <Text style={styles.Text_84_384}>Email </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4112/6a3d/a830417a3985f058d801472fb7dd5525"
          }}
          style={styles.ImageBackground_91_1210}
        />
      </View>
      <View style={styles.View_85_469}>
        <Text style={styles.Text_85_469}>
          Sept, 2021 Industry, Innovation and Infrastructure
        </Text>
      </View>
      <View style={styles.View_91_1245}>
        <View style={styles.View_84_332}>
          <View style={styles.View_84_337}>
            <Text style={styles.Text_84_337}>This Month’s Top</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_97_2690}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("91_1327"))
          }
        >
          <View style={styles.View_84_333} />
          <View style={styles.View_84_386}>
            <Text style={styles.Text_84_386}>Explore</Text>
          </View>
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/635c/5783/496023e1e70e01deb394cdf024418978"
          }}
          style={styles.ImageBackground_86_1084}
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_372_3857}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("91_1327"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc64/6a1b/d6641db1ca70b60b067556287db2b2ae"
            }}
            style={styles.ImageBackground_86_1080}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2040/bca5/42cb8e74c36f46af2881058baeb5dfa7"
            }}
            style={styles.ImageBackground_86_1082}
          />
          <View style={styles.View_86_1083} />
          <View style={styles.View_86_1101}>
            <Text style={styles.Text_86_1101}>Education</Text>
          </View>
          <View style={styles.View_86_1117} />
          <View style={styles.View_86_1118}>
            <Text style={styles.Text_86_1118}>Nutrition</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_91_1247}>
        <View style={styles.View_85_521}>
          <View style={styles.View_85_527}>
            <Text style={styles.Text_85_527}>Favourites</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/635c/5783/496023e1e70e01deb394cdf024418978"
          }}
          style={styles.ImageBackground_376_4033}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/635c/5783/496023e1e70e01deb394cdf024418978"
          }}
          style={styles.ImageBackground_86_1156}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04a3/f204/b904cda475b933cfcbe7021c0194f4e5"
          }}
          style={styles.ImageBackground_86_1160}
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_404_5501}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("404_5120"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6094/13d0/634ddfa02a9daaeb702d8d30beadbc7b"
            }}
            style={styles.ImageBackground_86_1122}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/435d/a150/7c7e2faa45b0d8244c9c0abbe1c739f4"
            }}
            style={styles.ImageBackground_86_1124}
          />
          <View style={styles.View_86_1125} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4931/89a4/59c165b51991d0b6d1e0d0c11e7006d7"
            }}
            style={styles.ImageBackground_86_1126}
          />
          <View style={styles.View_86_1139}>
            <Text style={styles.Text_86_1139}>Smile</Text>
          </View>
          <View style={styles.View_86_1155} />
          <View style={styles.View_86_1169}>
            <Text style={styles.Text_86_1169}>Hope</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_325_1335}>
        <View style={styles.View_I325_1335_309_5} />
        <View style={styles.View_I325_1335_309_31}>
          <View style={styles.View_I325_1335_309_27}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8733/bb2e/4c64ff960e06c797bac7b92bc21fb56d"
              }}
              style={styles.ImageBackground_I325_1335_309_9}
            />
            <View style={styles.View_I325_1335_309_23}>
              <Text style={styles.Text_I325_1335_309_23}>Home</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I325_1335_309_28}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("395_4045"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/885e/bc12/997de7d2815db6dfc110ec854b91e9af"
              }}
              style={styles.ImageBackground_I325_1335_309_13}
            />
            <View style={styles.View_I325_1335_309_24}>
              <Text style={styles.Text_I325_1335_309_24}>Payment</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I325_1335_309_29}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("91_1327"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e02/16c0/beecfd4f830eb0967f9bc6b64c64324a"
              }}
              style={styles.ImageBackground_I325_1335_309_21}
            />
            <View style={styles.View_I325_1335_309_25}>
              <Text style={styles.Text_I325_1335_309_25}>Categories</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I325_1335_309_30}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("366_2056"))
            }
          >
            <View style={styles.View_I325_1335_309_22}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e78a/f2e8/65d02d5776406a7cb63ff6df1140761a"
                }}
                style={styles.ImageBackground_I325_1335_309_17}
              />
            </View>
            <View style={styles.View_I325_1335_309_26}>
              <Text style={styles.Text_I325_1335_309_26}>Profile</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a6/168b/f07b1d4ab3c24a4549e185c706367dc7"
          }}
          style={styles.ImageBackground_I325_1335_309_82}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I325_1335_309_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I325_1335_309_459}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I325_1335_309_304}
        />
      </View>
      <View style={styles.View_325_1445}>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e3f/deee/44d222dda2d057444ed53cc817bf9c36"
          }}
          style={styles.TouchableOpacity_I325_1445_309_905}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("370_3782"))
          }
        />
        <View style={styles.View_I325_1445_309_907}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e687/1aeb/51fe8bba2fec823fe6046aa2fd76e005"
            }}
            style={styles.ImageBackground_I325_1445_309_908}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I325_1445_309_920}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("404_5300"))
          }
        >
          <View style={styles.View_I325_1445_309_920_309_916}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ec0/6a88/c027f71c44876580f3e2e99a2c61b1cd"
              }}
              style={styles.ImageBackground_I325_1445_309_920_309_917}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8afc/7ef8/e70dbca284eefa64ba40a3bd3ae2d50d"
          }}
          style={styles.TouchableOpacity_I325_1445_309_928}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("404_5120"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8efb/9320/dbc31fd36bf87365f8a113c713f1ed95"
          }}
          style={styles.TouchableOpacity_I325_1445_309_934}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("366_2726"))
          }
        />
      </View>
      <View style={styles.View_366_737}>
        <View style={styles.View_366_738} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22d3/a8df/90937159c922eb0444808b92b029769e"
          }}
          style={styles.ImageBackground_366_739}
        />
        <View style={styles.View_366_747}>
          <Text style={styles.Text_366_747}>
            Industry, Innovation and Infrastructure
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29be/f103/dd8025711e2d3db0dcf1d7b1d1655ef8"
          }}
          style={styles.ImageBackground_835_2011}
        />
        <View style={styles.View_366_751}>
          <View style={styles.View_366_752}>
            <View style={styles.View_366_753}>
              <View style={styles.View_366_754}>
                <View style={styles.View_366_755}>
                  <Text style={styles.Text_366_755}>Goal</Text>
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96c1/8f6d/c21c9e93b7978be08b15169914d0a09b"
              }}
              style={styles.ImageBackground_366_756}
            />
          </View>
          <View style={styles.View_366_757}>
            <View style={styles.View_366_758}>
              <View style={styles.View_366_759}>
                <Text style={styles.Text_366_759}>Target</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f680/0904/a5bb0aa7d8f0623445fa994e18687579"
              }}
              style={styles.ImageBackground_366_760}
            />
          </View>
          <View style={styles.View_366_764}>
            <View style={styles.View_366_765}>
              <View style={styles.View_366_766}>
                <Text style={styles.Text_366_766}>Policy </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/daa2/a2b0/56b75bda71407007c77df34011d593a6"
              }}
              style={styles.ImageBackground_366_767}
            />
          </View>
          <View style={styles.View_366_770}>
            <View style={styles.View_366_771}>
              <View style={styles.View_366_772}>
                <Text style={styles.Text_366_772}>Coversations</Text>
              </View>
            </View>
            <View style={styles.View_366_773}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1be8/3b50/e234ee4207e64678a78fa9d2f00e598c"
                }}
                style={styles.ImageBackground_366_774}
              />
            </View>
          </View>
          <View style={styles.View_366_777}>
            <View style={styles.View_366_778}>
              <View style={styles.View_366_779}>
                <Text style={styles.Text_366_779}>Resources</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f89/342a/8cecc56b801830aea68a684724411459"
              }}
              style={styles.ImageBackground_366_780}
            />
          </View>
        </View>
        <View style={styles.View_372_3866}>
          <View style={styles.View_366_750} />
          <View style={styles.View_366_783}>
            <Text style={styles.Text_366_783}>View Details</Text>
          </View>
        </View>
        <View source={{ uri: "null" }} style={styles.View_366_784} />
      </View>
      <View style={styles.View_370_3820}>
        <View style={styles.View_370_3821}>
          <View style={styles.View_370_3822}>
            <Text style={styles.Text_370_3822}>Follow Us !!</Text>
          </View>
          <View style={styles.View_370_3823}>
            <Text style={styles.Text_370_3823}>info@afoofagives.org</Text>
          </View>
          <View style={styles.View_370_3824}>
            <Text style={styles.Text_370_3824}>vote.afoofagives.org</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae09/3411/34f0987f496f908f2f02a2abbecbd390"
          }}
          style={styles.ImageBackground_370_3825}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/717c/d0d3/b13d0ae408ca217c482f287eace1dfcf"
          }}
          style={styles.ImageBackground_370_3828}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8cf/1197/1fb475e634612c66bc57c5e1de58ae58"
          }}
          style={styles.ImageBackground_370_3831}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/141a/756b/7bf8b38c7d281bda63c070b8ccf39406"
          }}
          style={styles.ImageBackground_370_3834}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9886/8668/60de46f396463b405ca98d9bfcd5a815"
          }}
          style={styles.ImageBackground_370_3837}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("191.9398907103825%") },
  ImageBackground_84_297: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("33.855240201689504%"),
    minHeight: hp("33.855240201689504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_84_298: {
    width: wp("94.48513454861111%"),
    minWidth: wp("94.48513454861111%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.3478260869565215%"),
    top: hp("-6.010926877214609%")
  },
  ImageBackground_84_306: {
    width: wp("74.60536496074879%"),
    minWidth: wp("74.60536496074879%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.975420818236714%"),
    top: hp("0.07067612611530909%")
  },
  ImageBackground_84_312: {
    width: wp("94.48513454861111%"),
    minWidth: wp("94.48513454861111%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.81545799365942%"),
    top: hp("-18.442622950819672%")
  },
  ImageBackground_84_320: {
    width: wp("74.60536496074879%"),
    minWidth: wp("74.60536496074879%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10.628019323671497%"),
    top: hp("-18.0327868852459%")
  },
  ImageBackground_84_355: {
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
  ImageBackground_84_362: {
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
  ImageBackground_84_370: {
    width: wp("74.60536496074879%"),
    minWidth: wp("74.60536496074879%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-14.386133756038646%"),
    top: hp("2.5956284153005464%")
  },
  View_91_1252: {
    width: wp("126.11243206521738%"),
    minWidth: wp("126.11243206521738%"),
    height: hp("53.41106477330943%"),
    minHeight: hp("53.41106477330943%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("142.89617486338798%")
  },
  View_91_1201: {
    width: wp("100.48309178743962%"),
    minWidth: wp("100.48309178743962%"),
    height: hp("36.20218579234973%"),
    minHeight: hp("36.20218579234973%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.4644808743169335%"),
    backgroundColor: "rgba(243, 243, 243, 1)"
  },
  ImageBackground_91_1202: {
    width: wp("84.65475920893721%"),
    minWidth: wp("84.65475920893721%"),
    height: hp("53.41106477330943%"),
    minHeight: hp("53.41106477330943%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.405797101449274%"),
    top: hp("0%")
  },
  View_85_528: {
    width: wp("89.85507246376811%"),
    minWidth: wp("89.85507246376811%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("8.469945355191243%")
  },
  View_84_350: {
    width: wp("89.85507246376811%"),
    minWidth: wp("89.85507246376811%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_84_351: {
    width: wp("61.111111111111114%"),
    minWidth: wp("61.111111111111114%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.4644808743169335%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(52, 58, 64, 1)",
    borderWidth: 0.5
  },
  View_84_352: {
    width: wp("26.32850241545894%"),
    minWidth: wp("26.32850241545894%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.52657004830917%"),
    top: hp("5.4644808743169335%"),
    backgroundColor: "rgba(220, 53, 69, 1)"
  },
  View_84_353: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666666%"),
    top: hp("6.830601092896188%"),
    justifyContent: "flex-start"
  },
  Text_84_353: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_84_354: {
    width: wp("57.2463768115942%"),
    minWidth: wp("57.2463768115942%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6908212560386477%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_84_354: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_84_384: {
    width: wp("23.42995169082126%"),
    minWidth: wp("23.42995169082126%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772937%"),
    top: hp("7.103825136612016%"),
    justifyContent: "flex-start"
  },
  Text_84_384: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_91_1210: {
    width: wp("77.6881416062802%"),
    minWidth: wp("77.6881416062802%"),
    height: hp("41.50660780609631%"),
    minHeight: hp("41.50660780609631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.424172516606276%"),
    top: hp("9.171249306267072%")
  },
  View_85_469: {
    width: wp("92.9951690821256%"),
    minWidth: wp("92.9951690821256%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("12.158469945355192%"),
    justifyContent: "flex-start"
  },
  Text_85_469: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_1245: {
    width: wp("107.72946859903381%"),
    minWidth: wp("107.72946859903381%"),
    height: hp("38.52459016393443%"),
    minHeight: hp("38.52459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("38.3879781420765%")
  },
  View_84_332: {
    width: wp("47.58454106280193%"),
    minWidth: wp("47.58454106280193%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_84_337: {
    width: wp("47.58454106280193%"),
    minWidth: wp("47.58454106280193%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_84_337: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_97_2690: {
    width: wp("35.26570048309179%"),
    minWidth: wp("35.26570048309179%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.31400966183575%"),
    top: hp("33.06010928961749%")
  },
  View_84_333: {
    width: wp("35.26570048309179%"),
    minWidth: wp("35.26570048309179%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(220, 53, 69, 1)"
  },
  View_84_386: {
    width: wp("22.946859903381643%"),
    minWidth: wp("22.946859903381643%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995169%"),
    top: hp("1.2295081967213122%"),
    justifyContent: "flex-start"
  },
  Text_84_386: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_86_1084: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("26.639344262295076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.35265700483092%")
  },
  TouchableOpacity_372_3857: {
    width: wp("106.7632850241546%"),
    minWidth: wp("106.7632850241546%"),
    height: hp("22.814207650273225%"),
    minHeight: hp("22.814207650273225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9661835748792269%"),
    top: hp("7.513661202185794%")
  },
  ImageBackground_86_1080: {
    width: wp("67.8743961352657%"),
    minWidth: wp("67.8743961352657%"),
    height: hp("22.814207650273225%"),
    minHeight: hp("22.814207650273225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_86_1082: {
    width: wp("30.917874396135264%"),
    minWidth: wp("30.917874396135264%"),
    height: hp("22.814207650273225%"),
    minHeight: hp("22.814207650273225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.84541062801932%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_86_1083: {
    width: wp("67.8743961352657%"),
    minWidth: wp("67.8743961352657%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.759562841530062%"),
    backgroundColor: "rgba(52, 58, 64, 1)",
    opacity: 0.6600000262260437,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_86_1101: {
    width: wp("16.425120772946862%"),
    minWidth: wp("16.425120772946862%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169085%"),
    top: hp("19.26229508196721%"),
    justifyContent: "flex-start"
  },
  Text_86_1101: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_86_1117: {
    width: wp("30.917874396135264%"),
    minWidth: wp("30.917874396135264%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.84541062801932%"),
    top: hp("17.759562841530062%"),
    backgroundColor: "rgba(52, 58, 64, 1)",
    opacity: 0.6600000262260437,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_86_1118: {
    width: wp("16.425120772946862%"),
    minWidth: wp("16.425120772946862%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.71014492753623%"),
    top: hp("19.26229508196721%"),
    justifyContent: "flex-start"
  },
  Text_86_1118: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_1247: {
    width: wp("107.24637681159422%"),
    minWidth: wp("107.24637681159422%"),
    height: hp("84.69945355191257%"),
    minHeight: hp("84.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("65.1639344262295%")
  },
  View_85_521: {
    width: wp("90.57971014492753%"),
    minWidth: wp("90.57971014492753%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("47.13114754098362%")
  },
  View_85_527: {
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
  Text_85_527: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_376_4033: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.90338164251209%")
  },
  ImageBackground_86_1156: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("82.5136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97.34299516908212%")
  },
  ImageBackground_86_1160: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("81.01092896174865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("102.496013549215%")
  },
  TouchableOpacity_404_5501: {
    width: wp("107.24637681159422%"),
    minWidth: wp("107.24637681159422%"),
    height: hp("22.814207650273225%"),
    minHeight: hp("22.814207650273225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54.781420765027335%")
  },
  ImageBackground_86_1122: {
    width: wp("67.8743961352657%"),
    minWidth: wp("67.8743961352657%"),
    height: hp("22.814207650273225%"),
    minHeight: hp("22.814207650273225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_86_1124: {
    width: wp("30.917874396135264%"),
    minWidth: wp("30.917874396135264%"),
    height: hp("22.814207650273225%"),
    minHeight: hp("22.814207650273225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.32850241545894%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_86_1125: {
    width: wp("67.8743961352657%"),
    minWidth: wp("67.8743961352657%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.75956284153004%"),
    backgroundColor: "rgba(52, 58, 64, 1)",
    opacity: 0.6600000262260437,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_86_1126: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("19.125683060109296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.66183574879227%")
  },
  View_86_1139: {
    width: wp("16.425120772946862%"),
    minWidth: wp("16.425120772946862%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169085%"),
    top: hp("19.262295081967196%"),
    justifyContent: "flex-start"
  },
  Text_86_1139: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_86_1155: {
    width: wp("30.917874396135264%"),
    minWidth: wp("30.917874396135264%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.32850241545894%"),
    top: hp("17.75956284153004%"),
    backgroundColor: "rgba(52, 58, 64, 1)",
    opacity: 0.6600000262260437,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_86_1169: {
    width: wp("16.425120772946862%"),
    minWidth: wp("16.425120772946862%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.77777777777779%"),
    top: hp("19.262295081967196%"),
    justifyContent: "flex-start"
  },
  Text_86_1169: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_325_1335: {
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
  View_I325_1335_309_5: {
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
  View_I325_1335_309_31: {
    flexGrow: 1,
    width: wp("83.33333333333334%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("1.639344262295083%")
  },
  View_I325_1335_309_27: {
    width: wp("7.729468599033816%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I325_1335_309_9: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I325_1335_309_23: {
    width: wp("7.729468599033816%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I325_1335_309_23: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I325_1335_309_28: {
    width: wp("9.420289855072465%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.913043478260864%")
  },
  ImageBackground_I325_1335_309_13: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594288%")
  },
  View_I325_1335_309_24: {
    width: wp("9.420289855072465%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I325_1335_309_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I325_1335_309_29: {
    width: wp("11.11111111111111%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.58454106280193%")
  },
  ImageBackground_I325_1335_309_21: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  View_I325_1335_309_25: {
    width: wp("11.11111111111111%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I325_1335_309_25: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I325_1335_309_30: {
    width: wp("11.11111111111111%"),
    height: hp("5.56794046704235%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22222222222223%")
  },
  View_I325_1335_309_22: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  ImageBackground_I325_1335_309_17: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I325_1335_309_26: {
    width: wp("11.11111111111111%"),
    top: hp("4.201820248463122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I325_1335_309_26: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I325_1335_309_82: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.57487922705314%"),
    top: hp("0.5464480874316848%")
  },
  ImageBackground_I325_1335_309_380: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.729468599033815%"),
    top: hp("0.5464480874316848%")
  },
  ImageBackground_I325_1335_309_459: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.3671497584541%"),
    top: hp("0.5464480874316848%")
  },
  ImageBackground_I325_1335_309_304: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.091787439613526%"),
    top: hp("0.5464480874316848%")
  },
  View_325_1445: {
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
  TouchableOpacity_I325_1445_309_905: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  View_I325_1445_309_907: {
    flexGrow: 1,
    width: wp("19.31046195652174%"),
    height: hp("2.7323602978649038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033817%"),
    top: hp("0.4098360655737707%")
  },
  ImageBackground_I325_1445_309_908: {
    width: wp("19.31046195652174%"),
    height: hp("2.7323602978649038%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I325_1445_309_920: {
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
  View_I325_1445_309_920_309_916: {
    flexGrow: 1,
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%"),
    top: hp("0.27322404371584685%")
  },
  ImageBackground_I325_1445_309_920_309_917: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I325_1445_309_928: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.743961352657%"),
    top: hp("0%")
  },
  TouchableOpacity_I325_1445_309_934: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.23188405797102%"),
    top: hp("0%")
  },
  View_366_737: {
    width: wp("121.4975845410628%"),
    minWidth: wp("121.4975845410628%"),
    height: hp("39.90339268752135%"),
    minHeight: hp("39.90339268752135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-20.77294685990338%"),
    top: hp("74.59017227256233%")
  },
  View_366_738: {
    width: wp("101.20772946859904%"),
    minWidth: wp("101.20772946859904%"),
    height: hp("30.46448087431694%"),
    minHeight: hp("30.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.28985507246377%"),
    top: hp("4.371576361317452%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  ImageBackground_366_739: {
    width: wp("62.2360450634058%"),
    minWidth: wp("62.2360450634058%"),
    height: hp("39.90339268752135%"),
    minHeight: hp("39.90339268752135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_366_747: {
    width: wp("75.1207729468599%"),
    minWidth: wp("75.1207729468599%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.961234714673914%"),
    top: hp("8.196712973339316%"),
    justifyContent: "flex-start"
  },
  Text_366_747: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_835_2011: {
    width: wp("16.183574879227052%"),
    minWidth: wp("16.183574879227052%"),
    height: hp("9.153005464480875%"),
    minHeight: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.137789666364736%"),
    top: hp("7.6016368761740125%")
  },
  View_366_751: {
    width: wp("89.92182782306763%"),
    minWidth: wp("89.92182782306763%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.65469787892512%"),
    top: hp("18.25737458109205%")
  },
  View_366_752: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737565%")
  },
  View_366_753: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("2.4415730127219946%"),
    minHeight: hp("2.4415730127219946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.662252123890028%")
  },
  View_366_754: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("2.4415730127219946%"),
    minHeight: hp("2.4415730127219946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_366_755: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    minHeight: hp("2.4415730127219946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_366_755: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 11.297872543334961,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_756: {
    width: wp("6.280665006038648%"),
    height: hp("3.551845863217213%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6908212560386477%")
  },
  View_366_757: {
    width: wp("12.22637379227053%"),
    minWidth: wp("12.22637379227053%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.285024154589372%"),
    top: hp("0%")
  },
  View_366_758: {
    width: wp("12.22637379227053%"),
    minWidth: wp("12.22637379227053%"),
    height: hp("2.4415730127219946%"),
    minHeight: hp("2.4415730127219946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.072088189463784%")
  },
  View_366_759: {
    width: wp("12.22637379227053%"),
    minWidth: wp("12.22637379227053%"),
    minHeight: hp("2.4415730127219946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_366_759: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 11.297872543334961,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_760: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1739130434782616%")
  },
  View_366_764: {
    width: wp("10.926059593900966%"),
    minWidth: wp("10.926059593900966%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.134586352657006%"),
    top: hp("0%")
  },
  View_366_765: {
    width: wp("10.926059593900966%"),
    minWidth: wp("10.926059593900966%"),
    height: hp("2.4415730127219946%"),
    minHeight: hp("2.4415730127219946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.072088189463784%")
  },
  View_366_766: {
    width: wp("10.926059593900966%"),
    minWidth: wp("10.926059593900966%"),
    minHeight: hp("2.4415730127219946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_366_766: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 11.297872543334961,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_767: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  View_366_770: {
    width: wp("23.887332050120776%"),
    minWidth: wp("23.887332050120776%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.68383435235507%"),
    top: hp("0%")
  },
  View_366_771: {
    width: wp("23.887332050120776%"),
    minWidth: wp("23.887332050120776%"),
    height: hp("2.4415730127219946%"),
    minHeight: hp("2.4415730127219946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.072088189463784%")
  },
  View_366_772: {
    width: wp("23.887332050120776%"),
    minWidth: wp("23.887332050120776%"),
    minHeight: hp("2.4415730127219946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_366_772: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 11.297872543334961,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_773: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.073860205314006%"),
    top: hp("0%")
  },
  ImageBackground_366_774: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_366_777: {
    width: wp("18.727473014794686%"),
    minWidth: wp("18.727473014794686%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.19435480827295%"),
    top: hp("0%")
  },
  View_366_778: {
    width: wp("18.727473014794686%"),
    minWidth: wp("18.727473014794686%"),
    height: hp("2.4415730127219946%"),
    minHeight: hp("2.4415730127219946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.072088189463784%")
  },
  View_366_779: {
    width: wp("18.727473014794686%"),
    minWidth: wp("18.727473014794686%"),
    minHeight: hp("2.4415730127219946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_366_779: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 11.297872543334961,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_780: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555557%")
  },
  View_372_3866: {
    width: wp("94.20289855072464%"),
    minWidth: wp("94.20289855072464%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.480784835446862%"),
    top: hp("27.820216111146692%")
  },
  View_366_750: {
    width: wp("94.20289855072464%"),
    minWidth: wp("94.20289855072464%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(220, 53, 69, 1)"
  },
  View_366_783: {
    width: wp("30.917874396135264%"),
    minWidth: wp("30.917874396135264%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.64251207729469%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_366_783: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.297872543334961,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_784: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("14.368601314357079%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.685476109601449%")
  },
  View_370_3820: {
    width: wp("57.2463768115942%"),
    minWidth: wp("57.2463768115942%"),
    height: hp("16.120218579234972%"),
    minHeight: hp("16.120218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("164.4808743169399%")
  },
  View_370_3821: {
    width: wp("57.2463768115942%"),
    minWidth: wp("57.2463768115942%"),
    height: hp("16.046659542563184%"),
    minHeight: hp("16.046659542563184%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_370_3822: {
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
  Text_370_3822: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_3823: {
    width: wp("42.010350618961354%"),
    minWidth: wp("42.010350618961354%"),
    minHeight: hp("1.9966333941683745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1400966183574868%"),
    top: hp("9.289617486338784%"),
    justifyContent: "flex-start"
  },
  Text_370_3823: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 9.692307472229004,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_3824: {
    width: wp("40.95134642964976%"),
    minWidth: wp("40.95134642964976%"),
    minHeight: hp("2.7952934223446038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1400966183574868%"),
    top: hp("13.251366120218592%"),
    justifyContent: "flex-start"
  },
  Text_370_3824: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 9.692307472229004,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_370_3825: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("8.6065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980695%")
  },
  ImageBackground_370_3828: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("12.841530054644807%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980695%")
  },
  ImageBackground_370_3831: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396139%")
  },
  ImageBackground_370_3834: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.628019323671499%")
  },
  ImageBackground_370_3837: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.77294685990338%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
