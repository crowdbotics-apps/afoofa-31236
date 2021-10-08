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
      <View style={styles.View_398_4920}>
        <View style={styles.View_398_4921}>
          <View style={styles.View_398_4922}>
            <Text style={styles.Text_398_4922}>Favourites</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fa0/e018/a6fca34a4eb8328f2c13bc7880fe0d58"
          }}
          style={styles.ImageBackground_398_4923}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1155/97a4/de0069d240d3678d7f1a2ff68566f6e6"
          }}
          style={styles.ImageBackground_398_4924}
        />
        <View style={styles.View_398_4925} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4931/89a4/59c165b51991d0b6d1e0d0c11e7006d7"
          }}
          style={styles.ImageBackground_398_4926}
        />
        <View style={styles.View_398_4930}>
          <Text style={styles.Text_398_4930}>Smile</Text>
        </View>
        <View style={styles.View_398_4931} />
        <View style={styles.View_398_4932}>
          <Text style={styles.Text_398_4932}>Hope</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9675/dc03/37c4e7f2625a53c16a85639c0778ba3b"
        }}
        style={styles.ImageBackground_398_4933}
      />
      <View style={styles.View_398_4934}>
        <View style={styles.View_398_4935} />
        <View style={styles.View_398_4936}>
          <View style={styles.View_398_4937} />
          <View style={styles.View_398_4938}>
            <Text style={styles.Text_398_4938}>Contact Us !!</Text>
          </View>
        </View>
        <View style={styles.View_398_4939}>
          <View style={styles.View_398_4940} />
          <View style={styles.View_398_4941} />
          <View style={styles.View_398_4942}>
            <Text style={styles.Text_398_4942}>Send</Text>
          </View>
          <View style={styles.View_398_4943}>
            <Text style={styles.Text_398_4943}>Email </Text>
          </View>
          <View style={styles.View_398_4944}>
            <Text style={styles.Text_398_4944}>Messege...</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_398_4945}>
        <View style={styles.View_398_4946} />
        <View style={styles.View_398_4947}>
          <View style={styles.View_398_4948}>
            <Text style={styles.Text_398_4948}>
              Aug, 2021: No Poverty (125)
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b553/c4c2/fa41734c8b0d39f64c5723e5b9e02cc1"
          }}
          style={styles.ImageBackground_398_4949}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c50c/4eb0/3da2ef37030c981da7a8b9d4cc29bfe1"
          }}
          style={styles.ImageBackground_398_4950}
        />
        <View style={styles.View_398_4951}>
          <Text style={styles.Text_398_4951}>Voting Statistics</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/635c/5783/496023e1e70e01deb394cdf024418978"
          }}
          style={styles.ImageBackground_398_4952}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04a3/f204/b904cda475b933cfcbe7021c0194f4e5"
          }}
          style={styles.ImageBackground_398_4956}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55f6/d898/6d8ded062f2061f067a33ecb67e5b0a6"
          }}
          style={styles.ImageBackground_398_4965}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6f8/0d39/ceadc15b34b620910b5d8df226ec7b7d"
          }}
          style={styles.ImageBackground_398_4966}
        />
        <View style={styles.View_398_4967} />
        <View style={styles.View_398_4968} />
        <View style={styles.View_398_4969}>
          <Text style={styles.Text_398_4969}>Smile</Text>
        </View>
        <View style={styles.View_398_4970}>
          <Text style={styles.Text_398_4970}>Unity</Text>
        </View>
        <View style={styles.View_398_4971}>
          <Text style={styles.Text_398_4971}>57%</Text>
        </View>
        <View style={styles.View_398_4972}>
          <Text style={styles.Text_398_4972}>43%</Text>
        </View>
      </View>
      <View style={styles.View_398_4973}>
        <View style={styles.View_398_4974}>
          <Text style={styles.Text_398_4974}>Voting History</Text>
        </View>
        <View style={styles.View_398_4975}>
          <View style={styles.View_398_4976}>
            <View style={styles.View_398_4977} />
            <View style={styles.View_398_4978} />
            <View style={styles.View_398_4979} />
            <View style={styles.View_398_4980} />
          </View>
          <View style={styles.View_398_4981}>
            <View style={styles.View_398_4982}>
              <Text style={styles.Text_398_4982}>Votes Potential</Text>
            </View>
            <View style={styles.View_398_4983}>
              <Text style={styles.Text_398_4983}>440</Text>
            </View>
          </View>
          <View style={styles.View_398_4984}>
            <View style={styles.View_398_4985}>
              <Text style={styles.Text_398_4985}>Votes Remaining</Text>
            </View>
            <View style={styles.View_398_4986}>
              <Text style={styles.Text_398_4986}>348</Text>
            </View>
          </View>
          <View style={styles.View_398_4987}>
            <View style={styles.View_398_4988}>
              <Text style={styles.Text_398_4988}>Earned Votes</Text>
            </View>
            <View style={styles.View_398_4989}>
              <Text style={styles.Text_398_4989}>461</Text>
            </View>
          </View>
          <View style={styles.View_398_4990}>
            <View style={styles.View_398_4991}>
              <Text style={styles.Text_398_4991}>Votes Made</Text>
            </View>
            <View style={styles.View_398_4992}>
              <Text style={styles.Text_398_4992}>92</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_398_4993} />
      <View style={styles.View_398_4994}>
        <View style={styles.View_398_4995} />
        <View style={styles.View_398_5017}>
          <Text style={styles.Text_398_5017}>Edit Profile</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_398_5018}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("366_2056"))
          }
        >
          <View style={styles.View_398_5019} />
          <View style={styles.View_398_5020}>
            <Text style={styles.Text_398_5020}>Save</Text>
          </View>
          <View style={styles.View_398_5021} />
          <View style={styles.View_398_5022}>
            <Text style={styles.Text_398_5022}>Cancel</Text>
          </View>
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7059/c02b/c79dcbd5853fb61e5c5c3d6e6d7abfdc"
          }}
          style={styles.ImageBackground_398_5023}
        />
      </View>
      <View style={styles.View_398_5024}>
        <View style={styles.View_I398_5024_309_5} />
        <View style={styles.View_I398_5024_309_31}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I398_5024_309_27}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("84_296"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/976c/0ce9/9210d0604147826b21cd34337293bc7a"
              }}
              style={styles.ImageBackground_I398_5024_309_9}
            />
            <View style={styles.View_I398_5024_309_23}>
              <Text style={styles.Text_I398_5024_309_23}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I398_5024_309_28}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("395_4045"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/885e/bc12/997de7d2815db6dfc110ec854b91e9af"
              }}
              style={styles.ImageBackground_I398_5024_309_13}
            />
            <View style={styles.View_I398_5024_309_24}>
              <Text style={styles.Text_I398_5024_309_24}>Payment</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I398_5024_309_29}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("91_1327"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e02/16c0/beecfd4f830eb0967f9bc6b64c64324a"
              }}
              style={styles.ImageBackground_I398_5024_309_21}
            />
            <View style={styles.View_I398_5024_309_25}>
              <Text style={styles.Text_I398_5024_309_25}>Categories</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.View_I398_5024_309_30}>
            <View style={styles.View_I398_5024_309_22}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6557/66a8/3b7edc92dd873af83ddbb751e88f5920"
                }}
                style={styles.ImageBackground_I398_5024_309_17}
              />
            </View>
            <View style={styles.View_I398_5024_309_26}>
              <Text style={styles.Text_I398_5024_309_26}>Profile</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I398_5024_309_82}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I398_5024_309_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a6/168b/f07b1d4ab3c24a4549e185c706367dc7"
          }}
          style={styles.ImageBackground_I398_5024_309_459}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I398_5024_309_304}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bcc/3e68/c7f8902652555d6154515ff43124d60d"
        }}
        style={styles.ImageBackground_398_5025}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f88c/055f/1bb27ed24fcde709a758c9aecde85a23"
        }}
        style={styles.ImageBackground_398_5026}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_398_5027}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("366_2387"))
        }
      >
        <Text style={styles.Text_398_5027}>General</Text>
      </TouchableOpacity>
      <View style={styles.View_398_5028}>
        <Text style={styles.Text_398_5028}>Security</Text>
      </View>
      <View style={styles.View_366_2522}>
        <View style={styles.View_366_2523} />
        <View style={styles.View_366_2524}>
          <Text style={styles.Text_366_2524}>Set Password</Text>
        </View>
        <View style={styles.View_366_2525}>
          <Text style={styles.Text_366_2525}>
            Password must consist of atleat one upper case, one lower case, one
            numerin and one special case character.
          </Text>
        </View>
      </View>
      <View style={styles.View_366_2526}>
        <View style={styles.View_366_2527} />
        <View style={styles.View_366_2528}>
          <Text style={styles.Text_366_2528}>Confirm Password</Text>
        </View>
        <View style={styles.View_366_2529}>
          <Text style={styles.Text_366_2529}>The password didn’t match</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07a4/c76d/db01535ba069fb5065857918e3d1fb12"
        }}
        style={styles.ImageBackground_398_5029}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0d8/7dd6/530d4cf8826c37d9bb91eca7bbe42ee4"
        }}
        style={styles.ImageBackground_398_5030}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d64a/01ab/6eab8adb9f01b331fa467106198df05d"
        }}
        style={styles.ImageBackground_398_5031}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adcc/d23c/e9664a125a8e7e5f1116735e6d101d3e"
        }}
        style={styles.ImageBackground_398_5037}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a321/b71d/afd0098df65c959e199b188d9917a422"
        }}
        style={styles.ImageBackground_398_5044}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d64a/01ab/6eab8adb9f01b331fa467106198df05d"
        }}
        style={styles.ImageBackground_398_5052}
      />
      <View style={styles.View_398_5058} />
      <View style={styles.View_398_5059}>
        <View style={styles.View_398_5060}>
          <Text style={styles.Text_398_5060}>Hello, Amanda !!</Text>
        </View>
        <View style={styles.View_398_5061}>
          <View style={styles.View_398_5062} />
          <View style={styles.View_398_5063}>
            <Text style={styles.Text_398_5063}>Edit</Text>
          </View>
        </View>
        <View style={styles.View_398_5064}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/351b/a363/c05d32e2bc69beaca145ba9477097ace"
            }}
            style={styles.ImageBackground_I398_5064_309_905}
          />
          <View style={styles.View_I398_5064_309_907}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac4d/f701/d8e215628440af123bd5d521862558af"
              }}
              style={styles.ImageBackground_I398_5064_309_908}
            />
          </View>
          <View style={styles.View_I398_5064_309_920}>
            <View style={styles.View_I398_5064_309_920_309_916}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09cf/84fe/62b350b3fc309d6e7b062a2ed623c019"
                }}
                style={styles.ImageBackground_I398_5064_309_920_309_917}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13f3/e564/2658f2adf85f9bd65981cd9de1eb92ab"
            }}
            style={styles.ImageBackground_I398_5064_309_928}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d93/5921/18500cef42bfd4bb09341712035bbd12"
            }}
            style={styles.ImageBackground_I398_5064_309_934}
          />
        </View>
      </View>
      <View style={styles.View_398_5065} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("191.9398907103825%") },
  View_398_4920: {
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
  View_398_4921: {
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
  View_398_4922: {
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
  Text_398_4922: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_398_4923: {
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
  ImageBackground_398_4924: {
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
  View_398_4925: {
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
  ImageBackground_398_4926: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("28.142076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.69565217391305%")
  },
  View_398_4930: {
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
  Text_398_4930: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_4931: {
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
  View_398_4932: {
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
  Text_398_4932: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_398_4933: {
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
  View_398_4934: {
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
  View_398_4935: {
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
  View_398_4936: {
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
  View_398_4937: {
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
  View_398_4938: {
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
  Text_398_4938: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_4939: {
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
  View_398_4940: {
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
  View_398_4941: {
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
  View_398_4942: {
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
  Text_398_4942: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_4943: {
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
  Text_398_4943: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_4944: {
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
  Text_398_4944: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_4945: {
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
  View_398_4946: {
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
  View_398_4947: {
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
  View_398_4948: {
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
  Text_398_4948: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_398_4949: {
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
  ImageBackground_398_4950: {
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
  View_398_4951: {
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
  Text_398_4951: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_398_4952: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("25.273224043715842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("103.14009661835748%")
  },
  ImageBackground_398_4956: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("23.770491803278674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("108.29311499849035%")
  },
  ImageBackground_398_4965: {
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
  ImageBackground_398_4966: {
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
  View_398_4967: {
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
  View_398_4968: {
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
  View_398_4969: {
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
  Text_398_4969: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_4970: {
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
  Text_398_4970: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_4971: {
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
  Text_398_4971: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_4972: {
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
  Text_398_4972: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_4973: {
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
  View_398_4974: {
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
  Text_398_4974: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_4975: {
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
  View_398_4976: {
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
  View_398_4977: {
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
  View_398_4978: {
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
  View_398_4979: {
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
  View_398_4980: {
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
  View_398_4981: {
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
  View_398_4982: {
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
  Text_398_4982: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_4983: {
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
  Text_398_4983: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_4984: {
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
  View_398_4985: {
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
  Text_398_4985: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_4986: {
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
  Text_398_4986: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_4987: {
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
  View_398_4988: {
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
  Text_398_4988: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_4989: {
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
  Text_398_4989: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_4990: {
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
  View_398_4991: {
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
  Text_398_4991: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_4992: {
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
  Text_398_4992: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_4993: {
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
  View_398_4994: {
    width: wp("85.74879227053141%"),
    minWidth: wp("85.74879227053141%"),
    height: hp("62.158469945355186%"),
    minHeight: hp("62.158469945355186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("37.15846994535519%")
  },
  View_398_4995: {
    width: wp("85.74879227053141%"),
    minWidth: wp("85.74879227053141%"),
    height: hp("62.158469945355186%"),
    minHeight: hp("62.158469945355186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_398_5017: {
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
  Text_398_5017: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_398_5018: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.628019323671499%"),
    top: hp("47.950819672131146%")
  },
  View_398_5019: {
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
  View_398_5020: {
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
  Text_398_5020: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_5021: {
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
  View_398_5022: {
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
  Text_398_5022: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_398_5023: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.971014492753625%"),
    top: hp("13.934426229508198%")
  },
  View_398_5024: {
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
  View_I398_5024_309_5: {
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
  View_I398_5024_309_31: {
    flexGrow: 1,
    width: wp("83.33333333333334%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("1.639344262295083%")
  },
  TouchableOpacity_I398_5024_309_27: {
    width: wp("7.729468599033816%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I398_5024_309_9: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I398_5024_309_23: {
    width: wp("7.729468599033816%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I398_5024_309_23: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I398_5024_309_28: {
    width: wp("9.420289855072465%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.913043478260864%")
  },
  ImageBackground_I398_5024_309_13: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594288%")
  },
  View_I398_5024_309_24: {
    width: wp("9.420289855072465%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I398_5024_309_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I398_5024_309_29: {
    width: wp("11.11111111111111%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.58454106280193%")
  },
  ImageBackground_I398_5024_309_21: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  View_I398_5024_309_25: {
    width: wp("11.11111111111111%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I398_5024_309_25: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_5024_309_30: {
    width: wp("11.11111111111111%"),
    height: hp("5.56794046704235%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22222222222223%")
  },
  View_I398_5024_309_22: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  ImageBackground_I398_5024_309_17: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I398_5024_309_26: {
    width: wp("11.11111111111111%"),
    top: hp("4.201820248463122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I398_5024_309_26: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I398_5024_309_82: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.57487922705314%"),
    top: hp("0.5464480874316848%")
  },
  ImageBackground_I398_5024_309_380: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.729468599033815%"),
    top: hp("0.5464480874316848%")
  },
  ImageBackground_I398_5024_309_459: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.3671497584541%"),
    top: hp("0.5464480874316848%")
  },
  ImageBackground_I398_5024_309_304: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.091787439613526%"),
    top: hp("0.5464480874316848%")
  },
  ImageBackground_398_5025: {
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
  ImageBackground_398_5026: {
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
  TouchableOpacity_398_5027: {
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
  Text_398_5027: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_5028: {
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
  Text_398_5028: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2522: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.632850241545896%"),
    top: hp("59.56284153005464%")
  },
  View_366_2523: {
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
  View_366_2524: {
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
  Text_366_2524: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2525: {
    width: wp("63.76811594202898%"),
    minWidth: wp("63.76811594202898%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594182%"),
    top: hp("5.8743169398907185%"),
    justifyContent: "flex-start"
  },
  Text_366_2525: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 6,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2526: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.632850241545896%"),
    top: hp("71.17486338797814%")
  },
  View_366_2527: {
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
  View_366_2528: {
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
  Text_366_2528: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2529: {
    width: wp("27.536231884057973%"),
    minWidth: wp("27.536231884057973%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9661835748792242%"),
    top: hp("6.147540983606561%"),
    justifyContent: "flex-start"
  },
  Text_366_2529: {
    color: "rgba(244, 42, 62, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_398_5029: {
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
  ImageBackground_398_5030: {
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
  ImageBackground_398_5031: {
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
  ImageBackground_398_5037: {
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
  ImageBackground_398_5044: {
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
  ImageBackground_398_5052: {
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
  View_398_5058: {
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
  View_398_5059: {
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
  View_398_5060: {
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
  Text_398_5060: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_5061: {
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
  View_398_5062: {
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
  View_398_5063: {
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
  Text_398_5063: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_5064: {
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
  ImageBackground_I398_5064_309_905: {
    flexGrow: 1,
    width: wp("5.857841749698068%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.40983606557376984%")
  },
  View_I398_5064_309_907: {
    flexGrow: 1,
    width: wp("19.512733054045896%"),
    height: hp("2.732357171063866%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.810377038043477%"),
    top: hp("0.40983606557376984%")
  },
  ImageBackground_I398_5064_309_908: {
    width: wp("19.512733054045896%"),
    height: hp("2.732357171063866%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I398_5064_309_920: {
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
  View_I398_5064_309_920_309_916: {
    flexGrow: 1,
    width: wp("4.881515134359903%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.488163307669069%"),
    top: hp("0.27322404371584774%")
  },
  ImageBackground_I398_5064_309_920_309_917: {
    width: wp("4.881515134359903%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I398_5064_309_928: {
    flexGrow: 1,
    width: wp("5.857841749698068%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.56849618810386%"),
    top: hp("0%")
  },
  ImageBackground_I398_5064_309_934: {
    flexGrow: 1,
    width: wp("5.857841749698068%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.13485054347827%"),
    top: hp("0%")
  },
  View_398_5065: {
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
