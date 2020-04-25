import React from 'react';
import { useQuery } from '../../lib/amplify-query-helper';
import {ListBlog2Query} from "../../API";
import {ListBlog2} from "../../graphql/myquery";

const Index = () => {
  const {data, loading, error} = useQuery<ListBlog2Query>(ListBlog2);
  return (
    <div>
      <pre>{JSON.stringify(data, null, "  ")}</pre>
    </div>
  );
};

export default Index;
