import {getFeaturedJournals} from "@/libs/dao/db";
import Carousel from "@/components/ui/carousel";
import {FeaturedJournalsProps} from "@/components/journals/featured-journals/types";

const AsyncFeaturedJournals = async ({className, ms = 5000}: FeaturedJournalsProps) => {

  const featuredJournals = await getFeaturedJournals()

  return (
      <Carousel journals={featuredJournals}
                className={className}
                ms={ms}
      />
  )
}

export {AsyncFeaturedJournals}