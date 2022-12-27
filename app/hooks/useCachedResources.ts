import { useEffect, useState } from "react";
import * as Font from "expo-font";

export default function useCachedResources() {
	const [isLoadingComplete, setIsLoadingComplete] = useState(false);

	useEffect(() => {
		async function loadResourcesAsync() {
			try {
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

		loadResourcesAsync();
	}, []);

	return isLoadingComplete;
}
