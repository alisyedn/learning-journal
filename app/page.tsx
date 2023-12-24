import classes from './page.module.css'
import Svg from "../components/main-header/components/svg";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <Svg/>
        <div className={classes.title}>
          <h1>Meta Rag 101 Learning Journal</h1>
          <h1>For Random Notes 🥱 👀</h1>
        </div>
      </header>
    </>
  )
}