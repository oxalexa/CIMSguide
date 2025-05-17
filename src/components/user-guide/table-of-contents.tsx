
"use client";

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronRight } from 'lucide-react';

interface TocItem {
  id: string;
  level: number;
  text: string;
  children?: TocItem[];
}

const tocStructure: TocItem[] = [
  { id: 'introduction', level: 1, text: '1. Introduction: Why CIMS?' },
  { id: 'getting-started', level: 1, text: '2. Getting Started', children: [
    { id: 'logging-in', level: 2, text: '2.1 Logging In' },
    { id: 'navigating-cims', level: 2, text: '2.2 Navigating CIMS' },
  ]},
  { id: 'roles-permissions', level: 1, text: '3. Understanding Your Role & Permissions' },
  { id: 'core-workflow', level: 1, text: '4. Core System Workflow' },
  { id: 'product-batch-structure', level: 1, text: '5. Product & Batch Structure' },
  { id: 'key-features-staff', level: 1, text: '6. Key Features & How-To (Staff Roles)', children: [
    { id: 'inventory-management', level: 2, text: '6.1 Inventory Management' },
    { id: 'inbound-batch-management', level: 2, text: '6.2 Inbound Batch Management' },
    { id: 'batch-shrinkage-tracking', level: 3, text: '6.2.1 Batch Shrinkage Tracking' },
    { id: 'outbound-management', level: 2, text: '6.3 Outbound Management' },
    { id: 'expiry-calendar', level: 2, text: '6.4 Expiry Calendar' },
    { id: 'dashboard-analytics', level: 2, text: '6.5 Dashboard & Analytics' },
    { id: 'notification-system', level: 2, text: '6.6 Notification System' },
    { id: 'user-client-management', level: 2, text: '6.7 User & Client Management' },
    { id: 'data-export-reporting', level: 2, text: '6.8 Data Export & Reporting' },
  ]},
  { id: 'client-portal-features', level: 1, text: '7. Client Portal (Customer) Features', children: [
    { id: 'client-access-auth', level: 2, text: '7.1 Access & Authentication' },
    { id: 'client-product-search', level: 2, text: '7.2 Product Search & Inventory Browsing' },
    { id: 'client-cart-checkout', level: 2, text: '7.3 Cart & Checkout Process' },
    { id: 'client-order-confirmation', level: 2, text: '7.4 Order Confirmation & Client Profile' },
    { id: 'client-voice-assistant', level: 2, text: '7.5 Voice Assistant (Sandra)' },
    { id: 'client-privacy-terms', level: 2, text: '7.6 Privacy & Terms' },
  ]},
  { id: 'mobile-accessibility', level: 1, text: '8. Mobile Experience & Accessibility' },
  { id: 'support-troubleshooting', level: 1, text: '9. Support & Troubleshooting' },
];

const TocLink = ({ item }: { item: TocItem }) => (
  <li className={`my-1 ${item.level === 2 ? 'ml-4' : item.level === 3 ? 'ml-8' : ''}`}>
    <Link href={`#${item.id}`} className="flex items-center text-sm text-foreground hover:text-secondary transition-colors py-1">
      <ChevronRight size={16} className="mr-2 shrink-0 text-secondary/70" />
      <span>{item.text}</span>
    </Link>
    {item.children && item.children.length > 0 && (
      <ul className="pl-2 border-l border-border ml-2">
        {item.children.map(child => <TocLink key={child.id} item={child} />)}
      </ul>
    )}
  </li>
);

export default function TableOfContents() {
  return (
    <Card className="shadow-lg sticky top-8 bg-card border-border">
      <CardHeader>
        <CardTitle className="text-xl text-primary">Table of Contents</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100vh-12rem)] pr-3"> {/* Adjust height as needed */}
          <nav>
            <ul className="space-y-1">
              {tocStructure.map(item => <TocLink key={item.id} item={item} />)}
            </ul>
          </nav>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
