import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';

import firebase from 'firebase/compat';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

import { Navigation } from './src/infrastructure/navigation';

const firebaseConfig = {
  apiKey: 'AIzaSyA2u3ZsmXp513l0eJ3URUcSNwF_9w5u4fQ',
  authDomain: 'ourfoods-7200c.firebaseapp.com',
  projectId: 'ourfoods-7200c',
  storageBucket: 'ourfoods-7200c.appspot.com',
  messagingSenderId: '346536823891',
  appId: '1:346536823891:web:39c696494c34549dc58aa6',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
