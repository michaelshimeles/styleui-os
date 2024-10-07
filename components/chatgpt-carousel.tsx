'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef } from 'react'

const carouselItems = [
  {
    title: "For Everyone",
    description: "Let your imagination run wild",
    bgColor: "from-pink-500 to-blue-500",
    darkBgColor: "dark:from-pink-600 dark:to-blue-600",
  },
  {
    title: "For Teams",
    description: "A superassistant for every member of your team",
    bgColor: "from-blue-500 to-green-500",
    darkBgColor: "dark:from-blue-600 dark:to-green-600",
  },
  {
    title: "For Enterprises",
    description: "Empower your entire workforce with enterprise-grade AI",
    bgColor: "from-yellow-500 to-blue-500",
    darkBgColor: "dark:from-yellow-600 dark:to-blue-600",
  },
  {
    title: "SearchGPT Prototype",
    description: "SearchGPT is a prototype of new AI search features",
    bgColor: "from-purple-500 via-pink-500 to-red-500",
    darkBgColor: "dark:from-purple-600 dark:via-pink-600 dark:to-red-600",
  },
  {
    title: "Creative Writing",
    description: "Unleash your storytelling potential",
    bgColor: "from-red-500 via-orange-500 to-yellow-500",
    darkBgColor: "dark:from-red-600 dark:via-orange-600 dark:to-yellow-600",
  },
  {
    title: "Code Assistant",
    description: "Your AI pair programmer",
    bgColor: "from-green-500 via-teal-500 to-blue-500",
    darkBgColor: "dark:from-green-600 dark:via-teal-600 dark:to-blue-600",
  },
  {
    title: "Data Analysis",
    description: "Uncover insights from your data",
    bgColor: "from-blue-500 via-indigo-500 to-purple-500",
    darkBgColor: "dark:from-blue-600 dark:via-indigo-600 dark:to-purple-600",
  },
  {
    title: "Language Learning",
    description: "Master new languages with AI",
    bgColor: "from-yellow-500 via-green-500 to-teal-500",
    darkBgColor: "dark:from-yellow-600 dark:via-green-600 dark:to-teal-600",
  },
]

export default function ChatGPTCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let isDown = false
    let startX: number
    let scrollLeft: number

    const onMouseDown = (e: MouseEvent) => {
      isDown = true
      carousel.classList.add('active')
      startX = e.pageX - carousel.offsetLeft
      scrollLeft = carousel.scrollLeft
    }

    const onMouseLeave = () => {
      isDown = false
      carousel.classList.remove('active')
    }

    const onMouseUp = () => {
      isDown = false
      carousel.classList.remove('active')
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - carousel.offsetLeft
      const walk = (x - startX) * 2
      carousel.scrollLeft = scrollLeft - walk
    }

    carousel.addEventListener('mousedown', onMouseDown)
    carousel.addEventListener('mouseleave', onMouseLeave)
    carousel.addEventListener('mouseup', onMouseUp)
    carousel.addEventListener('mousemove', onMouseMove)

    return () => {
      carousel.removeEventListener('mousedown', onMouseDown)
      carousel.removeEventListener('mouseleave', onMouseLeave)
      carousel.removeEventListener('mouseup', onMouseUp)
      carousel.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
      <Carousel className="w-full">
        <div className="flex justify-between items-center">

          <div className="flex space-x-2">
            <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 h-8 w-8 dark:bg-none text-gray-700 dark:text-gray-300 ">
              <ChevronLeft className="h-4 w-4" />
            </CarouselPrevious>
            <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 h-8 w-8 dark:bg-none text-gray-700 dark:text-gray-300 ">
              <ChevronRight className="h-4 w-4" />
            </CarouselNext>
          </div>
        </div>
        <CarouselContent ref={carouselRef} className="cursor-grab active:cursor-grabbing mt-5">
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <Card className={`bg-gradient-to-br ${item.bgColor} ${item.darkBgColor} overflow-hidden border-0 rounded-lg shadow-md`}>
                <CardContent className="p-6 aspect-[3/4] flex flex-col justify-between">
                  <div className="text-sm font-medium text-white">{item.title}</div>
                  <div className="text-lg font-medium text-white mt-auto">{item.description}</div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    // </div>
  )
}