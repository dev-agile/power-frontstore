import React from "react"

import { IconProps } from "types/icon"

const PowerPeptides: React.FC<IconProps> = ({
  size = "16",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Icon_Black">
    <path id="Rectangle 2395" d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="white"/>
    <path id="Icon" d="M21.5104 4.16699L5.625 23.227H19.9219L18.3333 35.9337L34.2188 16.8737H19.9219L21.5104 4.16699Z" fill="#082F49"/>
    </g>
    </svg>
    
  )
}

export default PowerPeptides
