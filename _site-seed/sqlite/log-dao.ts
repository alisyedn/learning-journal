import {RunResult} from 'better-sqlite3';
import {ListOfLogs, LogFile, Tags} from "@/libs/dao/fs/types";
import {logger} from "@/_site-seed/logger";
import {SqliteLogFile, SqliteTag} from "@/_site-seed/sqlite/types";
import {DB, INSERT_LOGS, INSERT_TAGS} from "@/_site-seed/sqlite/DB";

const saveAll = (listOfLogs: ListOfLogs) => {
  listOfLogs.forEach(save)
}

const saveLogTags = (logId: number, logTags: Tags) => {

  logger.debug('tags that will be processed', { logTags: logTags })

  const tags: SqliteTag[] = logTags
  .filter(doesTagNotExist)
  .map(tag => ({ label: tag, logId }))

  const tagStatement = DB.prepare(INSERT_TAGS);

  tags.forEach(tag => {
    tagStatement.run(tag)
  })
}

const doesTagNotExist = (tag: string) => {
  const result = DB.prepare(`SELECT EXISTS(SELECT 1 FROM Tags WHERE label = ?)`).get(tag) as {}
  const doesNotExists = !Boolean(Object.values(result).pop())
  logger.debug(`Checking tag ${tag}`, { doesNotExists })
  return doesNotExists
}

const save = (log: LogFile) => {
  const file: SqliteLogFile = { ...log, isFeatured: log ? 1 : 0 }
  const result: RunResult = DB.prepare(INSERT_LOGS).run(file);
  logger.debug('inserted log', { result: result, slug: log.slug })
  saveLogTags(result.lastInsertRowid as number, log.tags)
}

export {saveAll}