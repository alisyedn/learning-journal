import db from "@/prisma/db";
import {Note, Notes} from "@/types/notes";

const getAllNotes = async (): Promise<Notes> => {
  return db.logs.findMany({
    include: {
      tags: true
    }
  })
}

const getNote = async (slug: string) : Promise<Note | null> => {
  return db.logs.findUnique({
    include: {
      tags: true
    },
    where: {
      slug
    }
  })
}

export {getAllNotes, getNote}