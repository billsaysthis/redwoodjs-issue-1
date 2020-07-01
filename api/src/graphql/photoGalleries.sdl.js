import gql from 'graphql-tag'

export const schema = gql`
  type PhotoGallery {
    id: Int!
    name: String!
    description: String!
    media: [Media]
    active: Boolean!
    deactivatedAt: DateTime!
    deactivatedById: Int
    clubChapterId: Int!
    clubChapter: ClubChapter!
    createdAt: DateTime!
    createdById: Int!
    updatedAt: DateTime
    updatedById: Int
    post: Post!
  }

  type Query {
    photoGalleries: [PhotoGallery!]!
    photoGallery(id: Int!): PhotoGallery!
  }

  input CreatePhotoGalleryInput {
    name: String!
    description: String!
    active: Boolean!
    deactivatedAt: DateTime!
    deactivatedById: Int
    clubChapterId: Int!
    createdById: Int!
    updatedAt: DateTime
    updatedById: Int
  }

  input UpdatePhotoGalleryInput {
    name: String
    description: String
    active: Boolean
    deactivatedAt: DateTime
    deactivatedById: Int
    clubChapterId: Int
    createdById: Int
    updatedAt: DateTime
    updatedById: Int
  }

  type Mutation {
    createPhotoGallery(input: CreatePhotoGalleryInput!): PhotoGallery!
    updatePhotoGallery(id: Int!, input: UpdatePhotoGalleryInput!): PhotoGallery!
    deletePhotoGallery(id: Int!): PhotoGallery!
  }
`
