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
import {

  AdMobInterstitial,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';

import WarningStyle from "../styles/WarningStyle";
const styles = StyleSheet.create({ ...WarningStyle });
import background_NoMotif from "../../assets/background_NoMotif.jpg";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { setplayersok } from "../Actions/playActions";
import { setcategory } from "../Actions/playActions";
import { setvalue } from "../Actions/playActions";
class Warning extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() { }
  go = () => {
    this.props.setvalue(1);

    this.props.navigation.navigate("Question");
  };

  render() {
    return (
      <ImageBackground
        source={background_NoMotif}
        style={styles.backgroundImage}
      >
        <View style={styles.begin}>
          <View style={styles.beginLeft}>
            <TouchableOpacity
              style={styles.backIcon}
              onPress={ async () => {
                // this.props.setcategory({});
                this.props.navigation.navigate("Categories");
                await AdMobInterstitial.setAdUnitID('ca-app-pub-8171099142584641/7280152931'); // Test ID, Replace with your-admob-unit-id
                await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
                await AdMobInterstitial.showAdAsync();
                
              }}
            >
              <Icon name={"chevron-left"} size={25} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.beginRight}></View>
        </View>
        <View style={styles.centercontainer}>
          <Text style={styles.warningtext}>ATTENTION</Text>
          <Image source={this.props.player.image} style={styles.img} />
          <Text style={styles.nametext}>
            {this.props.player.name.toUpperCase()}
          </Text>
          <Text style={styles.text}>C'est à toi de jouer !</Text>
          <TouchableOpacity style={styles.goIcon} onPress={this.go}>
            <Text style={styles.gotext}>GO !</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.end}></View>
      </ImageBackground>
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
    setcategory: (category) => dispatch(setcategory(category)),
    setvalue: (value) => dispatch(setvalue(value)),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Warning);
