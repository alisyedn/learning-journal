import classes from './page.module.css'
import {AsyncFeaturedJournals as FeaturedJournals} from "@/components/notes/featured-journals";


export default async function Home() {

  return (
    <>
      <header className={classes.header}>
        <div className={classes.title}>
          <h1>Meta Rag 101 Learning Journals</h1>
          <p>For Random Notes 🥱 👀</p>
        </div>
        <div className={classes.description}>
          <p>This is a archive of random sub-set of more comprehensive notes</p>
          <p>This Project was create during the christmas leave of 2023 during downtime</p>
        </div>
      </header>
      <main className={classes.main}>
        <FeaturedJournals className={classes['featured-journals']}/>
      </main>
    </>
  )
}