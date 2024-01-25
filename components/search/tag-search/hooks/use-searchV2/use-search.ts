import {tagSearch} from "@/actions";
import {useSearchProps} from "@/components/search/tag-search/hooks/use-searchV2/types";
import useProblemDetails from "@/components/search/tag-search/hooks/use-problem-details";
import {JournalEntities} from "@/libs/dao/db";
import {useCallback} from "react";
import {useQuery} from "@tanstack/react-query";
import {ProblemDetails} from "@/types";

const useSearchQuery = (selectedTags: string []) => {
  return selectedTags.sort((a, b) => a.length - b.length)
}

const useSearchV2 = ({ selectedTags }: useSearchProps) => {

  const { isProblemDetail } = useProblemDetails()

  const search = useCallback(async (): Promise<JournalEntities> => {
    const response = await tagSearch(selectedTags)
    if (isProblemDetail(response)) {
      throw response;
    }

    return response as JournalEntities;
  }, [isProblemDetail, selectedTags])

  return useQuery<JournalEntities, ProblemDetails, JournalEntities, string[]>({
    queryKey: ["search", ...useSearchQuery(selectedTags)],
    queryFn: search,
    enabled: Boolean(selectedTags && selectedTags.length)
  })
}

export default useSearchV2;