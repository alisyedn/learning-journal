import {NoteEntities, NoteEntity} from "@/libs/dao/db/type";

type Note = NoteEntity & { content: string }

type Notes = NoteEntities

export type {Note, Notes}
