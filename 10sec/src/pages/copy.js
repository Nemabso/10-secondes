import React, { Component } from "react";
import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Button,
  Text,
} from "react-native";

import QuestionStyle from "../styles/QuestionStyle";
const styles = StyleSheet.create({ ...QuestionStyle });
import background_degrade from "../../assets/background_degrade.jpg";
import { connect } from "react-redux";
import { setvalue } from "../Actions/playActions";
import { Audio } from "expo-av";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sound: {},
    };
  }

  MINUTEURS = {
    minuteur5: require("../../assets/minuteurs/minuteur5.gif"),
    minuteur10: require("../../assets/minuteurs/minuteur10.gif"),
    minuteur20: require("../../assets/minuteurs/minuteur20.gif"),
  };

  time = "minuteur" + this.props.player.questiontime + "";

  componentDidMount() {
    /*return this.state.sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;*/
  }

  playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/sounds/timeUpSound.mp3")
    );

    //this.setState({ sound: sound });
    await sound.playAsync();
  };

  renderView() {
    if (this.props.value === 1) {
      return (
        <View style={styles.centercontainer}>
          <Text style={styles.mainText}>
            Tu as {this.props.player.questiontime} secondes {"\n"} pour me
            citer:
          </Text>

          <View style={styles.questionIcon}>
            <Text style={styles.questionText}>
              {this.props.player.question} ?
            </Text>
          </View>
          <Text style={styles.clickText}>
            Cliquer sur l'écran pour commencer.
          </Text>
        </View>
      );
    }
    if (this.props.value === 2) {
      setTimeout(() => {
        this.playSound();
        this.props.setvalue(3);
      }, (this.props.player.questiontime + 1) * 1000);

      return (
        <View style={styles.centercontainer}>
          <Image
            source={this.MINUTEURS[this.time]}
            style={styles.minuteurImage}
          />
          <View style={styles.questionIcon}>
            <Text style={styles.questionText}>
              {this.props.player.question} ?
            </Text>
          </View>
        </View>
      );
    }
    if (this.props.value === 3) {
      return (
        <View style={styles.centercontainer}>
          <Text style={styles.finishText}>Le temps est terminé!</Text>

          <View style={styles.questionIcon}>
            <Text style={styles.questionText}>
              {this.props.player.question} ?
            </Text>
          </View>
          <Text style={styles.clickText}>Cliquer sur l'écran pour passer.</Text>
        </View>
      );
    }
  }

  touchScreen = () => {
    if (this.props.value === 1) {
      this.props.setvalue(2);
    }
    if (this.props.value === 3) {
      this.props.setvalue(1);
      this.props.navigation.navigate("Gestion");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={background_degrade}
          style={styles.backgroundImage}
        >
          <TouchableOpacity
            style={styles.centercontainer}
            onPress={this.touchScreen}
          >
            <View style={styles.topIcon}>
              <View style={styles.rowcontainer}>
                <View style={styles.col1}>
                  <Image
                    source={this.props.category.image}
                    style={styles.img}
                  />
                </View>
                <View style={styles.col2}>
                  <Text style={styles.text}>
                    {this.props.category.name}
                    {"\n"}
                  </Text>
                  <Text style={styles.text}>
                    {this.props.player.name.toUpperCase()}
                    {"\n"}
                  </Text>
                  <Text style={styles.text}>
                    {this.props.player.questiontime} sec {"\n"}
                  </Text>
                </View>
              </View>
            </View>
            {this.renderView()}
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
const mapStatetoProps = (state) => {
  return {
    player: state.playReducer.player,
    category: state.playReducer.category,
    value: state.playReducer.value,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setvalue: (value) => dispatch(setvalue(value)),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Question);
