import db from "@/prisma/db";
import {JournalEntities, JournalEntity, TagEntities} from "@/libs/dao/db/type";
import {Prisma} from '@prisma/client'
import {FEATURED} from "@/types";

const getAllJournals = async (): Promise<JournalEntities> => {
  return db.logs.findMany({
    include: {
      tags: true
    }
  })
}

const getAllJournalsWithAtLeastOneTag = async (tags: string[]): Promise<JournalEntities> => {

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

const getJournal = async (slug: string) : Promise<JournalEntity | null> => {
  return db.logs.findUnique({
    include: {
      tags: true
    },
    where: {
      slug
    }
  })
}

const getFeaturedJournals = async (): Promise<JournalEntities> => {
  return getAllJournalsWithAtLeastOneTag([FEATURED])
}

const allTagsJournals = async (): Promise<TagEntities> => {
  return db.tags.findMany({
    select: {
      id: true,
      label: true
    },
    distinct: "label"
  })
}

export {getAllJournals, getJournal, getFeaturedJournals, getAllJournalsWithAtLeastOneTag, allTagsJournals}