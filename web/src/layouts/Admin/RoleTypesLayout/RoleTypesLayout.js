import { Link, routes } from '@redwoodjs/router'
import { Flash } from '@redwoodjs/web'

const RoleTypesLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Flash timeout={1000} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.adminRoleTypes()} className="rw-link">
            RoleTypes
          </Link>
        </h1>
        <Link
          to={routes.adminNewRoleType()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New RoleType
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default RoleTypesLayout
