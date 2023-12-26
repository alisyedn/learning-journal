import {ListOfLogs, LogFile} from "@/libs/dao/fs/types";
import db from "@/prisma/db";

const removeAll = async () => {
  await db.tags.deleteMany()
  await db.logs.deleteMany()
}

const saveAll = async (logs: ListOfLogs) => {
  logs.forEach(save)
}

const save = async (log: LogFile) => {

  const tags = log.tags.map(tag => ({ label: tag }))

  await db.logs.create({
    data: {
      slug: log.slug,
      title: log.title,
      date: log.date,
      image: log.image,
      excerpt: log.excerpt,
      isFeatured: log.isFeatured,
      tags: {
        create: tags
      }
    }
  })
}


export {saveAll, save, removeAll}