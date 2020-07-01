import gql from 'graphql-tag'

export const schema = gql`
  type Role {
    id: Int!
    name: String!
    roleTypeId: Int!
    roleType: RoleType!
    clubChaperId: Int!
    clubChapter: ClubChapter!
    user: User
    userId: Int
  }

  type Query {
    roles: [Role!]!
    role(id: Int!): Role!
  }

  input CreateRoleInput {
    name: String!
    roleTypeId: Int!
    clubChaperId: Int!
    userId: Int
  }

  input UpdateRoleInput {
    name: String
    roleTypeId: Int
    clubChaperId: Int
    userId: Int
  }

  type Mutation {
    createRole(input: CreateRoleInput!): Role!
    updateRole(id: Int!, input: UpdateRoleInput!): Role!
    deleteRole(id: Int!): Role!
  }
`
