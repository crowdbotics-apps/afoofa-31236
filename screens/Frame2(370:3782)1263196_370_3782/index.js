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
      <TouchableOpacity
        style={styles.TouchableOpacity_370_3783}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("366_2254"))
        }
      >
        <Text style={styles.Text_370_3783}>About Us</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_370_3784}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("404_5730"))
        }
      >
        <Text style={styles.Text_370_3784}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_370_3785}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("97_2378"))
        }
      >
        <Text style={styles.Text_370_3785}>Sign Out</Text>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84a0/e1e4/b287b5e0f195d4acfa04c9824bf84de3"
        }}
        style={styles.ImageBackground_370_3786}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84a0/e1e4/b287b5e0f195d4acfa04c9824bf84de3"
        }}
        style={styles.ImageBackground_370_3787}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  TouchableOpacity_370_3783: {
    width: wp("49.162011173184354%"),
    minWidth: wp("49.162011173184354%"),
    minHeight: hp("14.473684210526317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.40782122905028%"),
    top: hp("12.5%"),
    justifyContent: "flex-start"
  },
  Text_370_3783: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_370_3784: {
    width: wp("63.128491620111724%"),
    minWidth: wp("63.128491620111724%"),
    minHeight: hp("14.473684210526317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.40782122905028%"),
    top: hp("42.76315789473684%"),
    justifyContent: "flex-start"
  },
  Text_370_3784: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_370_3785: {
    width: wp("63.128491620111724%"),
    minWidth: wp("63.128491620111724%"),
    minHeight: hp("14.473684210526317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.40782122905028%"),
    top: hp("73.02631578947368%"),
    justifyContent: "flex-start"
  },
  Text_370_3785: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_370_3786: {
    width: wp("87.15083798882681%"),
    minWidth: wp("87.15083798882681%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.145251396648044%"),
    top: hp("65.13157894736842%")
  },
  ImageBackground_370_3787: {
    width: wp("87.15083798882681%"),
    minWidth: wp("87.15083798882681%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.145251396648044%"),
    top: hp("34.868421052631575%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
