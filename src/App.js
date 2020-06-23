import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import TopView from "./topView";

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <TopView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default App;
