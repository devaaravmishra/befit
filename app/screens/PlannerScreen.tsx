import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../types";
import WorkoutForm, { Exercise } from "../components/Form/WorkoutForm";

type Props = NativeStackScreenProps<RootStackParamList, "Planner">;

function PlannerScreen({ navigation }: Props) {
	const handleOnSubmit = (form: Exercise) => {
		alert(form.name);
	};

	return (
		<View style={styles.container}>
			<WorkoutForm onSubmit={handleOnSubmit} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#eee",
	},
});

export default PlannerScreen;
