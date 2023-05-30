import React from 'react';
import {Text, View} from 'react-native';
import {loaderStyles} from './Loader.styles';

const Loader = () => {
  return (
    <View style={loaderStyles.container}>
      <View style={loaderStyles.loader}>
        <Text style={loaderStyles.loaderLabel}>Loading...</Text>
      </View>
    </View>
  );
};

export default Loader;
