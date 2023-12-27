import {getAllJournals} from "@/libs/dao/db/journal";
import Content from "@/components/ui/content";
import JournalList from "@/components/notes/journal-list";

const AllNotesPage = async () => {

  const notes = await getAllJournals()

  return (
    <main>
      <Content>
        <h1>All Notes!</h1>
      </Content>
      <JournalList notes={notes}/>
    </main>
  )
}

export default AllNotesPage;