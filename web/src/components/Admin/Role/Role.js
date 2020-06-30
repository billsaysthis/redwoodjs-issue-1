import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_ROLE_MUTATION = gql`
  mutation DeleteRoleMutation($id: Int!) {
    deleteRole(id: $id) {
      id
    }
  }
`

const Role = ({ role }) => {
  const { addMessage } = useFlash()
  const [deleteRole] = useMutation(DELETE_ROLE_MUTATION, {
    onCompleted: () => {
      navigate(routes.adminRoles())
      addMessage('Role deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete role ' + id + '?')) {
      deleteRole({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Role {role.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>id</th>
              <td>{role.id}</td>
            </tr>
            <tr>
              <th>name</th>
              <td>{role.name}</td>
            </tr>
            <tr>
              <th>roleTypeId</th>
              <td>{role.roleTypeId}</td>
            </tr>
            <tr>
              <th>clubChaperId</th>
              <td>{role.clubChaperId}</td>
            </tr>
            <tr>
              <th>userId</th>
              <td>{role.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditRole({ id: role.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(role.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Role
