import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_ROLE_MUTATION = gql`
  mutation DeleteRoleMutation($id: Int!) {
    deleteRole(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const RolesList = ({ roles }) => {
  const { addMessage } = useFlash()
  const [deleteRole] = useMutation(DELETE_ROLE_MUTATION, {
    onCompleted: () => {
      addMessage('Role deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete role ' + id + '?')) {
      deleteRole({ variables: { id }, refetchQueries: ['ROLES'] })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>roleTypeId</th>
            <th>clubChaperId</th>
            <th>userId</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{truncate(role.id)}</td>
              <td>{truncate(role.name)}</td>
              <td>{truncate(role.roleTypeId)}</td>
              <td>{truncate(role.clubChaperId)}</td>
              <td>{truncate(role.userId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminRole({ id: role.id })}
                    title={'Show role ' + role.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditRole({ id: role.id })}
                    title={'Edit role ' + role.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete role ' + role.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(role.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RolesList
