import gql from 'graphql-tag'

export const schema = gql`
  type Address {
    id: Int!
    street1: String!
    street2: String
    city: String!
    state: String!
    country: String!
    zipcode: String!
    clubChapterMailingAddress: ClubChapter!
    clubChapterViewingAddress: ClubChapter!
    user: User!
  }

  type Query {
    addresses: [Address!]!
    address(id: Int!): Address!
  }

  input CreateAddressInput {
    street1: String!
    street2: String
    city: String!
    state: String!
    country: String!
    zipcode: String!
  }

  input UpdateAddressInput {
    street1: String
    street2: String
    city: String
    state: String
    country: String
    zipcode: String
  }

  type Mutation {
    createAddress(input: CreateAddressInput!): Address!
    updateAddress(id: Int!, input: UpdateAddressInput!): Address!
    deleteAddress(id: Int!): Address!
  }
`
