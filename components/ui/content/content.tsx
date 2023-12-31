import {PropsWithChildren} from "react";
import classes from "./content.module.css";
import {ContentProps} from "@/components/ui/content/types";
const Content = ({children, className}: PropsWithChildren<ContentProps>) => {
  return (
    <div className={`${classes.content} ${className ? className : ''}`}>
      {children}
    </div>
  )
}

export default Content