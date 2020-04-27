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
import {useCrudSubscription} from "../../../lib/amplify-query-helper";
import {onUpdatePostWithFragment} from "../../../graphql/myquery";


export type RightPaneType = {
  post: postFlagmentFragment
}
const RightPane = ({post}: RightPaneType) => {
  const [isEditing, setEditing] = useState<boolean>(false);
  const [editingTitle, changeVal] = useState<string>("");

  const [[updatedPost]] = useCrudSubscription<postFlagmentFragment>({
    listData: [post],
    configs: {
      updatedConfig: {
        key: "onUpdatePost",
        query: onUpdatePostWithFragment
      }
    }
  });

  const savePost = useCallback(() => {
    (async () => {
      const updatePostMutationVariables: UpdatePostMutationVariables = {
        input: {
          title: editingTitle,
          id: updatedPost.id
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
          {updatedPost.title}
        </Heading>}
      <Box>{updatedPost.id}</Box>
      {isEditing
       ? (
         <Button mt={6} variantColor="red" onClick={savePost}>
           Save
         </Button>
        )
       : (
          <Button mt={6} variantColor="teal" onClick={() => {
            setEditing(true)
            changeVal(updatedPost.title)
          }}>
            Edit
          </Button>
        )
      }

    </Box>
  );
};

export default RightPane;
