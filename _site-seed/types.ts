
export type RelativeImage = string
export type ListOfLogs = LogFile[]
export type Tags = string []

export interface File {
  [keys: string]: any
  image: RelativeImage
}

export interface LogFile extends File {
  slug: string
  title: string,
  date: string
  image: string
  excerpt: string
  tags: Tags,
  isFeatured: boolean
  content: string
}

