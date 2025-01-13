"use client";
import XaxisNegative from "@/components/animation/XaxisNegative";
import XaxisPositive from "@/components/animation/XaxisPositive";
import ImageComp from "@/components/ImageComp";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import bannerImg from "../../../public/images/hero-image.webp";



export default function HeroSections() {
  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
  };
  return (
    <>
      <ImageComp
        imageUrl={`/images/BannerBgGrRight.png`}
        classes="absolute right-0 -z-10 top-0"
        width={685}
        height={980}
      />

      <ImageComp
        imageUrl={`/images/BannerAdd.png`}
        classes="absolute left-[134px] top-[234px] -z-[1] hidden md:block"
        width={23}
        height={23}
      />

      <ImageComp
        imageUrl={`/images/BannerRightStar.png`}
        classes="absolute right-[134px] top-[203px] -z-[1] hidden md:block"
        width={48}
        height={52}
      />

      <ImageComp
        imageUrl={`/images/BannerArrow.png`}
        classes="absolute right-0 top-[338px] -z-[1] hidden md:block"
        width={134}
        height={37}
      />

      <ImageComp
        imageUrl={`/images/Ellipse29.png`}
        classes="absolute left-0 -z-10"
        width={656}
        height={1324}
      />

      <ImageComp
        imageUrl={`/images/LeftStarTop.png`}
        classes="absolute left-0 -z-10 top-[274px]"
        width={221}
        height={249}
      />
      <div className="py-[48px] container">
        <div className="max-w-lg space-y-3 mx-auto text-center">
          <XaxisPositive classes="text-[32px] text-[#152536] font-semibold leading-[48px]">
            <h3>Welcome to Care2 Training</h3>
          </XaxisPositive>
          <XaxisPositive classes="text-[#6C757D] leading-[24px]">
            <p>
              Your Trusted Partner for Student Visas, Work Abroad, and Study
              Abroad Solutions
            </p>
          </XaxisPositive>
          <XaxisNegative classes="flex items-center gap-2 pt-3 justify-center">
            <Link
              href={""}
              target="_blank"
            >
              <button className="bg-gradient-to-r from-[#0D1A73] to-[#45D8FF] w-[167px] min-w-[167px] h-[40px]   rounded-[4px]">
                <span className="text-white text-sm leading-7 tracking-[1.25%]">
                  Sign up now
                </span>
              </button>
            </Link>
            <Link href={"/contact"}>
              <button className="group hover:bg-gradient-to-r from-[#0D1A73] to-[#45D8FF] w-[130px] min-w-[130px] h-[40px] border-gradient rounded-[4px]">
                <span className="text-gradient group-hover:text-white text-sm leading-7 tracking-[1.25%]">
                  Contact us
                </span>
              </button>
            </Link>
          </XaxisNegative>
        </div>
      </div>
      <div className="container pt-[48px]">
        <div className="relative">
          <XaxisNegative classes="mx-[10px] sm:mx-[35px] rounded-[12px] overflow-hidden">
            <div>
              <Image
                className="w-full rounded-[12px]  h-auto max-h-[578px] object-cover object-center"
                src={bannerImg}
                alt="BannerImage"
                width={971}
                height={578}
                priority
              />
            </div>
          </XaxisNegative>
          <XaxisPositive classes="absolute  inset-0 top-1/3 -z-10 h-[140px] sm:h-[242px] rounded-[28px] bg-gradient-to-r from-[#45D8FF] to-[#0D1A73]"></XaxisPositive>
        </div>
      </div>
    </>
  );
}
