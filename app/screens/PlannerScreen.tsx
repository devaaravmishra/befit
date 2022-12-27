import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../types";

function PlannerScreen({
	navigation,
}: NativeStackScreenProps<RootStackParamList, "Planner">) {
	return (
		<View style={styles.container}>
			<Button
				title="Go to Home"
				onPress={() => navigation.navigate("Home")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default PlannerScreen;
