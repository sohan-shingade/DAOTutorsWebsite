import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

export default class ContactUsView extends React.Component {
  static returnLayout() {
    console.log("returning Layout");
    return this.aboutUsLayout.y;
  }

  render() {
    return (
      <View
        onLayout={(event) => {
          const layout = event.nativeEvent.layout;
          this.props.returnLayout(layout);
        }}
        style={styles.titleView}
      >
        <Text style={styles.titleText}>Contact Us!</Text>
        <Text style={styles.aboutUsText}>Email: DAOTutors@gmail.com</Text>
        <Image
          style={styles.img}
          source={require("./assets/img/scene-four.svg")}
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
    backgroundColor: "white",
    borderRadius: 50,
  },
  aboutUsText: {
    fontFamily: "Manrope",
    fontWeight: 600,
    fontSize: 0.035 * Dimensions.get("window").width,
    width: Dimensions.get("window").width / 2,
    //padding: Dimensions.get("window").width / 35,
    paddingLeft: Dimensions.get("window").width / 35,
    paddingTop: Dimensions.get("window").width / 35,
    color: "#764ABC",
  },
  img: {
    width: Dimensions.get("window").width / 2.3,
    height: ((Dimensions.get("window").width / 2.3) * 773) / 776,
    aspectRatio: 776 / 773,
    marginLeft: Dimensions.get("window").width / 30,
    marginBottom: Dimensions.get("window").width / 30,
    //marginTop: Dimensions.get("window").height / 10,
    alignSelf: "flex-end",
  },
  titleText: {
    fontFamily: "Manrope",
    fontWeight: 800,
    fontSize: 0.055 * Dimensions.get("window").width,
    paddingLeft: Dimensions.get("window").width / 35,
    paddingTop: Dimensions.get("window").width / 35,
    width: (Dimensions.get("window").width * 2) / 3,
    color: "#764ABC",
  },
});
