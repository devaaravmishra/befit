import React from "react";
import { StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Text from "../components/Text/Text";
import {
	RootStackParamList,
	DetailParams,
	SequenceType,
	Workout,
} from "../types";
import useWorkout from "../hooks/useWorkoutBySlug";
import Modal from "../components/Modal/Modal";
import secToMin from "../utils/time";
import { FontAwesome } from "@expo/vector-icons";
import useWorkouts from "../hooks/useWorkouts";
import RenderWorkouts from "../components/RenderWorkout";

type Navigation = NativeStackScreenProps<RootStackParamList, "WorkoutDetail"> &
	DetailParams;

function WorkoutDetailScreen({ route }: Navigation) {
	const workout = useWorkout(route.params.slug);

	const RenderSequence = ({
		item,
		idx,
		len,
	}: {
		item: SequenceType;
		idx: number;
		len: number;
	}) => {
		return (
			<View style={styles.content} key={item.slug}>
				<Text
					text={`${item.name} | ${item.type} | ${secToMin(
						item.duration
					)}`}
				/>
				{idx == len - 1 ? null : <FontAwesome name="arrow-down" />}
			</View>
		);
	};
	return (
		<View style={styles.container}>
			{workout && <RenderWorkouts item={workout as Workout} />}
			<Modal
				data={
					workout?.sequence.map((item, idx) => (
						<RenderSequence
							item={item}
							idx={idx}
							len={workout.sequence.length}
						/>
					)) as React.ReactNode
				}
				toggleTitle={"Check Sequence"}
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
	content: {
		justifyContent: "center",
		alignItems: "center",
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
