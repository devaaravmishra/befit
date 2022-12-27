import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../types";

function HomeScreen({
	navigation,
}: NativeStackScreenProps<RootStackParamList, "Home">) {
	return (
		<View style={styles.container}>
			<Button
				title="Go to Planner"
				onPress={() => navigation.navigate("Planner")}
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

export default HomeScreen;
