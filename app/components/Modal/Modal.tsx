import React, { useState } from "react";
import { StyleSheet, View, Modal as NativeModal } from "react-native";

import Button from "../Button/Button";

const Modal = ({
	data,
	toggleTitle,
}: {
	data: React.ReactNode;
	toggleTitle: string;
}) => {
	const [isModalVisible, setIsModalVisible] = useState<Boolean>(false);

	return (
		<>
			<Button
				onPress={() => setIsModalVisible(true)}
				text={toggleTitle}
			/>
			<NativeModal
				style={styles.container}
				visible={isModalVisible as boolean}
				animationType="slide">
				<View style={styles.centerView}>{data}</View>
				<View style={styles.centerView}>
					<Button
						text="Close"
						onPress={() => setIsModalVisible(false)}
						style={{
							width: 100,
						}}
					/>
				</View>
			</NativeModal>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	centerView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default Modal;
