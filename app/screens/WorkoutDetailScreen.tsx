import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Text from "../components/Text/Text";
import { RootStackParamList, DetailParams, Workout } from "../types";
import useWorkout from "../hooks/useWorkoutBySlug";
import Button from "../components/Button/Button";

type Navigation = NativeStackScreenProps<RootStackParamList, "WorkoutDetail"> &
	DetailParams;

function WorkoutDetailScreen({ route }: Navigation) {
	const workout = useWorkout(route.params.slug);

	return (
		<View style={styles.container}>
			<Text text={workout?.slug} size={20} type="lato-bold" />
			<Button
				onPress={() => alert(JSON.stringify(workout?.sequence))}
				text={"Check Sequence"}
			/>
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
	button: {
		marginTop: 100,
	},
});

export default WorkoutDetailScreen;
