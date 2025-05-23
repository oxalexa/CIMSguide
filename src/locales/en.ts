const en = {
  main_title: "Chefland Inventory Management System (CIMS) v1.10",
  main_subtitle: "User Guide (15 May 2025)",
  welcome: "Welcome to CIMS!",
  guide_intro: "This guide will help you navigate and utilize the Chefland Inventory Management System to efficiently manage your food service inventory, ensure food safety through meticulous batch and expiry tracking, and streamline your operations.",
  introduction_title: "1. Introduction: Why CIMS?",
  introduction_body: "CIMS is a comprehensive solution designed for the unique demands of the food service industry. Its core strengths include:",
  introduction_points: [
    "**Enhanced Food Safety:** Precise tracking of batch numbers (lots) and expiry dates from inbound receipt to outbound delivery, enabling quick identification and management of products.",
    "**Waste Reduction:** Proactive alerts and visual tools like the Expiry Calendar highlight items nearing expiry, allowing for timely stock rotation and minimizing spoilage.",
    "**Operational Efficiency:** Streamlined workflows for receiving goods (inbound batch management), managing stock levels, processing orders, and integrating with accounting systems like Small Invoice.",
    "**Real-Time Visibility:** Accurate, up-to-the-minute inventory data across all locations empowers informed decision-making for purchasing, sales, and operational planning.",
    "**Full Traceability:** Maintain a complete, auditable history for every item and batch, crucial for quality control, compliance, and rapid response in the event of a product recall."
  ],
  introduction_end: "This guide is structured to help you understand features relevant to your specific role and master the CIMS workflows, emphasizing the value CIMS brings to your daily tasks and overall business.",
  getting_started_title: "2. Getting Started",
  logging_in_title: "2.1 Logging In",
  logging_in_body: "All users access CIMS via secure Google Sign-In.",
  logging_in_steps: [
    "Navigate to the CIMS web address provided by your administrator.",
    'Click the <strong>"Sign in with Google"</strong> button.',
    "Select your authorized Google account from the list."
  ],
  logging_in_help: 'If you encounter any issues logging in or require access, please contact your system administrator or <a href="mailto:info@chefland.ch" className="text-secondary hover:underline">info@chefland.ch</a>.',
  navigating_cims_title: "2.2 Navigating CIMS",
  navigating_cims_body: "Once logged in, you will be greeted by the CIMS dashboard or a relevant landing page based on your role. The main navigation menu provides access to different modules and features.",
  navigating_cims_mobile: 'CIMS is <strong>mobile-first and responsive</strong>, so you can use it on desktop, tablet, or smartphone.',
  roles_permissions_title: "3. Understanding Your Role & Permissions",
  roles_permissions_body: "CIMS uses role-based access control (RBAC). Your assigned role dictates which features you can access and what actions you can perform.",
  roles_permissions_table: {
    role: "Role",
    responsibilities: "Key Responsibilities & Access Highlights",
    restrictions: "Core Restrictions",
    rows: [
      {
        role: "Admin",
        responsibilities: "Full system oversight, user & client management, complete access to all features, dashboard & analytics.",
        restrictions: "None."
      },
      {
        role: "Invoice",
        responsibilities: "Manages inventory, creates/processes batches, handles invoices/delivery notes, full dashboard access.",
        restrictions: "Cannot manage users or system settings."
      },
      {
        role: "Inventory",
        responsibilities: "Manages master inventory data, full access to batch creation & tracking.",
        restrictions: "No access to Invoices, Delivery Notes, or Dashboard."
      },
      {
        role: "Inbound",
        responsibilities: "Focus on batch receiving & processing (full access), view-only access to master inventory.",
        restrictions: "No access to Invoices, Dashboard, or user management."
      },
      {
        role: "Guest",
        responsibilities: "View-only access to Inventory and Batches.",
        restrictions: "No operational capabilities, no Dashboard/Invoices."
      },
      {
        role: "Client",
        responsibilities: "Access to the dedicated Customer Ordering Portal for browsing products and placing orders.",
        restrictions: "No access to internal management or inventory features."
      }
    ]
  },
  product_batch_structure_title: "5. Product & Batch Structure",
  product_batch_structure_body: "To ensure traceability and compliance, every product and batch in CIMS is defined by a set of key fields. Here is an outline of a typical batch record:",
  product_batch_structure_example: 'Batch Record Example (for "Pasta di Aragona - Fusilloni Graganano IGP 500gr"):',
  product_batch_structure_table: {
    field: "Field",
    value: "Example Value",
    description: "Description",
    rows: [
      { field: "SKU", value: "CFU0500", description: "Unique product identifier" },
      { field: "Item Name", value: "Pasta di Aragona - Fusilloni Graganano IGP 500gr", description: "Product name from inventory" },
      { field: "Batch Number", value: "324029", description: "Supplier or internal lot/batch number" },
      { field: "Quantity", value: "20", description: "Number of units (if not weight-based)" },
      { field: "Weight (kg)", value: "", description: "Weight (if weight-based; blank if not)" },
      { field: "Available Amount", value: "19", description: "Current available units" },
      { field: "Expiry Date", value: "2027-01-01", description: "Date after which the batch should not be used" },
      { field: "Date Received", value: "2024-12-27", description: "Date batch was received" },
      { field: "Warehouse", value: "(+25°C)", description: "Storage location" },
      { field: "Purchase Cost", value: "CHF 0.00", description: "Cost per unit or per kg (for audit/valuation)" },
      { field: "Shrinkage Reason", value: "", description: "If this is a shrinkage batch, reason is shown" },
      { field: "Base ID", value: "324029", description: "Links shrinkage batch to original batch" },
      { field: "Notes", value: "", description: "Any additional notes entered by staff" }
    ]
  },
  product_batch_structure_note: "*You can view all these details by clicking on a batch in the Batches module.",
  core_workflow_title: "4. Core System Workflow: From Goods In to Customer Out",
  core_workflow_body: "Understanding the flow of inventory and information within CIMS is key to utilizing it effectively. The following diagram illustrates the typical lifecycle of a product as it moves through your operations, highlighting interactions for different roles.",
  core_workflow_img_alt: "Core System Workflow Diagram",
  key_features_staff_title: "6. Key Features & How-To (Staff Roles)",
  inventory_management_title: "6.1 Inventory Management",
  inventory_management_roles: "(Primary Users: Admin, Invoice, Inventory Roles; View-Only Access: Inbound, Guest Roles)",
  inventory_management_body: "The Inventory module is your central repository for all product master data.",
  inventory_management_points: [
    "<strong>Accessing:</strong> Navigate to <strong>\"Inventory\"</strong> from the main menu.",
    "<strong>Viewing Products:</strong> Products are displayed in a responsive table (desktop) or card (mobile) format. Utilize search, sort (by SKU, name, etc.), and filter options to quickly find items."
  ],
  inventory_management_add_title: "Adding a New Product (Master Item):",
  inventory_management_add_steps: [
    'Click the <strong>"Add Product"</strong> or <strong>"+"</strong> icon.',
    "Complete the form:",
    [
      "<code>SKU</code>: Unique identifier. Follow validation rules (letters, numbers, hyphens; no spaces/special characters).",
      "<code>Item Name</code>: Descriptive name of the product (e.g., \"Pasta di Aragona - Fusilloni Graganano IGP 500gr\").",
      "<code>Is Weight-Based</code>: Check if sold by weight (e.g., cheese, meat) rather than units.",
      "<code>Description</code>: Additional details about the product.",
      "<code>VAT Rate</code>: Applicable value-added tax rate."
    ],
    "Save the product. This item now exists in your master list, ready for batches to be associated with it."
  ],
  inventory_management_edit_title: "Editing a Product:",
  inventory_management_edit_body: 'Locate the product, click the "Edit" icon, modify the necessary details, and save.',
  inventory_management_csv_title: "CSV Import/Export:",
  inventory_management_csv_points: [
    '<strong>Import:</strong> For bulk adding or updating products, use the <strong>"Import Inventory"</strong> button. Download the template CSV, populate it, and upload.',
    '<strong>Export:</strong> To get a full list of your inventory items, use the <strong>"Export Table"</strong> or <strong>"Export to CSV"</strong> button.'
  ],
  inbound_batch_management_title: "6.2 Inbound Batch Management (Receiving Goods)",
  inbound_batch_management_roles: "(Primary Users: Admin, Invoice, Inventory, Inbound Roles; View-Only Access: Guest Role)",
  inbound_batch_management_body: "This is where you record every new shipment of products that arrives at your facility. Each distinct delivery with its own expiry date and/or lot number should be entered as a separate batch.",
  inbound_batch_management_points: [
    '<strong>Accessing:</strong> Navigate to <strong>"Batches"</strong> from the main menu.'
  ],
  inbound_batch_management_add_title: "Creating a New Batch:",
  inbound_batch_management_add_steps: [
    'Click <strong>"Add Batch"</strong>.',
    "Fill in the batch details:",
    [
      "<code>SKU</code>: Select the product from your master inventory list.",
      "<code>Batch Number</code>: Enter the supplier's batch/lot number. If none is provided, use a consistent internal numbering system.",
      "<code>Quantity</code> / <code>Weight (Kilos)</code>: Enter the amount received.",
      "<code>Expiry Date</code>: Enter the product's expiry date.",
      "<code>Date Received</code>: Defaults to the current date but can be adjusted.",
      "<code>Warehouse</code>: Select the storage location."
    ],
    "Save the batch. This action immediately updates the available stock for the linked SKU."
  ],
  inbound_batch_management_edit_title: "Editing a Batch:",
  inbound_batch_management_edit_body: 'Find the batch in the list, click its "Edit" icon, make corrections, and save.',
  inbound_batch_management_view_title: "Viewing Batches:",
  inbound_batch_management_view_body: 'Batches are displayed in responsive views, typically sorted by <code>Date Received</code> (newest first). You can search, filter, and sort by other criteria.',
  batch_shrinkage_tracking_title: "6.2.1 Batch Shrinkage Tracking",
  batch_shrinkage_tracking_roles: "(Accessible to: Admin, Invoice, Inventory, Inbound Roles)",
  batch_shrinkage_tracking_body: "Recording shrinkage accurately reflects true inventory levels and helps identify areas of loss.",
  batch_shrinkage_tracking_points: [
    "<strong>Purpose:</strong> To account for any inventory that is lost or becomes unusable before being sold or consumed. Common reasons include: Damaged, Expired, Lost, Spoilage, Theft, Supplier Defects, Other."
  ],
  batch_shrinkage_tracking_howto_title: "How to Record Shrinkage:",
  batch_shrinkage_tracking_howto_steps: [
    'Click <strong>"Add Shrinkage"</strong> on the "Batches" page or within a batch\'s details.',
    "<strong>Search for Original Batch:</strong> Use the batch number or SKU to find the parent batch. The system will display its current available quantity.",
    "<strong>Enter Loss Amount:</strong> Input the quantity or weight lost (as a positive number).",
    "<strong>Select Shrinkage Reason:</strong> Choose the most appropriate reason from the predefined list.",
    "Add optional notes for further clarification.",
    "Submit the shrinkage entry."
  ],
  batch_shrinkage_tracking_system_title: "System Action:",
  batch_shrinkage_tracking_system_points: [
    "CIMS generates a <em>new, linked batch record</em> (e.g., <code>SHR-324029-1</code>).",
    "The shrinkage batch stores the lost amount as a <strong>negative quantity/weight</strong>.",
    "It is linked to the original batch via a <code>base_id</code> field.",
    "The available amount of the original SKU is immediately reduced.",
    "<strong>Balance Calculation:</strong><br /><code>availableAmount = initial_batch_quantity + sum_of_all_related_shrinkage_entries (negative) - sum_of_quantities_used_in_invoices</code>"
  ],
  outbound_management_title: "6.3 Outbound Management: Orders, Delivery Notes, Invoices",
  outbound_management_roles: "(Primary Users: Admin, Invoice Roles)",
  outbound_management_body: "This section covers the process of managing stock leaving your facility.",
  outbound_management_points: [
    '<strong>Accessing:</strong> Navigate to <strong>"Invoices"</strong> or <strong>"Orders"</strong> from the menu.'
  ],
  outbound_management_add_title: "Creating an Order/Invoice:",
  outbound_management_add_steps: [
    'Click <strong>"Create Invoice"</strong>.',
    "Enter customer/company details, the date, and any relevant notes.",
    "<strong>Adding Items & Allocating Batches:</strong>",
    [
      'For each item, select the SKU (e.g., "Pasta di Aragona - Fusilloni Graganano IGP 500gr").',
      "CIMS displays available batches for that SKU, highlighting those closest to expiry.",
      "Enter the quantity/weight required.",
      "The system allocates the requested amount from one or more batches, following FIFO logic.",
      "Real-time validation prevents over-allocation."
    ],
    "Review and save. This deducts the allocated quantities from the respective batches' available stock."
  ],
  outbound_management_integration_title: "Small Invoice Integration (Delivery Notes):",
  outbound_management_integration_points: [
    "CIMS integrates with the Small Invoice API for delivery note processing.",
    "<strong>Import Process:</strong> Delivery notes can be fetched from Small Invoice. During import:",
    [
      "SKUs are validated against your CIMS master inventory.",
      "Delivery note numbers are sanitized for consistent formatting."
    ],
    "<strong>Automated Invoice Creation:</strong> Imported delivery notes can be used to create sales invoices within CIMS, linking them to the correct batches and updating inventory."
  ],
  expiry_calendar_title: "6.4 Expiry Calendar",
  expiry_calendar_roles: "(Primary Users: Admin, Invoice, Inventory Roles)",
  expiry_calendar_body: "A proactive tool for minimizing waste by visualizing product shelf life.",
  expiry_calendar_points: [
    '<strong>Accessing:</strong> Navigate to <strong>"Calendar"</strong>.',
    "<strong>Functionality:</strong>",
    [
      "Displays a calendar view.",
      "Dates with batches expiring on or around them are highlighted.",
      "Clicking on a date reveals the specific batches set to expire."
    ]
  ],
  dashboard_analytics_title: "6.5 Dashboard & Analytics",
  dashboard_analytics_roles: "(Primary Users: Admin, Invoice Roles)",
  dashboard_analytics_body: "Your central hub for operational insights and key performance indicators (KPIs).",
  dashboard_analytics_points: [
    '<strong>Accessing:</strong> Navigate to <strong>"Dashboard"</strong>.',
    "<strong>Key Metrics Displayed:</strong>",
    [
      "Total inventory value.",
      "Breakdown of expiring goods by value and time window (expired, 0-30 days, 31-60 days, 61+ days).",
      "Value of expiring goods grouped by warehouse location.",
      "Visual charts and reports, such as expiry timeline charts, location-based value breakdowns, and yearly cost analysis."
    ]
  ],
  notification_system_title: "6.6 Notification System",
  notification_system_roles: "(Relevant for: Admin, Invoice Roles primarily; other roles may receive tailored alerts)",
  notification_system_body: "Stay informed about critical inventory events in real-time.",
  notification_system_points: [
    '<strong>Accessing:</strong> Via the <strong>bell icon</strong> in the application header.',
    "<strong>Notification Types:</strong>",
    [
      "<strong>Expiring Items:</strong> Alerts for batches already expired or expiring soon.",
      "<strong>New Stock:</strong> Alerts for recently added batches."
    ],
    "<strong>Interaction:</strong>",
    [
      'Clicking the bell icon opens a floating panel with sections for "Expiring Items" and "New Stock."',
      "Each section can be expanded/collapsed and marked as read independently.",
      "Real-time updates and sound notifications are supported."
    ]
  ],
  user_client_management_title: "6.7 User & Client Management",
  user_client_management_roles: "(Primary Users: Admin Role Only)",
  user_client_management_body: "Manage who has access to CIMS and what they can do.",
  user_client_management_points: [
    '<strong>Accessing:</strong> Navigate to <strong>"Users"</strong> or "Admin" section.',
    "<strong>Functionality:</strong>",
    [
      "<strong>Staff Users:</strong> Add/edit users, assign roles, activate/deactivate accounts.",
      "<strong>Client Accounts:</strong> Manage accounts for external clients who access the Customer Portal."
    ]
  ],
  data_export_reporting_title: "6.8 Data Export & Reporting",
  data_export_reporting_roles: "(Available to: Admin, Invoice, Inventory Roles, depending on the specific data)",
  data_export_reporting_points: [
    'Most data tables offer an <strong>"Export"</strong> or <strong>"Export to CSV"</strong> button.',
    "Download filtered/displayed data for offline analysis or backup.",
    "Admins may have access to audit logs and financial report generation tools."
  ],
  client_portal_features_title: "7. Client Portal (Customer) Features",
  client_portal_features_body: "CIMS provides a dedicated, secure portal for your clients.",
  client_access_auth_title: "7.1 Access & Authentication",
  client_access_auth_points: [
    "Clients access the portal via a specific URL.",
    "Authentication is via Google Sign-In.",
    'Access is strictly limited to users with the "Client" role.'
  ],
  client_product_search_title: "7.2 Product Search & Inventory Browsing",
  client_product_search_points: [
    "<strong>Advanced Search:</strong> Search for products by name, SKU, or other attributes (e.g., \"Pasta di Aragona - Fusilloni Graganano IGP 500gr\").",
    "<strong>Real-Time Availability:</strong> See up-to-date stock levels, including batch details and expiry dates where applicable.",
    "<strong>Featured Products:</strong> The portal may highlight items such as those nearing expiry, new arrivals, or promotional products."
  ],
  client_cart_checkout_title: "7.3 Cart & Checkout Process",
  client_cart_checkout_points: [
    "<strong>Cart Management:</strong> Add products to the cart, specifying quantities or weights.",
    "<strong>Batch-Aware Cart:</strong> The system allocates stock from available batches, following FIFO logic.",
    "<strong>Checkout Flow:</strong> Review cart, confirm delivery info, accept terms, and submit the order."
  ],
  client_order_confirmation_title: "7.4 Order Confirmation & Client Profile (<code>/profile</code>)",
  client_order_confirmation_points: [
    "<strong>Immediate Confirmation:</strong> After order submission, clients see a summary page.",
    "<strong>Email Notification:</strong> An automated email confirmation is sent.",
    "<strong>Client Profile & Order History:</strong>",
    [
      "Clients can view their profile and order history.",
      "Order history lists all past orders with order number and date.",
      "Clicking an order shows detailed confirmation."
    ]
  ],
  client_voice_assistant_title: "7.5 Voice Assistant (Sandra)",
  client_voice_assistant_body: "Clients can use <strong>Sandra</strong>, the AI-powered voice assistant, directly in the portal.",
  client_voice_assistant_points: [
    "<strong>Natural Conversation:</strong> Speak naturally; Sandra understands queries and requests.",
    "<strong>Personalized Experience:</strong> Sandra tailors assistance based on your account and past orders.",
    "<strong>Capabilities:</strong>",
    [
      '<strong>Check Product Availability:</strong> "Sandra, do you have Pasta di Aragona - Fusilloni in stock?"',
      '<strong>Place Orders:</strong> "Sandra, I\'d like to order 10 packs of Pasta di Aragona - Fusilloni."',
      "<strong>Get Help & Information:</strong> Ask for help with navigation, product details, or order status."
    ],
    '<strong>Accessing Sandra:</strong> Look for the microphone icon or "Ask Sandra" button.'
  ],
  client_privacy_terms_title: "7.6 Privacy & Terms",
  client_privacy_terms_body: "The portal provides links to the <strong>Privacy Policy</strong> and <strong>Terms & Conditions</strong>.",
  mobile_accessibility_title: "8. Mobile Experience & Accessibility",
  mobile_accessibility_body: "CIMS is built for usability across devices.",
  mobile_accessibility_points: [
    "<strong>Responsive Design:</strong> All pages and components adapt to desktops, tablets, and mobile phones.",
    "<strong>Mobile-Optimized Workflows:</strong>",
    [
      "Inbound (Batch) Management and Inventory have dedicated mobile-friendly interfaces, allowing staff to input data directly from the warehouse floor.",
      "The Client Portal is fully mobile-responsive."
    ],
    "<strong>Accessibility (A11y):</strong> Keyboard navigation, ARIA labels, and screen reader compatibility are supported."
  ],
  mobile_accessibility_img_alt: "CIMS Mobile View",
  support_troubleshooting_title: "9. Support & Troubleshooting",
  support_troubleshooting_body: "If you have questions or need help:",
  support_troubleshooting_steps: [
    "Consult in-app help sections or tooltips.",
    "Contact your internal CIMS system administrator.",
    'Email the CIMS support team at: <a href="mailto:info@chefland.ch" className="text-secondary hover:underline"><strong>info@chefland.ch</strong></a>'
  ],
  support_troubleshooting_alert_title: "We're here to help!",
  support_troubleshooting_alert_desc: "We are committed to ensuring you have a smooth and productive experience with CIMS.",
  closing_message: "Thank you for using the Chefland Inventory Management System! We trust it will be an invaluable tool in your food service operations.",
  footer_copyright: "&copy; {year} Chefland. All rights reserved.",
  footer_version: "Chefland CIMS Guide v1.10"
};

export default en;