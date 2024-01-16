import {MarkDownProps} from "@/components/journals/mark-down/types";
import classes from "./mark-down.module.scss";
import ReactMarkdown, {Components} from "react-markdown";
import Code from "@/components/journals/mark-down/components/code";
import Img from "@/components/journals/mark-down/components/img";


const MarkDown = ({ slug, content, className }: MarkDownProps) => {

  const components: Components = {
    code(code) {
      return <Code element={code}/>
    },
    p(paragraph) {
      const { node } = paragraph

      if ((node?.children[0] as any).tagName === "img") {
        return <Img slug={slug} element={paragraph}/>
      }

      return <p>{paragraph.children}</p>
    },
    img(image) {
      return <Img slug={slug} element={image}/>
    }
  }

  return (
    <article className={`${classes.content} ${className ?? ''}`}>
      <ReactMarkdown components={components}>
        {content}
      </ReactMarkdown>
    </article>
  )
}

export default MarkDown