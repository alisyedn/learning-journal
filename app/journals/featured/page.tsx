import {getFeaturedJournals} from "@/libs/dao/db";
import JournalList from "@/components/journals/journal-list";
import classes from './page.module.scss'

const FeaturedJournal = async () => {

  const featuredJournals = await getFeaturedJournals()
  return (
    <>
      <header className={classes.header}>
        <h1>Featured Journals</h1>
        <p>Set of Journals that are more interesting then the reset!</p>
      </header>
      <main className={classes.main}>
        <JournalList notes={featuredJournals}/>
      </main>
    </>
  )
}

export default FeaturedJournal