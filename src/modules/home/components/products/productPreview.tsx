import { Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "./thumbnail"
import { Button } from "@nextui-org/react"
import Cart from "@modules/common/icons/cart"
import Heart from "@modules/common/icons/heart"

export default function ProductPreview({
  productPreview,
}: any) {
  return (
    <LocalizedClientLink href={"/"} className="group">
      <div>
        <Thumbnail thumbnail={productPreview.thumbnail} />

        <div className="flex txt-compact-medium justify-between flex-col gap-2 md:gap-4 xsmall:p-4 pt-2 xsmall:border-b xsmall:border-r xsmall:border-l rounded-b-xl">
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
      </div>
    </LocalizedClientLink>
  )
}
