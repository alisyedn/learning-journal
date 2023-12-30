import classes from './page.module.css'
import Content from "@/components/ui/content";
import {AsyncFeaturedJournals as FeaturedJournals} from "@/components/notes/featured-journals";


export default async function Home() {

  return (
    <Content>
      <header className={classes.header}>
        <div className={classes.title}>
          <h1>Meta Rag 101 Learning Journal</h1>
          <h1>For Random Notes 🥱 👀</h1>
        </div>
      </header>
      <FeaturedJournals/>
    </Content>
  )
}