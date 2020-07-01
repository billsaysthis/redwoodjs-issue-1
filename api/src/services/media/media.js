import { db } from 'src/lib/db'

export const medias = () => {
  return db.media.findMany()
}

export const media = ({ id }) => {
  return db.media.findOne({
    where: { id },
  })
}

export const createMedia = ({ input }) => {
  return db.media.create({
    data: input,
  })
}

export const updateMedia = ({ id, input }) => {
  return db.media.update({
    data: input,
    where: { id },
  })
}

export const deleteMedia = ({ id }) => {
  return db.media.delete({
    where: { id },
  })
}

export const Media = {
  clubChapter: (_obj, { root }) =>
    db.media.findOne({ where: { id: root.id } }).clubChapter(),
  club: (_obj, { root }) => db.media.findOne({ where: { id: root.id } }).club(),
  user: (_obj, { root }) => db.media.findOne({ where: { id: root.id } }).user(),
  photoGallery: (_obj, { root }) =>
    db.media.findOne({ where: { id: root.id } }).photoGallery(),
  post: (_obj, { root }) => db.media.findOne({ where: { id: root.id } }).post(),
}
