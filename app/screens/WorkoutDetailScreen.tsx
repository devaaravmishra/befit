import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text as RT } from "react-native";
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
import RenderWorkouts from "../components/Workout/RenderWorkout";
import useCountDown from "../hooks/useCountDown";
import Button from "../components/Button/Button";

type Navigation = NativeStackScreenProps<RootStackParamList, "WorkoutDetail"> &
	DetailParams;

function WorkoutDetailScreen({ route }: Navigation) {
	const [sequence, setSequence] = useState<SequenceType[]>([]);
	const [trackerIdx, setTrackerIdx] = useState(-1);
	const workout = useWorkout(route.params.slug);

	const startUpSeq = ["Go...", "1", "2", "3"];
	const { countDown, isRunning, stop, start } = useCountDown(trackerIdx);

	useEffect(() => {
		if (!workout || trackerIdx === workout.sequence.length - 1) return;

		if (countDown === 0) addItemToSequence(trackerIdx + 1);
	}, [countDown]);

	const addItemToSequence = (idx: number) => {
		const newSequence = [...sequence, workout!.sequence[idx]];
		setSequence(newSequence);
		setTrackerIdx(idx);
		start(newSequence[idx].duration + startUpSeq.length);
	};

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
					text={`${item.name.toUpperCase()} | ${item.type.toUpperCase()} | ${secToMin(
						item.duration
					)}`}
					style={{ marginBottom: 10 }}
				/>
				{idx == len - 1 ? null : (
					<FontAwesome
						name="arrow-down"
						size={30}
						style={{ marginBottom: 15 }}
					/>
				)}
			</View>
		);
	};

	const hasReachedEnd =
		sequence.length === workout?.sequence.length && countDown === 0;

	return (
		<View style={styles.container}>
			{workout && <RenderWorkouts item={workout as Workout} />}
			<Modal
				data={
					workout?.sequence.map((item, idx) => (
						<RenderSequence
							key={item.slug}
							item={item}
							idx={idx}
							len={workout.sequence.length}
						/>
					)) as React.ReactNode
				}
				toggleTitle={"Check Sequence"}
			/>
			<View style={styles.wrapper}>
				{sequence.length === 0 ? (
					<FontAwesome
						name="play-circle-o"
						size={100}
						style={styles.icon}
						onPress={() => addItemToSequence(0)}
					/>
				) : isRunning ? (
					<FontAwesome
						name="stop-circle-o"
						size={100}
						style={styles.icon}
						onPress={() => stop()}
					/>
				) : (
					<FontAwesome
						name="play-circle-o"
						size={100}
						style={styles.icon}
						onPress={() => start(countDown)}
					/>
				)}
				{sequence.length > 0 && countDown >= 0 && (
					<View style={styles.centerView}>
						<Text
							text={`${
								countDown > sequence[trackerIdx].duration
									? startUpSeq[
											countDown -
												sequence[trackerIdx].duration -
												1
									  ]
									: countDown
							}`}
							size={40}
						/>
					</View>
				)}
				<View style={styles.centerView}>
					<Text
						text={
							sequence.length === 0
								? "Prepare"
								: hasReachedEnd
								? "Great Job, Workout Finished!"
								: sequence[trackerIdx]?.name
						}
						size={20}
					/>
					{hasReachedEnd && (
						<Button
							text="Retry"
							onPress={() => {
								setTrackerIdx(-1);
								setSequence([]);
							}}
							style={{ width: 100, marginTop: 20 }}
						/>
					)}
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		marginTop: 100,
	},
	centerView: {
		flexDirection: "column",
		alignItems: "center",
		marginTop: 40,
		justifyContent: "center",
	},
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
	icon: {
		marginTop: 50,
		alignSelf: "center",
	},
	wrapper: {
		marginTop: 20,
		borderRadius: 10,
		borderColor: "rgba(0,0,0,0.1)",
		backgroundColor: "#fff",
		borderWidth: 1,
		paddingBottom: 20,
	},
});

export default WorkoutDetailScreen;
