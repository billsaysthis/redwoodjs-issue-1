import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import RoleTypeForm from 'src/components/Admin/RoleTypeForm'

const CREATE_ROLE_TYPE_MUTATION = gql`
  mutation CreateRoleTypeMutation($input: CreateRoleTypeInput!) {
    createRoleType(input: $input) {
      id
    }
  }
`

const NewRoleType = () => {
  const { addMessage } = useFlash()
  const [createRoleType, { loading, error }] = useMutation(
    CREATE_ROLE_TYPE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminRoleTypes())
        addMessage('RoleType created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createRoleType({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New RoleType</h2>
      </header>
      <div className="rw-segment-main">
        <RoleTypeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewRoleType
