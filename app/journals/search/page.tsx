import {SearchPageProps} from "@/app/journals/search/types";
import classes from './page.module.scss'
import {allTagsJournals, TagEntities} from "@/libs/dao/db";
import TagSearch from "@/components/search/tag-search";

const SearchPage = async ({ searchParams }: SearchPageProps) => {

  const allTags: TagEntities = await allTagsJournals()

  return (
    <>
      <header className={classes.header}>
        <h1>Search</h1>
      </header>
      <main className={classes.main}>
        <TagSearch
          initialTags={searchParams?.tags?.split(',') ?? []}
          tags={allTags.map(tag => tag.label)}
        />
      </main>
    </>
  )
}

export default SearchPage

