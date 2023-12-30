import {useCallback, useState} from "react";
import {CarouselActionProps} from "@/components/ui/carousel/hooks/use-carousel-action/types";

const useCarouselAction = ({ maxCount }: CarouselActionProps) => {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => {
    const value = index + 1 === maxCount ? 0 : index + 1;
    setIndex(value)
  }, [index, maxCount])

  const back = useCallback(() => {
    const value = index - 1 === -1 ? maxCount - 1 : index - 1
    setIndex(value)
  }, [index, maxCount])

  const setCurrentIndex = useCallback((index: number) => {
    setIndex(index)
  }, []);

  return {
    index,
    next,
    back,
    setCurrentIndex
  }
}

export default useCarouselAction