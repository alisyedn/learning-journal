'use server'

import {ProblemDetails} from "@/types";
import {withErrorHandler} from "@/actions/libs";
import {getAllJournalsWithAtLeastOneTag as getFilteredJournals, NoteEntities} from "@/libs/dao/db";

const tagSearch = withErrorHandler(async (tags: string[]): Promise<ProblemDetails | NoteEntities> => {
  return getFilteredJournals(tags)
  }
)

export {tagSearch}