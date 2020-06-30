import { Link, routes } from '@redwoodjs/router'

import Roles from 'src/components/Admin/Roles'

export const QUERY = gql`
  query ROLES {
    roles {
      id
      name
      roleTypeId
      clubChaperId
      userId
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
      {'No roles yet. '}
      <Link to={routes.adminNewRole()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ roles }) => {
  return <Roles roles={roles} />
}
