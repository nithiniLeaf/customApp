import React from "react";
import { View, Text, ActivityIndicator, SafeAreaView } from "react-native";
import styles from "./styles";
import constants from "../../config/constants";

export default function Loading() {
	return (
		<View style={styles.container}>
			<ActivityIndicator size="large" color={constants.APP_GREY_COLOR} />
		</View>
	);
}
