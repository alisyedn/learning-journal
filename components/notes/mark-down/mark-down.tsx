import {MarkDownProps} from "@/components/notes/mark-down/types";
import classes from "./mark-down.module.css";
import ReactMarkdown, {Components} from "react-markdown";
import Code from "@/components/notes/mark-down/components/code";

const MarkDown = ({ content, className }: MarkDownProps) => {

  const components: Components = {
    code(code) {
      return <Code element={code}/>
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