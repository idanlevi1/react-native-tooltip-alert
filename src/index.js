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

    onCancel = () => {
        this.props.onCancel && this.props.onCancel()
        this.Tooltip.close()
    }

    onConfirm = () => {
        this.props.onConfirm && this.props.onConfirm()
        this.Tooltip.close()
    }

    render() {
        const { title, contentText, confirmButtonText, cancelButtonText, color= "#82ff" } = this.props
        return (
            <>
                <TouchableOpacity onPress={() => this.Tooltip.open()} >
                    {this.props.children || <Text>Open Tooltip</Text>}
                </TouchableOpacity>

                <Tooltip
                    ref={ref => { this.Tooltip = ref; }}
                    customStyles={{
                        mask: { backgroundColor: "transparent" },
                        container: { elevation: 100 }
                    }}
                    {...this.props}>
                    <View style={styles.tooltipContainer}>
                        <Text style={styles.tooltipTitle}>{title || 'Title'}</Text>
                        <Text style={styles.tooltip}>{contentText || 'Content text'}</Text>
                        <View style={styles.tooltipButtonContainer}>
                            <TouchableOpacity style={[styles.tooltipButton, { borderColor: color }]} onPress={this.onCancel}>
                                <Text style={[styles.tooltipButtonText, { color: color }]}>{cancelButtonText || 'Close'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.tooltipButton, styles.tooltipButtonRight, { borderColor: color, backgroundColor: color }]}
                                onPress={this.onConfirm}
                            >
                                <Text style={[styles.tooltipButtonText, styles.tooltipButtonTextRight]}>{confirmButtonText || 'Confirm'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Tooltip>
            </>
        );
    }
}

const styles = StyleSheet.create({
    tooltipContainer: {
        flex: 1,
        padding: 25,
        justifyContent: 'center'
    },
    tooltipTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#222"
    },
    tooltip: {
        fontSize: 17,
        lineHeight: 24,
        marginVertical: 20
    },
    tooltipButtonContainer: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    tooltipButton: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderWidth: 2,
        borderRadius: 2,
        borderColor: "#82ff",
        marginLeft: 10
    },
    tooltipButtonText: {
        color: "#82ff",
        fontSize: 16,
        fontWeight: "bold"
    },
    tooltipButtonRight: {
        backgroundColor: "#82ff"
    },
    tooltipButtonTextRight: {
        color: "#fff"
    }
});

export default TooltipAlert;
