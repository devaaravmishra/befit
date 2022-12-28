import React from "react";
import { StyleSheet, View } from "react-native";
import { Workout } from "../types";

import Text from "../components/Text/Text";
import secToMin from "../utils/time";

const RenderWorkouts = ({ item }: { item: Workout }) => (
	<View style={styles.container}>
		<Text text={item.name} size={15} />
		<Text text={"Duration: " + secToMin(item.duration)} size={15} />
		<Text text={"Difficulty: " + item.difficulty} size={15} />
	</View>
);

const styles = StyleSheet.create({
	container: {
		width: "100%",
		borderRadius: 10,
		borderColor: "rgba(0,0,0, 0.1)",
		borderWidth: 1,
		padding: 10,
		marginTop: 10,
		marginBottom: 10,
		backgroundColor: "#fff",
	},
	name: {
		fontSize: 15,
		fontWeight: "bold",
		marginBottom: 5,
	},
	duration: {
		fontSize: 15,
	},
	difficulty: {
		fontSize: 15,
	},
});

export default RenderWorkouts;
