import {getAllJournalsWithAtLeastOneTag as getJournalByTags, getJournal as getJournalBySlug} from "@/libs/dao/db";
import {getLog as getContentBySlug} from '@/libs/dao/fs'
import {Journal} from "@/types";
import {notFound} from "next/navigation";

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
  await new Promise(resolve => setTimeout(resolve, 1000))
  return await getJournalByTags(tags)
}

export {getJournal, getFilteredJournals, getJournalContent}