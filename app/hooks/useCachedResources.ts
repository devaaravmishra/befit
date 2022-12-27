import { useEffect, useState } from "react";
import * as Font from "expo-font";

import { getWorkouts, initWorkouts } from "../store/workouts";

export default function useCachedResources() {
	const [isLoadingComplete, setIsLoadingComplete] = useState(false);

	useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				await initWorkouts();

				await Font.loadAsync({
					lato: require("../assets/fonts/Lato-Regular.ttf"),
					"lato-bold": require("../assets/fonts/Lato-Bold.ttf"),
				});
			} catch (err) {
				console.log(err);
			} finally {
				setIsLoadingComplete(true);
			}
		}

		loadResourcesAndDataAsync();
	}, []);

	return isLoadingComplete;
}
