import type { Metadata } from "next";
import {
  Inter,
  JetBrains_Mono,
  Caveat,
  Playfair_Display,
  Montserrat,
  Fraunces,
  Manrope,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

// Handwritten accent used on the sticker badge (reserved for the portrait/photo block).
const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  display: "swap",
});

// Studio case-study type system (used only inside the [data-theme="sillage"] scope).
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

// Kera case-study type: a warm contrast serif (Canela substitute) + clean grotesk.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paul Stanley Ganganapalli, AI Agent Developer",
  description:
    "AI Agent Developer building production-grade systems with LangGraph, RAG, MCP, and Claude. Mechanical engineer turned multi-agent architect.",
  metadataBase: new URL("https://www.paulstanley.dev"),
  openGraph: {
    title: "Paul Stanley Ganganapalli, AI Agent Developer",
    description:
      "Production-grade multi-agent systems. LangGraph · RAG · MCP · Claude.",
    type: "website",
    url: "https://www.paulstanley.dev",
    siteName: "Paul Stanley Ganganapalli",
    images: [
      {
        url: "https://www.paulstanley.dev/sillage/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Paul Stanley Ganganapalli — AI Agent Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paul Stanley Ganganapalli, AI Agent Developer",
    description:
      "Production-grade multi-agent systems. LangGraph · RAG · MCP · Claude.",
    images: ["https://www.paulstanley.dev/sillage/og-home.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} ${caveat.variable} ${playfair.variable} ${montserrat.variable} ${fraunces.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');document.documentElement.classList.remove('no-js');",
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
