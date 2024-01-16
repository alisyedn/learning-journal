import {Journals} from "@/types";

interface CarouselContextProps {
  journals: Readonly<Journals>
  index: number
  next: () => void
  back: () => void
  setIndex: (index: number) => void
}

interface CarouselContextProviderProps {
  journals: Readonly<Journals>
}

export type {CarouselContextProps, CarouselContextProviderProps}