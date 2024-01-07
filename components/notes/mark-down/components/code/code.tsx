import {ElementProps} from "@/components/notes/mark-down/components/types";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {atomDark} from "react-syntax-highlighter/dist/cjs/styles/prism";
import classes from "./code.module.css";

const Code = ({ element }: ElementProps) => {
  const { className, children } = element

  if (className) {
    const language = className.split('-').pop()
    return (
      <SyntaxHighlighter language={language} style={atomDark}>
        {
          String(children).replace(/\n$/, '')
        }
      </SyntaxHighlighter>
    )
  }

  return (
    <span className={classes['inline-snippet']}>{children}</span>
  )
}

export default Code;