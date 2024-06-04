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
      className="w-full max-w-xs lg:w-3/5 md:w-1/2 "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
      {reviews.map((item, index: any) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="justify-center">
                <img className="item-center" src={item.image} alt=""/>
                <CardTitle>{item.name}</CardTitle>
                <p>{item.title}</p>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span >{item.description}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

