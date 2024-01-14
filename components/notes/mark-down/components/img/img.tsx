import classes from "./img.module.css";
import Image from "next/image";
import {ImgProps} from "@/components/notes/mark-down/components/img/types";

//more details: https://amirardalan.com/blog/use-next-image-with-react-markdown
const Img = ({ element, slug }: ImgProps) => {

  const { node } = element

  if (node?.children.length) {
    const image: any = node?.children[0]
    return <WrappedImg slug={slug} image={image}/>
  }

  return <WrappedImg slug={slug} image={node}/>
}

const WrappedImg = ({ slug, image }: { slug: string, image: any }) => {

  const src = image.properties.src
  const alt = image.properties.alt

  const filePath = src.match(`${slug}\/.*`)?.pop()
  const fileName = filePath.split('/').pop()

  return (
      <a target="_blank"
         href={`/images/logs/${filePath}`}
         rel="noopener noreferrer"
         className={classes['image-link']}
      >
        <div className={classes.image}>
          <Image src={`/images/logs/${filePath}`}
                 alt={alt ?? fileName!}
                 fill
          />
        </div>
      </a>
  )
}

export default Img;