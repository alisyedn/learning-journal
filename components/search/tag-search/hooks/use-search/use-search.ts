import {tagSearch} from "@/actions";
import {JournalEntities} from "@/libs/dao/db";
import useProblemDetails from "@/components/search/tag-search/hooks/use-problem-details";
import {useEffect, useMemo, useState} from "react";
import {useSearchProps} from "@/components/search/tag-search/hooks/use-search/types";
import {ProblemDetails} from "@/types";

const useSearch = ({ selectedTags }: useSearchProps) => {

  const { isProblemDetail } = useProblemDetails()
  const [journals, setJournals] = useState<JournalEntities>([])
  const [isFetching, setIsFetching] = useState(false)
  const [problemDetails, setProblemDetails] = useState<ProblemDetails | null>()

  useEffect(() => {

    setJournals([])
    setProblemDetails(null)

    if (!selectedTags?.length) {
      setJournals([])
      return;
    }

    setIsFetching(true)
    const timeout = setTimeout(async () => {
      const response = await tagSearch(selectedTags)
      if (isProblemDetail(response)) {
        setProblemDetails(response as ProblemDetails)
      } else {
        setJournals(response as JournalEntities)
      }
      setIsFetching(false)
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [isProblemDetail, selectedTags])

  return useMemo(() => (
    {
      journals,
      isFetching,
      problemDetails,
      isError: Boolean(problemDetails),
      isSuccess: !Boolean(problemDetails)
    }
  ), [isFetching, journals, problemDetails])
}

export default useSearch;