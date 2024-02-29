// pages/index.js
import Head from "next/head"
import ProductTabs from "./Accordino"
import Typography from "@modules/layout/components/typography/text"
import WhyPowerPertides from "./WhyPowerPeptides"
import RenownedLeader from "./RenownedLeader "
import PaginatedProducts from "../products"
import NewsLetter from "./newsLetter"
import { Button } from "@nextui-org/react"

export default function Question() {
  return (
    <div className="flex small:gap-[120px] flex-col">
      <PaginatedProducts title="Best Sellers" />
      <PaginatedProducts title="New Arrivals" />
      <WhyPowerPertides />
      <div className="p-3 xsmall:pl-[86px] xsmall:pr-[86px] xsmall:flex-nowrap flex flex-wrap gap-16 ">
        <div className="flex flex-col gap-12 xsmall:w-30 w-full">
          <div className="flex flex-col gap-4">
            <Typography className="text-4xl font-satoshi font-bold leading-10">
              FAQ
            </Typography>
            <p>
              Still have a question? Should you have any questions or require
              assistance, please visit our FAQ page for more detailed info.
            </p>
          </div>
          <div>
            <Button className="bg-white border-[1px] border-black pt-[10px] pb-[10px] pl-4 pr-4 font-satoshi font-semibold text-base">
              View all question
            </Button>
          </div>
        </div>
        <div className="w-full">
          <ProductTabs />
        </div>
      </div>
      <RenownedLeader />
      <NewsLetter />
    </div>
  )
}
