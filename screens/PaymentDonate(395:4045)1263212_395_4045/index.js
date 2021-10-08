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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dacf/d829/bea1d9504dbea9f80578d35367c83d2a"
        }}
        style={styles.ImageBackground_395_4232}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7936/4f3b/2cafd1404410ae2796c69a7a005afefb"
        }}
        style={styles.ImageBackground_395_4240}
      />
      <View style={styles.View_395_4046} />
      <View style={styles.View_395_4051}>
        <Text style={styles.Text_395_4051}>#gdhd847595jnfh</Text>
      </View>
      <View style={styles.View_395_4052}>
        <Text style={styles.Text_395_4052}>06:53:20 GMT</Text>
      </View>
      <View style={styles.View_395_4114}>
        <View style={styles.View_I395_4114_309_5} />
        <View style={styles.View_I395_4114_309_31}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I395_4114_309_27}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("84_296"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/976c/0ce9/9210d0604147826b21cd34337293bc7a"
              }}
              style={styles.ImageBackground_I395_4114_309_9}
            />
            <View style={styles.View_I395_4114_309_23}>
              <Text style={styles.Text_I395_4114_309_23}>Home</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.View_I395_4114_309_28}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c081/5bf7/2b549586063c1cb7450f9cd24fca23c3"
              }}
              style={styles.ImageBackground_I395_4114_309_13}
            />
            <View style={styles.View_I395_4114_309_24}>
              <Text style={styles.Text_I395_4114_309_24}>Payment</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I395_4114_309_29}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("91_1327"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e02/16c0/beecfd4f830eb0967f9bc6b64c64324a"
              }}
              style={styles.ImageBackground_I395_4114_309_21}
            />
            <View style={styles.View_I395_4114_309_25}>
              <Text style={styles.Text_I395_4114_309_25}>Categories</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I395_4114_309_30}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("366_2056"))
            }
          >
            <View style={styles.View_I395_4114_309_22}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e78a/f2e8/65d02d5776406a7cb63ff6df1140761a"
                }}
                style={styles.ImageBackground_I395_4114_309_17}
              />
            </View>
            <View style={styles.View_I395_4114_309_26}>
              <Text style={styles.Text_I395_4114_309_26}>Profile</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I395_4114_309_82}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I395_4114_309_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I395_4114_309_459}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a6/168b/f07b1d4ab3c24a4549e185c706367dc7"
          }}
          style={styles.ImageBackground_I395_4114_309_304}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/608b/d282/3f52315d6d4316e45a84752225f2632f"
        }}
        style={styles.ImageBackground_395_4115}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7eed/e5e9/02698dee1c5073986e54d17e7c62c827"
        }}
        style={styles.ImageBackground_395_4121}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f3/3001/129bc25006c4803820f2c8a587193e34"
        }}
        style={styles.ImageBackground_395_4268}
      />
      <View style={styles.View_395_4135}>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e3f/deee/44d222dda2d057444ed53cc817bf9c36"
          }}
          style={styles.TouchableOpacity_I395_4135_309_905}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("370_3782"))
          }
        />
        <View style={styles.View_I395_4135_309_907}>
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e687/1aeb/51fe8bba2fec823fe6046aa2fd76e005"
            }}
            style={styles.TouchableOpacity_I395_4135_309_908}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("84_296"))
            }
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I395_4135_309_920}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("404_5300"))
          }
        >
          <View style={styles.View_I395_4135_309_920_309_916}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ec0/6a88/c027f71c44876580f3e2e99a2c61b1cd"
              }}
              style={styles.ImageBackground_I395_4135_309_920_309_917}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8afc/7ef8/e70dbca284eefa64ba40a3bd3ae2d50d"
          }}
          style={styles.TouchableOpacity_I395_4135_309_928}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("404_5120"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8efb/9320/dbc31fd36bf87365f8a113c713f1ed95"
          }}
          style={styles.TouchableOpacity_I395_4135_309_934}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("366_2726"))
          }
        />
      </View>
      <View style={styles.View_395_4192} />
      <View style={styles.View_395_4199}>
        <Text style={styles.Text_395_4199}>Make Payment</Text>
      </View>
      <View style={styles.View_395_4194}>
        <Text style={styles.Text_395_4194}>
          For each dollar paid you will earn 1 vote per day. Votes can be used
          as they are earned or accumulated and used together at a later date(s)
          of your choosing. Votes paid for and earned are available for use as
          long as you retain your account. If you wish to cancel, any remaining
          funds will be donated to the AFOOFA organization for dispersement to
          charities at their discretion.
        </Text>
      </View>
      <View style={styles.View_395_4204}>
        <Text style={styles.Text_395_4204}>
          Thank you for your donation! Please use the form below complete your
          payment information
        </Text>
      </View>
      <View style={styles.View_395_4200}>
        <View style={styles.View_395_4201}>
          <View style={styles.View_395_4202} />
          <View style={styles.View_395_4203}>
            <Text style={styles.Text_395_4203}>$ 0</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_395_4207}>
        <View style={styles.View_395_4205} />
        <View style={styles.View_395_4206}>
          <Text style={styles.Text_395_4206}>Proceed</Text>
        </View>
      </View>
      <View style={styles.View_395_4209}>
        <Text style={styles.Text_395_4209}>
          Please click the button and follow the instructions provided to
          complete your donation
        </Text>
      </View>
      <View style={styles.View_395_4210} />
      <View style={styles.View_395_4211} />
      <View style={styles.View_395_4212} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09f6/02c9/bd45b7f0c548d97e3a9e1b0b04881113"
        }}
        style={styles.ImageBackground_395_4277}
      />
      <View style={styles.View_395_4278}>
        <Text style={styles.Text_395_4278}>Donate</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_395_4279}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("395_4283"))
        }
      >
        <Text style={styles.Text_395_4279}>Transactions</Text>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1353/5548/bd6489abf2ed96fcf9c96c16f30a21e2"
        }}
        style={styles.ImageBackground_395_4280}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ee1/aab2/38aa9215083851ea9e40dd4ed4d13509"
        }}
        style={styles.ImageBackground_395_4415}
      />
      <View style={styles.View_395_4231}>
        <View style={styles.View_395_4216}>
          <Text style={styles.Text_395_4216}>$ 50</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de5d/d08a/6b204e28049a04d68a2b6b3a5f8620b6"
          }}
          style={styles.ImageBackground_395_4222}
        />
      </View>
      <View style={styles.View_395_4230}>
        <View style={styles.View_395_4217}>
          <Text style={styles.Text_395_4217}>$ 100</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de5d/d08a/6b204e28049a04d68a2b6b3a5f8620b6"
          }}
          style={styles.ImageBackground_395_4223}
        />
      </View>
      <View style={styles.View_395_4229}>
        <View style={styles.View_395_4218}>
          <Text style={styles.Text_395_4218}>$ 500</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de5d/d08a/6b204e28049a04d68a2b6b3a5f8620b6"
          }}
          style={styles.ImageBackground_395_4226}
        />
      </View>
      <View style={styles.View_404_5941}>
        <View style={styles.View_404_5942}>
          <View style={styles.View_404_5943}>
            <View style={styles.View_404_5944}>
              <Text style={styles.Text_404_5944}>Follow Us !!</Text>
            </View>
            <View style={styles.View_404_5945}>
              <Text style={styles.Text_404_5945}>info@afoofagives.org</Text>
            </View>
            <View style={styles.View_404_5946}>
              <Text style={styles.Text_404_5946}>vote.afoofagives.org</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae09/3411/34f0987f496f908f2f02a2abbecbd390"
            }}
            style={styles.ImageBackground_404_5947}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/717c/d0d3/b13d0ae408ca217c482f287eace1dfcf"
            }}
            style={styles.ImageBackground_404_5950}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8cf/1197/1fb475e634612c66bc57c5e1de58ae58"
            }}
            style={styles.ImageBackground_404_5953}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/141a/756b/7bf8b38c7d281bda63c070b8ccf39406"
            }}
            style={styles.ImageBackground_404_5956}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9886/8668/60de46f396463b405ca98d9bfcd5a815"
            }}
            style={styles.ImageBackground_404_5959}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/891f/9d9f/3fdc7965b61e6b4c96249d416d6fe1cd"
          }}
          style={styles.ImageBackground_404_5963}
        />
        <View style={styles.View_404_5966}>
          <Text style={styles.Text_404_5966}>1234 - 5678 - 910</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  ImageBackground_395_4232: {
    width: wp("84.65475920893721%"),
    minWidth: wp("84.65475920893721%"),
    height: hp("53.41107311144553%"),
    minHeight: hp("53.41107311144553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.99516908212561%"),
    top: hp("83.46994535519126%")
  },
  ImageBackground_395_4240: {
    width: wp("77.6881416062802%"),
    minWidth: wp("77.6881416062802%"),
    height: hp("41.50661614423241%"),
    minHeight: hp("41.50661614423241%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-17.14975845410628%"),
    top: hp("88.3879781420765%")
  },
  View_395_4046: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("18.30601092896175%"),
    minHeight: hp("18.30601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(52, 58, 64, 1)"
  },
  View_395_4051: {
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
  Text_395_4051: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4052: {
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
  Text_395_4052: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4114: {
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
  View_I395_4114_309_5: {
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
  View_I395_4114_309_31: {
    flexGrow: 1,
    width: wp("83.33333333333334%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("1.639344262295083%")
  },
  TouchableOpacity_I395_4114_309_27: {
    width: wp("7.729468599033816%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I395_4114_309_9: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I395_4114_309_23: {
    width: wp("7.729468599033816%"),
    top: hp("4.0983606557377215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I395_4114_309_23: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I395_4114_309_28: {
    width: wp("9.420289855072465%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.913043478260864%")
  },
  ImageBackground_I395_4114_309_13: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594288%")
  },
  View_I395_4114_309_24: {
    width: wp("9.420289855072465%"),
    top: hp("4.0983606557377215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I395_4114_309_24: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I395_4114_309_29: {
    width: wp("11.11111111111111%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.58454106280193%")
  },
  ImageBackground_I395_4114_309_21: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  View_I395_4114_309_25: {
    width: wp("11.11111111111111%"),
    top: hp("4.0983606557377215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I395_4114_309_25: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I395_4114_309_30: {
    width: wp("11.11111111111111%"),
    height: hp("5.56794880517845%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22222222222223%")
  },
  View_I395_4114_309_22: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  ImageBackground_I395_4114_309_17: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I395_4114_309_26: {
    width: wp("11.11111111111111%"),
    top: hp("4.2018285865992056%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I395_4114_309_26: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I395_4114_309_82: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.57487922705314%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I395_4114_309_380: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.729468599033815%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I395_4114_309_459: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.3671497584541%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I395_4114_309_304: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.091787439613526%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_395_4115: {
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
  ImageBackground_395_4121: {
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
  ImageBackground_395_4268: {
    width: wp("86.59479261020532%"),
    minWidth: wp("86.59479261020532%"),
    height: hp("47.12343476509136%"),
    minHeight: hp("47.12343476509136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.874235733695652%"),
    top: hp("-16.052946497182376%")
  },
  View_395_4135: {
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
  TouchableOpacity_I395_4135_309_905: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  View_I395_4135_309_907: {
    flexGrow: 1,
    width: wp("19.31046195652174%"),
    height: hp("2.7323602978649038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033815%"),
    top: hp("0.4098360655737707%")
  },
  TouchableOpacity_I395_4135_309_908: {
    width: wp("19.31046195652174%"),
    height: hp("2.7323602978649038%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I395_4135_309_920: {
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
  View_I395_4135_309_920_309_916: {
    flexGrow: 1,
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.483091787439605%"),
    top: hp("0.27322404371584685%")
  },
  ImageBackground_I395_4135_309_920_309_917: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I395_4135_309_928: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.74396135265701%"),
    top: hp("0%")
  },
  TouchableOpacity_I395_4135_309_934: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.23188405797102%"),
    top: hp("0%")
  },
  View_395_4192: {
    width: wp("100.48309178743962%"),
    minWidth: wp("100.48309178743962%"),
    height: hp("44.80874316939891%"),
    minHeight: hp("44.80874316939891%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.24154589371980675%"),
    top: hp("38.3879781420765%"),
    backgroundColor: "rgba(243, 243, 243, 1)"
  },
  View_395_4199: {
    width: wp("42.270531400966185%"),
    minWidth: wp("42.270531400966185%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3478260869565215%"),
    top: hp("40.57377049180328%"),
    justifyContent: "flex-start"
  },
  Text_395_4199: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4194: {
    width: wp("91.30434782608695%"),
    minWidth: wp("91.30434782608695%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3478260869565215%"),
    top: hp("21.994535519125684%"),
    justifyContent: "flex-start"
  },
  Text_395_4194: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4204: {
    width: wp("93.47826086956522%"),
    minWidth: wp("93.47826086956522%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%"),
    top: hp("44.80874316939891%"),
    justifyContent: "flex-start"
  },
  Text_395_4204: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4200: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.632850241545896%"),
    top: hp("51.229508196721305%")
  },
  View_395_4201: {
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
  View_395_4202: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(148, 146, 146, 1)",
    borderWidth: 0.5
  },
  View_395_4203: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.106280193236714%"),
    top: hp("1.7759562841530183%"),
    justifyContent: "flex-start"
  },
  Text_395_4203: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4207: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.632850241545896%"),
    top: hp("65.84699453551912%")
  },
  View_395_4205: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(220, 53, 69, 1)"
  },
  View_395_4206: {
    width: wp("40.33816425120773%"),
    minWidth: wp("40.33816425120773%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.077294685990335%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_395_4206: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4209: {
    width: wp("62.56038647342995%"),
    minWidth: wp("62.56038647342995%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.59903381642512%"),
    top: hp("75.40983606557377%"),
    justifyContent: "flex-start"
  },
  Text_395_4209: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4210: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.980676328502415%"),
    top: hp("58.879781420765035%"),
    backgroundColor: "rgba(252, 251, 251, 1)",
    borderColor: "rgba(148, 146, 146, 1)",
    borderWidth: 0.5
  },
  View_395_4211: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.54589371980676%"),
    top: hp("58.879781420765035%"),
    backgroundColor: "rgba(252, 251, 251, 1)",
    borderColor: "rgba(148, 146, 146, 1)",
    borderWidth: 0.5
  },
  View_395_4212: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.111111111111114%"),
    top: hp("58.879781420765035%"),
    backgroundColor: "rgba(252, 251, 251, 1)",
    borderColor: "rgba(148, 146, 146, 1)",
    borderWidth: 0.5
  },
  ImageBackground_395_4277: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("12.568306010928962%")
  },
  View_395_4278: {
    width: wp("30.434782608695656%"),
    minWidth: wp("30.434782608695656%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.454106280193237%"),
    top: hp("12.978142076502733%"),
    justifyContent: "flex-start"
  },
  Text_395_4278: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_395_4279: {
    width: wp("30.434782608695656%"),
    minWidth: wp("30.434782608695656%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.14492753623188%"),
    top: hp("12.978142076502733%"),
    justifyContent: "flex-start"
  },
  Text_395_4279: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_395_4280: {
    width: wp("96.25603864734299%"),
    minWidth: wp("96.25603864734299%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.570048309178744%"),
    top: hp("11.407103825136613%")
  },
  ImageBackground_395_4415: {
    width: wp("16.304347826086957%"),
    minWidth: wp("16.304347826086957%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.458937198067632%"),
    top: hp("17.349726775956285%")
  },
  View_395_4231: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.879227053140095%"),
    top: hp("59.56284153005464%")
  },
  View_395_4216: {
    width: wp("7.487922705314009%"),
    minWidth: wp("7.487922705314009%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_395_4216: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_395_4222: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%")
  },
  View_395_4230: {
    width: wp("12.318840579710146%"),
    minWidth: wp("12.318840579710146%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.96135265700483%"),
    top: hp("59.56284153005464%")
  },
  View_395_4217: {
    width: wp("8.454106280193237%"),
    minWidth: wp("8.454106280193237%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_395_4217: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_395_4223: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.454106280193237%")
  },
  View_395_4229: {
    width: wp("12.560386473429952%"),
    minWidth: wp("12.560386473429952%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.28502415458937%"),
    top: hp("59.56284153005464%")
  },
  View_395_4218: {
    width: wp("8.695652173913043%"),
    minWidth: wp("8.695652173913043%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_395_4218: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_395_4226: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.69565217391304%")
  },
  View_404_5941: {
    width: wp("84.00230223429952%"),
    minWidth: wp("84.00230223429952%"),
    height: hp("11.538462821251708%"),
    minHeight: hp("11.538462821251708%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.903381642512077%"),
    top: hp("90.43715846994536%")
  },
  View_404_5942: {
    width: wp("84.00230223429952%"),
    minWidth: wp("84.00230223429952%"),
    height: hp("11.26523877753586%"),
    minHeight: hp("11.26523877753586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%")
  },
  View_404_5943: {
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
  View_404_5944: {
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
  Text_404_5944: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5945: {
    width: wp("42.010350618961354%"),
    minWidth: wp("42.010350618961354%"),
    minHeight: hp("1.9966333941683745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.99183367300725%"),
    top: hp("4.37158469945355%"),
    justifyContent: "flex-start"
  },
  Text_404_5945: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 9.692307472229004,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_5946: {
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
  Text_404_5946: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 9.692307472229004,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_404_5947: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.579710144927546%")
  },
  ImageBackground_404_5950: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("7.923497267759558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.579710144927546%")
  },
  ImageBackground_404_5953: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396139%")
  },
  ImageBackground_404_5956: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.628019323671499%")
  },
  ImageBackground_404_5959: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.772946859903378%")
  },
  ImageBackground_404_5963: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.579710144927546%")
  },
  View_404_5966: {
    width: wp("30.193236714975846%"),
    minWidth: wp("30.193236714975846%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.961352657004824%"),
    top: hp("0.6830601092896131%"),
    justifyContent: "flex-start"
  },
  Text_404_5966: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 9.692307472229004,
    fontWeight: "600",
    textAlign: "center",
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
