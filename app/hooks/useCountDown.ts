import { useEffect, useState, useRef } from "react";

export default function useCountDown(idx: number, initialCount: number) {
	const [countDown, setCountDown] = useState(-1);
	const intervalRef = useRef<NodeJS.Timer>();

	useEffect(() => {
		if (idx == -1) return;

		intervalRef.current = setInterval(() => {
			setCountDown((count) => {
				return count - 1;
			});
		}, 50);

		return () => cleanUp();
	}, [idx]);

	useEffect(() => {
		setCountDown(initialCount);
	}, [initialCount]);

	useEffect(() => {
		if (countDown === 0) cleanUp();
	}, [countDown]);

	const cleanUp = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = undefined;
		}
	};

	return countDown;
}
