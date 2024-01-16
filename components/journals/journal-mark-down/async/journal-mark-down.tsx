import {JournalMarkDownProps} from "@/components/journals/journal-mark-down";
import MarkDown from "@/components/journals/mark-down";
import {getJournalContent as getJournalContentBySlug} from "@/libs/service";

const JournalMarkDown = async ({slug, className}: JournalMarkDownProps) => {
  const content = await getJournalContentBySlug(slug)
  return <MarkDown slug={slug} content={content} className={className}/>
}

export {JournalMarkDown}