// LoginScreen.js
import React, { useContext, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { ListDataContext } from '../App'; // Adjust the import path as necessary

export default function LoginScreen({ navigation }) {
	const { setListData } = useContext(ListDataContext);
	const [token, setToken] = useState('Dx8UQq4uOpwIMUXTJlcEa');
	const [sourceId, setSourceId] = useState('litesh-13');
	// https://api-dev.rehook-dev.de/customers/ui/components/Dx8UQq4uOpwIMUXTJlcEa?source_id=litesh-13

	const handleLogin = async () => {
		// Construct the URL using the token and sourceId states
		const url = `https://api-dev.rehook-dev.de/customers/ui/components/${token}?source_id=${sourceId}`;

		try {
			// Perform the GET fetch call
			const response = await fetch(url, {
				method: 'GET',
				headers: {
					// If your API requires headers, add them here
					'Content-Type': 'application/json',
					// Example: 'Authorization': `Bearer ${token}`,
				},
			});

			// Check if the response status is 200 (OK)
			if (response.status === 200) {
				const responseJson = await response.json();
				setListData(responseJson); // Update login data state
				navigation.navigate('List of Wheels'); // Navigate without passing data directly
			} else {
				// Handle other response statuses or errors
				console.log('Response status is not 200', response.status);
			}
		} catch (error) {
			// Catch and log any errors during the fetch call
			console.error('Fetch error:', error);
		}
	};

	return (
		<View style={styles.container}>
			<TextInput
				placeholder="Token"
				value={token}
				onChangeText={setToken}
				style={styles.input}
			/>
			<TextInput
				placeholder="Source Id"
				value={sourceId}
				onChangeText={setSourceId}
				secureTextEntry
				style={styles.input}
			/>
			<Button title="Login" onPress={handleLogin} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 20,
	},
	input: {
		marginBottom: 10,
		borderWidth: 1,
		padding: 10,
	},
});
