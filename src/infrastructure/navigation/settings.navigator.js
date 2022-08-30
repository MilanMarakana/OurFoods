import React from 'react';
import { SettingsScreen } from '../../features/settings/screen/settings.screen';
import { FavouritesScreen } from '../../features/settings/screen/favourites.screen';

import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { CameraScreen } from '../../features/settings/screen/camera.screen';

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerMode: 'screen',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};
