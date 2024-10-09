export const codeSnippets = {
  animatedCard: `"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRef, useState } from "react"

export default function AnimatedCard({ title, description, image }: {
  title: string,
  description: string,
  image: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (rect) {
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      setMousePosition({ x, y })
    }
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }}
      className="relative w-full rounded-2xl border dark:border-zinc-900 hover:cursor-pointer overflow-hidden max-w-[350px] min-w-[350px]"
    >
      <div
        className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out"
        style={{
          background: \`radial-gradient(circle 150px at \${mousePosition.x}px \${mousePosition.y}px, rgba(255,255,255,0.2), transparent 80%)\`,
          opacity: isHovered ? 1 : 0,
          pointerEvents: 'none',
        }}
      />
      <div className="relative z-10 p-3">
        <div className="relative w-full aspect-[16/9] rounded overflow-hidden">
          <Image
            src={image}
            alt="Blog thumbnail"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <p className="text-sm dark:text-gray-300">{title}</p>
          <p className="text-xs dark:text-gray-400">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}`,

  floatingNavbar: `"use client"
import {
  NavigationMenu,
  NavigationMenuList
} from "@/components/ui/navigation-menu"
import { Dialog, DialogClose } from "@radix-ui/react-dialog"
import { BookOpen } from 'lucide-react'
import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi"
import { Button } from "./ui/button"
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import ModeToggle from "./mode-toggle"

export function NavBar() {
  return (
    <div className="flex items-center min-w-full w-full justify-center p-2 z-99">
      <div className="flex min-h-[60px] justify-between md:w-[620px] w-[95%] mt-[1rem] border border-gray-350 dark:border-zinc-900 dark:bg-black bg-opacity-10 relative backdrop-filter backdrop-blur-lg bg-white border-opacity-20 rounded-xl p-2 shadow-lg">
        <Dialog>
          <SheetTrigger className="min-[825px]:hidden p-2 transition">
            <GiHamburgerMenu />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>tsafi</SheetTitle>
              <SheetDescription>
                Launch your blog with tsafi in just a few clicks
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-[1rem]">
              <DialogClose asChild>
                <Link href="/">
                  <Button variant="outline" className="w-full">Home</Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/cms">
                  <Button variant="outline" className="w-full">Dashboard</Button>
                </Link>
              </DialogClose>
            </div>
          </SheetContent>
        </Dialog>
        <NavigationMenu>
          <NavigationMenuList className="max-[825px]:hidden ">
            <Link href="/" className="pl-2">
              <BookOpen />
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList className="max-[825px]:hidden ">
              <Link href="/components" className="pl-2">
                <Button variant="ghost">
                  About Us
                </Button>
              </Link>
            </NavigationMenuList>
            <NavigationMenuList className="max-[825px]:hidden ">
              <Link href="/components" className="pl-2">
                <Button variant="ghost">
                  Contact Us
                </Button>
              </Link>
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}`,

  chatGPTCarousel: `'use client'

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
              <Card className={\`bg-gradient-to-br \${item.bgColor} \${item.darkBgColor} overflow-hidden border-0 rounded-lg shadow-md\`}>
                <CardContent className="p-6 aspect-[3/4] flex flex-col justify-between">
                  <div className="text-sm font-medium text-white">{item.title}</div>
                  <div className="text-lg font-medium text-white mt-auto">{item.description}</div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
  )
}`,

  videoPlayer: `"use client"
import { Maximize, Minimize, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface CustomVideoPlayerProps {
  videoSrc: string;
}

export const VideoPlayer: React.FC<CustomVideoPlayerProps> = ({ videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [volume, setVolume] = useState<number>(1);
  const [currentVolume, setCurrentVolume] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const [lastMouseMoveTime, setLastMouseMoveTime] = useState(Date.now());

  const autoplay = useMemo(() => false, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration > 0) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    const handleVideoEnd = () => setIsPlaying(false);

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("ended", handleVideoEnd);

    if (autoplay) {
      video.play().catch((error) => console.error("Autoplay failed:", error));
    }

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, [autoplay]);

  useEffect(() => {
    const handleMouseMove = () => {
      setLastMouseMoveTime(Date.now());
      setShowControls(true);
    };

    const handleMouseLeave = () => {
      if (isPlaying) {
        setShowControls(false);
      }
    };

    const checkMouseInactivity = () => {
      const currentTime = Date.now();
      if (currentTime - lastMouseMoveTime > 3000 && isFullscreen) {
        setShowControls(false);
      }
    };

    if (playerRef.current) {
      playerRef.current.addEventListener("mousemove", handleMouseMove);
      playerRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    const inactivityInterval = setInterval(checkMouseInactivity, 1000);

    return () => {
      if (playerRef.current) {
        playerRef.current.removeEventListener("mousemove", handleMouseMove);
        playerRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
      clearInterval(inactivityInterval);
    };
  }, [isFullscreen, lastMouseMoveTime]);

  useEffect(() => {
    if (!isFullscreen) {
      setShowControls(true);
    }
  }, [isFullscreen]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current[isPlaying ? 'pause' : 'play']();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleProgressChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const newTime = (Number(e.target.value) / 100) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
    setProgress(Number(e.target.value));
  }, []);

  const toggleMute = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
    setVolume(isMuted ? currentVolume : 0);
  }, [isMuted, currentVolume]);

  const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const newVolume = Number(e.target.value);
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
    setCurrentVolume(newVolume);
    setIsMuted(newVolume === 0);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!playerRef.current) return;
    if (!document.fullscreenElement) {
      playerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  return (
    <div ref={playerRef} className="flex flex-col justify-center items-center max-w-full relative mb-16">
      <div className="relative w-full">
        <video
          ref={videoRef}
          className="w-full cursor-pointer"
          src={videoSrc}
          onClick={togglePlay}
        >
          Your browser does not support the video tag.
        </video>
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center" onClick={togglePlay}>
            <Play size={64} className="text-white opacity-50" />
          </div>
        )}
      </div>
      <div className={\`
          text-white
          p-2 w-full absolute
          bottom-0
          left-0
          transition-opacity duration-300 ease-in-out
          \${showControls ? 'opacity-100' : 'opacity-0'}
        \`}>
        <div className="flex items-center justify-between">
          <button onClick={togglePlay} className="p-1 bg-transparent border-none cursor-pointer flex items-center justify-center mr-0 text-inherit">
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
            className={\`w-full mx-2 cursor-pointer\`}
          />
          <div className="flex items-center">
            <button onClick={toggleMute} className="p-1">
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-16 mx-2"
            />
            <button onClick={toggleFullscreen} className="p-1">
              {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};`,

  typography: `export default function TypographyDemo() {
  return (
    <div>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-lg font-medium tracking-tight transition-colors first:mt-0">
        Welcome to the Typography Demo
      </h2>

      <p className="leading-7 text-sm mt-6">
        This is a paragraph demonstrating the base text style. It includes a{' '}
        <a href="#" className="font-medium text-primary underline underline-offset-4">
          link to nowhere
        </a>{' '}
        to show anchor styling.
      </p>

      <h3 className="mt-8 scroll-m-20 text-md font-medium tracking-tight">Lists</h3>

      <ul className="my-4 ml-6 list-disc [&>li]:mt-2">
        <li className="text-sm">First item in an unordered list</li>
        <li className="text-sm">Second item with a nested paragraph
          <p className="leading-7 text-sm">This paragraph is inside a list item, so it doesn't have a top margin.</p>
        </li>
        <li className="text-sm">Third item in the list</li>
      </ul>

      <h3 className="mt-8 scroll-m-20 text-md font-medium tracking-tight">Blockquote</h3>

      <blockquote className="text-sm mt-6 border-l-2 pl-6 italic">
        This is a blockquote. It's styled with a left border and italic text.
      </blockquote>

      <h3 className="mt-8 scroll-m-20 text-md font-medium tracking-tight">Code</h3>

      <p className="leading-7 text-sm mt-6">
        Here's an example of inline <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-medium">code</code> within a paragraph.
      </p>

      <pre className="mt-6 p-4 bg-muted rounded">
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-medium">
          {\`const greet = (name) => {
  console.log(\\\`Hello, \\\${name}!\\\`);
};

greet('World');\`}
        </code>
      </pre>
    </div>
  );
}`,

  buttons: `

export default function Buttons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-4 md:p-8">
      <button className={\`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 py-2 px-4 bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200 animate-bounce\`}>
        Bouncing Button
      </button>

      <button className={\`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 py-2 px-4 bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200 group\`}>
        <span className="flex items-center space-x-2">
          <span>Spinning Icon</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:animate-spin" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
        </span>
      </button>

      <button className={\`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 py-2 px-4 bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200 relative overflow-hidden group\`}>
        <span className="relative z-10">Shimmering Effect</span>
        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-gray-300 dark:via-zinc-500 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-1000 ease-out group-hover:translate-x-full"></span>
      </button>

      <button className={\`inline-flex items-center justify-center rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 py-2 px-4 bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200 group transform hover:scale-105 transition-transform duration-200\`}>
        <span className="flex items-center space-x-2">
          <span>Pulsing Dot</span>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white dark:bg-slate-900 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white dark:bg-slate-900"></span>
          </span>
        </span>
      </button>
    </div>
  );
}`,
};
