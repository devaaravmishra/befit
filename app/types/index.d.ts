export type RootStackParamList = {
	Home: undefined;
	Planner: undefined;
	Root: undefined;
};

export type Difficulty = "easy" | "normal" | "hard";
export type WorkoutType = "exercise" | "stretch" | "break";

export interface SequenceType {
	slug: string;
	name: string;
	type: WorkoutType;
	reps?: number;
	duration: number;
}

export interface Workout {
	slug: string;
	name: string;
	duration: number;
	difficulty: Difficulty;
	sequence: Array<SequenceType>;
}

type Type = "lato-regular" | "lato-bold";
export interface TextProps {
	text: string;
	type?: Type;
	size?: number;
	style?: {
		[key: string]: any;
	};
}
