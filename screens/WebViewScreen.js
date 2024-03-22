// WebViewScreen.js
import React from 'react';
import { WebView } from 'react-native-webview';

const WebViewScreen = ({ route }) => {
	const { url } = route.params; // Get the URL passed through navigation parameters

	return <WebView source={{ uri: url }} />;
};

export default WebViewScreen;
