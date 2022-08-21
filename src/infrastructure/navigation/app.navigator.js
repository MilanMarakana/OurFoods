import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ResturantsNavigator } from './resturants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';

import { MaterialIcons } from '@expo/vector-icons';
import { SafeArea } from '../../components/utility/safe-area.component';
import { Text } from 'react-native';

export const AppNavigator = () => {
  const Setting = () => (
    <SafeArea>
      <Text>Setting</Text>
    </SafeArea>
  );
  const Map = () => (
    <SafeArea>
      <Text>Map</Text>
    </SafeArea>
  );

  const Tab = createBottomTabNavigator();
  const TAB_ICON = {
    Restaurants: 'restaurant',
    Map: 'map',
    Setting: 'settings',
  };

  const createScreenOptions = ({ route }) => {
    let iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ size, color }) => (
        <MaterialIcons name={iconName} size={size} color={color} />
      ),
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    };
  };

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={createScreenOptions}>
          <Tab.Screen
            options={{ headerShown: false }}
            name="Restaurants"
            component={ResturantsNavigator}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="Map"
            component={MapScreen}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="Setting"
            component={Setting}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};
