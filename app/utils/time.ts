export default function secToMin(secs: number) {
	return `${Math.floor(secs / 60)}mins ${
		secs % 60 > 0 ? `${secs % 60}secs` : ""
	}`;
}
