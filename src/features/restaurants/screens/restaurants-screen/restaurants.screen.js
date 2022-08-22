import React, { useContext, useState } from 'react';
import {
  FlatList,
  ActivityIndicator,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import { FavouritesBar } from '../../../../components/favourite/favourites-bar.component';

import { Spacer } from '../../../../components/spacer/spacer.component';
import { SafeArea } from '../../../../components/utility/safe-area.component';

import { RestaurantsContext } from '../../../../services/restaurants/restaurants.context';
import { FavouritesContext } from '../../../../services/favourites/favourites.context';

import { RestaurantsInfoCard } from '../../components/restaurants-info-card/restaurant-info-card.components';
import { Search } from '../../components/restaurants-info-card/search.component';

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

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading color="#2182BD" size="large" animating={true} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetail', {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantsInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
