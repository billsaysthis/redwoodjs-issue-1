import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import RoleForm from 'src/components/Admin/RoleForm'

const CREATE_ROLE_MUTATION = gql`
  mutation CreateRoleMutation($input: CreateRoleInput!) {
    createRole(input: $input) {
      id
    }
  }
`

const NewRole = () => {
  const { addMessage } = useFlash()
  const [createRole, { loading, error }] = useMutation(CREATE_ROLE_MUTATION, {
    onCompleted: () => {
      navigate(routes.adminRoles())
      addMessage('Role created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      roleTypeId: parseInt(input.roleTypeId),
      clubChaperId: parseInt(input.clubChaperId),
      userId: parseInt(input.userId),
    })
    createRole({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Role</h2>
      </header>
      <div className="rw-segment-main">
        <RoleForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewRole
