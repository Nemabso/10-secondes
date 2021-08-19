import React, { Component } from "react";
import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  FlatList,
  Text,
  SafeAreaView,
} from "react-native";

import CategoriesStyle from "../styles/CategoriesStyle";
const styles = StyleSheet.create({ ...CategoriesStyle });
import background_purple from "../../assets/background_purple.png";
import Icon from "react-native-vector-icons/FontAwesome";
import { setrappel } from "../Actions/playActions";

import Constants from "expo-constants";
import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

import { connect } from "react-redux";
import { setcategory } from "../Actions/playActions";
import { setquestions } from "../Actions/playActions";

function importDB() {
  // load in db
  FileSystem.downloadAsync(
    Asset.fromModule(require("../../assets/databaseV1_1.db")).uri,
    `${FileSystem.documentDirectory}SQLite/databaseV1_2.db`
  );
}

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
    };
  }
  categories = [
    "Culture générale",
    "Histoire/Géo",
    "Aléatoire",
    "Sport",
    "Divertissement",
    "Pimenté",
  ];
  CATEGORIES1 = [
    {
      image: require("../../assets/categories/general.png"),
      name: "Culture Générale",
      dbname: "Culture générale",
    },
    {
      image: require("../../assets/categories/histo-geo.png"),
      name: "Histoire Géo",
      dbname: "Histoire/Géo",
    },
    {
      image: require("../../assets/categories/aleatoire.png"),
      name: "Aléatoire",
      dbname: "Aléatoire",
    },
  ];
  CATEGORIES2 = [
    {
      image: require("../../assets/categories/sport.png"),
      name: "Sports",
      dbname: "Sport",
    },
    {
      image: require("../../assets/categories/divertissement.png"),
      name: "Divertissement",
      dbname: "Divertissement",
    },
    {
      image: require("../../assets/categories/pimente.png"),
      name: "Pimenté",
      dbname: "Pimenté",
    },
  ];
  /*componentDidMount() {
    this.importQuestions();
  }*/
  ItemView = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.item}
          onPress={async () => {
            this.props.setcategory(item);

            //console.log("first question : "+d);
            //console.log("questions : "+this.props.questions[0].Question);
            /*let data = [];
            data.push({
              Temps: 5,
              Question: "5 fruits qui commencent par la lettre R?",
            });
            this.props.setquestions(data);*/
            //console.log(this.props.questions);
            this.props.navigation.navigate("Gestion");
          }}
        >
          <Image source={item.image} style={styles.img} />
          <Text style={styles.itemName}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

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

  importQuestions = async () => {
    importDB();
    var list = [];
    let db = SQLite.openDatabase("databaseV1_2.db");

    console.log("dbdbdbd" + db);
    for (let i = 0; i < 6; i++) {
      await this.executeSql(
        db,
        "SELECT * from questions order by RANDOM()",
        []
      ).then((items) => list.push({ items }["items"]));
    }
    this.props.setquestions(list);
    console.log(list);
    /*if (category === "")
      await this.executeSql(
        db,
        "SELECT * from questions order by RANDOM()",
        []
      ).then((items) => this.props.setquestions({ items }["items"]));
    else
      await this.executeSql(
        db,
        "SELECT * from questions where Categorie = ? order by RANDOM()",
        [category]
      ).then((items) => this.props.setquestions({ items }["items"]));*/
  };

  goCategory = (category) => {
    this.props.setcategory(category);
    this.props.navigation.navigate("Gestion");
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={background_purple}
          style={styles.backgroundImage}
        >
          <View style={styles.rowcontainer}>
            <View style={styles.col1}>
              <TouchableOpacity
                style={styles.backIcon}
                onPress={() => {
                  this.props.navigation.navigate("Registering");
                  this.props.setrappel(true);
                }}
              >
                <Icon name={"chevron-left"} size={25} color="white" />
              </TouchableOpacity>
            </View>
            <View style={styles.col2}>
              <Text style={styles.titletext}>CATÉGORIES</Text>
            </View>
          </View>
          <View style={styles.centercontainer}>
            <View style={styles.rowcontainer}>
              <View style={styles.col3}>
                <View>
                  <SafeAreaView style={{ flex: 1 }}>
                    <FlatList
                      data={this.CATEGORIES1}
                      keyExtractor={(item, index) => index.toString()}
                      //ItemSeparatorComponent={this.ItemSeparatorView}
                      renderItem={this.ItemView}
                    />
                  </SafeAreaView>
                </View>
              </View>
              <View style={styles.col4}>
                <View>
                  <SafeAreaView style={{ flex: 1 }}>
                    <FlatList
                      data={this.CATEGORIES2}
                      keyExtractor={(item, index) => index.toString()}
                      //ItemSeparatorComponent={this.ItemSeparatorView}
                      renderItem={this.ItemView}
                    />
                  </SafeAreaView>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
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

export default connect(mapStatetoProps, mapDispatchToProps)(Categories);
