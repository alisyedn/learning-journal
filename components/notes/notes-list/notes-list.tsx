import {NotesListProps} from "@/components/notes/notes-list/types";
import Note from "@/components/notes/note";

const NotesList = ({ notes }: NotesListProps) => {
  return (
    <ul>
      {
        notes.map(note => <Note key={note.slug} note={note}/>)
      }
    </ul>
  )
}

export default NotesList;