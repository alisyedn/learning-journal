'use server'

import {Journals, ProblemDetails} from "@/types";
import {withErrorHandler} from "@/actions/libs";
import {getFilteredJournals} from "@/libs/service";

const tagSearch = withErrorHandler(async (tags: string[]): Promise<ProblemDetails | Journals> => {
  return getFilteredJournals(tags)
  }
)

export {tagSearch}