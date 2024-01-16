import {Prisma} from "@prisma/client";

const JournalEntityWithTag = Prisma.validator<Prisma.LogsDefaultArgs>()({
  include: {
    tags: true
  }
})

type JournalEntity = Prisma.LogsGetPayload<typeof JournalEntityWithTag>

type JournalEntities = JournalEntity[]

const Tag = Prisma.validator<Prisma.TagsDefaultArgs>()({
  select: {
    id: true,
    label: true
  }
})

type TagEntity = Prisma.TagsGetPayload<typeof Tag>

type TagEntities = TagEntity[]

export type {JournalEntity, JournalEntities, TagEntity, TagEntities}

