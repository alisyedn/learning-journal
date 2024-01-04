import db from "@/prisma/db";
import {NoteEntities, NoteEntity} from "@/libs/dao/db/type";
import {Prisma} from '@prisma/client'
import {FEATURED} from "@/types";

const getAllJournals = async (): Promise<NoteEntities> => {
  return db.logs.findMany({
    include: {
      tags: true
    }
  })
}

const getAllJournalsWithAtLeastOneTag = async (tags: string[]): Promise<NoteEntities> => {

  const tagWheres: Prisma.TagsWhereInput[] = tags.map(tag => ({label: tag}))

  return db.logs.findMany({
    include: {
      tags: true
    },
    where: {
      tags: {
        some : {
          OR: tagWheres
        }
      }
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
  return getAllJournalsWithAtLeastOneTag([FEATURED])
}

export {getAllJournals, getJournal, getFeaturedJournals, getAllJournalsWithAtLeastOneTag}