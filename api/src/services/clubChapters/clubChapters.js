import { db } from 'src/lib/db'

export const clubChapters = () => {
  return db.clubChapter.findMany()
}

export const clubChapter = ({ id }) => {
  return db.clubChapter.findOne({
    where: { id },
  })
}

export const createClubChapter = ({ input }) => {
  return db.clubChapter.create({
    data: input,
  })
}

export const updateClubChapter = ({ id, input }) => {
  return db.clubChapter.update({
    data: input,
    where: { id },
  })
}

export const deleteClubChapter = ({ id }) => {
  return db.clubChapter.delete({
    where: { id },
  })
}

export const ClubChapter = {
  club: (_obj, { root }) =>
    db.clubChapter.findOne({ where: { id: root.id } }).club(),
  media: (_obj, { root }) =>
    db.clubChapter.findOne({ where: { id: root.id } }).media(),
  address: (_obj, { root }) =>
    db.clubChapter.findOne({ where: { id: root.id } }).address(),
  address: (_obj, { root }) =>
    db.clubChapter.findOne({ where: { id: root.id } }).address(),
  photoGalleries: (_obj, { root }) =>
    db.clubChapter.findOne({ where: { id: root.id } }).photoGalleries(),
  officers: (_obj, { root }) =>
    db.clubChapter.findOne({ where: { id: root.id } }).officers(),
  role: (_obj, { root }) =>
    db.clubChapter.findOne({ where: { id: root.id } }).role(),
  user: (_obj, { root }) =>
    db.clubChapter.findOne({ where: { id: root.id } }).user(),
  post: (_obj, { root }) =>
    db.clubChapter.findOne({ where: { id: root.id } }).post(),
}
