import {useContext} from "react";
import {CarouselContext} from "@/components/ui/carousel/context";

const useCarouselContext = () => {
  return useContext(CarouselContext)
}

export default useCarouselContext;