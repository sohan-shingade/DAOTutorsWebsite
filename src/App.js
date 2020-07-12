import React, { Component } from "react";
import { View, ScrollView, Platform, Dimensions } from "react-native";
import TopView from "./topView";
import TitleView from "./TitleView";
import AboutView from "./AboutView";
import TutorView from "./TutorView";
import ContactUsView from "./ContactUsView";
import OurTeam from "./OurTeam";

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
  returnContactLayout = (layout) => {
    this.countactY = layout.y;
  };

  render() {
    return (
      <View style={{ backgroundColor: "#e1e1e1" }}>
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
            <OurTeam />
            <TutorView returnLayout={this.returnTutorLayout} />
            <ContactUsView returnLayout={this.returnContactLayout} />
          </View>
        </ScrollView>
      </View>
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
