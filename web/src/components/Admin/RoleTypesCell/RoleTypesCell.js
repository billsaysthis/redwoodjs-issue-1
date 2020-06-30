import { Link, routes } from '@redwoodjs/router'

import RoleTypes from 'src/components/Admin/RoleTypes'

export const QUERY = gql`
  query ROLE_TYPES {
    roleTypes {
      id
      name
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No roleTypes yet. '}
      <Link to={routes.adminNewRoleType()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ roleTypes }) => {
  return <RoleTypes roleTypes={roleTypes} />
}
