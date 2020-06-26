import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import Images from "../../config/images";
import constants from "../../config/constants";
export default function DietCard({ data }) {
    return (
        // <View>
        <View style={styles.routineImageContainer}>
            <Image
              style={styles.routineImage}
              source={{ uri: data.image }}
            />
            <View style={styles.routineMainContentContainer}>
                <Text style={styles.routineContentFont}> {data.name} </Text>
                <Text style={styles.routineSubContentFont}> Current Plan </Text>
                <Text style={styles.routineLineContentFont}> This program has been designed to put your, </Text>
                <Text style={styles.routineLineContentFont}> body through cardio hell and burn </Text>
                <Text style={styles.routineLineContentFont}> maximum fat. You'll be gasping for air. </Text>
            </View>
          </View>
        
    
    );
}