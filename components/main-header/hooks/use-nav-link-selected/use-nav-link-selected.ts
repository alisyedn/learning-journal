import {UseNavLinkSelectedProps} from "@/components/main-header/hooks/use-nav-link-selected/types";
import {usePathname} from "next/navigation";

import {useMemo} from "react";

const useNavLinkSelected = ({ pathname: lookupPath }: UseNavLinkSelectedProps) => {
  const pathname = usePathname()
  return useMemo(() => pathname === lookupPath, [lookupPath, pathname])
}

export default useNavLinkSelected
