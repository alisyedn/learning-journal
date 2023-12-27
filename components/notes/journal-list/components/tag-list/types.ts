import {TagEntities} from "@/libs/dao/db";

export interface TagListProps {
  tags: TagEntities
  isFeatured?: boolean
}