import React, { Component } from "react";
import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from "react-native";

import RulesStyle from "../styles/RappelStyle";
const styles = StyleSheet.create({ ...RulesStyle });
import background_NoMotif from "../../assets/background_purple.png";
import Icon from "react-native-vector-icons/FontAwesome";

class Rappel extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={background_NoMotif}
          style={styles.backgroundImage}
        >
          <View style={styles.centercontainer}>
            <Text style={styles.text}>
              <Text style={styles.text1}>Petit rappel,{"\n"}</Text>
              <Text style={styles.text2}>
                Ex : Tu as 10 secondes{"\n"}pour me citer 5 fruits{"\n"}Si tu en
                cites 7 tu donnes{"\n"}2 pénalités, si tu en cites 2{"\n"}tu
                prends 3 pénalités.{"\n"}
                citer 5 fruits.{"\n"}
              </Text>
              <Text style={styles.text3}>
                Chaque erreur = Une{"\n"} pénalité en plus.
              </Text>
            </Text>
            <TouchableOpacity
              style={styles.goIcon}
              onPress={() => this.props.navigation.navigate("Warning")}
            >
              <Text style={styles.gotext}>CONTINUER</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.goIcon}
              onPress={() => this.props.navigation.navigate("Categories")}
            >
              <Text style={styles.gotext}>CATÉGORIES</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Rappel;
