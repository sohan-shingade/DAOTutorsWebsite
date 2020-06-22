import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import HoverableView from "./HoverableView";
import HoverableText from "./HoverableText";

const DAOlogoheader = () => (
  <Image
    style={styles.daologoheader}
    source={require("./assets/img/DAOtutorlogotest3.png")}
  />
);
class TopView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ishover: false,
      thiscolor: "black",
    };
    this.aboutUsPressed = this.aboutUsPressed.bind(this);
  }
  aboutUsPressed = () => {
    console.log("about us");
  };
  tutoringPressed = () => {
    console.log("tutoring");
  };
  contactUsPressed = () => {
    console.log("contact us");
  };

  render() {
    return (
      <View style={styles.topInfo}>
        <View style={styles.daotutortitle}>
          <DAOlogoheader />
          <Text style={styles.daotutorstext}>DAO Tutors</Text>
        </View>
        <View style={styles.daoheadempty} />
        <View style={styles.daoheaderlinks}>
          <TouchableOpacity
            style={styles.aboutUsNoHoverView}
            onPress={this.aboutUsPressed}
          >
            <HoverableText
              style={styles.aboutUsNoHover}
              onHover={styles.aboutUsHover}
            >
              About Us
            </HoverableText>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.aboutUsNoHoverView}
            onPress={this.tutoringPressed}
          >
            <HoverableText
              style={styles.aboutUsNoHover}
              onHover={styles.aboutUsHover}
            >
              Tutoring
            </HoverableText>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.aboutUsNoHoverView}
            onPress={this.contactUsPressed}
          >
            <HoverableText
              style={styles.aboutUsNoHover}
              onHover={styles.aboutUsHover}
            >
              Contact Us
            </HoverableText>
          </TouchableOpacity>

          <View style={{ flex: 1 }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topInfo: {
    height: 100,
    justifyContent: "flex-start",
    backgroundColor: "#764ABC",
    flexDirection: "row",
    alignContent: "center",
  },

  daotutortitle: {
    flexDirection: "row",
    justifyContent: "flex-start",

    flex: 4,
  },
  daoheadempty: {
    flex: 2,
  },
  daoheaderlinks: {
    flex: 4,
    flexDirection: "row",
  },
  aboutUsHover: {
    fontFamily: "Manrope-Medium",
    fontSize: 20,
    color: "#dad5ff",
    //backgroundColor: "white",
    textAlign: "center",
    textAlignVertical: "center",
    //alignSelf: "center",
    justifyContent: "center",
    //flex: 1,
  },
  aboutUsNoHover: {
    fontFamily: "Manrope-Medium",
    fontSize: 20,
    color: "white",
    //backgroundColor: "transparent",
    textAlign: "center",
    textAlignVertical: "middle",
    //alignSelf: "center",
    justifyContent: "center",
    //flex: 1,
  },

  daotutorstext: {
    paddingLeft: 70,
    fontFamily: "Manrope-ExtraBold",
    fontSize: 40,
    color: "white",
    alignSelf: "center",
  },
  daologoheader: {
    left: 50,
    height: 70,
    width: 70,
    alignSelf: "center",
  },
  aboutUsHoverView: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  aboutUsNoHoverView: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default TopView;
