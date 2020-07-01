import { db } from 'src/lib/db'

export const officers = () => {
  return db.officer.findMany()
}

export const officer = ({ id }) => {
  return db.officer.findOne({
    where: { id },
  })
}

export const createOfficer = ({ input }) => {
  return db.officer.create({
    data: input,
  })
}

export const updateOfficer = ({ id, input }) => {
  return db.officer.update({
    data: input,
    where: { id },
  })
}

export const deleteOfficer = ({ id }) => {
  return db.officer.delete({
    where: { id },
  })
}

export const Officer = {
  user: (_obj, { root }) =>
    db.officer.findOne({ where: { id: root.id } }).user(),
  clubChapter: (_obj, { root }) =>
    db.officer.findOne({ where: { id: root.id } }).clubChapter(),
}
