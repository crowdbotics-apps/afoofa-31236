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
      <View style={styles.View_137_2292}>
        <View style={styles.View_137_2282}>
          <View style={styles.View_137_2283}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7868/b2e9/72af27709e1b4204d7372e72035a3d83"
              }}
              style={styles.ImageBackground_137_2284}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a38a/47b8/2ab75dbdb61a9a464ce63eceae3f2953"
          }}
          style={styles.ImageBackground_137_2291}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(52, 58, 64, 1)" },
  View_2: { height: hp("213.25136612021856%") },
  View_137_2292: {
    width: wp("40.682053048570445%"),
    minWidth: wp("40.682053048570445%"),
    height: hp("35.65573770491803%"),
    minHeight: hp("35.65573770491803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.658973475714777%"),
    top: hp("88.79781420765028%")
  },
  View_137_2282: {
    width: wp("21.047192559421287%"),
    minWidth: wp("21.047192559421287%"),
    height: hp("21.861192046618854%"),
    minHeight: hp("21.861192046618854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.63486048914915%"),
    top: hp("6.83060109289616%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_137_2283: {
    width: wp("21.032693818894245%"),
    height: hp("21.861959155140028%"),
    top: hp("-0.0005336407103726515%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_137_2284: {
    width: wp("21.032693818894245%"),
    height: hp("21.861959155140028%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_137_2291: {
    width: wp("16.947984843265587%"),
    minWidth: wp("16.947984843265587%"),
    height: hp("35.65573770491803%"),
    minHeight: hp("35.65573770491803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
