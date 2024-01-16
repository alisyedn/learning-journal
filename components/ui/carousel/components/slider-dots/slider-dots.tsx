import {CarouselSliderDotProps} from "@/components/ui/carousel/components/slider-dots/types";
import useCarouselContext from "@/components/ui/carousel/hooks/use-carousel-context";
import {useCallback} from "react";
import classes from "./slider-dots.module.scss";

const SliderDots = ({ index }: CarouselSliderDotProps) => {

  const { index: currentIndex, setIndex: setCurrentIndex } = useCarouselContext()

  const oncClick = useCallback(() => {
    setCurrentIndex(index)
  }, [index, setCurrentIndex])

  return (
    <div className={`${classes.dot} ${index === currentIndex ? classes.selected : ''}`}
         onClick={oncClick}
    />
  )
}

export default SliderDots