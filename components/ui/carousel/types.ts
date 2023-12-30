import {Notes} from "@/types";

export interface CarouselWrapperProps {
  journals: Notes
  styles: Styles
  ms: number
}

export interface Styles {
  height: string
  width: string
}