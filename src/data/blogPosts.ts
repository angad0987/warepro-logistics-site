import imgWarehouseAerial from "@/assets/warehouse-aerial.webp";
import img3pl from "@/assets/3pl.webp";
import imgInventoryManagement from "@/assets/service-inventory-management.webp";
import imgEcommerceFulfillment from "@/assets/ecommerce-fulfillment.webp";
import imgShowcaseWarehouse from "@/assets/showcase-warehouse.webp";
import imgB2b from "@/assets/b2b.webp";
import imgReceiving from "@/assets/op-receiving.webp";
import imgStorage from "@/assets/storage.webp";

/** A single block of article body content. */
export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; level?: 2 | 3 }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "callout"; title: string; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: BlogContentBlock[];
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  /** ISO date (YYYY-MM-DD). */
  publishedAt: string;
  readingTime: string;
  tags: string[];
}

/**
 * Single source of truth for every article on the blog.
 * Listing, search, category filters, detail pages and related articles all
 * read from this array — never duplicate article data inside components.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "5-ways-proper-warehousing-improves-your-supply-chain",
    title: "5 Ways Proper Warehousing Improves Your Supply Chain",
    category: "Warehousing",
    excerpt:
      "Discover how organized warehousing reduces costs, improves inventory accuracy and keeps your supply chain moving.",
    image: imgWarehouseAerial,
    imageAlt: "Aerial view of a large distribution warehouse with loading docks and truck yards",
    imageWidth: 1280,
    imageHeight: 800,
    publishedAt: "2026-10-18",
    readingTime: "5 min read",
    tags: ["warehousing", "inventory", "supply chain"],
    content: [
      {
        type: "paragraph",
        text: "Storage is often treated as the least interesting part of a supply chain — a place where goods sit until someone comes to collect them. In practice, warehousing is the point at which most of a supply chain's cost, accuracy and service problems are created or solved. A well-run facility does more than hold stock: it gives the rest of the business a reliable, real-time picture of what it owns and how quickly it can move.",
      },
      {
        type: "paragraph",
        text: "Below are five outcomes that consistently separate organised warehousing operations from ad-hoc ones, and the practical steps behind each of them.",
      },
      {
        type: "heading",
        text: "1. More accurate inventory records",
      },
      {
        type: "paragraph",
        text: "Inventory accuracy is the foundation of everything else. When every unit received, put away, picked and shipped is recorded against a defined location and SKU, stock levels can be trusted. Trusted stock levels mean fewer emergency replenishments, fewer cancelled orders and less capital sitting in the wrong place. Accuracy usually improves not because of better software alone, but because the physical process is designed to make recording easy: fixed put-away locations, clear labelling, and disciplined cycle counting.",
      },
      {
        type: "heading",
        text: "2. Faster picking and shorter order cycles",
      },
      {
        type: "paragraph",
        text: "Order cycle time is largely a function of how quickly a picker can find and confirm each item. Logical slotting — grouping fast-moving SKUs close to the dispatch area and separating rarely used stock — reduces walking distance dramatically. Consistent labelling, standardised bin addresses and defined pick routes turn picking from a search exercise into a repeatable sequence. The result is a shorter, more predictable time from order release to despatch.",
      },
      {
        type: "heading",
        text: "3. Lower handling and damage costs",
      },
      {
        type: "paragraph",
        text: "Every additional movement of a product is an opportunity for it to be dropped, crushed, mislabelled or lost. Reducing unnecessary handling is one of the cheapest ways to lower fulfilment cost. Good storage design limits the number of touches a unit needs: goods received directly to a put-away location, picked once, packed once, and dispatched without being re-stacked in the aisle. Racking that protects vulnerable items and clearly marked floor stacking areas both contribute to fewer damage claims.",
      },
      {
        type: "heading",
        text: "4. Safer working conditions and better compliance",
      },
      {
        type: "paragraph",
        text: "A warehouse that is disorganised is a warehouse where people are walking into racking, lifting awkward loads and working in dark or blocked aisles. Proper storage specification — clear aisles, maintained racking, appropriate stacking heights, trained operators and visible safety markings — reduces incident rates and makes audits straightforward. Compliance obligations for fire safety, access control and traceability are much easier to demonstrate when the operation is systematic.",
      },
      {
        type: "heading",
        text: "5. Room to scale without moving",
      },
      {
        type: "paragraph",
        text: "Demand that outgrows a warehouse is expensive to fix later, because relocation brings disruption, duplicated costs and a period of elevated error rates. Designing storage capacity, dock scheduling and slotting so they can absorb growth in stages avoids a forced move. Flexible racking, mezzanine capacity and clear expansion plans are what turn a warehouse from a fixed cost into infrastructure that can scale with the business.",
      },
      {
        type: "heading",
        text: "A practical checklist",
      },
      {
        type: "list",
        items: [
          "Define a fixed address for every bin and record every movement against it",
          "Slot fast-moving stock close to dispatch and keep slow movers at the back",
          "Agree a cycle-counting routine by SKU value rather than by calendar",
          "Standardise carton labels and keep them visible from the aisle",
          "Keep aisles, walkways and fire equipment points clear at all times",
          "Review capacity and slotting plans on a fixed schedule, not only when stock is short",
        ],
      },
      {
        type: "heading",
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Good warehousing is less about the building and more about disciplined, repeatable processes applied to the space you have. Accuracy, speed, lower damage, safer work and the ability to grow all follow from the same fundamentals. If your operation is missing any of them, the most effective starting point is usually a documented, measurable process — and a clear view of where stock actually sits right now.",
      },
    ],
  },
  {
    slug: "role-of-3pl-in-modern-logistics",
    title: "The Role of 3PL in Modern Logistics",
    category: "3PL & Logistics",
    excerpt:
      "Learn how third-party logistics providers help businesses scale operations, reduce complexity and improve delivery performance.",
    image: img3pl,
    imageAlt:
      "Diagram of a 3PL warehouse workflow showing receiving, storage, picking and dispatch",
    imageWidth: 1200,
    imageHeight: 800,
    publishedAt: "2026-10-12",
    readingTime: "6 min read",
    tags: ["3PL", "logistics", "fulfillment"],
    content: [
      {
        type: "paragraph",
        text: "A third-party logistics provider — a 3PL — takes on the storage, handling and movement of goods on behalf of a business that does not operate its own warehouse. What began as a simple outsourcing of transport has developed into a broad operating partnership, and understanding what a 3PL is actually responsible for is essential for deciding whether the model fits your business.",
      },
      {
        type: "heading",
        text: "What a 3PL actually takes on",
      },
      {
        type: "paragraph",
        text: "The scope varies widely between providers, but a full-service 3PL typically covers inbound receiving and quality checks, storage and slotting, inventory management and reporting, pick and pack for B2B or eCommerce orders, kitting and value-added services, despatch and carrier management, and returns processing. The practical value is not the list of services — it is the single, accountable operating partner for all of them.",
      },
      {
        type: "heading",
        text: "Why companies move to a 3PL model",
      },
      {
        type: "paragraph",
        text: "The decision is usually driven by a mismatch between the complexity of the operation and the size of the team. Owning warehousing requires fixed assets, specialist roles and technology before a single order is shipped. A 3PL converts that capital commitment into a variable, scalable operating cost, which matters most for brands whose volumes fluctuate or are still growing into them.",
      },
      {
        type: "list",
        items: [
          "Variable cost structure that flexes with order volume rather than with headcount",
          "Access to warehouse space, racking and material handling without a capital outlay",
          "Experienced operators, supervisors and compliance functions already in place",
          "Technology such as WMS, order management and shipping integrations",
          "Carrier relationships and negotiated freight rates built at scale",
          "The ability to add locations or services without an internal hiring and training cycle",
        ],
      },
      {
        type: "heading",
        text: "Where 3PL relationships succeed or fail",
      },
      {
        type: "paragraph",
        text: "The difference between a strong 3PL partnership and a disappointing one is rarely the headline price. It is the quality of the operating data, the clarity of the escalation path, and whether both sides agree on the measurements that define success. Where service levels, reporting cadence and responsibility for errors are defined in advance, problems surface early and stay contained.",
      },
      {
        type: "heading",
        text: "Questions to ask before you start",
      },
      {
        type: "paragraph",
        text: "A structured evaluation reduces the risk of a poor fit. Beyond pricing, ask how the provider handles peak periods, what happens when stock is mis-recorded, which systems integrate with yours, and how the account is structured when something goes wrong. Ask for references in your sector and for the KPI definitions they will report against — the answers reveal a great deal about how the relationship will run in practice.",
      },
      {
        type: "heading",
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "A 3PL is best understood as operational infrastructure that a business can rent rather than own. For companies that have outgrown a basic stockroom, or that want to add fulfilment capability without building it, it is a proven way to add capacity, capability and discipline at the same time. The right partner turns complexity into something you no longer have to manage directly — provided the relationship is designed around shared measures from day one.",
      },
    ],
  },
  {
    slug: "inventory-management-best-practices-growing-businesses",
    title: "Inventory Management Best Practices for Growing Businesses",
    category: "Inventory",
    excerpt:
      "Better inventory visibility means fewer stockouts, less excess inventory and more efficient warehouse operations.",
    image: imgInventoryManagement,
    imageAlt: "Inventory management racking with organised stock and labelled shelves",
    imageWidth: 800,
    imageHeight: 533,
    publishedAt: "2026-10-05",
    readingTime: "5 min read",
    tags: ["inventory", "warehouse", "operations"],
    content: [
      {
        type: "paragraph",
        text: "Inventory is the single largest asset on most growing businesses' balance sheet, and it is also the hardest to keep under control as complexity increases. The problem is rarely the stock itself. It is that inventory decisions get made in different places, at different times, using different numbers — and the gaps between those decisions quietly consume margin.",
      },
      {
        type: "heading",
        text: "Start with a single source of truth",
      },
      {
        type: "paragraph",
        text: "Before introducing any process or tool, establish which record is authoritative for stock on hand. In most cases it should be the warehouse system, updated at the moment goods are received, put away, picked and shipped. If purchasing, sales and finance each hold their own version of the position, discrepancies are not a software problem — they are a definition problem. Agreeing one definition of available stock, in one system, removes a large share of day-to-day friction.",
      },
      {
        type: "heading",
        text: "Classify stock instead of treating it uniformly",
      },
      {
        type: "paragraph",
        text: "A small number of SKUs usually generate most of the revenue, and a long tail generates complexity. Classifying by value and velocity lets you apply the right control to each group: rigorous counting and tighter reorder points for high-value fast movers, simpler controls and scheduled reviews for the tail. Most inventory problems disappear once effort is allocated in proportion to value rather than spread evenly across every SKU.",
      },
      {
        type: "heading",
        text: "Balance availability against working capital",
      },
      {
        type: "paragraph",
        text: "High stock protects service levels but ties up cash and storage space; low stock frees cash but exposes you to stockouts. The right level is different for every product and changes with lead times, seasonality and reliability of supply. Reorder points should be derived from actual lead times and demand variability rather than set by habit, and reviewed whenever those inputs change.",
      },
      {
        type: "list",
        items: [
          "Agree one authoritative stock position and one owner for each system that feeds it",
          "Group SKUs by value and velocity, then apply controls in proportion to risk",
          "Base reorder points on real lead times and demand variability, not on rule of thumb",
          "Count continuously on a schedule driven by value, with recounts after adjustments",
          "Record every adjustment with a reason code so patterns become visible",
          "Review aged and excess stock on a fixed schedule and plan its exit",
        ],
      },
      {
        type: "heading",
        text: "Make the numbers visible",
      },
      {
        type: "paragraph",
        text: "Inventory only improves when the people responsible can see it. A weekly view of stock on hand, stock value, ageing, stockout risk and inbound cover — shared by the same people who act on it — turns inventory from a back-office record into a working tool. The goal is not more reporting; it is a short, consistent set of measures that prompt a decision.",
      },
      {
        type: "heading",
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Effective inventory management is mostly a discipline of agreeing definitions, directing effort where it matters and keeping a small set of measures visible. It does not require a large technology programme, although the right systems remove a lot of manual effort. Start by making the position accurate and consistent, then work down the list — the improvements compound quickly once the baseline is right.",
      },
    ],
  },
  {
    slug: "how-fulfillment-centers-drive-customer-satisfaction",
    title: "How Fulfillment Centers Drive Customer Satisfaction",
    category: "Fulfillment",
    excerpt:
      "Fast, accurate fulfillment plays a critical role in customer satisfaction and long-term business growth.",
    image: imgEcommerceFulfillment,
    imageAlt: "Fulfilment team packing customer orders at a packing bench",
    imageWidth: 800,
    imageHeight: 533,
    publishedAt: "2026-09-28",
    readingTime: "5 min read",
    tags: ["fulfillment", "ecommerce", "logistics"],
    content: [
      {
        type: "paragraph",
        text: "Customers judge a brand's operations through a small number of moments: the order confirmation, the delivery notification, and the moment the box arrives. Fulfilment is the process that sits behind all three, and it is where the gap between what a customer expects and what actually happens is either closed or made obvious.",
      },
      {
        type: "heading",
        text: "Accuracy comes before speed",
      },
      {
        type: "paragraph",
        text: "A fast wrong order is more damaging than a slow right one. A single incorrect shipment usually means a return, a refund, a replacement and a review — and it damages the relationship far more than a delay that was communicated. Accuracy is built through unambiguous product identification, verification before packing, and clear ownership of any discrepancy found during picking or packing.",
      },
      {
        type: "heading",
        text: "Set expectations honestly",
      },
      {
        type: "paragraph",
        text: "Most fulfilment complaints are communication failures rather than operational ones. If a realistic despatch window is published and met, customers accept it. If a window is optimistic and repeatedly missed, every order becomes a service incident. A fulfilment centre that publishes achievable cut-off times, reports status accurately and explains delays early converts a slow order into a non-event.",
      },
      {
        type: "heading",
        text: "Packaging is part of the experience",
      },
      {
        type: "paragraph",
        text: "The condition a product arrives in influences perception of its value more than most brands expect. Right-sizing packaging reduces void fill, shipping cost and material waste, and it is also the first physical signal of quality a customer receives. Fragile, high-value or temperature-sensitive lines need defined packaging standards rather than a general instruction, and those standards are cheapest to design once and apply consistently.",
      },
      {
        type: "list",
        items: [
          "Verify the item, quantity and variant before the order is closed for packing",
          "Publish despatch cut-off times that the operation can genuinely sustain",
          "Right-size cartons and standardise packaging by product type",
          "Send tracking information as the first stage of despatch, not after collection",
          "Record every fulfilment fault with a reason so recurring issues are visible",
          "Review the returns rate and its causes on a schedule, not only when it rises",
        ],
      },
      {
        type: "heading",
        text: "Use the fulfilment centre as a feedback channel",
      },
      {
        type: "paragraph",
        text: "Because fulfilment touches the order end to end, it surfaces customer expectations that other parts of the business never see. Repeated requests for different pack sizes, items arriving in the wrong format, or demand for faster despatch are all measurable signals. Reviewing them alongside support tickets and reviews gives a much clearer picture of where the next improvement will have the greatest effect.",
      },
      {
        type: "heading",
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Customer satisfaction is shaped less by how fast a warehouse can operate in isolation than by how reliably the whole promise is kept. Accuracy, honest expectations, careful packaging and visible follow-through together produce the experience that keeps customers buying. Improving any one of them is worthwhile, but the compounding effect comes from treating fulfilment as a designed service rather than a final operational step.",
      },
    ],
  },
  {
    slug: "future-of-supply-chain-technology",
    title: "The Future of Supply Chain Technology",
    category: "Industry Insights",
    excerpt:
      "From automation and real-time visibility to AI-powered operations, technology is reshaping modern supply chains.",
    image: imgShowcaseWarehouse,
    imageAlt: "Interior of a modern distribution centre with high racking and automated handling",
    imageWidth: 1920,
    imageHeight: 1080,
    publishedAt: "2026-09-21",
    readingTime: "6 min read",
    tags: ["technology", "AI", "supply chain"],
    content: [
      {
        type: "paragraph",
        text: "Supply chain technology is moving from a reporting layer to an operating layer. For many years the value of a warehouse management system was that it recorded what had already happened. The shift now underway is toward systems that anticipate what happens next — and the practical question for operators is which parts of that shift are worth adopting now.",
      },
      {
        type: "heading",
        text: "Real-time visibility becomes the baseline",
      },
      {
        type: "paragraph",
        text: "Batch processing and end-of-day stock reports are being replaced by continuous synchronisation between the warehouse, the order management system and the storefront. Once inventory position updates in near real time, a different set of decisions becomes possible: promising a delivery date with confidence, reallocating stock between channels automatically, and intervening on a problem while it is still small. Visibility is no longer a premium feature; it is the entry requirement for everything else.",
      },
      {
        type: "heading",
        text: "Automation and its honest limits",
      },
      {
        type: "paragraph",
        text: "Goods-to-person systems, robotic picking and automated sortation consistently improve throughput in stable, high-volume environments with predictable product profiles. They are less convincing where demand is volatile, product dimensions vary widely or order composition changes frequently. The practical lesson is that automation is a fit question, not a prestige question, and the best results usually come from automating a stable zone well rather than a whole operation superficially.",
      },
      {
        type: "heading",
        text: "AI where it genuinely helps",
      },
      {
        type: "paragraph",
        text: "The most useful applications of machine learning in warehousing tend to be forecasting and prioritisation: predicting order volumes by day and hour, suggesting reorder points from demand patterns, or optimising slot locations from movement data. These applications improve decisions that were already being made manually, and they are easier to trust because a planner can see the reasoning and override it. Fully autonomous decision-making on safety-critical or customer-facing processes remains the wrong place to start.",
      },
      {
        type: "list",
        items: [
          "Prioritise data quality and process discipline before adding new tooling",
          "Connect inventory, orders and transport data before automating decisions",
          "Apply forecasting and optimisation where a planner can review and override",
          "Automate stable, repetitive zones first and measure the result honestly",
          "Treat system integration and master data as part of the technology programme",
          "Review the cost and complexity of each tool against the operational gain",
        ],
      },
      {
        type: "heading",
        text: "The integration problem",
      },
      {
        type: "paragraph",
        text: "Most of the value in supply chain technology is lost at the boundaries between systems. An order arrives in one platform, stock lives in another, shipping labels are produced by a third, and invoices are reconciled by hand in a spreadsheet. Integration is less glamorous than automation but usually where more value is available, because it converts a set of tools into a single operating picture. It is also where a well-designed implementation partner earns their fee.",
      },
      {
        type: "heading",
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "The trajectory is clear: continuous visibility first, decision support second, selective automation third. None of it works without accurate data and disciplined processes underneath, which is why the most successful technology programmes in logistics have started there rather than with the newest tool. The organisations gaining the most are the ones treating technology as an operating capability, and building it in the order that actually compounds.",
      },
    ],
  },
  {
    slug: "why-3pl-is-a-smart-choice-for-growing-businesses",
    title: "Why 3PL Is a Smart Choice for Growing Businesses",
    category: "3PL & Logistics",
    excerpt:
      "Discover how outsourcing logistics can help growing businesses reduce operational complexity and focus on their core operations.",
    image: imgB2b,
    imageAlt: "B2B distribution operation with pallets staged for dispatch",
    imageWidth: 1200,
    imageHeight: 800,
    publishedAt: "2026-09-14",
    readingTime: "4 min read",
    tags: ["3PL", "logistics", "business growth"],
    content: [
      {
        type: "paragraph",
        text: "Growth changes what a business needs from its operations. At small scale, a spare room and a spreadsheet are sufficient. As volume rises, the requirements become regulatory, technical and physical: traceability, insurance, temperature control, fire safety, a warehouse management system, trained staff. Outsourcing to a 3PL is a way of meeting those requirements without building the capability internally first.",
      },
      {
        type: "heading",
        text: "It converts fixed commitments into variable ones",
      },
      {
        type: "paragraph",
        text: "Owning warehouse space means paying for it whether or not it is used, along with racking, handling equipment, software licences and a management team. A 3PL converts most of that into a cost that scales with the volume actually shipped. For a business whose growth is real but not yet predictable, that flexibility is often worth more than the per-unit rate difference, which is typically small once labour and overhead are counted honestly.",
      },
      {
        type: "heading",
        text: "It adds capability faster than hiring does",
      },
      {
        type: "paragraph",
        text: "A warehouse supervisor, a forklift operator, an inventory planner and a shift lead are not roles you can hire in a week — and they are roles you need before volume justifies a full team. An established 3PL already has trained people, established procedures and the experience of peak periods. A growing business can therefore operate at a level of professionalism its headcount would not otherwise support.",
      },
      {
        type: "heading",
        text: "It keeps the focus where it belongs",
      },
      {
        type: "paragraph",
        text: "Every hour spent on carrier rate negotiation, dock scheduling or picking-path design is an hour not spent on product, marketing or customers. Outsourcing logistics does not remove the need to understand your own operation — a good 3PL partner will expect that, and will be far more effective because of it. It does mean the day-to-day execution sits with an organisation that has no distraction to give it.",
      },
      {
        type: "list",
        items: [
          "Shorter path to professional warehousing standards and compliance",
          "Access to space, racking and handling equipment without capital outlay",
          "Trained operators and shift leadership available from day one",
          "Technology, carrier relationships and reporting included rather than rebuilt",
          "Capacity for seasonal peaks without permanent headcount",
          "Time for the team to focus on product and customers",
        ],
      },
      {
        type: "heading",
        text: "How to get the most from a 3PL",
      },
      {
        type: "paragraph",
        text: "The transition is smoothest when expectations are documented before the first shipment. Agree how stock will be received and reconciled, what the reporting cadence will be, which service levels apply, and what happens when something goes wrong. Keep one point of contact accountable and review performance against agreed measures on a regular schedule. A 3PL relationship is an operating arrangement, and it works best when it is managed like one.",
      },
      {
        type: "heading",
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "For a growing business, outsourcing logistics is a practical way to gain capability, flexibility and control at the same time. It converts a large fixed commitment into a manageable variable one and puts experienced operators in place immediately. Used with clear expectations and regular review, a 3PL partnership lets a company grow into its ambition rather than spending that time building warehouse infrastructure it may outgrow.",
      },
    ],
  },
  {
    slug: "warehouse-receiving-reduce-errors-delays",
    title: "Warehouse Receiving: How to Reduce Errors and Delays",
    category: "Warehousing",
    excerpt:
      "A well-structured receiving process can improve inventory accuracy and prevent costly downstream delays.",
    image: imgReceiving,
    imageAlt: "Goods being received and checked at a warehouse inbound dock",
    imageWidth: 800,
    imageHeight: 563,
    publishedAt: "2026-09-07",
    readingTime: "5 min read",
    tags: ["receiving", "warehouse", "inventory"],
    content: [
      {
        type: "paragraph",
        text: "Receiving is the first point at which your records and your physical stock meet. Every discrepancy that starts here — a missing unit, a mislabelled carton, an unchecked damaged item — propagates downstream into picking, invoicing and customer delivery. It is also the point at which the physical work is least structured, because inbound volume is unpredictable and docks are busy.",
      },
      {
        type: "heading",
        text: "Prepare before the vehicle arrives",
      },
      {
        type: "paragraph",
        text: "Most receiving delays are caused before unloading begins. If the expected purchase order, supplier details and prior discrepancies are not open and available at the dock, staff begin by searching. Advance notification of inbound consignments, pre-allocated unloading slots and a clearly defined sequence for priority freight reduce the queue before it forms.",
      },
      {
        type: "heading",
        text: "Define a single count-and-check routine",
      },
      {
        type: "paragraph",
        text: "Receiving should follow one repeatable method: verify the vehicle and supplier, count and inspect against the purchase order, record any discrepancy immediately with photographs where relevant, and confirm the receipt into the system before the stock leaves the dock. Variations in how different teams handle the same step are what create the reporting gaps. A single routine, trained into everyone on the dock, matters more than sophisticated tooling.",
      },
      {
        type: "heading",
        text: "Separate inspection from put-away",
      },
      {
        type: "paragraph",
        text: "Combining inspection and put-away makes it easier for damaged or incorrect goods to be moved into stock where they will not be noticed. A short, defined inspection point at the dock, with a clear route for quarantined goods, keeps problems visible and out of pickable locations. The time saved by combining the two is usually smaller than the cost of the stock that gets lost as a result.",
      },
      {
        type: "list",
        items: [
          "Send advance shipping notifications and confirm the expected purchase order before arrival",
          "Allocate dock slots so the busiest suppliers are not waiting in a queue",
          "Count against the purchase order, and record discrepancies on the dock, not later",
          "Photograph damage and shortages before the consignment is moved",
          "Keep a dedicated quarantine area for goods that cannot be received",
          "Reconcile the physical count with the system before put-away begins",
          "Review supplier error rates on a schedule and feed the results back to purchasing",
        ],
      },
      {
        type: "heading",
        text: "Make the dock measurably fast and accurate",
      },
      {
        type: "paragraph",
        text: "Track time-to-receipt and receipt accuracy by supplier and by consignment. The two measures together identify where the process is genuinely weak: a fast but inaccurate dock is losing stock, and a slow but accurate one is likely over-inspecting or dealing with unclear paperwork. Suppliers that consistently perform well can be planned around; those that do not, need a different agreement about documentation and advance notice.",
      },
      {
        type: "heading",
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Receiving errors are rarely caused by a single dramatic mistake. They accumulate from unprepared docks, inconsistent checking and discrepancies that are recorded too late to be useful. Tightening the routine at this single point of the chain is one of the highest-return changes available to most operations, because everything downstream inherits the accuracy you establish here.",
      },
    ],
  },
  {
    slug: "warehouse-metrics-every-manager-should-track",
    title: "5 Metrics Every Warehouse Manager Should Track",
    category: "Supply Chain",
    excerpt:
      "Learn which warehouse KPIs can help businesses measure efficiency, accuracy and operational performance.",
    image: imgStorage,
    imageAlt: "Rows of racked inventory in a warehouse storage area",
    imageWidth: 800,
    imageHeight: 533,
    publishedAt: "2026-08-30",
    readingTime: "6 min read",
    tags: ["warehouse KPIs", "operations", "supply chain"],
    content: [
      {
        type: "paragraph",
        text: "Warehouse metrics are only useful when they are few, consistently defined and reviewed by the people who can act on them. A long dashboard that nobody reads produces no improvement. The measures below form a compact set that covers the three things a warehouse manager is accountable for: how fast work moves, how accurately it is done, and how well space and stock are being used.",
      },
      {
        type: "heading",
        text: "1. Dock-to-stock time",
      },
      {
        type: "paragraph",
        text: "The time between a vehicle arriving and the goods being received and put away is a direct measure of dock productivity and of the receiving process itself. It is also one of the few measures that a team can influence within a single shift. Sustained improvement usually comes from preparation before arrival and a single count-and-check routine, rather than from working faster during unloading.",
      },
      {
        type: "heading",
        text: "2. Order cycle time",
      },
      {
        type: "paragraph",
        text: "Measured from order release to despatch confirmation, cycle time combines picking, packing, and queueing — and is the metric most closely linked to what a customer experiences. It is best tracked by order type and by shift, because an average hides the difference between a smooth standard flow and a slow non-standard one. Improvements here usually originate in slotting and pick-path design.",
      },
      {
        type: "heading",
        text: "3. Inventory accuracy",
      },
      {
        type: "paragraph",
        text: "Accuracy is the number that determines how much trust the rest of the operation can place in its data, and it is also the measure most often reported but least often acted on. Count by SKU value rather than by item count, so the effort follows the risk, and record the reason for every adjustment. An accuracy figure without a reason-code history tells you where the problem is but not how to fix it.",
      },
      {
        type: "heading",
        text: "4. Pick accuracy and return rate",
      },
      {
        type: "paragraph",
        text: "These two are best read together. A low error rate with a high return rate usually points to a verification problem at packing rather than a picking problem; a high error rate with a low return rate may mean errors are simply not being recorded. Returns also carry a cost that is easy to underestimate — handling, refund, re-shipping and the loss of a second sale opportunity.",
      },
      {
        type: "heading",
        text: "5. Space utilisation and stock ageing",
      },
      {
        type: "paragraph",
        text: "Utilisation shows whether capacity is being used well, and ageing shows whether the stock itself is. A warehouse can be busy and still hold a large quantity of stock that is not moving. Reviewing the two together reveals the trade-off between space and flexibility: high utilisation with a slow-moving mix leaves little room to absorb a demand spike, while low utilisation suggests slots are spread across more locations than necessary.",
      },
      {
        type: "list",
        items: [
          "Define each metric precisely, including start and end points, and write it down",
          "Report by shift and by order type rather than as a single blended average",
          "Record a reason for every inventory adjustment and every return",
          "Review the same short set of measures on a fixed, short cycle",
          "Give each measure one named owner who can act on it",
          "Change the process when a measure moves, and record what changed",
        ],
      },
      {
        type: "heading",
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "A useful measurement system for a warehouse is small, consistent and acted upon. Dock-to-stock time, order cycle time, inventory accuracy, pick accuracy and returns, and space utilisation with stock ageing together cover speed, quality and cost without becoming a reporting burden. The discipline that makes them valuable is not the collection — it is the regular review and the visible follow-through on what the numbers show.",
      },
    ],
  },
];

/** Display order of the category filter. "All" is the unfiltered option. */
const categoryOrder = [
  "Warehousing",
  "3PL & Logistics",
  "Inventory",
  "Fulfillment",
  "Supply Chain",
  "Industry Insights",
];

/** All categories used by the articles, in display order. */
export const blogCategories: string[] = [
  "All",
  ...categoryOrder.filter((category) => blogPosts.some((post) => post.category === category)),
];
