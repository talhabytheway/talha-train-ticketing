import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar} from 'react-native';
import Home from './src/pages/Home';
import TicketList from './src/pages/TicketList';
import Summary from './src/pages/Summary';
import ChairSelection from './src/pages/ChairSelection';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="TicketList" component={TicketList} />
          <Stack.Screen name="Summary" component={Summary} />
          <Stack.Screen name="ChairSelection" component={ChairSelection} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
