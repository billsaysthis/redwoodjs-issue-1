import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_ROLE_TYPE_MUTATION = gql`
  mutation DeleteRoleTypeMutation($id: Int!) {
    deleteRoleType(id: $id) {
      id
    }
  }
`

const RoleType = ({ roleType }) => {
  const { addMessage } = useFlash()
  const [deleteRoleType] = useMutation(DELETE_ROLE_TYPE_MUTATION, {
    onCompleted: () => {
      navigate(routes.adminRoleTypes())
      addMessage('RoleType deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete roleType ' + id + '?')) {
      deleteRoleType({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            RoleType {roleType.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>id</th>
              <td>{roleType.id}</td>
            </tr>
            <tr>
              <th>name</th>
              <td>{roleType.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditRoleType({ id: roleType.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(roleType.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default RoleType
