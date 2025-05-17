# Prompt: Recreate the Chefland CIMS User Guide App in React/Vite

**Instructions for Copilot or Developer:**  
_Recreate the Chefland CIMS User Guide as a single-page React/Vite app. The app must include all the user guide content, structure, and visuals as shown below. The layout should feature an interactive Table of Contents, illustrated data structure, annotated screenshots, notification management, and a voice assistant tutorial. Use the style guidelines provided. All content below is to be included in the new app, with placeholder images where indicated._

---

# Chefland CIMS Guide

## Core Features

- **Interactive Table of Contents:** Quickly jump to any section.
- **Illustrated Data Structure:** Visual diagrams for product and batch relationships.
- **Annotated Screenshots and Videos:** Step-by-step visuals for all major workflows.
- **In-App Notification Management:** How to use and configure real-time notifications.
- **AI Voice Assistant Tutorial:** Guide to using the Sandra voice assistant.

---

## Table of Contents

1. [Introduction: Why CIMS?](#introduction)
2. [Getting Started](#getting-started)
   - [Logging In](#logging-in)
   - [Navigating CIMS](#navigating-cims)
3. [Understanding Your Role & Permissions](#roles-permissions)
4. [Core System Workflow](#core-workflow)
5. [Product & Batch Structure](#product-batch-structure)
6. [Key Features & How-To (Staff Roles)](#key-features-staff)
   - [Inventory Management](#inventory-management)
   - [Inbound Batch Management](#inbound-batch-management)
   - [Batch Shrinkage Tracking](#batch-shrinkage-tracking)
   - [Outbound Management](#outbound-management)
   - [Expiry Calendar](#expiry-calendar)
   - [Dashboard & Analytics](#dashboard-analytics)
   - [Notification System](#notification-system)
   - [User & Client Management](#user-client-management)
   - [Data Export & Reporting](#data-export-reporting)
7. [Client Portal (Customer) Features](#client-portal-features)
   - [Access & Authentication](#client-access-auth)
   - [Product Search & Inventory Browsing](#client-product-search)
   - [Cart & Checkout Process](#client-cart-checkout)
   - [Order Confirmation & Client Profile](#client-order-confirmation)
   - [Voice Assistant (Sandra)](#client-voice-assistant)
   - [Privacy & Terms](#client-privacy-terms)
8. [Mobile Experience & Accessibility](#mobile-accessibility)
9. [Support & Troubleshooting](#support-troubleshooting)

---

## 1. Introduction: Why CIMS? <a name="introduction"></a>

CIMS is a comprehensive solution for food service inventory management.  
**Key strengths:**
- **Enhanced Food Safety:** Track batch numbers and expiry dates from inbound to outbound.
- **Waste Reduction:** Proactive alerts and expiry calendar.
- **Operational Efficiency:** Streamlined workflows for receiving, managing, and invoicing.
- **Real-Time Visibility:** Up-to-the-minute inventory data.
- **Full Traceability:** Complete, auditable history for every item and batch.

---

## 2. Getting Started <a name="getting-started"></a>

### 2.1 Logging In <a name="logging-in"></a>
- Access CIMS via secure Google Sign-In.
- Steps:
  1. Go to the CIMS web address.
  2. Click "Sign in with Google".
  3. Select your authorized account.
- ![Login Screen](https://placehold.co/600x300.png)

### 2.2 Navigating CIMS <a name="navigating-cims"></a>
- After login, the dashboard or relevant landing page appears.
- Use the main navigation menu for modules and features.
- CIMS is mobile-first and responsive.
- ![Dashboard Navigation](https://placehold.co/700x400.png)

---

## 3. Understanding Your Role & Permissions <a name="roles-permissions"></a>

CIMS uses role-based access control (RBAC).  
| Role      | Responsibilities | Restrictions |
|-----------|------------------|--------------|
| Admin     | Full system oversight, user & client management, all features | None |
| Invoice   | Inventory, batch, invoice management, dashboard | No user/system settings |
| Inventory | Master inventory, batch creation/tracking | No invoices/dashboard |
| Inbound   | Batch receiving/processing | No invoices/dashboard/user mgmt |
| Guest     | View-only inventory/batches | No operational features |
| Client    | Customer portal for ordering | No internal features |

---

## 4. Core System Workflow <a name="core-workflow"></a>

Understanding the flow of inventory and information is key.  
![Workflow Diagram](https://placehold.co/800x600.png)

---

## 5. Product & Batch Structure <a name="product-batch-structure"></a>

Every product and batch is defined by key fields.  
**Batch Record Example:**
| Field           | Example Value | Description |
|-----------------|--------------|-------------|
| SKU             | CFU0500      | Unique product identifier |
| Item Name       | Pasta di Aragona - Fusilloni Graganano IGP 500gr | Product name |
| Batch Number    | 324029       | Supplier/internal lot/batch number |
| Quantity        | 20           | Number of units |
| Weight (kg)     |              | Weight if weight-based |
| Available Amount| 19           | Current available units/weight |
| Expiry Date     | 2027-01-01   | Batch expiry date |
| Date Received   | 2024-12-27   | When batch was received |
| Warehouse       | (+25°C)      | Storage location |
| Purchase Cost   | CHF 0.00     | Cost per unit/kg |
| Shrinkage Reason|              | If shrinkage batch |
| Base ID         | 324029       | Links shrinkage batch |
| Notes           |              | Additional notes |

---

## 6. Key Features & How-To (Staff Roles) <a name="key-features-staff"></a>

### 6.1 Inventory Management <a name="inventory-management"></a>
- Central repository for all product master data.
- Search, sort, and filter products.
- ![Inventory Module](https://placehold.co/700x350.png)

#### Adding a New Product
1. Click "Add Product".
2. Complete the form (SKU, Item Name, Weight-Based, Description, VAT Rate).
3. Save the product.
4. Edit or import/export via CSV as needed.
- ![Add Product Form](https://placehold.co/600x450.png)

### 6.2 Inbound Batch Management <a name="inbound-batch-management"></a>
- Record every new shipment as a separate batch.
- ![Batches Module](https://placehold.co/700x350.png)

#### Creating a New Batch
1. Click "Add Batch".
2. Fill in details (SKU, Batch Number, Quantity/Weight, Expiry Date, Date Received, Warehouse).
3. Save the batch.
4. Edit as needed.
- ![Add Batch Form](https://placehold.co/600x500.png)

#### Viewing Batches
- Batches are displayed in responsive views, sorted by date received.

### 6.2.1 Batch Shrinkage Tracking <a name="batch-shrinkage-tracking"></a>
- Record shrinkage for lost/damaged/expired inventory.
- ![Add Shrinkage Form](https://placehold.co/600x400.png)

#### How to Record Shrinkage
1. Click "Add Shrinkage".
2. Search for original batch.
3. Enter loss amount and reason.
4. Submit entry.

---

### 6.3 Outbound Management <a name="outbound-management"></a>
- Manage stock leaving your facility.
- ![Orders/Invoices View](https://placehold.co/700x350.png)

#### Creating an Order/Invoice
1. Click "Create Invoice".
2. Enter customer details.
3. Add items and allocate batches (FIFO logic).
4. Review and save.
- ![Invoice Item Allocation](https://placehold.co/700x500.png)

#### Small Invoice Integration
- Import delivery notes, match to batches, and automate invoice creation.

---

### 6.4 Expiry Calendar <a name="expiry-calendar"></a>
- Visualize product shelf life.
- ![Expiry Calendar](https://placehold.co/700x450.png)

---

### 6.5 Dashboard & Analytics <a name="dashboard-analytics"></a>
- View KPIs, inventory value, expiring goods, and analytics.
- ![Dashboard Analytics](https://placehold.co/800x500.png)

---

### 6.6 Notification System <a name="notification-system"></a>
- Real-time alerts for expiring items and new stock.
- ![Notification Panel](https://placehold.co/400x300.png)

---

### 6.7 User & Client Management <a name="user-client-management"></a>
- Manage staff and client accounts.

---

### 6.8 Data Export & Reporting <a name="data-export-reporting"></a>
- Export tables to CSV, generate reports.

---

## 7. Client Portal (Customer) Features <a name="client-portal-features"></a>

### 7.1 Access & Authentication <a name="client-access-auth"></a>
- Clients access via a dedicated URL and Google Sign-In.

### 7.2 Product Search & Inventory Browsing <a name="client-product-search"></a>
- Search by name, SKU, or attributes.
- Real-time availability.
- ![Client Portal Search](https://placehold.co/700x400.png)

### 7.3 Cart & Checkout Process <a name="client-cart-checkout"></a>
- Add products to cart, allocate from batches, and checkout.
- ![Client Portal Cart](https://placehold.co/700x450.png)

### 7.4 Order Confirmation & Client Profile <a name="client-order-confirmation"></a>
- Order summary, email confirmation, and order history.

### 7.5 Voice Assistant (Sandra) <a name="client-voice-assistant"></a>
- Use Sandra to check stock, place orders, and get help.
- ![Voice Assistant UI](https://placehold.co/500x300.png)

### 7.6 Privacy & Terms <a name="client-privacy-terms"></a>
- Links to privacy policy and terms.

---

## 8. Mobile Experience & Accessibility <a name="mobile-accessibility"></a>
- Fully responsive design.
- Mobile-optimized workflows for staff and clients.
- Accessibility features (keyboard navigation, ARIA, screen readers).
- ![Mobile View](https://placehold.co/400x600.png)

---

## 9. Support & Troubleshooting <a name="support-troubleshooting"></a>
- In-app help, tooltips, and support email: [info@chefland.ch](mailto:info@chefland.ch)

---

## Style Guidelines

- **Primary color:** Dark blue (#304661)
- **Background color:** Light grey (#F0F2F5)
- **Accent color:** Muted teal (#99AE4C)
- **Font:** Clean, sans-serif
- **Layout:** Clear, well-spaced, intuitive navigation
- **Icons:** Minimalist, consistent

---

**This file is self-contained and includes all content, structure, and visuals needed to recreate the Chefland CIMS User Guide app in a new React/Vite project.**