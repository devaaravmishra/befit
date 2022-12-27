import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";
import { RootStackParamList } from "../types";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator<RootStackParamList>();

function RootNavigator() {
	return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name="Root" component={BottomTabNavigator} />
		</Stack.Navigator>
	);
}

function BottomTabNavigator() {
	return (
		<BottomTab.Navigator>
			<BottomTab.Screen name="Home" component={HomeScreen} />
			<BottomTab.Screen name="Planner" component={PlannerScreen} />
		</BottomTab.Navigator>
	);
}

export default function AppNavigator() {
	return (
		<NavigationContainer>
			<RootNavigator />
		</NavigationContainer>
	);
}
