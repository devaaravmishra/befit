import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { StyleSheet, TextInput, View } from "react-native";

import Button from "../Button/Button";
import Text from "../Text/Text";

export type Workout = {
	name: string;
};

type WorkoutProps = {
	onSubmit: (form: Workout) => void;
};

function WorkoutsForm({ onSubmit }: WorkoutProps) {
	const { control, handleSubmit } = useForm<Workout>();

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
						placeholder="Workout name"
					/>
				)}
			/>
			<Button
				text="CONFIRM"
				onPress={handleSubmit((data) => {
					onSubmit(data as Workout);
				})}
			/>
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
		width: 250,
		height: 40,
		margin: 10,
		padding: 5,
		borderRadius: 5,
		borderColor: "rgba(0, 0, 0, 0.4)",
	},
});

export default WorkoutsForm;
