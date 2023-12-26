import {Prisma} from "@prisma/client";

const NoteEntityWithTag = Prisma.validator<Prisma.LogsDefaultArgs>()({
  include: {
    tags: true
  }
})

type NoteEntity = Prisma.LogsGetPayload<typeof NoteEntityWithTag>

type NoteEntities = NoteEntity[]

export type {NoteEntity, NoteEntities}

