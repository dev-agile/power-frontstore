import Image from "next/image"
import Typography from "@modules/layout/components/typography/text"
import heroBannerImage from "../../../../../public/assets/icons/Frame.png"
import { Text } from "@medusajs/ui"
import { Button, Input } from "@nextui-org/react"

const NewsLetter = () => {
  return (
    <>
      <div className="w-full border-b relative lg:p-[84px] lg:pb-[48px] lg:pt-[48px] md:p-[60px] sm:p-8 xsmall:p-6 xxxsmall:p-4 pb-10">
        <Image
          src={heroBannerImage}
          alt="NewsLetter Banner"
          fill
          unoptimized
          priority
          className="!object-cover !absolute -z-10"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <Text className="font-bold text-4xl tarcking-[-0.18px] font-satoshi">
            Sign up for our newsletters of new releases, discounts and more
          </Text>
          <div className="flex gap-2 items-center">
            <div className="flex flex-1 items-center px-3 py-2 bg-white shadow rounded-2xl">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              />
            </div>
            <Button
              type="submit"
              className="px-3 py-6 text-white rounded-xl bg-green"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsLetter
