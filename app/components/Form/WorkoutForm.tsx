import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { StyleSheet, TextInput, View } from "react-native";

import Button from "../Button/Button";
import Text from "../Text/Text";

export type Exercise = {
	name: string;
	duration: string;
	type: string;
	reps?: string;
};

type WorkoutProps = {
	onSubmit: (form: Exercise) => void;
};

function WorkoutForm({ onSubmit }: WorkoutProps) {
	const { control, handleSubmit } = useForm<Exercise>();
	const [isSelected, setIsSelected] = useState(false);

	const selectionItems = ["exercise", "break", "stretching"];

	return (
		<View style={styles.container}>
			<Text
				text="Create a Workout"
				size={20}
				type={"lato-bold"}
				style={{
					marginBottom: 10,
					textAlign: "center",
				}}
			/>
			<View>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					name="name"
					render={({ field: { onChange, value } }) => (
						<TextInput
							onChangeText={onChange}
							value={value}
							style={styles.input}
							placeholder="Name"
						/>
					)}
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					name="type"
					render={({ field: { onChange, value } }) => (
						<View>
							{isSelected ? (
								<View>
									{selectionItems.map((item, index) => (
										<Button
											key={index}
											text={item}
											onPress={() => {
												onChange(item);
												setIsSelected(!isSelected);
											}}
											style={{
												backgroundColor: "#eee",
												color: "#000",
											}}
										/>
									))}
								</View>
							) : (
								<TextInput
									onPressIn={() => setIsSelected(true)}
									value={value}
									style={styles.input}
									placeholder="Type"
								/>
							)}
						</View>
					)}
				/>
				<Controller
					control={control}
					name="reps"
					render={({ field: { onChange, value } }) => (
						<TextInput
							onChangeText={onChange}
							value={value}
							style={styles.input}
							placeholder="Reps"
						/>
					)}
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					name="duration"
					render={({ field: { onChange, value } }) => (
						<TextInput
							onChangeText={onChange}
							value={value}
							style={styles.input}
							placeholder="Duration"
						/>
					)}
				/>
				<Button
					text="ADD TO SEQUENCE"
					onPress={handleSubmit((data) => {
						onSubmit(data);
					})}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		borderRadius: 10,
		padding: 10,
	},
	input: {
		borderWidth: 1,
		height: 40,
		margin: 10,
		padding: 5,
		borderRadius: 5,
		borderColor: "rgba(0, 0, 0, 0.4)",
	},
});

export default WorkoutForm;
