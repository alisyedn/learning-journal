import classes from "./content-loading.module.scss";
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