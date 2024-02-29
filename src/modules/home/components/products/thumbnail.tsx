import React from "react"
import { Image as MedusaImage } from "@medusajs/medusa"
import { Container, clx } from "@medusajs/ui"
import Image from "next/image"
import { Badge, Chip } from "@nextui-org/react"
import Chips from "@modules/common/components/Chip"

import PlaceholderImage from "@modules/common/icons/placeholder-image"

type ThumbnailProps = {
  thumbnail?: string | null
  images?: MedusaImage[] | null
  size?: "small" | "medium" | "large" | "full" | "square"
  isFeatured?: boolean
  className?: string
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  thumbnail,
  images,
  className,
}) => {
  const initialImage = thumbnail || images?.[0]?.url

  return (
    <div className="relative xsmall:border-t xsmall:border-r xsmall:border-l flex flex-col w-full aspect-square overflow-hidden p-4 bg-ui-bg-subtle rounded-t-xl">
     
      <Chips title="new" />
     
      <ImageOrPlaceholder image={initialImage} />
    </div>
  )
}

const ImageOrPlaceholder = ({ image }: { image?: string }) => {
  return image ? (
    <div className="relative w-full h-full">
      <Image
        src={image}
        alt="Thumbnail"
        layout="fill"
        objectFit="cover"
        draggable={false}
        quality={50}
      />
    </div>
  ) : (
    <div className="w-full h-full flex items-center justify-center">
      <PlaceholderImage />
    </div>
  )
}

export default Thumbnail
