"use client";
import XaxisPositive from "@/components/animation/XaxisPositive";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
const faqs = [
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
];
export default function ServiceFaq() {
  return (
    <XaxisPositive classes="py-[120px] container">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-7 max-w-[419px] min-w-[419px]">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl leading-[36px] font-medium text-[#152536]">
              Frequently Asked Questions
            </h3>
            <p className="text-sm leading-[28px] text-[#6C757D]">
              Discover the commonly asked questions about Care2 Training Consultancy
            </p>
          </div>
          <Link href={"/contact"}>
            <button className="bg-gradient-to-r from-[#0D1A73] to-[#45D8FF] w-[167px] min-w-[167px] h-[40px]   rounded-[4px]">
              <span className="text-white text-sm leading-7 tracking-[1.25%]">
                Contact us
              </span>
            </button>
          </Link>
        </div>
        <div className="w-full flex flex-col gap-y-4">
          {faqs.map((faq: any, index: any) => (
            <Disclosure as="div" key={index}>
              {({ open }) => (
                <div
                  className={`${
                    open
                      ? "bg-gradient-to-r from-[#0D1A73] to-[#45D8FF]"
                      : "bg-[#F6F8FA]"
                  }  py-4 px-3 rounded-[8px]`}
                >
                  <dt>
                    <Disclosure.Button className="flex w-full items-center justify-between text-left ">
                      <span
                        className={`${
                          open ? "text-white" : "text-[#6C757D]"
                        } text-sm  font-medium leading-[21px]`}
                      >
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <svg
                            width="12"
                            height="7"
                            viewBox="0 0 12 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 6L6 1L11 6"
                              stroke="white"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="12"
                            height="7"
                            viewBox="0 0 12 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11 1L6 6L1 1"
                              stroke="#6C757D"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-xs leading-[18px] text-[#CED4DA]">
                      {faq.answer}
                    </p>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </XaxisPositive>
  );
}
