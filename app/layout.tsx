import { ThemeProvider } from "@/components/theme-provider";
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "@/components/ui/sonner"


export const metadata: Metadata = {
  metadataBase: new URL("https://www.styleui.dev"),
  title: {
    default: 'StyleUI',
    template: `%s | StyleUI`
  },
  description: "A collection of components made with TailwindCSS and Shadcn UI",
  openGraph: {
    description: "A collection of components made with TailwindCSS and Shadcn UI",
    images: ['https://utfs.io/f/MD2AM9SEY8GuRgi0YkP3eiHgdZwIA0VjY48TPsQahn71KODJ'],
    url: 'https://www.styleui.dev/'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StyleUI',
    description: 'A collection of components made with TailwindCSS and Shadcn UI',
    siteId: "",
    creator: "@rasmickyy",
    creatorId: "",
    images: ['https://utfs.io/f/MD2AM9SEY8GuRgi0YkP3eiHgdZwIA0VjY48TPsQahn71KODJ'],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
