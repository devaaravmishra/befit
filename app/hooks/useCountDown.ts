import { useEffect, useState, useRef } from "react";

export default function useCountDown(idx: number, initialCount: number = -1) {
	const [countDown, setCountDown] = useState(-1);
	const [isRunning, setIsRunning] = useState(false);
	const intervalRef = useRef<NodeJS.Timer>();

	useEffect(() => {
		if (idx == -1) return;

		if (isRunning && !intervalRef.current) {
			intervalRef.current = setInterval(() => {
				setCountDown((count) => {
					return count - 1;
				});
			}, 1000);
		}

		return () => cleanUp();
	}, [idx, isRunning]);

	useEffect(() => {
		setCountDown(initialCount);
	}, [initialCount]);

	useEffect(() => {
		if (countDown === 0) cleanUp();
	}, [countDown]);

	const cleanUp = () => {
		if (intervalRef.current) {
			setIsRunning(false);
			clearInterval(intervalRef.current);
			intervalRef.current = undefined;
		}
	};

	return {
		countDown,
		isRunning,
		stop: cleanUp,
		start: (count?: number) => {
			setCountDown(count || initialCount);
			setIsRunning(true);
		},
	};
}
