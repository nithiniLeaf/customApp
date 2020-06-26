import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import Images from "../../config/images";
import constants from "../../config/constants";
export default function MealsCard({ data }) {
  const {image, ingredients, name, calories} = data;
    return (
      <View style={styles.container}>
      <View style={styles.routineName}>
            <Text style={styles.mealsFont}> 
            {data.type == 1 ? "Breakfast" : ""}
            {data.type == 2 ? "Lunch" : ""}
            {data.type == 3 ? "Dinner" : ""}
            </Text>
        </View>
        <View style={styles.routineImageContainer}>
          <Image
            style={styles.routineImage}
            source={{
              uri: image,
            }}
             resizeMode="cover" 
          />
          <View style={styles.routineMainContentContainer}>
            <View style={styles.routineContentContainer}>
              <View style={styles.commonFlex}>
                <Text style={styles.routineContentFont}>{name} </Text>
              </View>
              <View style={styles.commonFlex}>
                <Text style={styles.routineCalories}> {calories}cal </Text>
              </View>
            </View>
            <View style={styles.routineSubContentContainer}>
            {ingredients.map(item => (
            <Text style={styles.routineSubContentFont} key={item.uid}>
              <Text style={styles.greyPoints}>{'\u2B24'}  </Text>
                {item.name} 
            </Text>
          ))}
            </View>
          </View>
        </View>
    </View>
        
    
    );
}