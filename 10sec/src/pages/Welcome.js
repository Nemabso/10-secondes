import React, { Component } from "react";
import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Button,
  Text,
  Alert,
} from "react-native";

import WelcomeStyle from "../styles/WelcomeStyle";
const styles = StyleSheet.create({ ...WelcomeStyle });
import background_degrade from "../../assets/background_degrade.jpg";
import Icon from "react-native-vector-icons/FontAwesome";

import Constants from "expo-constants";
import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

import { connect } from "react-redux";
import { setcategory } from "../Actions/playActions";
import { setquestions } from "../Actions/playActions";

/*const createTwoButtonAlert = () =>
  Alert.alert(
    "",
    "L’abus d’alcool est dangereux pour la santé. \nEn poursuivant sur " +
      "l’application, tu confirmes être responsable des conséquences que " +
      "peut engendrer l’utilisation de l’application 10 secondes.",
    [{ text: "OK", onPress: () => console.log("OK Pressed") }]
  );
function importDB() {
  // load in db
  FileSystem.downloadAsync(
    Asset.fromModule(require("../../assets/databaseV1_1.db")).uri,
    `${FileSystem.documentDirectory}SQLite/databaseV1_2.db`
  );
}*/
class Welcome extends Component {
  categories = [
    "Culture générale",
    "Histoire/Géo",
    "Sport",
    "Divertissement",
    "Pimenté",
    "Aléatoire",
  ];
  async componentDidMount () {
   
  }
 /* 
 componentDidMount() {
    console.log(this.categories);
   // await this.importQuestions(this.categories);
    //createTwoButtonAlert();
  }
  executeSql = (db, sql, params = []) => {
    return new Promise((resolve, reject) =>
      db.transaction((tx) => {
        tx.executeSql(
          sql,
          params,
          (_, { rows }) => resolve(rows._array),
          reject
        );
      })
    );
  };

  importQuestions = async (categories) => {
    importDB();
    var list = [];
    let db = SQLite.openDatabase("databaseV1_2.db");

    console.log("dbdbdbd" + db);
    for (let i = 0; i < 6; i++) {
      if (i == 5) {
        await this.executeSql(
          db,
          "SELECT * from questions order by RANDOM()",
          []
        ).then((items) => {
          list.push({ category: categories[i], questions: { items }["items"] });
          //console.log(items);
        });
      } else {
        await this.executeSql(
          db,
          "SELECT * from questions where Categorie = ? order by RANDOM()",
          [categories[i]]
        ).then((items) => {
          list.push({ category: categories[i], questions: { items }["items"] });

          //console.log(items);
        });
      }
    }
    this.props.setquestions(list);
  };*/
  Play = async ()=> {
    this.props.navigation.navigate("Registering");

  }
  render() {
    return (
      <ImageBackground
        source={background_degrade}
        style={styles.backgroundImage}
      >
        <View style={styles.begin}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logoChrono}
              source={require("../../assets/logocrono-blanc.png")}
            />
          </View>
          <Text style={styles.text1}>Bienvenue</Text>
          <Text style={styles.text2}>Sur le jeu mobile 10 sec.</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.buttonIcon}
            onPress={this.Play}
          >
            <Text style={styles.buttonText}>JOUER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button1Icon}
            onPress={() => this.props.navigation.navigate("Rules")}
          >
            <Text style={styles.buttonText}>RÈGLES</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.creditsContainer}>
          <Text style={styles.creditsText}>
            Design par <Text style={{ color: "#CB0DA5" }}>Manon Gratte ©</Text>
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    playersok: state.playReducer.playersok,
    player: state.playReducer.player,
    questions: state.playReducer.questions,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setcategory: (category) => dispatch(setcategory(category)),
    setquestions: (questions) => dispatch(setquestions(questions)),
    setrappel: (bool) => dispatch(setrappel(bool)),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Welcome);
