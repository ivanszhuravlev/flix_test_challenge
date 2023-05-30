import React from 'react';
import {Table} from '../../components/Table';
import {Loader} from '../../components/ui/Loader';
import {Page} from '../../components/ui/Page';
import {useQuery} from '../../utils/query';
import {HttpClient} from '../../api/apiClient';
import {initialScreenStyles} from './InitialScreen.styles';
import {Button} from '../../components/ui/Button';
import {View} from 'react-native';

const InitialScreen = () => {
  const {data, isLoading, dataVersion, refetch} = useQuery(
    'users',
    HttpClient.fetchUsers
  );

  return (
    <Page style={initialScreenStyles.pageStyle}>
      <Table data={data || []} dataVersion={dataVersion} />
      <View style={initialScreenStyles.buttonContainer}>
        <Button text="Refetch" onPress={refetch} />
      </View>
      {isLoading && <Loader />}
    </Page>
  );
};

export default InitialScreen;
