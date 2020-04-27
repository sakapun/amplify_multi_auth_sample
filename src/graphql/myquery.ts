import gql from "graphql-tag";

export const commentFlagment = gql`
    fragment commentFlagment on Comment {
        id
        content
    }
`;

export const postFlagment = gql`
    fragment postFlagment on Post {
        id
        title
        comments {
            items {
                ...commentFlagment
            }
        }
    }
    ${commentFlagment}
`;

export const ListBlog2 = gql`
  query ListBlog2 {
      listBlogs {
          items {
              id
              name
              posts {
                  items {
                      ...postFlagment
                  }
                  nextToken
              }
          }
          nextToken
      }
  }
  ${postFlagment}
`;

export const onUpdatePostWithFragment = gql`
    subscription onUpdatePostWithFragment {
        onUpdatePost {
            ...postFlagment
        }
    }
    ${postFlagment}
`
