'use client'

import {TagSearchProps} from "@/components/search/tag-search/types";
import Select from "@/components/search/tag-search/components/Select";
import {useEffect, useState} from "react";
import JournalList from "@/components/journals/journal-list";
import classes from './tag-search.module.scss'
import ContentLoading from "@/components/ui/content-loading";
import {QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import useSearchV2Action from "@/components/search/tag-search/hooks/use-searchV2-action";
import {queryClient} from "@/libs/queryClient";

const TagSearch = (tagSearchProps: TagSearchProps) => {

  return (
    <QueryClientProvider client={queryClient}>
      <Search {...tagSearchProps}/>
    </QueryClientProvider>
  )
}

const Search = ({ initialTags, tags }: TagSearchProps) => {

  const [selectedTags, setSelectedTags] = useState<string[]>([])

  useEffect(() => {
    setSelectedTags(initialTags)
  }, [initialTags]);

  const {
    journals,
    problemDetails,
    isFetching,
    isSuccess,
    isError
  } = useSearchV2Action({ selectedTags })

  return (
    <QueryClientProvider client={queryClient}>
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
          !isFetching && isSuccess && <JournalList notes={journals!}/>
        }
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default TagSearch