import classes from './page.module.css'
import Content from "@/components/ui/content";
import {AsyncFeaturedJournals as FeaturedJournals} from "@/components/notes/featured-journals";


export default async function Home() {

  return (
    <Content>
      <header className={classes.header}>
        <FeaturedJournals className={classes['featured-journals']}/>
        <div>
          <div className={classes.title}>
            <h1>Meta Rag 101 Learning Journal - <span>For Random Notes 🥱 👀</span></h1>
          </div>
          <div className={classes.description}>
            <p>This is a archive of random sub-set of more comprehensive notes</p>
            <p>This Project was create during the christmas leave of 2023 during downtime</p>
          </div>
        </div>
      </header>
    </Content>
  )
}