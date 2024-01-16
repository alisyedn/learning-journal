import {TagListProps} from "@/components/ui/tag-list/types";
import classes from './tag-list.module.scss'
import Tag from "@/components/ui/tag-list/components/tag";

const TagList = ({ tags, className }: TagListProps) => {

  return (
    <ul className={`${classes.tags} ${className ? className : ''}`}>
      {
        tags.map(tag => <Tag key={tag.id} label={tag.label}/>)
      }
    </ul>
  )
}

export default TagList