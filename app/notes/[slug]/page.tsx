import {getJournal as getJournalBySlug} from "@/libs/service";
import Image from "next/image";
import {Suspense} from "react";
import {JournalMarkDown} from "@/components/notes/journal-mark-down";
import classes from './page.module.css'
import JournalContentLoading from "@/components/notes/journal-content-loading";

const NoteDetail = async ({ params: { slug } }: { params: { slug: string } }) => {

  const { title, excerpt, image } = await getJournalBySlug(slug)

  return (
    <>
      <header className={classes.header}>
        <h1>{title}</h1>
        <p>{excerpt}</p>
        <div className={classes.image}>
          <Image src={`/images/logs/${slug}/${image}`}
                 alt={title}
                 fill
          />
        </div>
      </header>
      <main className={classes.content}>
        <Suspense fallback={<JournalContentLoading/>}>
          <JournalMarkDown slug={slug}/>
        </Suspense>
      </main>
    </>
  )
}

export default NoteDetail;