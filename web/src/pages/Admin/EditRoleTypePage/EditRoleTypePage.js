import RoleTypesLayout from 'src/layouts/Admin/RoleTypesLayout'
import EditRoleTypeCell from 'src/components/Admin/EditRoleTypeCell'

const EditRoleTypePage = ({ id }) => {
  return (
    <RoleTypesLayout>
      <EditRoleTypeCell id={id} />
    </RoleTypesLayout>
  )
}

export default EditRoleTypePage
