import { StatusBar } from "expo-status-bar";
import Navigation from "./app/navigation";
import useCachedResources from "./app/hooks/useCachedResources";

export default function App() {
	const isLoaded = useCachedResources();

	if (!isLoaded) return null;
	else {
		return (
			<>
				<Navigation />
				<StatusBar style="auto" />
			</>
		);
	}
}
