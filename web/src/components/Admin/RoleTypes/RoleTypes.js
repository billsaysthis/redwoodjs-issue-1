import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_ROLE_TYPE_MUTATION = gql`
  mutation DeleteRoleTypeMutation($id: Int!) {
    deleteRoleType(id: $id) {
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

const RoleTypesList = ({ roleTypes }) => {
  const { addMessage } = useFlash()
  const [deleteRoleType] = useMutation(DELETE_ROLE_TYPE_MUTATION, {
    onCompleted: () => {
      addMessage('RoleType deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete roleType ' + id + '?')) {
      deleteRoleType({ variables: { id }, refetchQueries: ['ROLE_TYPES'] })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {roleTypes.map((roleType) => (
            <tr key={roleType.id}>
              <td>{truncate(roleType.id)}</td>
              <td>{truncate(roleType.name)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminRoleType({ id: roleType.id })}
                    title={'Show roleType ' + roleType.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditRoleType({ id: roleType.id })}
                    title={'Edit roleType ' + roleType.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete roleType ' + roleType.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(roleType.id)}
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

export default RoleTypesList
