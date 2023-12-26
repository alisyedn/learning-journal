import Content from "@/components/ui/content";
import {getFeaturedJournals} from "@/libs/dao/db";
import NotesList from "@/components/notes/notes-list";

const FeaturedJournal = async () => {

  const featuredJournals = await getFeaturedJournals()
  return (
    <Content>
      <NotesList notes={featuredJournals}/>
    </Content>
  )
}

export default FeaturedJournal