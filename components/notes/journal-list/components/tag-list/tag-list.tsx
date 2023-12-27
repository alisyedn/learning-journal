import {TagListProps} from "@/components/notes/journal-list/components/tag-list/types";
import classes from './tag-list.module.css'
import Tag from "@/components/notes/journal-list/components/tag-list/components/tag";

const TagList = ({ tags, isFeatured = false }: TagListProps) => {

  return (
    <ul className={classes.tags}>
      {
        isFeatured && <Tag label="featured"/>

      }
      {
        tags.map(tag => <Tag key={tag.id} label={tag.label}/>)
      }
    </ul>
  )
}

export default TagList