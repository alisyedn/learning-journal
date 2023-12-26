import {Prisma} from "@prisma/client";

const NoteWithTag = Prisma.validator<Prisma.LogsDefaultArgs>()({
  include: {
    tags: true
  }
})

export type Note = Prisma.LogsGetPayload<typeof NoteWithTag>

export type Notes = Note[]

