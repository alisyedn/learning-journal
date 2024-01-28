import {RelatedJournalProps} from "@/components/journals/related-journal-list/components/related-journal/types";
import classes from './related-journal.module.scss'
import Image from "next/image";
import Link from "next/link";

const RelatedJournal = ({ journal }: RelatedJournalProps) => {
  return (
    <li className={classes.item}>
      <Link href={`/journals/${journal.slug}`}>
        <article className={classes.article}>
          <div className={classes.image}>
            <Image src={`/images/logs/${journal.slug}/${journal.image}`}
                   alt={journal.title}
                   fill
            />
          </div>
          <h5>{journal.title}</h5>
        </article>
      </Link>
    </li>
  )
}

export default RelatedJournal;