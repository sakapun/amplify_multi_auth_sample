import React, {useCallback, useState} from 'react';
import {
  Box,
  Heading,
  Button
} from '@chakra-ui/core'
import {ListBlog2Query, postFlagmentFragment, UpdatePostMutationVariables} from "../../../API";
import {Input} from "@chakra-ui/core/dist";
import { API, graphqlOperation } from 'aws-amplify';
import {updatePost} from "../../../graphql/mutations";


export type RightPaneType = {
  post: postFlagmentFragment
}
const RightPane = ({post}: RightPaneType) => {
  const [isEditing, setEditing] = useState<boolean>(false);
  const [editingTitle, changeVal] = useState<string>("");

  const savePost = useCallback(() => {
    (async () => {
      const updatePostMutationVariables: UpdatePostMutationVariables = {
        input: {
          title: editingTitle,
          id: post.id
        },
      };
      await API.graphql(graphqlOperation(updatePost, updatePostMutationVariables))
    })()
  }, [editingTitle])

  return (
    <Box p={8}>
      {isEditing ? (
          <Input value={editingTitle}  onChange={(event: any) => changeVal(event.target.value)}/>
        ) :
        <Heading>
          {post.title}
        </Heading>}
      <Box>{post.id}</Box>
      {isEditing
       ? (
         <Button mt={6} variantColor="red" onClick={savePost}>
           Save
         </Button>
        )
       : (
          <Button mt={6} variantColor="teal" onClick={() => {
            setEditing(true)
            changeVal(post.title)
          }}>
            Edit
          </Button>
        )
      }

    </Box>
  );
};

export default RightPane;
