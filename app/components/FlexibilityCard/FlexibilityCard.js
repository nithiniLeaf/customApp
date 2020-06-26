import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import Images from "../../config/images";
import constants from "../../config/constants";
export default function FlexibilityCard({ data }) {
    return (
        <View>
        <View style={styles.container}>
        <Image source={{ uri: data.image }} style={styles.image}  resizeMode={"cover"}/>
        </View>
        <View style={styles.description}>
            <Text style={styles.boldText}>{data.name}</Text>
				{data?.steps?.map((step) => (
					<Text style={styles.greyText} key={step.uid}>
						{step.name}
					</Text>
				))}
			<Text style={styles.boldText}>Hold stretch - {data.durationInSeconds} </Text>
        </View> 
        </View>
    );
}