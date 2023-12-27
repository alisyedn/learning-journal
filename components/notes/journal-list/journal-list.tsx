import {NotesListProps} from "@/components/notes/journal-list/types";
import classes from './journal-list.module.css'
import Journal from "@/components/notes/journal-list/components/journal";

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