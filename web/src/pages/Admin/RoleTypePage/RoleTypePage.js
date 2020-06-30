import RoleTypesLayout from 'src/layouts/Admin/RoleTypesLayout'
import RoleTypeCell from 'src/components/Admin/RoleTypeCell'

const RoleTypePage = ({ id }) => {
  return (
    <RoleTypesLayout>
      <RoleTypeCell id={id} />
    </RoleTypesLayout>
  )
}

export default RoleTypePage
