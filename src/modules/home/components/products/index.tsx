"use client"
import { getProductsListWithSort } from "@lib/data"
import ProductPreview from "./productPreview"
import { Text } from "@medusajs/ui"
import { Button } from "@nextui-org/react"

type Product = {
  title: string
}

export default function PaginatedProducts({ title }: Product) {
  const products = [
    {
      id: 1,
      thumbnail:
        "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-front.png",

      title: "YK11 – Powder, 1g",
      subtitle: "Metabolics",
      price: "71.99",
    },
    {
      id: 2,
      thumbnail:
        "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-front.png",

      title: "YK11 – Powder, 1g",
      subtitle: "Metabolics",
      price: "71.99",
    },
    {
      id: 3,
      thumbnail:
        "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-front.png",

      title: "YK11 – Powder, 1g",
      subtitle: "Metabolics",
      price: "71.99",
    },
    {
      id: 4,
      thumbnail:
        "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-front.png",

      title: "YK11 – Powder, 1g",
      subtitle: "Metabolics",
      price: "71.99",
    },
    {
      id: 5,
      thumbnail:
        "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-front.png",

      title: "YK11 – Powder, 1g",
      subtitle: "Metabolics",
      price: "71.99",
    },
    {
      id: 6,
      thumbnail:
        "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-front.png",

      title: "YK11 – Powder, 1g",
      subtitle: "Metabolics",
      price: "71.99",
    },
    {
      id: 7,
      thumbnail:
        "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-front.png",

      title: "YK11 – Powder, 1g",
      subtitle: "Metabolics",
      price: "71.99",
    },
    {
      id: 8,
      thumbnail:
        "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-front.png",

      title: "YK11 – Powder, 1g",
      subtitle: "Metabolics",
      price: "71.99",
    },
  ]
  return (
    <div className="p-3 xsmall:pl-[86px] xsmall:pr-[86px] xsmall:flex-nowrap font-satoshi flex flex-col flex-wrap gap-12">
      <div className="flex gap-6 items-center">
        <Text className="text-black text-4xl font-bold leading-[43.3px] tracking-tight font-satoshi tarcking-[-0.18px]">
          {title}
        </Text>

        <Button className="hidden sm:flex bg-white text-black border-black border-[1px] px-6 py-[10px] rounded-[10px] font-bold text-base font-satoshi">
          View All
        </Button>
      </div>
      <ul className="grid grid-cols-2 w-full small:grid-cols-3 medium:grid-cols-4 gap-y-10 gap-x-4">
        {products?.map((p) => {
          return (
            <li key={p.id}>
              <ProductPreview productPreview={p} />
            </li>
          )
        })}
      </ul>
      <Button className="sm:hidden bg-white text-black border-black border-[1px] px-6 py-[10px] font-bold text-base font-satoshi rounded-[10px]">
        View All
      </Button>
    </div>
  )
}
