import { db } from 'src/lib/db'

export const photoGalleries = () => {
  return db.photoGallery.findMany()
}

export const photoGallery = ({ id }) => {
  return db.photoGallery.findOne({
    where: { id },
  })
}

export const createPhotoGallery = ({ input }) => {
  return db.photoGallery.create({
    data: input,
  })
}

export const updatePhotoGallery = ({ id, input }) => {
  return db.photoGallery.update({
    data: input,
    where: { id },
  })
}

export const deletePhotoGallery = ({ id }) => {
  return db.photoGallery.delete({
    where: { id },
  })
}

export const PhotoGallery = {
  media: (_obj, { root }) =>
    db.photoGallery.findOne({ where: { id: root.id } }).media(),
  clubChapter: (_obj, { root }) =>
    db.photoGallery.findOne({ where: { id: root.id } }).clubChapter(),
  post: (_obj, { root }) =>
    db.photoGallery.findOne({ where: { id: root.id } }).post(),
}
