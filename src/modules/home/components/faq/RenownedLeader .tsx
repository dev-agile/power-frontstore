import Image from "next/image"
import Leader from "../../../../../public/assets/icons/leaders.svg"
import PowerIcon from "../../../../../public/assets/icons/power-peptides.svg"

type ParagraphContent = {
  title: string
  content: string
}

const RenownedLeader: React.FC = () => {
  const renderParagraph = ({ title, content }: ParagraphContent) => (
    <div className="flex flex-col gap-4">
      <p className="font-satoshi text-lg font-bold leading-7 text-black">
        {title}
      </p>
      <p className="font-satoshi text-lg font-normal text-black leading-7">
        {content}
      </p>
    </div>
  )

  return (
    <div className="p-3 w-full xsmall:px-[86px] small:flex-nowrap flex flex-wrap small:gap-32 justify-center">
      <div className="relative min-w-[300px] min-h-[300px] w-2/5">
        <div className="relative w-full h-full">
          <Image src={Leader} alt="Leader" layout="fill" className="rounded-3xl" objectFit="cover" />
        </div>

        <div className="absolute right-[-3%] xsmall:right-[-10%] bottom-[20%]">
          <Image src={PowerIcon} alt="Power Peptides" width={80} height={80} />
        </div>
      </div>

      <div className="small:w-3/5 w-full flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="font-satoshi text-36px font-bold leading-[1.2] text-black">
            Renowned leader in the field of research peptides
          </h2>
          <p className="font-satoshi text-lg font-normal text-black leading-7">
            We uphold a triad of core values: Quality, Service, and Value. These
            principles define our mission to be a secure, convenient, and
            private online source for research peptides manufactured in the
            United States.
          </p>
        </div>
        <div className="flex flex-col gap-7">
          {renderParagraph({
            title: "Global Standards, Local Manufacturing",
            content:
              "Our products are meticulously crafted through collaborations with the most reputable research chemical manufacturing companies worldwide.",
          })}
          {renderParagraph({
            title: "Seamless and Secure Ordering",
            content:
              "Ordering from Power Peptides is a straightforward and secure process. Enjoy the convenience of 24x7 online shopping with complete privacy.",
          })}
          {renderParagraph({
            title: "A Grateful Thank You",
            content:
              "We extend our heartfelt gratitude. Your trust and support empower us to continue facilitating groundbreaking discoveries.",
          })}
        </div>
      </div>
    </div>
  )
}

export default RenownedLeader
