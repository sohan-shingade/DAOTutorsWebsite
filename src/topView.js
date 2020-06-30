import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import HoverableText from "./HoverableText";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

const windowwidth = Dimensions.get("window").width;
const windowheight = Dimensions.get("window").height;

const DAOHeaderLink = (props) => (
  <TouchableOpacity style={styles.aboutUsNoHoverView} onPress={props.onPress}>
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
    //this.aboutUsPressed = this.aboutUsPressed.bind(this);
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
    // const { aboutUsMove, tutorMove } = this.props;
    return (
      <View style={{ height: 100 }}>
        <View style={styles.topInfo}>
          <View style={styles.daotutortitle}>
            <DAOlogoheader />
            <Text style={styles.daotutorstext}>DAO Tutors</Text>
          </View>
          {/* <View style={styles.empty} /> */}
          <View style={styles.daoheaderlinks}>
            <DAOHeaderLink text={"About us"} onPress={this.props.aboutUsMove} />

            <DAOHeaderLink text={"Tutoring"} onPress={this.props.tutorMove} />

            <DAOHeaderLink
              text={"Contact Us"}
              onPress={() => this.contactUsPressed}
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
      </View>
    );
  }
}

const triggerStyles = {
  triggerOuterWrapper: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: 100,
  },
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    flex: 0,
  },
  empty: {
    flex: 1,
  },
  backdrop: {
    height: 100,
    flex: 0,
  },
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

    flex: 3,
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
    width: windowwidth / 30,
    height: windowwidth / 30,
    color: "white",
  },
  aboutUsHover: {
    fontFamily: "Manrope",
    fontWeight: 500,
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
    fontFamily: "Manrope",
    fontWeight: 500,
    fontSize: 0.02 * windowwidth,
    color: "white",
    //backgroundColor: "transparent",
    textAlign: "center",
    textAlignVertical: "middle",
    //alignSelf: "center",
    justifyContent: "center",
    //flex: 1,
  },

  daotutorstext: {
    paddingLeft: windowwidth / 15,
    fontFamily: "Manrope",
    fontWeight: 800,
    fontSize: 0.046 * windowwidth,
    color: "white",
    alignSelf: "center",
  },
  daologoheader: {
    left: windowwidth / 20,
    height: windowheight / 10,
    width: windowheight / 10,
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
