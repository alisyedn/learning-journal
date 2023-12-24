import {PropsWithChildren} from "react";
import classes from "./content.module.css";
const Content = ({children}: PropsWithChildren) => {
  return (
    <div className={classes.content}>
      {children}
    </div>
  )
}

export default Content