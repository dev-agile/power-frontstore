import React from "react"
import { Chip } from "@nextui-org/react"
import Star from "@modules/common/icons/star"

 type detials ={
    title:string;
    
}

const Chips = ({title}: detials) => {
  return (
    <div className="absolute top-0 left-0 z-10 w-full px-4 py-1 flex justify-between mt-2 capitalize">
      <Chip color="warning" size="sm" className={`text-white bg-yellow`}>
       {title}
      </Chip>
     <div className="p-1 md:pr-4 md:pl-3 bg-white rounded-full flex md:gap-2 items-center gap-1">
     <Star/>
     <p className="font-semibold text-sm leading-5 font-satoshi">4.5</p>
     </div>
  
      
      
    </div>
  )
}

export default Chips
