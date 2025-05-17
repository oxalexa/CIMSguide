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
      { field: "Available Amount", value: "19", description: "Current available units or weight" },
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
  // ... (continue for all other sections, using keys for each string/paragraph)
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