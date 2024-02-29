import React from "react"
import Eye from "@modules/common/icons/eye"
import BoltIcon from "../../../../../public/assets/icons/bolt.svg"
import CurrencyIcon from "../../../../../public/assets/icons/currency-dollar.svg"
import TruckIcon from "../../../../../public/assets/icons/truck.svg"
import ThumpsUpIcon from "../../../../../public/assets/icons/hand-thumb-up.svg"
import Image from "next/image"

type BannerItemProps = {
  children: React.ReactNode
}

const BannerItem: React.FC<BannerItemProps> = ({ children }) => (
  <p>{children}</p>
)

const Banner: React.FC = () => {
  const offers = [
    { icon: TruckIcon, description: "Free Shipping on orders over $200" },
    { icon: CurrencyIcon, description: "Extra savings on selected products" },
    { icon: BoltIcon, description: "Same Day Shipping" },
    { icon: ThumpsUpIcon, description: "Independently Tested" },
  ]

  return (
    <div className="sticky top-0 inset-x-0 z-50">
      <div className="flex pt-2 pb-2 pl-6 pr-6 bg-[#036] text-white justify-center gap-4 sm:gap-8 md:pl-[87px] md:pr-[87px] md:justify-between">
        {offers.map((offer, index) => (
          <div
            key={offer.description}
            className={`${
              index === 0 ? "flex" : "hidden"
            } sm:flex items-center justify-center`}
          >
            <div className="flex gap-2 items-center justify-center font-satoshi text-sm font-bold leading-normal">
              <Image src={offer.icon} alt={offer.description} />
              <BannerItem>{offer.description}</BannerItem>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Banner
