import React, { Component } from "react";
import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Button,
  Text,
  TextInput,
} from "react-native";


import PenaltyStyle from "../styles/PenaltyStyle";
const styles = StyleSheet.create({ ...PenaltyStyle });
import background_NoMotif from "../../assets/background_NoMotif.jpg";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { setplayersok } from "../Actions/playActions";
import {
  setplayer,
  setplayerindex,
  setquestionindex,
  setrappel,
} from "../Actions/playActions";
const data1= require("../../assets/questions/HistGeo.json");
const data2= require("../../assets/questions/CultureGeneral.json");
const data3= require("../../assets/questions/Divertissement.json");
const data4= require("../../assets/questions/Sport.json");
const data5= require("../../assets/questions/Pimente.json");
const data6=require("../../assets/questions/dt.json");
class Penalty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }
  
  Gestion = () => {
    var randomNumber;
    if(this.props.category.dbname==="Histoire/Géo"){
      randomNumber=Math.floor(Math.random() * 99);
      console.log(randomNumber);
      var que =data1.features[randomNumber].properties.Question;
      var temp = data1.features[randomNumber].properties.Temps;

    }
    if(this.props.category.dbname==="Culture générale" ){
       randomNumber=Math.floor(Math.random() * 99);
      console.log(randomNumber);
      var que =data2.features[randomNumber].properties.Question;
      var temp = data2.features[randomNumber].properties.Temps;
    }
    if(this.props.category.dbname==="Divertissement" ){
      randomNumber=Math.floor(Math.random() * 99);
      console.log(randomNumber);
      var que =data3.features[randomNumber].properties.Question;
      var temp = data3.features[randomNumber].properties.Temps;

    }
    if(this.props.category.dbname==="Sport"){
      randomNumber=Math.floor(Math.random() * 99);
      console.log(randomNumber);
      var que =data4.features[randomNumber].properties.Question;
      var temp = data4.features[randomNumber].properties.Temps;

    }
    if(this.props.category.dbname==="Aléatoire" ){
    randomNumber=Math.floor(Math.random() * 500);
      console.log(randomNumber);
      var que =data6.features[randomNumber].properties.Question;
      var temp = data6.features[randomNumber].properties.Temps;

    }
    if(this.props.category.dbname==="Pimenté" ){
      randomNumber=Math.floor(Math.random() * 99);
      console.log(randomNumber);
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

  penalty = this.props.playersok[this.props.playerindex].roundscore;

  componentDidMount() {
    if (this.penalty < 0) {
      this.setState({
        message:
          "C'est tout ? Pour la peine prends " + -this.penalty + " pénalité(s)",
      });
    } else if (this.penalty == 0) {
      this.setState({
        message: "Tu t'en sors bien pour cette fois, passe au suivant",
      });
    } else {
      this.setState({
        message:
          "Coup de chance ou talent ? Donne " + this.penalty + " pénalité(s)",
      });
    }
  }

  go = () => {
    this.Gestion();
  };

  render() {
    return (
      <ImageBackground
        source={background_NoMotif}
        style={styles.backgroundImage}
      >
        <View style={styles.title}>
          <Text style={styles.warningtext}>{"Pénalité(s)".toUpperCase()}</Text>
        </View>
        <View style={styles.image}>
          <Image source={this.props.player.image} style={styles.img} />
        </View>
        <View style={styles.name}>
          <Text style={styles.nametext}>
            {this.props.player.name.toUpperCase()}
          </Text>
        </View>
        <View style={styles.score}>
          <View style={styles.scoreBorder}>
            <Text style={styles.scoreText}>{this.state.message}</Text>
          </View>
        </View>
        <View style={styles.end}>
          <TouchableOpacity style={styles.goIcon} onPress={this.go}>
            <Text style={styles.gotext}>SUIVANT</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
const mapStatetoProps = (state) => {
  return {
    playersok: state.playReducer.playersok,
    player: state.playReducer.player,
    value: state.playReducer.value,
    play: state.playReducer.play,
    numberPlayers: state.playReducer.numberPlayers,
    playerindex: state.playReducer.playerindex,
    rappel: state.playReducer.rappel,
    questions: state.playReducer.questions,
    questionindex: state.playReducer.questionindex,
    category: state.playReducer.category,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setplayersok: (data) => dispatch(setplayersok(data)),
    setvalue: (value) => dispatch(setvalue(value)),
    setplayer: (player) => dispatch(setplayer(player)),
    setplayerindex: (playerindex) => dispatch(setplayerindex(playerindex)),
    setquestionindex: (questionindex) =>
      dispatch(setquestionindex(questionindex)),
    setrappel: (bool) => dispatch(setrappel(bool)),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Penalty);
