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
      <View style={styles.View_366_2727} />
      <View style={styles.View_366_2728} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63be/d65d/61f35fcad9f02bcee5dc97a74823a118"
        }}
        style={styles.ImageBackground_366_2729}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7463/9666/f3dbe0b777ed49fecb4ead5afa85c7dd"
        }}
        style={styles.ImageBackground_366_2730}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7463/9666/f3dbe0b777ed49fecb4ead5afa85c7dd"
        }}
        style={styles.ImageBackground_366_2731}
      />
      <View style={styles.View_366_2732}>
        <Text style={styles.Text_366_2732}>#gdhd847595jnfh</Text>
      </View>
      <View style={styles.View_366_2733}>
        <Text style={styles.Text_366_2733}>06:53:20 GMT</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7463/9666/f3dbe0b777ed49fecb4ead5afa85c7dd"
        }}
        style={styles.ImageBackground_366_2734}
      />
      <View style={styles.View_366_2739}>
        <Text style={styles.Text_366_2739}>Today</Text>
      </View>
      <View style={styles.View_366_2740}>
        <Text style={styles.Text_366_2740}>Yesterday</Text>
      </View>
      <View style={styles.View_366_2741}>
        <Text style={styles.Text_366_2741}>This Week</Text>
      </View>
      <View style={styles.View_366_2742}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/987c/f166/068943e2935dc994c925b6faef249ce0"
          }}
          style={styles.ImageBackground_366_2743}
        />
        <View style={styles.View_366_2747}>
          <Text style={styles.Text_366_2747}>
            Your Payment is successfully done !!
          </Text>
        </View>
        <View style={styles.View_366_2748}>
          <Text style={styles.Text_366_2748}>Just Now</Text>
        </View>
      </View>
      <View style={styles.View_366_2749}>
        <View style={styles.View_366_2750}>
          <Text style={styles.Text_366_2750}>
            Hurry up !! Only 1 days left to vote
          </Text>
        </View>
        <View style={styles.View_366_2751}>
          <Text style={styles.Text_366_2751}>1h</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d09/4ba7/60a355e20535f13634859dc9ddce890d"
          }}
          style={styles.ImageBackground_366_2752}
        />
      </View>
      <View style={styles.View_366_2753}>
        <View style={styles.View_366_2754}>
          <Text style={styles.Text_366_2754}>
            Hurry up !! Only 1 days left to vote
          </Text>
        </View>
        <View style={styles.View_366_2755}>
          <Text style={styles.Text_366_2755}>29d</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d09/4ba7/60a355e20535f13634859dc9ddce890d"
          }}
          style={styles.ImageBackground_366_2756}
        />
      </View>
      <View style={styles.View_366_2757}>
        <View style={styles.View_366_2758}>
          <Text style={styles.Text_366_2758}>
            Its been 6 days without voting.
          </Text>
        </View>
        <View style={styles.View_366_2759}>
          <Text style={styles.Text_366_2759}>1d</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4c7/d523/420051886e973f28370a94ea66539c41"
          }}
          style={styles.ImageBackground_366_2760}
        />
      </View>
      <View style={styles.View_366_2766}>
        <View style={styles.View_366_2767}>
          <Text style={styles.Text_366_2767}>
            Its been 10 days without voting.
          </Text>
        </View>
        <View style={styles.View_366_2768}>
          <Text style={styles.Text_366_2768}>4d</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4c7/d523/420051886e973f28370a94ea66539c41"
          }}
          style={styles.ImageBackground_366_2769}
        />
      </View>
      <View style={styles.View_366_2775}>
        <View style={styles.View_366_2776}>
          <Text style={styles.Text_366_2776}>
            Its been 8 days without voting.
          </Text>
        </View>
        <View style={styles.View_366_2777}>
          <Text style={styles.Text_366_2777}>5d</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4c7/d523/420051886e973f28370a94ea66539c41"
          }}
          style={styles.ImageBackground_366_2778}
        />
      </View>
      <View style={styles.View_366_2784}>
        <View style={styles.View_366_2785}>
          <Text style={styles.Text_366_2785}>
            Its been 7 days without voting.
          </Text>
        </View>
        <View style={styles.View_366_2786}>
          <Text style={styles.Text_366_2786}>6d</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4c7/d523/420051886e973f28370a94ea66539c41"
          }}
          style={styles.ImageBackground_366_2787}
        />
      </View>
      <View style={styles.View_366_2793}>
        <Text style={styles.Text_366_2793}>Last Month</Text>
      </View>
      <View style={styles.View_366_2794}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ade/8fc4/b893847234952bb3df23191ef2c751e1"
          }}
          style={styles.ImageBackground_366_2795}
        />
        <View style={styles.View_366_2796}>
          <View style={styles.View_366_2797}>
            <Text style={styles.Text_366_2797}>
              Hurray... your efforts works !! “ABC” won the good health award.{" "}
            </Text>
          </View>
          <View style={styles.View_366_2798}>
            <Text style={styles.Text_366_2798}>30d</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_366_2799}>
        <View style={styles.View_I366_2799_309_5} />
        <View style={styles.View_I366_2799_309_31}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I366_2799_309_27}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("84_296"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/976c/0ce9/9210d0604147826b21cd34337293bc7a"
              }}
              style={styles.ImageBackground_I366_2799_309_9}
            />
            <View style={styles.View_I366_2799_309_23}>
              <Text style={styles.Text_I366_2799_309_23}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I366_2799_309_28}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("395_4045"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/885e/bc12/997de7d2815db6dfc110ec854b91e9af"
              }}
              style={styles.ImageBackground_I366_2799_309_13}
            />
            <View style={styles.View_I366_2799_309_24}>
              <Text style={styles.Text_I366_2799_309_24}>Payment</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I366_2799_309_29}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("91_1327"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e02/16c0/beecfd4f830eb0967f9bc6b64c64324a"
              }}
              style={styles.ImageBackground_I366_2799_309_21}
            />
            <View style={styles.View_I366_2799_309_25}>
              <Text style={styles.Text_I366_2799_309_25}>Categories</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I366_2799_309_30}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("366_2056"))
            }
          >
            <View style={styles.View_I366_2799_309_22}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e78a/f2e8/65d02d5776406a7cb63ff6df1140761a"
                }}
                style={styles.ImageBackground_I366_2799_309_17}
              />
            </View>
            <View style={styles.View_I366_2799_309_26}>
              <Text style={styles.Text_I366_2799_309_26}>Profile</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I366_2799_309_82}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I366_2799_309_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I366_2799_309_459}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I366_2799_309_304}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/608b/d282/3f52315d6d4316e45a84752225f2632f"
        }}
        style={styles.ImageBackground_370_3748}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed54/8aa3/0fff890190a03351ba2c6378d42c8364"
        }}
        style={styles.ImageBackground_370_3754}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d779/002c/7143805f6b55fdf11b51efe0a1fde148"
        }}
        style={styles.ImageBackground_370_3762}
      />
      <View style={styles.View_366_2800}>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e3f/deee/44d222dda2d057444ed53cc817bf9c36"
          }}
          style={styles.TouchableOpacity_I366_2800_309_905}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("370_3782"))
          }
        />
        <View style={styles.View_I366_2800_309_907}>
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e687/1aeb/51fe8bba2fec823fe6046aa2fd76e005"
            }}
            style={styles.TouchableOpacity_I366_2800_309_908}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("84_296"))
            }
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I366_2800_309_920}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("404_5300"))
          }
        >
          <View style={styles.View_I366_2800_309_920_309_916}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ec0/6a88/c027f71c44876580f3e2e99a2c61b1cd"
              }}
              style={styles.ImageBackground_I366_2800_309_920_309_917}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8afc/7ef8/e70dbca284eefa64ba40a3bd3ae2d50d"
          }}
          style={styles.TouchableOpacity_I366_2800_309_928}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("404_5120"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ca6/aaf5/eaf45ad3769c1164eca186d119f3e61d"
          }}
          style={styles.ImageBackground_I366_2800_309_934}
        />
      </View>
      <View style={styles.View_366_2735}>
        <View style={styles.View_366_2736} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2303/11f9/c4de385f7b30ae1a2b80f690d5cee771"
          }}
          style={styles.ImageBackground_366_2737}
        />
      </View>
      <View style={styles.View_366_2738}>
        <Text style={styles.Text_366_2738}>Notification</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_366_2727: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("18.989071038251364%"),
    minHeight: hp("18.989071038251364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(52, 58, 64, 1)"
  },
  View_366_2728: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43.169398907103826%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_366_2729: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.989071038251364%")
  },
  ImageBackground_366_2730: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43.169398907103826%")
  },
  ImageBackground_366_2731: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("59.2896174863388%")
  },
  View_366_2732: {
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
  Text_366_2732: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2733: {
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
  Text_366_2733: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_2734: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("91.53005464480874%")
  },
  View_366_2739: {
    width: wp("31.15942028985507%"),
    minWidth: wp("31.15942028985507%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434782%"),
    top: hp("21.44808743169399%"),
    justifyContent: "flex-start"
  },
  Text_366_2739: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2740: {
    width: wp("31.15942028985507%"),
    minWidth: wp("31.15942028985507%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434782%"),
    top: hp("45.62841530054645%"),
    justifyContent: "flex-start"
  },
  Text_366_2740: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2741: {
    width: wp("31.15942028985507%"),
    minWidth: wp("31.15942028985507%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("61.74863387978142%"),
    justifyContent: "flex-start"
  },
  Text_366_2741: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2742: {
    width: wp("86.47342995169082%"),
    minWidth: wp("86.47342995169082%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.763285024154589%"),
    top: hp("28.825136612021858%")
  },
  ImageBackground_366_2743: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_366_2747: {
    width: wp("58.212560386473434%"),
    minWidth: wp("58.212560386473434%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.285024154589374%"),
    top: hp("1.2295081967213122%"),
    justifyContent: "flex-start"
  },
  Text_366_2747: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2748: {
    width: wp("9.420289855072465%"),
    minWidth: wp("9.420289855072465%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.05314009661836%"),
    top: hp("1.5027322404371581%"),
    justifyContent: "flex-start"
  },
  Text_366_2748: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 6,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2749: {
    width: wp("86.95652173913044%"),
    minWidth: wp("86.95652173913044%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434782%"),
    top: hp("36.6120218579235%")
  },
  View_366_2750: {
    width: wp("58.212560386473434%"),
    minWidth: wp("58.212560386473434%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.768115942028988%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_366_2750: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2751: {
    width: wp("9.420289855072465%"),
    minWidth: wp("9.420289855072465%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.53623188405797%"),
    top: hp("1.775956284152997%"),
    justifyContent: "flex-start"
  },
  Text_366_2751: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 6,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_2752: {
    width: wp("8.454106280193237%"),
    minWidth: wp("8.454106280193237%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_366_2753: {
    width: wp("86.95652173913044%"),
    minWidth: wp("86.95652173913044%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434782%"),
    top: hp("109.15300546448088%")
  },
  View_366_2754: {
    width: wp("58.212560386473434%"),
    minWidth: wp("58.212560386473434%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.768115942028988%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_366_2754: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2755: {
    width: wp("9.420289855072465%"),
    minWidth: wp("9.420289855072465%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.53623188405797%"),
    top: hp("1.7759562841529828%"),
    justifyContent: "flex-start"
  },
  Text_366_2755: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 6,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_2756: {
    width: wp("8.454106280193237%"),
    minWidth: wp("8.454106280193237%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_366_2757: {
    width: wp("85.74879227053141%"),
    minWidth: wp("85.74879227053141%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("53.00546448087432%")
  },
  View_366_2758: {
    width: wp("58.212560386473434%"),
    minWidth: wp("58.212560386473434%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%"),
    top: hp("1.229508196721305%"),
    justifyContent: "flex-start"
  },
  Text_366_2758: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2759: {
    width: wp("9.420289855072465%"),
    minWidth: wp("9.420289855072465%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.32850241545894%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_366_2759: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 6,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_2760: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_366_2766: {
    width: wp("85.74879227053141%"),
    minWidth: wp("85.74879227053141%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("69.12568306010928%")
  },
  View_366_2767: {
    width: wp("58.212560386473434%"),
    minWidth: wp("58.212560386473434%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%"),
    top: hp("1.2295081967213122%"),
    justifyContent: "flex-start"
  },
  Text_366_2767: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2768: {
    width: wp("9.420289855072465%"),
    minWidth: wp("9.420289855072465%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.32850241545894%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_366_2768: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 6,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_2769: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_366_2775: {
    width: wp("85.74879227053141%"),
    minWidth: wp("85.74879227053141%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("77.18579234972678%")
  },
  View_366_2776: {
    width: wp("58.212560386473434%"),
    minWidth: wp("58.212560386473434%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%"),
    top: hp("1.229508196721298%"),
    justifyContent: "flex-start"
  },
  Text_366_2776: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2777: {
    width: wp("9.420289855072465%"),
    minWidth: wp("9.420289855072465%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.32850241545894%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_366_2777: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 6,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_2778: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_366_2784: {
    width: wp("85.74879227053141%"),
    minWidth: wp("85.74879227053141%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("85.24590163934425%")
  },
  View_366_2785: {
    width: wp("58.212560386473434%"),
    minWidth: wp("58.212560386473434%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_366_2785: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2786: {
    width: wp("9.420289855072465%"),
    minWidth: wp("9.420289855072465%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.32850241545894%"),
    top: hp("1.5027322404371688%"),
    justifyContent: "flex-start"
  },
  Text_366_2786: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 6,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_2787: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_366_2793: {
    width: wp("31.15942028985507%"),
    minWidth: wp("31.15942028985507%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("93.98907103825137%"),
    justifyContent: "flex-start"
  },
  Text_366_2793: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2794: {
    width: wp("85.5072463768116%"),
    minWidth: wp("85.5072463768116%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("101.22950819672131%")
  },
  ImageBackground_366_2795: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_366_2796: {
    width: wp("73.18840579710145%"),
    minWidth: wp("73.18840579710145%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.318840579710145%"),
    top: hp("0.2732240437158424%")
  },
  View_366_2797: {
    width: wp("58.212560386473434%"),
    minWidth: wp("58.212560386473434%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_366_2797: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2798: {
    width: wp("9.420289855072465%"),
    minWidth: wp("9.420289855072465%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.768115942029%"),
    top: hp("1.3661202185792547%"),
    justifyContent: "flex-start"
  },
  Text_366_2798: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 6,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2799: {
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
  View_I366_2799_309_5: {
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
  View_I366_2799_309_31: {
    flexGrow: 1,
    width: wp("83.33333333333334%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("1.639344262295083%")
  },
  TouchableOpacity_I366_2799_309_27: {
    width: wp("7.729468599033816%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I366_2799_309_9: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I366_2799_309_23: {
    width: wp("7.729468599033816%"),
    top: hp("4.0983606557377215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I366_2799_309_23: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I366_2799_309_28: {
    width: wp("9.420289855072465%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.913043478260864%")
  },
  ImageBackground_I366_2799_309_13: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594288%")
  },
  View_I366_2799_309_24: {
    width: wp("9.420289855072465%"),
    top: hp("4.0983606557377215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I366_2799_309_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I366_2799_309_29: {
    width: wp("11.11111111111111%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.58454106280193%")
  },
  ImageBackground_I366_2799_309_21: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  View_I366_2799_309_25: {
    width: wp("11.11111111111111%"),
    top: hp("4.0983606557377215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I366_2799_309_25: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I366_2799_309_30: {
    width: wp("11.11111111111111%"),
    height: hp("5.56794880517845%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22222222222223%")
  },
  View_I366_2799_309_22: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  ImageBackground_I366_2799_309_17: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I366_2799_309_26: {
    width: wp("11.11111111111111%"),
    top: hp("4.2018285865992056%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I366_2799_309_26: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I366_2799_309_82: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.57487922705314%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I366_2799_309_380: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.729468599033815%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I366_2799_309_459: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.3671497584541%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I366_2799_309_304: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.091787439613526%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_370_3748: {
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
  ImageBackground_370_3754: {
    width: wp("91.20787099939614%"),
    minWidth: wp("91.20787099939614%"),
    height: hp("46.123196127636184%"),
    minHeight: hp("46.123196127636184%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.558362583031402%"),
    top: hp("-21.721311475409834%")
  },
  ImageBackground_370_3762: {
    width: wp("110.0420818236715%"),
    minWidth: wp("110.0420818236715%"),
    height: hp("57.601732764739154%"),
    minHeight: hp("57.601732764739154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.103265587258454%"),
    top: hp("-19.726979406804986%")
  },
  View_366_2800: {
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
  TouchableOpacity_I366_2800_309_905: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  View_I366_2800_309_907: {
    flexGrow: 1,
    width: wp("19.31046195652174%"),
    height: hp("2.7323602978649038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033815%"),
    top: hp("0.4098360655737707%")
  },
  TouchableOpacity_I366_2800_309_908: {
    width: wp("19.31046195652174%"),
    height: hp("2.7323602978649038%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I366_2800_309_920: {
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
  View_I366_2800_309_920_309_916: {
    flexGrow: 1,
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.483091787439605%"),
    top: hp("0.27322404371584685%")
  },
  ImageBackground_I366_2800_309_920_309_917: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I366_2800_309_928: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.74396135265701%"),
    top: hp("0%")
  },
  ImageBackground_I366_2800_309_934: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.23188405797102%"),
    top: hp("0%")
  },
  View_366_2735: {
    width: wp("5.072463768115942%"),
    minWidth: wp("5.072463768115942%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.072463768115942%"),
    top: hp("13.797814207650273%")
  },
  View_366_2736: {
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
  ImageBackground_366_2737: {
    width: wp("2.8126887077294684%"),
    minWidth: wp("2.8126887077294684%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2077294685990339%"),
    top: hp("0.27322404371584597%")
  },
  View_366_2738: {
    width: wp("55.55555555555556%"),
    minWidth: wp("55.55555555555556%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.560386473429952%"),
    top: hp("13.797814207650273%"),
    justifyContent: "flex-start"
  },
  Text_366_2738: {
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
