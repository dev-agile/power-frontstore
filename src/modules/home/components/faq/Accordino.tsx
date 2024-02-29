"use client"

import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import Accordion from "@modules/products/components/product-tabs/accordion"

const ProductTabs = () => {
  const tabs = [
    {
      label: "Is Ostarine Illegal to Purchase?",
      component: <ShippingInfoTab />,
    },
    {
      label: "Does Ostarine Shut Down Testosterone Production?",
      component: <ShippingInfoTab />,
    },
    {
      label: "Where to buy?",
      component: <ShippingInfoTab />,
    },
  ]

  return (
    <Accordion type="multiple">
      {tabs.map((tab, i) => (
        <Accordion.Item
          key={i}
          title={tab.label}
          headingSize="medium"
          value={tab.label}
        >
          {tab.component}
        </Accordion.Item>
      ))}
    </Accordion>
  )
}

const ShippingInfoTab = () => {
  return (
    <div className="bg-[#FAFBFB] rounded-b-lg p-6">
      <p>
        In a double-blind placebo-controlled trial, there were no statistically
        significant differences in free testosterone levels in Ostarine groups
        relative to placebo.
      </p>
    </div>
  )
}

export default ProductTabs
