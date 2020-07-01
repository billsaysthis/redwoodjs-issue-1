import { db } from 'src/lib/db'

export const clubs = () => {
  return db.club.findMany()
}

export const club = ({ id }) => {
  return db.club.findOne({
    where: { id },
  })
}

export const createClub = ({ input }) => {
  return db.club.create({
    data: input,
  })
}

export const updateClub = ({ id, input }) => {
  return db.club.update({
    data: input,
    where: { id },
  })
}

export const deleteClub = ({ id }) => {
  return db.club.delete({
    where: { id },
  })
}

export const Club = {
  media: (_obj, { root }) =>
    db.club.findOne({ where: { id: root.id } }).media(),
  clubChapters: (_obj, { root }) =>
    db.club.findOne({ where: { id: root.id } }).clubChapters(),
}
