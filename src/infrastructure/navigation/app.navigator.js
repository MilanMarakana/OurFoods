import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ResturantsNavigator } from './resturants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';

import { MaterialIcons } from '@expo/vector-icons';
import { SafeArea } from '../../components/utility/safe-area.component';
import { Text, Button } from 'react-native';
import { AuthenticationContext } from '../../services/authentication/authentication.context';

import { RestaurantsContextProvider } from '../../services/restaurants/restaurants.context';
import { LocationContextProvider } from '../../services/location/location.context';
import { FavouritesContextProvider } from '../../services/favourites/favourites.context';

export const AppNavigator = () => {
  const Setting = () => {
    const { onLogout } = useContext(AuthenticationContext);
    return (
      <SafeArea>
        <Text>Setting</Text>
        <Button title="logout" onPress={() => onLogout()} />
      </SafeArea>
    );
  };

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
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
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
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
