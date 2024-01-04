import {TagProps} from "@/components/ui/tag-list/components/tag/types";
import classes from './tag.module.css'
import Link from "next/link";

const Tag = ({label}: TagProps) => {
  return (
    <li>
      <Link href={`/notes/search?tags=${label}`}
            className={classes.tag}
      >
        {label}
      </Link>
    </li>
  )
}
export default Tag;