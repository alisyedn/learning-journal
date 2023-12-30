'use client'

import {CarouselContextProvider} from "@/components/ui/carousel/context";
import {Carousel} from "@/components/ui/carousel/components/carousel";
import {CarouselWrapperProps} from "@/components/ui/carousel/types";

const Wrapper = ({ journals, className, ms }: CarouselWrapperProps) => {

  return (
    <CarouselContextProvider journals={journals}>
      <Carousel className={className} ms={ms}/>
    </CarouselContextProvider>
  )
}
export default Wrapper