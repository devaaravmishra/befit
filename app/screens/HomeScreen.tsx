import React from "react";
import { StyleSheet, View, FlatList, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Text from "../components/Text/Text";
import { RootStackParamList, Workout } from "../types";
import data from "../data/data.json";
import RenderWorkouts from "../components/RenderWorkout";

function HomeScreen({
	navigation,
}: NativeStackScreenProps<RootStackParamList, "Home">) {
	return (
		<View style={styles.container}>
			<Text text={"New Workouts"} size={20} type="lato-bold" />
			<FlatList
				scrollEnabled
				data={data as Workout[]}
				keyExtractor={(item) => item.slug}
				renderItem={({ item }) => {
					return (
						<Pressable
							onPress={() =>
								alert(`I am pressed + ${item.name}`)
							}>
							<RenderWorkouts item={item} />
						</Pressable>
					);
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		fontFamily: "lato",
		backgroundColor: "#fff",
		padding: 20,
	},
	header: {
		fontSize: 20,
		textAlign: "center",
		fontWeight: "bold",
		fontFamily: "lato-bold",
	},
});

export default HomeScreen;
