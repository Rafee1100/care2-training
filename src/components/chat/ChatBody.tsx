"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Fragment, useState } from "react";
import care2Logo from "../../../public/images/logo-Care2.webp";

import ThreeDots from "../../../public/thrre-dots.gif";

const defaultChatTexts = [
  {
    question: "What do you provide in Student Visa Assistance programme? ",
    answer:
      "We offer personalized consultation, university/course selection, document preparation, visa application support, interview preparation, and post-visa guidance for a smooth study abroad experience.",
  },
  {
    question: "What is the minimum requirement to take on Work Abroad Opportunities this service?",
    answer:
      "Valid passport, relevant qualifications, language proficiency, and compliance with destination country visa requirements.",
  },
  {
    question: "What is the cost for Consultancy for Living Abroad service?",
    answer:
      "The cost for the Consultancy for Living Abroad service depends on the destination, type of assistance required, and complexity of the process. Contact us for a personalized quote based on your specific needs.",
  },
  {
    question: "How do I get in contact with you? ",
    answer: `To get in contact with us, simply email us at contact@care2training.com.`,
  },
];

export default function ChatBody({ setIsChatOpen }: any) {
  const [activeQues, setActiveQues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChat = async (item: any) => {
    setIsLoading(true);
    let results: any = [...activeQues];
    results.push(item);
    setActiveQues(results);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
  };
  return (
    <div className="sm:max-w-[365px] sm:min-w-[365px] w-full min-h-[596px] rounded-[8px] bg-white shadow-[0px_6px_24px_0px_#00000029] overflow-hidden">
      <div className="h-[60px] px-6 flex items-center justify-between w-full max-h-[60px] bg-gradient-to-r from-[#005BEA] to-[#45D8FF] shadow-[0px_4px_12px_0px_#00000014]">
        <span onClick={() => setIsChatOpen(false)} className="cursor-pointer">
          <svg
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 13.25L1.25 7L7.5 0.75"
              stroke="white"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h4 className="text-xl font-medium leading-[30px] text-white">
          Care2 Training
        </h4>
        <span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 10.25V9.63C9.43 9.63 9.86 9.5 10.22 9.26C10.58 9.02 10.86 8.68 11.03 8.28C11.2 7.88 11.24 7.44 11.15 7.02C11.07 6.6 10.86 6.21 10.55 5.9C10.24 5.59 9.85 5.39 9.43 5.3C9.01 5.22 8.57 5.26 8.17 5.42C7.77 5.59 7.43 5.87 7.19 6.23C6.95 6.59 6.82 7.01 6.82 7.45M9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5ZM9 13.56C9.28 13.56 9.5 13.34 9.5 13.06C9.5 12.78 9.28 12.56 9 12.56C8.72 12.56 8.5 12.78 8.5 13.06C8.5 13.34 8.72 13.56 9 13.56Z"
              stroke="white"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div className="p-6 flex flex-col gap-y-4 h-[536px] max-h-[536px] overflow-y-auto">
        <div className="flex justify-start">
          <div className="flex gap-2 max-w-[282px]">
            <span className="w-[24px] h-[24px] flex justify-center items-center rounded-full bg-white shadow-[0px_4px_12px_0px_#00000014]">
              <Image src={care2Logo} alt="Chat" priority />
            </span>
            <div className="flex flex-col gap-y-1">
              <div className="max-w-[250px] w-full sm:w-[250px] bg-[#F6F8FA] p-2 rounded-[4px] text-[#152536]">
                <div className="flex items-center gap-1">
                  <span className="text-xs leading-[18px]"> Hey There</span>
                  <span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5391 6.91674L8.03909 2.58662C7.87318 2.29981 7.60019 2.0906 7.2801 2.00498C6.96002 1.91936 6.61903 1.96432 6.33208 2.12999C6.04514 2.29566 5.8357 2.56848 5.74981 2.88849C5.66392 3.20851 5.7086 3.54953 5.87403 3.83662L7.49903 6.6512L5.37403 2.97059C5.29203 2.82829 5.18279 2.70354 5.05255 2.60347C4.92231 2.50341 4.77363 2.42999 4.615 2.38742C4.45638 2.34484 4.29092 2.33394 4.12808 2.35535C3.96524 2.37675 3.80821 2.43004 3.66598 2.51216C3.52374 2.59428 3.39908 2.70362 3.29913 2.83394C3.19917 2.96427 3.12588 3.11301 3.08343 3.27167C3.04099 3.43033 3.03023 3.5958 3.05177 3.75862C3.07331 3.92144 3.12673 4.07843 3.20897 4.22059L5.58397 8.33421L4.45896 6.38566C4.29305 6.09885 4.02006 5.88964 3.69997 5.80402C3.37989 5.7184 3.0389 5.76336 2.75196 5.92903C2.46501 6.0947 2.25557 6.36752 2.16968 6.68753C2.08379 7.00755 2.12847 7.34857 2.2939 7.63566L4.6689 11.7493C4.99713 12.3181 5.43419 12.8166 5.95512 13.2165C6.47605 13.6164 7.07065 13.9097 7.70495 14.0797C8.33926 14.2498 9.00085 14.2932 9.65194 14.2075C10.303 14.1218 10.9309 13.9087 11.4996 13.5804C12.0683 13.252 12.5668 12.8148 12.9665 12.2938C13.3663 11.7728 13.6595 11.1781 13.8294 10.5438C13.9993 9.90945 14.0425 9.24785 13.9567 8.59678C13.8709 7.94571 13.6576 7.31793 13.3292 6.74928L12.0792 4.58421C11.9972 4.44191 11.8879 4.31716 11.7577 4.21709C11.6274 4.11703 11.4788 4.04361 11.3201 4.00104C11.1615 3.95846 10.996 3.94757 10.8332 3.96897C10.6704 3.99037 10.5133 4.04366 10.3711 4.12578C10.2289 4.2079 10.1042 4.31724 10.0043 4.44756C9.9043 4.57789 9.831 4.72663 9.78856 4.88529C9.74612 5.04395 9.73536 5.20942 9.7569 5.37224C9.77844 5.53507 9.83185 5.69205 9.91409 5.83421L10.5391 6.91674ZM10.5391 6.91674C9.96488 7.24826 9.54589 7.79431 9.37428 8.43476C9.20267 9.07521 9.29251 9.7576 9.62403 10.3318M5.06783 15.0002C4.22036 14.4122 3.51392 13.6434 2.99945 12.7494M10.9994 1.9375C11.5699 1.93742 12.1304 2.0876 12.6244 2.37291C13.1184 2.65822 13.5285 3.0686 13.8136 3.56277"
                        stroke="#FFC107"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <span className="text-xs leading-[18px]">
                  {" "}
                  What would you like to learn about?
                </span>
              </div>
              {/* <p className="text-[10px] leading-[15px] text-[#6C757D]">
                bot-just now.
              </p> */}
            </div>
          </div>
        </div>

        {activeQues?.map((item: any, index: any) => (
          <Fragment key={index}>
            <div className="flex justify-end items-end">
              <div className="max-w-[282px] flex flex-wrap gap-2 justify-end">
                <div className="bg-gradient-to-r from-[#005BEA14] to-[#45D8FF14] px-3 min-h-[32px] py-1 flex items-center  rounded-[4px]">
                  <span className="bg-gradient-to-r from-[#005BEA] to-[#45D8FF] text-transparent  bg-clip-text text-xs leading-[18px]">
                    {item?.question}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="flex gap-2 max-w-[282px]">
                <span className="w-[24px] h-[24px] flex justify-center items-center rounded-full bg-white shadow-[0px_4px_12px_0px_#00000014]">
                  <Image
                    src={care2Logo}
                    alt="Chat"
                    priority
                  />
                </span>
                {isLoading && activeQues.length == index + 1 ? (
                  <Image src={ThreeDots} alt="Alt Image" priority width={35} />
                ) : (
                  <div className="flex flex-col gap-y-1">
                    <div className="max-w-[250px] sm:w-[250px] bg-[#F6F8FA] p-2 rounded-[4px] text-[#152536] text-xs leading-[18px]">
                      {item?.answer.split(" ").map((text: any, i: any) => (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            duration: 0.25,
                            delay: i / 10,
                          }}
                          key={i}
                        >
                          {text}{" "}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Fragment>
        ))}

        <div className="flex justify-end items-end h-full">
          <div className="max-w-[282px] flex flex-wrap gap-2 justify-end">
            {defaultChatTexts?.map((chatquestion: any, index: number) => (
              <div
                key={index}
                className="bg-gradient-to-r from-[#005BEA14] to-[#45D8FF14] px-3 min-h-[32px] py-1 flex items-center  rounded-[4px] cursor-pointer"
                onClick={() => handleChat(chatquestion)}
              >
                <span className="bg-gradient-to-r from-[#005BEA] to-[#45D8FF] text-transparent  bg-clip-text text-xs leading-[18px]">
                  {chatquestion?.question}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
