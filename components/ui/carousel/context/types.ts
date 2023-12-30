import {Notes} from "@/types";

interface CarouselContextProps {
  journals: Readonly<Notes>
  index: number
  next: () => void
  back: () => void
  setIndex: (index: number) => void
}

interface CarouselContextProviderProps {
  journals: Readonly<Notes>
}

export type {CarouselContextProps, CarouselContextProviderProps}