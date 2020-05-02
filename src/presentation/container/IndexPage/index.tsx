import React, {useCallback, useState} from 'react'
import {
  Grid,
  Box,
  List,
  ListItem,
  Link,
  Button
} from '@chakra-ui/core'
import {useQuery, useCrudSubscription, mutationCog} from "../../../lib/amplify-query-helper";
import {CreatePostMutation, CreatePostMutationVariables, ListBlog2Query, postFlagmentFragment} from "../../../API";
import {ListBlog2, onUpdatePostWithFragment} from "../../../graphql/myquery";
import {LoadingComponent} from "../../component/LodingComponent";
import RightPane from "./RightPane";
import {onCreatePost} from "../../../graphql/subscriptions";
import {createPost} from "../../../graphql/mutations";

type IndexPageType = {
  posts: postFlagmentFragment[];
}
const IndexPageComponent = (props: IndexPageType) => {
  const [postId, setPostId] = useState<string>("")

  const onClickAdd = useCallback(addPost, [])

  const [posts] = useCrudSubscription<postFlagmentFragment>({
    listData: props.posts,
    configs: {
      updatedConfig: {
        key: "onUpdatePost",
        query: onUpdatePostWithFragment
      },
      createdConfig: {
        key: "onCreatePost",
        query: onCreatePost
      }
    }
  })
  const post = posts.find(p => p?.id === postId);

  return(
    <Grid
      templateColumns="30% 1fr"
      gap={0}
      height="100%"
      templateRows="100%"
      p={0}
    >
      <Box p={0}>
        <List
          p={8}
          styleType="none"
          height="100%"
          overflowY="auto"
        >
          {posts.map(post => {
            return (
              <ListItem key={post.id} h={12} onClick={() => setPostId(post.id || "")}>
                <Link as={"div"} >
                  {post.title}
                </Link>
              </ListItem>
            )
          })}
        </List>
      </Box>
      {post ? <RightPane post={post} /> : <Button onClick={onClickAdd}>add</Button>}
    </Grid>
  )
}

export const IndexPage = () => {
  const {data, loading, error} = useQuery<ListBlog2Query>(ListBlog2);
  const firstPosts: postFlagmentFragment[] = data.listBlogs?.items?.map(b => b?.posts?.items).flat() || [];

  if (error) {
    return <div>"something wrong ...."</div>;
  }
  if (loading) {
    return <LoadingComponent />
  }

  return <IndexPageComponent posts={firstPosts} />
}

export const addPost = () => {
  mutationCog<CreatePostMutation,CreatePostMutationVariables>(createPost, {
    input: {
      title: Math.random().toString(36).slice(-8),
      blogID: "01b06603-a8f9-438c-a4c6-8fb7e00fe5d4"
    }
  })
}
