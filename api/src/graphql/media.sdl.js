import gql from 'graphql-tag'

export const schema = gql`
  type Media {
    id: Int!
    filename: String!
    filetype: String!
    description: String
    createdAt: DateTime!
    createdById: Int!
    updatedAt: DateTime
    updatedById: Int
    clubChapter: ClubChapter!
    club: Club!
    user: User!
    photoGallery: PhotoGallery
    photoGalleryId: Int
    post: Post!
  }

  type Query {
    medias: [Media!]!
    media(id: Int!): Media!
  }

  input CreateMediaInput {
    filename: String!
    filetype: String!
    description: String
    createdById: Int!
    updatedAt: DateTime
    updatedById: Int
    photoGalleryId: Int
  }

  input UpdateMediaInput {
    filename: String
    filetype: String
    description: String
    createdById: Int
    updatedAt: DateTime
    updatedById: Int
    photoGalleryId: Int
  }
`
