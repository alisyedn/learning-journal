import classes from "./img.module.css";
import Image from "next/image";
import {ImgProps} from "@/components/notes/mark-down/components/img/types";

const Img = ({ element, slug }: ImgProps) => {

  const { node } = element

  if (node?.children.length) {
    const image: any = node?.children[0]
    return <WrappedImg slug={slug} image={image} />
  }

  return <WrappedImg slug={slug} image={node} />
}

const WrappedImg = ({ slug, image }: { slug: string, image: any }) => {

  const src = image.properties.src
  const alt = image.properties.alt

  const filePath = src.match(`${slug}\/.*`)?.pop()
  const fileName = filePath.split('/').pop()

  return (
    <div className={classes.image}>
      <a target="_blank"
         href={`/images/logs/${filePath}`}
         rel="noopener noreferrer"
      >
        <Image src={`/images/logs/${filePath}`}
               alt={alt ?? fileName!}
               width={800}
               height={400}
        />
      </a>
    </div>
  )
}

export default Img;