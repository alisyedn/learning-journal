import {JournalMarkDownProps} from "@/components/notes/journal-mark-down";
import MarkDown from "@/components/notes/mark-down";
import {getJournalContent as getJournalContentBySlug} from "@/libs/service";

const JournalMarkDown = async ({slug, className}: JournalMarkDownProps) => {
  const content = await getJournalContentBySlug(slug)
  return <MarkDown content={content} className={className}/>
}

export {JournalMarkDown}