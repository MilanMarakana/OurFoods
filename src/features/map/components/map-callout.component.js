import React from 'react';
import styled from 'styled-components/native';
import { CompactRestaurantInfo } from '../../../components/restaurant/compact-resaurant-info.component';

const MyText = styled.Text``;

export const Icon = styled.Image`
  width: 150px;
  height: 150px;
`;

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo restaurant={restaurant} />
);
