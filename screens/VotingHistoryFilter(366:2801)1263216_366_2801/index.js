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
      <View style={styles.View_366_2856} />
      <View style={styles.View_366_2857}>
        <Text style={styles.Text_366_2857}>Voting History</Text>
      </View>
      <View style={styles.View_366_2858}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9fb/a05b/3001b9a90a00d9261a19c286eee934af"
          }}
          style={styles.ImageBackground_366_2859}
        />
        <View style={styles.View_366_2860}>
          <Text style={styles.Text_366_2860}>Unity</Text>
        </View>
        <View style={styles.View_366_2861}>
          <Text style={styles.Text_366_2861}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_366_2862}>
          <Text style={styles.Text_366_2862}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_366_2863}>
          <Text style={styles.Text_366_2863}>06:53:20 GMT</Text>
        </View>
      </View>
      <View style={styles.View_366_2864} />
      <View style={styles.View_366_2865}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4af/9dfa/4f6ade66b228cdf6007184ce7a150e4f"
          }}
          style={styles.ImageBackground_366_2866}
        />
        <View style={styles.View_366_2867}>
          <Text style={styles.Text_366_2867}>We care</Text>
        </View>
        <View style={styles.View_366_2868}>
          <Text style={styles.Text_366_2868}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_366_2869}>
          <Text style={styles.Text_366_2869}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_366_2870}>
          <Text style={styles.Text_366_2870}>06:53:20 GMT</Text>
        </View>
      </View>
      <View style={styles.View_366_2871} />
      <View style={styles.View_366_2872}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b52/96bc/78e42a5564e1c47550258b5dc73c8932"
          }}
          style={styles.ImageBackground_366_2873}
        />
        <View style={styles.View_366_2874}>
          <Text style={styles.Text_366_2874}>Dream alive center</Text>
        </View>
        <View style={styles.View_366_2875}>
          <Text style={styles.Text_366_2875}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_366_2876}>
          <Text style={styles.Text_366_2876}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_366_2877}>
          <Text style={styles.Text_366_2877}>06:53:20 GMT</Text>
        </View>
      </View>
      <View style={styles.View_366_2878} />
      <View style={styles.View_366_2879}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c02f/ccbc/f9edf635bbfa24c1e5e1f274ec8226f2"
          }}
          style={styles.ImageBackground_366_2880}
        />
        <View style={styles.View_366_2881}>
          <Text style={styles.Text_366_2881}>Pro-life foundation</Text>
        </View>
        <View style={styles.View_366_2882}>
          <Text style={styles.Text_366_2882}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_366_2883}>
          <Text style={styles.Text_366_2883}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_366_2884}>
          <Text style={styles.Text_366_2884}>06:53:20 GMT</Text>
        </View>
      </View>
      <View style={styles.View_366_2885} />
      <View style={styles.View_366_2886}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b190/89ef/0c0efb03763390ea16bf7945f29d7461"
          }}
          style={styles.ImageBackground_366_2887}
        />
        <View style={styles.View_366_2888}>
          <Text style={styles.Text_366_2888}>Save life foundation</Text>
        </View>
        <View style={styles.View_366_2889}>
          <Text style={styles.Text_366_2889}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_366_2890}>
          <Text style={styles.Text_366_2890}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_366_2891}>
          <Text style={styles.Text_366_2891}>06:53:20 GMT</Text>
        </View>
      </View>
      <View style={styles.View_366_2892} />
      <View style={styles.View_366_2893}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/374d/3478/588d32cbdc949dcc5230ac0a3eff0712"
          }}
          style={styles.ImageBackground_366_2894}
        />
        <View style={styles.View_366_2895}>
          <Text style={styles.Text_366_2895}>Smile foundation</Text>
        </View>
        <View style={styles.View_366_2896}>
          <Text style={styles.Text_366_2896}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_366_2897}>
          <Text style={styles.Text_366_2897}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_366_2898}>
          <Text style={styles.Text_366_2898}>06:53:20 GMT</Text>
        </View>
      </View>
      <View style={styles.View_366_2899} />
      <View style={styles.View_366_2900}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47cc/bd02/0e65e2ed031d4e87749886ae6d10dabd"
          }}
          style={styles.ImageBackground_366_2901}
        />
        <View style={styles.View_366_2902}>
          <Text style={styles.Text_366_2902}>UDAY Foundation</Text>
        </View>
        <View style={styles.View_366_2903}>
          <Text style={styles.Text_366_2903}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_366_2904}>
          <Text style={styles.Text_366_2904}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_366_2905}>
          <Text style={styles.Text_366_2905}>06:53:20 GMT</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63be/d65d/61f35fcad9f02bcee5dc97a74823a118"
        }}
        style={styles.ImageBackground_366_2906}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63be/d65d/61f35fcad9f02bcee5dc97a74823a118"
        }}
        style={styles.ImageBackground_366_2907}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63be/d65d/61f35fcad9f02bcee5dc97a74823a118"
        }}
        style={styles.ImageBackground_366_2908}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63be/d65d/61f35fcad9f02bcee5dc97a74823a118"
        }}
        style={styles.ImageBackground_366_2909}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63be/d65d/61f35fcad9f02bcee5dc97a74823a118"
        }}
        style={styles.ImageBackground_366_2910}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63be/d65d/61f35fcad9f02bcee5dc97a74823a118"
        }}
        style={styles.ImageBackground_366_2911}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63be/d65d/61f35fcad9f02bcee5dc97a74823a118"
        }}
        style={styles.ImageBackground_366_2912}
      />
      <View style={styles.View_366_2913} />
      <View style={styles.View_366_2914}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f385/7d12/f911a7278fa6768d47fce6a637cbee6c"
          }}
          style={styles.ImageBackground_366_2915}
        />
        <View style={styles.View_366_2916}>
          <Text style={styles.Text_366_2916}>Goonj</Text>
        </View>
        <View style={styles.View_366_2917}>
          <Text style={styles.Text_366_2917}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_366_2918}>
          <Text style={styles.Text_366_2918}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_366_2919}>
          <Text style={styles.Text_366_2919}>06:53:20 GMT</Text>
        </View>
      </View>
      <View style={styles.View_366_2920} />
      <View style={styles.View_366_2921}>
        <Text style={styles.Text_366_2921}>#gdhd847595jnfh</Text>
      </View>
      <View style={styles.View_366_2922}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a22/bd51/d6319345765fa9626768241854410cf9"
          }}
          style={styles.ImageBackground_366_2923}
        />
        <View style={styles.View_366_2924}>
          <Text style={styles.Text_366_2924}>Doctors with borders</Text>
        </View>
        <View style={styles.View_366_2925}>
          <Text style={styles.Text_366_2925}>21st Aug, 2021</Text>
        </View>
      </View>
      <View style={styles.View_366_2926}>
        <Text style={styles.Text_366_2926}>06:53:20 GMT</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63be/d65d/61f35fcad9f02bcee5dc97a74823a118"
        }}
        style={styles.ImageBackground_366_2927}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4996/1674/b1bd3a7de6dd3dcd8d9732f8bc088ff5"
        }}
        style={styles.ImageBackground_366_2931}
      />
      <View style={styles.View_366_2943}>
        <Text style={styles.Text_366_2943}>Advance Filter</Text>
      </View>
      <View style={styles.View_366_2945} />
      <View style={styles.View_366_3013}>
        <View style={styles.View_I366_3013_309_5} />
        <View style={styles.View_I366_3013_309_31}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I366_3013_309_27}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("84_296"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/976c/0ce9/9210d0604147826b21cd34337293bc7a"
              }}
              style={styles.ImageBackground_I366_3013_309_9}
            />
            <View style={styles.View_I366_3013_309_23}>
              <Text style={styles.Text_I366_3013_309_23}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I366_3013_309_28}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("395_4045"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/885e/bc12/997de7d2815db6dfc110ec854b91e9af"
              }}
              style={styles.ImageBackground_I366_3013_309_13}
            />
            <View style={styles.View_I366_3013_309_24}>
              <Text style={styles.Text_I366_3013_309_24}>Payment</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I366_3013_309_29}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("91_1327"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e02/16c0/beecfd4f830eb0967f9bc6b64c64324a"
              }}
              style={styles.ImageBackground_I366_3013_309_21}
            />
            <View style={styles.View_I366_3013_309_25}>
              <Text style={styles.Text_I366_3013_309_25}>Categories</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.View_I366_3013_309_30}>
            <View style={styles.View_I366_3013_309_22}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6557/66a8/3b7edc92dd873af83ddbb751e88f5920"
                }}
                style={styles.ImageBackground_I366_3013_309_17}
              />
            </View>
            <View style={styles.View_I366_3013_309_26}>
              <Text style={styles.Text_I366_3013_309_26}>Profile</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I366_3013_309_82}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I366_3013_309_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a6/168b/f07b1d4ab3c24a4549e185c706367dc7"
          }}
          style={styles.ImageBackground_I366_3013_309_459}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I366_3013_309_304}
        />
      </View>
      <View style={styles.View_366_2946}>
        <View style={styles.View_366_2947} />
        <View style={styles.View_366_2948}>
          <Text style={styles.Text_366_2948}>Advance Filter</Text>
        </View>
        <View style={styles.View_366_2949}>
          <View style={styles.View_366_2950}>
            <View style={styles.View_366_2951}>
              <View style={styles.View_366_2952} />
              <View style={styles.View_366_2953}>
                <Text style={styles.Text_366_2953}>
                  Search By Transaction Hash, Project Name
                </Text>
              </View>
              <View style={styles.View_366_2954}>
                <Text style={styles.Text_366_2954}>
                  Please select a date !!
                </Text>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30e9/1435/bc19c44a8ba6986f170a02603311a883"
            }}
            style={styles.ImageBackground_366_2955}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_366_2960}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("366_2588"))
          }
        >
          <View style={styles.View_366_2961} />
          <View style={styles.View_366_2962}>
            <Text style={styles.Text_366_2962}>Apply</Text>
          </View>
          <View style={styles.View_366_2963} />
          <View style={styles.View_366_2964}>
            <Text style={styles.Text_366_2964}>Cancel</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_366_2965}>
          <View style={styles.View_366_2966}>
            <Text style={styles.Text_366_2966}>Search by Date</Text>
          </View>
          <View style={styles.View_366_2967}>
            <View style={styles.View_366_2968}>
              <View style={styles.View_366_2969} />
            </View>
          </View>
          <View style={styles.View_366_2970}>
            <View style={styles.View_366_2971}>
              <View style={styles.View_366_2972} />
            </View>
          </View>
          <View style={styles.View_366_2973}>
            <Text style={styles.Text_366_2973}>From</Text>
          </View>
          <View style={styles.View_366_2974}>
            <Text style={styles.Text_366_2974}>To</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21a7/16b1/3c295f095b750b99eb6cdae649489ae2"
            }}
            style={styles.ImageBackground_366_2975}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21a7/16b1/3c295f095b750b99eb6cdae649489ae2"
            }}
            style={styles.ImageBackground_366_2984}
          />
        </View>
        <View style={styles.View_366_2993}>
          <View style={styles.View_366_2994}>
            <Text style={styles.Text_366_2994}>Search by Time</Text>
          </View>
          <View style={styles.View_366_2995}>
            <View style={styles.View_366_2996}>
              <View style={styles.View_366_2997} />
            </View>
          </View>
          <View style={styles.View_366_2998}>
            <View style={styles.View_366_2999}>
              <View style={styles.View_366_3000} />
            </View>
          </View>
          <View style={styles.View_366_3001}>
            <Text style={styles.Text_366_3001}>From</Text>
          </View>
          <View style={styles.View_366_3002}>
            <Text style={styles.Text_366_3002}>To</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a236/3014/7432c61ae10bc1eaeef174f019ffb526"
            }}
            style={styles.ImageBackground_366_3003}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a236/3014/7432c61ae10bc1eaeef174f019ffb526"
            }}
            style={styles.ImageBackground_366_3008}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07a4/c76d/db01535ba069fb5065857918e3d1fb12"
        }}
        style={styles.ImageBackground_370_3516}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0d8/7dd6/530d4cf8826c37d9bb91eca7bbe42ee4"
        }}
        style={styles.ImageBackground_370_3517}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d64a/01ab/6eab8adb9f01b331fa467106198df05d"
        }}
        style={styles.ImageBackground_370_3518}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adcc/d23c/e9664a125a8e7e5f1116735e6d101d3e"
        }}
        style={styles.ImageBackground_370_3524}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a321/b71d/afd0098df65c959e199b188d9917a422"
        }}
        style={styles.ImageBackground_370_3531}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d64a/01ab/6eab8adb9f01b331fa467106198df05d"
        }}
        style={styles.ImageBackground_370_3539}
      />
      <View style={styles.View_370_3545} />
      <View style={styles.View_370_3546}>
        <View style={styles.View_370_3547}>
          <Text style={styles.Text_370_3547}>Hello, Amanda !!</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_370_3548}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("366_2387"))
          }
        >
          <View style={styles.View_370_3549} />
          <View style={styles.View_370_3550}>
            <Text style={styles.Text_370_3550}>Edit</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_370_3551}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/351b/a363/c05d32e2bc69beaca145ba9477097ace"
            }}
            style={styles.ImageBackground_I370_3551_309_905}
          />
          <View style={styles.View_I370_3551_309_907}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5941/ff05/3edac74491b2df1452020b35c38a7db7"
              }}
              style={styles.ImageBackground_I370_3551_309_908}
            />
          </View>
          <View style={styles.View_I370_3551_309_920}>
            <View style={styles.View_I370_3551_309_920_309_916}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09cf/84fe/62b350b3fc309d6e7b062a2ed623c019"
                }}
                style={styles.ImageBackground_I370_3551_309_920_309_917}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13f3/e564/2658f2adf85f9bd65981cd9de1eb92ab"
            }}
            style={styles.ImageBackground_I370_3551_309_928}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d93/5921/18500cef42bfd4bb09341712035bbd12"
            }}
            style={styles.ImageBackground_I370_3551_309_934}
          />
        </View>
      </View>
      <View style={styles.View_370_3552}>
        <View style={styles.View_370_3553} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2303/11f9/c4de385f7b30ae1a2b80f690d5cee771"
          }}
          style={styles.ImageBackground_370_3554}
        />
      </View>
      <View style={styles.View_370_3580} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_366_2856: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.67213114754098%"),
    backgroundColor: "rgba(251, 251, 251, 1)"
  },
  View_366_2857: {
    width: wp("90.57971014492753%"),
    minWidth: wp("90.57971014492753%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3478260869565215%"),
    top: hp("38.114754098360656%"),
    justifyContent: "flex-start"
  },
  Text_366_2857: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2858: {
    width: wp("84.29951690821255%"),
    minWidth: wp("84.29951690821255%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("45.08196721311475%")
  },
  ImageBackground_366_2859: {
    width: wp("23.67149758454106%"),
    minWidth: wp("23.67149758454106%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_366_2860: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.536231884057976%"),
    top: hp("1.5027322404371617%"),
    justifyContent: "flex-start"
  },
  Text_366_2860: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2861: {
    width: wp("28.502415458937197%"),
    minWidth: wp("28.502415458937197%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.536231884057976%"),
    top: hp("3.961748633879786%"),
    justifyContent: "flex-start"
  },
  Text_366_2861: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2862: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.04347826086957%"),
    top: hp("1.5027322404371617%"),
    justifyContent: "flex-start"
  },
  Text_366_2862: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2863: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.04347826086957%"),
    top: hp("3.961748633879786%"),
    justifyContent: "flex-start"
  },
  Text_366_2863: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2864: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("52.732240437158474%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_366_2865: {
    width: wp("84.29951690821255%"),
    minWidth: wp("84.29951690821255%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("53.14207650273224%")
  },
  ImageBackground_366_2866: {
    width: wp("23.67149758454106%"),
    minWidth: wp("23.67149758454106%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_366_2867: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.536231884057976%"),
    top: hp("1.5027322404371688%"),
    justifyContent: "flex-start"
  },
  Text_366_2867: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2868: {
    width: wp("28.502415458937197%"),
    minWidth: wp("28.502415458937197%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.536231884057976%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_366_2868: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2869: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.04347826086957%"),
    top: hp("1.5027322404371688%"),
    justifyContent: "flex-start"
  },
  Text_366_2869: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2870: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.04347826086957%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_366_2870: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2871: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60.79234972677595%"),
    backgroundColor: "rgba(251, 251, 251, 1)"
  },
  View_366_2872: {
    width: wp("84.29951690821255%"),
    minWidth: wp("84.29951690821255%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("61.20218579234973%")
  },
  ImageBackground_366_2873: {
    width: wp("23.67149758454106%"),
    minWidth: wp("23.67149758454106%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_366_2874: {
    width: wp("44.20289855072464%"),
    minWidth: wp("44.20289855072464%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.536231884057976%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_366_2874: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2875: {
    width: wp("28.502415458937197%"),
    minWidth: wp("28.502415458937197%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.536231884057976%"),
    top: hp("3.961748633879772%"),
    justifyContent: "flex-start"
  },
  Text_366_2875: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2876: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.04347826086957%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_366_2876: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2877: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.04347826086957%"),
    top: hp("3.961748633879772%"),
    justifyContent: "flex-start"
  },
  Text_366_2877: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2878: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68.85245901639344%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_366_2879: {
    width: wp("84.29951690821255%"),
    minWidth: wp("84.29951690821255%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("69.26229508196722%")
  },
  ImageBackground_366_2880: {
    width: wp("23.67149758454106%"),
    minWidth: wp("23.67149758454106%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_366_2881: {
    width: wp("30.676328502415455%"),
    minWidth: wp("30.676328502415455%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.536231884057976%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_366_2881: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2882: {
    width: wp("28.502415458937197%"),
    minWidth: wp("28.502415458937197%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.536231884057976%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_366_2882: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2883: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.04347826086957%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_366_2883: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2884: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.04347826086957%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_366_2884: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2885: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("76.91256830601093%"),
    backgroundColor: "rgba(251, 251, 251, 1)"
  },
  View_366_2886: {
    width: wp("84.29951690821255%"),
    minWidth: wp("84.29951690821255%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("77.3224043715847%")
  },
  ImageBackground_366_2887: {
    width: wp("23.67149758454106%"),
    minWidth: wp("23.67149758454106%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_366_2888: {
    width: wp("31.40096618357488%"),
    minWidth: wp("31.40096618357488%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.536231884057976%"),
    top: hp("1.5027322404371688%"),
    justifyContent: "flex-start"
  },
  Text_366_2888: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2889: {
    width: wp("28.502415458937197%"),
    minWidth: wp("28.502415458937197%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.536231884057976%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_366_2889: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2890: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.04347826086957%"),
    top: hp("1.5027322404371688%"),
    justifyContent: "flex-start"
  },
  Text_366_2890: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2891: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.04347826086957%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_366_2891: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2892: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("84.97267759562843%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_366_2893: {
    width: wp("84.29951690821255%"),
    minWidth: wp("84.29951690821255%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("85.38251366120218%")
  },
  ImageBackground_366_2894: {
    width: wp("23.67149758454106%"),
    minWidth: wp("23.67149758454106%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_366_2895: {
    width: wp("30.193236714975846%"),
    minWidth: wp("30.193236714975846%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.536231884057976%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_366_2895: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2896: {
    width: wp("28.502415458937197%"),
    minWidth: wp("28.502415458937197%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.536231884057976%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_366_2896: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2897: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.04347826086957%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_366_2897: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2898: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.04347826086957%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_366_2898: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2899: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("93.0327868852459%"),
    backgroundColor: "rgba(251, 251, 251, 1)"
  },
  View_366_2900: {
    width: wp("84.29951690821255%"),
    minWidth: wp("84.29951690821255%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("93.44262295081968%")
  },
  ImageBackground_366_2901: {
    width: wp("23.67149758454106%"),
    minWidth: wp("23.67149758454106%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_366_2902: {
    width: wp("33.091787439613526%"),
    minWidth: wp("33.091787439613526%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.536231884057976%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_366_2902: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2903: {
    width: wp("28.502415458937197%"),
    minWidth: wp("28.502415458937197%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.536231884057976%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_366_2903: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2904: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.04347826086957%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_366_2904: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2905: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.04347826086957%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_366_2905: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_2906: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("52.732240437158474%")
  },
  ImageBackground_366_2907: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.67213114754098%")
  },
  ImageBackground_366_2908: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60.79234972677595%")
  },
  ImageBackground_366_2909: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68.85245901639344%")
  },
  ImageBackground_366_2910: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("76.91256830601093%")
  },
  ImageBackground_366_2911: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("84.97267759562843%")
  },
  ImageBackground_366_2912: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("93.0327868852459%")
  },
  View_366_2913: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("101.09289617486338%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_366_2914: {
    width: wp("84.29951690821255%"),
    minWidth: wp("84.29951690821255%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("101.50273224043715%")
  },
  ImageBackground_366_2915: {
    width: wp("23.67149758454106%"),
    minWidth: wp("23.67149758454106%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_366_2916: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.536231884057976%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_366_2916: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2917: {
    width: wp("28.502415458937197%"),
    minWidth: wp("28.502415458937197%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.536231884057976%"),
    top: hp("3.961748633879793%"),
    justifyContent: "flex-start"
  },
  Text_366_2917: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2918: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.04347826086957%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_366_2918: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2919: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.04347826086957%"),
    top: hp("3.961748633879793%"),
    justifyContent: "flex-start"
  },
  Text_366_2919: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2920: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("109.15300546448088%"),
    backgroundColor: "rgba(251, 251, 251, 1)"
  },
  View_366_2921: {
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
  Text_366_2921: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2922: {
    width: wp("84.29951690821255%"),
    minWidth: wp("84.29951690821255%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("109.56284153005464%")
  },
  ImageBackground_366_2923: {
    width: wp("23.67149758454106%"),
    minWidth: wp("23.67149758454106%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_366_2924: {
    width: wp("33.091787439613526%"),
    minWidth: wp("33.091787439613526%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.536231884057976%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_366_2924: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2925: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.04347826086957%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_366_2925: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2926: {
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
  Text_366_2926: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_2927: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("109.15300546448088%")
  },
  ImageBackground_366_2931: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("38.52459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.28985507246377%")
  },
  View_366_2943: {
    width: wp("20.77294685990338%"),
    minWidth: wp("20.77294685990338%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.39613526570048%"),
    top: hp("38.52459016393443%"),
    justifyContent: "flex-start"
  },
  Text_366_2943: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2945: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.44999998807907104
  },
  View_366_3013: {
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
  View_I366_3013_309_5: {
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
  View_I366_3013_309_31: {
    flexGrow: 1,
    width: wp("83.33333333333334%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("1.639344262295083%")
  },
  TouchableOpacity_I366_3013_309_27: {
    width: wp("7.729468599033816%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I366_3013_309_9: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I366_3013_309_23: {
    width: wp("7.729468599033816%"),
    top: hp("4.0983606557377215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I366_3013_309_23: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I366_3013_309_28: {
    width: wp("9.420289855072465%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.913043478260864%")
  },
  ImageBackground_I366_3013_309_13: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594288%")
  },
  View_I366_3013_309_24: {
    width: wp("9.420289855072465%"),
    top: hp("4.0983606557377215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I366_3013_309_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I366_3013_309_29: {
    width: wp("11.11111111111111%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.58454106280193%")
  },
  ImageBackground_I366_3013_309_21: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  View_I366_3013_309_25: {
    width: wp("11.11111111111111%"),
    top: hp("4.0983606557377215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I366_3013_309_25: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I366_3013_309_30: {
    width: wp("11.11111111111111%"),
    height: hp("5.56794046704235%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22222222222223%")
  },
  View_I366_3013_309_22: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  ImageBackground_I366_3013_309_17: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I366_3013_309_26: {
    width: wp("11.11111111111111%"),
    top: hp("4.201820248463122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I366_3013_309_26: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I366_3013_309_82: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.57487922705314%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I366_3013_309_380: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.729468599033815%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I366_3013_309_459: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.3671497584541%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I366_3013_309_304: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.091787439613526%"),
    top: hp("0.546448087431699%")
  },
  View_366_2946: {
    width: wp("74.39613526570048%"),
    minWidth: wp("74.39613526570048%"),
    height: hp("58.7431693989071%"),
    minHeight: hp("58.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.318840579710146%"),
    top: hp("38.114754098360656%")
  },
  View_366_2947: {
    width: wp("74.39613526570048%"),
    minWidth: wp("74.39613526570048%"),
    height: hp("58.7431693989071%"),
    minHeight: hp("58.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_366_2948: {
    width: wp("41.06280193236715%"),
    minWidth: wp("41.06280193236715%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314007%"),
    top: hp("3.415300546448087%"),
    justifyContent: "flex-start"
  },
  Text_366_2948: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2949: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("28.96174863387978%"),
    minHeight: hp("28.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.07246376811594%"),
    top: hp("9.56284153005464%")
  },
  View_366_2950: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("28.96174863387978%"),
    minHeight: hp("28.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_366_2951: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("28.96174863387978%"),
    minHeight: hp("28.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_366_2952: {
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
  View_366_2953: {
    width: wp("40.82125603864734%"),
    minWidth: wp("40.82125603864734%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%"),
    top: hp("2.0491803278688536%"),
    justifyContent: "flex-start"
  },
  Text_366_2953: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 6,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2954: {
    width: wp("20.28985507246377%"),
    minWidth: wp("20.28985507246377%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.961352657004824%"),
    top: hp("27.595628415300546%"),
    justifyContent: "flex-start"
  },
  Text_366_2954: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 6,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_2955: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.03864734299517%")
  },
  TouchableOpacity_366_2960: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.07246376811594%"),
    top: hp("45.08196721311476%")
  },
  View_366_2961: {
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
  View_366_2962: {
    width: wp("18.590424026268117%"),
    minWidth: wp("18.590424026268117%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.93503736413043%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "flex-start"
  },
  Text_366_2962: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2963: {
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
  View_366_2964: {
    width: wp("18.590424026268117%"),
    minWidth: wp("18.590424026268117%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.114753170289855%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "flex-start"
  },
  Text_366_2964: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2965: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.07246376811594%"),
    top: hp("16.666666666666664%")
  },
  View_366_2966: {
    width: wp("40.82125603864734%"),
    minWidth: wp("40.82125603864734%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_366_2966: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2967: {
    width: wp("27.77777777777778%"),
    minWidth: wp("27.77777777777778%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.415300546448087%")
  },
  View_366_2968: {
    width: wp("27.77777777777778%"),
    minWidth: wp("27.77777777777778%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_366_2969: {
    width: wp("27.77777777777778%"),
    minWidth: wp("27.77777777777778%"),
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
  View_366_2970: {
    width: wp("27.77777777777778%"),
    minWidth: wp("27.77777777777778%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.71497584541063%"),
    top: hp("3.415300546448087%")
  },
  View_366_2971: {
    width: wp("27.77777777777778%"),
    minWidth: wp("27.77777777777778%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_366_2972: {
    width: wp("27.77777777777778%"),
    minWidth: wp("27.77777777777778%"),
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
  View_366_2973: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%"),
    top: hp("5.4644808743169335%"),
    justifyContent: "flex-start"
  },
  Text_366_2973: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 6,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2974: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.61352657004831%"),
    top: hp("5.4644808743169335%"),
    justifyContent: "flex-start"
  },
  Text_366_2974: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 6,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_2975: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.289855072463773%")
  },
  ImageBackground_366_2984: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.521739130434774%")
  },
  View_366_2993: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.07246376811594%"),
    top: hp("27.185792349726775%")
  },
  View_366_2994: {
    width: wp("40.82125603864734%"),
    minWidth: wp("40.82125603864734%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_366_2994: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_2995: {
    width: wp("27.77777777777778%"),
    minWidth: wp("27.77777777777778%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.415300546448094%")
  },
  View_366_2996: {
    width: wp("27.77777777777778%"),
    minWidth: wp("27.77777777777778%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_366_2997: {
    width: wp("27.77777777777778%"),
    minWidth: wp("27.77777777777778%"),
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
  View_366_2998: {
    width: wp("27.77777777777778%"),
    minWidth: wp("27.77777777777778%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.71497584541063%"),
    top: hp("3.415300546448094%")
  },
  View_366_2999: {
    width: wp("27.77777777777778%"),
    minWidth: wp("27.77777777777778%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_366_3000: {
    width: wp("27.77777777777778%"),
    minWidth: wp("27.77777777777778%"),
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
  View_366_3001: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%"),
    top: hp("5.464480874316948%"),
    justifyContent: "flex-start"
  },
  Text_366_3001: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 6,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_366_3002: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.61352657004831%"),
    top: hp("5.464480874316948%"),
    justifyContent: "flex-start"
  },
  Text_366_3002: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 6,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_366_3003: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("5.054644808743163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.289855072463773%")
  },
  ImageBackground_366_3008: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("5.054644808743163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.521739130434774%")
  },
  ImageBackground_370_3516: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("37.15846994535519%"),
    minHeight: hp("37.15846994535519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980675%"),
    top: hp("0%")
  },
  ImageBackground_370_3517: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("37.15846994535519%"),
    minHeight: hp("37.15846994535519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980675%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_370_3518: {
    width: wp("74.60536496074879%"),
    minWidth: wp("74.60536496074879%"),
    height: hp("40.16510176528347%"),
    minHeight: hp("40.16510176528347%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-11.94236865942029%"),
    top: hp("-17.349726775956285%")
  },
  ImageBackground_370_3524: {
    width: wp("77.6881416062802%"),
    minWidth: wp("77.6881416062802%"),
    height: hp("41.50660780609631%"),
    minHeight: hp("41.50660780609631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.97501509661836%"),
    top: hp("0.8379159729337431%")
  },
  ImageBackground_370_3531: {
    width: wp("94.48513454861111%"),
    minWidth: wp("94.48513454861111%"),
    height: hp("46.65657418673156%"),
    minHeight: hp("46.65657418673156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.743112167874397%"),
    top: hp("2.8688524590163933%")
  },
  ImageBackground_370_3539: {
    width: wp("74.60536496074879%"),
    minWidth: wp("74.60536496074879%"),
    height: hp("40.16510176528347%"),
    minHeight: hp("40.16510176528347%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-15.70048309178744%"),
    top: hp("3.278688524590164%")
  },
  View_370_3545: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("37.15846994535519%"),
    minHeight: hp("37.15846994535519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980675%"),
    top: hp("0%")
  },
  View_370_3546: {
    width: wp("93.23671497584542%"),
    minWidth: wp("93.23671497584542%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6231884057971016%"),
    top: hp("6.557377049180328%")
  },
  View_370_3547: {
    width: wp("52.96436254528986%"),
    minWidth: wp("52.96436254528986%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753623%"),
    top: hp("7.377049180327868%"),
    justifyContent: "flex-start"
  },
  Text_370_3547: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_370_3548: {
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
  View_370_3549: {
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
  View_370_3550: {
    width: wp("33.68232469051932%"),
    minWidth: wp("33.68232469051932%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.440698596014493%"),
    top: hp("1.3661202185792334%"),
    justifyContent: "flex-start"
  },
  Text_370_3550: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_3551: {
    width: wp("92.99269229317633%"),
    minWidth: wp("92.99269229317633%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2440226826690819%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I370_3551_309_905: {
    flexGrow: 1,
    width: wp("5.857841749698068%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.40983606557376984%")
  },
  View_I370_3551_309_907: {
    flexGrow: 1,
    width: wp("19.512733054045896%"),
    height: hp("2.7323738473360657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8103770380434785%"),
    top: hp("0.40983606557376984%")
  },
  ImageBackground_I370_3551_309_908: {
    width: wp("19.512733054045896%"),
    height: hp("2.7323738473360657%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I370_3551_309_920: {
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
  View_I370_3551_309_920_309_916: {
    flexGrow: 1,
    width: wp("4.881515134359903%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.488163307669069%"),
    top: hp("0.27322404371584774%")
  },
  ImageBackground_I370_3551_309_920_309_917: {
    width: wp("4.881515134359903%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I370_3551_309_928: {
    flexGrow: 1,
    width: wp("5.857841749698068%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.56849618810386%"),
    top: hp("0%")
  },
  ImageBackground_I370_3551_309_934: {
    flexGrow: 1,
    width: wp("5.857841749698068%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.13485054347827%"),
    top: hp("0%")
  },
  View_370_3552: {
    width: wp("5.072463768115942%"),
    minWidth: wp("5.072463768115942%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("15.573770491803279%")
  },
  View_370_3553: {
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
  ImageBackground_370_3554: {
    width: wp("2.8126887077294684%"),
    minWidth: wp("2.8126887077294684%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2077294685990339%"),
    top: hp("0.27322404371584774%")
  },
  View_370_3580: {
    width: wp("100.72463768115942%"),
    minWidth: wp("100.72463768115942%"),
    height: hp("37.56830601092896%"),
    minHeight: hp("37.56830601092896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.7246376811594203%"),
    top: hp("0.1366120218579235%"),
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
