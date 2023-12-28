import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const Title = (props) => {
    return (
        <View>
            <Text style={[styles.title, {color: props.color}]}>{props.numberOfLines} - {props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: "700",
    },

});
export default Title;