import React, { useRef, useState, useEffect, useContext } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Button } from 'react-native-paper';
import styled from 'styled-components/native';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EvilIcons } from '@expo/vector-icons';
import { Text } from '../../../components/typography/text.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';

const CameraContainer = styled.View`
  width: 100%;
  height: 100%;
`;

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const CameraButton = styled(Button)`
  width: 60px;
  height: 60px;
  position: absolute;
  border-radius: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 580px;
  left: 165px;
  background-color: ${(props) => props.theme.colors.brand.muted};
`;

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef && cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <CameraContainer>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        ratio={'16:9'}
        type={CameraType.front}
        onCameraReady={() => {
          console.log('Camera Ready');
        }}
      ></ProfileCamera>

      <CameraButton onPress={snap}>
        <EvilIcons name="camera" size={40} color="black" />
      </CameraButton>
    </CameraContainer>
  );
};
