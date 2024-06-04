import { questions } from "@/app/constants/questions";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import React from "react";

export default function KeybProblem() {
  return (
    <section className=" body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="font-bold text-xl md:text-6xl text-center bg-clip-text mb-20">
          Key Qusetions answered by{" "}
          <span className="font-bold text-xl md:text-6xl text-center bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent mb-20">
            CleverBook
          </span>
        </div>
        <div className="flex flex-wrap -m-4">
          {questions.map((item, index: any) => (
            <div className="p-4 lg:w-1/4">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 dark:text-gray-900 mb-1">
                  {item.category}
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  {item.title}
                </h1>
                <p className="leading-relaxed mb-3">{item.description}</p>
                <HoverCard>
                  <HoverCardTrigger className="text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </HoverCardTrigger>
                  <HoverCardContent>{item.cardcontent}</HoverCardContent>
                </HoverCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
