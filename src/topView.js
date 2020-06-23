import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import HoverableText from "./HoverableText";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

const DAOHeaderLink = (props) => (
  <TouchableOpacity style={styles.aboutUsNoHoverView} onPress={props.pressed()}>
    <HoverableText style={styles.aboutUsNoHover} onHover={styles.aboutUsHover}>
      {props.text}
    </HoverableText>
  </TouchableOpacity>
);
const DAOlogoheader = () => (
  <Image
    style={styles.daologoheader}
    source={require("./assets/img/DAOtutorlogotest3.png")}
  />
);
const UserImgHeader = () => (
  <View style={styles.userImgHeaderView}>
    <Image
      style={styles.userImgHeader}
      source={require("./assets/img/bx-user-circle.svg")}
    />
  </View>
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
  aboutUsPressed() {
    console.log("about us");
  }
  tutoringPressed() {
    console.log("tutoring");
  }
  contactUsPressed() {
    console.log("contact us");
  }

  render() {
    return (
      <MenuProvider>
        <View style={styles.topInfo}>
          <View style={styles.daotutortitle}>
            <DAOlogoheader />
            <Text style={styles.daotutorstext}>DAO Tutors</Text>
          </View>
          <View style={styles.daoheadempty} />
          <View style={styles.daoheaderlinks}>
            <DAOHeaderLink
              text={"About us"}
              pressed={() => this.aboutUsPressed}
            />

            <DAOHeaderLink
              text={"Tutoring"}
              pressed={() => this.tutoringPressed}
            />

            <DAOHeaderLink
              text={"Contact Us"}
              pressed={() => this.contactUsPressed}
            />
            <View style={styles.userImgHeaderView}>
              <Menu
                name="menu"
                onSelect={(value) => alert(`Selected number: ${value}`)}
              >
                <MenuTrigger customStyles={triggerStyles}>
                  <UserImgHeader />
                </MenuTrigger>
                <MenuOptions
                  optionsContainerStyle={{ marginTop: 40, width: 80 }}
                >
                  <MenuOption value={1} text="My Account" />
                  <MenuOption value={2}>
                    <Text style={{ color: "red" }}></Text>
                  </MenuOption>
                  <MenuOption value={3} disabled={true} text="Three" />
                </MenuOptions>
              </Menu>
            </View>
          </View>
        </View>
      </MenuProvider>
    );
  }
}

const triggerStyles = {
  triggerOuterWrapper: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
};

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
  userImgHeaderView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  userImgHeader: {
    width: 40,
    height: 40,
    color: "white",
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
