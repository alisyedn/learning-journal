'use client'

import Link from "next/link";
import {PropsWithChildren} from "react";
import {NavLinkProps} from "@/components/main-header/components/nav-link/types";
import classes from './nav-link.module.scss'
import useNavLinkSelected from "@/components/main-header/hooks/use-nav-link-selected";

const NavLink = ({ pathname, children }: PropsWithChildren<NavLinkProps>) => {

  const isSelected = useNavLinkSelected({ pathname })
  return (
    <Link href={pathname} className={`${classes.link} ${isSelected ? classes.active : ''}`}>
      {children}
    </Link>
  )
}

export default NavLink;