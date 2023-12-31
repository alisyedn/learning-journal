import {getAllJournals} from "@/libs/dao/db/journal";
import JournalList from "@/components/notes/journal-list";
import {AsyncFeaturedJournals as FeaturedJournals} from "@/components/notes/featured-journals";
import classes from './page.module.css'

const AllNotesPage = async () => {

  const notes = await getAllJournals()

  return (
    <>
      <header className={classes.header}>
        <div>
          <h2>Featured Journals</h2>
          <FeaturedJournals className={classes['featured-list']}/>
        </div>
        <div className={classes.title}>
          <h1>All Available Journals</h1>
          <p>Sub-set of notes selected for demoing purposes!</p>
          <p>Hoping to add more notes in the future!</p>
        </div>
      </header>
      <main className={classes.main}>
        <JournalList notes={notes}/>
      </main>
    </>
  )
}

export default AllNotesPage;