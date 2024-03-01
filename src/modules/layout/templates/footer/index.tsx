import { Text, clx } from "@medusajs/ui"

import { getCategoriesList, getCollectionsList } from "@lib/data"
import QualityIcon from "../../../../../public/assets/icons/quality.svg"
import LabTestestIcon from "../../../../../public/assets/icons/lab-tested.svg"
import Image from "next/image"
import FacebookIcon from "../../../../../public/assets/icons/facebook.svg"
import TwitterIcon from "../../../../../public/assets/icons/twitter.svg"
import Instagram from "../../../../../public/assets/icons/Group.svg"
import Visa from "../../../../../public/assets/icons/Visa.svg"
import MasterCard from "../../../../../public/assets/icons/Mastercard.svg"
import MasterCardDoller from "../../../../../public/assets/icons/Mastercard-$.svg"
import MasterCardBitcoin from "../../../../../public/assets/icons/Mastercard-bitcoin.svg"
import MasterCardEcheck from "../../../../../public/assets/icons/Mastercard-echeck.svg"
import MasterCardEtherium from "../../../../../public/assets/icons/Mastercard-ethirium.svg"
import MaterCardT from "../../../../../public/assets/icons/Mastercard-t.svg"
import MasterV from "../../../../../public/assets/icons/Mastercard-v.svg"
import type { StaticImageData } from "next/image"
import PowerPeptides from "@modules/common/icons/powerPeptides"

interface IconProps {
  name: StaticImageData | string
  alt: string
}

const fetchCollections = async () => {
  const { collections } = await getCollectionsList()
  return collections
}

const fetchCategories = async () => {
  const { product_categories } = await getCategoriesList()
  return product_categories
}

const paymentIcons = [
  Visa,
  MasterCard,
  MasterCardBitcoin,
  MasterCardEtherium,
  MaterCardT,
  MasterV,
  MasterCardDoller,
  MasterCardEcheck,
]
const policies = [
  "Shipping & returns",
  "Return process",
  "Terms & conditions",
  "Privacy & security",
]
const companyInfo = ["About", "FAQ", "Quality control", "Approval program"]
const informationItems = [
  "Buy Peptides",
  "Peptide Specials",
  "Peptide Blog",
  "Peptide Information",
  "Our Company",
]
const supportItems = ["Pricing", "Documentation", "Guides", "Track my order"]

const Icon: React.FC<IconProps> = ({ name, alt }) => (
  <Image src={name} alt={alt} />
)
export default async function Footer() {
  const productCollections = await fetchCollections().then(
    (collections) => collections
  )
  const productCategories = await fetchCategories().then(
    (categories) => categories
  )
  return (
    <footer className="bg-[#036] text-white">
      <div className="pt-[96px] pb-[48px] xsmall:pl-[84px] xsmall:pr-[84px] pr-3 pl-3">
        <div className="flex flex-col flex-wrap md:flex-row justify-between mb-12 gap-12  relative">
          <div className="flex gap-6 flex-col text-white font-satoshi text-lg font-bold leading-7">
            <PowerPeptides />
            <Text className="text-white font-satoshi text-lg font-bold leading-7">
              Contact us
            </Text>
            <Text className="font-satoshi">(664) 369-8726</Text>
            <div className="flex gap-5">
              <Image src={FacebookIcon} alt="Facebook icon" />
              <Image src={TwitterIcon} alt="Twitter icon" />
              <Image src={Instagram} alt="Instagram icon" />
            </div>
          </div>
          <div className="flex gap-8 flex-wrap small:flex-nowrap xsmall:justify-center flex-1 xsmall:mr-20 ">
            <div className="flex justify-between gap-10">
              <div className="flex gap-4 flex-col w-1/2 xsmall:w-40 ">
                <p className="text-white font-satoshi text-lg font-bold leading-7">
                  Information
                </p>
                {informationItems.map((item) => (
                  <p
                    key={item}
                    className="text-white font-satoshi text-base font-medium leading-6 no-ligatures"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div className="flex gap-4 flex-col w-1/2 xsmall:w-40 ">
                <p className="text-white font-satoshi text-lg font-bold leading-7">
                  Support
                </p>
                {supportItems.map((item) => (
                  <p
                    key={item}
                    className="text-white font-satoshi text-base font-medium leading-6 no-ligatures"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className=" flex justify-between gap-10">
              <div className="flex gap-4 flex-col w-1/2 xsmall:w-40 ">
                <p className="text-white font-satoshi text-lg font-bold leading-7">
                  Information
                </p>
                {informationItems.map((item) => (
                  <p
                    key={item}
                    className="text-white font-satoshi text-base font-medium leading-6 no-ligatures"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div className="flex gap-4 flex-col w-1/2 xsmall:w-40 ">
                <p className="text-white font-satoshi text-lg font-bold leading-7">
                  Support
                </p>
                {supportItems.map((item) => (
                  <p
                    key={item}
                    className="text-white font-satoshi text-base font-medium leading-6 no-ligatures"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-4 absolute right-0 top-0">
              <Image
                src={LabTestestIcon}
                alt="lab tested verified icon"
                className="h-16 w-16"
              />
              <Image
                src={QualityIcon}
                alt="Quality icon"
                className="h-16 w-16"
              />
            </div>
          </div>
        </div>

        <div className="border-[#FFFFFF33] border-t-[1px] flex flex-col gap-6 pt-12 pb-12 ">
          <Text className="text-base font-medium font-satoshi text-[#90a5bc]">
            All products on this site are for Research, Development use only.
            Products are Not for Human consumption of any kind. The statements
            made within this website have not been evaluated by the US Food and
            Drug Administration. The statements and the products of this company
            are not intended to diagnose, treat, cure or prevent any disease.{" "}
          </Text>
          <Text className="text-base font-medium font-satoshi text-[#90a5bc]">
            I understand the statements on this site regarding Powerpeptides
            products have not been evaluated by the Food and Drug
            Administration. These products are not intended to diagnose, treat,
            cure or prevent any disease. Results from products may vary.
            <br /> The 2018 Farm Bill was signed into law in December 2018,
            effectively legalizing hemp at the federal level by removing it from
            the federal list of controlled substances and classifying it as an
            agricultural commodity.
          </Text>
        </div>

        <div className="border-[#FFFFFF33] border-t-[1px] flex justify-between flex-wrap pt-6 gap-2 xsmall:flex-row flex-col-reverse">
          <Text className="text-base font-medium font-satoshi text-white">
            2024, Powerpeptides. All Rights Reserved
          </Text>
          <div className="flex gap-1 flex-wrap">
            {paymentIcons.map((icon) => (
              <Icon key={icon} name={icon} alt={icon} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
