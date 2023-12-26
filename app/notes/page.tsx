import {getAllJournals} from "@/libs/dao/db/journal";
import NotesList from "@/components/notes/notes-list";

const AllNotesPage = async () => {

  const notes = await getAllJournals()

  return (
    <main>
      <h1>All Notes!</h1>
      <NotesList notes={notes}/>
    </main>
  )
}

export default AllNotesPage;