import {NoteProps} from "@/components/notes/note/types";
import Link from "next/link";

const Note = ({ note }: NoteProps) => {
  return (
    <li>
      <Link href={`/notes/${note.slug}`}>
        {note.title}
      </Link>
    </li>
  )
}

export default Note