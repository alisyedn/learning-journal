export interface SqliteLogFile {
  slug: string
  title: string,
  date: string
  image: string
  excerpt: string
  isFeatured: number
  content: string
}

export interface SqliteTag {
  label: string
  logId: number
}