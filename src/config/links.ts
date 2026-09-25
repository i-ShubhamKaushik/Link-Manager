import { Landmark, Database, ScanText, Layers } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface EcosystemLink {
  id: string;
  name: string;
  description: string;
  url: string;
  buttonText: string;
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
  organizationName: "BIDSETU",
  handle: "@bidsetu",
  tagline: "Unified Tender & Procurement Ecosystem",
  subtagline: "Official Public Services & Portals",
  verified: true,
  copyrightYear: 2026,
};

/**
 * PUBLIC ECOSYSTEM LINKS CONFIGURATION
 * 
 * Instructions:
 * - Update the `url` properties below with the official live public URLs.
 * - For Product #4 (FOURTH PRODUCT), modify the `name`, `description`, `url`, and `icon` properties below.
 * - Only publicly accessible URLs should be listed here. No admin/localhost/private links.
 */
export const ECOSYSTEM_LINKS: EcosystemLink[] = [
  {
    id: "bidsetu",
    name: "BIDSETU",
    description: "Unified Tender & Procurement Platform",
    url: "https://bidsetu.in", // Configure official public URL here
    buttonText: "BIDSETU →",
    iconName: "Landmark",
    icon: Landmark,
    badge: "Core Platform",
    isCore: true,
  },
  {
    id: "data-setu",
    name: "DATA SETU",
    description: "Access and explore structured procurement data",
    url: "https://data.bidsetu.in", // Configure official public URL here
    buttonText: "DATA SETU →",
    iconName: "Database",
    icon: Database,
    badge: "Data & Insights",
    isCore: true,
  },
  {
    id: "ocr-extractor",
    name: "OCR EXTRACTOR",
    description: "Extract structured information from tender documents using OCR",
    url: "https://ocr.bidsetu.in", // Configure official public URL here
    buttonText: "OCR EXTRACTOR →",
    iconName: "ScanText",
    icon: ScanText,
    badge: "AI Extraction",
    isCore: true,
  },
  /* ========================================================================
   * 4TH ECOSYSTEM PRODUCT CONFIGURATION
   * Update name, description, url, and icon below as needed.
   * ======================================================================== */
  {
    id: "fourth-product",
    name: "CONTRACT SETU", // Change name here if 4th product name is finalized
    description: "Smart contract lifecycle management and verification", // Change description here
    url: "https://contracts.bidsetu.in", // Configure official public URL here
    buttonText: "CONTRACT SETU →",
    iconName: "Layers",
    icon: Layers,
    badge: "Public Service",
    isCore: false,
  },
];
