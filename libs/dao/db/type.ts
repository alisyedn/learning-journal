import {Prisma} from "@prisma/client";

const NoteEntityWithTag = Prisma.validator<Prisma.LogsDefaultArgs>()({
  include: {
    tags: true
  }
})

type NoteEntity = Prisma.LogsGetPayload<typeof NoteEntityWithTag>

type NoteEntities = NoteEntity[]

const Tag = Prisma.validator<Prisma.TagsDefaultArgs>()({
  select: {
    id: true,
    label: true
  }
})

type TagEntity = Prisma.TagsGetPayload<typeof Tag>

type TagEntities = TagEntity[]

export type {NoteEntity, NoteEntities, TagEntity, TagEntities}

