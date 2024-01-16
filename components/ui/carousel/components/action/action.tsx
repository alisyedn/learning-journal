import {PropsWithChildren} from "react";
import {ActionProps} from "@/components/ui/carousel/components/action/types";
import classes from './action.module.scss'

const Action = ({children, className} : PropsWithChildren<ActionProps>) => {
  return (
    <div className={`${classes['action-box']} ${className}`}>
      {children}
    </div>
  )
}

export default Action;