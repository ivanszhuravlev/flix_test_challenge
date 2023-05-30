import React from 'react';
import {Table} from '../../components/Table';
import {Loader} from '../../components/ui/Loader';
import {Page} from '../../components/ui/Page';
import {useQuery} from '../../api/useQuery';
import {HttpClient} from '../../api/apiClient';
import {View} from 'react-native';
import {initialScreenStyles} from './InitialScreen.styles';

const InitialScreen = () => {
  const {data, isLoading, dataVersion} = useQuery(HttpClient.fetchUsers);

  return (
    <Page>
      <View style={initialScreenStyles.tableContainer}>
        <Table data={data || []} dataVersion={dataVersion} />
      </View>
      {isLoading && <Loader />}
    </Page>
  );
};

export default InitialScreen;
