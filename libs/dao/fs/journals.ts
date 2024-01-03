import fs from 'fs'
import path from "path"
import matter from 'gray-matter'
import {ListOfLogs, LogFile} from "@/libs/dao/fs/types";

const LOGS_LOCATION = path.join(process.cwd(), 'content', 'logs')

export function loadAllLogs(): ListOfLogs {
  const fileNames = fs.readdirSync(LOGS_LOCATION);
  return fileNames.map(fileName => getLog(fileName)!)
}

export function getLog(fileName: string): LogFile | null{

  const fileLocation = path.join(LOGS_LOCATION, fileName);

  if(!fs.existsSync(fileLocation)){
    return null
  }

  const fileContent = fs.readFileSync(fileLocation, 'utf-8')
  const { data, content } = matter(fileContent)
  const slug = fileName.replace(/\.md$/, '')

  return {
    slug: slug,
    ...data,
    content
  } as LogFile
}