import {RelatedJournalListProps} from "@/components/journals/related-journal-list/types";
import {getRelatedJournals} from "@/libs/service";
import RelatedJournal from "@/components/journals/related-journal-list/components/related-journal";
import classes from './related-journal-list.module.scss'

const RelatedJournalList = async ({ relatedTo, tags }: RelatedJournalListProps) => {
  const relatedJournals = await getRelatedJournals(relatedTo, tags.map(tag => tag.label))

  return (
    <aside className={classes.aside}>
      <h3>Related Content</h3>
      <ul>
        {relatedJournals.map(journal => <RelatedJournal key={journal.slug} journal={journal}/>)}
      </ul>
    </aside>
  )
}

export {RelatedJournalList}