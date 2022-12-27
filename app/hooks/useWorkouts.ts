import React, { useEffect, useState } from "react";

import { getWorkouts } from "../store/workouts";
import { Workout } from "../types";

export default function useWorkouts() {
	const [workouts, setWorkouts] = useState<Workout[]>([]);

	useEffect(() => {
		const fetchWorkouts = async () => {
			const workouts = await getWorkouts();
			setWorkouts(workouts);
		};

		fetchWorkouts();
	}, []);

	return workouts;
}
