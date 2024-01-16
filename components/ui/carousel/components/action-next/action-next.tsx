import Action from "@/components/ui/carousel/components/action";
import classes from './action-next.module.scss'
import useCarouselContext from "@/components/ui/carousel/hooks/use-carousel-context";
const ActionNext = () => {

  const {next} = useCarouselContext()

  return (
    <Action className={classes.location}>
      <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           onClick={next}
      >
        <path
          d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z"/>
      </svg>
    </Action>
  )
}

export default ActionNext;