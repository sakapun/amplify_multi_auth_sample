import React, {useState} from 'react'
import {
  Grid,
  Box,
  List,
  ListItem,
  Link,
  Heading,
  Button
} from '@chakra-ui/core'
import {useQuery} from "../../../lib/amplify-query-helper";
import {ListBlog2Query} from "../../../API";
import {ListBlog2} from "../../../graphql/myquery";
import {LoadingPage} from "../../component/LodingPage";

type IndexPageType = {
  blogs: ListBlog2Query;
}
const IndexPageComponent = (props: IndexPageType) => {
  const [postId, setPostId] = useState<String>("")

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
          {props.blogs.listBlogs?.items?.map( item => item?.posts?.items?.map(post => {
            return (
              <ListItem h={12} onClick={() => setPostId(post?.id || "")}>
                <Link as={"div"} >
                  {post?.title}
                </Link>
              </ListItem>
            )
          }))}
        </List>
      </Box>
      <Box p={8}>
        <Heading>Title</Heading>
        <Box>{postId}</Box>
        <Button mt={6} variantColor="teal">
          Edit
        </Button>
      </Box>
    </Grid>
  )
}


export const IndexPage = () => {
  const {data, loading, error} = useQuery<ListBlog2Query>(ListBlog2);
  if (error) {
    return <div>"something wrong ...."</div>;
  }
  if (loading) {
    return <LoadingPage />
  }

  return <IndexPageComponent blogs={data} />
}
