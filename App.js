import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from './component/home/Home'
import AddNoteScreen from './component/addNote/AddNote';
import SearchScreen from './component/search/Search'
const Stack = createStackNavigator();

export default function App() {
  return (
     <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name='home' component={HomeScreen} options={{headerShown:false}}/>
          <Stack.Screen name='addNote' component={AddNoteScreen} />
          <Stack.Screen name='search' component={SearchScreen} />
          {/* <Stack.Screen name='viewNote' component={} options={{headerShown:false}}/> */}
       </Stack.Navigator>
         
     </NavigationContainer>
  );
}

