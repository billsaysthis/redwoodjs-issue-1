import { db } from 'src/lib/db'

export const roles = () => {
  return db.role.findMany()
}

export const role = ({ id }) => {
  return db.role.findOne({
    where: { id },
  })
}

export const createRole = ({ input }) => {
  return db.role.create({
    data: input,
  })
}

export const updateRole = ({ id, input }) => {
  return db.role.update({
    data: input,
    where: { id },
  })
}

export const deleteRole = ({ id }) => {
  return db.role.delete({
    where: { id },
  })
}

export const Role = {
  roleType: (_obj, { root }) =>
    db.role.findOne({ where: { id: root.id } }).roleType(),
  clubChapter: (_obj, { root }) =>
    db.role.findOne({ where: { id: root.id } }).clubChapter(),
  user: (_obj, { root }) => db.role.findOne({ where: { id: root.id } }).user(),
}
