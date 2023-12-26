import {getJournal as getJournalBySlug} from "@/libs/dao/db";
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

export {getJournal}