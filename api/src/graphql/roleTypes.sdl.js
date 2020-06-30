import gql from 'graphql-tag'

export const schema = gql`
  type RoleType {
    id: Int!
    name: String!
    Role: Role[]
  }

  type Query {
    roleTypes: [RoleType!]!
    roleType(id: Int!): RoleType!
  }

  input CreateRoleTypeInput {
    name: String!
  }

  input UpdateRoleTypeInput {
    name: String
  }

  type Mutation {
    createRoleType(input: CreateRoleTypeInput!): RoleType!
    updateRoleType(id: Int!, input: UpdateRoleTypeInput!): RoleType!
    deleteRoleType(id: Int!): RoleType!
  }
`
