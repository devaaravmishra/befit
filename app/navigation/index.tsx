import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";
import { RootStackParamList } from "../types";
import WorkoutDetailScreen from "../screens/WorkoutDetailScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator<RootStackParamList>();

function RootNavigator() {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="Root"
				component={BottomTabNavigator}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="WorkoutDetail"
				component={WorkoutDetailScreen}
				options={{
					title: "Workout Details",
					headerTitleAlign: "center",
				}}
			/>
		</Stack.Navigator>
	);
}

function BottomTabNavigator() {
	return (
		<BottomTab.Navigator>
			<BottomTab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name="home" size={size} color={color} />
					),
					tabBarLabelStyle: {
						paddingBottom: 2,
					},
				}}
			/>
			<BottomTab.Screen
				name="Planner"
				component={PlannerScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<FontAwesome
							name="calendar"
							size={size}
							color={color}
						/>
					),
					tabBarLabelStyle: {
						paddingBottom: 2,
					},
				}}
			/>
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
