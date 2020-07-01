import gql from 'graphql-tag'

export const schema = gql`
  type Officer {
    id: Int!
    userId: Int!
    user: User!
    title: String
    createdAt: DateTime!
    createdById: Int!
    updatedAt: DateTime
    updatedById: Int
    clubChapter: ClubChapter
    clubChapterId: Int
  }

  type Query {
    officers: [Officer!]!
    officer(id: Int!): Officer!
  }

  input CreateOfficerInput {
    userId: Int!
    title: String
    createdById: Int!
    updatedAt: DateTime
    updatedById: Int
    clubChapterId: Int
  }

  input UpdateOfficerInput {
    userId: Int
    title: String
    createdById: Int
    updatedAt: DateTime
    updatedById: Int
    clubChapterId: Int
  }

  type Mutation {
    createOfficer(input: CreateOfficerInput!): Officer!
    updateOfficer(id: Int!, input: UpdateOfficerInput!): Officer!
    deleteOfficer(id: Int!): Officer!
  }
`
