import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";

export default class TitleView extends React.Component {
  render() {
    console.log(Platform.OS);
    return (
      <View style={styles.titleView}>
        {Platform.OS === "web" ? (
          <Text adjustsFontSizeToFit style={styles.titleText}>
            Learn Programming for free!
          </Text>
        ) : (
          <Text adjustsFontSizeToFit style={styles.titleText}>
            PHONEBEANS
          </Text>
        )}
        <Image
          style={styles.img}
          source={require("./assets/img/scene-one.svg")}
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
  },
  img: {
    width: Dimensions.get("window").width / 2,
    height: ((Dimensions.get("window").width / 2) * 594.92) / 744.66,
    aspectRatio: 744.66 / 594.92,
    margin: Dimensions.get("window").width / 20,
    //marginTop: -Dimensions.get("window").height / 15,
    zIndex: -1,
    alignSelf: "flex-end",
  },
  titleText: {
    fontFamily: "Manrope",
    fontWeight: 800,
    fontSize: 0.055 * Dimensions.get("window").width,
    paddingLeft: Dimensions.get("window").width / 20,
    paddingTop: 30,
    width: (Dimensions.get("window").width * 2) / 3,
    color: "#764ABC",
  },
});
