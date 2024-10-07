import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github } from "lucide-react"
import Link from 'next/link'

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white grid grid-cols-1 lg:grid-cols-2">
      {/* Left Column */}
      <div className="relative overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Background office image"
          layout='fill'
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute top-8 left-8 p-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg">
          <Link href="/">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-md"></div>
              <span className="text-xl font-semibold text-white">StyleUI Inc</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Right Column */}
      <div className="bg-gray-100 dark:bg-zinc-900 p-8 flex flex-col">
        <div className="flex justify-end">
          <Button variant="ghost" className="text-black dark:text-white">
            Login
          </Button>
        </div>
        <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold mb-2">Create an account</h1>
          <p className="text-gray-600 dark:text-zinc-400 mb-8">
            Enter your email below to create your account
          </p>
          <form className="space-y-4">
            <Input
              type="email"
              placeholder="name@example.com"
              className="bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 text-black dark:text-white"
            />
            <Button className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-zinc-200">
              Sign In with Email
            </Button>
          </form>
          <div className="my-8 flex items-center">
            <div className="flex-grow border-t border-gray-300 dark:border-zinc-800"></div>
            <span className="mx-4 text-gray-500 dark:text-zinc-400">OR CONTINUE WITH</span>
            <div className="flex-grow border-t border-gray-300 dark:border-zinc-800"></div>
          </div>
          <Button variant="outline" className="w-full border-gray-300 dark:border-zinc-700 text-black dark:text-white">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <p className="mt-8 text-center text-sm text-gray-500 dark:text-zinc-400">
            By clicking continue, you agree to our{" "}
            <a href="#" className="underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}