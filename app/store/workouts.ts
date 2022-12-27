import { containsData, getData, removeData, storeData } from ".";
import data from "../data/data.json";
import { Workout } from "../types";

export const getWorkouts = async (): Promise<Workout[]> => {
	return await getData("workouts");
};

export const initWorkouts = async (): Promise<boolean> => {
	const hasWorkouts = await containsData("workouts");
	if (!hasWorkouts) {
		await storeData("workouts", data);
		return true;
	}
	return false;
};

export const clearWorkouts = async () => {
	await removeData("workouts");
};
