import React from 'react';
import {Table} from '../../components/Table';
import {Loader} from '../../components/ui/Loader';
import {Page} from '../../components/ui/Page';
import {useQuery} from '../../api/useQuery';
import {HttpClient} from '../../api/apiClient';

const InitialScreen = () => {
  const {data, isLoading} = useQuery(HttpClient.fetchUsers);

  return (
    <Page>
      <Table data={data || []} />
      {isLoading && <Loader />}
    </Page>
  );
};

export default InitialScreen;
