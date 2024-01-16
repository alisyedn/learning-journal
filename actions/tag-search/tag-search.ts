'use server'

import {ProblemDetails} from "@/types";
import {withErrorHandler} from "@/actions/libs";
import {getAllJournalsWithAtLeastOneTag as getFilteredJournals, JournalEntities} from "@/libs/dao/db";

const tagSearch = withErrorHandler(async (tags: string[]): Promise<ProblemDetails | JournalEntities> => {
  return getFilteredJournals(tags)
  }
)

export {tagSearch}