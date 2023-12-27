import {SearchPageProps} from "@/app/notes/search/types";
import JournalList from "@/components/notes/journal-list";
import {getFilteredJournals} from "@/libs/service";

const SearchPage = async ({ searchParams }: SearchPageProps) => {

  let journals;
  if (searchParams && searchParams.tags) {
    journals = await getFilteredJournals(searchParams.tags.split(','))
  }

  return (
    <main>
      {
        journals && <JournalList notes={journals}/>
      }
    </main>
  )
}

export default SearchPage

