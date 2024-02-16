import React from 'react';
import { View, Text, Button } from 'react-native';

const Favourites = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Cart"
        onPress={() => navigation.navigate('Cart')}
      />
    </View>
  );
};

export default Favourites;