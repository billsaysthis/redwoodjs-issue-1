import RolesLayout from 'src/layouts/Admin/RolesLayout'
import EditRoleCell from 'src/components/Admin/EditRoleCell'

const EditRolePage = ({ id }) => {
  return (
    <RolesLayout>
      <EditRoleCell id={id} />
    </RolesLayout>
  )
}

export default EditRolePage
