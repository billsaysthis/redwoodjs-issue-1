import { db } from 'src/lib/db'

export const addresses = () => {
  return db.address.findMany()
}

export const address = ({ id }) => {
  return db.address.findOne({
    where: { id },
  })
}

export const createAddress = ({ input }) => {
  return db.address.create({
    data: input,
  })
}

export const updateAddress = ({ id, input }) => {
  return db.address.update({
    data: input,
    where: { id },
  })
}

export const deleteAddress = ({ id }) => {
  return db.address.delete({
    where: { id },
  })
}

export const Address = {
  clubChapter: (_obj, { root }) =>
    db.address.findOne({ where: { id: root.id } }).clubChapter(),
  clubChapter: (_obj, { root }) =>
    db.address.findOne({ where: { id: root.id } }).clubChapter(),
  user: (_obj, { root }) =>
    db.address.findOne({ where: { id: root.id } }).user(),
}
