import classes from './slider.module.css'
import useCarouselContext from "@/components/ui/carousel/hooks/use-carousel-context";
import SliderDots from "@/components/ui/carousel/components/slider-dots";

const Slider = () => {

  const {journals} = useCarouselContext()

  return (
    <div className={classes['carousel-slider']}>
      {
        journals.map((journal, index) => {
            return <SliderDots key={journal.slug} index={index}/>
          }
        )
      }
    </div>
  )
}

export default Slider
