import RoleType from 'src/components/Admin/RoleType'

export const QUERY = gql`
  query FIND_ROLE_TYPE_BY_ID($id: Int!) {
    roleType: roleType(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>RoleType not found</div>

export const Success = ({ roleType }) => {
  return <RoleType roleType={roleType} />
}
