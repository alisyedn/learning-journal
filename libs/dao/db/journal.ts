import db from "@/prisma/db";
import {NoteEntities, NoteEntity} from "@/libs/dao/db/type";

const getAllJournals = async (): Promise<NoteEntities> => {
  return db.logs.findMany({
    include: {
      tags: true
    }
  })
}

const getJournal = async (slug: string) : Promise<NoteEntity | null> => {
  return db.logs.findUnique({
    include: {
      tags: true
    },
    where: {
      slug
    }
  })
}

const getFeaturedJournals = async (): Promise<NoteEntities> => {
  return db.logs.findMany({
    include: {
      tags: true
    },
    where: {
      isFeatured: true
    }
  })
}

export {getAllJournals, getJournal, getFeaturedJournals}