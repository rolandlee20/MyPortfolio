import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

// warm, human-feeling type stack (not the usual default sans)
import "@fontsource-variable/fraunces"; // Fraunces Variable — warm serif with a soft axis
import "@fontsource/karla/400.css"; // Karla — humanist body
import "@fontsource/karla/700.css";
import "@fontsource/jetbrains-mono/400.css"; // JetBrains Mono — for the codey bits
import "@fontsource/jetbrains-mono/600.css";

export const metadata: Metadata = {
  title: "ryoshicode — solo fullstack dev",
  description:
    "the little corner of the internet for ryoshicode — solo fullstack developer selling hand-built tools & templates on codester. honest features, readable code, no mystery meat.",
  keywords: [
    "ryoshicode",
    "codester",
    "indie developer",
    "next.js templates",
    "full-stack developer",
    "video platform",
    "website template",
  ],
  authors: [{ name: "ryoshicode" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "ryoshicode — solo fullstack dev",
    description:
      "solo fullstack dev & maker of hand-built templates. this is my little corner of the internet.",
    siteName: "ryoshicode",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
