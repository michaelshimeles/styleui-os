"use client"
import { Clipboard } from "lucide-react";
import { useState } from 'react';
import { toast } from "sonner";

// Components
import AnimatedCard from "@/components/animated-card";
import ChatGPTCarousel from "@/components/chatgpt-carousel";
import { NavBar } from "@/components/floating-navbar";
import TypographyDemo from "@/components/typography";
import { VideoPlayer } from "@/components/video-player";

// UI Components
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { codeSnippets } from '@/lib/codeSnippets';
import FloatingBadge from "@/components/floating-badge";
import Buttons from "@/components/buttons";
// Types
type ComponentName = 'animatedCard' | 'floatingNavbar' | 'chatGPTCarousel' | 'videoPlayer' | 'typography' | 'buttons';

// Component configuration
const components = [
  { name: 'buttons', title: 'Buttons', Component: Buttons },
  { name: 'animatedCard', title: 'Animated Card', Component: AnimatedCard },
  { name: 'floatingNavbar', title: 'Floating Navbar', Component: NavBar },
  { name: 'videoPlayer', title: 'Custom Video Player', Component: VideoPlayer },
  { name: 'chatGPTCarousel', title: 'ChatGPT Carousel', Component: ChatGPTCarousel },
  { name: 'typography', title: 'Typography Demo', Component: TypographyDemo },
] as const;

export default function Page() {
  const [showCode, setShowCode] = useState<Record<ComponentName, boolean>>({
    animatedCard: false,
    floatingNavbar: false,
    chatGPTCarousel: false,
    videoPlayer: false,
    typography: false,
    buttons: false
  });

  const toggleCodeVisibility = (component: ComponentName) => {
    setShowCode(prev => ({ ...prev, [component]: !prev[component] }));
  };

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
      .then(() => toast("Code copied to clipboard!"))
      .catch(err => console.error("Failed to copy: ", err));
  };

  const renderComponent = ({ name, title, Component }: typeof components[number]) => (
    <div key={name} className="flex flex-col items-start justify-center gap-4 w-full mt-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-2">
        <div className="flex items-center justify-start gap-2">
          <h1 className="text-md font-medium">{title}</h1>
          <Badge variant="outline">Free</Badge>
        </div>
        <div className="flex items-center justify-start gap-2">
          <Button variant="outline" onClick={() => toggleCodeVisibility(name)} className="w-full sm:w-auto">
            {showCode[name] ? 'Hide Code' : 'View Code'}
          </Button>
        </div>
      </div>
      {showCode[name] ? (
        <div className="relative w-full h-[300px] sm:h-[400px]">
          <pre className="border border-zinc-900 p-4 rounded-lg w-full h-full overflow-auto text-xs sm:text-sm">
            <code>{codeSnippets[name]}</code>
          </pre>
          <Button
            size="icon"
            variant="outline"
            onClick={() => copyToClipboard(codeSnippets[name])}
            className="absolute top-2 right-2 flex items-center justify-center p-2 rounded-md"
          >
            <Clipboard className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="w-full">
          <Component videoSrc={"https://utfs.io/f/08b0a37f-afd7-4623-b5cc-e85184528fce-1f02.mp4"} title={"tsafi"} description={"an opensource ai blog site builder and CMS. launch a blog in minutes."} image={"https://utfs.io/f/59a2a3e1-f1b9-4152-97d2-38dea6e14106-3hq5f6.png"} />
        </div>
      )}
    </div>
  );

  return (
    <main className="flex flex-col gap-4 items-center justify-start min-h-screen w-full pt-4 pb-4 sm:pb-[4rem] px-4 sm:px-0 mt-[4rem]">
      <div className="flex flex-col items-start justify-center gap-4 w-full sm:w-[90%] md:w-[80%] lg:w-[70%]">
        <h1 className="text-lg sm:text-xl font-medium">StyleUI Components</h1>
        <Separator />
        <div className="border dark:border-zinc-900 border-zinc-200 rounded p-4 w-full">
          <h2 className="text-md font-medium mb-2">Installation Instructions</h2>
          <p className="mb-2 text-sm">To use these components, you need to install shadcn/ui. Follow these steps:</p>
          <ol className="text-xs sm:text-sm list-decimal list-inside space-y-1">
            <li>Run <code className="bg-gray-200 dark:bg-zinc-700 px-1 py-0.5 rounded text-xs">npx shadcn@latest init</code> in your project directory</li>
            <li>Follow the prompts to set up shadcn/ui</li>
            <li>Install necessary components using <code className="bg-gray-200 dark:bg-zinc-700 px-1 py-0.5 rounded text-xs">npx shadcn-ui@latest add [component-name]</code></li>
          </ol>
          <p className="mt-2 text-xs sm:text-sm">For more detailed instructions, visit the <a href="https://ui.shadcn.com/docs/installation" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">shadcn/ui documentation</a>.</p>
        </div>

        {components.map(renderComponent)}
      </div>
      <FloatingBadge />
    </main>
  )
}