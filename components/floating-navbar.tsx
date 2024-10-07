"use client"
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
}