
export type RelativeImage = string
export type ListOfLogs = LogFile[]

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
  tags: string[],
  isFeatured: boolean
  content: string
}

