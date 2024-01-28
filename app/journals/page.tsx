import {getAllJournals} from "@/libs/service";
import JournalList from "@/components/journals/journal-list";
import {AsyncFeaturedJournals as FeaturedJournals} from "@/components/journals/featured-journals";
import classes from './page.module.scss'

const AllNotesPage = async () => {

  const notes = await getAllJournals()

  return (
    <>
      <header className={classes.header}>
        <div className={classes.title}>
          <h1>All Available Journals</h1>
          <p>Sub-set of notes selected for demoing purposes!</p>
          <p>Hoping to add more notes in the future!</p>
        </div>
        <div className={classes.journals}>
          <h2>Featured Journals</h2>
          <FeaturedJournals className={classes['featured-list']}/>
        </div>
      </header>
      <main className={classes.main}>
        <h2>Journals</h2>
        <JournalList notes={notes}/>
      </main>
    </>
  )
}

export default AllNotesPage;