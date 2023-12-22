import fs from 'fs'
import path from "path"
import matter from 'gray-matter'
import {ListOfLogs, LogFile} from "@/_static-generate/types";

const LOGS_LOCATION = path.join(process.cwd(), 'content', 'logs')

export function loadAllLogs(): ListOfLogs {
  const fileNames = fs.readdirSync(LOGS_LOCATION);
  return fileNames
  .map(fileName => getLog(fileName))
}

function getLog(fileName: string): LogFile {
  const fileContent = fs.readFileSync(path.join(LOGS_LOCATION, fileName), 'utf-8')
  const { data, content } = matter(fileContent)
  const slug = fileName.replace(/\.md$/, '')

  return {
    slug: slug,
    ...data,
    content
  } as LogFile
}