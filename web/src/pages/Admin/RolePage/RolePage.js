import RolesLayout from 'src/layouts/Admin/RolesLayout'
import RoleCell from 'src/components/Admin/RoleCell'

const RolePage = ({ id }) => {
  return (
    <RolesLayout>
      <RoleCell id={id} />
    </RolesLayout>
  )
}

export default RolePage
