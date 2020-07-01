import gql from 'graphql-tag'

export const schema = gql`
  type ClubChapter {
    id: Int!
    email: String!
    name: String!
    clubId: Int!
    club: Club!
    logoId: Int
    logo: Media
    mailAddressId: Int
    mailAddress: Address
    viewingAddressId: Int
    viewingAddress: Address
    phone: String
    facebook: String
    twitter: String
    instagram: String
    active: Boolean!
    deactivatedAt: DateTime!
    deactivatedById: Int
    createdAt: DateTime!
    createdById: Int!
    updatedAt: DateTime
    updatedById: Int
    photoGalleries: [PhotoGallery]
    officers: [Officer]
    role: Role!
    members: User!
    post: Post!
  }

  type Query {
    clubChapters: [ClubChapter!]!
    clubChapter(id: Int!): ClubChapter!
  }

  input CreateClubChapterInput {
    email: String!
    name: String!
    clubId: Int!
    logoId: Int
    mailAddressId: Int
    viewingAddressId: Int
    phone: String
    facebook: String
    twitter: String
    instagram: String
    active: Boolean!
    deactivatedAt: DateTime!
    deactivatedById: Int
    createdById: Int!
    updatedAt: DateTime
    updatedById: Int
  }

  input UpdateClubChapterInput {
    email: String
    name: String
    clubId: Int
    logoId: Int
    mailAddressId: Int
    viewingAddressId: Int
    phone: String
    facebook: String
    twitter: String
    instagram: String
    active: Boolean
    deactivatedAt: DateTime
    deactivatedById: Int
    createdById: Int
    updatedAt: DateTime
    updatedById: Int
  }

  type Mutation {
    createClubChapter(input: CreateClubChapterInput!): ClubChapter!
    updateClubChapter(id: Int!, input: UpdateClubChapterInput!): ClubChapter!
    deleteClubChapter(id: Int!): ClubChapter!
  }
`
