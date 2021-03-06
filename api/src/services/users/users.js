import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findOne({
    where: { id },
  })
}

export const createUser = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User = {
  clubChapter: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).clubChapter(),
  address: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).address(),
  media: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).media(),
  roles: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).roles(),
  officers: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).officers(),
  posts: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).posts(),
}
