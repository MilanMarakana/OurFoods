import React, { useContext } from 'react';
import { Searchbar } from 'react-native-paper';
import { FlatList, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

import { RestaurantsInfoCard } from '../../components/restaurants-info-card/restaurant-info-card.components';
import { Spacer } from '../../../../components/spacer/spacer.component';
import { SafeArea } from '../../../../components/utility/safe-area.component';
import { RestaurantsContext } from '../../../../services/restaurants/restaurants.context';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading color="#2182BD" size="large" animating={true} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar />
      </SearchContainer>

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantsInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
