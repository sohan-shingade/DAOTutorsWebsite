import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class TitleView extends React.Component {
  render() {
    return (
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Learn Programming for free!</Text>
        <Image
          style={styles.img}
          source={require("./assets/img/scene-one.png")}
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

    backgroundColor: "#e1e1e1",
  },
  img: {
    width: 600,
    height: 500,
    margin: 70,
    marginTop: -100,
    alignSelf: "flex-end",
  },
  titleText: {
    fontFamily: "Manrope-ExtraBold",
    fontSize: 60,
    paddingLeft: 50,
    paddingTop: 30,
    width: 700,
    color: "#764ABC",
  },
});
