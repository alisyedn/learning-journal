import classes from './main-header.module.css'
import logo from '@/assets/logo.png'
import Link from "next/link";
import Image from "next/image";
import Content from "@/components/ui/content";
import Svg from "@/components/main-header/components/svg";
import NavLink from "@/components/main-header/components/nav-link";

const MainHeader = () => {
  return (
    <>
      <Svg/>
      <Content>
        <header className={classes.header}>
          <Link href='/' className={classes.logo}>
            <Image src={logo} alt='Site Logo' priority={true}/>
            Meta Rag&apos;s Journal
          </Link>
          <nav className={classes.nav}>
            <ul>
              <li>
                <NavLink pathname='/notes'>Browse Notes</NavLink>
              </li>
              <li>
                <NavLink pathname='/notes/featured'>Featured Notes</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </Content>
    </>
  )
}

export default MainHeader