import React from "react";
import { StyleSheet, View, FlatList, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Text from "../components/Text/Text";
import { RootStackParamList, DetailParams } from "../types";

type Navigation = NativeStackScreenProps<RootStackParamList, "WorkoutDetail"> &
	DetailParams;

function WorkoutDetailScreen({ route }: Navigation) {
	return (
		<View style={styles.container}>
			<Text text={route.params.slug} size={20} type="lato-bold" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		padding: 20,
	},
	header: {
		fontSize: 20,
		textAlign: "center",
	},
});

export default WorkoutDetailScreen;
