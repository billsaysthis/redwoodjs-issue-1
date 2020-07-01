import gql from 'graphql-tag'

export const schema = gql`
  type Club {
    id: Int!
    email: String!
    name: String!
    logoId: Int
    logo: Media
    league: String!
    createdAt: DateTime!
    createdById: Int!
    updatedAt: DateTime
    updatedById: Int
    clubChapters: [ClubChapter]
  }

  type Query {
    clubs: [Club!]!
    club(id: Int!): Club!
  }

  input CreateClubInput {
    email: String!
    name: String!
    logoId: Int
    league: String!
    createdById: Int!
    updatedAt: DateTime
    updatedById: Int
  }

  input UpdateClubInput {
    email: String
    name: String
    logoId: Int
    league: String
    createdById: Int
    updatedAt: DateTime
    updatedById: Int
  }

  type Mutation {
    createClub(input: CreateClubInput!): Club!
    updateClub(id: Int!, input: UpdateClubInput!): Club!
    deleteClub(id: Int!): Club!
  }
`
