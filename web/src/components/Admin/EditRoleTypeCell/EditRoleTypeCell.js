import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import RoleTypeForm from 'src/components/Admin/RoleTypeForm'

export const QUERY = gql`
  query FIND_ROLE_TYPE_BY_ID($id: Int!) {
    roleType: roleType(id: $id) {
      id
      name
    }
  }
`
const UPDATE_ROLE_TYPE_MUTATION = gql`
  mutation UpdateRoleTypeMutation($id: Int!, $input: UpdateRoleTypeInput!) {
    updateRoleType(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ roleType }) => {
  const { addMessage } = useFlash()
  const [updateRoleType, { loading, error }] = useMutation(
    UPDATE_ROLE_TYPE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminRoleTypes())
        addMessage('RoleType updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateRoleType({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit RoleType {roleType.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <RoleTypeForm
          roleType={roleType}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
