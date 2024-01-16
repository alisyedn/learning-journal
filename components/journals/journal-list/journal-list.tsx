import {NotesListProps} from "@/components/journals/journal-list/types";
import classes from './journal-list.module.scss'
import Journal from "@/components/journals/journal-list/components/journal";

const JournalList = ({ notes }: NotesListProps) => {
  return (
    <ul className={classes.list}>
      {
        notes.map(note => <Journal key={note.slug} journal={note}/>)
      }
    </ul>
  )
}

export default JournalList;