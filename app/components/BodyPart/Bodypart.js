import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import Images from "../../config/images";
import constants from "../../config/constants";

export default function BodyPart({ title, selected, onSelect, data }) {
    return (
        <TouchableOpacity 
            style={selected ? styles.containerSelected : styles.container} 
            activeOpacity={constants.ACTIVE_OPACITY}
            onPress={() => onSelect()}
        >
            <Image style={selected ? styles.bodypartsImagesSelected : styles.bodypartsImage} source={selected ? Images.sportSelected : Images.sport} resizeMode="contain" />
            <Text style={selected ? styles.selectedLabel : styles.label}>{data.name}</Text>
        </TouchableOpacity>
    );
}