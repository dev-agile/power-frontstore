import React from "react"
import { Image as MedusaImage } from "@medusajs/medusa"
import Image from "next/image"
import Chips from "@modules/common/components/Chip"
import { Card, Button, CardHeader, CardBody } from "@nextui-org/react"
import { Text } from "@medusajs/ui"
import Heart from "@modules/common/icons/heart"
import Cart from "@modules/common/icons/cart"

import PlaceholderImage from "@modules/common/icons/placeholder-image"

type ThumbnailProps = {
  thumbnail?: string | null
  images?: MedusaImage[] | null
  size?: "small" | "medium" | "large" | "full" | "square"
  isFeatured?: boolean
  className?: string
  productPreview: any
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  thumbnail,
  images,
  className,
  productPreview,
}) => {
  const initialImage = thumbnail || images?.[0]?.url

  return (
    <Card className="bg-grey-800 shadow-none xsmall:border">
      <CardHeader className="flex-col items-start p-0 bg-grey-800">
        <div className="relative flex flex-col w-full aspect-square overflow-hidden   rounded-t-xl">
          <Chips title="new" />
          <ImageOrPlaceholder image={initialImage} />
        </div>
      </CardHeader>
      <CardBody className="overflow-visible p-0">
        <div className="flex txt-compact-medium justify-between flex-col gap-2 md:gap-4 xsmall:p-4 pt-2 pr-2">
          <div className="flex flex-col gap-2">
            <div>
              <Text className="text-black font-satoshi text-lg font-bold leading-7">
                {productPreview.title}
              </Text>
              <Text className="text-black font-satoshi text-sm font-medium leading-7">
                {productPreview.subtitle}
              </Text>
            </div>

            <div className="flex gap-2">
              <Text className="text-black font-bold text-2xl">
                <span className="relative top-[-0.55em] text-base">$</span>
                {productPreview.price}
              </Text>
              <Text className="text-gray-500 line-through text-sm font-bold">
                <span className="relative top-[-0.25em]">$</span>89.99
              </Text>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              color="primary"
              className="bg-green text-white pr-4 pl-4 pt-3 pb-3 flex-1 rounded-[10px]  border-0"
              variant="faded"
            >
              <div className="flex gap-2 px-[10px] py-4 items-center justify-center">
                <Cart color="white" />
                <p className="font-bold font-satoshi leading-6 text-white hidden md:inline">
                  Add to cart
                </p>
                <p className="font-bold font-satoshi leading-6 text-white md:hidden">
                  Add
                </p>
              </div>
            </Button>
            <div className="bg p-2 border rounded-[10px]">
              <Heart />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
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
    <div className="w-[90]l h-full flex items-center justify-center">
      <PlaceholderImage />
    </div>
  )
}

export default Thumbnail
