import React, { Component } from "react";
import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TextInput,
  Button,
  Text,
  FlatList,
  Alert,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";
import { connect } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import {

  AdMobInterstitial,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';

import { NavigationEvents } from "react-navigation";

import RulesStyle from "../styles/RegisteringStyle";
const styles = StyleSheet.create({ ...RulesStyle });
import background_NoMotif from "../../assets/background_NoMotif.jpg";
import Icon from "react-native-vector-icons/FontAwesome";
import txtFieldBorder from "../../assets/txtFieldBorder.png";
import { setplayersok } from "../Actions/playActions";
import { setnumberplayers } from "../Actions/playActions";

const createAlert = () =>
  Alert.alert(
    "",
    "Tu peux modifier la photo de profil de chaque joueur en cliquant sur son avatar.\n" +
    "N'hésite pas à utiliser la pire photo de chacun.",
    [{ text: "OK", onPress: () => console.log("OK Pressed") }],
    { cancelable: true }
  );

class Registering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [],
    };
  }

  IMAGES = {
    perso1: require("../../assets/personages/perso1.png"), // statically analyzed
    perso2: require("../../assets/personages/perso2.png"), // statically analyzed
    perso3: require("../../assets/personages/perso3.png"), // statically analyzed
    perso4: require("../../assets/personages/perso4.png"), // statically analyzed
    perso5: require("../../assets/personages/perso5.png"), // statically analyzed
    perso6: require("../../assets/personages/perso6.png"), // statically analyzed
    perso7: require("../../assets/personages/perso7.png"), // statically analyzed
    perso8: require("../../assets/personages/perso8.png"), // statically analyzed
    perso9: require("../../assets/personages/perso9.png"), // statically analyzed
    perso10: require("../../assets/personages/perso10.png"), // statically analyzed
  };
  BORDERS = {
    border1: require("../../assets/txtFieldBorders/txtFieldBorder1.png"), // statically analyzed
    border2: require("../../assets/txtFieldBorders/txtFieldBorder2.png"), // statically analyzed
    border3: require("../../assets/txtFieldBorders/txtFieldBorder3.png"), // statically analyzed
    border4: require("../../assets/txtFieldBorders/txtFieldBorder4.png"), // statically analyzed
    border5: require("../../assets/txtFieldBorders/txtFieldBorder5.png"), // statically analyzed
    border6: require("../../assets/txtFieldBorders/txtFieldBorder6.png"), // statically analyzed
    border7: require("../../assets/txtFieldBorders/txtFieldBorder7.png"), // statically analyzed
    border8: require("../../assets/txtFieldBorders/txtFieldBorder8.png"), // statically analyzed
    border9: require("../../assets/txtFieldBorders/txtFieldBorder9.png"), // statically analyzed
    border10: require("../../assets/txtFieldBorders/txtFieldBorder10.png"), // statically analyzed
  };

  setPlayers = async () => {
    const list = [];
    for (let i = 0; i < 10; i++) {
      let ind = i + 1;
      let url = "perso" + ind + "";
      let bordername = "border" + ind + "";
      list.push({
        image: this.IMAGES[url],
        border: bordername,
        name: "",
        score: 0,
        roundscore: 0,
      });
    }
    await this.setState({ players: list });
  };
  async componentDidMount() {
    createAlert();
    await this.setPlayers();
  }

  ItemView = ({ item, index }) => {
    return (
      <View style={styles.rowcontainer}>
        <View style={styles.col3}>
          <TouchableHighlight
            onPress={() =>
              Alert.alert(
                "Modifier l'image",
                "N'hésite pas à utiliser la pire photo",

                [
                  {
                    text: "Camera",
                    onPress: async () => {
                      this.setPlayerImage(await openCamera(), index);
                    },
                  },
                  {
                    text: "Galerie",
                    onPress: async () => {
                      this.setPlayerImage(await openImagePickerAsync(), index);
                    },
                  },
                ],
                { cancelable: true }
              )
            }
          >
            <Image source={item.image} style={styles.img} />
          </TouchableHighlight>
        </View>
        <View style={styles.col4}>
          <TextInput
            style={styles.TextInput}
            placeholder=""
            id="email"
            onChangeText={(text) => this.setPlayer(text, index)}
            value={item.name}
          />
          <Image source={this.BORDERS[item.border]} style={styles.imgBorder} />
        </View>
      </View>
    );
  };
  setPlayer = async (text, index) => {
    let newPlayers = [...this.state.players];
    newPlayers[index].name = text;
    await this.setState({
      players: newPlayers,
    });
  };
  setPlayerImage = async (img, index) => {
    let newPlayers = [...this.state.players];
    newPlayers[index].image = { uri: img.localUri };
    await this.setState({
      players: newPlayers,
    });
  };
  ItemSeparatorView = () => {
    return (
      <View
        style={{ height: 0.5, width: "100%", backgroundColor: "#c8c8c8" }}
      />
    );
  };

  Play = async () => {
    let playersOk = [];
    for (let i = 0; i < this.state.players.length; i++) {
      if (this.state.players[i].name != "") {
        playersOk.push(this.state.players[i]);
      }
    }
    if (playersOk.length < 2) {
      Alert.alert("Vous devez être au\n minimum 2 joueurs.", "", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    } else {
      let data = playersOk;

      this.props.setnumberplayers(data.length);
      this.props.setplayersok(data);
      await this.setPlayers();
      await this.setPlayers();
      await this.setPlayers();
      this.props.navigation.navigate("Categories");
    }
  };

  render() {
    return (
      <ImageBackground
        source={background_NoMotif}
        style={styles.backgroundImage}
      >
        <View style={styles.rowcontainer1}>
          <View style={styles.col1}>
            <TouchableOpacity
              style={styles.backIcon}
              onPress={ async () => {
                this.props.navigation.navigate("Welcome");
                await AdMobInterstitial.setAdUnitID('ca-app-pub-8171099142584641/7280152931'); // Test ID, Replace with your-admob-unit-id
                await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
                await AdMobInterstitial.showAdAsync();
                
              }
              }
            >
              <Icon name={"chevron-left"} size={25} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.col2}>
            <Text style={styles.titletext}>Nomme les joueurs</Text>
            <Text style={styles.text}>
              (N'hésite pas à mettre les pires surnoms de chacun {"\n"} Soyez au
              minimum deux à jouer)
            </Text>
          </View>
        </View>

        <View style={styles.center}>
          <View style={styles.scroll}>
            <SafeAreaView style={{ flex: 1 }}>
              <FlatList
                data={this.state.players}
                keyExtractor={(item, index) => index.toString()}
                //ItemSeparatorComponent={this.ItemSeparatorView}
                renderItem={this.ItemView}
              />
            </SafeAreaView>
          </View>
        </View>

        <View style={styles.end}>
          <View style={styles.endLeft}></View>
          <View style={styles.endRight}>
            <TouchableOpacity style={styles.playIcon} onPress={this.Play}>
              <Text style={styles.playtext}>JOUER {">"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

async function openImagePickerAsync() {
  const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("Permission to access camera roll is required!");
    return;
  }

  const pickerResult = await ImagePicker.launchImageLibraryAsync();
  if (pickerResult.cancelled === true) {
    return;
  }
  return { localUri: pickerResult.uri };
}

async function openCamera() {
  // Ask the user for the permission to access the camera
  const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("Permission to access the camera is required!");
    return;
  }

  const pickerResult = await ImagePicker.launchCameraAsync();

  if (pickerResult.cancelled === true) {
    return;
  }
  return { localUri: pickerResult.uri };
}

const mapStatetoProps = (state) => {
  return {
    playersok: state.playReducer.playersok,
    play: state.playReducer.play,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // only map needed dispatches here
    setplayersok: (data) => dispatch(setplayersok(data)),
    setnumberplayers: (data) => dispatch(setnumberplayers(data)),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Registering);
