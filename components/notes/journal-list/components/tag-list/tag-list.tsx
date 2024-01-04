import {TagListProps} from "@/components/notes/journal-list/components/tag-list/types";
import classes from './tag-list.module.css'
import Tag from "@/components/notes/journal-list/components/tag-list/components/tag";

const TagList = ({ tags }: TagListProps) => {

  return (
    <ul className={classes.tags}>
      {
        tags.map(tag => <Tag key={tag.id} label={tag.label}/>)
      }
    </ul>
  )
}

export default TagList