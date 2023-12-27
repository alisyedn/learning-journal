import {getAllJournalsWithAtLeastOneTag as getJournalByTags, getJournal as getJournalBySlug} from "@/libs/dao/db";
import {getLog as getContentBySlug} from '@/libs/dao/fs/journals'
import {Note} from "@/types";
import {notFound} from "next/navigation";

const getJournal = async (slug: string): Promise<Note> => {
  const journal = await getJournalBySlug(slug);

  if (!journal) {
    notFound()
  }
  const { content } = getContentBySlug(`${slug}.md`)

  return {
    ...journal,
    content
  }
}

const getFilteredJournals = async (tags: string[]) => {
  return await getJournalByTags(tags)
}

export {getJournal, getFilteredJournals}