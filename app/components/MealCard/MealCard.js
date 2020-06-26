import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import Images from "../../config/images";
import constants from "../../config/constants";
export default function MealCard({ data }) {
    return (
      <View>
        <View style={styles.routineName}>
              <Text style={styles.mealsFont}>{data.meal} </Text>
          </View>
          <View style={styles.routineImageContainer}>
            <Image
              style={styles.routineImage}
              source={Images.breakfast} resizeMode="cover" 
            />
            <View style={styles.routineMainContentContainer}>
              <View style={styles.routineContentContainer}>
                <View style={styles.commonFlex}>
                  <Text style={styles.routineContentFont}>{data.mainContent} </Text>
                </View>
                <View style={styles.commonFlex}>
                  <Text style={styles.routineCalories}> {data.calories} </Text>
                </View>
              </View>
              <View style={styles.routineSubContentContainer}>
                <Text style={styles.routineSubContentFont}>{data.subContent1} </Text>
                <Text style={styles.routineSubContentFont}>{data.subContent2} </Text>
                <Text style={styles.routineSubContentFont}>{data.subContent3} </Text>
                <Text style={styles.routineSubContentFont}>{data.subContent4} </Text>
              </View>
            </View>
          </View>
      </View>
        
    
    );
}