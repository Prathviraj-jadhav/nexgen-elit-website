import {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, LevelFormat,
  TableOfContents, HeadingLevel, BorderStyle, WidthType,
  ShadingType, VerticalAlign, PageNumber, PageBreak
} from "docx";
import fs from "fs";

// ============================================================
// COLOR PALETTE  "Midnight Code"
// ============================================================
const C = {
  primary: "020617",
  body: "1E293B",
  secondary: "64748B",
  accent: "94A3B8",
  tableBg: "F8FAFC",
  white: "FFFFFF",
  tableBorder: "CBD5E1",
  tableHeaderBg: "E2E8F0",
  coverAccent: "334155",
};

const thinBorder = { style: BorderStyle.SINGLE, size: 1, color: C.tableBorder };
const cellBorders = { top: thinBorder, bottom: thinBorder, left: thinBorder, right: thinBorder };
const noBorder = { style: BorderStyle.NONE, size: 0, color: C.white };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };

// ============================================================
// HELPER FUNCTIONS
// ============================================================
function bodyPara(text, opts = {}) {
  return new Paragraph({
    spacing: { after: 120, line: 250 },
    alignment: AlignmentType.LEFT,
    ...opts,
    children: [new TextRun({ text, font: "Calibri", size: 22, color: C.body })],
  });
}

function boldBodyPara(boldText, normalText) {
  return new Paragraph({
    spacing: { after: 120, line: 250 },
    alignment: AlignmentType.LEFT,
    children: [
      new TextRun({ text: boldText, font: "Calibri", size: 22, color: C.body, bold: true }),
      new TextRun({ text: normalText, font: "Calibri", size: 22, color: C.body }),
    ],
  });
}

function heading1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 600, after: 300, line: 250 },
    children: [new TextRun({ text, font: "Times New Roman", size: 36, bold: true, color: C.primary })],
  });
}

function heading2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 400, after: 200, line: 250 },
    children: [new TextRun({ text, font: "Times New Roman", size: 28, bold: true, color: C.primary })],
  });
}

function heading3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 300, after: 150, line: 250 },
    children: [new TextRun({ text, font: "Times New Roman", size: 24, bold: true, color: C.coverAccent })],
  });
}

function emptyLine(size = 120) {
  return new Paragraph({ spacing: { after: size, line: 250 }, children: [new TextRun("")] });
}

function tableCell(text, opts = {}) {
  return new TableCell({
    borders: cellBorders,
    width: opts.width ? { size: opts.width, type: WidthType.DXA } : undefined,
    verticalAlign: VerticalAlign.CENTER,
    shading: opts.shading ? { fill: opts.shading, type: ShadingType.CLEAR } : undefined,
    children: [
      new Paragraph({
        spacing: { line: 250 },
        alignment: opts.align || AlignmentType.LEFT,
        children: [
          new TextRun({
            text,
            font: "Calibri",
            size: opts.size || 20,
            bold: opts.bold || false,
            color: opts.color || C.body,
          }),
        ],
      }),
    ],
  });
}

function makeTable(headers, rows, colWidths) {
  return new Table({
    alignment: AlignmentType.CENTER,
    columnWidths: colWidths,
    margins: { top: 100, bottom: 100, left: 180, right: 180 },
    rows: [
      new TableRow({
        tableHeader: true,
        children: headers.map((h, i) =>
          tableCell(h, { width: colWidths[i], shading: C.tableHeaderBg, bold: true, color: C.primary, align: AlignmentType.CENTER })
        ),
      }),
      ...rows.map((row, ri) =>
        new TableRow({
          children: row.map((cell, i) =>
            tableCell(cell, { width: colWidths[i], shading: ri % 2 === 1 ? C.tableBg : undefined })
          ),
        })
      ),
    ],
  });
}

function tableCaption(text) {
  return new Paragraph({
    spacing: { before: 60, after: 200, line: 250 },
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text, font: "Calibri", size: 18, color: C.secondary, italics: true })],
  });
}

// ============================================================
// NUMBERING
// ============================================================
const numberingConfigs = [];
for (let i = 1; i <= 80; i++) {
  numberingConfigs.push({
    reference: `b${i}`,
    levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }],
  });
}
for (let i = 1; i <= 40; i++) {
  numberingConfigs.push({
    reference: `n${i}`,
    levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }],
  });
}
let bi = 0, ni = 0;
function bl() { bi++; return `b${bi}`; }
function nl() { ni++; return `n${ni}`; }
function bulletItem(text, ref) {
  return new Paragraph({ numbering: { reference: ref, level: 0 }, spacing: { after: 60, line: 250 }, children: [new TextRun({ text, font: "Calibri", size: 22, color: C.body })] });
}
function numItem(text, ref) {
  return new Paragraph({ numbering: { reference: ref, level: 0 }, spacing: { after: 60, line: 250 }, children: [new TextRun({ text, font: "Calibri", size: 22, color: C.body })] });
}

// ============================================================
// COVER PAGE
// ============================================================
function coverPage() {
  return [
    emptyLine(3600),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200, line: 250 }, children: [new TextRun({ text: "NEXGEN ELIT", font: "Times New Roman", size: 60, bold: true, color: C.primary })] }),
    emptyLine(80),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 80, line: 250 }, children: [new TextRun({ text: "\u2500".repeat(40), font: "Calibri", size: 22, color: C.accent })] }),
    emptyLine(80),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200, line: 250 }, children: [new TextRun({ text: "Website Technical Documentation", font: "Times New Roman", size: 40, color: C.primary })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 120, line: 250 }, children: [new TextRun({ text: "Scandinavian Design System & Implementation Guide", font: "Calibri", size: 26, color: C.secondary })] }),
    emptyLine(600),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 80, line: 250 }, children: [new TextRun({ text: "Version 1.0  |  July 2025", font: "Calibri", size: 22, color: C.accent })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 80, line: 250 }, children: [new TextRun({ text: "Confidential Internal Use Only", font: "Calibri", size: 20, color: C.accent, italics: true })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 80, line: 250 }, children: [new TextRun({ text: "Prepared by Nexgen Elit Engineering Team", font: "Calibri", size: 20, color: C.accent })] }),
  ];
}

// ============================================================
// TOC SECTION
// ============================================================
function tocSection() {
  return [
    new Paragraph({ spacing: { before: 400, after: 300, line: 250 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Table of Contents", font: "Times New Roman", size: 36, bold: true, color: C.primary })] }),
    new TableOfContents("Table of Contents", { hyperlink: true, headingStyleRange: "1-3" }),
    new Paragraph({ spacing: { before: 200, after: 100, line: 250 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Note: This Table of Contents is generated via field codes. To ensure page number accuracy after editing, please right-click the TOC and select \"Update Field.\"", font: "Calibri", size: 18, color: C.secondary, italics: true })] }),
  ];
}

// ============================================================
// SECTION 3: Website Objective
// ============================================================
function section3() {
  const b1 = bl(), b2 = bl(), b3 = bl(), b4 = bl();
  return [
    heading1("3. Website Objective"),
    bodyPara("The Nexgen Elit website serves as the primary digital presence for India's first logistics-dedicated digital technology company. Every design decision, content element, and interaction pattern is engineered toward a singular purpose: converting logistics business owners and decision-makers into qualified leads. The website is not a brochure\u2014it is a systematic, behavior-driven conversion engine built on Scandinavian minimalistic design principles that communicates authority, clarity, and technological sophistication."),
    bodyPara("The website targets multiple audience segments within the Indian logistics ecosystem, from fleet operators managing hundreds of trucks to warehouse owners seeking digitization, to logistics startups looking for scalable technology infrastructure. Each visitor arrives with a distinct intent, and the site architecture is designed to address these intents systematically through dedicated pages, conversion flows, and trust-building content."),

    heading2("3.1 Primary Conversion Goal"),
    bodyPara("The primary conversion goal is lead generation through consultation requests. Every page, section, and micro-interaction funnels visitors toward one of three conversion actions: scheduling a free 20-minute technology audit, requesting a product demonstration, or submitting an inquiry through the contact form. These conversion points are strategically placed throughout the site\u2014not just on dedicated contact pages, but within service pages, product pages, and even blog content."),
    bodyPara("The site employs a multi-touch conversion model where visitors encounter CTA elements at multiple points during their journey. A visitor browsing the Services page finds category-level CTAs, individual service CTAs, and a bottom-of-page lead qualification prompt. This layered approach ensures that regardless of where a visitor is in their decision-making process, an appropriate conversion path is always visible and accessible."),

    heading2("3.2 Secondary Goals"),
    bulletItem("Brand Authority: Establish Nexgen Elit as the definitive technology partner for logistics companies in India through thought leadership, case studies, and product demonstrations.", b1),
    bulletItem("Product Discovery: Enable visitors to discover and understand the full breadth of the product catalog (96 products across 6 logistics modes) through intuitive navigation and search.", b1),
    bulletItem("Service Education: Communicate the scope and depth of 34 professional services organized across 6 strategic categories with clear value propositions.", b1),
    bulletItem("Trust Building: Reduce perceived risk for potential clients through documented case studies, testimonials, process transparency, and professional design quality.", b1),
    bulletItem("SEO Dominance: Capture organic search traffic for logistics technology keywords through comprehensive page architecture and structured data.", b1),
    bulletItem("Talent Acquisition: Attract top engineering talent through the Careers page showcasing company culture and open positions.", b1),
    bulletItem("Investor Relations: Present a credible professional image through the dedicated Investor page with company metrics.", b1),

    heading2("3.3 User Intent Categories"),
    boldBodyPara("Research Intent: ", "Visitors exploring logistics technology options without an immediate purchase decision. These users enter through blog content, organic search, or social media. The site addresses this through 31 blog articles, detailed service descriptions, and educational product pages. Newsletter subscriptions capture contact information for nurturing."),
    boldBodyPara("Comparison Intent: ", "Visitors actively evaluating multiple technology providers. They spend time on service detail pages, product pages, and case studies. The 11-section conversion flow on inner pages addresses comparison intent by providing exhaustive detail about problems solved, methodologies, timelines, and expected outcomes."),
    boldBodyPara("Purchase Intent: ", "Visitors ready to engage with a technology partner. They navigate to the Contact page or respond to CTAs. The lead qualification form with revenue and situation dropdowns helps the sales team prioritize and route high-intent leads."),
    boldBodyPara("Return Intent: ", "Previous visitors continuing evaluation or proceeding with engagement. Consistent navigation, clear hierarchy, and memorably clean design reinforce brand recognition on each visit."),
  ];
}

// ============================================================
// SECTION 4: Website Architecture
// ============================================================
function section4() {
  return [
    heading1("4. Website Architecture"),
    bodyPara("The Nexgen Elit website follows a hierarchical information architecture designed to serve both user navigation needs and search engine crawlability. The architecture separates content into distinct page types: landing pages (Home), listing pages (Services, Products, Blog, Case Studies), detail pages (Service inner, Product inner, Blog inner), and utility pages (Contact, Careers, Partners, Investor, Privacy, Terms). This separation ensures clean URL structures, logical internal linking, and a scalable content management approach."),
    bodyPara("The routing architecture leverages Next.js 15 App Router with dynamic route segments for detail pages. All routes are server-side rendered by default for optimal SEO performance, with client-side interactivity added selectively through 'use client' directives only where user interaction is required (animations, form handling, tab switching, search functionality). This hybrid approach delivers both SEO performance and interactive user experience."),

    heading2("4.1 Complete Sitemap"),
    makeTable(
      ["Page", "URL", "Type", "Description"],
      [
        ["Home", "/", "Landing", "Primary conversion page with hero, services overview, case studies, testimonials"],
        ["About", "/about", "Informational", "Company story, team, values, trust-building content"],
        ["Services", "/services", "Listing", "6 categories, 34 services with category filtering"],
        ["Service Detail", "/services/[slug]", "Detail", "11-section conversion flow per service"],
        ["Products", "/products", "Listing", "6 categories, 96 products with search and filtering"],
        ["Product Detail", "/products/[slug]", "Detail", "11-section conversion flow per product"],
        ["AI Products", "/ai-products", "Feature", "8 AI-powered logistics products showcase"],
        ["Case Studies", "/case-studies", "Listing", "Filtered case studies by mode, type, outcome"],
        ["Partners", "/partners", "Informational", "Technology and logistics partner ecosystem"],
        ["Careers", "/careers", "Utility", "Open positions, culture, application process"],
        ["Blog", "/blogs", "Listing", "31 articles with category filtering"],
        ["Blog Article", "/blogs/[slug]", "Detail", "Full article with related content"],
        ["Blog Category", "/blogs/category/[slug]", "Listing", "Category-filtered blog listings"],
        ["Blog Search", "/blogs/search", "Utility", "Full-text blog search functionality"],
        ["Contact", "/contact", "Conversion", "Lead capture form with qualification fields"],
        ["Investor", "/investor", "Informational", "Company metrics, growth trajectory, investment thesis"],
        ["Privacy Policy", "/privacy-policy", "Legal", "Data handling and privacy practices"],
        ["Terms & Conditions", "/terms-and-conditions", "Legal", "Terms of service and usage agreements"],
      ],
      [2200, 2600, 1500, 3060]
    ),
    tableCaption("Table 1: Complete Website Sitemap"),

    heading2("4.2 Navigation Hierarchy"),
    bodyPara("The primary navigation is structured as a flat hierarchy with 11 top-level items visible in the header. This deliberately flat structure minimizes click depth and ensures that any page on the site is reachable within two clicks from any other page. The navigation items are ordered by conversion priority: Home, Services, Products, AI Products, Case Studies, About, Blogs, Careers, Partners, Investor, and Contact."),
    bodyPara("Secondary navigation is provided through contextual links within page content. Service listing pages link to individual service detail pages. Blog articles link to related content and category pages. Product categories link to individual product detail pages. This contextual linking strategy supports both user discovery and search engine crawl efficiency, creating a dense internal link graph that distributes page authority effectively across the site."),
    bodyPara("The footer provides a secondary navigation system organized into four columns: Company links (About, Partners, Careers, Investor), Services links (direct to service categories), Resources links (Blogs, Case Studies), and Legal links (Privacy Policy, Terms). This comprehensive footer navigation ensures that visitors can access any page regardless of their scroll position on the current page."),
  ];
}

// ============================================================
// SECTION 5: Global Layout Structure
// ============================================================
function section5() {
  const b1 = bl();
  return [
    heading1("5. Global Layout Structure"),
    bodyPara("The global layout follows a consistent container-based architecture that ensures visual coherence across all pages. Every page shares the same structural foundation: a sticky header (Navbar component), a main content area with standardized spacing, and a footer (SiteFooter component). This shared layout is implemented through the Next.js App Router layout system, ensuring that navigation state, font loading, and metadata are consistently applied."),

    heading2("5.1 Header Behavior"),
    bodyPara("The Navbar component implements a sticky positioning system with `top-16 z-40` classes, placing it 16 units from the top of the viewport with a z-index of 40. On initial page load, the navbar is transparent, allowing the hero section's background to extend to the full viewport edge. As the user scrolls past a defined threshold (typically 100px), the navbar transitions to a white background with a subtle bottom border (`border-black/[0.06]`), creating visual separation from the content below."),
    bodyPara("On mobile devices (below the `md` breakpoint at 768px), the navigation collapses into a hamburger menu icon. Clicking this icon triggers a fullscreen overlay menu that displays all navigation links in a vertical stack. The overlay uses a high z-index to ensure it appears above all page content, with a smooth slide-in animation. Closing the overlay returns the user to their previous scroll position."),

    heading2("5.2 Footer Structure"),
    bodyPara("The SiteFooter component consists of two distinct zones. The upper zone features a video background CTA section with a dark overlay, displaying a compelling call-to-action headline and action buttons. The video background creates a cinematic feel that contrasts with the predominantly white/light content above, marking the transition from content consumption to conversion action."),
    bodyPara("The lower zone is the actual footer with company information, navigation links, social media links, and legal information. It uses a dark background to create clear visual separation from the main content. The footer is organized into a multi-column grid layout that collapses responsively on smaller screens."),

    heading2("5.3 Section Spacing Rules"),
    bodyPara("All major content sections use a standardized vertical padding of `py-20 md:py-28` (80px on mobile, 112px on desktop). This generous whitespace is a core characteristic of the Scandinavian design system, creating breathing room between content sections and contributing to the clean, uncluttered aesthetic. Between sections, `LineReveal` animated dividers are used to create subtle visual separation without heavy horizontal rules."),

    heading2("5.4 Grid System"),
    bodyPara("The content grid uses `max-w-5xl` (1024px) as the primary container width for text-heavy content sections, with `max-w-7xl` (1280px) for wider layouts such as card grids and hero sections. All containers are centered using `mx-auto` with responsive horizontal padding (`px-6 md:px-10 lg:px-16`). The responsive breakpoint system follows the standard Tailwind CSS 4 scale:"),
    makeTable(
      ["Breakpoint", "Min Width", "Target Devices", "Typical Grid"],
      [
        ["Default", "0px", "Mobile phones", "1 column"],
        ["sm", "640px", "Large phones / small tablets", "2 columns"],
        ["md", "768px", "Tablets / small laptops", "2-3 columns"],
        ["lg", "1024px", "Laptops / desktops", "3-4 columns"],
        ["xl", "1280px", "Large desktops", "4-6 columns"],
      ],
      [1800, 1800, 2800, 2960]
    ),
    tableCaption("Table 2: Responsive Breakpoint System"),
  ];
}

// ============================================================
// SECTION 6: Design System
// ============================================================
function section6() {
  return [
    heading1("6. Design System"),
    bodyPara("The Nexgen Elit design system is built on Scandinavian minimalistic principles: clean surfaces, generous whitespace, sharp geometric forms, and a restrained color palette. Every visual decision prioritizes clarity over decoration, content over chrome, and function over form. The design language communicates technological sophistication through simplicity rather than complexity, creating a premium feel that aligns with the company's positioning as a high-end technology partner."),

    heading2("6.1 Typography Hierarchy"),
    bodyPara("Typography is the primary vehicle for establishing visual hierarchy on the site. The system uses two Google Font families loaded through Next.js font optimization: Poppins for headings (geometric, authoritative) and Montserrat for body text (clean, highly legible). Section labels use a distinctive micro-typography treatment with 10px uppercase text, wide letter-spacing (0.25em), and muted color to create subtle visual markers without competing with primary headings."),
    makeTable(
      ["Element", "Font Family", "Size", "Weight", "Usage"],
      [
        ["H1 Page Title", "Poppins", "clamp(2rem, 5vw, 3.5rem)", "600 (semibold)", "Hero headlines, page titles"],
        ["H2 Section Title", "Poppins", "clamp(1.5rem, 3vw, 2.25rem)", "600", "Section headings"],
        ["H3 Subsection", "Poppins", "1.25rem (20px)", "500 (medium)", "Card titles, sub-headings"],
        ["Body Text", "Montserrat", "1rem (16px)", "400 (regular)", "Paragraphs, descriptions"],
        ["Section Label", "Montserrat", "10px", "500", "Category labels above sections"],
        ["Caption/Muted", "Montserrat", "0.875rem (14px)", "400", "Dates, metadata, footnotes"],
        ["Button Text", "Montserrat", "0.875rem (14px)", "500", "CTA buttons, navigation links"],
      ],
      [1800, 1800, 2200, 1800, 1760]
    ),
    tableCaption("Table 3: Typography Hierarchy"),

    heading2("6.2 Color System"),
    bodyPara("The color system is deliberately restrained, using a near-monochromatic palette that emphasizes content and creates a calm, professional atmosphere. The only chromatic accent color is #2A3AFF (a vivid blue), used sparingly for interactive elements, links, and highlight states. Background colors alternate between pure white (#FFFFFF) and a very light gray (#F7F8FA) to create subtle visual rhythm between sections without heavy dividers."),
    makeTable(
      ["Token", "Value", "Tailwind Class", "Usage"],
      [
        ["Background Primary", "#FFFFFF", "bg-white", "Main content background"],
        ["Background Secondary", "#F7F8FA", "bg-[#F7F8FA]", "Alternating section backgrounds"],
        ["Background Dark", "#000000", "bg-black", "Dark CTA sections, footer"],
        ["Heading Text", "#111318", "text-[#111318]", "All headings (H1-H3)"],
        ["Body Text", "#6B7280", "text-[#6B7280]", "Paragraph text, descriptions"],
        ["Label / Muted", "#9CA3AF", "text-[#9CA3AF]", "Section labels, metadata"],
        ["Accent / Brand", "#2A3AFF", "text-[#2A3AFF]", "Links, interactive highlights"],
        ["Border Default", "rgba(0,0,0,0.06)", "border-black/[0.06]", "All 1px borders and dividers"],
      ],
      [2000, 1600, 2600, 3160]
    ),
    tableCaption("Table 4: Color System Tokens"),

    heading2("6.3 Border and Spacing Rules"),
    bodyPara("The design system enforces a strict no-border-radius rule across all components. Every element\u2014buttons, cards, inputs, images, modals\u2014uses sharp corners (0px border-radius). This geometric precision is a defining characteristic of the Scandinavian aesthetic and creates a distinctive visual identity that differentiates Nexgen Elit from competitors who default to rounded UI elements."),
    bodyPara("Borders are implemented as 1px solid lines with 6% black opacity (`border-black/[0.06]`), creating subtle separators that are visible without being heavy. The `LineReveal` animation component is used for section dividers, providing animated horizontal lines that appear on scroll rather than static rules. Spacing follows an 8px base grid system, with common values of 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 80px, and 112px."),

    heading2("6.4 Visual Language Principles"),
    bodyPara("The visual language is governed by five core principles. First, Content Hierarchy: visual weight follows content importance\u2014headings are large and dark, body text is medium and gray, labels are small and muted. Second, Whitespace as Design: generous spacing between elements creates a premium, breathable feel rather than filling every pixel. Third, Geometric Precision: sharp corners, aligned grids, and consistent spacing create a sense of order and technical competence. Fourth, Restraint: decorative elements are minimal; every visual element must serve a functional purpose. Fifth, Consistency: the same components, colors, and spacing values are used across every page to create a unified experience."),
  ];
}

// ============================================================
// SECTION 7: Component Library
// ============================================================
function section7() {
  const b1 = bl(), b2 = bl(), b3 = bl(), b4 = bl(), b5 = bl(), b6 = bl(), b7 = bl(), b8 = bl();
  return [
    heading1("7. Component Library"),
    bodyPara("The component library is the backbone of the Nexgen Elit website, providing a consistent set of reusable UI elements that maintain design system integrity across all pages. Components are built as React functional components with TypeScript props, leveraging Tailwind CSS 4 for styling and Framer Motion for animations. Each component is designed to be composable, allowing complex page layouts to be assembled from simple, well-defined building blocks."),

    heading2("7.1 Buttons"),
    bodyPara("The button system includes four variants designed for specific conversion and interaction contexts. Each variant maintains the sharp-corner aesthetic and uses consistent padding (px-6 py-3 for standard, px-8 py-4 for large). Hover states include a subtle scale transform (hover:scale-[1.02]) and brightness adjustment."),
    makeTable(
      ["Variant", "Background", "Text", "Border", "Usage"],
      [
        ["Primary", "bg-[#2A3AFF]", "text-white", "none", "Main CTAs, form submissions"],
        ["Secondary", "bg-white", "text-[#111318]", "border-black/[0.06]", "Secondary actions, navigation"],
        ["Ghost", "transparent", "text-[#6B7280]", "none", "Tertiary links, inline actions"],
        ["Dark CTA", "bg-black", "text-white", "none", "Dark section CTAs, footer areas"],
      ],
      [1800, 2000, 1800, 2200, 1560]
    ),
    tableCaption("Table 5: Button Variants"),

    heading2("7.2 Cards"),
    bodyPara("Three card variants serve different content presentation needs. Bento cards are used for feature showcases with large title areas, image zones, and description text\u2014they span multiple grid columns for visual impact. List cards are compact horizontal layouts with icon, title, description, and optional metadata\u2014used in service listings and product catalogs. Feature cards are vertical layouts with icon, heading, and description\u2014used in grid-based feature showcases."),
    bodyPara("All cards share common properties: sharp corners (no border-radius), 1px border (`border-black/[0.06]`), padding of `p-5 md:p-6`, and hover effects that include background color shift and subtle elevation. The hover state transitions use 200ms ease timing for responsive feel."),

    heading2("7.3 Hero Sections"),
    bodyPara("Hero sections serve as the primary visual and messaging element on each page. They follow a consistent structure: a section label (10px uppercase), a large heading (H1), a supporting paragraph, and an optional CTA button group. The hero on the home page is full-viewport height with a video or image background, while inner page heroes are smaller (typically `pt-32 pb-20`) with white backgrounds and large centered typography."),

    heading2("7.4 Timeline and Process Components"),
    bodyPara("Process/timeline components visualize multi-step workflows in a vertical layout. Each step includes a numbered circle or icon, a title, and a description. Steps are connected by a vertical line (1px, border color). The component supports scroll-triggered reveal animations where each step animates into view as the user scrolls through the timeline. On the service and product inner pages, the process section uses a more elaborate layout with alternating left/right content blocks connected by a center spine line."),

    heading2("7.5 Accordions and FAQ"),
    bodyPara("FAQ sections use an accordion pattern built with the shadcn/ui Accordion component. Each item consists of a trigger button (question text) and a collapsible content panel (answer text). The trigger uses semibold Montserrat font with a plus/minus icon indicator. Expanded items show a smooth height animation. The accordion supports single or multiple open items depending on the context\u2014FAQ sections typically allow multiple open items while navigation accordions use single-open behavior."),

    heading2("7.6 Tabs"),
    bodyPara("Tab components are used for category navigation on listing pages (Services, Products) and for content switching on detail pages. The sticky tab navigation pattern (`sticky top-16 z-30`) keeps category tabs visible while scrolling through content. Active tab state uses a bottom border highlight or background fill. The Products page implements a horizontal scrolling tab bar that becomes sticky after the hero section scrolls out of view, providing persistent category access."),

    heading2("7.7 Stats Blocks"),
    bodyPara("Stats blocks display key metrics in a visually impactful grid layout. Each stat item consists of a large number, a label, and optional contextual text. Numbers use Poppins font at 2.5rem-3rem size with semibold weight. Labels use Montserrat at 14px in muted gray. Stats are typically displayed in a 3 or 4 column grid on a dark background section (`bg-black text-white`) to create visual contrast with surrounding content."),

    heading2("7.8 CTA Blocks"),
    bodyPara("CTA (Call-to-Action) blocks come in two variants. The light variant uses a white or #F7F8FA background with a heading, subtitle, and primary CTA button\u2014positioned at the end of content sections to capture users who have scrolled through the content. The dark variant uses a black background with white text and a white or light CTA button\u2014used for high-impact conversion moments, typically before the footer. Both variants include generous padding (`py-20 md:py-28`) and centered content alignment."),

    heading2("7.9 Section Dividers"),
    bodyPara("The `LineReveal` component provides animated horizontal line dividers between sections. Unlike static horizontal rules, LineReveal lines animate their width from 0 to full when scrolled into view, using Framer Motion's viewport detection. The animation creates a sense of progression and draws the eye downward through the page. Line color uses the standard border token (`border-black/[0.06]`) at 1px thickness. The animation duration is approximately 800ms with a cubic-bezier easing curve."),

    heading2("7.10 Testimonials"),
    bodyPara("Testimonial components display customer quotes in a carousel or grid format. Each testimonial card includes the quote text, author name, role, and company. The design uses the standard card pattern (sharp corners, 1px border, white background) with larger typography for the quote text. On the home page, testimonials use an infinite scrolling carousel with gradient fade masks on left and right edges. On inner pages, testimonials may use a static 3-column grid layout."),

    heading2("7.11 Navigation Patterns"),
    bodyPara("Navigation follows three distinct patterns. Primary navigation is the sticky Navbar component with logo, links, and CTA button. Breadcrumb navigation is used on detail pages (Service inner, Product inner, Blog article) to show the user's position within the site hierarchy. Contextual navigation appears within page content as inline links, related content suggestions, and next/previous article links in the blog system."),
  ];
}

// ============================================================
// SECTION 8: Animation Specification
// ============================================================
function section8() {
  return [
    heading1("8. Animation Specification"),
    bodyPara("The animation system is a defining feature of the Nexgen Elit website, providing subtle yet impactful motion that enhances content consumption without distracting from it. All animations are built with Framer Motion and follow the principle of bidirectional scroll responsiveness\u2014elements fade in on scroll down and fade out on scroll up, creating a dynamic, responsive feel throughout the browsing experience. The animation system includes a custom `useReducedMotion` hook that disables all animations for users who have enabled the reduced motion preference in their operating system."),

    heading2("8.1 ScrollReveal Component"),
    bodyPara("The ScrollReveal component is the primary animation wrapper, supporting five distinct reveal styles. Each style combines opacity and transform animations triggered by viewport intersection. The `once={false}` prop ensures animations are bidirectional\u2014elements re-animate each time they enter or leave the viewport during scrolling."),
    makeTable(
      ["Style", "Initial State", "Visible State", "CSS Values"],
      [
        ["fadeUp", "opacity:0, y:30", "opacity:1, y:0", "translateY(30px) to translateY(0)"],
        ["fadeLeft", "opacity:0, x:-30", "opacity:1, x:0", "translateX(-30px) to translateX(0)"],
        ["fadeRight", "opacity:0, x:30", "opacity:1, x:0", "translateX(30px) to translateX(0)"],
        ["scaleUp", "opacity:0, scale:0.95", "opacity:1, scale:1", "scale(0.95) to scale(1)"],
        ["blurIn", "opacity:0, filter:blur(10px)", "opacity:1, filter:blur(0)", "blur(10px) to blur(0)"],
      ],
      [1800, 2400, 2400, 2760]
    ),
    tableCaption("Table 6: ScrollReveal Animation Styles"),
    bodyPara("Default animation duration is 0.6 seconds (600ms) with a cubic-bezier easing curve. The viewport detection uses a threshold of 0.1 (10% of the element must be visible) with a 100px margin offset to trigger animations slightly before elements enter the viewport, creating a smoother perceived experience."),

    heading2("8.2 Stagger Animations"),
    bodyPara("The StaggerContainer and StaggerItem components work together to create coordinated list animations. StaggerContainer wraps a group of items and defines the stagger timing. StaggerItem is applied to each child element, receiving an incremental delay based on its position in the list. Default stagger delay is 0.1 seconds (100ms) between items, creating a cascading reveal effect. This pattern is used extensively on card grids, feature lists, and service/product listings to create a polished, orchestrated entrance effect."),

    heading2("8.3 Line Reveal"),
    bodyPara("The LineReveal component animates a horizontal line from zero width to full width when scrolled into view. The animation uses scaleX transform (from scaleX(0) to scaleX(1)) with transform-origin set to left. Duration is 800ms with a smooth cubic-bezier easing. The line is typically 1px in height with the standard border color. This component serves as a decorative section divider that adds kinetic interest to the otherwise static page layout."),

    heading2("8.4 Hover Animations"),
    bodyPara("Interactive elements use CSS transitions for hover states rather than JavaScript-driven animations, ensuring 60fps performance. Cards implement a combined translateY(-4px) lift with a subtle background color shift (from transparent to rgba(0,0,0,0.02)). Buttons use a scale(1.02) transform with a brightness filter increase. Links use an opacity transition from 70% to 100% with an optional underline width animation. All hover transitions use a 200ms duration with ease-out timing."),

    heading2("8.5 Easing Curves and Durations"),
    makeTable(
      ["Animation Type", "Duration", "Easing", "Notes"],
      [
        ["ScrollReveal entrance", "600ms", "cubic-bezier(0.25, 0.1, 0.25, 1)", "Standard content reveals"],
        ["Stagger item delay", "100ms", "Inherited from parent", "Cascading list effects"],
        ["LineReveal", "800ms", "cubic-bezier(0.65, 0, 0.35, 1)", "Smooth expansion"],
        ["Hover lift (cards)", "200ms", "ease-out", "CSS transition"],
        ["Hover scale (buttons)", "200ms", "ease-out", "CSS transition"],
        ["Link opacity", "200ms", "ease-out", "CSS transition"],
        ["Page transitions", "300ms", "ease-in-out", "Route changes"],
      ],
      [2400, 1600, 3000, 2360]
    ),
    tableCaption("Table 7: Animation Timing Reference"),

    heading2("8.6 Performance Notes"),
    bodyPara("All animations are designed for GPU acceleration by exclusively using transform and opacity properties, which do not trigger layout recalculation or paint operations. The useReducedMotion hook checks `window.matchMedia('(prefers-reduced-motion: reduce)')` and disables all Framer Motion animations when the preference is active, falling back to instant visibility. Animation thresholds are carefully calibrated to avoid triggering during rapid scrolling (debounced with requestAnimationFrame), preventing excessive animation queuing that could impact frame rates."),
  ];
}

// ============================================================
// SECTION 9: Home Page Structure
// ============================================================
function section9() {
  const b1 = bl();
  return [
    heading1("9. Home Page Structure"),
    bodyPara("The home page is the primary conversion engine of the Nexgen Elit website. It is structured as a single-page experience with multiple distinct sections, each serving a specific role in the visitor's journey from initial impression to conversion action. The page follows a deliberate narrative arc: attention (hero), credibility (partners/stats), capability (services), proof (case studies), social proof (testimonials), and conversion (final CTA). Each section uses alternating backgrounds (white and #F7F8FA) to create visual rhythm."),

    heading2("9.1 Hero Section"),
    bodyPara("The hero occupies the full viewport height and serves as the primary attention capture element. It features a bold H1 headline using Poppins font at clamp(2rem, 5vw, 3.5rem) with semibold weight, positioned center-left on desktop. A supporting subtitle paragraph uses Montserrat at 16px in muted gray (#6B7280). Two CTA buttons are positioned below the headline: a primary CTA (filled blue background) and a secondary CTA (outlined with border). The hero section uses a video or image background with a dark overlay to ensure text readability. All text is white against the dark background."),

    heading2("9.2 Partners and Trust Bar"),
    bodyPara("Immediately below the hero, a compact trust bar displays partner logos or company names in a horizontal row. This section uses a subtle background (#F7F8FA) to create visual separation from the hero. The trust bar communicates credibility and market position, showing visitors that Nexgen Elit works with established organizations. Logos are displayed in a grayscale or muted color treatment to maintain the clean aesthetic."),

    heading2("9.3 Services Overview"),
    bodyPara("The services overview section provides a condensed view of the company's service capabilities. It uses a grid layout (2-3 columns on desktop) with feature cards or bento-style layout. Each card includes a Lucide icon, a service category name, and a brief description. A section label (10px uppercase) appears above the heading to provide context. Cards link to the full Services page or individual service detail pages."),

    heading2("9.4 Stats Section"),
    bodyPara("A statistics section displays key company metrics (e.g., number of clients, projects completed, years of experience) in a 3 or 4 column grid. This section uses a dark background (`bg-black`) with white text and large numeric displays. Numbers animate on scroll using counter animations. This section serves as a quick credibility indicator for visitors who scan rather than read."),

    heading2("9.5 Case Studies Preview"),
    bodyPara("A curated selection of case studies is presented in a bento grid or carousel format. Each case study card includes a project thumbnail, industry label, headline, and key results. The grid uses asymmetric column spans (e.g., 7/5 split on a 12-column grid) to create visual interest. Cards link to the full Case Studies page or individual case study details."),

    heading2("9.6 Testimonials"),
    bodyPara("The testimonials section uses an infinite scrolling carousel with customer quotes. Each testimonial card includes the quote text in a slightly larger font, the customer name, their role, and company. The carousel scrolls continuously at a calm pace, pausing on hover. Gradient fade masks on the left and right edges create a smooth visual boundary. This section provides social proof through real customer voices."),

    heading2("9.7 Final CTA"),
    bodyPara("The final CTA section uses a dark background (bg-black) with a compelling headline and a CTA button. This is the last conversion opportunity on the page, positioned after the visitor has consumed all the content above. The headline typically reinforces the primary value proposition, and the CTA button drives the visitor to the contact page or a consultation booking flow. The section includes generous vertical padding and centered alignment for maximum impact."),
  ];
}

// ============================================================
// SECTION 10: About Page Structure
// ============================================================
function section10() {
  return [
    heading1("10. About Page Structure"),
    bodyPara("The About page is the primary trust-building asset on the Nexgen Elit website. Unlike typical about pages that merely list company facts, this page is strategically structured as a psychological persuasion sequence: Observation (demonstrating understanding of the industry's challenges), Trust Chain (building credibility through specific evidence), and Buyer Psychology (addressing the emotional and rational factors that drive purchasing decisions). The page uses a predominantly white background with #F7F8FA alternating sections."),

    heading2("10.1 Observation Phase"),
    bodyPara("The page opens by demonstrating deep understanding of the logistics industry's challenges. This observation phase positions Nexgen Elit as an insider who truly understands the pain points that logistics business owners face daily. The section uses relatable language and specific scenarios (rather than generic statements) to create an immediate connection with the target audience. The hero section establishes this tone with a direct, no-nonsense headline that resonates with logistics operators."),

    heading2("10.2 Trust Chain"),
    bodyPara("Following the observation, the page builds a chain of trust signals that progressively increase visitor confidence. Each trust element is presented in its own section with generous spacing: company history and founding story, team expertise and credentials, technology stack and capabilities, notable clients and partnerships, and quantifiable results. The trust chain follows a logical progression from who the company is, to what they do, to who they do it for, and finally to what results they achieve."),

    heading2("10.3 Buyer Psychology Flow"),
    bodyPara("The final phase addresses the psychological factors that influence purchasing decisions. This includes risk reversal (guarantees, process transparency), urgency creation (limited capacity, high demand signals), and authority positioning (thought leadership, industry recognition). The page concludes with a strong CTA section that converts the accumulated trust into action. The entire flow is designed to move a skeptical visitor through a series of micro-commitments that culminate in a consultation request."),

    heading2("10.4 Section-by-Section Breakdown"),
    bodyPara("The page consists of approximately 8-10 distinct sections. Each section follows the standard layout pattern: section label (10px uppercase), heading (H2), supporting paragraph, and optional visual element (image, stats, or icon grid). Sections alternate between white and #F7F8FA backgrounds. LineReveal dividers separate sections. All content sections use ScrollReveal animations (fadeUp as default) for progressive content disclosure as the visitor scrolls."),
  ];
}

// ============================================================
// SECTION 11: Services Page Structure
// ============================================================
function section11() {
  return [
    heading1("11. Services Page Structure"),
    bodyPara("The Services page is the primary gateway to the company's professional service offerings, showcasing 34 services organized across 6 strategic categories. The page is designed to help visitors quickly identify the services most relevant to their needs while also encouraging exploration of the full service catalog. The layout combines category-level browsing with individual service cards, creating a browsable experience that accommodates both focused searchers and exploratory visitors."),

    heading2("11.1 Hero Section"),
    bodyPara("The services hero uses a centered layout with a large H1 headline, a descriptive paragraph explaining the breadth of services, and an optional search or filter element. The heading communicates the comprehensive nature of the offering (e.g., 'Complete Technology and Growth Services for Logistics Companies'). The background is white, maintaining the clean Scandinavian aesthetic. A section label above the heading provides context within the site hierarchy."),

    heading2("11.2 Category Grid Layout"),
    bodyPara("The six service categories are displayed in a responsive grid layout (1 column on mobile, 2 on tablet, 3 on desktop). Each category section includes a category title (H2), a brief description, and a grid of service cards within that category. Categories are separated by 1px border dividers or alternating backgrounds. The total service distribution is: Custom Software Development (8 services), Mobile Application Development (5 services), Web Development and Digital Presence (5 services), AI and Automation (7 services), Performance Marketing and Growth (5 services), and Business Consulting and Strategy (4 services)."),

    heading2("11.3 Sticky Navigation Behavior"),
    bodyPara("A sticky navigation bar appears when the user scrolls past the hero section, providing persistent access to category quick-jump links. The bar uses `sticky top-16 z-30` positioning to appear directly below the main Navbar. Active category is highlighted based on scroll position using Intersection Observer. This navigation pattern allows visitors to jump between categories without scrolling back to the top of the page."),

    heading2("11.4 Bento Card Specifications"),
    bodyPara("Featured or high-priority services use a bento card layout with larger visual treatment. Bento cards span multiple grid columns and include an icon, large title, extended description, and a CTA button. Standard service cards use a compact layout with title, description, and optional price range tag. All cards use sharp corners, 1px border (`border-black/[0.06]`), and consistent padding (`p-5 md:p-6`). Marketing and consulting service categories may use list-style cards (horizontal layout with icon, title, and description) instead of grid cards."),

    heading2("11.5 Process Steps Section"),
    bodyPara("Below the service listings, a process steps section illustrates the engagement workflow (e.g., Discovery, Planning, Development, Testing, Launch). This section uses a vertical timeline layout with numbered steps, icons, and descriptions. Each step animates into view on scroll. The process section serves a dual purpose: educating visitors about what to expect when engaging with Nexgen Elit, and reinforcing the company's systematic, professional approach."),

    heading2("11.6 Bottom CTA"),
    bodyPara("The page concludes with a CTA section featuring a headline such as 'Not sure what you need? Start with a free 20-minute audit.' and two action buttons: WhatsApp (for instant communication) and Email (for formal inquiries). This CTA addresses visitors who have browsed the services but are unsure which specific service meets their needs, offering a low-commitment entry point."),
  ];
}

// ============================================================
// SECTION 12: Service Inner Page Structure
// ============================================================
function section12() {
  const b1 = bl();
  return [
    heading1("12. Service Inner Page Structure"),
    bodyPara("Each service inner page (`/services/[slug]`) follows a carefully designed 11-section conversion flow that systematically addresses every question a potential client might have. This structure is not arbitrary\u2014it is based on established conversion copywriting principles and is consistent across all 34 service pages. The flow moves from positioning to problem awareness, audience identification, solution presentation, feature detail, methodology, benefit articulation, transformation visualization, process transparency, differentiation, and objection handling."),

    heading2("12.1 Section 1: Hero Positioning"),
    bodyPara("The hero section establishes the service's value proposition with a large H1 headline that communicates the core benefit. A supporting paragraph provides context and scope. An optional badge or tag indicates the service category. The hero uses generous top padding (`pt-32`) to account for the sticky Navbar, with centered or left-aligned content depending on the design variant."),

    heading2("12.2 Section 2: Problem Statement"),
    bodyPara("This section articulates the specific pain point or challenge that the service addresses. It uses empathetic language to demonstrate understanding of the visitor's situation, creating a psychological connection. The section typically includes 2-3 specific problem descriptions rather than generic statements, showing that Nexgen Elit has deep domain expertise."),

    heading2("12.3 Section 3: Who This Is For"),
    bodyPara("A dedicated section identifies the target audience for the service. This helps visitors self-qualify by seeing their own situation described. The section uses a card or list layout with audience segments (e.g., 'Fleet operators with 50+ vehicles', 'Warehouse owners seeking digitization'). Each segment includes a brief description of the specific challenges that audience faces."),

    heading2("12.4 Section 4: What We Do"),
    bodyPara("A concise overview of the service offering, written in plain language that avoids technical jargon. This section answers the fundamental question of what the visitor will receive. It may include a brief list of deliverables or a high-level description of the engagement scope. The content bridges the gap between problem identification and detailed feature presentation."),

    heading2("12.5 Section 5: Features and Deliverables"),
    bodyPara("A detailed breakdown of specific features, components, or deliverables included in the service. This section uses a card grid or feature list layout, with each item including an icon, title, and description. The level of detail varies by service complexity\u2014software development services list technical features while consulting services list process components."),

    heading2("12.6 Section 6: How We Do It"),
    bodyPara("The methodology section explains the approach, tools, and techniques used to deliver the service. This builds confidence by showing that Nexgen Elit has a systematic, repeatable process rather than an ad-hoc approach. The section may include a visual process flow, technology stack mentions, or step-by-step methodology description."),

    heading2("12.7 Section 7: Benefits"),
    bodyPara("A benefits-focused section that translates features into business outcomes. Rather than listing technical capabilities, this section describes the measurable impact on the client's business: cost reduction, time savings, revenue growth, compliance improvement, or operational efficiency. Benefits are presented as measurable outcomes where possible."),

    heading2("12.8 Section 8: Before vs After"),
    bodyPara("A transformation visualization section that contrasts the client's current state ('Before') with their expected state after engaging the service ('After'). This section uses a two-column layout with clear visual distinction (e.g., red/warning for before, green/success for after). The contrast creates a compelling visual argument for the service's value."),

    heading2("12.9 Section 9: Process and Timeline"),
    bodyPara("A detailed timeline showing the typical engagement from start to finish. The timeline uses a vertical or horizontal process layout with numbered steps, estimated durations, and key milestones. This section sets clear expectations about project scope and duration, reducing uncertainty and building trust."),

    heading2("12.10 Section 10: Why Nexgen"),
    bodyPara("A differentiation section that explains why Nexgen Elit is the best choice for this specific service. This includes company-specific advantages such as logistics domain expertise, technology stack superiority, team qualifications, client satisfaction metrics, or unique methodologies. The section uses a card or feature grid layout with supporting evidence."),

    heading2("12.11 Section 11: FAQ"),
    bodyPara("An accordion-style FAQ section addressing common questions and objections. Questions are chosen based on actual sales conversations and cover topics like pricing, timeline, technology choices, support, and guarantees. The FAQ serves as objection handling, addressing concerns that might prevent a visitor from converting. Each answer is concise (2-3 sentences) and written in a confident, direct tone."),
  ];
}

// ============================================================
// SECTION 13: Products Page Structure
// ============================================================
function section13() {
  return [
    heading1("13. Products Page Structure"),
    bodyPara("The Products page showcases the company's comprehensive catalog of 96 logistics software products organized across 6 transportation mode categories. This page is designed to serve both discovery-oriented visitors who want to explore the full catalog and focused visitors who know exactly what product they need. The combination of search functionality, sticky category navigation, and visual product grids creates a browsable experience that scales effectively with the large product count."),

    heading2("13.1 Tab-Based Category Switching"),
    bodyPara("The primary navigation mechanism is a horizontal tab bar that becomes sticky after the hero section scrolls out of view. The tab bar includes an 'All' tab plus 6 category tabs, each with an emoji icon for visual identification. Active tab state uses a background fill or bottom border highlight. Clicking a tab smooth-scrolls to the corresponding category section. The tab bar uses `overflow-x-auto` with hidden scrollbar for mobile compatibility, allowing horizontal swiping on touch devices."),

    heading2("13.2 Featured Bento Grid Layout"),
    bodyPara("At the top of each category section, featured or flagship products may be displayed in a bento grid layout with asymmetric column spans. This creates visual hierarchy within the category, highlighting the most important or popular products. Bento cards include larger titles, extended descriptions, and prominent visual treatment. The bento layout uses CSS Grid with explicit column span definitions (e.g., `col-span-7` and `col-span-5` on a 12-column grid)."),

    heading2("13.3 Product List Layout"),
    bodyPara("The main product listing uses a responsive card grid (1 column on mobile, 2 on tablet, 3-4 on desktop). Each product card displays the product name and a one-line description within a compact card format. Cards use the standard design system tokens: sharp corners, 1px border, white background with optional #F7F8FA alternating rows, and hover effects (background shift and subtle lift). Product count badges on each category section header show the total number of products in that category."),

    heading2("13.4 Stats Section (Dark Background)"),
    bodyPara("A statistics section with a dark background (`bg-black`) provides at-a-glance metrics about the product catalog. Stats such as total product count (96+), number of logistics modes covered (6), and product categories are displayed in a multi-column grid with large numbers and descriptive labels. The dark background creates strong visual contrast with the predominantly light content above and below."),

    heading2("13.5 Modes Overview Grid"),
    bodyPara("A grid section provides a visual overview of the six transportation modes covered by the product catalog. Each mode is represented by a card with the mode name, an icon, and the product count. The six modes are: Roadway Logistics Software (18 products), Railway Logistics Software (15 products), Waterways and Maritime Logistics Software (16 products), Airways Logistics Software (15 products), Warehouse and Fulfillment Software (12 products), and Cross-Modal and Enterprise Logistics Software (20 products)."),

    heading2("13.6 Search Functionality"),
    bodyPara("A search bar at the top of the page provides real-time client-side filtering using React state management. As the user types, products that do not match the search query are hidden instantly without page reload. A result count indicator shows how many products match the current search. The search covers both product names and descriptions. An empty state message is displayed when no products match the search query."),
  ];
}

// ============================================================
// SECTION 14: Product Inner Page Structure
// ============================================================
function section14() {
  return [
    heading1("14. Product Inner Page Structure"),
    bodyPara("Product inner pages (`/products/[slug]`) follow the same 11-section conversion flow as service inner pages, but with important architectural differences in how content is sourced and managed. The data architecture separates category-level shared content from product-level unique content, ensuring consistency across products within the same category while allowing individual products to have specific features, benefits, and FAQ entries."),

    heading2("14.1 Data Architecture"),
    bodyPara("Product content is managed through two data structures: `productsData` (product-level information) and `categoriesMeta` (category-level shared content). The productsData array contains individual product objects with fields for slug, name, category, features, benefits, before/after states, methodology ('How We Do It'), and FAQ entries. The categoriesMeta array contains category objects with shared fields for problem statement, target audience, process timeline, and 'Why Nexgen' differentiation content."),
    bodyPara("This separation means that when a product page is rendered, it pulls shared sections (Problem, Audience, Process, WhyNexgen) from the category's metadata and unique sections (Features, Benefits, Before/After, How We Do It, FAQ) from the individual product data. This architecture ensures that all products within a category consistently communicate the same problem statement and audience, while individual product pages highlight their unique value propositions."),

    heading2("14.2 Category-Level Shared Sections"),
    heading3("Problem Statement"),
    bodyPara("This section describes the overarching logistics challenge that all products in this category address. For example, the Roadway Logistics category's problem statement would discuss challenges specific to road transportation operations. This shared context helps visitors understand the category's relevance before diving into individual product details."),

    heading3("Target Audience"),
    bodyPara("A shared description of the typical users and organizations that benefit from products in this category. This section identifies specific roles (fleet managers, dispatch coordinators, etc.) and organizational types (mid-sized trucking companies, large fleet operators) that the category serves."),

    heading3("Process Timeline"),
    bodyPara("A shared process section that describes the typical implementation and deployment timeline for products in this category. Since most products within a category follow similar implementation patterns, this shared section reduces content duplication while ensuring consistency."),

    heading3("Why Nexgen Elit"),
    bodyPara("A shared differentiation section that explains Nexgen Elit's specific advantages for this product category. This includes domain expertise, technology stack, integration capabilities, and support infrastructure that are common across all products in the category."),

    heading2("14.3 Product-Level Unique Sections"),
    heading3("Features and Deliverables"),
    bodyPara("Product-specific features presented in a card grid layout. Each feature includes an icon, title, and description. Features are unique to each product and describe the specific capabilities and functionalities that the software provides."),

    heading3("Benefits"),
    bodyPara("Product-specific benefits that translate features into measurable business outcomes. Benefits focus on operational improvements, cost savings, efficiency gains, and competitive advantages that the product delivers."),

    heading3("Before vs After"),
    bodyPara("A product-specific transformation visualization showing the operational state before and after implementing the product. The contrast highlights specific pain points eliminated and specific improvements achieved."),

    heading3("How We Do It"),
    bodyPara("Product-specific methodology describing the technical approach, tools, and processes used to build and deploy the product. This section may include technology stack details, architecture patterns, and integration approaches."),

    heading3("FAQ"),
    bodyPara("Product-specific frequently asked questions addressing common queries about the product's functionality, pricing, implementation, support, and integration capabilities."),
  ];
}

// ============================================================
// SECTION 15: Blog System Structure
// ============================================================
function section15() {
  return [
    heading1("15. Blog System Structure"),
    bodyPara("The blog system is a comprehensive content management implementation that supports 31 articles across multiple categories. The system includes four distinct page types: listing, article detail, category archive, and search. Blog content is managed through TypeScript data files (`blogs.ts`, `blogs-part1.ts`, `blogs-part2.ts`) rather than a database, enabling version-controlled content with full type safety. This approach simplifies deployment and ensures content consistency across builds."),

    heading2("15.1 Listing Page Layout"),
    bodyPara("The blog listing page (`/blogs`) displays all articles in a responsive grid layout. A hero section with a heading ('Blog' or 'Insights') and subtitle establishes the page context. Below the hero, a category filter bar allows visitors to filter articles by topic. Articles are displayed as cards in a grid (1 column on mobile, 2 on tablet, 3 on desktop). Each card shows the article title, a brief excerpt, the publication date, the category tag, and a read time estimate. Cards link to the individual article detail pages."),

    heading2("15.2 Article Inner Page"),
    bodyPara("Blog article pages (`/blogs/[slug]`) provide the full reading experience. A breadcrumb navigation trail shows the article's position (Home > Blog > Category > Article Title). The article header includes the title (H1), publication date, author info, category tag, and estimated read time. The body content is rendered as formatted HTML or markdown with proper heading hierarchy, paragraph spacing, and image support. A sidebar or bottom section displays related articles from the same category, encouraging continued reading."),

    heading2("15.3 Category Pages"),
    bodyPara("Blog category pages (`/blogs/category/[slug]`) display all articles within a specific category. The page includes a category header with the category name and description, followed by a filtered grid of article cards. The layout mirrors the main listing page but shows only articles from the selected category. A breadcrumb trail indicates the current category context."),

    heading2("15.4 Search Functionality"),
    bodyPara("The blog search page (`/blogs/search`) provides full-text search across all blog articles. The search interface includes a text input field with real-time filtering. Results are displayed as article cards with highlighted matching text. The search covers article titles, excerpts, and body content. An empty state with a helpful message is shown when no results match the query."),

    heading2("15.5 Data Architecture"),
    bodyPara("Blog content is stored in TypeScript data files in the `/src/data/` directory. The main file (`blogs.ts`) exports a combined array of all article objects. Each article object includes fields for slug, title, excerpt, content, category, publication date, author, read time, and optional cover image. Categories are defined as a separate type with slug and name fields. The data is split across multiple files (`blogs-part1.ts`, `blogs-part2.ts`) for maintainability, then merged in the main export."),

    heading2("15.6 Content Categories"),
    bodyPara("Blog articles are organized into categories that align with the company's service offerings and target audience interests. Categories include topics such as logistics technology, supply chain management, digital transformation, AI in logistics, fleet management, warehouse automation, and business growth strategies. Each category typically contains 3-6 articles, ensuring sufficient depth for meaningful filtering while maintaining browsability."),
  ];
}

// ============================================================
// SECTION 16: Header Behavior
// ============================================================
function section16() {
  return [
    heading1("16. Header Behavior"),
    bodyPara("The Navbar component is one of the most critical UI elements on the website, providing persistent navigation access across all pages. Its behavior is carefully engineered to balance visibility, content area usage, and user experience across different scroll positions and device sizes. The implementation leverages Next.js App Router layout nesting and Framer Motion for smooth transitions."),

    heading2("16.1 Sticky Positioning"),
    bodyPara("The Navbar uses `fixed top-0 left-0 right-0 z-40` positioning to remain visible at the top of the viewport during scrolling. The fixed positioning (rather than sticky) ensures consistent behavior across all browsers and prevents the navbar from disappearing during fast scrolling. The z-index of 40 places it above all content elements but below modal overlays and the mobile navigation menu."),

    heading2("16.2 Transparent to White Transition"),
    bodyPara("On initial page load, the Navbar background is transparent (`bg-transparent`), allowing the hero section's visual content (video, image, or colored background) to extend to the full viewport edge. As the user scrolls past a defined threshold (typically 100px), a state change triggers a background transition to white (`bg-white`) with a subtle bottom border (`border-b border-black/[0.06]`). This transition is animated using CSS transitions (`transition-all duration-300`) for a smooth, polished feel."),
    bodyPara("The transition logic is implemented using a scroll event listener or Intersection Observer that tracks the scroll position. Text color also adjusts during the transition\u2014on transparent backgrounds, text is white for visibility against dark hero sections; on white backgrounds, text transitions to the standard heading color (#111318). The CTA button also adapts its style to maintain contrast against both backgrounds."),

    heading2("16.3 Mobile Fullscreen Overlay"),
    bodyPara("On screens below the `md` breakpoint (768px), the desktop navigation links are hidden and replaced with a hamburger menu icon. Clicking the icon opens a fullscreen overlay menu that covers the entire viewport. The overlay uses a high z-index (z-50) and a dark background (typically black or near-black) with white text. Navigation links are displayed in a vertical stack with generous spacing between items. A close button (X icon) dismisses the overlay."),
    bodyPara("The overlay entrance animation uses Framer Motion for a smooth slide-in effect from the right side of the screen. When dismissed, the overlay slides out in the reverse direction. The transition duration is approximately 300ms with an ease-in-out curve. Scroll position is preserved when opening and closing the overlay, preventing jarring jumps in content position."),

    heading2("16.4 Logo and Navigation Links"),
    bodyPara("The Navbar contains the Nexgen Elit logo (as a Next.js Image component with the logo file from `/public/`) positioned on the left side, followed by navigation links on the right. The logo links to the home page (`/`). Navigation links use the Montserrat font at 14px with medium weight, using Next.js Link components for client-side navigation. The active page link is visually distinguished through a color change or underline indicator. A CTA button ('Get Started' or similar) is positioned at the far right of the navigation bar."),
  ];
}

// ============================================================
// SECTION 17: Footer Structure
// ============================================================
function section17() {
  return [
    heading1("17. Footer Structure"),
    bodyPara("The SiteFooter component serves a dual purpose: providing a final conversion opportunity through a video CTA section and delivering comprehensive site navigation through a structured footer. This two-zone approach ensures that the footer contributes to both conversion goals and user experience objectives."),

    heading2("17.1 Video CTA with Overlay"),
    bodyPara("The upper zone of the footer features a full-width video background with a dark gradient overlay. The video creates a cinematic, premium feel that contrasts with the predominantly light content above. The gradient overlay ensures text readability while allowing the video to remain partially visible. The CTA content is centered and includes a compelling headline (e.g., 'Ready to Transform Your Logistics Operations?'), a supporting subtitle, and one or two action buttons. This section represents the last major conversion opportunity on any page."),

    heading2("17.2 Navigation Columns"),
    bodyPara("Below the video CTA, the footer proper is organized into a multi-column grid layout. The typical structure includes four columns: Company (About, Partners, Careers, Investor links), Services (links to service categories or the main Services page), Resources (Blogs, Case Studies, Contact), and Legal (Privacy Policy, Terms and Conditions). Each column has a column heading in bold text followed by a vertical list of links. Links use the Montserrat font at 14px with muted gray color that brightens on hover."),

    heading2("17.3 Newsletter Subscription"),
    bodyPara("A newsletter subscription form may be included in the footer or within the CTA zone. The form typically consists of an email input field and a submit button. The form submission is handled by the `/api/newsletter` API route. Subscription is positioned as a value exchange ('Get logistics insights delivered to your inbox') rather than a generic 'Subscribe' call. The form uses the design system's sharp-cornered input styling with 1px border."),

    heading2("17.4 Social Links"),
    bodyPara("Social media links (LinkedIn, Twitter, Instagram, YouTube) are displayed as icon buttons in the footer. Icons are sourced from the Lucide React library, maintaining consistency with the rest of the site's icon system. Social links use a subtle hover animation (scale or opacity change) to indicate interactivity. Links open in new browser tabs (`target=\"_blank\"`) to keep the user on the Nexgen Elit site."),

    heading2("17.5 Copyright and Bottom Bar"),
    bodyPara("A bottom bar at the very bottom of the footer displays the copyright notice (e.g., '2025 Nexgen Elit. All rights reserved.') separated from the main footer content by a 1px border line. This bar may also include secondary links (Sitemap, Accessibility, Language selection) on larger screens. The bottom bar uses smaller font size (12px) and reduced opacity to create visual hierarchy within the footer itself."),
  ];
}

// ============================================================
// SECTION 18: Responsive Design Requirements
// ============================================================
function section18() {
  return [
    heading1("18. Responsive Design Requirements"),
    bodyPara("The Nexgen Elit website is designed mobile-first, ensuring that the experience is fully functional and visually polished on the smallest screens before progressively enhancing for larger viewports. The responsive design system uses Tailwind CSS 4's breakpoint utilities with five standard breakpoints: sm (640px), md (768px), lg (1024px), and xl (1280px). Every component, layout, and interaction pattern has been tested across these breakpoints to ensure consistent quality."),

    heading2("18.1 Breakpoint Specifications"),
    makeTable(
      ["Breakpoint", "Min Width", "CSS Query", "Primary Target"],
      [
        ["Base (mobile)", "0px", "@media (min-width: 0px)", "Smartphones (portrait)"],
        ["sm", "640px", "@media (min-width: 640px)", "Smartphones (landscape), small tablets"],
        ["md", "768px", "@media (min-width: 768px)", "Tablets, small laptops"],
        ["lg", "1024px", "@media (min-width: 1024px)", "Laptops, desktops"],
        ["xl", "1280px", "@media (min-width: 1280px)", "Large desktops, wide monitors"],
      ],
      [1800, 1400, 3200, 2960]
    ),
    tableCaption("Table 8: Responsive Breakpoint Specifications"),

    heading2("18.2 Grid Collapse Rules"),
    bodyPara("Multi-column grids follow a progressive enhancement pattern. On mobile (base), all grids collapse to a single column. At the `sm` breakpoint, grids may expand to 2 columns. At the `md` breakpoint, 2-3 column layouts become available. At the `lg` breakpoint, the full desktop layout with 3-4 columns is rendered. At the `xl` breakpoint, wide layouts with 4-6 columns are activated. Specific collapse rules include: card grids (1 > 2 > 3 columns), navigation (vertical > horizontal), hero layouts (stacked > side-by-side), and footer columns (1 > 2 > 4 columns)."),

    heading2("18.3 Typography Scaling"),
    bodyPara("Typography uses CSS `clamp()` functions for fluid scaling between breakpoints. Headings scale from a mobile minimum to a desktop maximum without requiring breakpoint-specific overrides. For example, the H1 font size uses `clamp(2rem, 5vw, 3.5rem)`, which smoothly scales from 32px on small screens to 56px on large screens. Body text remains at 16px (1rem) across all breakpoints for optimal readability. Spacing values also scale proportionally using responsive padding classes (`p-4 md:p-6 lg:p-8`)."),

    heading2("18.4 Mobile Navigation"),
    bodyPara("The mobile navigation uses a fullscreen overlay pattern that replaces the desktop horizontal navbar. The hamburger icon is always visible on mobile screens (below md breakpoint) in the top-right corner of the Navbar. The overlay slides in from the right with a smooth animation, covering the entire viewport with a dark background. Navigation links are displayed vertically with generous spacing (py-4 per link) for easy touch targeting. The overlay includes all the same links as the desktop navigation plus the CTA button. Scroll position is locked when the overlay is open to prevent background scrolling."),
  ];
}

// ============================================================
// SECTION 19: SEO Architecture
// ============================================================
function section19() {
  return [
    heading1("19. SEO Architecture"),
    bodyPara("The SEO architecture is designed to maximize organic search visibility for logistics technology keywords in the Indian market. Every page on the site follows strict SEO best practices including semantic HTML, proper heading hierarchy, optimized meta tags, structured data markup, and strategic internal linking. The combination of comprehensive page content (34 service pages, 96 product pages, 31 blog articles) and technical SEO optimization creates a powerful organic search presence."),

    heading2("19.1 URL Structure"),
    bodyPara("URLs follow a clean, hierarchical pattern using kebab-case formatting. The structure is: `/{page-type}/{slug}` for detail pages (e.g., `/services/transport-management-system`, `/products/fleet-tracking-software`). Category-level pages use simple paths (e.g., `/services`, `/products`, `/blogs`). Blog category URLs follow `/blogs/category/{category-slug}` and search uses `/blogs/search?q={query}`. Dynamic routes use Next.js generateStaticParams for static generation at build time, ensuring fast page loads and crawlable URLs."),

    heading2("19.2 Meta Description Format"),
    bodyPara("Each page has a unique meta description following the format: '{Page-specific value proposition} | Nexgen Elit'. Descriptions are 150-160 characters, include the primary keyword naturally, and end with a call-to-action or differentiator. Service pages mention the specific service and its benefit. Product pages mention the product category and primary capability. Blog pages use the article's excerpt as the meta description."),

    heading2("19.3 Heading Hierarchy Rules"),
    bodyPara("Every page follows a strict heading hierarchy. H1 is used exactly once per page for the page title. H2 is used for major sections. H3 is used for subsections within H2 sections. The heading hierarchy is never skipped (no H1 followed directly by H3). This structure serves both accessibility (screen reader navigation) and SEO (search engine content parsing). Blog articles maintain heading hierarchy within their content, starting with H2 after the article title H1."),

    heading2("19.4 Schema Markup"),
    bodyPara("Structured data (JSON-LD) is implemented for key page types. The organization schema provides company information including name, logo, URL, and contact details. Service pages use the Service schema markup. Blog articles use Article schema with author, datePublished, and image properties. Product pages may use Product or SoftwareApplication schema. FAQ sections use the FAQPage schema markup to enable rich snippets in search results. The structured data is defined in the `/src/lib/seo/structured-data.ts` module."),

    heading2("19.5 Internal Linking Strategy"),
    bodyPara("Internal links create a dense link graph that distributes page authority and facilitates search engine crawling. The strategy includes: navigation links (header and footer), contextual in-content links (service pages linking to related products, blog articles linking to relevant services), breadcrumb links on detail pages, related content suggestions on blog articles, and cross-category links on listing pages. All internal links use descriptive anchor text rather than generic phrases like 'click here'. The sitemap is auto-generated via `/src/app/sitemap.ts` and submitted to search engines through robots.txt."),
  ];
}

// ============================================================
// SECTION 20: Performance Requirements
// ============================================================
function section20() {
  return [
    heading1("20. Performance Requirements"),
    bodyPara("Performance is a critical consideration for the Nexgen Elit website, directly impacting both user experience and search engine rankings. The performance strategy encompasses image optimization, font loading, code splitting, CSS optimization, and runtime performance of animations and interactive elements. The target is to achieve a Lighthouse performance score of 90+ on all pages."),

    heading2("20.1 Image Optimization"),
    bodyPara("All images are served through Next.js Image component which provides automatic optimization including: responsive srcsets (multiple image sizes for different viewports), WebP/AVIF format conversion for smaller file sizes, lazy loading for below-the-fold images, and blur placeholder for perceived loading performance. Images are stored in the `/public/` directory and referenced through the Image component with explicit width and height props to prevent layout shift. Video backgrounds use HLS.js for adaptive streaming on the hero and footer sections."),

    heading2("20.2 Font Loading Strategy"),
    bodyPara("Fonts are loaded through Next.js `next/font/google` module which provides several performance optimizations: automatic self-hosting (fonts are downloaded at build time and served from the same domain), font subsetting (only the characters used on the page are included), and `font-display: swap` behavior to prevent invisible text during loading. The Poppins and Montserrat font families are imported in the root layout (`/src/app/layout.tsx`) and assigned to CSS custom properties (--font-poppins and --font-montserrat) that are referenced throughout the site."),

    heading2("20.3 Code Splitting"),
    bodyPara("Next.js App Router automatically implements route-based code splitting, ensuring that each page only loads the JavaScript required for that specific route. Dynamic routes (service detail, product detail, blog article) use `generateStaticParams` to pre-render all known pages at build time while maintaining dynamic capabilities for new content. Client-side interactivity is isolated to specific components using the 'use client' directive, ensuring that server components remain lightweight and stream their HTML to the client for faster Time to First Byte (TTFB)."),

    heading2("20.4 CSS Strategy"),
    bodyPara("Tailwind CSS 4 provides an optimized CSS pipeline. Only the CSS classes actually used in the application are included in the production build through tree-shaking. CSS is extracted at build time and served as static files, avoiding runtime CSS-in-JS overhead. The Tailwind configuration uses a JIT (Just-In-Time) compilation approach that generates styles on-demand during development and produces a minimal production CSS file. Global CSS custom properties and base styles are defined in `/src/app/globals.css`."),

    heading2("20.5 Animation Performance"),
    bodyPara("All Framer Motion animations are configured to use GPU-accelerated properties only (transform and opacity), avoiding layout-triggering properties like width, height, top, or left. The `useReducedMotion` hook provides a fallback that disables all animations for users with motion sensitivity preferences. Animation listeners use Intersection Observer rather than scroll event listeners to minimize main thread work during scrolling. The animation library is imported dynamically where possible to reduce initial bundle size."),
  ];
}

// ============================================================
// SECTION 21: Accessibility Requirements
// ============================================================
function section21() {
  return [
    heading1("21. Accessibility Requirements"),
    bodyPara("The Nexgen Elit website is built with accessibility as a core requirement, not an afterthought. The implementation follows WCAG 2.1 Level AA guidelines, ensuring that the site is usable by people with diverse abilities including visual, motor, auditory, and cognitive disabilities. Accessibility considerations are integrated into every component, interaction pattern, and content decision."),

    heading2("21.1 Color Contrast Ratios"),
    bodyPara("All text meets WCAG AA minimum contrast ratios: 4.5:1 for normal text (below 18px) and 3:1 for large text (18px and above or 14px bold). The design system's color palette was specifically chosen to maintain these ratios. The heading color (#111318 on white background) achieves a contrast ratio of approximately 16:1, well above the minimum. Body text (#6B7280 on white) achieves approximately 5.9:1, exceeding the 4.5:1 requirement. The muted label color (#9CA3AF on white) achieves approximately 3.0:1, which is acceptable for large text but is only used for supplementary labels (10px uppercase), not for content text."),

    heading2("21.2 Keyboard Navigation"),
    bodyPara("The entire site is fully navigable using keyboard only. The tab order follows a logical top-to-bottom, left-to-right flow. Focus indicators are visible and prominent (using the standard browser focus ring, enhanced with custom styling). Interactive elements (links, buttons, form inputs, accordion triggers) are all reachable via Tab key. Dropdown menus and overlays (mobile navigation) support keyboard open/close with Escape key to dismiss. Skip-to-content links are provided for screen reader users to bypass repetitive navigation."),

    heading2("21.3 ARIA Labels"),
    bodyPara("ARIA attributes are applied to interactive components that require additional context for screen readers. Navigation landmarks (`role=\"navigation\"`, `aria-label=\"Main navigation\"`) identify key page regions. Icon-only buttons include `aria-label` attributes describing their action. Accordion components use `aria-expanded` and `aria-controls` attributes. Modal overlays use `aria-modal=\"true\"` and trap focus within the modal. Images include descriptive `alt` text, and decorative images use `alt=\"\"` to be ignored by screen readers."),

    heading2("21.4 Reduced Motion Support"),
    bodyPara("The custom `useReducedMotion` hook detects the user's `prefers-reduced-motion: reduce` media query preference. When active, all Framer Motion animations are disabled, transitioning instantly between states rather than animating. The hook is applied at the application layout level, ensuring that the preference is respected across all pages and components. CSS transitions on hover states may also be reduced or eliminated when this preference is active."),
  ];
}

// ============================================================
// SECTION 22: Content Guidelines
// ============================================================
function section22() {
  const b1 = bl(), b2 = bl();
  return [
    heading1("22. Content Guidelines"),
    bodyPara("Content is the primary conversion tool on the Nexgen Elit website. Every piece of text\u2014from page titles to button labels\u2014is written with intention, following a consistent tone and structure that reinforces the brand's positioning as a authoritative, no-nonsense technology partner for the logistics industry. The content guidelines ensure that all website copy maintains quality, consistency, and conversion effectiveness."),

    heading2("22.1 Heading Length Rules"),
    bulletItem("H1 (Page Title): Maximum 8-12 words. Must communicate the primary value proposition or topic clearly.", b1),
    bulletItem("H2 (Section Title): Maximum 6-10 words. Should be descriptive and actionable where possible.", b1),
    bulletItem("H3 (Subsection): Maximum 5-8 words. Used for specific topics within sections.", b1),
    bulletItem("Section Labels: Maximum 3-5 words. Used for category/context tags above headings.", b1),
    bulletItem("Button Text: Maximum 2-5 words. Action-oriented (e.g., 'Get Started', 'Book a Demo').", b1),
    bulletItem("All headings use sentence case or title case consistently. No ALL CAPS except section labels.", b1),

    heading2("22.2 Paragraph Guidelines"),
    bodyPara("Body paragraphs should be 2-4 sentences (40-80 words) for optimal web readability. Each paragraph should communicate a single idea or point. Paragraphs should flow logically with clear transitions between them. Technical jargon should be minimized or explained when used. Quantifiable claims should include specific numbers or ranges rather than vague superlatives. Paragraphs should never start with 'We believe' or similar hedging language\u2014confidence and directness are preferred."),

    heading2("22.3 Tone of Voice"),
    bodyPara("The Nexgen Elit tone of voice is professional, direct, and confident. The writing style avoids fluff, filler words, and unnecessary qualifiers. Sentences are clear and concise. The tone conveys expertise without arrogance, confidence without aggressiveness. Humor is used sparingly and only in appropriate contexts (e.g., the contact form's cheeky placeholders). Industry-specific terminology is used accurately to demonstrate domain expertise. The overall impression should be: these people know what they're talking about, and they'll tell you straight."),

    heading2("22.4 Structure Rules"),
    bulletItem("Each page starts with an H1 and maintains strict heading hierarchy (no skipping levels).", b2),
    bulletItem("Content is organized in scannable blocks with clear visual separation between sections.", b2),
    bulletItem("Lists (bullet or numbered) are preferred over long paragraphs for presenting multiple items.", b2),
    bulletItem("Key metrics and data points are highlighted for visibility.", b2),
    bulletItem("CTAs are action-oriented and create a sense of next-step progression.", b2),
    bulletItem("No Lorem Ipsum or placeholder text in production\u2014every word must serve a purpose.", b2),
  ];
}

// ============================================================
// SECTION 23: Conversion Elements
// ============================================================
function section23() {
  const b1 = bl();
  return [
    heading1("23. Conversion Elements"),
    bodyPara("Conversion elements are the interactive touchpoints that transform website visitors into qualified leads. The Nexgen Elit website employs a systematic conversion strategy that places appropriate conversion prompts at every stage of the user journey. Rather than relying on a single contact form, the site uses a distributed conversion architecture that captures leads at multiple points of engagement."),

    heading2("23.1 CTA Placement Strategy"),
    bodyPara("CTA placement follows the 'progressive engagement' model. Primary CTAs appear in the Navbar (persistent visibility), hero sections (immediate action), and page footers (final opportunity). Secondary CTAs are embedded within content sections (after service descriptions, after case studies, after testimonials). Tertiary CTAs appear as inline links within body text. This multi-level approach ensures that conversion opportunities are available without being intrusive at any single point."),
    bodyPara("CTA button text is optimized for clarity and action orientation. Common CTA texts include: 'Get Started' (low commitment, exploratory), 'Book a Demo' (medium commitment, product-focused), 'Schedule a Call' (medium commitment, consultation), 'Get a Free Audit' (high value, low risk), 'Start Your AI Journey' (aspirational, category-specific). Each CTA is paired with an appropriate destination page or form."),

    heading2("23.2 Lead Capture Forms"),
    bodyPara("The primary lead capture form is on the Contact page (`/contact`). The form includes strategic qualification fields that help the sales team prioritize leads: Name (required), Email (required), Company Name, Revenue Range (dropdown: Below 10L, 10L-50L, 50L-1Cr, 1Cr-2Cr, 2Cr+), Current Situation (dropdown: Technology Upgrade, Scaling Operations, Compliance, All of the Above), and Message (textarea). The revenue and situation dropdowns serve as automatic lead qualification, routing high-value leads to senior sales staff."),
    bodyPara("Additional lead capture points include: the newsletter subscription form in the footer (email only, low commitment), the final CTA section on the home page (WhatsApp quick contact + email), and inline CTAs on service and product detail pages that link to the contact form with pre-filled context."),

    heading2("23.3 Micro-Conversion Points"),
    bulletItem("Newsletter subscription: Captures email for long-term nurturing campaigns.", b1),
    bulletItem("Blog category exploration: Demonstrates content engagement for retargeting.", b1),
    bulletItem("Product search queries: Indicates specific intent for personalized follow-up.", b1),
    bulletItem("FAQ accordion expansion: Shows which objections or questions are top-of-mind.", b1),
    bulletItem("Video CTA engagement: Measures high-intent interest from video plays.", b1),
    bulletItem("WhatsApp quick contact: Provides an instant, low-friction communication channel.", b1),

    heading2("23.4 Urgency and Authority Signals"),
    bodyPara("The website incorporates several urgency and authority signals that encourage conversion without using manipulative tactics. Authority signals include: specific client numbers (200+ companies served), quantifiable results in case studies (e.g., '40% cost reduction'), partner logos in the trust bar, and detailed team credentials on the About page. Urgency signals include: mention of limited consultation capacity ('We take on 5 new clients per month'), seasonal service promotions, and time-limited audit offers. All urgency signals are truthful and verifiable, maintaining the brand's credibility."),
  ];
}

// ============================================================
// SECTION 24: Developer Implementation Notes
// ============================================================
function section24() {
  const b1 = bl(), b2 = bl(), b3 = bl(), b4 = bl();
  return [
    heading1("24. Developer Implementation Notes"),
    bodyPara("This section provides technical implementation details for developers working on the Nexgen Elit website. It covers the component architecture, data management patterns, animation hooks, and tooling conventions that ensure consistency and maintainability across the codebase. All development follows the established Next.js 15 App Router patterns with TypeScript strict mode enabled."),

    heading2("24.1 Reusable Components List"),
    bodyPara("The component library is organized in the `/src/components/` directory. Key reusable components include:"),
    bulletItem("Navbar (`/src/components/Navbar.tsx`): Sticky header with transparent-to-white transition and mobile overlay.", b1),
    bulletItem("SiteFooter (`/src/components/SiteFooter.tsx`): Video CTA section + multi-column footer.", b1),
    bulletItem("Footer (`/src/components/Footer.tsx`): Alternative footer component for simpler pages.", b1),
    bulletItem("Animations (`/src/components/animations.tsx`): ScrollReveal, StaggerContainer, StaggerItem, LineReveal, FadeIn.", b1),
    bulletItem("UI Components (`/src/components/ui/`): Full shadcn/ui library (Button, Card, Input, Dialog, etc.).", b1),
    bulletItem("LoadingScreen (`/src/components/LoadingScreen.tsx`): Animated loading screen with counter.", b1),
    bulletItem("TabVisibilityTracker (`/src/components/tab-visibility-tracker.tsx`): Tracks browser tab visibility.", b1),

    heading2("24.2 Layout Containers"),
    bodyPara("Pages use standardized layout containers for consistent spacing and width. The primary content container uses `max-w-5xl mx-auto px-6 md:px-10 lg:px-16` for text-focused pages. Wider layouts use `max-w-7xl mx-auto` for grid-heavy pages. Section spacing follows `py-20 md:py-28` for standard sections and `pt-32 pb-20` for hero sections (extra top padding for Navbar clearance). All layout tokens should be applied consistently to maintain the Scandinavian whitespace aesthetic."),

    heading2("24.3 Animation Hooks"),
    bodyPara("Custom hooks in the `/src/hooks/` directory provide reusable animation and interaction logic:"),
    bulletItem("useReducedMotion (`/src/hooks/use-reduced-motion.ts`): Detects `prefers-reduced-motion` preference.", b2),
    bulletItem("useScrollProgress (`/src/hooks/use-scroll-progress.ts`): Tracks page scroll progress as a percentage.", b2),
    bulletItem("useIntersectionObserver (`/src/hooks/use-intersection-observer.ts`): Generic intersection detection hook.", b2),
    bulletItem("useMobile (`/src/hooks/use-mobile.ts`): Detects mobile viewport state for responsive logic.", b2),
    bulletItem("useToast (`/src/hooks/use-toast.ts`): Toast notification system for user feedback.", b2),

    heading2("24.4 Data File Architecture"),
    bodyPara("Content data is managed through TypeScript files in the `/src/data/` directory. This approach provides type safety, version control, and build-time validation:"),
    bulletItem("services-data.ts / services-data-merged.ts: Service catalog data (34 services across 6 categories).", b3),
    bulletItem("products-data.ts: Product catalog data (96 products across 6 categories) plus category metadata.", b3),
    bulletItem("blogs.ts / blogs-part1.ts / blogs-part2.ts: Blog articles data (31 articles with categories).", b3),
    bulletItem("Type definitions are in `/src/types/content.types.ts` for service and product data structures.", b3),
    bulletItem("Form types are in `/src/types/forms.types.ts` for contact and newsletter form validation.", b3),

    heading2("24.5 Icon System"),
    bodyPara("All icons use the Lucide React library (`lucide-react`), providing a consistent, open-source icon set with over 1000 icons. Icons are imported individually for tree-shaking optimization (e.g., `import { ArrowRight, Check, Clock } from 'lucide-react'`). Icon sizing follows a standard scale: 16px for inline/small icons, 20px for standard icons, 24px for feature cards, and 32-48px for hero section icons. No emojis are used anywhere in the production interface\u2014Lucide icons are the sole icon system."),
    bodyPara("The icon system extends to section dividers (Line), navigation arrows (ChevronRight, ChevronDown), status indicators (Check, X), and decorative elements. All icons inherit the current text color unless explicitly overridden, ensuring they adapt automatically to different background contexts."),
  ];
}

// ============================================================
// SECTION 25: Final Website Flow
// ============================================================
function section25() {
  return [
    heading1("25. Final Website Flow"),
    bodyPara("The complete user journey on the Nexgen Elit website follows a carefully designed flow that guides visitors from initial awareness through evaluation to conversion. Understanding this flow is essential for maintaining the site's effectiveness as a lead generation tool and for identifying opportunities for optimization."),

    heading2("25.1 Complete User Journey"),
    bodyPara("The typical user journey begins at the home page, which serves as the primary entry point for most visitors (both organic search and direct traffic). The home page's hero section immediately communicates the company's value proposition, while the services overview, case studies, and testimonials sections progressively build credibility and interest."),
    bodyPara("From the home page, visitors typically follow one of three primary paths. The first path is the Service Evaluation path: visitors click through to the Services page, browse categories, and then click into specific service detail pages where the 11-section conversion flow addresses their needs in depth. The second path is the Product Discovery path: visitors navigate to the Products page, search or browse the catalog, and explore specific product detail pages. The third path is the Content Engagement path: visitors discover blog articles through search or social media, read content that demonstrates expertise, and then navigate to service or product pages."),
    bodyPara("Regardless of the entry path, all conversion journeys converge on the Contact page or one of the distributed CTA touchpoints. The lead qualification form captures essential information (name, email, company, revenue range, current situation) that enables the sales team to respond effectively. The form submission triggers an API call to `/api/contact` which processes the inquiry and potentially stores it in the database for CRM integration."),

    heading2("25.2 Decision Tree for Different User Types"),
    heading3("Logistics Business Owner"),
    bodyPara("This user is most likely to enter through organic search for logistics technology keywords or through a direct referral. They will typically browse the Home page to assess credibility, then navigate to Services or Products to find specific solutions. Their journey emphasizes case studies and testimonials as social proof. They convert through the contact form or WhatsApp direct contact, preferring the personal communication channel for high-value decisions."),

    heading3("Technology Decision Maker (CTO/IT Manager)"),
    bodyPara("This user enters with specific technical requirements and evaluates the company's technical capabilities. They spend more time on product detail pages, examining features, technology stack references, and integration capabilities. The 'How We Do It' and 'Features' sections of inner pages are most relevant to them. They may also evaluate the AI Products page for advanced capabilities. They convert through the consultation booking CTA, seeking a technical discussion."),

    heading3("Startup Founder"),
    bodyPara("Startup founders are typically cost-conscious but looking for scalable solutions. They are drawn to the Products page's comprehensive catalog and the pricing transparency of service pages. They evaluate the company's ability to grow with their business. The Blog section is particularly relevant for this audience as they research logistics technology trends. They convert through lower-commitment CTAs like the free audit offer."),

    heading3("Investor"),
    bodyPara("Investors navigate directly to the Investor page to evaluate the company's growth metrics, market position, and financial trajectory. From there, they may explore the About page for team credentials, the Case Studies page for client validation, and the Products page for market opportunity assessment. Their journey is information-gathering focused, and conversion for this audience means scheduling a formal investor meeting."),

    heading3("Job Seeker"),
    bodyPara("Potential employees navigate to the Careers page to view open positions and learn about company culture. They may also explore the About page, Blog (for company thought leadership), and case studies (to understand the type of work). Their conversion is submitting a job application through the careers portal."),
  ];
}

// ============================================================
// ASSEMBLE DOCUMENT
// ============================================================
const doc = new Document({
  numbering: { config: numberingConfigs },
  styles: {
    default: {
      document: {
        run: { font: "Calibri", size: 22, color: C.body },
      },
    },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, color: C.primary, font: "Times New Roman" },
        paragraph: { spacing: { before: 600, after: 300, line: 250 }, outlineLevel: 0 },
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, color: C.primary, font: "Times New Roman" },
        paragraph: { spacing: { before: 400, after: 200, line: 250 }, outlineLevel: 1 },
      },
      {
        id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, color: C.coverAccent, font: "Times New Roman" },
        paragraph: { spacing: { before: 300, after: 150, line: 250 }, outlineLevel: 2 },
      },
    ],
  },
  sections: [
    // COVER PAGE
    {
      properties: {
        page: {
          margin: { top: 0, bottom: 0, left: 1440, right: 1440 },
          size: { width: 11906, height: 16838 },
        },
        titlePage: true,
      },
      children: coverPage(),
    },
    // TOC PAGE
    {
      properties: {
        page: {
          margin: { top: 1800, bottom: 1440, left: 1440, right: 1440 },
          size: { width: 11906, height: 16838 },
        },
      },
      headers: {
        default: new Header({
          children: [new Paragraph({
            alignment: AlignmentType.RIGHT,
            spacing: { line: 250 },
            children: [new TextRun({ text: "Nexgen Elit Website Technical Documentation", font: "Calibri", size: 18, color: C.accent, italics: true })],
          })],
        }),
      },
      footers: {
        default: new Footer({
          children: [new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { line: 250 },
            children: [
              new TextRun({ text: "", font: "Calibri", size: 18, color: C.accent }),
              new TextRun({ children: [PageNumber.CURRENT], font: "Calibri", size: 18, color: C.accent }),
              new TextRun({ text: " \u2014", font: "Calibri", size: 18, color: C.accent }),
            ],
          })],
        }),
      },
      children: [
        ...tocSection(),
        new Paragraph({ children: [new PageBreak()] }),
      ],
    },
    // MAIN CONTENT
    {
      properties: {
        page: {
          margin: { top: 1800, bottom: 1440, left: 1440, right: 1440 },
          size: { width: 11906, height: 16838 },
          pageNumbers: { start: 1 },
        },
      },
      headers: {
        default: new Header({
          children: [new Paragraph({
            alignment: AlignmentType.RIGHT,
            spacing: { line: 250 },
            children: [new TextRun({ text: "Nexgen Elit Website Technical Documentation", font: "Calibri", size: 18, color: C.accent, italics: true })],
          })],
        }),
      },
      footers: {
        default: new Footer({
          children: [new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { line: 250 },
            children: [
              new TextRun({ text: "", font: "Calibri", size: 18, color: C.accent }),
              new TextRun({ children: [PageNumber.CURRENT], font: "Calibri", size: 18, color: C.accent }),
              new TextRun({ text: " \u2014", font: "Calibri", size: 18, color: C.accent }),
            ],
          })],
        }),
      },
      children: [
        ...section3(),
        ...section4(),
        ...section5(),
        ...section6(),
        ...section7(),
        ...section8(),
        ...section9(),
        ...section10(),
        ...section11(),
        ...section12(),
        ...section13(),
        ...section14(),
        ...section15(),
        ...section16(),
        ...section17(),
        ...section18(),
        ...section19(),
        ...section20(),
        ...section21(),
        ...section22(),
        ...section23(),
        ...section24(),
        ...section25(),
      ],
    },
  ],
});

// ============================================================
// GENERATE FILE
// ============================================================
const OUTPUT = "/home/z/my-project/download/Nexgen-Elit-Website-Technical-Documentation.docx";
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(OUTPUT, buffer);
  console.log("Document generated:", OUTPUT);
});
