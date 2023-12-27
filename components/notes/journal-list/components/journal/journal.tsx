import {JournalProps} from "@/components/notes/journal-list/components/journal/types";
import Link from "next/link";
import classes from './journal.module.css'
import Image from "next/image";
import TagList from "../tag-list";

const Journal = ({ journal }: JournalProps) => {
  return (
    <li className={classes.item}>
      <article className={classes.article}>
        <header>
          <div className={classes.image}>
            <Image src={`/images/logs/${journal.slug}/${journal.image}`}
                   alt={journal.excerpt}
                   fill
            />
          </div>
          <div className={classes['header-text']}>
            <div className={classes['header-tags']}>
              <TagList tags={journal.tags} isFeatured={journal.isFeatured}/>
            </div>
            <h3>{journal.title}</h3>
            <p>{journal.excerpt}</p>
          </div>
        </header>
        <div className={classes.action}>
          <Link href={`/notes/${journal.slug}`}>
            View Details
          </Link>
        </div>
      </article>
    </li>
  )
}

export default Journal