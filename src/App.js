import React, { Component } from "react";
import { View, ScrollView, Platform } from "react-native";
import TopView from "./topView";
import TitleView from "./TitleView";
import AboutView from "./AboutView";
import { MenuProvider, Menu } from "react-native-popup-menu";

class App extends Component {
  constructor(props) {
    super(props);

    console.log(Platform.OS);
  }

  returnLayout = (layout) => {
    this.aboutUsY = layout.y;
  };

  render() {
    return (
      <MenuProvider>
        <Menu
          name="menu"
          onSelect={(value) => alert(`Selected number: ${value}`)}
        >
          <TopView aboutUsMove={this.moveToAboutUs} />
          <ScrollView
            style={{ maxHeight: 200000000, height: 1000 }}
            ref={this._setRef}
          >
            <View>
              <TitleView />
              <AboutView returnLayout={this.returnLayout} />
            </View>
            <View style={{ height: 1000000, backgroundColor: "orange" }} />
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
}

export default App;
