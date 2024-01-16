import {useEffect, useState} from "react";

const useCarouselActionShown = () => {

  const [isActionShown, setIsActionShown] = useState(false);

  useEffect(() => {
    const updateMedia = () => {
      if (window.innerWidth > 576) {
        setIsActionShown(true);
      } else {
        setIsActionShown(false);
      }
    }
    updateMedia()
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return {
    isActionShown
  }
}

export default useCarouselActionShown;