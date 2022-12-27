import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

import { getWorkouts } from "../store/workouts";
import { Workout } from "../types";

export default function useWorkouts() {
	const [workouts, setWorkouts] = useState<Workout[]>([]);
	const isFocused = useIsFocused();

	useEffect(() => {
		const fetchWorkouts = async () => {
			const workouts = await getWorkouts();
			setWorkouts(workouts);
		};

		if (isFocused) fetchWorkouts();
	}, [isFocused]);

	return workouts;
}
