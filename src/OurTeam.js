import React from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";

const team = [
  {
    name: "Rishab Rangeneni",
    discription:
      "This is Rishab Ragineni. Rishab is a rising 11th grader who has 3+ years of programming experience. He is also extremely capable of teaching a variety of mathematical topics as in 8th grade, Rishab qualified for the AIME math competition by scoring a 126 on the AMC 10. He has greatly enjoyed teaching ever since middle school and hopes to mentor kids who possess the same yearning for knowledge and liking of Math and Computer Science as he does.",
  },
  {
    name: "Arul Trivedi",
    discription:
      "This is Arul Trivedi. Arul has just completed 10th grade, and is going into AP Calculus BC next year. He has a passion for Computer Science and programming, and has been very interested in the field for several years. He hopes to teach kids valuable skills in Math and Computer Science for their future.",
  },
  {
    name: "Sohan Shingade",
    discription:
      "This is Sohan Shingade. Sohan has created many apps and websites and is proficient in many programming languages. He will take AP Computer Science next year. He loves to code and create programs and is very intrested in the computer science field.",
  },
];

const windowwidth = Dimensions.get("window").width;

export default class OurTeam extends React.Component {
  renderOneTeam = (item) => {
    return (
      <View style={styles.personView}>
        <View style={styles.imgAndName}>
          <Image
            style={styles.daologoheader}
            source={require("./assets/img/Headshot-Placeholder-1.png")}
          />
          <Text style={styles.name}>{item.item.name}</Text>
        </View>
        <Text style={[styles.name, styles.discription]}>
          {item.item.discription}
        </Text>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.titleView}>
        <Text adjustsFontSizeToFit style={styles.titleText}>
          Our Team
        </Text>
        <FlatList
          data={team}
          renderItem={(item) => this.renderOneTeam(item)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleView: {
    flex: 1,
    margin: 25,
    padding: 25,
    borderRadius: 50,
    backgroundColor: "white",
  },
  daologoheader: {
    height: windowwidth / 7,
    width: windowwidth / 7,
  },
  personView: {
    padding: windowwidth / 25,
    flexDirection: "row",
  },
  imgAndName: {
    paddingBottom: windowwidth / 50,
    paddingRight: windowwidth / 30,
    width: windowwidth / 6,
    height: windowwidth / 6,
    alignItems: "flex-start",
  },
  titleText: {
    fontFamily: "Manrope",
    fontWeight: 800,
    fontSize: 0.055 * Dimensions.get("window").width,
    paddingLeft: windowwidth / 20,
    paddingTop: 30,
    width: (windowwidth * 2) / 3,
    color: "#764ABC",
  },
  name: {
    paddingTop: windowwidth / 70,
    fontFamily: "Manrope",
    fontWeight: 600,
    fontSize: 0.018 * Dimensions.get("window").width,
    color: "#764ABC",
  },
  discription: {
    paddingTop: 0,
    fontWeight: 600,
    fontSize: 0.02 * Dimensions.get("window").width,
  },
});
