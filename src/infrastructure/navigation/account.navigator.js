import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { AccountScreen } from '../../features/account/screen/account.screen';
import { LoginScreen } from '../../features/account/screen/login.screen';
import { RegisterScreen } from '../../features/account/screen/register.screen';

const AccountStack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerMode: 'none',
      }}
    >
      <AccountStack.Screen name="Account" component={AccountScreen} />
      <AccountStack.Screen name="Login" component={LoginScreen} />
      <AccountStack.Screen name="Register" component={RegisterScreen} />
    </AccountStack.Navigator>
  );
};
