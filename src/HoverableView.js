import React from "react";
import { TouchableOpacity } from "react-native";

class HoverableView extends React.Component {
  setStyles = (styles) => {
    this.root.setNativeProps({
      style: styles,
    });
  };

  render() {
    const { onHover, style, onPress, ...passThrough } = this.props;
    return (
      <TouchableOpacity
        ref={(component) => {
          this.root = component;
        }}
        onMouseEnter={() => this.setStyles(onHover)}
        onMouseLeave={() => this.setStyles(style)}
        style={style}
        onPress={onPress}
        {...passThrough}
      />
    );
  }
}

export default HoverableView;
