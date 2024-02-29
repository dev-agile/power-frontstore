import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import Truck from "@modules/common/icons/truck";
import Search from "@modules/common/icons/search"; // Assuming you want to use it somewhere
import CheckBadge from "@modules/common/icons/check-badge";
import ShieldCheck from "@modules/common/icons/ShieldCheck";

const cardData = [
  {
    icon: <Search color="black"/>, 
    title: "Extensive Product Selection",
    content:
      "Power Peptides boasts a vast and diverse range of peptides, catering to the varied needs of our customers. Whether you are a seasoned researcher or a first-time buyer, our extensive product selection ensures that you will find exactly what you need.",
  },
  {
    icon: <CheckBadge color="black"/>,
    title: "Unmatched Quality Assurance",
    content:
      "At Power Peptides, quality is our utmost priority. We source our peptides from reputable manufacturers and conduct rigorous quality assurance checks to guarantee the purity and effectiveness of each product. When you choose Power Peptides, you can trust that you are receiving only the finest peptides available on the market.",
  },
  {
    icon: <ShieldCheck />,
    title: "Secure and Efficient Transactions",
    content:
      "Power Peptides prioritizes the security of your transactions. Our robust payment systems and encryption protocols ensure that your personal and financial information remains confidential and protected throughout the purchasing process.",
  },
];

export default function WhyPowerPeptides() {
  return (
    <div className="p-4 sm:pl-[86px] sm:pr-[86px] flex flex-col gap-12">
      <p className="font-satoshi text-4xl font-bold">
        Why Power Peptides is the best place to buy the product
      </p>
      <div className="flex gap-6 flex-wrap justify-center">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-96 border rounded-lg overflow-hidden p-3 small:flex-1"
          >
            <Card className="border-0 shadow-none">
              <CardBody className="border-0">
                <div className="flex flex-col gap-6">
                  <div className="bg-[#ee843414] p-3 w-11 rounded-xl">
                    {card.icon} {/* Dynamically render the icon */}
                  </div>
                  <p className="text-[28px] font-satoshi font-bold leading-8 tracking-[-0.14px]">
                    {card.title}
                  </p>
                  <p className="text-lg font-normal font-satoshi leading-7 flex-1">
                    {card.content}
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
