import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

export default class AboutView extends React.Component {
  render() {
    return (
      <View style={styles.titleView}>
        <Text style={styles.titleText}>About Us</Text>
        <Text style={styles.aboutUsText}>
          DAO Tutors is a nonprofit organization dedicated to introducing young
          kids to programming.
        </Text>
        <Image
          style={styles.img}
          source={require("./assets/img/example-scene-1.svg")}
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
    backgroundColor: "#764ABC",
  },
  aboutUsText: {
    fontFamily: "Manrope",
    fontWeight: 600,
    fontSize: 40,
    width: Dimensions.get("window").width / 2,
    padding: 50,
    paddingTop: 20,
    color: "white",
  },
  img: {
    width: 600,
    height: 500,
    margin: 70,
    marginTop: -100,
    alignSelf: "flex-end",
  },
  titleText: {
    fontFamily: "Manrope",
    fontWeight: 800,
    fontSize: 60,
    paddingLeft: 50,
    paddingTop: 30,
    width: 700,
    color: "white",
  },
});
