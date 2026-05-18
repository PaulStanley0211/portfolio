import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
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

const instrument = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paul Stanley Ganganapalli — AI Agent Developer",
  description:
    "AI Agent Developer building production-grade systems with LangGraph, RAG, MCP, and Claude. Mechanical engineer turned multi-agent architect.",
  metadataBase: new URL("https://www.paulstanley.dev"),
  openGraph: {
    title: "Paul Stanley Ganganapalli — AI Agent Developer",
    description:
      "Production-grade multi-agent systems. LangGraph · RAG · MCP · Claude.",
    type: "website",
    url: "https://www.paulstanley.dev",
    siteName: "Paul Stanley Ganganapalli",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paul Stanley Ganganapalli — AI Agent Developer",
    description:
      "Production-grade multi-agent systems. LangGraph · RAG · MCP · Claude.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} ${instrument.variable}`}
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
