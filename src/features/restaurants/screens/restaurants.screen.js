import React, { useContext, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import styled from 'styled-components/native';
import { FavouritesBar } from '../../../components/favourite/favourites-bar.component';

import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';

import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { FavouritesContext } from '../../../services/favourites/favourites.context';

import { RestaurantsInfoCard } from '../components/restaurant-info-card.components';
import { Search } from '../components/search.component';
import { RestaurantList } from '../components/restaurant-list.styles';

import { FadeInView } from '../../../components/animations/fade.animation';

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
                <FadeInView>
                  <RestaurantsInfoCard restaurant={item} />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
