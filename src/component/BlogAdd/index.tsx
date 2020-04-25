import React from 'react';
import {API, graphqlOperation} from "aws-amplify";
import {CreateBlogInput, CreateBlogMutationVariables, ListBlog2Query} from "../../API";
import {ListBlog2} from "../../graphql/myquery";
import {createBlog} from "../../graphql/mutations";



export const BlogAdd = () => {
  const [s, set] = React.useState<CreateBlogInput>({name: ""});

  const createBlogMutationVariables: CreateBlogMutationVariables = {
    input: s,
  }

  const setBlog = React.useCallback(() => {
    (async () => {
      await API.graphql(graphqlOperation(createBlog, createBlogMutationVariables))
    })();
  },[s])

  return (
    <div>
      name: <input onChange={(e) => set({name: e.target.value})} value={s.name}/>
      <button onClick={setBlog} >button</button>
    </div>
  );
};

