import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import Images from "../../config/images";
import constants from "../../config/constants";

export default function Days({ title, selected, onSelect, data }) {
    return (
        <TouchableOpacity 
            style={styles.container} 
            activeOpacity={constants.ACTIVE_OPACITY}
            onPress={() => onSelect()}
        >
            <Text style={selected ? styles.selectedLabel : styles.label}>
                {/* {data.name} */}
            {data.name=='Day 1' ? "Mon" : ""}
            {data.name=='Day 2' ? "Tue" : ""}
            {data.name=='Day 3' ? "Wed" : ""}
            {data.name=='Day 4' ? "Thu" : ""}
            {data.name=='Day 5' ? "Fri" : ""}
            {data.name=='Day 6' ? "Sat" : ""}
            {data.name=='Day 7' ? "Sun" : ""}
            </Text>
        </TouchableOpacity>
    );
}