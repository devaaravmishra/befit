import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: any) => {
	try {
		const stringData = JSON.stringify(value);
		await AsyncStorage.setItem(key, stringData);
	} catch (err: any) {
		console.error(err.message);
	}
};

export const getData = async (key: string) => {
	try {
		const value = await AsyncStorage.getItem(key);
		if (value !== null) return JSON.parse(value);
	} catch (err: any) {
		console.error(err);
	}
};

export const containsData = async (key: string) => {
	try {
		const keys = await AsyncStorage.getAllKeys();
		return keys.includes(key);
	} catch (err: any) {
		console.error(err.message);
	}
};
