import { Landmark, Database, ScanText } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface EcosystemLink {
  id: string;
  name: string;
  description: string;
  github: string;
  live: string;
  buttonText?: string;
  iconName: string;
  icon: LucideIcon;
  badge?: string;
  isCore?: boolean;
}

export interface EcosystemConfig {
  organizationName: string;
  handle: string;
  tagline: string;
  subtagline: string;
  verified: boolean;
  copyrightYear: number;
}

export const ECOSYSTEM_CONFIG: EcosystemConfig = {
  organizationName: "OneBuilds Manager",
  handle: "@onebuilds",
  tagline: "OneBuilds SIH Team Project Hub",
  subtagline: "Official Projects & Live Portals",
  verified: true,
  copyrightYear: 2026,
};

/**
 * PUBLIC ECOSYSTEM PROJECTS CONFIGURATION
 * Contains exact project details: BidSetu, Data Setu, Paddle OCR
 */
export const ECOSYSTEM_LINKS: EcosystemLink[] = [
  {
    id: "bidsetu",
    name: "BidSetu",
    description: "Unified Tender & Procurement Platform",
    github: "https://github.com/onepiet/Bidsetu",
    live: "https://bidsetu.onrender.com/",
    buttonText: "BidSetu →",
    iconName: "Landmark",
    icon: Landmark,
    badge: "Core Platform",
    isCore: true,
  },
  {
    id: "data-setu",
    name: "Data Setu",
    description: "Access and explore structured procurement data",
    github: "https://github.com/onepiet/DATASETU/",
    live: "https://datasetu-de8y.onrender.com/",
    buttonText: "Data Setu →",
    iconName: "Database",
    icon: Database,
    badge: "Data & Insights",
    isCore: true,
  },
  {
    id: "paddle-ocr",
    name: "Paddle OCR",
    description: "Extract structured information from tender documents using OCR",
    github: "https://github.com/onepiet/PaddleOcr",
    live: "https://paddleocrr.onrender.com/",
    buttonText: "Paddle OCR →",
    iconName: "ScanText",
    icon: ScanText,
    badge: "AI Extraction",
    isCore: true,
  },
];
