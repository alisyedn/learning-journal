'use client'

import {TagSearchProps} from "@/components/search/tag-search/types";
import Select from "@/components/search/tag-search/components/Select";
import {useEffect, useState} from "react";
import JournalList from "@/components/journals/journal-list";
import classes from './tag-search.module.scss'
import useSearch from "@/components/search/tag-search/hooks/use-search";
import ContentLoading from "@/components/ui/content-loading";

const TagSearch = ({ initialTags, tags }: TagSearchProps) => {

  const [selectedTags, setSelectedTags] = useState<string[]>([])

  useEffect(() => {
    setSelectedTags(initialTags)
  }, [initialTags]);

  const {
    journals,
    isFetching,
    isError,
    problemDetails,
    isSuccess
  } = useSearch({ selectedTags })

  return (
    <>
      <Select
        selectedOptions={selectedTags}
        options={tags}
        onChange={setSelectedTags}
      />
      <div className={classes.journals}>
        {
          isError && <p className={classes.error}>{problemDetails!.detail}</p>
        }
        {
          isFetching && <ContentLoading className={classes.loading}/>
        }
        {
          !isFetching && isSuccess && !journals?.length && (
            <p className={classes['not-results']}>No Results Found</p>
          )
        }
        {
          !isFetching && isSuccess && <JournalList notes={journals}/>
        }
      </div>
    </>
  )
}

export default TagSearch