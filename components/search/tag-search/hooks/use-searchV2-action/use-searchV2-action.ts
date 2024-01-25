import useSearchV2 from "@/components/search/tag-search/hooks/use-searchV2/use-search";
import {UseSearchV2ActionProps} from "@/components/search/tag-search/hooks/use-searchV2-action/types";
import useDebounce from "@/components/search/tag-search/hooks/use-debounce";

const useSearchV2Action = (props: UseSearchV2ActionProps) => {

  const {
    value: selectedTags,
    isBouncing
  } = useDebounce<string[]>({ object: props.selectedTags })

  const {
    error: problemDetails,
    data: journals,
    isFetching,
    isSuccess,
    isError
  } = useSearchV2({ selectedTags: selectedTags ?? [] })

  return {
    problemDetails,
    journals,
    isFetching: isFetching || isBouncing,
    isSuccess,
    isError
  }
}

export default useSearchV2Action;