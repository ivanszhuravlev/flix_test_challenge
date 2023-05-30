import React, {PropsWithChildren} from 'react';
import {SafeAreaView, ViewProps} from 'react-native';
import {pageStyles} from './Page.styles';

const Page = ({children}: PropsWithChildren<ViewProps>) => {
  return <SafeAreaView style={pageStyles.page}>{children}</SafeAreaView>;
};

export default Page;
