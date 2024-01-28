import {
  getAllJournals as getAllDbJournals,
  getAllJournalsWithAtLeastOneTag as getJournalByTags,
  getJournal as getJournalBySlug
} from "@/libs/dao/db"
import {getLog as getContentBySlug} from '@/libs/dao/fs'
import {Journal, Journals} from "@/types"
import {notFound} from "next/navigation"

const getAllJournals = (): Promise<Journals> => {
  return getAllDbJournals()
}

const getJournal = async (slug: string): Promise<Journal> => {
  const journal = await getJournalBySlug(slug);

  if (!journal) {
    notFound()
  }
  return journal
}

const getJournalContent = async (slug: string) => {
  const logFile = getContentBySlug(`${slug}.md`)

  if (!logFile) {
    notFound()
  }
  return logFile.content
}

const getFilteredJournals = async (tags: string[]) => {
  return getJournalByTags(tags)
}

const getRelatedJournals = async (relatedTo: string, tags: string[]) => {
  const journalEntities = await getJournalByTags(tags);
  return journalEntities.filter(journalEntity => journalEntity.slug != relatedTo)
}

export {getJournal, getFilteredJournals, getJournalContent, getAllJournals, getRelatedJournals}