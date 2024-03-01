import { Github } from "@medusajs/icons"
import { Heading } from "@medusajs/ui"
import MedicineDetails from "../../../../../public/assets/icons/medicine-details.svg"
import Image from "next/image"
import Typography from "@modules/layout/components/typography/text"
import { Button } from "@nextui-org/react"
import heroBannerImage from "../../../../../public/assets/icons/Frame.png"
import { Text } from "@medusajs/ui"
import Truck from "@modules/common/icons/truck"
import Bolt from "@modules/common/icons/bolt"
import Doller from "@modules/common/icons/currency-dollar"
import CheckBadge from "@modules/common/icons/check-badge"
import React from "react"

type BannerItemProps = {
  children: React.ReactNode
}

const offers = [
  {
    icon: "TruckIcon",
    description: "Free Shipping over $200",
    descriptionIcon: <Truck color="#0A1F33" />,
  },
  {
    icon: "CurrencyIcon",
    description: "30 day money back",
    descriptionIcon: <Truck color="#0A1F33" />,
  },
  {
    icon: "BoltIcon",
    description: "Third party tested",
    descriptionIcon: <Truck color="#0A1F33" />,
  },
  {
    icon: "ThumpsUpIcon",
    description: "Same Day Shipping",
    descriptionIcon: <Truck color="#0A1F33" />,
  },
]
const BannerItem: React.FC<BannerItemProps> = ({ children }) => (
  <Typography>{children}</Typography>
)
const Hero = () => {
  return (
    <>
      <div className="w-full border-b relative lg:p-[84px] lg:pt-12 lg:pb-8 md:p-[60px]  sm:p-8 xsmall:p-6 xxxsmall:p-4">
        <Image
          src={heroBannerImage}
          alt="Hero Banner"
          fill
          unoptimized
          priority
          className="!object-cover !absolute -z-10"
        />
        <div className="flex justify-between flex-wrap xsmall:flex-nowrap gap-12 z-10 lg:pb-8 ">
          <div className="flex flex-col md:gap-16 small:w-1/2 gap-6">
            <div className="flex flex-col md:gap-6 gap-2">
              <Text className="text-black !font-satoshi text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[72px] -tracking-0.18px">
                USA Made Products
              </Text>
              <Typography className="w-full sm:w-3/4 text-xl font-medium leading-[150%] !font-satoshi">
                Buy Highly Purified Melanotan II, CJC-1295, GHRP-2, Hexarelin,
                IGF-1, Sermorelin, TB-500 and more!
              </Typography>
            </div>
            <div>
              <Button className="bg-green-500 text-white  bg-green rounded-xl font-satoshi">
                Buy Peptides
              </Button>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <Image src={MedicineDetails} alt="MedicineDetails" />
          </div>
        </div>
        <div className=" w-full border-t relative mt-8 pt-8 ">
          <div className="grid md:grid-cols-4 grid-cols-2 justify-between gap-6">
            {offers.map((offer, index) => (
              <div key={offer.description} className="flex flex-wrap ">
                <div className="flex gap-2 items-center font-medium text-lg  font-satoshi">
                  {offer.descriptionIcon}
                  <BannerItem>{offer.description}</BannerItem>
                              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
