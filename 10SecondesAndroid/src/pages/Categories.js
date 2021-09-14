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
import background_purple from "../../assets/background_purple1.png";
import Icon from "react-native-vector-icons/FontAwesome";
// import data from "../../assets/dt.json";
import Constants from "expo-constants";
import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

import { connect } from "react-redux";
import { setcategory } from "../Actions/playActions";
import { setquestions } from "../Actions/playActions";
import {

  setplayer,
  setplayerindex,
  setquestionindex,
  setrappel,
} from "../Actions/playActions";

function importDB() {
  // load in db
  FileSystem.downloadAsync(
    Asset.fromModule(require("../../assets/databaseV1_1.db")).uri,
    `${FileSystem.documentDirectory}SQLite/databaseV1_2.db`
  );
}
const data1= require("../../assets/questions/HistGeo.json");
const data2= require("../../assets/questions/CultureGeneral.json");
const data3= require("../../assets/questions/Divertissement.json");
const data4= require("../../assets/questions/Sport.json");
const data5= require("../../assets/questions/Pimente.json");
const data6=require("../../assets/questions/dt.json");
class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
    };
  }
 componentDidMount () {
   
   
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

  Gestion = async () => {
    /*for (let i = 0; i < 6; i++) {
      console.log("hana");
      var quests = this.props.questions[i];
      if (quests.category === this.props.category.dbname) {
        var list = quests.questions;

        //console.log(list);
        var Quest = list[this.props.questionindex];
        var temp = Quest.Temps;
        var que = Quest.Question;
      }
    }*/
    var randomNumber;
    if(this.props.category.dbname==="Histoire/Géo"){
      randomNumber=Math.floor(Math.random() * 99);
      var que =data1.features[randomNumber].properties.Question;
      var temp = data1.features[randomNumber].properties.Temps;

    }
    if(this.props.category.dbname==="Culture générale" ){
      randomNumber=Math.floor(Math.random() * 99);
      var que =data2.features[randomNumber].properties.Question;
      var temp = data2.features[randomNumber].properties.Temps;
    }
    if(this.props.category.dbname==="Divertissement" ){
      randomNumber=Math.floor(Math.random() * 99);
      var que =data3.features[randomNumber].properties.Question;
      var temp = data3.features[randomNumber].properties.Temps;

    }
    if(this.props.category.dbname==="Sport"){
      randomNumber=Math.floor(Math.random() * 99);
      var que =data4.features[randomNumber].properties.Question;
      var temp = data4.features[randomNumber].properties.Temps;

    }
    if(this.props.category.dbname==="Aléatoire" ){
      randomNumber=Math.floor(Math.random() * 500);
      var que =data6.features[randomNumber].properties.Question;
      var temp = data6.features[randomNumber].properties.Temps;

    }
    if(this.props.category.dbname==="Pimenté" ){
      randomNumber=Math.floor(Math.random() * 99);
      var que =data5.features[randomNumber].properties.Question;
      var temp = data5.features[randomNumber].properties.Temps;

    }
    

    const player = {
      name: this.props.playersok[this.props.playerindex].name,
      image: this.props.playersok[this.props.playerindex].image,
      questiontime: temp,
      question: que,
    };
    this.props.setplayer(player);
    if (this.props.playerindex == this.props.playersok.length - 1) {
      this.props.setplayerindex(0);
    } else {
      this.props.setplayerindex(this.props.playerindex + 1);
    }
    if (this.props.questionindex == 99) {
      this.props.setquestionindex(0);
    } else {
      this.props.setquestionindex(this.props.questionindex + 1);
    }
    if (this.props.rappel == true) {
      this.props.navigation.navigate("Rappel");
      this.props.setrappel(false);
    } else {
      this.props.navigation.navigate("Warning");
    }
  };

  ItemView = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.item}
          onPress={async () => {
            await this.props.setcategory(item);
            //console.log("ps");
            //console.log(this.props.category);
            //console.log("ps");
            await this.Gestion();
          }}
        >
          <Image source={item.image} style={styles.img} />
          <Text style={styles.itemName}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  
  render() {
    return (
      <ImageBackground
        source={background_purple}
        style={styles.backgroundImage}
      >
        <View style={styles.rowcontainer3}>
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
    );
  }
}
const mapStatetoProps = (state) => {
  return {
    playersok: state.playReducer.playersok,
    play: state.playReducer.play,
    numberPlayers: state.playReducer.numberPlayers,
    playerindex: state.playReducer.playerindex,
    rappel: state.playReducer.rappel,
    questions: state.playReducer.questions,
    questionindex: state.playReducer.questionindex,
    category: state.playReducer.category,
    playersok: state.playReducer.playersok,
    player: state.playReducer.player,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setcategory: (category) => dispatch(setcategory(category)),
    setquestions: (questions) => dispatch(setquestions(questions)),
    setrappel: (bool) => dispatch(setrappel(bool)),
    setplayer: (player) => dispatch(setplayer(player)),
    setplayerindex: (playerindex) => dispatch(setplayerindex(playerindex)),
    setquestionindex: (questionindex) =>
      dispatch(setquestionindex(questionindex)),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Categories);
