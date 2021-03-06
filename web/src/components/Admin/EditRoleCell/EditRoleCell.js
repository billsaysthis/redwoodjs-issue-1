import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import RoleForm from 'src/components/Admin/RoleForm'

export const QUERY = gql`
  query FIND_ROLE_BY_ID($id: Int!) {
    role: role(id: $id) {
      id
      name
      roleTypeId
      clubChaperId
      userId
    }
  }
`
const UPDATE_ROLE_MUTATION = gql`
  mutation UpdateRoleMutation($id: Int!, $input: UpdateRoleInput!) {
    updateRole(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ role }) => {
  const { addMessage } = useFlash()
  const [updateRole, { loading, error }] = useMutation(UPDATE_ROLE_MUTATION, {
    onCompleted: () => {
      navigate(routes.adminRoles())
      addMessage('Role updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      roleTypeId: parseInt(input.roleTypeId),
      clubChaperId: parseInt(input.clubChaperId),
      userId: parseInt(input.userId),
    })
    updateRole({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Role {role.id}</h2>
      </header>
      <div className="rw-segment-main">
        <RoleForm role={role} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
