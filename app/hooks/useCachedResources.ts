import { useEffect, useState } from "react";
import * as Font from "expo-font";

import { containsData, getData, storeData } from "../store";
import data from "../data/data.json";

export default function useCachedResources() {
	const [isLoadingComplete, setIsLoadingComplete] = useState(false);

	useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				const hasWorkouts = await containsData("workouts");
				if (!hasWorkouts) await storeData("workouts", data);

				await Font.loadAsync({
					lato: require("../assets/fonts/Lato-Regular.ttf"),
					"lato-bold": require("../assets/fonts/Lato-Bold.ttf"),
				});
			} catch (err) {
				console.log(err);
			} finally {
				const workouts = await getData("workouts");
				console.log(workouts);
				setIsLoadingComplete(true);
			}
		}

		loadResourcesAndDataAsync();
	}, []);

	return isLoadingComplete;
}
