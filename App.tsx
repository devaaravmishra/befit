import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useColorScheme } from "react-native";
import Navigation from "./app/navigation";
import useCachedResources from "./app/hooks/useCachedResources";

export default function App() {
	const isLoaded = useCachedResources();
	const colorScheme = useColorScheme();

	if (!isLoaded) return null;
	else {
		return (
			<SafeAreaProvider>
				<Navigation colorScheme={colorScheme} />
				<StatusBar style="auto" />
			</SafeAreaProvider>
		);
	}
}
