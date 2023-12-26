import {getJournal} from "@/libs/service";
import {notFound} from "next/navigation";
import Image from "next/image";
import Content from "@/components/ui/content";
import MarkDown from "@/components/notes/mark-down";

const NoteDetail = async ({ params: { slug } }: { params: { slug: string } }) => {

  const note = await getJournal(slug)

  return (
    <Content>
      <main>
        <h1>Note Details: {slug}</h1>
        <p>{note.title}</p>
        <p>{note.excerpt}</p>
        <Image src={`/images/logs/${slug}/${note.image}`}
               alt={note.excerpt}
               width={250}
               height={250}
               style={{ objectFit: "contain" }}
        />
        <MarkDown content={note.content}/>
      </main>
    </Content>
  )
}

export default NoteDetail;