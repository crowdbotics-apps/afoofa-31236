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
      <View style={styles.View_395_4656}>
        <Text style={styles.Text_395_4656}>Complete</Text>
      </View>
      <View style={styles.View_395_4643}>
        <Text style={styles.Text_395_4643}>$ 100</Text>
      </View>
      <View style={styles.View_395_4644}>
        <Text style={styles.Text_395_4644}>$ 100</Text>
      </View>
      <View style={styles.View_395_4645}>
        <Text style={styles.Text_395_4645}>$ 100</Text>
      </View>
      <View style={styles.View_395_4614}>
        <View style={styles.View_395_4617}>
          <Text style={styles.Text_395_4617}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_395_4618}>
          <Text style={styles.Text_395_4618}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_395_4619}>
          <Text style={styles.Text_395_4619}>06:53:20 GMT</Text>
        </View>
      </View>
      <View style={styles.View_395_4620}>
        <View style={styles.View_395_4623}>
          <Text style={styles.Text_395_4623}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_395_4624}>
          <Text style={styles.Text_395_4624}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_395_4625}>
          <Text style={styles.Text_395_4625}>06:53:20 GMT</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7463/9666/f3dbe0b777ed49fecb4ead5afa85c7dd"
        }}
        style={styles.ImageBackground_395_4626}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7463/9666/f3dbe0b777ed49fecb4ead5afa85c7dd"
        }}
        style={styles.ImageBackground_395_4627}
      />
      <View style={styles.View_395_4628}>
        <View style={styles.View_395_4631}>
          <Text style={styles.Text_395_4631}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_395_4632}>
          <Text style={styles.Text_395_4632}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_395_4633}>
          <Text style={styles.Text_395_4633}>06:53:20 GMT</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7463/9666/f3dbe0b777ed49fecb4ead5afa85c7dd"
        }}
        style={styles.ImageBackground_395_4634}
      />
      <View style={styles.View_395_4299} />
      <View style={styles.View_395_4300}>
        <Text style={styles.Text_395_4300}>#gdhd847595jnfh</Text>
      </View>
      <View style={styles.View_395_4301}>
        <Text style={styles.Text_395_4301}>06:53:20 GMT</Text>
      </View>
      <View style={styles.View_395_4302}>
        <View style={styles.View_I395_4302_309_5} />
        <View style={styles.View_I395_4302_309_31}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I395_4302_309_27}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("84_296"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/976c/0ce9/9210d0604147826b21cd34337293bc7a"
              }}
              style={styles.ImageBackground_I395_4302_309_9}
            />
            <View style={styles.View_I395_4302_309_23}>
              <Text style={styles.Text_I395_4302_309_23}>Home</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.View_I395_4302_309_28}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c081/5bf7/2b549586063c1cb7450f9cd24fca23c3"
              }}
              style={styles.ImageBackground_I395_4302_309_13}
            />
            <View style={styles.View_I395_4302_309_24}>
              <Text style={styles.Text_I395_4302_309_24}>Payment</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I395_4302_309_29}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("91_1327"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e02/16c0/beecfd4f830eb0967f9bc6b64c64324a"
              }}
              style={styles.ImageBackground_I395_4302_309_21}
            />
            <View style={styles.View_I395_4302_309_25}>
              <Text style={styles.Text_I395_4302_309_25}>Categories</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I395_4302_309_30}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("366_2056"))
            }
          >
            <View style={styles.View_I395_4302_309_22}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e78a/f2e8/65d02d5776406a7cb63ff6df1140761a"
                }}
                style={styles.ImageBackground_I395_4302_309_17}
              />
            </View>
            <View style={styles.View_I395_4302_309_26}>
              <Text style={styles.Text_I395_4302_309_26}>Profile</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I395_4302_309_82}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I395_4302_309_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I395_4302_309_459}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a6/168b/f07b1d4ab3c24a4549e185c706367dc7"
          }}
          style={styles.ImageBackground_I395_4302_309_304}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/608b/d282/3f52315d6d4316e45a84752225f2632f"
        }}
        style={styles.ImageBackground_395_4303}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7eed/e5e9/02698dee1c5073986e54d17e7c62c827"
        }}
        style={styles.ImageBackground_395_4309}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f3/3001/129bc25006c4803820f2c8a587193e34"
        }}
        style={styles.ImageBackground_395_4316}
      />
      <View style={styles.View_395_4322}>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e3f/deee/44d222dda2d057444ed53cc817bf9c36"
          }}
          style={styles.TouchableOpacity_I395_4322_309_905}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("370_3782"))
          }
        />
        <View style={styles.View_I395_4322_309_907}>
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e687/1aeb/51fe8bba2fec823fe6046aa2fd76e005"
            }}
            style={styles.TouchableOpacity_I395_4322_309_908}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("84_296"))
            }
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I395_4322_309_920}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("404_5300"))
          }
        >
          <View style={styles.View_I395_4322_309_920_309_916}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ec0/6a88/c027f71c44876580f3e2e99a2c61b1cd"
              }}
              style={styles.ImageBackground_I395_4322_309_920_309_917}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8afc/7ef8/e70dbca284eefa64ba40a3bd3ae2d50d"
          }}
          style={styles.TouchableOpacity_I395_4322_309_928}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("404_5120"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8efb/9320/dbc31fd36bf87365f8a113c713f1ed95"
          }}
          style={styles.TouchableOpacity_I395_4322_309_934}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("366_2726"))
          }
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09f6/02c9/bd45b7f0c548d97e3a9e1b0b04881113"
        }}
        style={styles.ImageBackground_395_4359}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_395_4360}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("395_4045"))
        }
      >
        <Text style={styles.Text_395_4360}>Donate</Text>
      </TouchableOpacity>
      <View style={styles.View_395_4361}>
        <Text style={styles.Text_395_4361}>Transactions</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1353/5548/bd6489abf2ed96fcf9c96c16f30a21e2"
        }}
        style={styles.ImageBackground_395_4362}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/860c/71c8/818538e5557dfb895d489b2fb6f9ff0b"
        }}
        style={styles.ImageBackground_395_4416}
      />
      <View style={styles.View_395_4510}>
        <View style={styles.View_395_4513}>
          <Text style={styles.Text_395_4513}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_395_4514}>
          <Text style={styles.Text_395_4514}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_395_4515}>
          <Text style={styles.Text_395_4515}>06:53:20 GMT</Text>
        </View>
      </View>
      <View style={styles.View_395_4516}>
        <View style={styles.View_395_4519}>
          <Text style={styles.Text_395_4519}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_395_4520}>
          <Text style={styles.Text_395_4520}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_395_4521}>
          <Text style={styles.Text_395_4521}>06:53:20 GMT</Text>
        </View>
      </View>
      <View style={styles.View_395_4522}>
        <View style={styles.View_395_4525}>
          <Text style={styles.Text_395_4525}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_395_4526}>
          <Text style={styles.Text_395_4526}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_395_4527}>
          <Text style={styles.Text_395_4527}>06:53:20 GMT</Text>
        </View>
      </View>
      <View style={styles.View_395_4528}>
        <View style={styles.View_395_4531}>
          <Text style={styles.Text_395_4531}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_395_4532}>
          <Text style={styles.Text_395_4532}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_395_4533}>
          <Text style={styles.Text_395_4533}>06:53:20 GMT</Text>
        </View>
      </View>
      <View style={styles.View_395_4534}>
        <View style={styles.View_395_4537}>
          <Text style={styles.Text_395_4537}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_395_4538}>
          <Text style={styles.Text_395_4538}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_395_4539}>
          <Text style={styles.Text_395_4539}>06:53:20 GMT</Text>
        </View>
      </View>
      <View style={styles.View_395_4540}>
        <View style={styles.View_395_4543}>
          <Text style={styles.Text_395_4543}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_395_4544}>
          <Text style={styles.Text_395_4544}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_395_4545}>
          <Text style={styles.Text_395_4545}>06:53:20 GMT</Text>
        </View>
      </View>
      <View style={styles.View_395_4546}>
        <View style={styles.View_395_4549}>
          <Text style={styles.Text_395_4549}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_395_4550}>
          <Text style={styles.Text_395_4550}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_395_4551}>
          <Text style={styles.Text_395_4551}>06:53:20 GMT</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7463/9666/f3dbe0b777ed49fecb4ead5afa85c7dd"
        }}
        style={styles.ImageBackground_395_4552}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7463/9666/f3dbe0b777ed49fecb4ead5afa85c7dd"
        }}
        style={styles.ImageBackground_395_4553}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7463/9666/f3dbe0b777ed49fecb4ead5afa85c7dd"
        }}
        style={styles.ImageBackground_395_4554}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7463/9666/f3dbe0b777ed49fecb4ead5afa85c7dd"
        }}
        style={styles.ImageBackground_395_4555}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7463/9666/f3dbe0b777ed49fecb4ead5afa85c7dd"
        }}
        style={styles.ImageBackground_395_4556}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7463/9666/f3dbe0b777ed49fecb4ead5afa85c7dd"
        }}
        style={styles.ImageBackground_395_4557}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7463/9666/f3dbe0b777ed49fecb4ead5afa85c7dd"
        }}
        style={styles.ImageBackground_395_4558}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7463/9666/f3dbe0b777ed49fecb4ead5afa85c7dd"
        }}
        style={styles.ImageBackground_395_4559}
      />
      <View style={styles.View_395_4560}>
        <View style={styles.View_395_4563}>
          <Text style={styles.Text_395_4563}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_395_4564}>
          <Text style={styles.Text_395_4564}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_395_4565}>
          <Text style={styles.Text_395_4565}>06:53:20 GMT</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7463/9666/f3dbe0b777ed49fecb4ead5afa85c7dd"
        }}
        style={styles.ImageBackground_395_4570}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_395_4571}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("395_4657"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4996/1674/b1bd3a7de6dd3dcd8d9732f8bc088ff5"
          }}
          style={styles.ImageBackground_395_4572}
        />
        <View style={styles.View_395_4584}>
          <Text style={styles.Text_395_4584}>Advance Filter</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_395_4635}>
        <Text style={styles.Text_395_4635}>$ 100</Text>
      </View>
      <View style={styles.View_395_4636}>
        <Text style={styles.Text_395_4636}>$ 100</Text>
      </View>
      <View style={styles.View_395_4637}>
        <Text style={styles.Text_395_4637}>$ 100</Text>
      </View>
      <View style={styles.View_395_4638}>
        <Text style={styles.Text_395_4638}>$ 100</Text>
      </View>
      <View style={styles.View_395_4639}>
        <Text style={styles.Text_395_4639}>$ 100</Text>
      </View>
      <View style={styles.View_395_4640}>
        <Text style={styles.Text_395_4640}>$ 100</Text>
      </View>
      <View style={styles.View_395_4641}>
        <Text style={styles.Text_395_4641}>$ 100</Text>
      </View>
      <View style={styles.View_395_4642}>
        <Text style={styles.Text_395_4642}>$ 100</Text>
      </View>
      <View style={styles.View_395_4646}>
        <Text style={styles.Text_395_4646}>Complete</Text>
      </View>
      <View style={styles.View_395_4647}>
        <Text style={styles.Text_395_4647}>Complete</Text>
      </View>
      <View style={styles.View_395_4648}>
        <Text style={styles.Text_395_4648}>Failed</Text>
      </View>
      <View style={styles.View_395_4649}>
        <Text style={styles.Text_395_4649}>Failed</Text>
      </View>
      <View style={styles.View_395_4650}>
        <Text style={styles.Text_395_4650}>Complete</Text>
      </View>
      <View style={styles.View_395_4651}>
        <Text style={styles.Text_395_4651}>Complete</Text>
      </View>
      <View style={styles.View_395_4652}>
        <Text style={styles.Text_395_4652}>Pending</Text>
      </View>
      <View style={styles.View_395_4653}>
        <Text style={styles.Text_395_4653}>Complete</Text>
      </View>
      <View style={styles.View_395_4654}>
        <Text style={styles.Text_395_4654}>Complete</Text>
      </View>
      <View style={styles.View_395_4655}>
        <Text style={styles.Text_395_4655}>Complete</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_395_4656: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("111.20218579234972%"),
    justifyContent: "flex-start"
  },
  Text_395_4656: {
    color: "rgba(15, 178, 32, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4643: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("95.08196721311475%"),
    justifyContent: "flex-start"
  },
  Text_395_4643: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4644: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("103.14207650273224%"),
    justifyContent: "flex-start"
  },
  Text_395_4644: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4645: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("111.20218579234972%"),
    justifyContent: "flex-start"
  },
  Text_395_4645: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4614: {
    width: wp("56.763285024154584%"),
    minWidth: wp("56.763285024154584%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.26570048309179%"),
    top: hp("94.67213114754098%")
  },
  View_395_4617: {
    width: wp("28.502415458937197%"),
    minWidth: wp("28.502415458937197%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_395_4617: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4618: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_395_4618: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4619: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_395_4619: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4620: {
    width: wp("56.763285024154584%"),
    minWidth: wp("56.763285024154584%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.26570048309179%"),
    top: hp("102.73224043715847%")
  },
  View_395_4623: {
    width: wp("28.502415458937197%"),
    minWidth: wp("28.502415458937197%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_395_4623: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4624: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_395_4624: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4625: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_395_4625: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_395_4626: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("100.81967213114753%")
  },
  ImageBackground_395_4627: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("108.87978142076503%")
  },
  View_395_4628: {
    width: wp("56.763285024154584%"),
    minWidth: wp("56.763285024154584%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.26570048309179%"),
    top: hp("110.79234972677597%")
  },
  View_395_4631: {
    width: wp("28.502415458937197%"),
    minWidth: wp("28.502415458937197%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.45901639344261%"),
    justifyContent: "flex-start"
  },
  Text_395_4631: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4632: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_395_4632: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4633: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("2.45901639344261%"),
    justifyContent: "flex-start"
  },
  Text_395_4633: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_395_4634: {
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
  View_395_4299: {
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
  View_395_4300: {
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
  Text_395_4300: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4301: {
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
  Text_395_4301: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4302: {
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
  View_I395_4302_309_5: {
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
  View_I395_4302_309_31: {
    flexGrow: 1,
    width: wp("83.33333333333334%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("1.639344262295083%")
  },
  TouchableOpacity_I395_4302_309_27: {
    width: wp("7.729468599033816%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I395_4302_309_9: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I395_4302_309_23: {
    width: wp("7.729468599033816%"),
    top: hp("4.0983606557377215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I395_4302_309_23: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I395_4302_309_28: {
    width: wp("9.420289855072465%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.913043478260864%")
  },
  ImageBackground_I395_4302_309_13: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594288%")
  },
  View_I395_4302_309_24: {
    width: wp("9.420289855072465%"),
    top: hp("4.0983606557377215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I395_4302_309_24: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I395_4302_309_29: {
    width: wp("11.11111111111111%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.58454106280193%")
  },
  ImageBackground_I395_4302_309_21: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  View_I395_4302_309_25: {
    width: wp("11.11111111111111%"),
    top: hp("4.0983606557377215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I395_4302_309_25: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I395_4302_309_30: {
    width: wp("11.11111111111111%"),
    height: hp("5.56794880517845%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22222222222223%")
  },
  View_I395_4302_309_22: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  ImageBackground_I395_4302_309_17: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I395_4302_309_26: {
    width: wp("11.11111111111111%"),
    top: hp("4.2018285865992056%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I395_4302_309_26: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I395_4302_309_82: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.57487922705314%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I395_4302_309_380: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.729468599033815%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I395_4302_309_459: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.3671497584541%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I395_4302_309_304: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.091787439613526%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_395_4303: {
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
  ImageBackground_395_4309: {
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
  ImageBackground_395_4316: {
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
  View_395_4322: {
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
  TouchableOpacity_I395_4322_309_905: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  View_I395_4322_309_907: {
    flexGrow: 1,
    width: wp("19.31046195652174%"),
    height: hp("2.7323602978649038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033815%"),
    top: hp("0.4098360655737707%")
  },
  TouchableOpacity_I395_4322_309_908: {
    width: wp("19.31046195652174%"),
    height: hp("2.7323602978649038%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I395_4322_309_920: {
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
  View_I395_4322_309_920_309_916: {
    flexGrow: 1,
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.483091787439605%"),
    top: hp("0.27322404371584685%")
  },
  ImageBackground_I395_4322_309_920_309_917: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I395_4322_309_928: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.74396135265701%"),
    top: hp("0%")
  },
  TouchableOpacity_I395_4322_309_934: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.23188405797102%"),
    top: hp("0%")
  },
  ImageBackground_395_4359: {
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
  TouchableOpacity_395_4360: {
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
  Text_395_4360: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4361: {
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
  Text_395_4361: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_395_4362: {
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
  ImageBackground_395_4416: {
    width: wp("29.468599033816425%"),
    minWidth: wp("29.468599033816425%"),
    height: hp("0.0000015634005186987705%"),
    minHeight: hp("0.0000015634005186987705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.6280193236715%"),
    top: hp("17.349726775956285%")
  },
  View_395_4510: {
    width: wp("56.763285024154584%"),
    minWidth: wp("56.763285024154584%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.26570048309179%"),
    top: hp("30.05464480874317%")
  },
  View_395_4513: {
    width: wp("28.502415458937197%"),
    minWidth: wp("28.502415458937197%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426172%"),
    justifyContent: "flex-start"
  },
  Text_395_4513: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4514: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_395_4514: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4515: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("2.4590163934426172%"),
    justifyContent: "flex-start"
  },
  Text_395_4515: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4516: {
    width: wp("56.763285024154584%"),
    minWidth: wp("56.763285024154584%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.26570048309179%"),
    top: hp("38.114754098360656%")
  },
  View_395_4519: {
    width: wp("28.502415458937197%"),
    minWidth: wp("28.502415458937197%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_395_4519: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4520: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_395_4520: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4521: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_395_4521: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4522: {
    width: wp("56.763285024154584%"),
    minWidth: wp("56.763285024154584%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.26570048309179%"),
    top: hp("46.17486338797814%")
  },
  View_395_4525: {
    width: wp("28.502415458937197%"),
    minWidth: wp("28.502415458937197%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_395_4525: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4526: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_395_4526: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4527: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_395_4527: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4528: {
    width: wp("56.763285024154584%"),
    minWidth: wp("56.763285024154584%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.26570048309179%"),
    top: hp("54.23497267759563%")
  },
  View_395_4531: {
    width: wp("28.502415458937197%"),
    minWidth: wp("28.502415458937197%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_395_4531: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4532: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_395_4532: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4533: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_395_4533: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4534: {
    width: wp("56.763285024154584%"),
    minWidth: wp("56.763285024154584%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.26570048309179%"),
    top: hp("62.295081967213115%")
  },
  View_395_4537: {
    width: wp("28.502415458937197%"),
    minWidth: wp("28.502415458937197%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426315%"),
    justifyContent: "flex-start"
  },
  Text_395_4537: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4538: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_395_4538: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4539: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("2.4590163934426315%"),
    justifyContent: "flex-start"
  },
  Text_395_4539: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4540: {
    width: wp("56.763285024154584%"),
    minWidth: wp("56.763285024154584%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.26570048309179%"),
    top: hp("70.3551912568306%")
  },
  View_395_4543: {
    width: wp("28.502415458937197%"),
    minWidth: wp("28.502415458937197%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_395_4543: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4544: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_395_4544: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4545: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_395_4545: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4546: {
    width: wp("56.763285024154584%"),
    minWidth: wp("56.763285024154584%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.26570048309179%"),
    top: hp("78.41530054644808%")
  },
  View_395_4549: {
    width: wp("28.502415458937197%"),
    minWidth: wp("28.502415458937197%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426386%"),
    justifyContent: "flex-start"
  },
  Text_395_4549: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4550: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_395_4550: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4551: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("2.4590163934426386%"),
    justifyContent: "flex-start"
  },
  Text_395_4551: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_395_4552: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.20218579234973%")
  },
  ImageBackground_395_4553: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28.142076502732237%")
  },
  ImageBackground_395_4554: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.26229508196721%")
  },
  ImageBackground_395_4555: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("52.322404371584696%")
  },
  ImageBackground_395_4556: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60.38251366120219%")
  },
  ImageBackground_395_4557: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68.44262295081968%")
  },
  ImageBackground_395_4558: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("76.50273224043715%")
  },
  ImageBackground_395_4559: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("84.56284153005464%")
  },
  View_395_4560: {
    width: wp("56.763285024154584%"),
    minWidth: wp("56.763285024154584%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.26570048309179%"),
    top: hp("86.47540983606558%")
  },
  View_395_4563: {
    width: wp("28.502415458937197%"),
    minWidth: wp("28.502415458937197%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_395_4563: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4564: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_395_4564: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4565: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_395_4565: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_395_4570: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("92.62295081967213%")
  },
  TouchableOpacity_395_4571: {
    width: wp("24.879227053140095%"),
    minWidth: wp("24.879227053140095%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.420289855072465%"),
    top: hp("21.994535519125684%")
  },
  ImageBackground_395_4572: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_395_4584: {
    width: wp("20.77294685990338%"),
    minWidth: wp("20.77294685990338%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.106280193236714%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_395_4584: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4635: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.763285024154589%"),
    top: hp("30.601092896174865%"),
    justifyContent: "flex-start"
  },
  Text_395_4635: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4636: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("38.66120218579235%"),
    justifyContent: "flex-start"
  },
  Text_395_4636: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4637: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("46.72131147540984%"),
    justifyContent: "flex-start"
  },
  Text_395_4637: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4638: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("54.78142076502732%"),
    justifyContent: "flex-start"
  },
  Text_395_4638: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4639: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("62.841530054644814%"),
    justifyContent: "flex-start"
  },
  Text_395_4639: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4640: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("70.90163934426229%"),
    justifyContent: "flex-start"
  },
  Text_395_4640: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4641: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("78.96174863387978%"),
    justifyContent: "flex-start"
  },
  Text_395_4641: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4642: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("87.02185792349727%"),
    justifyContent: "flex-start"
  },
  Text_395_4642: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4646: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("30.601092896174865%"),
    justifyContent: "flex-start"
  },
  Text_395_4646: {
    color: "rgba(15, 178, 32, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4647: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("38.66120218579235%"),
    justifyContent: "flex-start"
  },
  Text_395_4647: {
    color: "rgba(15, 178, 32, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4648: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("46.72131147540984%"),
    justifyContent: "flex-start"
  },
  Text_395_4648: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4649: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("54.78142076502732%"),
    justifyContent: "flex-start"
  },
  Text_395_4649: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4650: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("62.841530054644814%"),
    justifyContent: "flex-start"
  },
  Text_395_4650: {
    color: "rgba(15, 178, 32, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4651: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("70.90163934426229%"),
    justifyContent: "flex-start"
  },
  Text_395_4651: {
    color: "rgba(15, 178, 32, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4652: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("78.96174863387978%"),
    justifyContent: "flex-start"
  },
  Text_395_4652: {
    color: "rgba(255, 193, 7, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4653: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("87.02185792349727%"),
    justifyContent: "flex-start"
  },
  Text_395_4653: {
    color: "rgba(15, 178, 32, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4654: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("95.08196721311475%"),
    justifyContent: "flex-start"
  },
  Text_395_4654: {
    color: "rgba(15, 178, 32, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4655: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("103.14207650273224%"),
    justifyContent: "flex-start"
  },
  Text_395_4655: {
    color: "rgba(15, 178, 32, 1)",
    fontSize: 10,
    fontWeight: "600",
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
