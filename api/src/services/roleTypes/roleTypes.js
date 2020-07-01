import { db } from 'src/lib/db'

export const roleTypes = () => {
  return db.roleType.findMany()
}

export const roleType = ({ id }) => {
  return db.roleType.findOne({
    where: { id },
  })
}

export const createRoleType = ({ input }) => {
  return db.roleType.create({
    data: input,
  })
}

export const updateRoleType = ({ id, input }) => {
  return db.roleType.update({
    data: input,
    where: { id },
  })
}

export const deleteRoleType = ({ id }) => {
  return db.roleType.delete({
    where: { id },
  })
}

export const RoleType = {
  roles: (_obj, { root }) =>
    db.roleType.findOne({ where: { id: root.id } }).roles(),
}
