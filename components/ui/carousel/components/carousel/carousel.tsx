'use client'

import {CarouselProps} from "@/components/ui/carousel/components/carousel/types";
import classes from "./carousel.module.scss";
import Image from "next/image";
import {useEffect} from "react";
import useCarouselContext from "@/components/ui/carousel/hooks/use-carousel-context";
import Slider from "@/components/ui/carousel/components/slider";
import ActionNext from "@/components/ui/carousel/components/action-next";
import ActionBack from "@/components/ui/carousel/components/action-back";
import Link from "next/link";
import useCarouselActionShown from "@/components/ui/carousel/hooks/use-carousel-action-shown";

const Carousel = ({ className, ms }: CarouselProps) => {

  const { isActionShown } = useCarouselActionShown()

  const { journals, index, next } = useCarouselContext()
  const { slug, image, title, tags } = journals[index]

  useEffect(() => {
    const timeout = setTimeout(next, ms)
    return () => {
      clearTimeout(timeout)
    }
  }, [ms, next]);


  return (
    <aside className={`${classes.carousel} ${className}`}>
      <div className={classes.image}>
        <Link href={`/journals/${slug}`}>
          <Image src={`/images/logs/${slug}/${image}`} alt={title} fill/>
        </Link>
        {
          isActionShown && (
            <>
              <ActionNext/>
              <ActionBack/>
            </>
          )
        }
      </div>
      <Slider/>
    </aside>
  )
}

export {Carousel}