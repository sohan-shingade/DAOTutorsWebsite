import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import TopView from "./topView";
import TitleView from "./TitleView";
import AboutView from "./AboutView";
import { MenuProvider, Menu } from "react-native-popup-menu";

class App extends Component {
  render() {
    return (
      <MenuProvider>
        <Menu
          name="menu"
          onSelect={(value) => alert(`Selected number: ${value}`)}
        >
          <TopView />
          <ScrollView style={{ maxHeight: 200000000, height: 1000 }}>
            <View>
              <TitleView />
              <AboutView />
            </View>
            <View style={{ height: 1000000, backgroundColor: "orange" }} />
          </ScrollView>
        </Menu>
      </MenuProvider>
    );
  }
}

const styles = StyleSheet.create({
  /*app: {
    flex: 1,
    backgroundColor: "white",
  },*/
});

export default App;
