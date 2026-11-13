import type { ReactNode } from "react";

const marks: Record<string, ReactNode> = {
  "GOOGLE ADS": (
    <svg viewBox="0 0 72 72" aria-hidden="true" className="h-full w-full">
      <path d="M27 10a12 12 0 0 1 16 4l23 40a12 12 0 1 1-21 12L22 26a12 12 0 0 1 5-16Z" fill="#34a853" />
      <path d="M45 14a12 12 0 0 1 21 12L43 66a12 12 0 1 1-21-12Z" fill="#4285f4" />
      <circle cx="12" cy="58" r="12" fill="#fbbc04" />
    </svg>
  ),
  "META ADS": (
    <svg viewBox="0 0 72 72" aria-hidden="true" className="h-full w-full">
      <path d="M8 47c8-23 15-31 23-25 7 6 13 24 19 30 6 6 11-2 15-13M8 47c4 10 9 12 14 7 6-6 12-24 19-30 8-6 15 2 23 25" fill="none" stroke="#0866ff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  SEMRUSH: (
    <svg viewBox="0 0 72 72" aria-hidden="true" className="h-full w-full">
      <path d="M58 13c-2 14-9 22-22 24 12 3 19 10 21 23-9-6-17-8-25-6-13 3-21-2-22-11-1-8 6-14 17-14 12 0 22-5 31-16Z" fill="#ff642d" />
      <path d="M13 45c9-5 17-6 25-4" fill="none" stroke="#ff642d" strokeWidth="5" strokeLinecap="round" />
    </svg>
  ),
  SHOPIFY: (
    <svg viewBox="0 0 72 72" aria-hidden="true" className="h-full w-full">
      <path d="m19 22 34-5 5 43-30 5-9-43Z" fill="#95bf47" />
      <path d="M29 23c0-9 5-16 12-16 6 0 10 5 10 13" fill="none" stroke="#5e8e3e" strokeWidth="4" />
      <path d="M43 31c-7-4-15 0-13 5 1 3 8 4 8 7 0 2-4 3-9 1" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  ),
  MAILCHIMP: (
    <svg viewBox="0 0 72 72" aria-hidden="true" className="h-full w-full">
      <path d="M16 29c-5-9-1-17 6-17 5 0 8 5 9 11 7-5 17-5 24 0 6 4 8 11 5 18l5 8-10 1c-5 7-13 10-23 8-12-2-20-10-19-19 0-4 1-7 3-10Z" fill="#ffe01b" stroke="#241c15" strokeWidth="3" strokeLinejoin="round" />
      <path d="m19 15 2 11m7-13 1 11" stroke="#241c15" strokeWidth="3" strokeLinecap="round" />
      <circle cx="33" cy="34" r="2.5" fill="#241c15" /><circle cx="48" cy="34" r="2.5" fill="#241c15" />
      <path d="M35 45c4 4 9 4 13 0" fill="none" stroke="#241c15" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  WORDPRESS: (
    <svg viewBox="0 0 72 72" aria-hidden="true" className="h-full w-full">
      <circle cx="36" cy="36" r="32" fill="white" stroke="#21759b" strokeWidth="4" />
      <path d="m15 23 13 36m-8-38h14m-6 0c4 12 8 23 13 37m-2-37h15m-8 0c-3 13-7 26-13 38m22-34-12 34" fill="none" stroke="#21759b" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  HUBSPOT: (
    <svg viewBox="0 0 72 72" aria-hidden="true" className="h-full w-full">
      <g fill="none" stroke="#ff7a59" strokeWidth="5" strokeLinecap="round"><path d="m30 36 19-17M30 36l21 17M27 32 17 21" /><circle cx="24" cy="38" r="9" /></g>
      <circle cx="53" cy="14" r="7" fill="#ff7a59" /><circle cx="55" cy="56" r="7" fill="#ff7a59" /><circle cx="14" cy="17" r="6" fill="#ff7a59" />
    </svg>
  ),
};

export function MarketingToolLogo({ name, className = "" }: { name: string; className?: string }) {
  return <span role="img" aria-label={`${name} logo`} className={`block h-16 w-16 shrink-0 ${className}`}>{marks[name]}</span>;
}
