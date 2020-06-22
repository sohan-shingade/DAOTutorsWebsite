import React from "react";
import { Text } from "react-native";

class HoverableText extends React.Component {
  setStyles = (styles) => {
    this.root.setNativeProps({
      style: styles,
    });
  };

  render() {
    const { onHover, style, ...passThrough } = this.props;
    return (
      <Text
        ref={(component) => {
          this.root = component;
        }}
        onMouseEnter={() => this.setStyles(onHover)}
        onMouseLeave={() => this.setStyles(style)}
        style={style}
        {...passThrough}
      />
    );
  }
}

export default HoverableText;
