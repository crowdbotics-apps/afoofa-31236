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
      <View style={styles.View_370_3841} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e16a/f05f/5d36e27754ae8b70c769cad0c31329cb"
        }}
        style={styles.ImageBackground_370_3842}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc77/29f1/25f6058e40f5a7de794e52698873969a"
        }}
        style={styles.ImageBackground_370_3850}
      />
      <View style={styles.View_366_2255} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c86d/494f/c1de26c54359858d64a93b6695b55086"
        }}
        style={styles.ImageBackground_366_2256}
      />
      <View style={styles.View_366_2306}>
        <View style={styles.View_366_2307} />
      </View>
      <View style={styles.View_366_2322}>
        <Text style={styles.Text_366_2322}>
          “Alone we can do so little; together we can do so much.” - Helen
          Keller
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b749/d73a/0d0edf50a8bfbf49a4cdf5f05167bd44"
        }}
        style={styles.ImageBackground_366_2323}
      />
      <View style={styles.View_366_2324} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8634/a504/1cb85d196e816b615e9ee9131568d649"
        }}
        style={styles.ImageBackground_366_2325}
      />
      <View style={styles.View_366_2328}>
        <Text style={styles.Text_366_2328}>
          Afoofa began with a simple question -what if everyone gave a dollar a
          day to help solve the world’s problems? Those dollars would add up to
          the large sums needed to start solving the seemingly insurmountable
          issues that plague our social structures and threaten our futures.
          Then, what if the collection of funds were directed to the best
          organizations, providing them the meaningful resources needed to focus
          on the root causes of these issues? Could we finally achieve lasting
          change and provide the peace, security and prosperity we all desire
          and deserve?
        </Text>
      </View>
      <View style={styles.View_366_2329}>
        <Text style={styles.Text_366_2329}>
          We believe affecting lasting change to persistent social inequities
          and environmental harm comes from everyone having the ability to be
          heard, to collaborate and find common purpose, aggregate resources for
          collective impact and insist on effective action. We aim to achieve
          the demands of today’s donors and activists by utilizing the
          exponential impact of Blockchain technology which will provide
          end-to-end transparency, accountability and measurable outcomes when
          funding NGO’s tackling the critical social and environmental
          challenges affecting us all.
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c88c/2b1f/3222c906924b69500b56189a0e89b71f"
        }}
        style={styles.ImageBackground_366_2330}
      />
      <View style={styles.View_366_2331}>
        <Text style={styles.Text_366_2331}>
          The Afoofa Mission Our mission is to leverage technology to give our
          fellow citizens across the globe the ability to learn about, find
          democratic consensus and deliver financial capital at scale to
          non-governmental organizations with high impact potential working to
          achieve the UN’s sustainable development goals.
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0395/5e39/bb85cc6ea88066049d8d3f89cc0c602d"
        }}
        style={styles.ImageBackground_366_2332}
      />
      <View style={styles.View_366_2336}>
        <Text style={styles.Text_366_2336}>
          afoofa was built for all of us to act as one. Use it to learn, to
          advocate, to cast a vote, to give, to measure progress and hold to
          account. When we live “all for one and one for all” we take back the
          power, where it belongs, to shape the world in our image.
        </Text>
      </View>
      <View style={styles.View_366_2337}>
        <Text style={styles.Text_366_2337}>Get Started</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6ee/a5fc/3b2e8d594c4ec6c9e86b6aefd5f0e230"
        }}
        style={styles.ImageBackground_366_2338}
      />
      <View style={styles.View_366_2339}>
        <View style={styles.View_366_2340}>
          <Text style={styles.Text_366_2340}>Step 1</Text>
        </View>
        <View style={styles.View_366_2341}>
          <Text style={styles.Text_366_2341}>Step 1</Text>
        </View>
        <View style={styles.View_366_2342}>
          <Text style={styles.Text_366_2342}>
            Sign up and pledge your US $1 per day. afoofa treats everyone
            equally, you can only give up to US $365 per year. You can give in
            any increments you want. For example, by day, by week, by month or
            by year. You will receive one vote for each dollar given. You can
            cancel your subscription at any time.
          </Text>
        </View>
        <View style={styles.View_366_2343}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7f3/d212/dfa6da9a521966d6e3167005bea9f650"
            }}
            style={styles.ImageBackground_366_2344}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59a2/d943/e91b502411f03fc3ee5c070225377cd3"
            }}
            style={styles.ImageBackground_366_2345}
          />
        </View>
      </View>
      <View style={styles.View_366_2346}>
        <View style={styles.View_366_2347}>
          <Text style={styles.Text_366_2347}>Step 2</Text>
        </View>
        <View style={styles.View_366_2348}>
          <Text style={styles.Text_366_2348}>Step 2</Text>
        </View>
        <View style={styles.View_366_2349}>
          <Text style={styles.Text_366_2349}>
            Learn more about each Global Goal that represents a voting session
            and the NGO’s you’ll be voting on that are working to reach the
            Goals.
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2747/1304/fd24d806fdc5388cd29e37a10f46d4ad"
          }}
          style={styles.ImageBackground_366_2350}
        />
      </View>
      <View style={styles.View_366_2351}>
        <View style={styles.View_366_2352}>
          <Text style={styles.Text_366_2352}>Step 2</Text>
        </View>
        <View style={styles.View_366_2353}>
          <Text style={styles.Text_366_2353}>Step 2</Text>
        </View>
        <View style={styles.View_366_2354}>
          <Text style={styles.Text_366_2354}>
            GET OUT THE VOTE! Everyone gets one vote for each dollar given. In
            your Dash- board you will see how many dollars you gave and the
            corresponding number of votes in your Votes Bucket. You can only
            cast one vote each day. You can allow your votes to accumulate so
            you can cast them at a later date. If you do not cast all of your
            votes or any votes in a voting session the votes left in your Votes
            Bucket carry forward to the next voting session. The most votes
            anyone can have are 365 if they gave US $365.
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86f6/0610/1bd3766b1066fc67b768f9369fda014f"
          }}
          style={styles.ImageBackground_366_2355}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/668e/c0d9/ca6b82f40848e135084466a603607f57"
        }}
        style={styles.ImageBackground_366_2362}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/668e/c0d9/ca6b82f40848e135084466a603607f57"
        }}
        style={styles.ImageBackground_366_2363}
      />
      <View style={styles.View_366_2364}>
        <View style={styles.View_I366_2364_309_5} />
        <View style={styles.View_I366_2364_309_31}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I366_2364_309_27}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("84_296"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/976c/0ce9/9210d0604147826b21cd34337293bc7a"
              }}
              style={styles.ImageBackground_I366_2364_309_9}
            />
            <View style={styles.View_I366_2364_309_23}>
              <Text style={styles.Text_I366_2364_309_23}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I366_2364_309_28}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("395_4045"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/885e/bc12/997de7d2815db6dfc110ec854b91e9af"
              }}
              style={styles.ImageBackground_I366_2364_309_13}
            />
            <View style={styles.View_I366_2364_309_24}>
              <Text style={styles.Text_I366_2364_309_24}>Payment</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I366_2364_309_29}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("91_1327"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e02/16c0/beecfd4f830eb0967f9bc6b64c64324a"
              }}
              style={styles.ImageBackground_I366_2364_309_21}
            />
            <View style={styles.View_I366_2364_309_25}>
              <Text style={styles.Text_I366_2364_309_25}>Categories</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I366_2364_309_30}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("366_2056"))
            }
          >
            <View style={styles.View_I366_2364_309_22}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e78a/f2e8/65d02d5776406a7cb63ff6df1140761a"
                }}
                style={styles.ImageBackground_I366_2364_309_17}
              />
            </View>
            <View style={styles.View_I366_2364_309_26}>
              <Text style={styles.Text_I366_2364_309_26}>Profile</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I366_2364_309_82}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I366_2364_309_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I366_2364_309_459}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I366_2364_309_304}
        />
      </View>
      <View style={styles.View_366_2366}>
        <View style={styles.View_366_2367}>
          <View style={styles.View_366_2368}>
            <Text style={styles.Text_366_2368}>Follow Us !!</Text>
          </View>
          <View style={styles.View_366_2369}>
            <Text style={styles.Text_366_2369}>info@afoofagives.org</Text>
          </View>
          <View style={styles.View_366_2370}>
            <Text style={styles.Text_366_2370}>vote.afoofagives.org</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae09/3411/34f0987f496f908f2f02a2abbecbd390"
          }}
          style={styles.ImageBackground_366_2371}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/717c/d0d3/b13d0ae408ca217c482f287eace1dfcf"
          }}
          style={styles.ImageBackground_366_2374}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8cf/1197/1fb475e634612c66bc57c5e1de58ae58"
          }}
          style={styles.ImageBackground_366_2377}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/141a/756b/7bf8b38c7d281bda63c070b8ccf39406"
          }}
          style={styles.ImageBackground_366_2380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9886/8668/60de46f396463b405ca98d9bfcd5a815"
          }}
          style={styles.ImageBackground_366_2383}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07a4/c76d/db01535ba069fb5065857918e3d1fb12"
        }}
        style={styles.ImageBackground_370_3603}
      />
      <View style={styles.View_370_3632} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/608b/d282/3f52315d6d4316e45a84752225f2632f"
        }}
        style={styles.ImageBackground_370_3605}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f23/08d0/1866a73a51e4334782ab1b177beafde5"
        }}
        style={styles.ImageBackground_370_3611}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4262/ba29/662dfcb5de68b7da27ac5356f6ffa638"
        }}
        style={styles.ImageBackground_370_3712}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/608b/d282/3f52315d6d4316e45a84752225f2632f"
        }}
        style={styles.ImageBackground_370_3734}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/591b/9d35/c1423d5b8a80759d627135d26baeea46"
        }}
        style={styles.ImageBackground_370_3740}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/608b/d282/3f52315d6d4316e45a84752225f2632f"
        }}
        style={styles.ImageBackground_370_3626}
      />
      <View style={styles.View_366_2311}>
        <Text style={styles.Text_366_2311}>What is </Text>
      </View>
      <View style={styles.View_366_2313}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b5e/71b8/66f421a0fdc963f68d906904a942a5dc"
          }}
          style={styles.ImageBackground_366_2314}
        />
      </View>
      <View style={styles.View_366_2321}>
        <Text style={styles.Text_366_2321}>?</Text>
      </View>
      <View style={styles.View_366_2359}>
        <View style={styles.View_366_2360} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2303/11f9/c4de385f7b30ae1a2b80f690d5cee771"
          }}
          style={styles.ImageBackground_366_2361}
        />
      </View>
      <View style={styles.View_370_3633}>
        <View style={styles.View_370_3638}>
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/351b/a363/c05d32e2bc69beaca145ba9477097ace"
            }}
            style={styles.TouchableOpacity_I370_3638_309_905}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("370_3782"))
            }
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_I370_3638_309_907}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("84_296"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5941/ff05/3edac74491b2df1452020b35c38a7db7"
              }}
              style={styles.ImageBackground_I370_3638_309_908}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I370_3638_309_920}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("404_5300"))
            }
          >
            <View style={styles.View_I370_3638_309_920_309_916}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09cf/84fe/62b350b3fc309d6e7b062a2ed623c019"
                }}
                style={styles.ImageBackground_I370_3638_309_920_309_917}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13f3/e564/2658f2adf85f9bd65981cd9de1eb92ab"
            }}
            style={styles.TouchableOpacity_I370_3638_309_928}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("404_5120"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d93/5921/18500cef42bfd4bb09341712035bbd12"
            }}
            style={styles.TouchableOpacity_I370_3638_309_934}
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
  View_2: { height: hp("393.5792349726776%") },
  View_370_3841: {
    width: wp("100.48309178743962%"),
    minWidth: wp("100.48309178743962%"),
    height: hp("36.20218579234973%"),
    minHeight: hp("36.20218579234973%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("355.7377049180328%"),
    backgroundColor: "rgba(243, 243, 243, 1)"
  },
  ImageBackground_370_3842: {
    width: wp("71.32892700785024%"),
    minWidth: wp("71.32892700785024%"),
    height: hp("52.15504130379098%"),
    minHeight: hp("52.15504130379098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.3768115942029%"),
    top: hp("356.8306010928962%")
  },
  ImageBackground_370_3850: {
    width: wp("67.84821293780193%"),
    minWidth: wp("67.84821293780193%"),
    height: hp("32.79272194117145%"),
    minHeight: hp("32.79272194117145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-14.492753623188406%"),
    top: hp("362.9781420765027%")
  },
  View_366_2255: {
    width: wp("88.40579710144928%"),
    minWidth: wp("88.40579710144928%"),
    height: hp("159.2896174863388%"),
    minHeight: hp("159.2896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("195.08196721311475%"),
    backgroundColor: "rgba(243, 243, 243, 1)"
  },
  ImageBackground_366_2256: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("30.87431693989071%"),
    minHeight: hp("30.87431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1349260265700483%"),
    top: hp("115.1639344262295%"),
    resizeMode: "cover"
  },
  View_366_2306: {
    width: wp("101.10110960144927%"),
    minWidth: wp("101.10110960144927%"),
    height: hp("31.010928961748636%"),
    minHeight: hp("31.010928961748636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.4830917874396135%"),
    top: hp("115.02732240437159%")
  },
  View_366_2307: {
    width: wp("101.10110960144927%"),
    minWidth: wp("101.10110960144927%"),
    height: hp("31.010928961748636%"),
    minHeight: hp("31.010928961748636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(52, 58, 64, 1)",
    opacity: 0.6800000071525574
  },
  View_366_2322: {
    width: wp("77.53623188405797%"),
    minWidth: wp("77.53623188405797%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.352657004830919%"),
    top: hp("125.95628415300546%"),
    justifyContent: "flex-start"
  },
  Text_366_2322: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_2323: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("31.830601092896178%"),
    minHeight: hp("31.830601092896178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1349260265700483%"),
    top: hp("55.32786885245902%"),
    resizeMode: "cover"
  },
  View_366_2324: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("31.967213114754102%"),
    minHeight: hp("31.967213114754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1349260265700483%"),
    top: hp("55.19125683060109%"),
    backgroundColor: "rgba(52, 58, 64, 1)",
    opacity: 0.6100000143051147
  },
  ImageBackground_366_2325: {
    width: wp("17.391304347826086%"),
    minWidth: wp("17.391304347826086%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.439273852657%"),
    top: hp("66.2568306010929%")
  },
  View_366_2328: {
    width: wp("87.68115942028986%"),
    minWidth: wp("87.68115942028986%"),
    minHeight: hp("21.584699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("90.30054644808743%"),
    justifyContent: "flex-start"
  },
  Text_366_2328: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2329: {
    width: wp("88.40579710144928%"),
    minWidth: wp("88.40579710144928%"),
    minHeight: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434782%"),
    top: hp("149.59016393442624%"),
    justifyContent: "flex-start"
  },
  Text_366_2329: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_2330: {
    width: wp("53.985507246376805%"),
    minWidth: wp("53.985507246376805%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("40.30054644808743%")
  },
  View_366_2331: {
    width: wp("91.06280193236715%"),
    minWidth: wp("91.06280193236715%"),
    minHeight: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("37.15846994535519%"),
    justifyContent: "flex-start"
  },
  Text_366_2331: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_2332: {
    width: wp("7.971014492753622%"),
    minWidth: wp("7.971014492753622%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.13526570048309%"),
    top: hp("143.0327868852459%")
  },
  View_366_2336: {
    width: wp("85.99033816425121%"),
    minWidth: wp("85.99033816425121%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("179.5081967213115%"),
    justifyContent: "flex-start"
  },
  Text_366_2336: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2337: {
    width: wp("39.85507246376812%"),
    minWidth: wp("39.85507246376812%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("196.72131147540983%"),
    justifyContent: "flex-start"
  },
  Text_366_2337: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_2338: {
    width: wp("45.893719806763286%"),
    minWidth: wp("45.893719806763286%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("200.6830601092896%")
  },
  View_366_2339: {
    width: wp("78.50241545893721%"),
    minWidth: wp("78.50241545893721%"),
    height: hp("35.65573770491803%"),
    minHeight: hp("35.65573770491803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.869565217391305%"),
    top: hp("203.68852459016392%")
  },
  View_366_2340: {
    width: wp("6.280193236714976%"),
    minWidth: wp("6.280193236714976%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8985507246376816%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_366_2340: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2341: {
    width: wp("9.420289855072465%"),
    minWidth: wp("9.420289855072465%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792547%"),
    justifyContent: "flex-start"
  },
  Text_366_2341: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2342: {
    width: wp("66.90821256038647%"),
    minWidth: wp("66.90821256038647%"),
    minHeight: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.594202898550723%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_366_2342: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2343: {
    width: wp("69.32367149758454%"),
    minWidth: wp("69.32367149758454%"),
    height: hp("17.349726775956285%"),
    minHeight: hp("17.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.07246376811594%"),
    top: hp("18.30601092896177%")
  },
  ImageBackground_366_2344: {
    width: wp("30.193236714975846%"),
    minWidth: wp("30.193236714975846%"),
    height: hp("17.349726775956285%"),
    minHeight: hp("17.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_366_2345: {
    width: wp("35.02415458937198%"),
    minWidth: wp("35.02415458937198%"),
    height: hp("11.61954285668545%"),
    minHeight: hp("11.61954285668545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.29951690821257%"),
    top: hp("2.865100297771505%")
  },
  View_366_2346: {
    width: wp("77.53623188405797%"),
    minWidth: wp("77.53623188405797%"),
    height: hp("29.78142076502732%"),
    minHeight: hp("29.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.352657004830919%"),
    top: hp("249.45355191256832%")
  },
  View_366_2347: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.89855072463768%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_366_2347: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2348: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "flex-start"
  },
  Text_366_2348: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2349: {
    width: wp("65.94202898550725%"),
    minWidth: wp("65.94202898550725%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.594202898550725%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_366_2349: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_2350: {
    width: wp("69.32367149758454%"),
    minWidth: wp("69.32367149758454%"),
    height: hp("14.89071038251366%"),
    minHeight: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.072463768115943%"),
    top: hp("14.890710382513674%")
  },
  View_366_2351: {
    width: wp("78.50241545893721%"),
    minWidth: wp("78.50241545893721%"),
    height: hp("60.38251366120219%"),
    minHeight: hp("60.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.628019323671497%"),
    top: hp("289.344262295082%")
  },
  View_366_2352: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8985507246376816%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_366_2352: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2353: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "flex-start"
  },
  Text_366_2353: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2354: {
    width: wp("64.97584541062803%"),
    minWidth: wp("64.97584541062803%"),
    minHeight: hp("25.546448087431695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.52657004830918%"),
    top: hp("0.819672131147513%"),
    justifyContent: "flex-start"
  },
  Text_366_2354: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_2355: {
    width: wp("69.32367149758454%"),
    minWidth: wp("69.32367149758454%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.072463768115943%"),
    top: hp("27.868852459016352%")
  },
  ImageBackground_366_2362: {
    width: wp("74.03381642512076%"),
    minWidth: wp("74.03381642512076%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.647342995169081%"),
    top: hp("244.39890710382514%")
  },
  ImageBackground_366_2363: {
    width: wp("74.03381642512076%"),
    minWidth: wp("74.03381642512076%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.647342995169081%"),
    top: hp("284.2896174863388%")
  },
  View_366_2364: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("384.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I366_2364_309_5: {
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
  View_I366_2364_309_31: {
    flexGrow: 1,
    width: wp("83.33333333333334%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("1.639344262295083%")
  },
  TouchableOpacity_I366_2364_309_27: {
    width: wp("7.729468599033816%"),
    height: hp("5.46448087431694%"),
    top: hp("0.13661202185795673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I366_2364_309_9: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I366_2364_309_23: {
    width: wp("7.729468599033816%"),
    top: hp("4.098360655737679%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I366_2364_309_23: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I366_2364_309_28: {
    width: wp("9.420289855072465%"),
    height: hp("5.46448087431694%"),
    top: hp("0.13661202185795673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.913043478260864%")
  },
  ImageBackground_I366_2364_309_13: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594288%")
  },
  View_I366_2364_309_24: {
    width: wp("9.420289855072465%"),
    top: hp("4.098360655737679%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I366_2364_309_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I366_2364_309_29: {
    width: wp("11.11111111111111%"),
    height: hp("5.46448087431694%"),
    top: hp("0.13661202185795673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.58454106280193%")
  },
  ImageBackground_I366_2364_309_21: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  View_I366_2364_309_25: {
    width: wp("11.11111111111111%"),
    top: hp("4.098360655737679%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I366_2364_309_25: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I366_2364_309_30: {
    width: wp("11.11111111111111%"),
    height: hp("5.56794046704235%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22222222222223%")
  },
  View_I366_2364_309_22: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  ImageBackground_I366_2364_309_17: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I366_2364_309_26: {
    width: wp("11.11111111111111%"),
    top: hp("4.20182024846315%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I366_2364_309_26: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I366_2364_309_82: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.57487922705314%"),
    top: hp("0.5464480874316564%")
  },
  ImageBackground_I366_2364_309_380: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.729468599033815%"),
    top: hp("0.5464480874316564%")
  },
  ImageBackground_I366_2364_309_459: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.3671497584541%"),
    top: hp("0.5464480874316564%")
  },
  ImageBackground_I366_2364_309_304: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.091787439613526%"),
    top: hp("0.5464480874316564%")
  },
  View_366_2366: {
    width: wp("84.00230223429952%"),
    minWidth: wp("84.00230223429952%"),
    height: hp("7.587203562585383%"),
    minHeight: hp("7.587203562585383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("366.8032786885246%")
  },
  View_366_2367: {
    width: wp("84.00230223429952%"),
    minWidth: wp("84.00230223429952%"),
    height: hp("7.450591540727459%"),
    minHeight: hp("7.450591540727459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218578999%")
  },
  View_366_2368: {
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
  Text_366_2368: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2369: {
    width: wp("42.010350618961354%"),
    minWidth: wp("42.010350618961354%"),
    minHeight: hp("1.9966500704405736%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.99183367300724%"),
    top: hp("0.46239967554646455%"),
    justifyContent: "flex-start"
  },
  Text_366_2369: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 9.692307472229004,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2370: {
    width: wp("40.95134642964976%"),
    minWidth: wp("40.95134642964976%"),
    minHeight: hp("2.795276746072404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.99183367300724%"),
    top: hp("4.655314794655055%"),
    justifyContent: "flex-start"
  },
  Text_366_2370: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 9.692307472229004,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_2371: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.57971014492753%")
  },
  ImageBackground_366_2374: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("4.234972677595636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.57971014492753%")
  },
  ImageBackground_366_2377: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("4.234972677595636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396148%")
  },
  ImageBackground_366_2380: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("4.234972677595636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.628019323671499%")
  },
  ImageBackground_366_2383: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("4.234972677595636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.772946859903385%")
  },
  ImageBackground_370_3603: {
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
  View_370_3632: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("37.15846994535519%"),
    minHeight: hp("37.15846994535519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(52, 58, 64, 1)"
  },
  ImageBackground_370_3605: {
    width: wp("74.60536496074879%"),
    minWidth: wp("74.60536496074879%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-11.700822765700483%"),
    top: hp("-14.89071038251366%")
  },
  ImageBackground_370_3611: {
    width: wp("41.5052036156401%"),
    minWidth: wp("41.5052036156401%"),
    height: hp("22.175122870773563%"),
    minHeight: hp("22.175122870773563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.35265700483091%"),
    top: hp("15.027322404371585%")
  },
  ImageBackground_370_3712: {
    width: wp("94.48513454861111%"),
    minWidth: wp("94.48513454861111%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2077294685990339%"),
    top: hp("-6.420765027322404%")
  },
  ImageBackground_370_3734: {
    width: wp("74.60536496074879%"),
    minWidth: wp("74.60536496074879%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9.66183574879227%"),
    top: hp("-22.404371584699454%")
  },
  ImageBackground_370_3740: {
    width: wp("94.48513454861111%"),
    minWidth: wp("94.48513454861111%"),
    height: hp("46.65655751045936%"),
    minHeight: hp("46.65655751045936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.98101600241546%"),
    top: hp("-21.44808743169399%")
  },
  ImageBackground_370_3626: {
    width: wp("74.60536496074879%"),
    minWidth: wp("74.60536496074879%"),
    height: hp("40.16511844155567%"),
    minHeight: hp("40.16511844155567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-14.009661835748794%"),
    top: hp("5.737704918032787%")
  },
  View_366_2311: {
    width: wp("52.41545893719807%"),
    minWidth: wp("52.41545893719807%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.83574879227053%"),
    top: hp("14.617486338797814%"),
    justifyContent: "flex-start"
  },
  Text_366_2311: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2313: {
    width: wp("42.48306348128019%"),
    height: hp("6.284393248010854%"),
    top: hp("21.857731720137465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.318840579710146%")
  },
  ImageBackground_366_2314: {
    width: wp("42.48306348128019%"),
    height: hp("6.284393248010854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_366_2321: {
    width: wp("13.526570048309178%"),
    minWidth: wp("13.526570048309178%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.106280193236714%"),
    top: hp("19.672131147540984%"),
    justifyContent: "flex-start"
  },
  Text_366_2321: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 51,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2359: {
    width: wp("5.072463768115942%"),
    minWidth: wp("5.072463768115942%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("16.39344262295082%")
  },
  View_366_2360: {
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
  ImageBackground_366_2361: {
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
  View_370_3633: {
    width: wp("92.99269229317633%"),
    minWidth: wp("92.99269229317633%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.625665194746377%"),
    top: hp("5.05464480874317%")
  },
  View_370_3638: {
    width: wp("92.99269229317633%"),
    minWidth: wp("92.99269229317633%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_I370_3638_309_905: {
    flexGrow: 1,
    width: wp("5.857841749698068%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.40983606557376984%")
  },
  TouchableOpacity_I370_3638_309_907: {
    flexGrow: 1,
    width: wp("19.512733054045896%"),
    height: hp("2.7323602978649038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.810377038043477%"),
    top: hp("0.40983606557376984%")
  },
  ImageBackground_I370_3638_309_908: {
    width: wp("19.512733054045896%"),
    height: hp("2.7323602978649038%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I370_3638_309_920: {
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
  View_I370_3638_309_920_309_916: {
    flexGrow: 1,
    width: wp("4.881515134359903%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.488163307669069%"),
    top: hp("0.27322404371584597%")
  },
  ImageBackground_I370_3638_309_920_309_917: {
    width: wp("4.881515134359903%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I370_3638_309_928: {
    flexGrow: 1,
    width: wp("5.857841749698068%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.56849618810386%"),
    top: hp("0%")
  },
  TouchableOpacity_I370_3638_309_934: {
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
