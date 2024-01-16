import {TagProps} from "@/components/ui/tag-list/components/tag/types";
import classes from './tag.module.scss'
import Link from "next/link";

const Tag = ({label}: TagProps) => {
  return (
    <li>
      <Link href={`/journals/search?tags=${label}`}
            className={classes.tag}
      >
        {label}
      </Link>
    </li>
  )
}
export default Tag;