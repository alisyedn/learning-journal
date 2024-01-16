import classes from "./github-link.module.scss";
import Image from "next/image";
import github from "@/assets/github-mark-white.png";

const GithubLink = () => {
  return (
    <div>
      <a className={classes['github-link']}
         target="_blank"
         href="https://github.com/alisyedn/learning-journal"
         rel="noopener noreferrer"
      >
        <Image src={github} alt="Github icon" style={{ width: '1rem', height: 'auto' }} priority={true}/>
        Github site code
      </a>
    </div>
  )
}

export default GithubLink;