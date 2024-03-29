import {getJournal as getJournalBySlug} from "@/libs/service";
import Image from "next/image";
import {Suspense} from "react";
import {JournalMarkDown} from "@/components/journals/journal-mark-down";
import classes from './page.module.scss'
import TagList from "@/components/ui/tag-list";
import ContentLoading from "@/components/ui/content-loading";
import {RelatedJournalList} from "@/components/journals/related-journal-list";

const NoteDetail = async ({ params: { slug } }: { params: { slug: string } }) => {

  const { title, excerpt, image, tags } = await getJournalBySlug(slug)

  return (
    <>
      <header className={classes.header}>
        <TagList tags={tags}/>
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
        <Suspense fallback={<ContentLoading>Fetching Content....</ContentLoading>}>
          <JournalMarkDown slug={slug}/>
          <div className={classes.hr}>
            <hr/>
          </div>
          <RelatedJournalList tags={tags} relatedTo={slug}/>
        </Suspense>
      </main>
    </>
  )
}

export default NoteDetail;