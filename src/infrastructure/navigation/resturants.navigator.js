import React from 'react';
import 'react-native-gesture-handler';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants-screen/restaurants.screen';
import { RestaurantDetailScreen } from '../../features/restaurants/screens/restaurant-detail.screen';

const RestaurantsStack = createStackNavigator();

export const ResturantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
        cardOverlayEnabled: true,
      }}
    >
      <RestaurantsStack.Screen
        name="Resturants"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantsStack.Navigator>
  );
};
