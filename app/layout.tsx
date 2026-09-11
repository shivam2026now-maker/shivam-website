import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Shivam Chandravanshi | Aerospace & Research",
    template: "%s | Shivam Chandravanshi",
  },
  description:
    "Independent research, engineering, aerospace, space, technology, projects and ideas by Shivam Chandravanshi.",
  keywords: [
    "Shivam Chandravanshi",
    "Aerospace",
    "Research",
    "Engineering",
    "Physics",
    "Space",
    "Technology",
    "Projects",
  ],
  authors: [
    {
      name: "Shivam Chandravanshi",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body><header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050816]/75 backdrop-blur-xl"><div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6"><a href="/" className="text-sm font-semibold uppercase tracking-[0.28em] text-white transition hover:text-cyan-300">Shivam</a><nav className="hidden items-center gap-7 md:flex">{["Articles","Research","Projects","Journal","Media"].map(item=><a key={item} href={"/"+item.toLowerCase()} className="text-[11px] uppercase tracking-[0.2em] text-slate-400 transition hover:text-cyan-300">{item}</a>)}</nav><a href="/about" className="text-[11px] uppercase tracking-[0.2em] text-slate-400 transition hover:text-cyan-300">About</a></div></header>{children}</body>
    </html>
  );
}
