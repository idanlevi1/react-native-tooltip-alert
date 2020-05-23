# react-native-tooltip-alert

[![npm version](https://badge.fury.io/js/react-native-tooltip-alert.svg)](//npmjs.com/package/react-native-tooltip-alert)
[![npm downloads](https://img.shields.io/npm/dm/react-native-tooltip-alert.svg)
](//npmjs.com/package/react-native-tooltip-alert)

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
import { View } from "react-native";
import TooltipAlert from "react-native-tooltip-alert";

export default class Example extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TooltipAlert>
          <View>
              <Text>Open Tooltip</Text>
          </View>
        </TooltipAlert>
      </View>
    );
  }
}
```

#### Functional component

```jsx
import React, { useRef } from "react";
import { View } from "react-native";
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
      <TooltipAlert>
        <View>
            <Text>Open Tooltip</Text>
        </View>
      </TooltipAlert>
    </View>
  );
}
```

## Props
title, contentText, confirmButtonText, cancelButtonText, color, height
| Props            | Type     | Description                                             | Default  |
| ---------------- | -------- | ------------------------------------------------------- | -------- |
| title            | string   | Tooltip title text                                      | "Title"  |
| contentText      | string   | Tooltip content text                                    | "Content text" |
| onConfirm        | function | Callback when on confirm clicked (onClose call after)   | null     |
| onCancel         | function | Callback when on cancel clicked (onClose call after)    | null     |
| confirmButtonText| string   | Tooltip confirm button text                             | "Confirm"|
| confirmButtonText| string   | Tooltip cancel button text                                      | "Close"  |
| height           | number   | Height of tooltip                                       | 260      |
| closeOnPressMask | boolean  | Press the area outside to close Bottom Sheet            | true     |
| closeOnPressBack | boolean  | Press back android to close Bottom Sheet (Android only) | true     |
| customStyles     | object   | Custom style to Bottom Sheet                            | {}       |

### Available Custom Style

```
customStyles: {
  wrapper: {...}, // The Root of Component (You can change the `backgroundColor` or any styles)
  container: {...}, // The Container of Bottom Sheet
  draggableIcon: {...} // The Draggable Icon (If you set closeOnDragDown to true)
}
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/idanlevi1/react-native-tooltip-alert/blob/master/LICENSE) file for details

## Author

Made by [Idanlevi1](https://github.com/idanlevi1).
