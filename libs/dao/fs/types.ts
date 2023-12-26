
type MainImageName = string
type ListOfLogs = LogFile[]
type Tags = string []

interface LogFile extends File {
  slug: string
  title: string,
  date: string
  image: MainImageName
  excerpt: string
  tags: Tags,
  isFeatured: boolean
  content: string
}

export type {ListOfLogs, Tags, LogFile}

