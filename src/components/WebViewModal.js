// WebViewModal.js
import React from 'react';
import { Modal, StyleSheet, View, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewModal = ({ visible, onClose, url }) => {
	console.log('webview modal loaded', url);
	if (!url) {
		console.error('No URL provided to WebViewModal');
		return null;
	} else {
		return (
			<Modal
				animationType="slide"
				transparent={true}
				visible={visible}
				onRequestClose={onClose}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<WebView source={{ uri: url }} style={styles.webView} />
					</View>
				</View>
			</Modal>
		);
	}
};

// Use Dimensions to calculate width and height based on screen size
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	modalView: {
		width: width * 0.8,
		height: height * 0.75,
		backgroundColor: 'white',
		borderRadius: 20,
		overflow: 'hidden',
	},
	webView: {
		flex: 1,
	},
});

export default WebViewModal;
