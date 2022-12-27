import { useEffect, useState } from "react";

import { getWorkoutBySlug, getWorkouts } from "../store/workouts";
import { Workout } from "../types";

export default function useWorkout(slug: string) {
	const [workout, setWorkout] = useState<Workout>();

	useEffect(() => {
		const fetchWorkouts = async () => {
			const workout = await getWorkoutBySlug(slug);
			setWorkout(workout);
		};

		fetchWorkouts();
	}, []);

	return workout;
}
