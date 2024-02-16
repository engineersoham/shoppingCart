import React from 'react';
import { View, Text, Button } from 'react-native';

const Categories = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Cart"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default Categories;