import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import styles from "./style";
import Images from "../../config/images";
import constants from "../../config/constants";

export default function Week({ title, selected, onSelect, data }) {
    
    return (
        <TouchableOpacity 
            style={styles.container} 
            activeOpacity={constants.ACTIVE_OPACITY}
            onPress={() => onSelect()}
        >
            <Text style={selected ? styles.selectedLabel : styles.label}>{data.name}</Text>
                
                {/* {data?.days?.map((days) => (
                   
					<Text style={styles.greyText}>
						{days.name}
					</Text>
                    
				))} */}
        </TouchableOpacity>
    );
}