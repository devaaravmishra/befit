import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import slugify from "slugify";

import { RootStackParamList, WorkoutType, SequenceType } from "../types";
import WorkoutForm, { Exercise } from "../components/Form/WorkoutForm";
import Text from "../components/Text/Text";
import Button from "../components/Button/Button";
import WorkoutItem from "../components/WorkoutItem";
import { FontAwesome } from "@expo/vector-icons";
import Modal from "../components/Modal/Modal";
import WorkoutsForm from "../components/Form/WorkoutsForm";

type Props = NativeStackScreenProps<RootStackParamList, "Planner">;

function PlannerScreen({ navigation }: Props) {
	const [seqItems, setSeqItems] = useState<SequenceType[]>([]);

	const handleOnSubmit = (form: Exercise) => {
		const sequenceItem: SequenceType = {
			slug: slugify(form.name + Date.now(), { lower: true }),
			name: form.name,
			duration: Number(form.duration),
			type: form.type as WorkoutType,
		};

		if (form.reps) sequenceItem.reps = Number(form.reps);

		setSeqItems([...seqItems, sequenceItem]);
	};

	return (
		<View style={styles.container}>
			<FlatList
				style={{ flex: 1 }}
				data={seqItems}
				keyExtractor={(item) => item.slug}
				renderItem={({ item, index }) => (
					<WorkoutItem item={item}>
						<FontAwesome
							name="trash"
							size={24}
							color="black"
							style={{
								textAlign: "right",
								width: "40%",
							}}
							onPress={() => {
								const items = [...seqItems];
								items.splice(index, 1);
								setSeqItems(items);
							}}
						/>
					</WorkoutItem>
				)}
			/>
			<WorkoutForm onSubmit={handleOnSubmit} />
			<View>
				<Modal
					data={
						<WorkoutsForm onSubmit={(data) => console.log(data)} />
					}
					toggleTitle={"CREATE WORKOUT"}
				/>
			</View>
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
