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
      <View style={styles.View_366_2388}>
        <View style={styles.View_366_2389}>
          <View style={styles.View_366_2390}>
            <Text style={styles.Text_366_2390}>Favourites</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fa0/e018/a6fca34a4eb8328f2c13bc7880fe0d58"
          }}
          style={styles.ImageBackground_366_2391}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1155/97a4/de0069d240d3678d7f1a2ff68566f6e6"
          }}
          style={styles.ImageBackground_366_2392}
        />
        <View style={styles.View_366_2393} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4931/89a4/59c165b51991d0b6d1e0d0c11e7006d7"
          }}
          style={styles.ImageBackground_366_2394}
        />
        <View style={styles.View_366_2398}>
          <Text style={styles.Text_366_2398}>Smile</Text>
        </View>
        <View style={styles.View_366_2399} />
        <View style={styles.View_366_2400}>
          <Text style={styles.Text_366_2400}>Hope</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9675/dc03/37c4e7f2625a53c16a85639c0778ba3b"
        }}
        style={styles.ImageBackground_366_2401}
      />
      <View style={styles.View_366_2451}>
        <View style={styles.View_366_2452} />
        <View style={styles.View_366_2453}>
          <View style={styles.View_366_2454} />
          <View style={styles.View_366_2455}>
            <Text style={styles.Text_366_2455}>Contact Us !!</Text>
          </View>
        </View>
        <View style={styles.View_366_2456}>
          <View style={styles.View_366_2457} />
          <View style={styles.View_366_2458} />
          <View style={styles.View_366_2459}>
            <Text style={styles.Text_366_2459}>Send</Text>
          </View>
          <View style={styles.View_366_2460}>
            <Text style={styles.Text_366_2460}>Email </Text>
          </View>
          <View style={styles.View_366_2461}>
            <Text style={styles.Text_366_2461}>Messege...</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_366_2462}>
        <View style={styles.View_366_2463} />
        <View style={styles.View_366_2464}>
          <View style={styles.View_366_2465}>
            <Text style={styles.Text_366_2465}>
              Aug, 2021: No Poverty (125)
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b553/c4c2/fa41734c8b0d39f64c5723e5b9e02cc1"
          }}
          style={styles.ImageBackground_366_2466}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c50c/4eb0/3da2ef37030c981da7a8b9d4cc29bfe1"
          }}
          style={styles.ImageBackground_366_2467}
        />
        <View style={styles.View_366_2468}>
          <Text style={styles.Text_366_2468}>Voting Statistics</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/635c/5783/496023e1e70e01deb394cdf024418978"
          }}
          style={styles.ImageBackground_366_2469}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04a3/f204/b904cda475b933cfcbe7021c0194f4e5"
          }}
          style={styles.ImageBackground_366_2473}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aedd/22c5/5cd7a1e47442b52c9010bbe5644cb685"
          }}
          style={styles.ImageBackground_366_2482}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6f8/0d39/ceadc15b34b620910b5d8df226ec7b7d"
          }}
          style={styles.ImageBackground_366_2483}
        />
        <View style={styles.View_366_2484} />
        <View style={styles.View_366_2485} />
        <View style={styles.View_366_2486}>
          <Text style={styles.Text_366_2486}>Smile</Text>
        </View>
        <View style={styles.View_366_2487}>
          <Text style={styles.Text_366_2487}>Unity</Text>
        </View>
        <View style={styles.View_366_2488}>
          <Text style={styles.Text_366_2488}>57%</Text>
        </View>
        <View style={styles.View_366_2489}>
          <Text style={styles.Text_366_2489}>43%</Text>
        </View>
      </View>
      <View style={styles.View_366_2490}>
        <View style={styles.View_366_2491}>
          <Text style={styles.Text_366_2491}>Voting History</Text>
        </View>
        <View style={styles.View_366_2492}>
          <View style={styles.View_366_2493}>
            <View style={styles.View_366_2494} />
            <View style={styles.View_366_2495} />
            <View style={styles.View_366_2496} />
            <View style={styles.View_366_2497} />
          </View>
          <View style={styles.View_366_2498}>
            <View style={styles.View_366_2499}>
              <Text style={styles.Text_366_2499}>Votes Potential</Text>
            </View>
            <View style={styles.View_366_2500}>
              <Text style={styles.Text_366_2500}>440</Text>
            </View>
          </View>
          <View style={styles.View_366_2501}>
            <View style={styles.View_366_2502}>
              <Text style={styles.Text_366_2502}>Votes Remaining</Text>
            </View>
            <View style={styles.View_366_2503}>
              <Text style={styles.Text_366_2503}>348</Text>
            </View>
          </View>
          <View style={styles.View_366_2504}>
            <View style={styles.View_366_2505}>
              <Text style={styles.Text_366_2505}>Earned Votes</Text>
            </View>
            <View style={styles.View_366_2506}>
              <Text style={styles.Text_366_2506}>461</Text>
            </View>
          </View>
          <View style={styles.View_366_2507}>
            <View style={styles.View_366_2508}>
              <Text style={styles.Text_366_2508}>Votes Made</Text>
            </View>
            <View style={styles.View_366_2509}>
              <Text style={styles.Text_366_2509}>92</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_366_2510} />
      <View style={styles.View_366_2511}>
        <View style={styles.View_366_2512} />
        <View style={styles.View_366_2513}>
          <View style={styles.View_366_2514}>
            <View style={styles.View_366_2515}>
              <View style={styles.View_366_2516} />
              <View style={styles.View_366_2517}>
                <Text style={styles.Text_366_2517}>First Name*</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_366_2518}>
            <View style={styles.View_366_2519}>
              <View style={styles.View_366_2520} />
              <View style={styles.View_366_2521}>
                <Text style={styles.Text_366_2521}>Last Name*</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_398_4909}>
            <View style={styles.View_398_4910}>
              <View style={styles.View_398_4911} />
              <View style={styles.View_398_4912}>
                <Text style={styles.Text_398_4912}>Location*</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_366_2530}>
            <View style={styles.View_366_2531} />
            <View style={styles.View_366_2532} />
            <View style={styles.View_366_2533}>
              <Text style={styles.Text_366_2533}>Cell Number*</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fefc/fb92/6fe215df1005a369f79ef75af1b9c838"
              }}
              style={styles.ImageBackground_366_2534}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fefc/fb92/6fe215df1005a369f79ef75af1b9c838"
              }}
              style={styles.ImageBackground_398_4913}
            />
            <View style={styles.View_366_2535}>
              <Text style={styles.Text_366_2535}>+1 (USA)</Text>
            </View>
            <View style={styles.View_366_2536}>
              <Text style={styles.Text_366_2536}>
                Please enter a valid Number
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_366_2537}>
          <Text style={styles.Text_366_2537}>Edit Profile</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_366_2538}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("366_2056"))
          }
        >
          <View style={styles.View_366_2539} />
          <View style={styles.View_366_2540}>
            <Text style={styles.Text_366_2540}>Save</Text>
          </View>
          <View style={styles.View_366_2541} />
          <View style={styles.View_366_2542}>
            <Text style={styles.Text_366_2542}>Cancel</Text>
          </View>
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5cc/023e/dcddc70c780412c773b36fc767341e62"
          }}
          style={styles.ImageBackground_398_4917}
        />
      </View>
      <View style={styles.View_366_2543}>
        <View style={styles.View_I366_2543_309_5} />
        <View style={styles.View_I366_2543_309_31}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I366_2543_309_27}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("84_296"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/976c/0ce9/9210d0604147826b21cd34337293bc7a"
              }}
              style={styles.ImageBackground_I366_2543_309_9}
            />
            <View style={styles.View_I366_2543_309_23}>
              <Text style={styles.Text_I366_2543_309_23}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I366_2543_309_28}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("395_4045"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/885e/bc12/997de7d2815db6dfc110ec854b91e9af"
              }}
              style={styles.ImageBackground_I366_2543_309_13}
            />
            <View style={styles.View_I366_2543_309_24}>
              <Text style={styles.Text_I366_2543_309_24}>Payment</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I366_2543_309_29}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("91_1327"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e02/16c0/beecfd4f830eb0967f9bc6b64c64324a"
              }}
              style={styles.ImageBackground_I366_2543_309_21}
            />
            <View style={styles.View_I366_2543_309_25}>
              <Text style={styles.Text_I366_2543_309_25}>Categories</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.View_I366_2543_309_30}>
            <View style={styles.View_I366_2543_309_22}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6557/66a8/3b7edc92dd873af83ddbb751e88f5920"
                }}
                style={styles.ImageBackground_I366_2543_309_17}
              />
            </View>
            <View style={styles.View_I366_2543_309_26}>
              <Text style={styles.Text_I366_2543_309_26}>Profile</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I366_2543_309_82}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I366_2543_309_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a6/168b/f07b1d4ab3c24a4549e185c706367dc7"
          }}
          style={styles.ImageBackground_I366_2543_309_459}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I366_2543_309_304}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bcc/3e68/c7f8902652555d6154515ff43124d60d"
        }}
        style={styles.ImageBackground_398_4914}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f88c/055f/1bb27ed24fcde709a758c9aecde85a23"
        }}
        style={styles.ImageBackground_398_4915}
      />
      <View style={styles.View_398_4916}>
        <Text style={styles.Text_398_4916}>General</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_398_4918}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("398_4919"))
        }
      >
        <Text style={styles.Text_398_4918}>Security</Text>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07a4/c76d/db01535ba069fb5065857918e3d1fb12"
        }}
        style={styles.ImageBackground_366_3393}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0d8/7dd6/530d4cf8826c37d9bb91eca7bbe42ee4"
        }}
        style={styles.ImageBackground_366_3394}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d64a/01ab/6eab8adb9f01b331fa467106198df05d"
        }}
        style={styles.ImageBackground_366_3395}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adcc/d23c/e9664a125a8e7e5f1116735e6d101d3e"
        }}
        style={styles.ImageBackground_366_3401}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8645/9ba9/780fc8c6431f513d262d45517b8936fb"
        }}
        style={styles.ImageBackground_366_3408}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d64a/01ab/6eab8adb9f01b331fa467106198df05d"
        }}
        style={styles.ImageBackground_366_3416}
      />
      <View style={styles.View_366_3422} />
      <View style={styles.View_366_3423}>
        <View style={styles.View_366_3424}>
          <Text style={styles.Text_366_3424}>Hello, Amanda !!</Text>
        </View>
        <View style={styles.View_366_3425}>
          <View style={styles.View_366_3426} />
          <View style={styles.View_366_3427}>
            <Text style={styles.Text_366_3427}>Edit</Text>
          </View>
        </View>
        <View style={styles.View_366_3428}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/351b/a363/c05d32e2bc69beaca145ba9477097ace"
            }}
            style={styles.ImageBackground_I366_3428_309_905}
          />
          <View style={styles.View_I366_3428_309_907}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5941/ff05/3edac74491b2df1452020b35c38a7db7"
              }}
              style={styles.ImageBackground_I366_3428_309_908}
            />
          </View>
          <View style={styles.View_I366_3428_309_920}>
            <View style={styles.View_I366_3428_309_920_309_916}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09cf/84fe/62b350b3fc309d6e7b062a2ed623c019"
                }}
                style={styles.ImageBackground_I366_3428_309_920_309_917}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13f3/e564/2658f2adf85f9bd65981cd9de1eb92ab"
            }}
            style={styles.ImageBackground_I366_3428_309_928}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d93/5921/18500cef42bfd4bb09341712035bbd12"
            }}
            style={styles.ImageBackground_I366_3428_309_934}
          />
        </View>
      </View>
      <View style={styles.View_366_2587} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("191.9398907103825%") },
  View_366_2388: {
    width: wp("107.24637681159422%"),
    minWidth: wp("107.24637681159422%"),
    height: hp("31.830601092896178%"),
    minHeight: hp("31.830601092896178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("96.31147540983606%")
  },
  View_366_2389: {
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
  View_366_2390: {
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
  Text_366_2390: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_2391: {
    width: wp("67.14975845410628%"),
    minWidth: wp("67.14975845410628%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.65027322404373%"),
    resizeMode: "cover"
  },
  ImageBackground_366_2392: {
    width: wp("30.917874396135264%"),
    minWidth: wp("30.917874396135264%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.32850241545894%"),
    top: hp("7.65027322404373%"),
    resizeMode: "cover"
  },
  View_366_2393: {
    width: wp("67.14975845410628%"),
    minWidth: wp("67.14975845410628%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.77595628415301%"),
    backgroundColor: "rgba(52, 58, 64, 1)",
    opacity: 0.6600000262260437,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_366_2394: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("28.142076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.69565217391305%")
  },
  View_366_2398: {
    width: wp("16.425120772946862%"),
    minWidth: wp("16.425120772946862%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.106280193236715%"),
    top: hp("28.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_366_2398: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2399: {
    width: wp("30.917874396135264%"),
    minWidth: wp("30.917874396135264%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.32850241545894%"),
    top: hp("26.77595628415301%"),
    backgroundColor: "rgba(52, 58, 64, 1)",
    opacity: 0.6600000262260437,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_366_2400: {
    width: wp("16.425120772946862%"),
    minWidth: wp("16.425120772946862%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.22705314009661%"),
    top: hp("28.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_366_2400: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_2401: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("52.04918032786885%"),
    minHeight: hp("52.04918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("131.9672131147541%"),
    resizeMode: "cover"
  },
  View_366_2451: {
    width: wp("100.48309178743962%"),
    minWidth: wp("100.48309178743962%"),
    height: hp("51.502732240437155%"),
    minHeight: hp("51.502732240437155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("131.9672131147541%")
  },
  View_366_2452: {
    width: wp("100.48309178743962%"),
    minWidth: wp("100.48309178743962%"),
    height: hp("51.502732240437155%"),
    minHeight: hp("51.502732240437155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(52, 58, 64, 1)",
    opacity: 0.6800000071525574
  },
  View_366_2453: {
    width: wp("86.71497584541062%"),
    minWidth: wp("86.71497584541062%"),
    height: hp("26.639344262295083%"),
    minHeight: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("3.005464480874309%")
  },
  View_366_2454: {
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
  View_366_2455: {
    width: wp("57.2463768115942%"),
    minWidth: wp("57.2463768115942%"),
    minHeight: hp("2.948765155396175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_366_2455: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2456: {
    width: wp("85.99033816425121%"),
    minWidth: wp("85.99033816425121%"),
    height: hp("20.081967213114755%"),
    minHeight: hp("20.081967213114755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("8.333333333333343%")
  },
  View_366_2457: {
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
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 0.5
  },
  View_366_2458: {
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
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 0.5
  },
  View_366_2459: {
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
  Text_366_2459: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2460: {
    width: wp("23.42995169082126%"),
    minWidth: wp("23.42995169082126%"),
    minHeight: hp("2.0105247289105193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772937%"),
    top: hp("1.5852130827356632%"),
    justifyContent: "flex-start"
  },
  Text_366_2460: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2461: {
    width: wp("23.42995169082126%"),
    minWidth: wp("23.42995169082126%"),
    minHeight: hp("2.0105247289105193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772937%"),
    top: hp("7.786885245901658%"),
    justifyContent: "flex-start"
  },
  Text_366_2461: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2462: {
    width: wp("112.15784929800725%"),
    minWidth: wp("112.15784929800725%"),
    height: hp("38.66120218579235%"),
    minHeight: hp("38.66120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53.825136612021865%")
  },
  View_366_2463: {
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
  View_366_2464: {
    width: wp("37.68115942028986%"),
    minWidth: wp("37.68115942028986%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.309178743961354%"),
    top: hp("3.961748633879779%")
  },
  View_366_2465: {
    width: wp("37.68115942028986%"),
    minWidth: wp("37.68115942028986%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_366_2465: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_2466: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.61352657004831%"),
    top: hp("3.8251366120218506%")
  },
  ImageBackground_366_2467: {
    width: wp("47.82608695652174%"),
    minWidth: wp("47.82608695652174%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.10144927536232%"),
    top: hp("6.5573770491803245%")
  },
  View_366_2468: {
    width: wp("90.57971014492753%"),
    minWidth: wp("90.57971014492753%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("3.551912568306001%"),
    justifyContent: "flex-start"
  },
  Text_366_2468: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_2469: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("25.273224043715842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("103.14009661835748%")
  },
  ImageBackground_366_2473: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("23.770491803278674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("108.29311499849035%")
  },
  ImageBackground_366_2482: {
    width: wp("52.95398362016909%"),
    minWidth: wp("52.95398362016909%"),
    height: hp("29.949367502348018%"),
    minHeight: hp("29.949367502348018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.286293214070048%"),
    top: hp("7.224778138874655%")
  },
  ImageBackground_366_2483: {
    width: wp("58.187556612318836%"),
    minWidth: wp("58.187556612318836%"),
    height: hp("32.90932243639003%"),
    minHeight: hp("32.90932243639003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6695067179951693%"),
    top: hp("5.744792333717548%")
  },
  View_366_2484: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.111111111111114%"),
    top: hp("19.398907103825138%"),
    backgroundColor: "rgba(220, 53, 69, 1)"
  },
  View_366_2485: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.111111111111114%"),
    top: hp("23.08743169398906%"),
    backgroundColor: "rgba(34, 194, 235, 1)"
  },
  View_366_2486: {
    width: wp("17.391304347826086%"),
    minWidth: wp("17.391304347826086%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666666%"),
    top: hp("18.989071038251353%"),
    justifyContent: "flex-start"
  },
  Text_366_2486: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2487: {
    width: wp("17.391304347826086%"),
    minWidth: wp("17.391304347826086%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666666%"),
    top: hp("22.67759562841529%"),
    justifyContent: "flex-start"
  },
  Text_366_2487: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2488: {
    width: wp("10.144927536231885%"),
    minWidth: wp("10.144927536231885%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.71497584541063%"),
    top: hp("29.644808743169392%"),
    justifyContent: "flex-start"
  },
  Text_366_2488: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2489: {
    width: wp("10.144927536231885%"),
    minWidth: wp("10.144927536231885%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.908212560386474%"),
    top: hp("12.431693989071036%"),
    justifyContent: "flex-start"
  },
  Text_366_2489: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2490: {
    width: wp("94.92753623188406%"),
    minWidth: wp("94.92753623188406%"),
    height: hp("12.431693989071038%"),
    minHeight: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%"),
    top: hp("37.15846994535519%")
  },
  View_366_2491: {
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
  Text_366_2491: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2492: {
    width: wp("94.92753623188406%"),
    minWidth: wp("94.92753623188406%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.874316939890704%")
  },
  View_366_2493: {
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
  View_366_2494: {
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
  View_366_2495: {
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
  View_366_2496: {
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
  View_366_2497: {
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
  View_366_2498: {
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
  View_366_2499: {
    width: wp("22.946859903381643%"),
    minWidth: wp("22.946859903381643%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.6885245901639436%"),
    justifyContent: "flex-start"
  },
  Text_366_2499: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2500: {
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
  Text_366_2500: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2501: {
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
  View_366_2502: {
    width: wp("25.60386473429952%"),
    minWidth: wp("25.60386473429952%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.6885245901639436%"),
    justifyContent: "flex-start"
  },
  Text_366_2502: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2503: {
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
  Text_366_2503: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2504: {
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
  View_366_2505: {
    width: wp("20.28985507246377%"),
    minWidth: wp("20.28985507246377%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.6885245901639436%"),
    justifyContent: "flex-start"
  },
  Text_366_2505: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2506: {
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
  Text_366_2506: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2507: {
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
  View_366_2508: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.6885245901639436%"),
    justifyContent: "flex-start"
  },
  Text_366_2508: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2509: {
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
  Text_366_2509: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2510: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("161.88524590163937%"),
    minHeight: hp("161.88524590163937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30.05464480874317%"),
    backgroundColor: "rgba(31, 33, 35, 1)",
    opacity: 0.6499999761581421
  },
  View_366_2511: {
    width: wp("85.74879227053141%"),
    minWidth: wp("85.74879227053141%"),
    height: hp("77.73224043715847%"),
    minHeight: hp("77.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("37.15846994535519%")
  },
  View_366_2512: {
    width: wp("85.74879227053141%"),
    minWidth: wp("85.74879227053141%"),
    height: hp("77.73224043715847%"),
    minHeight: hp("77.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_366_2513: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("29.098360655737704%"),
    minHeight: hp("29.098360655737704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.628019323671499%"),
    top: hp("20.218579234972673%")
  },
  View_366_2514: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_366_2515: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_366_2516: {
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
  View_366_2517: {
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
  Text_366_2517: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2518: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.1038251366120235%")
  },
  View_366_2519: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_366_2520: {
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
  View_366_2521: {
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
  Text_366_2521: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_4909: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.633879781420767%")
  },
  View_398_4910: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_398_4911: {
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
  View_398_4912: {
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
  Text_398_4912: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2530: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("12.929614124402322%"),
    minHeight: hp("12.929614124402322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.207650273224054%")
  },
  View_366_2531: {
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
  View_366_2532: {
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
  View_366_2533: {
    width: wp("20.531400966183575%"),
    minWidth: wp("20.531400966183575%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.87922705314009%"),
    top: hp("1.775956284152997%"),
    justifyContent: "flex-start"
  },
  Text_366_2533: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_2534: {
    width: wp("4.1062801932367154%"),
    minWidth: wp("4.1062801932367154%"),
    height: hp("1.5908163101946722%"),
    minHeight: hp("1.5908163101946722%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.932367149758452%"),
    top: hp("1.9125683060109253%")
  },
  ImageBackground_398_4913: {
    width: wp("4.1062801932367154%"),
    minWidth: wp("4.1062801932367154%"),
    height: hp("1.5908163101946722%"),
    minHeight: hp("1.5908163101946722%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.004830917874386%"),
    top: hp("11.338797814207638%")
  },
  View_366_2535: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714975%"),
    top: hp("1.775956284152997%"),
    justifyContent: "flex-start"
  },
  Text_366_2535: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2536: {
    width: wp("27.77777777777778%"),
    minWidth: wp("27.77777777777778%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.946859903381643%"),
    top: hp("5.874316939890704%"),
    justifyContent: "flex-start"
  },
  Text_366_2536: {
    color: "rgba(244, 42, 62, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2537: {
    width: wp("29.468599033816425%"),
    minWidth: wp("29.468599033816425%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.628019323671499%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_366_2537: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_366_2538: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.628019323671499%"),
    top: hp("56.693989071038246%")
  },
  View_366_2539: {
    width: wp("31.672587371678745%"),
    minWidth: wp("31.672587371678745%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.82016625150966%"),
    top: hp("0%"),
    backgroundColor: "rgba(220, 53, 69, 1)"
  },
  View_366_2540: {
    width: wp("18.590424026268117%"),
    minWidth: wp("18.590424026268117%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.93503736413043%"),
    top: hp("1.3661202185792405%"),
    justifyContent: "flex-start"
  },
  Text_366_2540: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2541: {
    width: wp("31.672587371678745%"),
    minWidth: wp("31.672587371678745%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(220, 53, 69, 1)",
    borderWidth: 1
  },
  View_366_2542: {
    width: wp("18.590424026268117%"),
    minWidth: wp("18.590424026268117%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.114753170289852%"),
    top: hp("1.3661202185792405%"),
    justifyContent: "flex-start"
  },
  Text_366_2542: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_398_4917: {
    width: wp("11.956521739130435%"),
    minWidth: wp("11.956521739130435%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.70048309178744%"),
    top: hp("13.934426229508198%")
  },
  View_366_2543: {
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
  View_I366_2543_309_5: {
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
  View_I366_2543_309_31: {
    flexGrow: 1,
    width: wp("83.33333333333334%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("1.639344262295083%")
  },
  TouchableOpacity_I366_2543_309_27: {
    width: wp("7.729468599033816%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I366_2543_309_9: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I366_2543_309_23: {
    width: wp("7.729468599033816%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I366_2543_309_23: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I366_2543_309_28: {
    width: wp("9.420289855072465%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.913043478260864%")
  },
  ImageBackground_I366_2543_309_13: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594288%")
  },
  View_I366_2543_309_24: {
    width: wp("9.420289855072465%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I366_2543_309_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I366_2543_309_29: {
    width: wp("11.11111111111111%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.58454106280193%")
  },
  ImageBackground_I366_2543_309_21: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  View_I366_2543_309_25: {
    width: wp("11.11111111111111%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I366_2543_309_25: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I366_2543_309_30: {
    width: wp("11.11111111111111%"),
    height: hp("5.56794046704235%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22222222222223%")
  },
  View_I366_2543_309_22: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  ImageBackground_I366_2543_309_17: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I366_2543_309_26: {
    width: wp("11.11111111111111%"),
    top: hp("4.201820248463122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I366_2543_309_26: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I366_2543_309_82: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.57487922705314%"),
    top: hp("0.5464480874316848%")
  },
  ImageBackground_I366_2543_309_380: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.729468599033815%"),
    top: hp("0.5464480874316848%")
  },
  ImageBackground_I366_2543_309_459: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.3671497584541%"),
    top: hp("0.5464480874316848%")
  },
  ImageBackground_I366_2543_309_304: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.091787439613526%"),
    top: hp("0.5464480874316848%")
  },
  ImageBackground_398_4914: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.75845410628019%"),
    top: hp("47.60928961748634%")
  },
  ImageBackground_398_4915: {
    width: wp("82.3671497584541%"),
    minWidth: wp("82.3671497584541%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("46.44808743169399%")
  },
  View_398_4916: {
    width: wp("19.082125603864732%"),
    minWidth: wp("19.082125603864732%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.84057971014493%"),
    top: hp("48.224043715846996%"),
    justifyContent: "flex-start"
  },
  Text_398_4916: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_398_4918: {
    width: wp("19.082125603864732%"),
    minWidth: wp("19.082125603864732%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.59420289855072%"),
    top: hp("48.224043715846996%"),
    justifyContent: "flex-start"
  },
  Text_398_4918: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_3393: {
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
  ImageBackground_366_3394: {
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
  ImageBackground_366_3395: {
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
  ImageBackground_366_3401: {
    width: wp("77.6881416062802%"),
    minWidth: wp("77.6881416062802%"),
    height: hp("41.50660780609631%"),
    minHeight: hp("41.50660780609631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.733469202898554%"),
    top: hp("0.8379159729337431%")
  },
  ImageBackground_366_3408: {
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
  ImageBackground_366_3416: {
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
  View_366_3422: {
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
  View_366_3423: {
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
  View_366_3424: {
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
  Text_366_3424: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_3425: {
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
  View_366_3426: {
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
  View_366_3427: {
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
  Text_366_3427: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_3428: {
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
  ImageBackground_I366_3428_309_905: {
    flexGrow: 1,
    width: wp("5.857841749698068%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.40983606557376984%")
  },
  View_I366_3428_309_907: {
    flexGrow: 1,
    width: wp("19.512733054045896%"),
    height: hp("2.732357171063866%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.810377038043477%"),
    top: hp("0.40983606557376984%")
  },
  ImageBackground_I366_3428_309_908: {
    width: wp("19.512733054045896%"),
    height: hp("2.732357171063866%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I366_3428_309_920: {
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
  View_I366_3428_309_920_309_916: {
    flexGrow: 1,
    width: wp("4.881515134359903%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.488163307669069%"),
    top: hp("0.27322404371584774%")
  },
  ImageBackground_I366_3428_309_920_309_917: {
    width: wp("4.881515134359903%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I366_3428_309_928: {
    flexGrow: 1,
    width: wp("5.857841749698068%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.56849618810386%"),
    top: hp("0%")
  },
  ImageBackground_I366_3428_309_934: {
    flexGrow: 1,
    width: wp("5.857841749698068%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.13485054347827%"),
    top: hp("0%")
  },
  View_366_2587: {
    width: wp("100.72463768115942%"),
    minWidth: wp("100.72463768115942%"),
    height: hp("37.56830601092896%"),
    minHeight: hp("37.56830601092896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594203%"),
    top: hp("-1.5027322404371584%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.14000000059604645
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
