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

import WarningStyle from "../styles/WarningStyle";
const styles = StyleSheet.create({ ...WarningStyle });
import background_NoMotif from "../../assets/background_NoMotif.jpg";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { setplayersok } from "../Actions/playActions";
class Warning extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  IMAGES = {
    perso1: require("../../assets/personages/perso1.png"),
    perso2: require("../../assets/personages/perso2.png"),
    perso3: require("../../assets/personages/perso3.png"),
    perso4: require("../../assets/personages/perso4.png"),
    perso5: require("../../assets/personages/perso5.png"),
    perso6: require("../../assets/personages/perso6.png"),
    perso7: require("../../assets/personages/perso7.png"),
    perso8: require("../../assets/personages/perso8.png"),
    perso9: require("../../assets/personages/perso9.png"),
    perso10: require("../../assets/personages/perso10.png"),
  };
  componentDidMount() {}
  go = () => {
    this.props.navigation.navigate("Question");
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={background_NoMotif}
          style={styles.backgroundImage}
        >
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => {
              this.props.navigation.navigate("Categories");
            }}
          >
            <Icon name={"chevron-left"} size={25} color="white" />
          </TouchableOpacity>
          <View style={styles.centercontainer}>
            <Text style={styles.warningtext}>ATTENTION</Text>
            <Image
              source={this.IMAGES[this.props.player.image]}
              style={styles.img}
            />
            <Text style={styles.nametext}>
              {this.props.player.name.toUpperCase()}
            </Text>
            <Text style={styles.text}>C'est à toi de jouer !</Text>
            <TouchableOpacity style={styles.goIcon} onPress={this.go}>
              <Text style={styles.gotext}>GO !</Text>
            </TouchableOpacity>
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setplayersok: (data) => dispatch(setplayersok(data)),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Warning);
