"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Item } from "@radix-ui/react-dropdown-menu";
import { reviews } from "@/app/constants/review";
export function Crousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-lg lg:w-3/5 md:w-1/2 "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
      {reviews.map((item, index: any) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="text-center flex items-center w-full justify-center flex-col  bg-slate-300 dark:bg-slate-800">
                <img className="h-20 w-20 border items-center justify-center border-r-50 rounded-full mt-10 mb-5" src={item.image} alt=""/>
                <CardTitle>{item.name}</CardTitle>
                <p>{item.title}</p>
                <CardContent className="flex aspect-square items-center p-6">
                  <span >{item.description}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-slate-300 dark:bg-slate-800" />
      <CarouselNext  className="bg-slate-300 dark:bg-slate-800 "/>
    </Carousel>
  )
}

