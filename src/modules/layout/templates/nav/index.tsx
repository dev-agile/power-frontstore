import { headers } from "next/headers"
import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import LogIn from "../../../../../public/assets/icons/log-in.svg"
import ShoppingCart from "../../../../../public/assets/icons/shopping-cart.svg"
import Image from "next/image"
import SearchIcon from "../../../../../public/assets/icons/magnifying-glass.svg"
import Logo from "@modules/common/icons/logo"
import User from "@modules/common/icons/user"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular gap-16 xsmall:pl-[87px] p-4 xsmall:pr-[87px] xxsmall:pr-4 xxsmall:pl-4 pb-4 pt-4">
          <div className="flex gap-12 justify-center items-center">
            <Logo />

            <div className="hidden small:flex items-center gap-8 h-full justify-end">
              <div className="items-center gap-x-6 h-full">
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2 font-satoshi text-base text-black font-medium"
                  href="/category"
                  scroll={false}
                >
                  Category
                </LocalizedClientLink>
              </div>

              <div>
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2 font-satoshi text-base text-black font-medium"
                  href="/blog"
                >
                  Blog
                </LocalizedClientLink>
              </div>
              <div>
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2 font-satoshi text-base text-black font-medium"
                  href="/contact"
                >
                  Contact
                </LocalizedClientLink>
              </div>
              <div>
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2 font-satoshi text-base text-black font-medium"
                  href="/why-us"
                >
                  Why Us
                </LocalizedClientLink>
              </div>
            </div>
          </div>

          <div className=" hidden small:flex flex-1 items-center h-full">
            <LocalizedClientLink
              href="/"
              className="flex flex-1 py-[10px] px-4 items-center border rounded-[10px] gap-2 font-medium bg-white-100"
            >
              <Image
                src={SearchIcon}
                alt="Search Icon"
                width={24}
                height={24}
                className=" max-w-6"
              />
              <input
                type="text"
                placeholder="Search"
                className="flex-1  bg-transparent outline-none font-satoshi text-base font-normal text-gray-400"
              />
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-6">
            <LocalizedClientLink
              href="/log-in"
              className="hover:text-ui-fg-base flex gap-2 font-satoshi text-base text-black font-medium"
            >
              <User/>
              <p className="hidden small:flex "> Log in</p>
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/cart"
              className="hover:text-ui-fg-base flex gap-2 font-satoshi text-base text-black font-medium"
            >
              <Image src={ShoppingCart} alt="My Cart" width={24} height={24} />
              <p className="hidden small:flex "> My Cart</p>
            </LocalizedClientLink>
            <div className="flex items-center h-full small:hidden">
              <SideMenu regions={regions} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
