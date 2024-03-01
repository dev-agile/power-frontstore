import React from "react"

interface TypographyProps {
  className?: string
  children: React.ReactNode
}

const Typography: React.FC<TypographyProps> = ({
  className = "",
  children,
}) => {
  const combinedClassNames = `${className}`.trim()

  return <p className={combinedClassNames}>{children}</p>
}

export default Typography
