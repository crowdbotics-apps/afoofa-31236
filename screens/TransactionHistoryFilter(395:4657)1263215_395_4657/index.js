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
      <View style={styles.View_395_4658}>
        <Text style={styles.Text_395_4658}>Complete</Text>
      </View>
      <View style={styles.View_395_4659}>
        <Text style={styles.Text_395_4659}>$ 100</Text>
      </View>
      <View style={styles.View_395_4660}>
        <Text style={styles.Text_395_4660}>$ 100</Text>
      </View>
      <View style={styles.View_395_4661}>
        <Text style={styles.Text_395_4661}>$ 100</Text>
      </View>
      <View style={styles.View_395_4662}>
        <View style={styles.View_395_4663}>
          <Text style={styles.Text_395_4663}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_395_4664}>
          <Text style={styles.Text_395_4664}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_395_4665}>
          <Text style={styles.Text_395_4665}>06:53:20 GMT</Text>
        </View>
      </View>
      <View style={styles.View_395_4666}>
        <View style={styles.View_395_4667}>
          <Text style={styles.Text_395_4667}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_395_4668}>
          <Text style={styles.Text_395_4668}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_395_4669}>
          <Text style={styles.Text_395_4669}>06:53:20 GMT</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7463/9666/f3dbe0b777ed49fecb4ead5afa85c7dd"
        }}
        style={styles.ImageBackground_395_4670}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7463/9666/f3dbe0b777ed49fecb4ead5afa85c7dd"
        }}
        style={styles.ImageBackground_395_4671}
      />
      <View style={styles.View_395_4672}>
        <View style={styles.View_395_4673}>
          <Text style={styles.Text_395_4673}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_395_4674}>
          <Text style={styles.Text_395_4674}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_395_4675}>
          <Text style={styles.Text_395_4675}>06:53:20 GMT</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7463/9666/f3dbe0b777ed49fecb4ead5afa85c7dd"
        }}
        style={styles.ImageBackground_395_4676}
      />
      <View style={styles.View_395_4677} />
      <View style={styles.View_395_4678}>
        <Text style={styles.Text_395_4678}>#gdhd847595jnfh</Text>
      </View>
      <View style={styles.View_395_4679}>
        <Text style={styles.Text_395_4679}>06:53:20 GMT</Text>
      </View>
      <View style={styles.View_395_4680}>
        <View style={styles.View_I395_4680_309_5} />
        <View style={styles.View_I395_4680_309_31}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I395_4680_309_27}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("84_296"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/976c/0ce9/9210d0604147826b21cd34337293bc7a"
              }}
              style={styles.ImageBackground_I395_4680_309_9}
            />
            <View style={styles.View_I395_4680_309_23}>
              <Text style={styles.Text_I395_4680_309_23}>Home</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.View_I395_4680_309_28}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c081/5bf7/2b549586063c1cb7450f9cd24fca23c3"
              }}
              style={styles.ImageBackground_I395_4680_309_13}
            />
            <View style={styles.View_I395_4680_309_24}>
              <Text style={styles.Text_I395_4680_309_24}>Payment</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I395_4680_309_29}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("91_1327"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e02/16c0/beecfd4f830eb0967f9bc6b64c64324a"
              }}
              style={styles.ImageBackground_I395_4680_309_21}
            />
            <View style={styles.View_I395_4680_309_25}>
              <Text style={styles.Text_I395_4680_309_25}>Categories</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I395_4680_309_30}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("366_2056"))
            }
          >
            <View style={styles.View_I395_4680_309_22}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e78a/f2e8/65d02d5776406a7cb63ff6df1140761a"
                }}
                style={styles.ImageBackground_I395_4680_309_17}
              />
            </View>
            <View style={styles.View_I395_4680_309_26}>
              <Text style={styles.Text_I395_4680_309_26}>Profile</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I395_4680_309_82}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I395_4680_309_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ad/af03/6e78cd3e31b029987759cf517304ffaf"
          }}
          style={styles.ImageBackground_I395_4680_309_459}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a6/168b/f07b1d4ab3c24a4549e185c706367dc7"
          }}
          style={styles.ImageBackground_I395_4680_309_304}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/608b/d282/3f52315d6d4316e45a84752225f2632f"
        }}
        style={styles.ImageBackground_395_4681}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7eed/e5e9/02698dee1c5073986e54d17e7c62c827"
        }}
        style={styles.ImageBackground_395_4687}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f3/3001/129bc25006c4803820f2c8a587193e34"
        }}
        style={styles.ImageBackground_395_4694}
      />
      <View style={styles.View_395_4700}>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e3f/deee/44d222dda2d057444ed53cc817bf9c36"
          }}
          style={styles.TouchableOpacity_I395_4700_309_905}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("370_3782"))
          }
        />
        <View style={styles.View_I395_4700_309_907}>
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e687/1aeb/51fe8bba2fec823fe6046aa2fd76e005"
            }}
            style={styles.TouchableOpacity_I395_4700_309_908}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("84_296"))
            }
          />
        </View>
        <View style={styles.View_I395_4700_309_920}>
          <View style={styles.View_I395_4700_309_920_309_916}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ec0/6a88/c027f71c44876580f3e2e99a2c61b1cd"
              }}
              style={styles.ImageBackground_I395_4700_309_920_309_917}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8afc/7ef8/e70dbca284eefa64ba40a3bd3ae2d50d"
          }}
          style={styles.ImageBackground_I395_4700_309_928}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ca6/aaf5/eaf45ad3769c1164eca186d119f3e61d"
          }}
          style={styles.ImageBackground_I395_4700_309_934}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09f6/02c9/bd45b7f0c548d97e3a9e1b0b04881113"
        }}
        style={styles.ImageBackground_395_4701}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_395_4702}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("395_4045"))
        }
      >
        <Text style={styles.Text_395_4702}>Dodate</Text>
      </TouchableOpacity>
      <View style={styles.View_395_4703}>
        <Text style={styles.Text_395_4703}>Transactions</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1353/5548/bd6489abf2ed96fcf9c96c16f30a21e2"
        }}
        style={styles.ImageBackground_395_4704}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/860c/71c8/818538e5557dfb895d489b2fb6f9ff0b"
        }}
        style={styles.ImageBackground_395_4705}
      />
      <View style={styles.View_395_4706}>
        <View style={styles.View_395_4707}>
          <Text style={styles.Text_395_4707}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_395_4708}>
          <Text style={styles.Text_395_4708}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_395_4709}>
          <Text style={styles.Text_395_4709}>06:53:20 GMT</Text>
        </View>
      </View>
      <View style={styles.View_395_4710}>
        <View style={styles.View_395_4711}>
          <Text style={styles.Text_395_4711}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_395_4712}>
          <Text style={styles.Text_395_4712}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_395_4713}>
          <Text style={styles.Text_395_4713}>06:53:20 GMT</Text>
        </View>
      </View>
      <View style={styles.View_395_4714}>
        <View style={styles.View_395_4715}>
          <Text style={styles.Text_395_4715}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_395_4716}>
          <Text style={styles.Text_395_4716}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_395_4717}>
          <Text style={styles.Text_395_4717}>06:53:20 GMT</Text>
        </View>
      </View>
      <View style={styles.View_395_4718}>
        <View style={styles.View_395_4719}>
          <Text style={styles.Text_395_4719}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_395_4720}>
          <Text style={styles.Text_395_4720}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_395_4721}>
          <Text style={styles.Text_395_4721}>06:53:20 GMT</Text>
        </View>
      </View>
      <View style={styles.View_395_4722}>
        <View style={styles.View_395_4723}>
          <Text style={styles.Text_395_4723}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_395_4724}>
          <Text style={styles.Text_395_4724}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_395_4725}>
          <Text style={styles.Text_395_4725}>06:53:20 GMT</Text>
        </View>
      </View>
      <View style={styles.View_395_4726}>
        <View style={styles.View_395_4727}>
          <Text style={styles.Text_395_4727}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_395_4728}>
          <Text style={styles.Text_395_4728}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_395_4729}>
          <Text style={styles.Text_395_4729}>06:53:20 GMT</Text>
        </View>
      </View>
      <View style={styles.View_395_4730}>
        <View style={styles.View_395_4731}>
          <Text style={styles.Text_395_4731}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_395_4732}>
          <Text style={styles.Text_395_4732}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_395_4733}>
          <Text style={styles.Text_395_4733}>06:53:20 GMT</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7463/9666/f3dbe0b777ed49fecb4ead5afa85c7dd"
        }}
        style={styles.ImageBackground_395_4734}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7463/9666/f3dbe0b777ed49fecb4ead5afa85c7dd"
        }}
        style={styles.ImageBackground_395_4735}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7463/9666/f3dbe0b777ed49fecb4ead5afa85c7dd"
        }}
        style={styles.ImageBackground_395_4736}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7463/9666/f3dbe0b777ed49fecb4ead5afa85c7dd"
        }}
        style={styles.ImageBackground_395_4737}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7463/9666/f3dbe0b777ed49fecb4ead5afa85c7dd"
        }}
        style={styles.ImageBackground_395_4738}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7463/9666/f3dbe0b777ed49fecb4ead5afa85c7dd"
        }}
        style={styles.ImageBackground_395_4739}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7463/9666/f3dbe0b777ed49fecb4ead5afa85c7dd"
        }}
        style={styles.ImageBackground_395_4740}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7463/9666/f3dbe0b777ed49fecb4ead5afa85c7dd"
        }}
        style={styles.ImageBackground_395_4741}
      />
      <View style={styles.View_395_4742}>
        <View style={styles.View_395_4743}>
          <Text style={styles.Text_395_4743}>#gdhd847595jnfh</Text>
        </View>
        <View style={styles.View_395_4744}>
          <Text style={styles.Text_395_4744}>21st Aug, 2021</Text>
        </View>
        <View style={styles.View_395_4745}>
          <Text style={styles.Text_395_4745}>06:53:20 GMT</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7463/9666/f3dbe0b777ed49fecb4ead5afa85c7dd"
        }}
        style={styles.ImageBackground_395_4746}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_395_4747}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("366_2801"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4996/1674/b1bd3a7de6dd3dcd8d9732f8bc088ff5"
          }}
          style={styles.ImageBackground_395_4748}
        />
        <View style={styles.View_395_4760}>
          <Text style={styles.Text_395_4760}>Advance Filter</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_395_4761}>
        <Text style={styles.Text_395_4761}>$ 100</Text>
      </View>
      <View style={styles.View_395_4762}>
        <Text style={styles.Text_395_4762}>$ 100</Text>
      </View>
      <View style={styles.View_395_4763}>
        <Text style={styles.Text_395_4763}>$ 100</Text>
      </View>
      <View style={styles.View_395_4764}>
        <Text style={styles.Text_395_4764}>$ 100</Text>
      </View>
      <View style={styles.View_395_4765}>
        <Text style={styles.Text_395_4765}>$ 100</Text>
      </View>
      <View style={styles.View_395_4766}>
        <Text style={styles.Text_395_4766}>$ 100</Text>
      </View>
      <View style={styles.View_395_4767}>
        <Text style={styles.Text_395_4767}>$ 100</Text>
      </View>
      <View style={styles.View_395_4768}>
        <Text style={styles.Text_395_4768}>$ 100</Text>
      </View>
      <View style={styles.View_395_4769}>
        <Text style={styles.Text_395_4769}>Complete</Text>
      </View>
      <View style={styles.View_395_4770}>
        <Text style={styles.Text_395_4770}>Complete</Text>
      </View>
      <View style={styles.View_395_4771}>
        <Text style={styles.Text_395_4771}>Failed</Text>
      </View>
      <View style={styles.View_395_4772}>
        <Text style={styles.Text_395_4772}>Failed</Text>
      </View>
      <View style={styles.View_395_4773}>
        <Text style={styles.Text_395_4773}>Complete</Text>
      </View>
      <View style={styles.View_395_4774}>
        <Text style={styles.Text_395_4774}>Complete</Text>
      </View>
      <View style={styles.View_395_4775}>
        <Text style={styles.Text_395_4775}>Pending</Text>
      </View>
      <View style={styles.View_395_4776}>
        <Text style={styles.Text_395_4776}>Complete</Text>
      </View>
      <View style={styles.View_395_4777}>
        <Text style={styles.Text_395_4777}>Complete</Text>
      </View>
      <View style={styles.View_395_4778}>
        <Text style={styles.Text_395_4778}>Complete</Text>
      </View>
      <View style={styles.View_395_4831} />
      <View style={styles.View_395_4832}>
        <View style={styles.View_395_4833} />
        <View style={styles.View_395_4834}>
          <Text style={styles.Text_395_4834}>Advance Filter</Text>
        </View>
        <View style={styles.View_395_4835}>
          <View style={styles.View_395_4836}>
            <View style={styles.View_395_4837}>
              <View style={styles.View_395_4838} />
              <View style={styles.View_395_4839}>
                <Text style={styles.Text_395_4839}>
                  Search By Transaction Hash, status
                </Text>
              </View>
              <View style={styles.View_395_4840}>
                <Text style={styles.Text_395_4840}>
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
            style={styles.ImageBackground_395_4841}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_395_4846}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("395_4283"))
          }
        >
          <View style={styles.View_395_4847} />
          <View style={styles.View_395_4848}>
            <Text style={styles.Text_395_4848}>Apply</Text>
          </View>
          <View style={styles.View_395_4849} />
          <View style={styles.View_395_4850}>
            <Text style={styles.Text_395_4850}>Cancel</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_395_4851}>
          <View style={styles.View_395_4852}>
            <Text style={styles.Text_395_4852}>Search by Date</Text>
          </View>
          <View style={styles.View_395_4853}>
            <View style={styles.View_395_4854}>
              <View style={styles.View_395_4855} />
            </View>
          </View>
          <View style={styles.View_395_4856}>
            <View style={styles.View_395_4857}>
              <View style={styles.View_395_4858} />
            </View>
          </View>
          <View style={styles.View_395_4859}>
            <Text style={styles.Text_395_4859}>From</Text>
          </View>
          <View style={styles.View_395_4860}>
            <Text style={styles.Text_395_4860}>To</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21a7/16b1/3c295f095b750b99eb6cdae649489ae2"
            }}
            style={styles.ImageBackground_395_4861}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21a7/16b1/3c295f095b750b99eb6cdae649489ae2"
            }}
            style={styles.ImageBackground_395_4870}
          />
        </View>
        <View style={styles.View_395_4879}>
          <View style={styles.View_395_4880}>
            <Text style={styles.Text_395_4880}>Search by Time</Text>
          </View>
          <View style={styles.View_395_4881}>
            <View style={styles.View_395_4882}>
              <View style={styles.View_395_4883} />
            </View>
          </View>
          <View style={styles.View_395_4884}>
            <View style={styles.View_395_4885}>
              <View style={styles.View_395_4886} />
            </View>
          </View>
          <View style={styles.View_395_4887}>
            <Text style={styles.Text_395_4887}>From</Text>
          </View>
          <View style={styles.View_395_4888}>
            <Text style={styles.Text_395_4888}>To</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a236/3014/7432c61ae10bc1eaeef174f019ffb526"
            }}
            style={styles.ImageBackground_395_4889}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a236/3014/7432c61ae10bc1eaeef174f019ffb526"
            }}
            style={styles.ImageBackground_395_4894}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_395_4658: {
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
  Text_395_4658: {
    color: "rgba(15, 178, 32, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4659: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("94.80874316939891%"),
    justifyContent: "flex-start"
  },
  Text_395_4659: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4660: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("102.59562841530054%"),
    justifyContent: "flex-start"
  },
  Text_395_4660: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4661: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("110.65573770491804%"),
    justifyContent: "flex-start"
  },
  Text_395_4661: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4662: {
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
  View_395_4663: {
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
  Text_395_4663: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4664: {
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
  Text_395_4664: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4665: {
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
  Text_395_4665: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4666: {
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
  View_395_4667: {
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
  Text_395_4667: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4668: {
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
  Text_395_4668: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4669: {
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
  Text_395_4669: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_395_4670: {
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
  ImageBackground_395_4671: {
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
  View_395_4672: {
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
  View_395_4673: {
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
  Text_395_4673: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4674: {
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
  Text_395_4674: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4675: {
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
  Text_395_4675: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_395_4676: {
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
  View_395_4677: {
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
  View_395_4678: {
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
  Text_395_4678: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4679: {
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
  Text_395_4679: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4680: {
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
  View_I395_4680_309_5: {
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
  View_I395_4680_309_31: {
    flexGrow: 1,
    width: wp("83.33333333333334%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("1.639344262295083%")
  },
  TouchableOpacity_I395_4680_309_27: {
    width: wp("7.729468599033816%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I395_4680_309_9: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I395_4680_309_23: {
    width: wp("7.729468599033816%"),
    top: hp("4.0983606557377215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I395_4680_309_23: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I395_4680_309_28: {
    width: wp("9.420289855072465%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.913043478260864%")
  },
  ImageBackground_I395_4680_309_13: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594288%")
  },
  View_I395_4680_309_24: {
    width: wp("9.420289855072465%"),
    top: hp("4.0983606557377215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I395_4680_309_24: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I395_4680_309_29: {
    width: wp("11.11111111111111%"),
    height: hp("5.46448087431694%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.58454106280193%")
  },
  ImageBackground_I395_4680_309_21: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  View_I395_4680_309_25: {
    width: wp("11.11111111111111%"),
    top: hp("4.0983606557377215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I395_4680_309_25: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I395_4680_309_30: {
    width: wp("11.11111111111111%"),
    height: hp("5.56794880517845%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22222222222223%")
  },
  View_I395_4680_309_22: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%")
  },
  ImageBackground_I395_4680_309_17: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I395_4680_309_26: {
    width: wp("11.11111111111111%"),
    top: hp("4.2018285865992056%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I395_4680_309_26: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I395_4680_309_82: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.57487922705314%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I395_4680_309_380: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.729468599033815%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I395_4680_309_459: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.3671497584541%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I395_4680_309_304: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.091787439613526%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_395_4681: {
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
  ImageBackground_395_4687: {
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
  ImageBackground_395_4694: {
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
  View_395_4700: {
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
  TouchableOpacity_I395_4700_309_905: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  View_I395_4700_309_907: {
    flexGrow: 1,
    width: wp("19.31046195652174%"),
    height: hp("2.7323602978649038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033815%"),
    top: hp("0.4098360655737707%")
  },
  TouchableOpacity_I395_4700_309_908: {
    width: wp("19.31046195652174%"),
    height: hp("2.7323602978649038%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I395_4700_309_920: {
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
  View_I395_4700_309_920_309_916: {
    flexGrow: 1,
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.483091787439605%"),
    top: hp("0.27322404371584685%")
  },
  ImageBackground_I395_4700_309_920_309_917: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I395_4700_309_928: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.74396135265701%"),
    top: hp("0%")
  },
  ImageBackground_I395_4700_309_934: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.23188405797102%"),
    top: hp("0%")
  },
  ImageBackground_395_4701: {
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
  TouchableOpacity_395_4702: {
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
  Text_395_4702: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4703: {
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
  Text_395_4703: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_395_4704: {
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
  ImageBackground_395_4705: {
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
  View_395_4706: {
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
  View_395_4707: {
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
  Text_395_4707: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4708: {
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
  Text_395_4708: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4709: {
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
  Text_395_4709: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4710: {
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
  View_395_4711: {
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
  Text_395_4711: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4712: {
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
  Text_395_4712: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4713: {
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
  Text_395_4713: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4714: {
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
  View_395_4715: {
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
  Text_395_4715: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4716: {
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
  Text_395_4716: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4717: {
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
  Text_395_4717: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4718: {
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
  View_395_4719: {
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
  Text_395_4719: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4720: {
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
  Text_395_4720: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4721: {
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
  Text_395_4721: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4722: {
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
  View_395_4723: {
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
  Text_395_4723: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4724: {
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
  Text_395_4724: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4725: {
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
  Text_395_4725: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4726: {
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
  View_395_4727: {
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
  Text_395_4727: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4728: {
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
  Text_395_4728: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4729: {
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
  Text_395_4729: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4730: {
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
  View_395_4731: {
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
  Text_395_4731: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4732: {
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
  Text_395_4732: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4733: {
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
  Text_395_4733: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_395_4734: {
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
  ImageBackground_395_4735: {
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
  ImageBackground_395_4736: {
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
  ImageBackground_395_4737: {
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
  ImageBackground_395_4738: {
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
  ImageBackground_395_4739: {
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
  ImageBackground_395_4740: {
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
  ImageBackground_395_4741: {
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
  View_395_4742: {
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
  View_395_4743: {
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
  Text_395_4743: {
    color: "rgba(0, 123, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4744: {
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
  Text_395_4744: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4745: {
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
  Text_395_4745: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_395_4746: {
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
  TouchableOpacity_395_4747: {
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
  ImageBackground_395_4748: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_395_4760: {
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
  Text_395_4760: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4761: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("30.46448087431694%"),
    justifyContent: "flex-start"
  },
  Text_395_4761: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4762: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("38.52459016393443%"),
    justifyContent: "flex-start"
  },
  Text_395_4762: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4763: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("46.31147540983606%"),
    justifyContent: "flex-start"
  },
  Text_395_4763: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4764: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("54.37158469945356%"),
    justifyContent: "flex-start"
  },
  Text_395_4764: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4765: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("62.568306010928964%"),
    justifyContent: "flex-start"
  },
  Text_395_4765: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4766: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("70.62841530054644%"),
    justifyContent: "flex-start"
  },
  Text_395_4766: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4767: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("78.41530054644808%"),
    justifyContent: "flex-start"
  },
  Text_395_4767: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4768: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("86.47540983606558%"),
    justifyContent: "flex-start"
  },
  Text_395_4768: {
    color: "rgba(148, 146, 146, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4769: {
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
  Text_395_4769: {
    color: "rgba(15, 178, 32, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4770: {
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
  Text_395_4770: {
    color: "rgba(15, 178, 32, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4771: {
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
  Text_395_4771: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4772: {
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
  Text_395_4772: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4773: {
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
  Text_395_4773: {
    color: "rgba(15, 178, 32, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4774: {
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
  Text_395_4774: {
    color: "rgba(15, 178, 32, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4775: {
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
  Text_395_4775: {
    color: "rgba(255, 193, 7, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4776: {
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
  Text_395_4776: {
    color: "rgba(15, 178, 32, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4777: {
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
  Text_395_4777: {
    color: "rgba(15, 178, 32, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4778: {
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
  Text_395_4778: {
    color: "rgba(15, 178, 32, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4831: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("113.52459016393443%"),
    minHeight: hp("113.52459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.44999998807907104
  },
  View_395_4832: {
    width: wp("74.39613526570048%"),
    minWidth: wp("74.39613526570048%"),
    height: hp("58.7431693989071%"),
    minHeight: hp("58.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.80193236714976%"),
    top: hp("21.311475409836063%")
  },
  View_395_4833: {
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
  View_395_4834: {
    width: wp("41.06280193236715%"),
    minWidth: wp("41.06280193236715%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("3.4153005464480906%"),
    justifyContent: "flex-start"
  },
  Text_395_4834: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4835: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("28.96174863387978%"),
    minHeight: hp("28.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.072463768115938%"),
    top: hp("9.562841530054648%")
  },
  View_395_4836: {
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
  View_395_4837: {
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
  View_395_4838: {
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
  View_395_4839: {
    width: wp("45.169082125603865%"),
    minWidth: wp("45.169082125603865%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980713%"),
    top: hp("2.0491803278688465%"),
    justifyContent: "flex-start"
  },
  Text_395_4839: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 6,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4840: {
    width: wp("20.28985507246377%"),
    minWidth: wp("20.28985507246377%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.96135265700483%"),
    top: hp("27.595628415300546%"),
    justifyContent: "flex-start"
  },
  Text_395_4840: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 6,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_395_4841: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("1.6393442622950758%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.03864734299516%")
  },
  TouchableOpacity_395_4846: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.072463768115938%"),
    top: hp("45.08196721311475%")
  },
  View_395_4847: {
    width: wp("31.672587371678745%"),
    minWidth: wp("31.672587371678745%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.82016625150967%"),
    top: hp("0%"),
    backgroundColor: "rgba(220, 53, 69, 1)"
  },
  View_395_4848: {
    width: wp("18.590424026268117%"),
    minWidth: wp("18.590424026268117%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.93503736413044%"),
    top: hp("1.3661202185792405%"),
    justifyContent: "flex-start"
  },
  Text_395_4848: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4849: {
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
  View_395_4850: {
    width: wp("18.590424026268117%"),
    minWidth: wp("18.590424026268117%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.114753170289855%"),
    top: hp("1.3661202185792405%"),
    justifyContent: "flex-start"
  },
  Text_395_4850: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4851: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.072463768115938%"),
    top: hp("16.666666666666664%")
  },
  View_395_4852: {
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
  Text_395_4852: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4853: {
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
  View_395_4854: {
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
  View_395_4855: {
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
  View_395_4856: {
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
  View_395_4857: {
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
  View_395_4858: {
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
  View_395_4859: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980713%"),
    top: hp("5.464480874316941%"),
    justifyContent: "flex-start"
  },
  Text_395_4859: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 6,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4860: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.613526570048315%"),
    top: hp("5.464480874316941%"),
    justifyContent: "flex-start"
  },
  Text_395_4860: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 6,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_395_4861: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.289855072463766%")
  },
  ImageBackground_395_4870: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.52173913043478%")
  },
  View_395_4879: {
    width: wp("64.4927536231884%"),
    minWidth: wp("64.4927536231884%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.072463768115938%"),
    top: hp("27.185792349726775%")
  },
  View_395_4880: {
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
  Text_395_4880: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4881: {
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
  View_395_4882: {
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
  View_395_4883: {
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
  View_395_4884: {
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
  View_395_4885: {
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
  View_395_4886: {
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
  View_395_4887: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980713%"),
    top: hp("5.464480874316941%"),
    justifyContent: "flex-start"
  },
  Text_395_4887: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 6,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_4888: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.613526570048315%"),
    top: hp("5.464480874316941%"),
    justifyContent: "flex-start"
  },
  Text_395_4888: {
    color: "rgba(52, 58, 64, 1)",
    fontSize: 6,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_395_4889: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("5.054644808743177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.289855072463766%")
  },
  ImageBackground_395_4894: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("5.054644808743177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.52173913043478%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
