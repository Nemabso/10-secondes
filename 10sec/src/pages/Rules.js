import React, { Component } from "react";
import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from "react-native";
import {
  AdMobBanner,
  AdMobInterstitial,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';

import RulesStyle from "../styles/RulesStyle";
const styles = StyleSheet.create({ ...RulesStyle });
import background_NoMotif from "../../assets/background_NoMotif.jpg";
import Icon from "react-native-vector-icons/FontAwesome";

class Rules extends Component {
  


  render() {
    return (
      <ImageBackground
        source={background_NoMotif}
        style={styles.backgroundImage}
      >
        <View style={styles.bannerAd} >
          <AdMobBanner
            bannerSize="smartBannerPortrait"
            adUnitID="ca-app-pub-8171099142584641/8236165479" // Test ID, Replace with your-admob-unit-id
            servePersonalizedAds // true or false
            onDidFailToReceiveAdWithError={this.bannerError} />
        </View>
        <View style={styles.begin}>
          <View style={styles.beginLeft}>
            <TouchableOpacity
              style={styles.backIcon}
              onPress={() => this.props.navigation.navigate("Welcome")}
            >
              <Icon name={"chevron-left"} size={25} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.beginRight}></View>
        </View>

        <View style={styles.centercontainer}>
          <View style={styles.center1}></View>
          <View style={styles.center2}>

            <View style={styles.space1}>
              <Text style={styles.text1}>Hello,{"\n"}</Text>
              <Text style={styles.text2}>Bienvenue sur 10 secondes.</Text>
            </View>

            <View style={styles.space2}>
              <Text style={styles.text3}>
                Les règles sont simples, {"\n"}Vous avez un temps imparti pour
                {"\n"}
                répondre à une question {"\n"}Ex : Tu as 10 secondes pour me
                {"\n"}
                citer 5 fruits.
              </Text>
            </View>
            <View style={styles.space}>
              <Text style={styles.text4}>
                Si la personne trouve 4 fruits elle{"\n"}prend une pénalité, si
                elle trouve 7{"\n"}fruits elle peut donner deux pénalités.
                {"\n"}A chaque proposition qui n’est pas{"\n"}un fruit : Une
                pénalité en plus.
              </Text>
            </View>

          </View>
          <View style={styles.center3}></View>
        </View>
        <View style={styles.end}>
          <View style={styles.endLeft}></View>
          <View style={styles.endRight}>
            <TouchableOpacity
              style={styles.goIcon}
              onPress={() => this.props.navigation.navigate("Registering")}
            >
              <Text style={styles.gotext}>GO !</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default Rules;
