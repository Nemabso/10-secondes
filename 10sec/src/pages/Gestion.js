import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";

import GestionStyle from "../styles/GestionStyle";
import { connect } from "react-redux";
const styles = StyleSheet.create({ ...GestionStyle });
import background_NoMotif from "../../assets/background_NoMotif.jpg";
import {
  setplayer,
  setplayerindex,
  setquestionindex,
  setrappel,
} from "../Actions/playActions";

function Gestion(props) {
  const isFocused = useIsFocused();
  const didMountRef = useRef(false);
  useEffect(() => {
    if (isFocused) {
      //var quests = props.questions[1];
      //console.log("hna");
      //console.log(quests);
      for (let i = 0; i < 6; i++) {
        var quests = props.questions[i];

        if (quests.category === props.category.dbname) {
          var list = quests.questions;
          var Quest = list[props.questionindex];
          var temp = Quest.Temps;
          var que = Quest.Question;
        }
      }
      //console.log(list);
      const player = {
        name: props.playersok[props.playerindex].name,
        image: props.playersok[props.playerindex].image,
        questiontime: temp,
        question: que,
      };
      props.setplayer(player);
      if (props.playerindex == props.playersok.length - 1) {
        props.setplayerindex(0);
      } else {
        props.setplayerindex(props.playerindex + 1);
      }
      if (props.questionindex == list.length - 1) {
        props.setquestionindex(0);
      } else {
        props.setquestionindex(props.questionindex + 1);
      }
      if (props.rappel == true) {
        props.navigation.navigate("Rappel");
        props.setrappel(false);
      } else {
        props.navigation.navigate("Warning");
      }
    }
  });

  return (
    <View>
      <ImageBackground
        source={background_NoMotif}
        style={styles.backgroundImage}
      >
        <Text>{props.play}</Text>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("Registering")}
        >
          <Text>GO !</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setplayer: (player) => dispatch(setplayer(player)),
    setplayerindex: (playerindex) => dispatch(setplayerindex(playerindex)),
    setquestionindex: (questionindex) =>
      dispatch(setquestionindex(questionindex)),
    setrappel: (bool) => dispatch(setrappel(bool)),
  };
};
export default connect(mapStatetoProps, mapDispatchToProps)(Gestion);
