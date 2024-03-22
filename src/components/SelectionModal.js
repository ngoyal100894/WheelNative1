// PopupModal.js
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import WebViewModal from './WebViewModal';

const SelectionModal = ({ visible, onClose, url }) => {
	console.log(url);
	const navigation = useNavigation();
	const options = [
		{ label: 'View in Screen', value: 0 },
		{ label: 'View in Popup', value: 1 },
	];

	const [selectedValue, setSelectedValue] = useState(options[0].value);
	const [webViewModalVisible, setWebViewModalVisible] = useState(false);

	const handleConfirm = () => {
		console.log('Selected option value:', selectedValue);
		if (selectedValue === 0) {
			navigation.navigate('WebViewScreen', { url }); // Navigate to WebViewScreen with URL
		} else if (selectedValue === 1) {
			setWebViewModalVisible(true);
		}
		setSelectedValue(options[0].value);
		onClose();
	};

	useEffect(() => {
		setSelectedValue(options[0].value);
	}, [visible]);

	return (
		<>
			<Modal
				animationType="slide"
				transparent={true}
				visible={visible && !webViewModalVisible}
				onRequestClose={onClose}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						{options.map((option, index) => (
							<TouchableOpacity
								key={index}
								style={styles.radioButtonContainer}
								onPress={() => setSelectedValue(option.value)}
							>
								<View
									style={[
										styles.radioButton,
										selectedValue === option.value &&
											styles.radioButtonSelected,
									]}
								/>
								<Text style={styles.radioButtonText}>{option.label}</Text>
							</TouchableOpacity>
						))}
						<TouchableOpacity
							style={styles.buttonConfirm}
							onPress={handleConfirm}
						>
							<Text style={styles.buttonTextConfirm}>Confirm</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button} onPress={onClose}>
							<Text style={styles.buttonText}>Close</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
			{webViewModalVisible && (
				<WebViewModal
					visible={webViewModalVisible}
					onClose={() => {
						setWebViewModalVisible(false);
						setSelectedValue(options[0].value);
					}}
					url={url}
				/>
			)}
		</>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	modalView: {
		width: '80%',
		height: '30%',
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 55,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	button: {
		backgroundColor: '#fff',
		padding: 10,
		marginTop: 5,
		borderRadius: 20,
		width: '80%',
		alignItems: 'center',
	},
	buttonText: {
		color: '#285FE7',
	},
	buttonConfirm: {
		backgroundColor: '#285FE7',
		padding: 10,
		marginTop: 35,
		borderRadius: 20,
		width: '80%',
		alignItems: 'center',
	},
	buttonTextConfirm: {
		color: 'white',
	},
	radioButtonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 20,
	},
	radioButton: {
		height: 20,
		width: 20,
		backgroundColor: '#FFF',
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#285FE7',
		marginRight: 10,
	},
	radioButtonText: {
		fontSize: 18,
	},
	radioButtonSelected: {
		backgroundColor: '#285FE7',
	},
});

export default SelectionModal;
