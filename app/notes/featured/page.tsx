import Content from "@/components/ui/content";
import {getFeaturedJournals} from "@/libs/dao/db";
import JournalList from "../../../components/notes/journal-list";

const FeaturedJournal = async () => {

  const featuredJournals = await getFeaturedJournals()
  return (
    <Content>
      <JournalList notes={featuredJournals}/>
    </Content>
  )
}

export default FeaturedJournal