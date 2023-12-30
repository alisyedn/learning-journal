import {getFeaturedJournals} from "@/libs/dao/db";
import Carousel from "@/components/ui/carousel";

const AsyncFeaturedJournals = async () => {

  const featuredJournals = await getFeaturedJournals()

  return (
      <Carousel journals={featuredJournals}
                styles={{ height: '20rem', width: '50%' }}
                ms={5000}
      />
  )
}

export {AsyncFeaturedJournals}