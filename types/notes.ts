import {NoteEntity} from "@/libs/dao/db/type";

type Note = NoteEntity & { content: string }

export type {Note}
