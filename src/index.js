/* eslint-disable no-use-before-define */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-unresolved */
import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Tooltip from "./Tooltip";

// children example:
// <TooltipAlert>
//     <View>
//         <Text>OpenTooltip</Text>
//     </View>
// </TooltipAlert>

class TooltipAlert extends Component {
    render() {
        return (
            <>
                <TouchableOpacity onPress={() => this.Message.open()} >
                    {this.props.children || <Text>Open Tooltip</Text>}
                </TouchableOpacity>

                <Tooltip
                    ref={ref => { this.Message = ref; }}
                    customStyles={{
                        mask: { backgroundColor: "transparent" },
                        container: { elevation: 100 }
                    }}>
                    <View style={styles.messageContainer}>
                        <Text style={styles.messageTitle}>Tooltip!</Text>
                        <Text style={styles.message}>
                            You can add your own component whatever you want. If you don't like our default style
                            you can customize whatever you like.</Text>
                        <View style={styles.messageButtonContainer}>
                            <TouchableOpacity style={styles.messageButton} onPress={() => this.Message.close()}>
                                <Text style={styles.messageButtonText}>CLOSE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.messageButton, styles.messageButtonRight]}
                                onPress={() => this.Message.close()}
                            >
                                <Text style={[styles.messageButtonText, styles.messageButtonTextRight]}>GREAT</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Tooltip>
            </>
        );
    }
}

const styles = StyleSheet.create({
    messageContainer: {
        flex: 1,
        padding: 25
    },
    messageTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#222"
    },
    message: {
        fontSize: 17,
        lineHeight: 24,
        marginVertical: 20
    },
    messageButtonContainer: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    messageButton: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderWidth: 2,
        borderRadius: 2,
        borderColor: "#82ff",
        marginLeft: 10
    },
    messageButtonText: {
        color: "#82ff",
        fontSize: 16,
        fontWeight: "bold"
    },
    messageButtonRight: {
        backgroundColor: "#82ff"
    },
    messageButtonTextRight: {
        color: "#fff"
    }
});

export default TooltipAlert;
