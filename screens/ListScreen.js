// ListScreen.js
import React, { useContext, useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	FlatList,
	StyleSheet,
	Image,
} from 'react-native';
import { ListDataContext } from '../App';
import SelectionModal from '../src/components/SelectionModal';

export default function ListScreen() {
	const { listData } = useContext(ListDataContext);
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedUrl, setSelectedUrl] = useState('');

	const renderItem = ({ item }) => (
		<TouchableOpacity
			style={styles.itemContainer}
			onPress={() => {
				setSelectedUrl(item.url);
				setModalVisible(true);
			}}
			activeOpacity={0.5}
		>
			<Text style={styles.itemText}>{item.template_id}</Text>
			<Image
				// @ts-ignore
				source={require('../assets/link.png')}
				style={styles.arrowIcon}
			/>
		</TouchableOpacity>
	);

	return (
		<>
			<View style={styles.container}>
				<FlatList
					data={listData.WHEELS}
					renderItem={renderItem}
					keyExtractor={(item) => item.template_id}
				/>
			</View>
			<SelectionModal
				visible={modalVisible}
				onClose={() => {
					setModalVisible(false);
				}}
				url={selectedUrl}
			/>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
	},
	itemContainer: {
		backgroundColor: '#f9f9f9',
		padding: 15,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		shadowColor: '#fff',
		shadowOffset: {
			width: 0,
			height: 7,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,
		elevation: 4,
		marginHorizontal: 10,
		marginTop: 10,
		borderRadius: 5,
	},
	itemText: {
		fontSize: 16,
		color: '#333',
	},
	arrowIcon: {
		width: 20,
		height: 20,
	},
});
