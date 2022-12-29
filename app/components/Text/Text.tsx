import { StyleSheet, Text as ReactNativeText } from "react-native";
import { TextProps } from "../../types";

const Text = ({ text, size, type, style }: TextProps) => (
	<ReactNativeText
		style={[styles.text, { fontFamily: type }, { fontSize: size }, style]}>
		{text}
	</ReactNativeText>
);

const styles = StyleSheet.create({
	text: {
		fontFamily: "lato",
		color: "#000",
	},
});

export default Text;
