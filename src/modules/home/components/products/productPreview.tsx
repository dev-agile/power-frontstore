import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "./thumbnail"

export default function ProductPreview({ productPreview }: any) {
  return (
    <LocalizedClientLink href={"/"} className="group">
      <div>
        <Thumbnail
          productPreview={productPreview}
          thumbnail={productPreview.thumbnail}
        />
      </div>
    </LocalizedClientLink>
  )
}
