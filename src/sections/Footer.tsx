"use client";

import ImageComp from "@/components/ImageComp";
import XaxisNegative from "@/components/animation/XaxisNegative";
import XaxisPositive from "@/components/animation/XaxisPositive";
import YaxisNegative from "@/components/animation/YaxisNegative";
import Link from "next/link";

const navigation = {
  rules: [
    { name: "Privacy Policy", href: "/#" },
    { name: "Terms of Conditions", href: "/#" },
  ],
  services: [
    {
      name: "Student Visa Assistance",
      href: "/#",
    },
    {
      name: "Work Abroad Opportunities",
      href: "/#",
    },
    {
      name: "Living Abroad Consultancy",
      href: "/#",
    },
  ],

  contacts: [
    {
      email: "contact@care2training.com",
      subject:
        "I found Care2 a helpful consultancy firm. Can I learn more about your services?",
    },
    {
      email: "support@care2training.com",
      subject: "Is anyone available to support me?",
    },
  ],
  social: [
    {
      name: "Facebook",
      href: "",
      icon: (props: any) => (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.166 10.9729C21.166 5.13843 16.465 0.408691 10.666 0.408691C4.86702 0.408691 0.166016 5.13843 0.166016 10.9729C0.166016 16.2457 4.00569 20.6162 9.02539 21.4087V14.0266H6.35938V10.9729H9.02539V8.64544C9.02539 5.9978 10.593 4.53532 12.9914 4.53532C14.1398 4.53532 15.3418 4.74165 15.3418 4.74165V7.34143H14.0178C12.7135 7.34143 12.3066 8.15582 12.3066 8.99208V10.9729H15.2188L14.7532 14.0266H12.3066V21.4087C17.3263 20.6162 21.166 16.2457 21.166 10.9729Z"
            fill="#0C63D4"
          />
        </svg>
      ),
    },
    {
      name: "Github",
      href: "",
      icon: (props: any) => (
        <svg
          width="22"
          height="21"
          viewBox="0 0 22 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.666 0.408691C4.86477 0.408691 0.166016 5.10744 0.166016 10.9087C0.166016 15.5549 3.17164 19.4793 7.34539 20.8706C7.87039 20.9624 8.06727 20.6474 8.06727 20.3718C8.06727 20.1224 8.05414 19.2956 8.05414 18.4162C5.41602 18.9018 4.73352 17.7731 4.52352 17.1824C4.40539 16.8806 3.89352 15.9487 3.44727 15.6993C3.07977 15.5024 2.55477 15.0168 3.43414 15.0037C4.26102 14.9906 4.85164 15.7649 5.04852 16.0799C5.99352 17.6681 7.50289 17.2218 8.10664 16.9462C8.19852 16.2637 8.47414 15.8043 8.77602 15.5418C6.43977 15.2793 3.99852 14.3737 3.99852 10.3574C3.99852 9.21557 4.40539 8.27057 5.07477 7.53557C4.96977 7.27307 4.60227 6.19682 5.17977 4.75307C5.17977 4.75307 6.05914 4.47744 8.06727 5.82932C8.90727 5.59307 9.79977 5.47494 10.6923 5.47494C11.5848 5.47494 12.4773 5.59307 13.3173 5.82932C15.3254 4.46432 16.2048 4.75307 16.2048 4.75307C16.7823 6.19682 16.4148 7.27307 16.3098 7.53557C16.9791 8.27057 17.386 9.20244 17.386 10.3574C17.386 14.3868 14.9316 15.2793 12.5954 15.5418C12.976 15.8699 13.3041 16.4999 13.3041 17.4843C13.3041 18.8887 13.291 20.0174 13.291 20.3718C13.291 20.6474 13.4879 20.9756 14.0129 20.8706C16.0973 20.1669 17.9086 18.8272 19.1918 17.0402C20.475 15.2532 21.1655 13.1087 21.166 10.9087C21.166 5.10744 16.4673 0.408691 10.666 0.408691Z"
            fill="black"
          />
        </svg>
      ),
    },
    {
      name: "Linkedin",
      href: "",
      icon: (props: any) => (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2.16602"
            y="2.40869"
            width="21"
            height="21"
            rx="10.5"
            fill="#1275B1"
          />
          <path
            d="M10.1299 8.1778C10.1299 8.87871 9.5224 9.44691 8.77297 9.44691C8.02355 9.44691 7.41602 8.87871 7.41602 8.1778C7.41602 7.47689 8.02355 6.90869 8.77297 6.90869C9.5224 6.90869 10.1299 7.47689 10.1299 8.1778Z"
            fill="white"
          />
          <path
            d="M7.60158 10.3798H9.92117V17.4087H7.60158V10.3798Z"
            fill="white"
          />
          <path
            d="M13.6557 10.3798H11.3361V17.4087H13.6557C13.6557 17.4087 13.6557 15.1959 13.6557 13.8123C13.6557 12.9819 13.9393 12.1478 15.0707 12.1478C16.3493 12.1478 16.3416 13.2346 16.3356 14.0765C16.3278 15.177 16.3464 16.3001 16.3464 17.4087H18.666V13.699C18.6464 11.3302 18.0291 10.2388 15.9985 10.2388C14.7926 10.2388 14.045 10.7862 13.6557 11.2816V10.3798Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "",
      icon: (props: any) => (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="w-[26px] h-[26px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8085 27C21.372 27 27.1513 18.5351 27.1513 11.1965C27.1513 10.9586 27.1459 10.7153 27.1349 10.4773C28.2592 9.69112 29.2294 8.71728 30 7.60158C28.9529 8.05206 27.8412 8.34626 26.7029 8.47414C27.9015 7.77939 28.799 6.68796 29.2289 5.40219C28.1013 6.04839 26.8682 6.50423 25.5823 6.75017C24.716 5.85999 23.5705 5.27059 22.323 5.07309C21.0754 4.87558 19.7954 5.08098 18.6807 5.65753C17.566 6.23407 16.6788 7.14965 16.1562 8.2627C15.6335 9.37575 15.5047 10.6243 15.7895 11.8153C13.5062 11.7045 11.2726 11.1309 9.23331 10.1318C7.19403 9.13272 5.39464 7.73035 3.9518 6.01563C3.21847 7.23825 2.99407 8.68501 3.3242 10.0619C3.65434 11.4387 4.51424 12.6424 5.72914 13.4282C4.81707 13.4002 3.92497 13.1627 3.12656 12.7354V12.8042C3.12575 14.0872 3.58445 15.331 4.42469 16.3239C5.26494 17.3169 6.43488 17.9979 7.73562 18.2511C6.89073 18.4746 6.00398 18.5072 5.14398 18.3463C5.51103 19.4497 6.22517 20.4148 7.18673 21.1069C8.1483 21.7989 9.30931 22.1834 10.5077 22.2067C8.47316 23.7522 5.95987 24.5904 3.37266 24.5864C2.91383 24.5858 2.45547 24.5586 2 24.505C4.62833 26.1356 7.68579 27.0016 10.8085 27Z"
            fill="#0C8BD9"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer
      className="bg-transparent pt-[114px] border-t bg-white overflow-hidden"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 xl:gap-8">
          <XaxisPositive classes="space-y-4">
            <ImageComp
              imageUrl={`/images/logo-care2.webp`}
              classes="h-7"
              width={55}
              height={70}
            />
            <p className="text-xs leading-[18px] text-[#6C757D]">
            Your Trusted Partner for Student Visas, Work Abroad, and Study Abroad Solutions
            </p>
          </XaxisPositive>
          <XaxisPositive>
            <ul role="list" className="mt-2 space-y-1">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm leading-7 text-[#6C757D]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </XaxisPositive>
          <XaxisNegative>
            <ul role="list" className="mt-2 space-y-1">
              {navigation.rules.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm leading-7 text-[#6C757D]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </XaxisNegative>
          <XaxisNegative>
            <ul role="list" className="mt-2 space-y-1">
              {navigation.contacts.map((item) => (
                <li key={item.email} className="flex gap-2 items-center">
                  <span>
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.66602 4.40869H14.666M2.66602 4.40869V12.9087C2.66602 13.0413 2.71869 13.1685 2.81246 13.2622C2.90623 13.356 3.03341 13.4087 3.16602 13.4087H14.166C14.2986 13.4087 14.4258 13.356 14.5196 13.2622C14.6133 13.1685 14.666 13.0413 14.666 12.9087V4.40869M2.66602 4.40869L8.66602 9.90869L14.666 4.40869"
                        stroke="#6C757D"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <a
                    href={`mailto:${item.email}?subject=${encodeURIComponent(
                      item.subject
                    )}`}
                    className="text-sm leading-7 text-[#6C757D]"
                  >
                    {item.email}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex gap-x-6 mt-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                  target="_blank"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </XaxisNegative>
        </div>
      </div>
      <YaxisNegative classes="w-full pt-[40px]">
        <ImageComp
          imageUrl={`/images/FooterBg.png`}
          classes="w-full h-[131px] object-cover object-center"
          width={1440}
          height={131}
        />
      </YaxisNegative>
    </footer>
  );
}
