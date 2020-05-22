# react-native-tooltip-alert

[![npm version](https://badge.fury.io/js/react-native-tooltip-alert.svg)](//npmjs.com/package/react-native-tooltip-alert)
[![npm downloads](https://img.shields.io/npm/dm/react-native-tooltip-alert.svg)
](//npmjs.com/package/react-native-tooltip-alert)
[![Build Status](https://travis-ci.org/idanlevi1/react-native-tooltip-alert.svg?branch=master)](https://travis-ci.org/idanlevi1/react-native-tooltip-alert)

- Super Lightweight Component
- Add Your own Component To Bottom Sheet
- Customize Whatever You Like
- Support Drag Down Gesture
- Support All Orientations
- Support Both Android And iOS
- Smooth Animation
- Zero Configuration
- Zero dependency
- Top Search Ranking (react native bottom sheet) at [npms.io](https://npms.io/search?q=react%20native%20bottom%20sheet)

|                                                      Showcase iOS                                                      |                                                    Showcase Android                                                    |
| :--------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: |
| ![](https://raw.githubusercontent.com/idanlevi1/stock-images/master/react-native-tooltip-alert/RNRBS-IOS-2.0.3.gif) | ![](https://raw.githubusercontent.com/idanlevi1/stock-images/master/react-native-tooltip-alert/RNRBS-AOS-2.0.3.gif) |

## Installation

```
npm i react-native-tooltip-alert --save
```

### or

```
yarn add react-native-tooltip-alert
```

## Example

#### Class component

```jsx
import React, { Component } from "react";
import { View, Button } from "react-native";
import TooltipAlert from "react-native-tooltip-alert";

export default class Example extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button title="OPEN BOTTOM SHEET" onPress={() => this.TooltipAlert.open()} />
        <TooltipAlert
          ref={ref => {
            this.TooltipAlert = ref;
          }}
          height={300}
          openDuration={250}
          customStyles={{
            container: {
              justifyContent: "center",
              alignItems: "center"
            }
          }}
        >
          <YourOwnComponent />
        </TooltipAlert>
      </View>
    );
  }
}
```

#### Functional component

```jsx
import React, { useRef } from "react";
import { View, Button } from "react-native";
import TooltipAlert from "react-native-tooltip-alert";

export default function Example() {
  const refTooltipAlert = useRef();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000"
      }}
    >
      <Button title="OPEN BOTTOM SHEET" onPress={() => refTooltipAlert.current.open()} />
      <TooltipAlert
        ref={refTooltipAlert}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <YourOwnComponent />
      </TooltipAlert>
    </View>
  );
}
```

#### Dynamic Bottom Sheet

```jsx
renderItem = (item, index) => (
  <View>
    <Button title={`OPEN BOTTOM SHEET-${index}`} onPress={() => this[TooltipAlert + index].open()} />
    <TooltipAlert
      ref={ref => {
        this[TooltipAlert + index] = ref;
      }}
    >
      <YourOwnComponent onPress={() => this[TooltipAlert + index].close()} />
    </TooltipAlert>
  </View>
);
```

## Props

| Props            | Type     | Description                                             | Default  |
| ---------------- | -------- | ------------------------------------------------------- | -------- |
| animationType    | string   | Background animation ("none", "fade", "slide")          | "none"   |
| height           | number   | Height of Bottom Sheet                                  | 260      |
| minClosingHeight | number   | Minimum height of Bottom Sheet before close             | 0        |
| openDuration     | number   | Open Bottom Sheet animation duration                    | 300 (ms) |
| closeDuration    | number   | Close Bottom Sheet animation duration                   | 200 (ms) |
| closeOnDragDown  | boolean  | Use gesture drag down to close Bottom Sheet             | false    |
| dragFromTopOnly  | boolean  | Drag only the top area of the draggableIcon to close Bottom Sheet instead of the whole content | false    |
| closeOnPressMask | boolean  | Press the area outside to close Bottom Sheet            | true     |
| closeOnPressBack | boolean  | Press back android to close Bottom Sheet (Android only) | true     |
| onClose          | function | Callback function when Bottom Sheet has closed          | null     |
| onOpen           | function | Callback function when Bottom Sheet has opened          | null     |
| customStyles     | object   | Custom style to Bottom Sheet                            | {}       |
| keyboardAvoidingViewEnabled     | boolean   | Enable KeyboardAvoidingView             | true (ios) |

### Available Custom Style

```
customStyles: {
  wrapper: {...}, // The Root of Component (You can change the `backgroundColor` or any styles)
  container: {...}, // The Container of Bottom Sheet
  draggableIcon: {...} // The Draggable Icon (If you set closeOnDragDown to true)
}
```

## Methods

| Method Name | Description        |
| ----------- | ------------------ |
| open        | Open Bottom Sheet  |
| close       | Close Bottom Sheet |

## Note

- If you combind `TooltipAlert` with <a href="https://github.com/kmagiera/react-native-gesture-handler" target="_blank">react-native-gesture-handler</a>, the components inside TooltipAlert will not fire onPress event on Android [#37](https://github.com/idanlevi1/react-native-tooltip-alert/issues/37).
- The demo source codes are in `example folder`.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/idanlevi1/react-native-tooltip-alert/blob/master/LICENSE) file for details

## Author

Made with ❤️ by [NY Samnang](https://github.com/idanlevi1).
