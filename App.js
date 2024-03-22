import React, { createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import ListScreen from './screens/ListScreen';
import WebViewScreen from './screens/WebViewScreen';

const Stack = createStackNavigator();

// Create a context
export const ListDataContext = createContext(null);

export default function App() {
	const [listData, setListData] = useState(null); // State to hold login data
	return (
		<ListDataContext.Provider value={{ listData, setListData }}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Login">
					<Stack.Screen name="Login" component={LoginScreen} />
					<Stack.Screen name="List of Wheels" component={ListScreen} />
					<Stack.Screen name="WebViewScreen" component={WebViewScreen} />
					{/* Add other screens here */}
				</Stack.Navigator>
			</NavigationContainer>
		</ListDataContext.Provider>
	);
}
