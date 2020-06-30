// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route
        path="/admin/roles/new"
        page={AdminNewRolePage}
        name="adminNewRole"
      />
      <Route
        path="/admin/roles/{id:Int}/edit"
        page={AdminEditRolePage}
        name="adminEditRole"
      />
      <Route
        path="/admin/roles/{id:Int}"
        page={AdminRolePage}
        name="adminRole"
      />
      <Route path="/admin/roles" page={AdminRolesPage} name="adminRoles" />
      <Route
        path="/admin/role-types/new"
        page={AdminNewRoleTypePage}
        name="adminNewRoleType"
      />
      <Route
        path="/admin/role-types/{id:Int}/edit"
        page={AdminEditRoleTypePage}
        name="adminEditRoleType"
      />
      <Route
        path="/admin/role-types/{id:Int}"
        page={AdminRoleTypePage}
        name="adminRoleType"
      />
      <Route
        path="/admin/role-types"
        page={AdminRoleTypesPage}
        name="adminRoleTypes"
      />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
