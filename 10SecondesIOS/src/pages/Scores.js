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

import ScoresStyle from "../styles/ScoresStyle";
const styles = StyleSheet.create({ ...ScoresStyle });
import background_NoMotif from "../../assets/background_NoMotif.jpg";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { setplayersok } from "../Actions/playActions";

class Scores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myScore: "",
    };
  }
  
    


  max = parseInt(this.props.player.question.split(" ")[0]);

  onChanged(text) {
    // code to remove non-numeric characters from text
    this.setState({
      myScore: text.replace(/[^0-9]/g, ""),
    });
  }

  setScore = async (score) => {
    let newPlayers = [...this.props.playersok];
    //console.log("players : "+newPlayers[0].score);
    //console.log("index : "+this.props.playerindex);
    newPlayers[this.props.playerindex].score += score;
    newPlayers[this.props.playerindex].roundscore = score;
    await this.props.setplayersok(newPlayers);
  };

  go = () => {
    if (this.state.myScore == "") {
      this.setScore(-this.max);
    } else {
      this.setScore(this.state.myScore - this.max);
      console.log(
        "score : " + this.props.playersok[this.props.playerindex].score
      );
      console.log(
        "round score : " +
          this.props.playersok[this.props.playerindex].roundscore
      );
    }
    this.props.navigation.navigate("Penalty");
  };

  render() {
    return (
      <ImageBackground
        source={background_NoMotif}
        style={styles.backgroundImage}
      >
        <View style={styles.title}>
          <Text style={styles.warningtext}>TON SCORE :</Text>
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
          <Text style={styles.scoreText}>
            Combien de réponses as-tu{"\n"}pu trouver?
          </Text>
          <View style={styles.scoreBorder}>
            <TextInput
              placeholder="0"
              style={styles.scoreText}
              onChangeText={(text) => this.onChanged(text)}
              value={this.state.myScore}
              maxLength={2}
            />
            <Text style={styles.scoreText}>/ {this.max}</Text>
          </View>
        </View>
        <View style={styles.end}>
          <TouchableOpacity style={styles.goIcon} onPress={this.go}>
            <Text style={styles.gotext}>VALIDER</Text>
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
    playerindex: state.playReducer.playerindex,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setplayersok: (data) => dispatch(setplayersok(data)),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Scores);
