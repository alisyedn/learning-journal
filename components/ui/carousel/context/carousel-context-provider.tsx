import {PropsWithChildren, useMemo} from "react";
import {CarouselContextProps, CarouselContextProviderProps} from "@/components/ui/carousel/context/types";
import {CarouselContext} from "@/components/ui/carousel/context";
import useCarouselAction from "@/components/ui/carousel/hooks/use-carousel-action";

const CarouselContextProvider = ({ children, journals }: PropsWithChildren<CarouselContextProviderProps>) => {

  const { index, setCurrentIndex, next, back } = useCarouselAction({ maxCount: journals.length })

  const providerValue: CarouselContextProps = useMemo(() => (
    {
      journals,
      index,
      next,
      back,
      setIndex: setCurrentIndex
    }
  ), [back, index, journals, next, setCurrentIndex])

  return (
    <CarouselContext.Provider value={providerValue}>
      {children}
    </CarouselContext.Provider>
  )
}

export {CarouselContextProvider}