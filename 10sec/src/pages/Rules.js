import React, { Component } from "react";
import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from "react-native";

import RulesStyle from "../styles/RulesStyle";
const styles = StyleSheet.create({ ...RulesStyle });
import background_NoMotif from "../../assets/background_NoMotif.jpg";
import Icon from "react-native-vector-icons/FontAwesome";

class Rules extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={background_NoMotif}
          style={styles.backgroundImage}
        >
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => this.props.navigation.navigate("Welcome")}
          >
            <Icon name={"chevron-left"} size={25} color="white" />
          </TouchableOpacity>
          <View style={styles.centercontainer}>
            <Text style={styles.hellotext}>
              <Text style={styles.text1}>Hello,{"\n"}</Text>
              <Text style={styles.text2}>Bienvenue sur 10 secondes.</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.text3}>
                Les règles sont simples, {"\n"}Vous avez un temps imparti pour
                {"\n"}
                répondre à une question {"\n"}Ex : Tu as 10 secondes pour me
                {"\n"}
                citer 5 fruits.
              </Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.text4}>
                Si la personne trouve 4 fruits elle prend{"\n"}une pénalité, si
                elle trouve 7 fruits elle{"\n"}peut donner deux pénalités.{"\n"}
                A chaque proposition qui n’est pas{"\n"}un fruit : Une pénalité
                en plus.
              </Text>
            </Text>
          </View>

          <TouchableOpacity
            style={styles.goIcon}
            onPress={() => this.props.navigation.navigate("Registering")}
          >
            <Text style={styles.gotext}>GO !</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

export default Rules;
