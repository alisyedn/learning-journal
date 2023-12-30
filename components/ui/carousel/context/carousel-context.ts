import {createContext} from "react";
import {CarouselContextProps} from "@/components/ui/carousel/context/types";

const CarouselContext = createContext<CarouselContextProps>({
  journals: [],
  index: 0,
  next: () => {
    console.warn('In Context - Function not set')
  },
  back: () => {
    console.warn('In Context - Function not set')
  },
  setIndex: (index: number) => {
    console.warn('In Context - Function not set')
  }
})

export {CarouselContext}