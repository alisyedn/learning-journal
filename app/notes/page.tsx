import {getAllNotes} from "@/libs/dao/note";
import NotesList from "@/components/notes/notes-list";

const AllNotesPage = async () => {

  const notes = await getAllNotes()

  return (
    <main>
      <h1>All Notes!</h1>
      <NotesList notes={notes}/>
    </main>
  )
}

export default AllNotesPage;