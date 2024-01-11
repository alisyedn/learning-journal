import classes from "./content-loading.module.css";
import {ContentLoadingProps} from "@/components/ui/content-loading/types";

const ContentLoading = ({ className, children }: ContentLoadingProps) => {
  return (
    <p className={`${classes.loading} ${className ? className : ''}`}>
      {
        children ? children : 'Loading....'
      }
    </p>
  )
}

export default ContentLoading;