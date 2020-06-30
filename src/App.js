import React, { Component } from "react";
import { View, ScrollView, Platform, Dimensions } from "react-native";
import TopView from "./topView";
import TitleView from "./TitleView";
import AboutView from "./AboutView";
import TutorView from "./TutorView";
import { MenuProvider, Menu } from "react-native-popup-menu";

class App extends Component {
  constructor(props) {
    super(props);

    console.log(Platform.OS);
  }

  returnAboutLayout = (layout) => {
    this.aboutUsY = layout.y;
  };

  returnTutorLayout = (layout) => {
    this.tutorY = layout.y;
  };

  render() {
    return (
      <MenuProvider style={{ backgroundColor: "#e1e1e1" }}>
        <Menu
          name="menu"
          onSelect={(value) => alert(`Selected number: ${value}`)}
        >
          <TopView
            aboutUsMove={this.moveToAboutUs}
            tutorMove={this.moveToTutor}
          />
          <ScrollView
            style={{
              maxHeight: 200000000,
              height: Dimensions.get("window").height - 100,
            }}
            ref={this._setRef}
          >
            <View>
              <TitleView />
              <AboutView returnLayout={this.returnAboutLayout} />
              <TutorView returnLayout={this.returnTutorLayout} />
            </View>
            <View style={{ height: 10000, backgroundColor: "orange" }} />
          </ScrollView>
        </Menu>
      </MenuProvider>
    );
  }
  _setRef = (ref) => {
    this.scrollRef = ref;
  };

  moveToAboutUs = () => {
    console.log("BEANS");
    this.scrollRef.scrollTo({ y: this.aboutUsY, animated: true });
  };
  moveToTutor = () => {
    console.log("EWT");
    this.scrollRef.scrollTo({ y: this.tutorY, animated: true });
  };
}

export default App;
