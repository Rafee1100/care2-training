"use client";
import ImageComp from "@/components/ImageComp";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathName = usePathname();

  return (
    <Disclosure as="nav" className=" bg-transparent">
      {({ open }) => (
        <>
          <div className="container">
            <div className="flex h-[76px] justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Link href={"/"}>
                    <ImageComp
                      imageUrl={`/images/logo-Care2.webp`}
                      classes="block h-7 w-auto lg:hidden"
                      width={113}
                      height={28}
                    />
                  </Link>

                  <Link href={"/"}>
                    <ImageComp
                      imageUrl={`/images/logo-Care2.webp`}
                      classes="hidden h-7 w-auto lg:block"
                      width={113}
                      height={28}
                    />
                  </Link>
                </div>
              </div>
              <div className="hidden lg:flex lg:gap-x-4">
                <Link
                  href="/"
                  className="text-[#6C757D] hover:text-gradient inline-flex items-center px-1 pt-1 text-sm leading-[28px] "
                >
                  <span className={`${pathName == "/" ? "text-gradient" : ""}`}>
                    Home
                  </span>
                </Link>
                <Link
                  href="/about-us"
                  className="text-[#6C757D] hover:text-gradient inline-flex items-center px-1 pt-1 text-sm leading-[28px]"
                >
                  <span
                    className={`${
                      pathName == "/about-us" ? "text-gradient" : ""
                    }`}
                  >
                    About Us
                  </span>
                </Link>
                <Link
                  href="/professional-services"
                  className="text-[#6C757D] inline-flex items-center hover:text-gradient px-1 pt-1 text-sm leading-[28px]"
                >
                  <span
                    className={`${
                      pathName == "/professional-services"
                        ? "text-gradient"
                        : ""
                    }`}
                  >
                    Our Services
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="text-[#6C757D] hover:text-gradient inline-flex items-center px-1 pt-1 text-sm leading-[28px]"
                >
                  <span
                    className={`${
                      pathName == "/contact" ? "text-gradient" : ""
                    }`}
                  >
                    Contact us
                  </span>
                </Link>
              </div>
              <div className="hidden  lg:flex items-center gap-2">
                <a
                  href=""
                  target="_blank"
                >
                  <button className="group hover:bg-gradient-to-r from-[#005BEA] to-[#45D8FF] w-[104px] min-w-[104px] h-[34px] border-gradient rounded-[4px]">
                    <span className="text-gradient group-hover:text-white text-sm leading-7 tracking-[1.25%]">
                      Log in
                    </span>
                  </button>
                </a>
                <a
                  href=""
                  target="_blank"
                >
                  <button className="bg-gradient-to-r from-[#005BEA] to-[#45D8FF] w-[104px] min-w-[104px] h-[34px]   rounded-[4px]">
                    <span className="text-white text-sm leading-7 tracking-[1.25%]">
                      Sign up
                    </span>
                  </button>
                </a>
              </div>
              <div className="-mr-2 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden bg-white fixed top-0 inset-0 z-50 ">
            <div className="flex justify-between items-center px-4 h-[76px]">
              <ImageComp
                imageUrl={`/images/logo-Care2.webp`}
                classes="block h-7 w-auto"
                width={113}
                height={28}
              />
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <X className="block h-6 w-6" aria-hidden="true" />
              </Disclosure.Button>
            </div>
            <div className="max-h-[calc(100vh_-_100px)] overflow-y-auto">
              <div className="space-y-1 pb-3 pt-2">
                <Link
                  href="/"
                  className="text-[#6C757D] block items-center px-1 pt-1 text-sm leading-[28px] "
                >
                  <Disclosure.Button className="block py-2 pl-3 pr-4 text-sm text-[#6C757D]">
                    <span
                      className={`${
                        pathName == "/" ? "text-gradient" : "text-[#6C757D]"
                      }`}
                    >
                      Home
                    </span>
                  </Disclosure.Button>
                </Link>

                <Link
                  href="/about-us"
                  className="text-[#6C757D] block items-center px-1 pt-1 text-sm leading-[28px]"
                >
                  <Disclosure.Button className="block py-2 pl-3 pr-4 text-sm text-[#6C757D]">
                    <span
                      className={`${
                        pathName == "/about-us"
                          ? "text-gradient"
                          : "text-[#6C757D]"
                      }`}
                    >
                      About Us
                    </span>
                  </Disclosure.Button>
                </Link>
              </div>
              <div className="space-y-1 pb-3 pt-2">
                <Link
                  href="/professional-services"
                  className="text-[#6C757D] block items-center px-1 pt-1 text-sm leading-[28px]"
                >
                  <Disclosure.Button className="block py-2 pl-3 pr-4 text-sm text-[#6C757D]">
                    <span
                      className={`${
                        pathName == "/professional-services"
                          ? "text-gradient"
                          : "text-[#6C757D]"
                      }`}
                    >
                      Our Services
                    </span>
                  </Disclosure.Button>
                </Link>
                <div className="flex items-center gap-2 pl-3.5 pt-2">
                  <a
                    href=""
                    target="_blank"
                  >
                    <button className="group hover:bg-gradient-to-r from-[#005BEA] to-[#45D8FF] w-[104px] min-w-[104px] h-[34px] border-gradient rounded-[4px]">
                      <span className="text-gradient hover:text-white text-sm leading-7 tracking-[1.25%]">
                        Log in
                      </span>
                    </button>
                  </a>
                  <a
                    href=""
                    target="_blank"
                  >
                    <button className="bg-gradient-to-r from-[#005BEA] to-[#45D8FF] w-[104px] min-w-[104px] h-[34px]   rounded-[4px]">
                      <span className="text-white text-sm leading-7 tracking-[1.25%]">
                        Sign up
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
