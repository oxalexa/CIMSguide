
import Image from 'next/image';
import TableOfContents from '@/components/user-guide/table-of-contents';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from '@/components/ui/table';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from '@/components/ui/separator';
import { CheckCircle2, Users, Workflow, Package, Settings2, Smartphone, LifeBuoy, FileText, ShoppingCart, Bell, BarChart3, CalendarDays, LogIn, ExternalLink, Search, Mic } from 'lucide-react';

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
          <Image 
            src="https://placehold.co/1200x400.png" 
            alt="Chefland Warehouse Interior" 
            width={1200} 
            height={400}
            className="w-full max-h-[400px] object-cover rounded-xl shadow-2xl mb-8"
            data-ai-hint="food warehouse"
            priority
          />
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">Chefland Inventory Management System (CIMS) v1.10</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">User Guide (15 May 2025)</p>
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
                  <Bell size={28} className="mr-3 text-secondary"/> Welcome to CIMS!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/90 leading-relaxed">
                <p>This guide will help you navigate and utilize the Chefland Inventory Management System to efficiently manage your food service inventory, ensure food safety through meticulous batch and expiry tracking, and streamline your operations.</p>
              </CardContent>
            </Card>

            <GuideSection id="introduction" title="1. Introduction: Why CIMS?" icon={CheckCircle2}>
              <p>CIMS is a comprehensive solution designed for the unique demands of the food service industry. Its core strengths include:</p>
              <ul className="list-none space-y-3 pl-0">
                {[
                  { icon: FileText, text: "**Enhanced Food Safety:** Precise tracking of batch numbers (lots) and expiry dates from inbound receipt to outbound delivery, enabling quick identification and management of products." },
                  { icon: BarChart3, text: "**Waste Reduction:** Proactive alerts and visual tools like the Expiry Calendar highlight items nearing expiry, allowing for timely stock rotation and minimizing spoilage." },
                  { icon: Settings2, text: "**Operational Efficiency:** Streamlined workflows for receiving goods (inbound batch management), managing stock levels, processing orders, and integrating with accounting systems like Small Invoice." },
                  { icon: Search, text: "**Real-Time Visibility:** Accurate, up-to-the-minute inventory data across all locations empowers informed decision-making for purchasing, sales, and operational planning." },
                  { icon: Workflow, text: "**Full Traceability:** Maintain a complete, auditable history for every item and batch, crucial for quality control, compliance, and rapid response in the event of a product recall." }
                ].map(item => (
                  <li key={item.text.substring(0,20)} className="flex items-start p-3 bg-muted/50 rounded-md shadow-sm">
                    <item.icon className="text-secondary mr-3 mt-1 shrink-0" size={20} />
                    <span dangerouslySetInnerHTML={{ __html: item.text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary">$1</strong>') }} />
                  </li>
                ))}
              </ul>
              <p>This guide is structured to help you understand features relevant to your specific role and master the CIMS workflows, emphasizing the value CIMS brings to your daily tasks and overall business.</p>
            </GuideSection>

            <GuideSection id="getting-started" title="2. Getting Started" icon={LogIn}>
              <GuideSection id="logging-in" title="2.1 Logging In" level={3}>
                <p>All users access CIMS via secure Google Sign-In.</p>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                  <li>Navigate to the CIMS web address provided by your administrator.</li>
                  <li>Click the <strong>"Sign in with Google"</strong> button.</li>
                  <li>Select your authorized Google account from the list.</li>
                </ol>
                <Image src="https://placehold.co/600x300.png" alt="CIMS Login Screen" width={600} height={300} className="my-4 rounded-lg shadow-md border" data-ai-hint="login screen" />
                <p>If you encounter any issues logging in or require access, please contact your system administrator or <a href="mailto:info@chefland.ch" className="text-secondary hover:underline">info@chefland.ch</a>.</p>
              </GuideSection>
              <GuideSection id="navigating-cims" title="2.2 Navigating CIMS" level={3}>
                <p>Once logged in, you will be greeted by the CIMS dashboard or a relevant landing page based on your role. The main navigation menu provides access to different modules and features.</p>
                <Image src="https://placehold.co/700x400.png" alt="CIMS Dashboard Navigation" width={700} height={400} className="my-4 rounded-lg shadow-md border" data-ai-hint="app dashboard navigation" />
                <p>CIMS is <strong>mobile-first and responsive</strong>, so you can use it on desktop, tablet, or smartphone.</p>
              </GuideSection>
            </GuideSection>

            <GuideSection id="roles-permissions" title="3. Understanding Your Role & Permissions" icon={Users}>
              <p>CIMS uses role-based access control (RBAC). Your assigned role dictates which features you can access and what actions you can perform.</p>
              <div className="overflow-x-auto">
                <Table className="mt-4 min-w-full">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[150px] font-semibold text-primary">Role</TableHead>
                      <TableHead className="font-semibold text-primary">Key Responsibilities & Access Highlights</TableHead>
                      <TableHead className="font-semibold text-primary">Core Restrictions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { role: "Admin", responsibilities: "Full system oversight, user & client management, complete access to all features, dashboard & analytics.", restrictions: "None." },
                      { role: "Invoice", responsibilities: "Manages inventory, creates/processes batches, handles invoices/delivery notes, full dashboard access.", restrictions: "Cannot manage users or system settings." },
                      { role: "Inventory", responsibilities: "Manages master inventory data, full access to batch creation & tracking.", restrictions: "No access to Invoices, Delivery Notes, or Dashboard." },
                      { role: "Inbound", responsibilities: "Focus on batch receiving & processing (full access), view-only access to master inventory.", restrictions: "No access to Invoices, Dashboard, or user management." },
                      { role: "Guest", responsibilities: "View-only access to Inventory and Batches.", restrictions: "No operational capabilities, no Dashboard/Invoices." },
                      { role: "Client", responsibilities: "Access to the dedicated Customer Ordering Portal for browsing products and placing orders.", restrictions: "No access to internal management or inventory features." }
                    ].map(row => (
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

            <GuideSection id="core-workflow" title="4. Core System Workflow: From Goods In to Customer Out" icon={Workflow}>
              <p>Understanding the flow of inventory and information within CIMS is key to utilizing it effectively. The following diagram illustrates the typical lifecycle of a product as it moves through your operations, highlighting interactions for different roles.</p>
              <Image src="https://placehold.co/800x600.png" alt="Core System Workflow Diagram" width={800} height={600} className="my-4 w-full rounded-lg shadow-md border" data-ai-hint="workflow diagram" />
              <details className="bg-muted/50 p-4 rounded-lg shadow-sm">
                <summary className="cursor-pointer text-secondary font-medium hover:underline">View Mermaid Diagram Code</summary>
                <pre className="bg-background p-3 mt-2 rounded-md overflow-x-auto text-sm"><code className="language-mermaid">{mermaidCode}</code></pre>
              </details>
            </GuideSection>

            <GuideSection id="product-batch-structure" title="5. Product & Batch Structure" icon={Package}>
              <p>To ensure traceability and compliance, every product and batch in CIMS is defined by a set of key fields. Here is an outline of a typical batch record:</p>
              <p className="font-semibold mt-2">Batch Record Example (for "Pasta di Aragona - Fusilloni Graganano IGP 500gr"):</p>
              <div className="overflow-x-auto">
                <Table className="mt-4 min-w-full">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold text-primary">Field</TableHead>
                      <TableHead className="font-semibold text-primary">Example Value</TableHead>
                      <TableHead className="font-semibold text-primary">Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { field: "SKU", value: "CFU0500", description: "Unique product identifier" },
                      { field: "Item Name", value: "Pasta di Aragona - Fusilloni Graganano IGP 500gr", description: "Product name from inventory" },
                      { field: "Batch Number", value: "324029", description: "Supplier or internal lot/batch number" },
                      { field: "Quantity", value: "20", description: "Number of units (if not weight-based)" },
                      { field: "Weight (kg)", value: "", description: "Weight (if weight-based; blank if not)" },
                      { field: "Available Amount", value: "19", description: "Current available units or weight" },
                      { field: "Expiry Date", value: "2027-01-01", description: "Date after which the batch should not be used" },
                      { field: "Date Received", value: "2024-12-27", description: "Date batch was received" },
                      { field: "Warehouse", value: "(+25°C)", description: "Storage location" },
                      { field: "Purchase Cost", value: "CHF 0.00", description: "Cost per unit or per kg (for audit/valuation)" },
                      { field: "Shrinkage Reason", value: "", description: "If this is a shrinkage batch, reason is shown" },
                      { field: "Base ID", value: "324029", description: "Links shrinkage batch to original batch" },
                      { field: "Notes", value: "", description: "Any additional notes entered by staff" }
                    ].map(row => (
                      <TableRow key={row.field}>
                        <TableCell><strong className="text-primary">{row.field}</strong></TableCell>
                        <TableCell>{row.value}</TableCell>
                        <TableCell>{row.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <p className="mt-2 text-sm text-muted-foreground italic">*You can view all these details by clicking on a batch in the Batches module.</p>
            </GuideSection>

            <GuideSection id="key-features-staff" title="6. Key Features & How-To (Staff Roles)" icon={Settings2}>
              <GuideSection id="inventory-management" title="6.1 Inventory Management" level={3}>
                <p className="italic text-muted-foreground">(Primary Users: Admin, Invoice, Inventory Roles; View-Only Access: Inbound, Guest Roles)</p>
                <p>The Inventory module is your central repository for all product master data.</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Accessing:</strong> Navigate to <strong>"Inventory"</strong> from the main menu.</li>
                  <li><strong>Viewing Products:</strong> Products are displayed in a responsive table (desktop) or card (mobile) format. Utilize search, sort (by SKU, name, etc.), and filter options to quickly find items.</li>
                </ul>
                <Image src="https://placehold.co/700x350.png" alt="Inventory Module View" width={700} height={350} className="my-4 rounded-lg shadow-md border" data-ai-hint="inventory list" />
                <p className="font-semibold mt-4">Adding a New Product (Master Item):</p>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                  <li>Click the <strong>"Add Product"</strong> or <strong>"+"</strong> icon.</li>
                  <li>Complete the form:
                    <ul className="list-disc list-inside space-y-1 pl-6 mt-1">
                      <li><code>SKU</code>: Unique identifier. Follow validation rules (letters, numbers, hyphens; no spaces/special characters).</li>
                      <li><code>Item Name</code>: Descriptive name of the product (e.g., "Pasta di Aragona - Fusilloni Graganano IGP 500gr").</li>
                      <li><code>Is Weight-Based</code>: Check if sold by weight (e.g., cheese, meat) rather than units.</li>
                      <li><code>Description</code>: Additional details about the product.</li>
                      <li><code>VAT Rate</code>: Applicable value-added tax rate.</li>
                    </ul>
                  </li>
                  <li>Save the product. This item now exists in your master list, ready for batches to be associated with it.</li>
                </ol>
                <Image src="https://placehold.co/600x450.png" alt="Add Product Form" width={600} height={450} className="my-4 rounded-lg shadow-md border" data-ai-hint="add product form" />
                <p className="font-semibold mt-4">Editing a Product:</p>
                <p>Locate the product, click the "Edit" icon, modify the necessary details, and save.</p>
                <p className="font-semibold mt-4">CSV Import/Export:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Import:</strong> For bulk adding or updating products, use the <strong>"Import Inventory"</strong> button. Download the template CSV, populate it, and upload.</li>
                    <li><strong>Export:</strong> To get a full list of your inventory items, use the <strong>"Export Table"</strong> or <strong>"Export to CSV"</strong> button.</li>
                </ul>
              </GuideSection>

              <GuideSection id="inbound-batch-management" title="6.2 Inbound Batch Management (Receiving Goods)" level={3}>
                <p className="italic text-muted-foreground">(Primary Users: Admin, Invoice, Inventory, Inbound Roles; View-Only Access: Guest Role)</p>
                <p>This is where you record every new shipment of products that arrives at your facility. Each distinct delivery with its own expiry date and/or lot number should be entered as a separate batch.</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Accessing:</strong> Navigate to <strong>"Batches"</strong> from the main menu.</li>
                </ul>
                <Image src="https://placehold.co/700x350.png" alt="Batches Module View" width={700} height={350} className="my-4 rounded-lg shadow-md border" data-ai-hint="batch list" />
                <p className="font-semibold mt-4">Creating a New Batch:</p>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                  <li>Click <strong>"Add Batch"</strong>.</li>
                  <li>Fill in the batch details:
                    <ul className="list-disc list-inside space-y-1 pl-6 mt-1">
                      <li><code>SKU</code>: Select the product from your master inventory list.</li>
                      <li><code>Batch Number</code>: Enter the supplier's batch/lot number. If none is provided, use a consistent internal numbering system.</li>
                      <li><code>Quantity</code> / <code>Weight (Kilos)</code>: Enter the amount received.</li>
                      <li><code>Expiry Date</code>: Enter the product's expiry date.</li>
                      <li><code>Date Received</code>: Defaults to the current date but can be adjusted.</li>
                      <li><code>Warehouse</code>: Select the storage location.</li>
                    </ul>
                  </li>
                  <li>Save the batch. This action immediately updates the available stock for the linked SKU.</li>
                </ol>
                <Image src="https://placehold.co/600x500.png" alt="Add Batch Form" width={600} height={500} className="my-4 rounded-lg shadow-md border" data-ai-hint="add batch form" />
                <p className="font-semibold mt-4">Editing a Batch:</p>
                <p>Find the batch in the list, click its "Edit" icon, make corrections, and save.</p>
                <p className="font-semibold mt-4">Viewing Batches:</p>
                <p>Batches are displayed in responsive views, typically sorted by <code>Date Received</code> (newest first). You can search, filter, and sort by other criteria.</p>
                
                <GuideSection id="batch-shrinkage-tracking" title="6.2.1 Batch Shrinkage Tracking" level={3}>
                  <p className="italic text-muted-foreground">(Accessible to: Admin, Invoice, Inventory, Inbound Roles)</p>
                  <p>Recording shrinkage accurately reflects true inventory levels and helps identify areas of loss.</p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Purpose:</strong> To account for any inventory that is lost or becomes unusable before being sold or consumed. Common reasons include: Damaged, Expired, Lost, Spoilage, Theft, Supplier Defects, Other.</li>
                  </ul>
                  <p className="font-semibold mt-4">How to Record Shrinkage:</p>
                  <ol className="list-decimal list-inside space-y-2 pl-4">
                    <li>Click <strong>"Add Shrinkage"</strong> on the "Batches" page or within a batch's details.</li>
                    <li><strong>Search for Original Batch:</strong> Use the batch number or SKU to find the parent batch. The system will display its current available quantity.</li>
                    <li><strong>Enter Loss Amount:</strong> Input the quantity or weight lost (as a positive number).</li>
                    <li><strong>Select Shrinkage Reason:</strong> Choose the most appropriate reason from the predefined list.</li>
                    <li>Add optional notes for further clarification.</li>
                    <li>Submit the shrinkage entry.</li>
                  </ol>
                  <Image src="https://placehold.co/600x400.png" alt="Add Shrinkage Form" width={600} height={400} className="my-4 rounded-lg shadow-md border" data-ai-hint="add shrinkage form" />
                  <p className="font-semibold mt-4">System Action:</p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>CIMS generates a <em>new, linked batch record</em> (e.g., <code>SHR-324029-1</code>).</li>
                    <li>The shrinkage batch stores the lost amount as a <strong>negative quantity/weight</strong>.</li>
                    <li>It is linked to the original batch via a <code>base_id</code> field.</li>
                    <li>The available amount of the original SKU is immediately reduced.</li>
                    <li><strong>Balance Calculation:</strong><br />
                      <code>availableAmount = initial_batch_quantity + sum_of_all_related_shrinkage_entries (negative) - sum_of_quantities_used_in_invoices</code>
                    </li>
                  </ul>
                </GuideSection>
              </GuideSection>

              <GuideSection id="outbound-management" title="6.3 Outbound Management: Orders, Delivery Notes, Invoices" level={3} icon={ShoppingCart}>
                <p className="italic text-muted-foreground">(Primary Users: Admin, Invoice Roles)</p>
                <p>This section covers the process of managing stock leaving your facility.</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Accessing:</strong> Navigate to <strong>"Invoices"</strong> or <strong>"Orders"</strong> from the menu.</li>
                </ul>
                <Image src="https://placehold.co/700x350.png" alt="Orders/Invoices View" width={700} height={350} className="my-4 rounded-lg shadow-md border" data-ai-hint="invoice list" />
                <p className="font-semibold mt-4">Creating an Order/Invoice:</p>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                  <li>Click <strong>"Create Invoice"</strong>.</li>
                  <li>Enter customer/company details, the date, and any relevant notes.</li>
                  <li><strong>Adding Items & Allocating Batches:</strong>
                    <ul className="list-disc list-inside space-y-1 pl-6 mt-1">
                      <li>For each item, select the SKU (e.g., "Pasta di Aragona - Fusilloni Graganano IGP 500gr").</li>
                      <li>CIMS displays available batches for that SKU, highlighting those closest to expiry.</li>
                      <li>Enter the quantity/weight required.</li>
                      <li>The system allocates the requested amount from one or more batches, following FIFO logic.</li>
                      <li>Real-time validation prevents over-allocation.</li>
                    </ul>
                  </li>
                  <li>Review and save. This deducts the allocated quantities from the respective batches' available stock.</li>
                </ol>
                <Image src="https://placehold.co/700x500.png" alt="Create Invoice Item Allocation" width={700} height={500} className="my-4 rounded-lg shadow-md border" data-ai-hint="create invoice items" />
                <p className="font-semibold mt-4">Small Invoice Integration (Delivery Notes):</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>CIMS integrates with the Small Invoice API for delivery note processing.</li>
                  <li><strong>Import Process:</strong> Delivery notes can be fetched from Small Invoice. During import:
                    <ul className="list-disc list-inside space-y-1 pl-6 mt-1">
                      <li>SKUs are validated against your CIMS master inventory.</li>
                      <li>Delivery note numbers are sanitized for consistent formatting.</li>
                    </ul>
                  </li>
                  <li><strong>Automated Invoice Creation:</strong> Imported delivery notes can be used to create sales invoices within CIMS, linking them to the correct batches and updating inventory.</li>
                </ul>
              </GuideSection>

              <GuideSection id="expiry-calendar" title="6.4 Expiry Calendar" level={3} icon={CalendarDays}>
                <p className="italic text-muted-foreground">(Primary Users: Admin, Invoice, Inventory Roles)</p>
                <p>A proactive tool for minimizing waste by visualizing product shelf life.</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Accessing:</strong> Navigate to <strong>"Calendar"</strong>.</li>
                    <li><strong>Functionality:</strong>
                      <ul className="list-disc list-inside space-y-1 pl-6 mt-1">
                        <li>Displays a calendar view.</li>
                        <li>Dates with batches expiring on or around them are highlighted.</li>
                        <li>Clicking on a date reveals the specific batches set to expire.</li>
                      </ul>
                    </li>
                </ul>
                <Image src="https://placehold.co/700x450.png" alt="Expiry Calendar View" width={700} height={450} className="my-4 rounded-lg shadow-md border" data-ai-hint="expiry calendar" />
              </GuideSection>

              <GuideSection id="dashboard-analytics" title="6.5 Dashboard & Analytics" level={3} icon={BarChart3}>
                <p className="italic text-muted-foreground">(Primary Users: Admin, Invoice Roles)</p>
                <p>Your central hub for operational insights and key performance indicators (KPIs).</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Accessing:</strong> Navigate to <strong>"Dashboard"</strong>.</li>
                    <li><strong>Key Metrics Displayed:</strong>
                      <ul className="list-disc list-inside space-y-1 pl-6 mt-1">
                        <li>Total inventory value.</li>
                        <li>Breakdown of expiring goods by value and time window (expired, 0-30 days, 31-60 days, 61+ days).</li>
                        <li>Value of expiring goods grouped by warehouse location.</li>
                        <li>Visual charts and reports, such as expiry timeline charts, location-based value breakdowns, and yearly cost analysis.</li>
                      </ul>
                    </li>
                </ul>
                <Image src="https://placehold.co/800x500.png" alt="CIMS Dashboard Analytics" width={800} height={500} className="my-4 rounded-lg shadow-md border" data-ai-hint="analytics dashboard" />
              </GuideSection>

              <GuideSection id="notification-system" title="6.6 Notification System" level={3} icon={Bell}>
                <p className="italic text-muted-foreground">(Relevant for: Admin, Invoice Roles primarily; other roles may receive tailored alerts)</p>
                <p>Stay informed about critical inventory events in real-time.</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Accessing:</strong> Via the <strong>bell icon</strong> in the application header.</li>
                    <li><strong>Notification Types:</strong>
                      <ul className="list-disc list-inside space-y-1 pl-6 mt-1">
                        <li><strong>Expiring Items:</strong> Alerts for batches already expired or expiring soon.</li>
                        <li><strong>New Stock:</strong> Alerts for recently added batches.</li>
                      </ul>
                    </li>
                    <li><strong>Interaction:</strong>
                      <ul className="list-disc list-inside space-y-1 pl-6 mt-1">
                        <li>Clicking the bell icon opens a floating panel with sections for "Expiring Items" and "New Stock."</li>
                        <li>Each section can be expanded/collapsed and marked as read independently.</li>
                        <li>Real-time updates and sound notifications are supported.</li>
                      </ul>
                    </li>
                </ul>
                <Image src="https://placehold.co/400x300.png" alt="Notification Panel" width={400} height={300} className="my-4 rounded-lg shadow-md border" data-ai-hint="notification panel" />
              </GuideSection>

              <GuideSection id="user-client-management" title="6.7 User & Client Management" level={3} icon={Users}>
                <p className="italic text-muted-foreground">(Primary Users: Admin Role Only)</p>
                <p>Manage who has access to CIMS and what they can do.</p>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Accessing:</strong> Navigate to <strong>"Users"</strong> or "Admin" section.</li>
                    <li><strong>Functionality:</strong>
                      <ul className="list-disc list-inside space-y-1 pl-6 mt-1">
                        <li><strong>Staff Users:</strong> Add/edit users, assign roles, activate/deactivate accounts.</li>
                        <li><strong>Client Accounts:</strong> Manage accounts for external clients who access the Customer Portal.</li>
                      </ul>
                    </li>
                </ul>
              </GuideSection>

              <GuideSection id="data-export-reporting" title="6.8 Data Export & Reporting" level={3} icon={ExternalLink}>
                <p className="italic text-muted-foreground">(Available to: Admin, Invoice, Inventory Roles, depending on the specific data)</p>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Most data tables offer an <strong>"Export"</strong> or <strong>"Export to CSV"</strong> button.</li>
                    <li>Download filtered/displayed data for offline analysis or backup.</li>
                    <li>Admins may have access to audit logs and financial report generation tools.</li>
                </ul>
              </GuideSection>
            </GuideSection>

            <GuideSection id="client-portal-features" title="7. Client Portal (Customer) Features" icon={Users}>
              <p>CIMS provides a dedicated, secure portal for your clients.</p>
              <GuideSection id="client-access-auth" title="7.1 Access & Authentication" level={3}>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Clients access the portal via a specific URL.</li>
                    <li>Authentication is via Google Sign-In.</li>
                    <li>Access is strictly limited to users with the "Client" role.</li>
                </ul>
              </GuideSection>
              <GuideSection id="client-product-search" title="7.2 Product Search & Inventory Browsing" level={3}>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Advanced Search:</strong> Search for products by name, SKU, or other attributes (e.g., "Pasta di Aragona - Fusilloni Graganano IGP 500gr").</li>
                    <li><strong>Real-Time Availability:</strong> See up-to-date stock levels, including batch details and expiry dates where applicable.</li>
                    <li><strong>Featured Products:</strong> The portal may highlight items such as those nearing expiry, new arrivals, or promotional products.</li>
                </ul>
                <Image src="https://placehold.co/700x400.png" alt="Client Portal Product Search" width={700} height={400} className="my-4 rounded-lg shadow-md border" data-ai-hint="client portal search" />
              </GuideSection>
              <GuideSection id="client-cart-checkout" title="7.3 Cart & Checkout Process" level={3}>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Cart Management:</strong> Add products to the cart, specifying quantities or weights.</li>
                    <li><strong>Batch-Aware Cart:</strong> The system allocates stock from available batches, following FIFO logic.</li>
                    <li><strong>Checkout Flow:</strong> Review cart, confirm delivery info, accept terms, and submit the order.</li>
                </ul>
                <Image src="https://placehold.co/700x450.png" alt="Client Portal Cart & Checkout" width={700} height={450} className="my-4 rounded-lg shadow-md border" data-ai-hint="client portal cart" />
              </GuideSection>
              <GuideSection id="client-order-confirmation" title="7.4 Order Confirmation & Client Profile (<code>/profile</code>)" level={3}>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Immediate Confirmation:</strong> After order submission, clients see a summary page.</li>
                    <li><strong>Email Notification:</strong> An automated email confirmation is sent.</li>
                    <li><strong>Client Profile & Order History:</strong>
                      <ul className="list-disc list-inside space-y-1 pl-6 mt-1">
                        <li>Clients can view their profile and order history.</li>
                        <li>Order history lists all past orders with order number and date.</li>
                        <li>Clicking an order shows detailed confirmation.</li>
                      </ul>
                    </li>
                </ul>
              </GuideSection>
              <GuideSection id="client-voice-assistant" title="7.5 Voice Assistant (Sandra)" level={3} icon={Mic}>
                <p>Clients can use <strong>Sandra</strong>, the AI-powered voice assistant, directly in the portal.</p>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Natural Conversation:</strong> Speak naturally; Sandra understands queries and requests.</li>
                    <li><strong>Personalized Experience:</strong> Sandra tailors assistance based on your account and past orders.</li>
                    <li><strong>Capabilities:</strong>
                      <ul className="list-disc list-inside space-y-1 pl-6 mt-1">
                        <li><strong>Check Product Availability:</strong> "Sandra, do you have Pasta di Aragona - Fusilloni in stock?"</li>
                        <li><strong>Place Orders:</strong> "Sandra, I'd like to order 10 packs of Pasta di Aragona - Fusilloni."</li>
                        <li><strong>Get Help & Information:</strong> Ask for help with navigation, product details, or order status.</li>
                      </ul>
                    </li>
                    <li><strong>Accessing Sandra:</strong> Look for the microphone icon or "Ask Sandra" button.</li>
                </ul>
                <Image src="https://placehold.co/500x300.png" alt="Client Portal Voice Assistant (Sandra)" width={500} height={300} className="my-4 rounded-lg shadow-md border" data-ai-hint="voice assistant interface" />
              </GuideSection>
              <GuideSection id="client-privacy-terms" title="7.6 Privacy & Terms" level={3}>
                <p>The portal provides links to the <strong>Privacy Policy</strong> and <strong>Terms & Conditions</strong>.</p>
              </GuideSection>
            </GuideSection>

            <GuideSection id="mobile-accessibility" title="8. Mobile Experience & Accessibility" icon={Smartphone}>
              <p>CIMS is built for usability across devices.</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Responsive Design:</strong> All pages and components adapt to desktops, tablets, and mobile phones.</li>
                  <li><strong>Mobile-Optimized Workflows:</strong>
                    <ul className="list-disc list-inside space-y-1 pl-6 mt-1">
                      <li>Inbound (Batch) Management and Inventory have dedicated mobile-friendly interfaces, allowing staff to input data directly from the warehouse floor.</li>
                      <li>The Client Portal is fully mobile-responsive.</li>
                    </ul>
                  </li>
                  <li><strong>Accessibility (A11y):</strong> Keyboard navigation, ARIA labels, and screen reader compatibility are supported.</li>
              </ul>
              <Image src="https://placehold.co/400x600.png" alt="CIMS Mobile View" width={400} height={600} className="my-4 rounded-lg shadow-md border" data-ai-hint="mobile app view" />
            </GuideSection>

            <GuideSection id="support-troubleshooting" title="9. Support & Troubleshooting" icon={LifeBuoy}>
              <p>If you have questions or need help:</p>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                  <li>Consult in-app help sections or tooltips.</li>
                  <li>Contact your internal CIMS system administrator.</li>
                  <li>Email the CIMS support team at: <a href="mailto:info@chefland.ch" className="text-secondary hover:underline"><strong>info@chefland.ch</strong></a></li>
              </ol>
              <Alert className="mt-6 border-secondary/50 bg-secondary/10">
                <LifeBuoy className="h-5 w-5 text-secondary" />
                <AlertTitle className="text-secondary">We're here to help!</AlertTitle>
                <AlertDescription className="text-secondary/90">
                  We are committed to ensuring you have a smooth and productive experience with CIMS.
                </AlertDescription>
              </Alert>
            </GuideSection>

            <Separator className="my-12" />
            
            <div className="text-center text-muted-foreground italic py-8">
              <p>Thank you for using the Chefland Inventory Management System! We trust it will be an invaluable tool in your food service operations.</p>
            </div>
          </main>
        </div>

        <footer className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Chefland. All rights reserved.</p>
          <p>Chefland CIMS Guide v1.10</p>
        </footer>
      </div>
    </div>
  );
}
