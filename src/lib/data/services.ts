import { ArchNode } from "@/components/sections/arch-diagram";

export interface HowWeHelpStep {
    step: number;
    title: string;
    desc: string;
}

export interface CaseStudy {
    context: string;
    challenge: string;
    result: string;
    metrics: { label: string; value: string }[];
}

export interface PillarCapability {
    title: string;
    description: string;
}

export interface PillarUseCase {
    title: string;
    description: string;
    metric: string;
}

export interface ServicePillar {
    id: string;
    number: string;
    title: string;
    subtitle: string;
    image: string;
    overview: string[];
    capabilities: PillarCapability[];
    architecturalFlow: string[];
    useCases: PillarUseCase[];
    metrics: { label: string; value: string }[];
    techStack: string[];
}

export interface Service {
    slug: string;
    title: string;
    shortDescription: string;
    whatIs: string;
    longDescription: string;
    features: string[];
    useCases: string[];
    techStack: string[];
    iconName: string;
    heroImage: string;
    howWeHelp: HowWeHelpStep[];
    architecture: ArchNode[];
    caseStudy: CaseStudy;
}

export const aiAssistantsPillars: ServicePillar[] = [
    {
        id: "artificial-intelligence-solutions",
        number: "01",
        title: "Artificial Intelligence Solutions",
        subtitle: "Bespoke Predictive, Cognitive, and Analytical Machine Learning Frameworks Engineered for Scalable Enterprise Value",
        image: "/images/services/ai_solutions.jpg",
        overview: [
            "Enterprise Artificial Intelligence Solutions go far beyond generic out-of-the-box software. We architect custom deep learning models, predictive intelligence pipelines, and autonomous decision systems built specifically around your organization's proprietary operational data.",
            "Our engineering team handles the complete AI lifecycle—from data ingestion and cleaning to feature engineering, hyperparameter optimization, model hosting, and continuous telemetry monitoring. We ensure your AI initiatives directly solve high-stakes business friction.",
            "With custom intelligence embedded into your core infrastructure, your business gains continuous foresight: predicting equipment failure before downtime, anticipating customer churn, and dynamically optimizing resource distribution at machine speed."
        ],
        capabilities: [
            {
                title: "Custom Model Fine-Tuning & Deployment",
                description: "Fine-tune foundation models on your internal data to master proprietary industry terminology, business rules, and company workflows."
            },
            {
                title: "Real-Time Predictive Telemetry",
                description: "Ingest live operational event streams to forecast business demand, inventory requirements, and financial exposure with high precision."
            },
            {
                title: "Automated Anomaly Detection & Self-Healing",
                description: "Spot anomalies across transactions, system logs, and security perimeters in milliseconds, triggering automated remediation."
            },
            {
                title: "Retrieval-Augmented Generation (RAG) Architecture",
                description: "Connect machine learning models directly to enterprise vector databases for verifiable, hallucination-free business intelligence."
            }
        ],
        architecturalFlow: [
            "Data Ingestion: Continuous streaming of structured & unstructured data via secure Kafka/API connectors",
            "Cognitive Processing: Vector embeddings & specialized neural layers score and categorize information",
            "Autonomous Execution: Logic engines evaluate thresholds and trigger transactional workflows across ERP/CRM",
            "Telemetry & Monitoring: Real-time drift detection, accuracy telemetry, and active learning retraining pipelines"
        ],
        useCases: [
            {
                title: "Algorithmic Fraud & Risk Evaluation",
                description: "Deployed custom anomaly detection models for a financial institution, scanning 200,000+ daily transactions in real time.",
                metric: "94% fraud reduction in 60 days"
            },
            {
                title: "Predictive Supply Chain Allocation",
                description: "Built dynamic demand forecasting models predicting stock needs across 45 regional fulfillment hubs.",
                metric: "42% reduction in stockouts"
            }
        ],
        metrics: [
            { label: "Prediction Accuracy", value: "99.4%" },
            { label: "Telemetry Latency", value: "<15ms" },
            { label: "OpEx Efficiency", value: "+48%" }
        ],
        techStack: ["PyTorch", "TensorFlow", "Hugging Face", "vLLM", "Kafka", "PostgreSQL", "Pinecone"]
    },
    {
        id: "generative-ai-development",
        number: "02",
        title: "Generative AI Development",
        subtitle: "Enterprise-Grade Multi-Modal LLM Applications, Code Synthesis Systems, and Grounded Generative Workflows",
        image: "/images/services/gen_ai_dev.jpg",
        overview: [
            "Generative AI development is reshaping the boundaries of enterprise output. We develop purpose-built generative AI engines that synthesize natural language, technical documentation, complex codebases, and multimodal artifacts at unprecedented speed and precision.",
            "Unlike consumer-grade chatbots, our enterprise generative solutions operate within strict constitutional guardrails. We implement advanced retrieval-augmented generation (RAG), parameter-efficient fine-tuning (LoRA / QLoRA), and deterministic JSON schema validation to guarantee 100% compliance with business logic.",
            "Our systems allow your team to automate drafting multi-page regulatory filings, generate tailored sales proposals from client transcripts, and build automated co-pilots that assist software engineers across legacy codebases."
        ],
        capabilities: [
            {
                title: "Domain-Specific LLM Fine-Tuning (LoRA / QLoRA)",
                description: "Adapt state-of-the-art open and closed weights to proprietary enterprise lexicons with minimal compute overhead."
            },
            {
                title: "Multimodal Synthesis (Text, Code, Vision)",
                description: "Ingest and produce complex diagrams, engineering schematics, software code, and detailed technical reports seamlessly."
            },
            {
                title: "Constitutional AI & Guardrails",
                description: "Enforce enterprise safety, brand voice, and data compliance via semantic filters, PII redaction, and strict validation checks."
            },
            {
                title: "Automated Evaluation & Synthetic Data Generation",
                description: "Benchmark model performance against gold-standard test suites and generate high-fidelity synthetic training data."
            }
        ],
        architecturalFlow: [
            "Prompt & Context Ingestion: Prompt normalization, token budgeting, and dynamic retrieval from vector memory",
            "Model Synthesis: Multi-agent generation using top-tier models with temperature and top-p optimization",
            "Guardrail Verification: PII scrub, hallucination verification, and strict JSON schema conformance testing",
            "Downstream Delivery: Webhook triggers, document generation (PDF/Docx), and automated system commits"
        ],
        useCases: [
            {
                title: "Autonomous Regulatory Compliance Drafting",
                description: "Built a generative engine that ingests legal updates and automatically drafts audit filings for compliance officers.",
                metric: "18 hours saved per filing"
            },
            {
                title: "Automated Engineering Co-Pilot",
                description: "Deployed an internal codebase assistant generating unit tests, documentation, and refactoring scripts for 120+ microservices.",
                metric: "35% faster sprint velocity"
            }
        ],
        metrics: [
            { label: "Drafting Speedup", value: "10x" },
            { label: "Compliance Pass Rate", value: "99.8%" },
            { label: "Developer Adoption", value: "91%" }
        ],
        techStack: ["OpenAI GPT-4o", "Anthropic Claude 3.5", "Llama 3.3", "LangChain", "LangGraph", "LlamaIndex", "Unsloth"]
    },
    {
        id: "ai-consulting",
        number: "03",
        title: "AI Consulting & Strategy",
        subtitle: "Executive Roadmaps, AI Maturity Assessments, and High-ROI Architecture Blueprints for Forward-Thinking Enterprises",
        image: "/images/services/ai_consulting.jpg",
        overview: [
            "Navigating the rapid evolution of artificial intelligence requires clear strategic focus. Adopting AI without a rigorous technological and operational roadmap often leads to expensive pilot projects that fail to scale into production value.",
            "Our AI Consulting practice partners directly with executive leadership, CTOs, and heads of product to evaluate organizational AI maturity, audit enterprise data pipelines, and design pragmatic multi-phase implementation blueprints.",
            "We demystify the AI landscape, calculating total cost of ownership (TCO), evaluating vendor dependencies, formulating risk and governance policies, and steering engineering teams toward high-ROI automation vectors."
        ],
        capabilities: [
            {
                title: "Enterprise AI Readiness & Maturity Auditing",
                description: "Comprehensive evaluation of data quality, technical infrastructure, governance, and talent readiness for AI scale."
            },
            {
                title: "ROI & TCO Economic Feasibility Modeling",
                description: "Detailed financial models comparing build vs. buy, open-source vs. proprietary APIs, and token unit economics."
            },
            {
                title: "Governance, Risk & Compliance Frameworks",
                description: "Ensure full compliance with EU AI Act, SOC2 Type II, HIPAA, and GDPR with transparent auditability and human oversight."
            },
            {
                title: "Technology Stack & Architecture Blueprints",
                description: "Architecting scalable data layers, vector database topologies, agent frameworks, and multi-cloud hosting setups."
            }
        ],
        architecturalFlow: [
            "Discovery & Audit: 2-week deep dive into company workflows, technical architecture, and data readiness",
            "Strategy Formulation: Prioritizing use cases by ROI impact and technical feasibility matrix",
            "Architecture Blueprinting: Delivering detailed schematics, security protocols, and vendor selections",
            "Executive Roadmapping: Phased 30-60-90 day deployment milestones with quantified success criteria"
        ],
        useCases: [
            {
                title: "Global Logistics Enterprise Transformation",
                description: "Designed a 2-year AI roadmap for a logistics company, defining 6 strategic agent deployments and data modernization.",
                metric: "₹24M identified annual savings"
            },
            {
                title: "Healthcare SaaS HIPAA AI Governance",
                description: "Audited and structured an end-to-end data privacy framework for clinical note processing using private VPC LLMs.",
                metric: "100% compliance audit clearance"
            }
        ],
        metrics: [
            { label: "Target ROI Horizon", value: "<90 Days" },
            { label: "Audit Accuracy", value: "100%" },
            { label: "Cost Reduction", value: "30-50%" }
        ],
        techStack: ["AWS Bedrock", "Azure OpenAI", "Google Cloud Vertex", "MLflow", "Terraform", "Kubernetes"]
    },
    {
        id: "business-process-automation",
        number: "04",
        title: "Business Process Automation (BPA)",
        subtitle: "Orchestrating End-to-End Enterprise Workflows Across Disparate Software, ERPs, CRMs, and Cloud APIs",
        image: "/images/services/business_process_automation.jpg",
        overview: [
            "Modern enterprises rely on dozens of best-of-breed software applications: Salesforce for CRM, SAP or NetSuite for ERP, Jira for project tracking, Workday for human resources, and Slack for communications. When these tools operate in silos, employees waste thousands of hours manually copying data, chasing status updates, and moving files.",
            "Business Process Automation (BPA) unites these disconnected tools into an autonomous, event-driven mesh. We build resilient pipelines that listen to system triggers, execute business logic, synchronize multi-way databases, and eliminate human friction.",
            "Our automated pipelines are built with enterprise resilience: handling network dropouts, rate limits, schema evolutions, and edge-case exceptions without missing a beat."
        ],
        capabilities: [
            {
                title: "Cross-Platform System Integration",
                description: "Synchronize data bidirectionally across Salesforce, HubSpot, SAP, NetSuite, QuickBooks, and internal SQL databases."
            },
            {
                title: "Event-Driven Asynchronous Pipeline Orchestration",
                description: "Trigger multi-stage business operations instantaneously upon webhooks, form submissions, or scheduled cron routines."
            },
            {
                title: "Automated Multi-Tier Approval Workflows",
                description: "Route approvals intelligently across Slack, Teams, and email with auto-escalation rules and digital sign-off records."
            },
            {
                title: "Comprehensive Audit Logs & Visual Dashboards",
                description: "Maintain an immutable, timestamped record of every transaction executed with real-time operational health dashboards."
            }
        ],
        architecturalFlow: [
            "System Trigger: Webhook or scheduled queue event captures payload from CRM/ERP",
            "Payload Normalization: Data cleaned, schema-validated, and cross-referenced with internal master database",
            "Multi-System Dispatch: Parallel execution across target APIs (accounting, shipping, notifications)",
            "Confirmation & Logging: Audit trail committed to database, alerting stakeholders upon successful resolution"
        ],
        useCases: [
            {
                title: "Vendor Onboarding & Account Provisioning",
                description: "Connected procurement portal, ERP finance records, and vendor contract sign-offs into a hands-free automated pipeline.",
                metric: "Reduced cycle from 14 days to 4 hours"
            },
            {
                title: "Real-Time Multi-Gateway Revenue Reconciliation",
                description: "Automated daily reconciliation of payments across Stripe, PayPal, Razorpay, and enterprise banking statements.",
                metric: "100% reconciliation accuracy"
            }
        ],
        metrics: [
            { label: "Cycle Time Reduction", value: "85%" },
            { label: "Data Accuracy", value: "100%" },
            { label: "Execution Uptime", value: "99.95%" }
        ],
        techStack: ["n8n", "Temporal.io", "Apache Airflow", "Zapier", "Make", "Node.js", "Docker", "RabbitMQ"]
    },
    {
        id: "intelligent-process-automation",
        number: "05",
        title: "Intelligent Process Automation (IPA)",
        subtitle: "Fusing Rule-Based Workflow Automation with Cognitive Artificial Intelligence, Advanced OCR, and NLP Decision Engines",
        image: "/images/services/intelligent_process_automation.jpg",
        overview: [
            "Traditional robotic process automation (RPA) is fragile. If a document's layout shifts by a few millimeters, or an email uses unfamiliar phrasing, conventional bots break. Intelligent Process Automation (IPA) solves this by embedding cognitive intelligence directly into the automation loop.",
            "By fusing computer vision, multimodal document comprehension, and semantic natural language processing, IPA systems can interpret messy scanned invoices, decipher handwritten notes, categorize complex customer complaints, and make context-aware judgement calls just like a seasoned human analyst.",
            "Our IPA systems continuously improve over time. By incorporating human-in-the-loop validation for rare edge cases, the system learns from human corrections, raising autonomous confidence thresholds with every batch processed."
        ],
        capabilities: [
            {
                title: "Cognitive Document Processing (IDP)",
                description: "Extract line items, tax numbers, and payment details from complex multi-page invoices, receipts, and contracts with 99%+ accuracy."
            },
            {
                title: "Context-Aware Intent & Sentiment Analysis",
                description: "Classify incoming tickets, emails, and legal notices based on contextual severity, regulatory sensitivity, and customer tone."
            },
            {
                title: "Self-Healing Exception Handling",
                description: "When an unfamiliar format is encountered, the AI generates hypothesis fixes and asks for human confirmation rather than crashing."
            },
            {
                title: "Active Learning Feedback Loops",
                description: "Every human correction is automatically routed into a continuous retraining dataset to elevate future autonomous precision."
            }
        ],
        architecturalFlow: [
            "Document Ingestion: Scanned PDFs, images, or emails arrive via inbox or API",
            "Cognitive OCR & Vision: Vision-language models extract spatial tables, key-value pairs, and freeform text",
            "Semantic Validation: Extracted data verified against business databases, purchase orders, and regulatory rules",
            "Automated Execution & ERP Entry: Verified data written to ERP; uncertain entries flagged to human reviewer"
        ],
        useCases: [
            {
                title: "Automated Insurance Claims Adjudication",
                description: "Automated damage photo inspection, medical bill reading, and policy verification for auto insurance claims.",
                metric: "Turnaround cut from 7 days to 12 minutes"
            },
            {
                title: "Multilingual Customs Clearance Classification",
                description: "Automated reading of international shipping waybills and classification into standardized HS customs tariff codes.",
                metric: "99.8% classification precision"
            }
        ],
        metrics: [
            { label: "Document Accuracy", value: "99.6%" },
            { label: "Processing Speed", value: "15x Faster" },
            { label: "Human Review Needed", value: "<4%" }
        ],
        techStack: ["Google Document AI", "AWS Textract", "OpenAI Vision", "LangChain", "Tesseract", "Python", "FastAPI"]
    },
    {
        id: "ai-business-automation",
        number: "06",
        title: "AI Business Automation",
        subtitle: "Autonomous Multi-Agent Swarms Orchestrating Cross-Departmental Operations, Strategy Execution, and Real-Time Business Tasks",
        image: "/images/services/ai_business_automation.jpg",
        overview: [
            "AI Business Automation represents the shift from isolated task scripts to holistic operational autonomy. Rather than automating a single spreadsheet or webhook, we deploy coordinated swarms of specialized AI agents that function as an autonomous operational workforce.",
            "In an AI-automated business, specialized agents own dedicated responsibilities: a Research Agent tracks competitor pricing and market trends; an SDR Agent crafts tailored outreach; an Operations Agent balances inventory queues; and a Finance Agent manages billing and collections.",
            "These agents communicate over structured inter-agent protocols (e.g. LangGraph / CrewAI), delegating tasks, reviewing each other's outputs, and escalating to executive leadership only when strategic interventions are required."
        ],
        capabilities: [
            {
                title: "Multi-Agent Swarm Orchestration",
                description: "Deploy hierarchical agent clusters where supervisor agents break down goals and coordinate specialist worker agents."
            },
            {
                title: "Autonomous Decision Trees & Dynamic Planning",
                description: "Agents self-reflect, re-evaluate tactics when plans encounter obstacles, and choose alternative API routes autonomously."
            },
            {
                title: "Cross-Departmental Knowledge Graph Memory",
                description: "A centralized semantic memory store ensuring every agent operates with shared, up-to-the-minute corporate context."
            },
            {
                title: "24/7 Continuous Execution Without Supervision",
                description: "Workflows execute continuously overnight, preparing briefings, reconciling logs, and advancing deals while leadership sleeps."
            }
        ],
        architecturalFlow: [
            "Goal Definition: Executive team defines quarterly or weekly objective in natural language",
            "Swarm Decomposition: Supervisor agent splits objective into discrete work streams with deadlines and milestones",
            "Multi-Agent Execution: Worker agents execute specialized tool calls (browser scraping, SQL queries, drafting)",
            "Consolidated Delivery: Agents review peer outputs and synthesize executive dashboard updates directly to Slack"
        ],
        useCases: [
            {
                title: "Autonomous 24/7 Outbound Pipeline Engine",
                description: "Deployed an agent swarm identifying ICP leads, validating email deliverability, writing tailored pitches, and booking meetings.",
                metric: "4.2x sales pipeline growth"
            },
            {
                title: "Dynamic E-Commerce Pricing & Inventory Balancing",
                description: "AI swarm constantly monitoring competitor prices, supplier lead times, and advertising spend to optimize margins.",
                metric: "+28% net margin increase"
            }
        ],
        metrics: [
            { label: "Pipeline Leverage", value: "4.2x" },
            { label: "Autonomous Uptime", value: "24/7/365" },
            { label: "Headcount Savings", value: "65%" }
        ],
        techStack: ["CrewAI", "LangGraph", "AutoGen", "Python", "Celery", "Redis", "OpenAI GPT-4o", "Docker"]
    },
    {
        id: "ai-integration-services",
        number: "07",
        title: "AI Integration Services",
        subtitle: "Enterprise-Grade Embedding of Foundation Models, Vector Topologies, and AI Microservices into Production Architectures",
        image: "/images/services/ai_integration_services.jpg",
        overview: [
            "Creating an AI proof-of-concept in a sandbox is simple. Hardening that model and integrating it seamlessly into a production environment with millions of daily users, strict SLAs, latency budgets, and security audits is where enterprise engineering matters.",
            "Our AI Integration Services embed intelligence directly into your existing web platforms, mobile applications, legacy ERPs, and microservice meshes without requiring disruptive system overhauls.",
            "We build robust API gateways featuring semantic response caching, automatic model fallbacks, rate-limit queues, and vector search infrastructure that guarantees sub-second responsiveness at scale."
        ],
        capabilities: [
            {
                title: "High-Throughput, Low-Latency AI Gateways",
                description: "Custom reverse proxies that load-balance requests across model providers, enforce timeouts, and handle failover gracefully."
            },
            {
                title: "Semantic Caching & Token Cost Optimization",
                description: "Cache frequent semantic queries in high-speed vector stores to eliminate redundant LLM calls and reduce API bills by up to 60%."
            },
            {
                title: "Production Vector Store Topology",
                description: "Architect and manage distributed vector databases (Pinecone, Qdrant, Milvus) for millisecond semantic similarity search."
            },
            {
                title: "Zero-Downtime Hot Swapping of Models",
                description: "Swap underlying models or prompt templates in real time via feature flags without redeploying backend applications."
            }
        ],
        architecturalFlow: [
            "Client Request: User action sends request to enterprise microservice layer",
            "AI Gateway Proxy: Query checked against Redis semantic cache; if cache hit, instant return in <20ms",
            "Dynamic Model Routing: If cache miss, routed to optimal LLM provider (OpenAI, Anthropic, or self-hosted vLLM)",
            "Vector Augmentation: Real-time contextual enrichment from hybrid semantic search before final response return"
        ],
        useCases: [
            {
                title: "Legacy Banking Customer Portal Modernization",
                description: "Embedded an intelligent banking assistant into a 15-year-old core banking system with zero downtime and strict security.",
                metric: "Sub-200ms response latency"
            },
            {
                title: "SaaS Knowledge Search Engine Upgrade",
                description: "Replaced brittle keyword search with vector hybrid retrieval across 50M indexed documents for an enterprise SaaS platform.",
                metric: "4.8x increase in search resolution"
            }
        ],
        metrics: [
            { label: "API Latency", value: "<180ms" },
            { label: "Token Cost Savings", value: "Up to 60%" },
            { label: "Integration Uptime", value: "99.99%" }
        ],
        techStack: ["Next.js", "FastAPI", "Go", "Redis", "Pinecone", "Qdrant", "AWS API Gateway", "Docker"]
    },
    {
        id: "enterprise-ai-solutions",
        number: "08",
        title: "Enterprise AI Solutions",
        subtitle: "Hardened Security, Air-Gapped Deployments, Strict SOC2 & HIPAA Compliance, and Dedicated Private Cloud Infrastructure",
        image: "/images/services/enterprise_ai_solutions.jpg",
        overview: [
            "Enterprise organizations cannot gamble with data security, compliance, or unvetted third-party services. Sensitive customer records, proprietary IP, and confidential financial filings must remain strictly protected under ironclad guarantees.",
            "Our Enterprise AI Solutions provide bank-grade security, comprehensive role-based access control (RBAC), end-to-end data encryption at rest and in transit, and dedicated private VPC or air-gapped on-premise deployments.",
            "With zero-data-retention agreements and self-hosted open-weights models (Llama 3, Mistral, DeepSeek), your sensitive intelligence never leaves your perimeter, fully satisfying internal infosec and global regulatory compliance."
        ],
        capabilities: [
            {
                title: "Air-Gapped & Private VPC Deployments",
                description: "Run open-weights LLMs entirely within your private AWS, Azure, or on-premise GPU clusters with zero external internet dependencies."
            },
            {
                title: "Enterprise SSO & Granular Role-Based Access",
                description: "Integrate seamlessly with Okta, Azure AD, and SAML to enforce strict data permissions on every AI interaction."
            },
            {
                title: "Zero Data Retention & Automated PII Redaction",
                description: "Automatic stripping of social security numbers, credit cards, and patient identifiers before tokens touch any processing unit."
            },
            {
                title: "Dedicated Enterprise SLA & 24/7 Engineering Support",
                description: "Guaranteed 99.99% uptime SLAs with dedicated site reliability engineers monitoring system health around the clock."
            }
        ],
        architecturalFlow: [
            "Authentication: Enterprise user authenticates via Okta SSO with SAML role claims",
            "PII Masking Gateway: Regex and named-entity recognition (NER) scrub confidential tokens before inference",
            "Private Model Execution: Inference runs in isolated private tenant GPU cluster inside your AWS VPC",
            "Audit Vault Logging: Immutable cryptographically signed logs recorded for compliance audits"
        ],
        useCases: [
            {
                title: "Private Clinical Intelligence for Hospital Network",
                description: "Deployed self-hosted medical summarization models inside an air-gapped hospital datacenter, ensuring zero patient data leaks.",
                metric: "100% HIPAA compliance verified"
            },
            {
                title: "Defense Sector Code Analysis Sandbox",
                description: "Configured an on-premise GPU cluster running private code auditing models with complete air-gap isolation.",
                metric: "Zero external telemetry leaks"
            }
        ],
        metrics: [
            { label: "Data Leak Risk", value: "0%" },
            { label: "Compliance Pass", value: "SOC2 / HIPAA" },
            { label: "SLA Uptime", value: "99.99%" }
        ],
        techStack: ["vLLM", "Triton Inference Server", "NVIDIA TensorRT-LLM", "Kubernetes", "AWS VPC", "Okta", "Vault"]
    },
    {
        id: "digital-transformation-with-ai",
        number: "09",
        title: "Digital Transformation with AI",
        subtitle: "Re-engineering Core Business Operating DNA to Transition from Legacy Manual Models into Autonomous Market Leaders",
        image: "/images/services/digital_transformation_with_ai.jpg",
        overview: [
            "Digital transformation is not merely scanning old paper records or shifting desktop software into the cloud. True transformation reimagines the fundamental operating DNA of an organization around autonomous data intelligence.",
            "We partner with traditional enterprises to modernize legacy mainframes, eliminate paper-based manual dependencies, and build autonomous feedback loops where every customer interaction directly trains the next generation of business efficiency.",
            "By embedding intelligence across sales, operations, manufacturing, and customer service, we turn established market players into agile, lightning-fast digital powerhouses capable of outpacing nimble tech startups."
        ],
        capabilities: [
            {
                title: "Legacy Mainframe & Database Modernization",
                description: "Wrap legacy AS400, COBOL, and on-premise relational databases in modern GraphQL and REST API layers ready for AI consumption."
            },
            {
                title: "Workforce Enablement & Human-AI Co-Piloting",
                description: "Upskill enterprise employees with custom internal AI co-pilots that multiply individual output by 3x to 5x."
            },
            {
                title: "Predictive Digital Twins for Physical Operations",
                description: "Create real-time digital simulations of manufacturing lines, warehouses, and fleet logistics powered by live sensor data."
            },
            {
                title: "New AI-Driven Product & Revenue Stream Creation",
                description: "Transform internal proprietary datasets into high-margin SaaS products and intelligent client-facing portals."
            }
        ],
        architecturalFlow: [
            "Legacy Audit & Modernization: Decoupling legacy database layers and exposing secure microservice APIs",
            "Intelligence Integration: Deploying AI microservices across operational nodes to automate manual bottleneck points",
            "Staff Co-Pilot Rollout: Rolling out intuitive interfaces that empower team members to orchestrate complex tasks via natural language",
            "Continuous Evolution: Automated feedback loops that continuously optimize operations based on real-time business telemetry"
        ],
        useCases: [
            {
                title: "45-Year-Old Industrial Equipment Manufacturer",
                description: "Transformed manual maintenance schedules into predictive IoT AI sensors, reducing unexpected factory downtime.",
                metric: "72% drop in machine downtime"
            },
            {
                title: "Multi-Location Retail Merchandising Overhaul",
                description: "Replaced monthly spreadsheet reorders with autonomous daily demand optimization across 250+ retail storefronts.",
                metric: "+19% revenue uplift across stores"
            }
        ],
        metrics: [
            { label: "Operational Velocity", value: "6x Faster" },
            { label: "Workforce Leverage", value: "3.5x Output" },
            { label: "Payback Period", value: "<6 Months" }
        ],
        techStack: ["Next.js", "GraphQL", "Apache Kafka", "Snowflake", "Docker", "Python", "Kubernetes", "AWS"]
    },
    {
        id: "openai-integration",
        number: "10",
        title: "OpenAI Integration",
        subtitle: "Production Mastery of GPT-4o, OpenAI Assistants API, Structured Outputs, Realtime Voice, and Fine-Tuned Custom Checkpoints",
        image: "/images/services/openai_integration.jpg",
        overview: [
            "OpenAI represents the leading edge of foundation model capabilities. Harnessing OpenAI in enterprise production, however, requires deep technical discipline: managing token rate limits, optimizing context windows, enforcing deterministic JSON schema responses, and controlling API costs.",
            "As premier OpenAI integration engineers, we architect mission-critical enterprise applications utilizing GPT-4o, OpenAI Assistants API, Realtime Voice streaming, and specialized function calling.",
            "We implement strict Structured Outputs (strict mode JSON schema) so your downstream software receives 100% predictable data structures, enabling reliable automation without fear of unexpected formatting anomalies."
        ],
        capabilities: [
            {
                title: "Structured Outputs & Strict JSON Schema Enforcement",
                description: "Guarantee that OpenAI responses match predefined TypeScript and Pydantic schemas with 100% deterministic adherence."
            },
            {
                title: "OpenAI Assistants API with Code Interpreter & File Search",
                description: "Build stateful assistants capable of writing and executing Python scripts in sandboxes and performing vector search on PDFs."
            },
            {
                title: "Realtime Voice API & Conversational Agents",
                description: "Deploy ultra-low-latency, natural-sounding voice assistants for phone customer service and hands-free field operations."
            },
            {
                title: "Context Window Optimization & Token Budgeting",
                description: "Smart summarization, dynamic sliding context windows, and vector chunking to deliver maximum quality at minimum token cost."
            }
        ],
        architecturalFlow: [
            "User Ingestion: Text or audio input streamed over WebSockets to OpenAI Realtime / Chat Completion endpoints",
            "Tool Execution (Function Calling): Model identifies required tool, pauses generation, and requests client execution",
            "Database/API Dispatch: Backend runs tool call (e.g. check bank balance or update CRM) and feeds result back to model",
            "Deterministic Final Response: Strict JSON output verified against schema and rendered to user interface in real time"
        ],
        useCases: [
            {
                title: "Autonomous Voice & Chat Tier-1 Support Platform",
                description: "Deployed an OpenAI Realtime Voice agent managing 80,000 monthly customer inquiries with natural human pacing.",
                metric: "92% first-contact resolution"
            },
            {
                title: "Automated Financial Report Extraction Engine",
                description: "Built a GPT-4o Structured Output pipeline extracting 1,200 balance sheet attributes into verified database tables.",
                metric: "Zero schema validation errors"
            }
        ],
        metrics: [
            { label: "Schema Determinism", value: "100%" },
            { label: "Voice Latency", value: "<320ms" },
            { label: "Resolution Rate", value: "92%" }
        ],
        techStack: ["OpenAI GPT-4o", "OpenAI Assistants API", "OpenAI Realtime Voice", "Pydantic", "TypeScript", "FastAPI", "WebSockets"]
    }
];

export const servicesData: Service[] = [
    {
        slug: "ai-assistants",
        title: "AI & Assistants",
        shortDescription: "Autonomous AI agents, generative intelligence, and cognitive enterprise automation.",
        whatIs: "AI & Assistants represent the pinnacle of modern enterprise autonomy. Rather than simple chatbots or isolated scripts, our AI systems combine multimodal reasoning, real-time tool execution, and multi-agent coordination to autonomously execute complex, multi-step enterprise workflows at machine speed and precision.",
        longDescription: "We engineer enterprise-grade AI and autonomous assistants tailored to your organization's exact operational requirements. From custom predictive intelligence and generative AI development to deep business process automation and OpenAI production integrations, we build systems that scale output exponentially while driving down operational expenditure.",
        features: [
            "Artificial Intelligence Solutions & Custom Models",
            "Generative AI Development with Constitutional Guardrails",
            "Executive AI Consulting & Strategic Roadmaps",
            "Business Process Automation (BPA) Across Core Tools",
            "Intelligent Process Automation (IPA) with Cognitive OCR",
            "AI Business Automation with Multi-Agent Swarms",
            "Enterprise AI Integration Services & Low-Latency Gateways",
            "Hardened Enterprise AI Solutions with Air-Gapped Security",
            "Complete Digital Transformation with AI Operating Models",
            "Production OpenAI Integration with Strict JSON Schemas"
        ],
        useCases: [
            "Autonomous multi-agent SDR swarm identifying leads, drafting personalized pitches, and booking meetings 24/7.",
            "Cognitive document processing reading thousands of messy vendor invoices, verifying ledger balances, and paying approved bills.",
            "Private on-premise clinical and legal AI assistants delivering instant synthesis with zero data retention risk."
        ],
        techStack: ["OpenAI GPT-4o", "Anthropic Claude 3.5", "LangGraph", "CrewAI", "Python", "FastAPI", "Next.js", "Docker", "AWS"],
        iconName: "Bot",
        heroImage: "/images/services/ai_solutions.jpg",
        howWeHelp: [
            { step: 1, title: "Operational & Data Audit", desc: "We map your organization's highest-cost bottlenecks, evaluate existing data assets, and identify high-ROI automation opportunities." },
            { step: 2, title: "Architecture & Security Blueprint", desc: "We design the multi-agent decision trees, API gateways, guardrails, and compliance protocols before writing any code." },
            { step: 3, title: "Custom Development & Integration", desc: "We build, fine-tune, and integrate the AI assistant network directly into your CRM, ERP, databases, and communication channels." },
            { step: 4, title: "Production Deployment & Monitoring", desc: "We deploy to your private cloud or VPC with comprehensive telemetry, latency budgets, and continuous active learning loops." }
        ],
        architecture: [
            { id: "input", label: "Multi-Channel Input", sublabel: "Email / Web / Voice / API", type: "source" },
            { id: "router", label: "AI Gateway & Router", sublabel: "Semantic Cache & Model Router", type: "process" },
            { id: "swarm", label: "Autonomous Agent Swarm", sublabel: "Planner / Executor / Reviewer", type: "process" },
            { id: "tools", label: "Enterprise Tool Mesh", sublabel: "ERP / CRM / Vector DB / Slack", type: "action" },
            { id: "output", label: "Verified Execution", sublabel: "Audit Trail & Business Output", type: "output" }
        ],
        caseStudy: {
            context: "A global enterprise processing 50,000+ monthly support tickets and 10,000+ vendor invoices across 8 international subsidiaries.",
            challenge: "High operational latency, rising headcount costs, and frequent human error when copying data across legacy ERP and CRM silos.",
            result: "Deployed SIAIEIN's AI & Assistants autonomous network. The multi-agent system now handles 84% of support tickets end-to-end in under 45 seconds, while automating 95% of invoice reconciliations with zero errors.",
            metrics: [
                { label: "Support Resolution", value: "84% Automated" },
                { label: "Invoice Processing", value: "95% Faster" },
                { label: "Annual Cost Savings", value: "₹42L/year" }
            ]
        }
    }
];

export function getServiceBySlug(slug: string): Service | undefined {
    return servicesData.find((s) => s.slug === slug);
}
