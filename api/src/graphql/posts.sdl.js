import gql from 'graphql-tag'

export const schema = gql`
  type Post {
    id: Int!
    title: String!
    contentBody: String!
    authorId: Int!
    author: User!
    mediaId: Int
    media: Media
    photoGalleryId: Int
    photoGallery: PhotoGallery
    clubChapter: ClubChapter
    clubChapterId: Int
    createdAt: DateTime!
    createdById: Int!
    updatedAt: DateTime
    updatedById: Int
  }

  type Query {
    posts: [Post!]!
    post(id: Int!): Post!
  }

  input CreatePostInput {
    title: String!
    contentBody: String!
    authorId: Int!
    mediaId: Int
    photoGalleryId: Int
    clubChapterId: Int
    createdById: Int!
    updatedAt: DateTime
    updatedById: Int
  }

  input UpdatePostInput {
    title: String
    contentBody: String
    authorId: Int
    mediaId: Int
    photoGalleryId: Int
    clubChapterId: Int
    createdById: Int
    updatedAt: DateTime
    updatedById: Int
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post!
    updatePost(id: Int!, input: UpdatePostInput!): Post!
    deletePost(id: Int!): Post!
  }
`
