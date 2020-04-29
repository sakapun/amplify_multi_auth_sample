import React, {useCallback, useState} from 'react';
import {
  Box,
  Heading,
  Button
} from '@chakra-ui/core'
import {postFlagmentFragment, UpdatePostMutationVariables} from "../../../API";
import {Input} from "@chakra-ui/core/dist";
import {updatePost} from "../../../graphql/mutations";
import {mutationCog, useCrudSubscription} from "../../../lib/amplify-query-helper";
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
    const updatePostMutationVariables: UpdatePostMutationVariables = {
      input: {
        title: editingTitle,
        id: updatedPost.id
      },
    };
    mutationCog<UpdatePostMutationVariables>(updatePost, updatePostMutationVariables)
  }, [editingTitle, updatedPost.id])

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
