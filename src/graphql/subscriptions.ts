/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($owner: String!) {
    onCreateBlog(owner: $owner) {
      id
      name
      owner
      posts {
        items {
          id
          title
          blogID
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($owner: String!) {
    onUpdateBlog(owner: $owner) {
      id
      name
      owner
      posts {
        items {
          id
          title
          blogID
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($owner: String!) {
    onDeleteBlog(owner: $owner) {
      id
      name
      owner
      posts {
        items {
          id
          title
          blogID
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String!) {
    onCreatePost(owner: $owner) {
      id
      title
      blogID
      blog {
        id
        name
        owner
        posts {
          nextToken
        }
      }
      owner
      comments {
        items {
          id
          postID
          content
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String!) {
    onUpdatePost(owner: $owner) {
      id
      title
      blogID
      blog {
        id
        name
        owner
        posts {
          nextToken
        }
      }
      owner
      comments {
        items {
          id
          postID
          content
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String!) {
    onDeletePost(owner: $owner) {
      id
      title
      blogID
      blog {
        id
        name
        owner
        posts {
          nextToken
        }
      }
      owner
      comments {
        items {
          id
          postID
          content
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String!) {
    onCreateComment(owner: $owner) {
      id
      postID
      content
      post {
        id
        title
        blogID
        blog {
          id
          name
          owner
        }
        owner
        comments {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String!) {
    onUpdateComment(owner: $owner) {
      id
      postID
      content
      post {
        id
        title
        blogID
        blog {
          id
          name
          owner
        }
        owner
        comments {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String!) {
    onDeleteComment(owner: $owner) {
      id
      postID
      content
      post {
        id
        title
        blogID
        blog {
          id
          name
          owner
        }
        owner
        comments {
          nextToken
        }
      }
      owner
    }
  }
`;
