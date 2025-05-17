"use client";
import Image from 'next/image';
import TableOfContents from '@/components/user-guide/table-of-contents';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from '@/components/ui/table';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from '@/components/ui/separator';
import { CheckCircle2, Users, Workflow, Package, Settings2, Smartphone, LifeBuoy, FileText, ShoppingCart, Bell, BarChart3, CalendarDays, LogIn, ExternalLink, Search, Mic } from 'lucide-react';
import en from '@/locales/en';
import it from '@/locales/it';
import { useState } from 'react';
// Helper component for section styling
const GuideSection = ({ id, title, icon: Icon, level = 2, children }: { id: string, title: string, icon?: React.ElementType, level?: number, children: React.ReactNode }) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  const titleSize = level === 1 ? "text-4xl md:text-5xl" : level === 2 ? "text-3xl" : "text-2xl";
  const titleColor = level <= 2 ? "text-primary" : "text-secondary";
  
  return (
    <section id={id} className="py-8 scroll-mt-20">
      <HeadingTag className={`${titleSize} font-bold ${titleColor} mb-6 flex items-center`}>
        {Icon && <Icon size={level === 1 ? 36 : level === 2 ? 30 : 24} className="mr-3 text-secondary" />}
        {title}
      </HeadingTag>
      <div className="space-y-6 text-foreground/90 leading-relaxed">
        {children}
      </div>
    </section>
  );
};

export default function UserGuidePage() {
  const [lang, setLang] = useState<'en' | 'it'>('it');
  const t = lang === 'en' ? en : it;

  const mermaidCode = `
flowchart TD
  %% Warehouse Attendant Flow
  A["Warehouse Attendant<br>Receives New Shipment"] --> B["Create Batch<br>(Inbound Management)<br><em>Incl. Lot No. (Lotto) & Expiry</em>"]
  B --> C["Batch Stored & Linked to Inventory<br><strong>Inventory Levels Updated<br>-- REAL-TIME --</strong>"]
  C --> D[Stock & Expiry Monitored]
  D --> E{Loss or Shrinkage?}
  E -- Yes --> F["Record Shrinkage<br>(Negative Qty Batch)<br><em>Impacts Availability Instantly</em>"]
  F --> C
  E -- No --> G[Batch Available for Orders]

  %% Accounting Staff Flow
  G --> H["Accounting Staff<br>Imports Delivery Notes<br>from Small Invoice"]
  H --> I[Match Delivery Notes<br>to Batches & Inventory]
  I --> J["Reconcile & Generate Invoices<br><em>Reflects Real-Time Stock</em>"]

  %% Client Portal Flow
  K[Client Logs In] --> L["Browse Products<br><em>Shows Real-Time Availability</em>"]
  L --> M[Place Order]
  M --> G

  %% Relationships & Reporting
  J --> N["Inventory & Financial Reports<br><em>Based on Real-Time Data</em>"]
  
  C -.-> L 
  %% Inventory updates affect what clients see
  
  G -.-> L 
  %% Batch availability affects what clients see

  %% Legend
  subgraph Legend
    direction LR
    L1[Real-Time Update Point]
    L2[Lot Number Entry]
    L3[User Action]
    L4[System Process/Data]
    L5{Decision Point}
  end
  style Legend fill:#f9f9f9,stroke:#ccc,stroke-width:1px
  `;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-12 text-center">
          <div className="flex justify-end mb-4">
            <button
              className={`px-4 py-2 rounded-l ${lang === 'en' ? 'bg-primary text-white' : 'bg-muted text-foreground'}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
            <button
              className={`px-4 py-2 rounded-r ${lang === 'it' ? 'bg-primary text-white' : 'bg-muted text-foreground'}`}
              onClick={() => setLang('it')}
            >
              IT
            </button>
          </div>
          <Image
            src="/top1200X400_banner.jpg"
            alt="Chefland Warehouse Banner"
            width={1200}
            height={400}
            className="w-full max-h-[400px] object-cover rounded-xl shadow-2xl mb-8"
            data-ai-hint="food warehouse"
            priority
          />
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">{t.main_title}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">{t.main_subtitle}</p>
        </header>

        <Separator className="my-12" />

        <div className="flex flex-col lg:flex-row lg:gap-12">
          <aside className="w-full lg:w-1/4 lg:sticky lg:top-8 self-start mb-8 lg:mb-0">
            <TableOfContents />
          </aside>

          <main className="w-full lg:w-3/4 space-y-10">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-primary flex items-center">
                  <Bell size={28} className="mr-3 text-secondary"/> {t.welcome}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/90 leading-relaxed">
                <p>This guide will help you navigate and utilize the Chefland Inventory Management System to efficiently manage your food service inventory, ensure food safety through meticulous batch and expiry tracking, and streamline your operations.</p>
              </CardContent>
            </Card>

            <GuideSection id="introduction" title={t.introduction_title} icon={CheckCircle2}>
              <p>{t.introduction_body}</p>
              <ul className="list-none space-y-3 pl-0">
                {[
                  { icon: FileText, text: t.introduction_points[0] },
                  { icon: BarChart3, text: t.introduction_points[1] },
                  { icon: Settings2, text: t.introduction_points[2] },
                  { icon: Search, text: t.introduction_points[3] },
                  { icon: Workflow, text: t.introduction_points[4] }
                ].map(item => (
                  <li key={item.text.substring(0,20)} className="flex items-start p-3 bg-muted/50 rounded-md shadow-sm">
                    <item.icon className="text-secondary mr-3 mt-1 shrink-0" size={20} />
                    <span dangerouslySetInnerHTML={{ __html: item.text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary">$1</strong>') }} />
                  </li>
                ))}
              </ul>
              <p>{t.introduction_end}</p>
            </GuideSection>

            <GuideSection id="getting-started" title={t.getting_started_title} icon={LogIn}>
              <GuideSection id="logging-in" title={t.logging_in_title} level={3}>
                <p>{t.logging_in_body}</p>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                  {t.logging_in_steps.map((step: string, idx: number) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: step }} />
                  ))}
                </ol>
                <Image src="/Logging_in.jpg" alt="CIMS Login Screen" width={600} height={300} className="my-4 rounded-lg shadow-md border" data-ai-hint="login screen" />
                <p dangerouslySetInnerHTML={{ __html: t.logging_in_help }} />
              </GuideSection>
              <GuideSection id="navigating-cims" title={t.navigating_cims_title} level={3}>
                <p>{t.navigating_cims_body}</p>
                <Image src="/2.2_2.2 Navigating_CIMS.jpg" alt="CIMS Dashboard Navigation" width={700} height={400} className="my-4 rounded-lg shadow-md border" data-ai-hint="app dashboard navigation" />
                <p dangerouslySetInnerHTML={{ __html: t.navigating_cims_mobile }} />
              </GuideSection>
            </GuideSection>

            <GuideSection id="roles-permissions" title={t.roles_permissions_title} icon={Users}>
              <p>{t.roles_permissions_body}</p>
              <div className="overflow-x-auto">
                <Table className="mt-4 min-w-full">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[150px] font-semibold text-primary">{t.roles_permissions_table.role}</TableHead>
                      <TableHead className="font-semibold text-primary">{t.roles_permissions_table.responsibilities}</TableHead>
                      <TableHead className="font-semibold text-primary">{t.roles_permissions_table.restrictions}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {t.roles_permissions_table.rows.map((row: any) => (
                      <TableRow key={row.role}>
                        <TableCell className="font-medium text-secondary">{row.role}</TableCell>
                        <TableCell>{row.responsibilities}</TableCell>
                        <TableCell>{row.restrictions}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </GuideSection>

            <GuideSection id="core-workflow" title={t.core_workflow_title} icon={Workflow}>
              <p>{t.core_workflow_body}</p>
              <img
                src={lang === 'it' ? "/CIMS_flowchart_IT.svg" : "/CIMS_flowchart.svg"}
                alt={t.core_workflow_img_alt}
                width={700}
                height={1793}
                className="my-4 w-full max-w-[700px] h-auto rounded-lg shadow-md border mx-auto"
                data-ai-hint="workflow diagram"
                loading="eager"
              />
            </GuideSection>

            <GuideSection id="product-batch-structure" title={t.product_batch_structure_title} icon={Package}>
              <p>{t.product_batch_structure_body}</p>
              <p className="font-semibold mt-2">{t.product_batch_structure_example}</p>
              <div className="overflow-x-auto">
                <Table className="mt-4 min-w-full">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold text-primary">{t.product_batch_structure_table.field}</TableHead>
                      <TableHead className="font-semibold text-primary">{t.product_batch_structure_table.value}</TableHead>
                      <TableHead className="font-semibold text-primary">{t.product_batch_structure_table.description}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {t.product_batch_structure_table.rows.map((row: any) => (
                      <TableRow key={row.field}>
                        <TableCell><strong className="text-primary">{row.field}</strong></TableCell>
                        <TableCell>{row.value}</TableCell>
                        <TableCell>{row.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <p className="mt-2 text-sm text-muted-foreground italic">{t.product_batch_structure_note}</p>
            </GuideSection>

            <GuideSection id="key-features-staff" title={t.key_features_staff_title} icon={Settings2}>
              <GuideSection id="inventory-management" title={t.inventory_management_title} level={3}>
                <p className="italic text-muted-foreground">{t.inventory_management_roles}</p>
                <p>{t.inventory_management_body}</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  {t.inventory_management_points.map((point: string, idx: number) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>
                <Image src="/6.1_Inventory_Management.png" alt="Inventory Module View" width={720} height={490} className="my-4 rounded-lg shadow-md border" data-ai-hint="inventory list" />
                <p className="font-semibold mt-4">{t.inventory_management_add_title}</p>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                  {t.inventory_management_add_steps.map((step: string | string[], idx: number) => {
                    if (Array.isArray(step)) {
                      return (
                        <ul className="list-disc list-inside space-y-1 pl-6 mt-1" key={idx}>
                          {step.map((sub: string, i: number) => (
                            <li key={i} dangerouslySetInnerHTML={{ __html: sub }} />
                          ))}
                        </ul>
                      );
                    }
                    return <li key={idx} dangerouslySetInnerHTML={{ __html: step }} />;
                  })}
                </ol>
                <Image src="/Editing_Product.png" alt="Editing Product" width={715} height={495} className="my-4 rounded-lg shadow-md border" data-ai-hint="editing product" />
                <p className="font-semibold mt-4">{t.inventory_management_edit_title}</p>
                <p>{t.inventory_management_edit_body}</p>
                <p className="font-semibold mt-4">{t.inventory_management_csv_title}</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  {t.inventory_management_csv_points.map((point: string, idx: number) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>
              </GuideSection>

              <GuideSection id="inbound-batch-management" title={t.inbound_batch_management_title} level={3}>
                <p className="italic text-muted-foreground">{t.inbound_batch_management_roles}</p>
                <p>{t.inbound_batch_management_body}</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  {t.inbound_batch_management_points.map((point: string, idx: number) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>
                <Image src="/6.2_Inbound_Batches.png" alt="Inbound Batches" width={700} height={351}  className="my-4 rounded-lg shadow-md border" data-ai-hint="batch list" />
                <p className="font-semibold mt-4">{t.inbound_batch_management_add_title}</p>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                  {t.inbound_batch_management_add_steps.map((step: string | string[], idx: number) => {
                    if (Array.isArray(step)) {
                      return (
                        <ul className="list-disc list-inside space-y-1 pl-6 mt-1" key={idx}>
                          {step.map((sub: string, i: number) => (
                            <li key={i} dangerouslySetInnerHTML={{ __html: sub }} />
                          ))}
                        </ul>
                      );
                    }
                    return <li key={idx} dangerouslySetInnerHTML={{ __html: step }} />;
                  })}
                </ol>
                <Image src="/Add_batch.png" alt="Add Batch Form" width={538} height={715} className="my-4 rounded-lg shadow-md border" data-ai-hint="add batch form" />
                <p className="font-semibold mt-4">{t.inbound_batch_management_edit_title}</p>
                <p>{t.inbound_batch_management_edit_body}</p>
                <p className="font-semibold mt-4">{t.inbound_batch_management_view_title}</p>
                <p dangerouslySetInnerHTML={{ __html: t.inbound_batch_management_view_body }} />
                
                <GuideSection id="batch-shrinkage-tracking" title={t.batch_shrinkage_tracking_title} level={3}>
                  <p className="italic text-muted-foreground">{t.batch_shrinkage_tracking_roles}</p>
                  <p>{t.batch_shrinkage_tracking_body}</p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    {t.batch_shrinkage_tracking_points.map((point: string, idx: number) => (
                      <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
                    ))}
                  </ul>
                  <p className="font-semibold mt-4">{t.batch_shrinkage_tracking_howto_title}</p>
                  <ol className="list-decimal list-inside space-y-2 pl-4">
                    {t.batch_shrinkage_tracking_howto_steps.map((step: string, idx: number) => (
                      <li key={idx} dangerouslySetInnerHTML={{ __html: step }} />
                    ))}
                  </ol>
                  <Image src="/Shrinkage.png" alt="Add Shrinkage Form" width={536} height={990} className="my-4 rounded-lg shadow-md border" data-ai-hint="add shrinkage form" />
                  <p className="font-semibold mt-4">{t.batch_shrinkage_tracking_system_title}</p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    {t.batch_shrinkage_tracking_system_points.map((point: string, idx: number) => (
                      <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
                    ))}
                  </ul>
                </GuideSection>
              </GuideSection>

              <GuideSection id="outbound-management" title={t.outbound_management_title} level={3} icon={ShoppingCart}>
                <p className="italic text-muted-foreground">{t.outbound_management_roles}</p>
                <p>{t.outbound_management_body}</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  {t.outbound_management_points.map((point: string, idx: number) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>
                <Image src="/Outbound.png" alt="Orders/Invoices View" width={1031} height={485} className="my-4 rounded-lg shadow-md border" data-ai-hint="invoice list" />
                <p className="font-semibold mt-4">{t.outbound_management_add_title}</p>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                  {t.outbound_management_add_steps.map((step: string | string[], idx: number) => {
                    if (Array.isArray(step)) {
                      return (
                        <ul className="list-disc list-inside space-y-1 pl-6 mt-1" key={idx}>
                          {step.map((sub: string, i: number) => (
                            <li key={i} dangerouslySetInnerHTML={{ __html: sub }} />
                          ))}
                        </ul>
                      );
                    }
                    return <li key={idx} dangerouslySetInnerHTML={{ __html: step }} />;
                  })}
                </ol>
                <Image src="/DN.png" alt="Create Invoice Item Allocation" width={914} height={432} className="my-4 rounded-lg shadow-md border" data-ai-hint="create invoice items" />
                <p className="font-semibold mt-4">{t.outbound_management_integration_title}</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  {t.outbound_management_integration_points.map((point: string | string[], idx: number) => {
                    if (Array.isArray(point)) {
                      return (
                        <ul className="list-disc list-inside space-y-1 pl-6 mt-1" key={idx}>
                          {point.map((sub: string, i: number) => (
                            <li key={i} dangerouslySetInnerHTML={{ __html: sub }} />
                          ))}
                        </ul>
                      );
                    }
                    return <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />;
                  })}
                </ul>
              </GuideSection>

              <GuideSection id="expiry-calendar" title={t.expiry_calendar_title} level={3} icon={CalendarDays}>
                <p className="italic text-muted-foreground">{t.expiry_calendar_roles}</p>
                <p>{t.expiry_calendar_body}</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  {t.expiry_calendar_points.map((point: string | string[], idx: number) => {
                    if (Array.isArray(point)) {
                      return (
                        <ul className="list-disc list-inside space-y-1 pl-6 mt-1" key={idx}>
                          {point.map((sub: string, i: number) => (
                            <li key={i} dangerouslySetInnerHTML={{ __html: sub }} />
                          ))}
                        </ul>
                      );
                    }
                    return <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />;
                  })}
                </ul>
                <Image src="/Calandar.png" alt="Expiry Calendar View" width={953} height={521} className="my-4 rounded-lg shadow-md border" data-ai-hint="expiry calendar" />
              </GuideSection>

              <GuideSection id="dashboard-analytics" title={t.dashboard_analytics_title} level={3} icon={BarChart3}>
                <p className="italic text-muted-foreground">{t.dashboard_analytics_roles}</p>
                <p>{t.dashboard_analytics_body}</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  {t.dashboard_analytics_points.map((point: string | string[], idx: number) => {
                    if (Array.isArray(point)) {
                      return (
                        <ul className="list-disc list-inside space-y-1 pl-6 mt-1" key={idx}>
                          {point.map((sub: string, i: number) => (
                            <li key={i} dangerouslySetInnerHTML={{ __html: sub }} />
                          ))}
                        </ul>
                      );
                    }
                    return <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />;
                  })}
                </ul>
                <Image src="/dashboard.png" alt="CIMS Dashboard Analytics" width={1014} height={599} className="my-4 rounded-lg shadow-md border" data-ai-hint="analytics dashboard" />
              </GuideSection>

              <GuideSection id="notification-system" title={t.notification_system_title} level={3} icon={Bell}>
                <p className="italic text-muted-foreground">{t.notification_system_roles}</p>
                <p>{t.notification_system_body}</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  {t.notification_system_points.map((point: string | string[], idx: number) => {
                    if (Array.isArray(point)) {
                      return (
                        <ul className="list-disc list-inside space-y-1 pl-6 mt-1" key={idx}>
                          {point.map((sub: string, i: number) => (
                            <li key={i} dangerouslySetInnerHTML={{ __html: sub }} />
                          ))}
                        </ul>
                      );
                    }
                    return <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />;
                  })}
                </ul>
                <Image src="/bell.jpg" alt="Notification Panel" width={400} height={300} className="my-4 rounded-lg shadow-md border" data-ai-hint="notification panel" />
              </GuideSection>

              <GuideSection id="user-client-management" title={t.user_client_management_title} level={3} icon={Users}>
                <p className="italic text-muted-foreground">{t.user_client_management_roles}</p>
                <p>{t.user_client_management_body}</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  {t.user_client_management_points.map((point: string | string[], idx: number) => {
                    if (Array.isArray(point)) {
                      return (
                        <ul className="list-disc list-inside space-y-1 pl-6 mt-1" key={idx}>
                          {point.map((sub: string, i: number) => (
                            <li key={i} dangerouslySetInnerHTML={{ __html: sub }} />
                          ))}
                        </ul>
                      );
                    }
                    return <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />;
                  })}
                </ul>
              </GuideSection>

              <GuideSection id="data-export-reporting" title={t.data_export_reporting_title} level={3} icon={ExternalLink}>
                <p className="italic text-muted-foreground">{t.data_export_reporting_roles}</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  {t.data_export_reporting_points.map((point: string, idx: number) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>
              </GuideSection>
            </GuideSection>

            <GuideSection id="client-portal-features" title={t.client_portal_features_title} icon={Users}>
              <p>{t.client_portal_features_body}</p>
              <GuideSection id="client-access-auth" title={t.client_access_auth_title} level={3}>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  {t.client_access_auth_points.map((point: string, idx: number) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>
              </GuideSection>
              <GuideSection id="client-product-search" title={t.client_product_search_title} level={3}>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  {t.client_product_search_points.map((point: string, idx: number) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>
                <Image src="/Search.png" alt="Client Portal Product Search" width={656} height={400} className="my-4 rounded-lg shadow-md border" data-ai-hint="client portal search" />
              </GuideSection>
              <GuideSection id="client-cart-checkout" title={t.client_cart_checkout_title} level={3}>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  {t.client_cart_checkout_points.map((point: string, idx: number) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>
                <Image src="/Order.png" alt="Client Portal Cart & Checkout" width={600} height={765} className="my-4 rounded-lg shadow-md border" data-ai-hint="client portal cart" />
              </GuideSection>
              <GuideSection id="client-order-confirmation" title={t.client_order_confirmation_title} level={3}>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  {t.client_order_confirmation_points.map((point: string | string[], idx: number) => {
                    if (Array.isArray(point)) {
                      return (
                        <ul className="list-disc list-inside space-y-1 pl-6 mt-1" key={idx}>
                          {point.map((sub: string, i: number) => (
                            <li key={i} dangerouslySetInnerHTML={{ __html: sub }} />
                          ))}
                        </ul>
                      );
                    }
                    return <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />;
                  })}
                </ul>
              </GuideSection>
              <GuideSection id="client-voice-assistant" title={t.client_voice_assistant_title} level={3} icon={Mic}>
                <p>{t.client_voice_assistant_body}</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  {t.client_voice_assistant_points.map((point: string | string[], idx: number) => {
                    if (Array.isArray(point)) {
                      return (
                        <ul className="list-disc list-inside space-y-1 pl-6 mt-1" key={idx}>
                          {point.map((sub: string, i: number) => (
                            <li key={i} dangerouslySetInnerHTML={{ __html: sub }} />
                          ))}
                        </ul>
                      );
                    }
                    return <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />;
                  })}
                </ul>
                <Image src="/Client.png" alt="Client Portal Voice Assistant (Sandra)" width={656} height={400} className="my-4 rounded-lg shadow-md border" data-ai-hint="voice assistant interface" />
              </GuideSection>
              <GuideSection id="client-privacy-terms" title={t.client_privacy_terms_title} level={3}>
                <p>{t.client_privacy_terms_body}</p>
              </GuideSection>
            </GuideSection>

            <GuideSection id="mobile-accessibility" title={t.mobile_accessibility_title} icon={Smartphone}>
              <p>{t.mobile_accessibility_body}</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                {t.mobile_accessibility_points.map((point: string | string[], idx: number) => {
                  if (Array.isArray(point)) {
                    return (
                      <ul className="list-disc list-inside space-y-1 pl-6 mt-1" key={idx}>
                        {point.map((sub: string, i: number) => (
                          <li key={i} dangerouslySetInnerHTML={{ __html: sub }} />
                        ))}
                      </ul>
                    );
                  }
                  return <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />;
                })}
              </ul>
              <Image src="/hand_mobile.png" alt={t.mobile_accessibility_img_alt} width={370} height={565} className="my-4 rounded-lg shadow-md border" data-ai-hint="mobile app view" />
            </GuideSection>

            <GuideSection id="support-troubleshooting" title={t.support_troubleshooting_title} icon={LifeBuoy}>
              <p>{t.support_troubleshooting_body}</p>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                {t.support_troubleshooting_steps.map((step: string, idx: number) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: step }} />
                ))}
              </ol>
              <Alert className="mt-6 border-secondary/50 bg-secondary/10">
                <LifeBuoy className="h-5 w-5 text-secondary" />
                <AlertTitle className="text-secondary">{t.support_troubleshooting_alert_title}</AlertTitle>
                <AlertDescription className="text-secondary/90">
                  {t.support_troubleshooting_alert_desc}
                </AlertDescription>
              </Alert>
            </GuideSection>

            <Separator className="my-12" />
            
            <div className="text-center text-muted-foreground italic py-8">
              <p>{t.closing_message}</p>
            </div>
          </main>
        </div>

        <footer className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p dangerouslySetInnerHTML={{ __html: t.footer_copyright.replace('{year}', new Date().getFullYear().toString()) }} />
          <p>{t.footer_version}</p>
        </footer>
      </div>
    </div>
  );
}
