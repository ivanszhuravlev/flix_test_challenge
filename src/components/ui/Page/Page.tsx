import React, {PropsWithChildren} from 'react';
import {SafeAreaView, View, ViewProps} from 'react-native';
import {pageStyles} from './Page.styles';

const Page = ({children, style}: PropsWithChildren<ViewProps>) => {
  return (
    <SafeAreaView style={pageStyles.flex}>
      <View style={[pageStyles.flex, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default Page;
