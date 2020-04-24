import gql from "graphql-tag";

export const ListBlog2 = gql`
  query ListBlog2 {
      listBlogs {
          items {
              name
              posts {
                  items {
                      title
                      id
                      comments {
                          items {
                              content
                          }
                      }
                  }
                  nextToken
              }
          }
          nextToken
      }
  }
`;
