import React from 'react';
import {API, graphqlOperation} from "aws-amplify";
import {CreatePostInput, CreatePostMutationVariables} from "../../API";
import {createPost} from "../../graphql/mutations";

import { FormLabel,FormControl,Button, Input} from "@chakra-ui/core/dist";

export const PostAdd = () => {
  const [s, set] = React.useState<CreatePostInput>({
    title: "",
    blogID: "01b06603-a8f9-438c-a4c6-8fb7e00fe5d4",
  });

  const createPostMutationVariables: CreatePostMutationVariables = {
    input: s,
  }

  const setPost = React.useCallback(() => {
    (async () => {
      await API.graphql(graphqlOperation(createPost, createPostMutationVariables))
    })();
  },[s])

  return (
    <>
      <FormControl>
        <FormLabel>title</FormLabel>
        <Input onChange={(e: any) => set({...s, title: e.target.value})} value={s.title}/>
      </FormControl>
      <Button onClick={setPost} >button</Button>
    </>
  );
};

