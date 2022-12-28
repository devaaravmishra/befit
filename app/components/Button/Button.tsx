import React from "react";
import { StyleSheet, Pressable } from "react-native";

import Text from "../Text/Text";

function Button({
	onPress,
	text,
	style,
}: {
	onPress: any;
	text?: string;
	style?: any;
}) {
	return (
		<Pressable style={[styles.button, style]} onPress={onPress}>
			<Text
				text={text}
				style={{
					color: style?.color ? style.color : "#fff",
					textAlign: "center",
					fontSize: 16,
				}}
			/>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#000",
		padding: 10,
		marginTop: 10,
		borderRadius: 5,
	},
});

export default Button;
