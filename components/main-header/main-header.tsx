import classes from './main-header.module.css'
import logo from '@/assets/logo.png'
import Link from "next/link";
import Image from "next/image";
import Svg from "@/components/main-header/components/svg";
import NavLink from "@/components/main-header/components/nav-link";
import GithubLink from "@/components/main-header/components/github-link";

const MainHeader = () => {
  return (
    <>
      <Svg/>
        <header className={classes.header}>
          <div className={classes.logo}>
            <Link href='/'>
              <Image src={logo} alt='Site Logo' priority={true}/>
            </Link>
            <div className={classes.title}>
              <Link href='/' className={classes['title-link']}>
                Meta Rag&apos;s Journal
              </Link>
             <GithubLink/>
            </div>
          </div>
          <nav className={classes.nav}>
            <ul>
              <li>
                <NavLink pathname='/notes'>Browse</NavLink>
              </li>
              <li>
                <NavLink pathname='/notes/featured'>Featured</NavLink>
              </li>
              <li>
                <NavLink pathname='/notes/search'>Search</NavLink>
              </li>
            </ul>
          </nav>
        </header>
    </>
  )
}

export default MainHeader