import gql from 'graphql-tag'

export const schema = gql`
  type User {
    id: Int!
    email: String!
    firstName: String!
    lastName: String!
    displayName: String
    joinedAt: DateTime!
    clubMembershipId: String
    active: Boolean!
    deactivatedAt: DateTime!
    deactivatedById: Int
    clubChapterId: Int!
    clubChapter: ClubChapter!
    addressId: Int
    address: Address
    phone: String
    imageId: Int
    image: Media
    createdAt: DateTime!
    updatedAt: DateTime!
    roles: [Role]
    officers: [Officer]
    posts: [Post]
  }

  type Query {
    users: [User!]!
    user(id: Int!): User!
  }

  input CreateUserInput {
    email: String!
    firstName: String!
    lastName: String!
    displayName: String
    joinedAt: DateTime!
    clubMembershipId: String
    active: Boolean!
    deactivatedAt: DateTime!
    deactivatedById: Int
    clubChapterId: Int!
    addressId: Int
    phone: String
    imageId: Int
    updatedAt: DateTime!
  }

  input UpdateUserInput {
    email: String
    firstName: String
    lastName: String
    displayName: String
    joinedAt: DateTime
    clubMembershipId: String
    active: Boolean
    deactivatedAt: DateTime
    deactivatedById: Int
    clubChapterId: Int
    addressId: Int
    phone: String
    imageId: Int
    updatedAt: DateTime
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: Int!, input: UpdateUserInput!): User!
    deleteUser(id: Int!): User!
  }
`
