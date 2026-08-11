const blogData = [
    {
        title: "Generative AI Shift",
        content: `<p>Generative AI has moved from experimentation to enterprise infrastructure in 2025–2026. Models are no longer just chatbots; they are copilots embedded inside productivity software, developer environments, and customer support systems. The real change is workflow automation — AI now drafts emails, writes code, summarizes meetings, and analyzes business data in real time.</p><p>Organizations are shifting from “AI features” to “AI-first processes.” Instead of employees using tools, tools are coordinating employees. Retrieval-augmented generation (RAG) is widely adopted because it combines internal company data with LLM reasoning while avoiding hallucinations. Companies also increasingly deploy smaller private models rather than only relying on massive cloud models due to cost and privacy.</p><p>The biggest challenge now is evaluation, not capability. Businesses need guardrails, monitoring, and human review pipelines. AI literacy is becoming a core workplace skill similar to spreadsheets in the 1990s.</p><p><strong>Reference:</strong><br><a href="https://ai.googleblog.com/" target="_blank" rel="noopener">https://ai.googleblog.com/</a><br><a href="https://openai.com/research" target="_blank" rel="noopener">https://openai.com/research</a></p>`
    },
    {
        title: "Edge AI Growth",
        content: `<p>Edge AI means running machine learning directly on devices instead of cloud servers. Smartphones, cameras, vehicles, and industrial sensors now process data locally. This reduces latency and protects privacy because sensitive information never leaves the device.</p><p>In 2026, most modern mobile processors include dedicated neural processing units (NPUs). These chips handle image recognition, voice commands, and real-time translation without internet connectivity. Autonomous vehicles heavily rely on edge inference since milliseconds matter for safety decisions.</p><p>Businesses benefit through bandwidth reduction and faster response times. Factories use predictive maintenance models locally to detect machine failure before breakdowns occur. Retail stores deploy smart shelves that detect inventory automatically.</p><p>The trend also supports AI democratization. Developers can ship applications globally without maintaining expensive servers. However, model compression and quantization are critical skills because edge hardware has strict memory limits.</p><p><strong>Reference:</strong><br><a href="https://developer.nvidia.com/blog" target="_blank" rel="noopener">https://developer.nvidia.com/blog</a><br><a href="https://www.arm.com/blogs" target="_blank" rel="noopener">https://www.arm.com/blogs</a></p>`
    },
    {
        title: "Quantum Advantage Near",
        content: `<p>Quantum computing is transitioning from theory to specialized utility. We are not replacing classical computers, but solving specific problems faster — optimization, material simulation, and cryptography research.</p><p>Companies like IBM and Google have demonstrated systems beyond 1000 qubits, though error correction remains the main barrier. The industry now focuses on “useful noisy quantum computers.” Hybrid quantum-classical algorithms are the practical path: classical computers manage logic while quantum circuits solve probabilistic sub-problems.</p><p>Financial modeling and pharmaceutical discovery show promising results. Drug interactions that previously required years of simulation can be approximated in hours using quantum chemistry models.</p><p>The immediate impact is research acceleration rather than consumer computing. Within this decade, industries will access quantum processing through cloud APIs instead of owning hardware.</p><p><strong>Reference:</strong><br><a href="https://quantum.ibm.com/blog" target="_blank" rel="noopener">https://quantum.ibm.com/blog</a><br><a href="https://research.google/quantum" target="_blank" rel="noopener">https://research.google/quantum</a></p>`
    },
    {
        title: "Data Engineering Era",
        content: `<p>Data science success now depends more on data engineering than modeling. Modern AI pipelines require clean, versioned, and continuously updated datasets. Companies learned that a simple model with reliable data beats a complex model with messy data.</p><p>Lakehouse architectures combine data lakes and warehouses, allowing analytics and machine learning on the same storage layer. Tools like Apache Iceberg and Delta Lake enable time-travel queries and reproducibility — critical for regulatory compliance.</p><p>Streaming data is also dominating. Instead of daily reports, organizations monitor live dashboards powered by event streams from applications and IoT devices.</p><p>The role of data scientist is evolving toward analytics engineering — building pipelines, metrics definitions, and reliable transformations rather than only predictive modeling.</p><p><strong>Reference:</strong><br><a href="https://databricks.com/blog" target="_blank" rel="noopener">https://databricks.com/blog</a><br><a href="https://towardsdatascience.com" target="_blank" rel="noopener">https://towardsdatascience.com</a></p>`
    },
    {
        title: "MLOps Standardization",
        content: `<p>Machine Learning Operations (MLOps) has become essential because models degrade over time. Real-world data changes — customer behavior, weather patterns, and markets shift — causing model accuracy to drop.</p><p>Modern MLOps pipelines include automated training, validation tests, deployment, and monitoring. Drift detection systems now alert teams when predictions become unreliable. Instead of manual retraining, systems schedule updates automatically.</p><p>Containers and Kubernetes play a central role, making model deployment similar to software deployment. Feature stores ensure consistent data between training and inference environments.</p><p>Companies adopting MLOps experience faster iteration cycles and fewer production failures. The industry is moving from experimental notebooks to production-grade AI services.</p><p><strong>Reference:</strong><br><a href="https://ml-ops.org/" target="_blank" rel="noopener">https://ml-ops.org/</a><br><a href="https://kubernetes.io/blog" target="_blank" rel="noopener">https://kubernetes.io/blog</a></p>`
    },
    {
        title: "Responsible AI Rules",
        content: `<p>Governments worldwide are introducing AI regulations focused on transparency and accountability. The EU AI Act and similar policies require explainability, bias checks, and risk classification.</p><p>Responsible AI frameworks now include dataset documentation, model cards, and fairness testing. Organizations must track training data sources and demonstrate non-discrimination in predictions.</p><p>Bias mitigation techniques include re-sampling datasets and constraint-based optimization during training. Auditable AI pipelines are becoming mandatory in finance and healthcare.</p><p>The future of AI adoption depends on trust. Companies investing early in governance avoid legal risk and gain user confidence.</p><p><strong>Reference:</strong><br><a href="https://oecd.ai/en/ai-principles" target="_blank" rel="noopener">https://oecd.ai/en/ai-principles</a><br><a href="https://ai.meta.com/blog" target="_blank" rel="noopener">https://ai.meta.com/blog</a></p>`
    },
    {
        title: "Cloud Native AI",
        content: `<p>Cloud providers now offer specialized AI infrastructure: GPU clusters, vector databases, and inference endpoints. Developers focus on applications while platforms handle scaling.</p><p>Serverless AI inference allows applications to run models only when needed, dramatically reducing costs. Vector search is a key innovation powering semantic search and recommendation systems.</p><p>Multi-cloud strategies are rising because organizations want flexibility and risk distribution. AI workloads can move across providers using container orchestration and open standards.</p><p>Cloud computing is no longer just storage — it’s becoming an AI execution platform.</p><p><strong>Reference:</strong><br><a href="https://aws.amazon.com/blogs/machine-learning/" target="_blank" rel="noopener">https://aws.amazon.com/blogs/machine-learning/</a><br><a href="https://cloud.google.com/blog" target="_blank" rel="noopener">https://cloud.google.com/blog</a></p>`
    },
    {
        title: "Computer Vision Retail",
        content: `<p>Retail stores are adopting computer vision for automation. Cameras detect customer movement, product interaction, and checkout behavior.</p><p>Autonomous checkout systems eliminate billing queues. Customers pick items and walk out while the system automatically charges their account. Inventory management also improves because shelves report stock in real time.</p><p>Privacy-preserving vision techniques blur faces while tracking actions. Businesses gain analytics without storing personal identity.</p><p>The technology reduces labor costs and enhances customer experience simultaneously.</p><p><strong>Reference:</strong><br><a href="https://research.amazon/science" target="_blank" rel="noopener">https://research.amazon/science</a><br><a href="https://opencv.org/blog" target="_blank" rel="noopener">https://opencv.org/blog</a></p>`
    },
    {
        title: "AI in Healthcare",
        content: `<p>AI is assisting doctors rather than replacing them. Medical imaging models detect tumors and anomalies earlier than traditional analysis.</p><p>Large language models summarize patient history and clinical notes, reducing administrative workload. Predictive analytics identifies high-risk patients for early intervention.</p><p>Hospitals deploy AI triage systems to prioritize emergency cases during high demand.</p><p>Regulation remains strict, so models undergo extensive validation. The focus is safety and decision support.</p><p><strong>Reference:</strong><br><a href="https://www.nature.com/subjects/machine-learning" target="_blank" rel="noopener">https://www.nature.com/subjects/machine-learning</a><br><a href="https://stanfordmlgroup.github.io/" target="_blank" rel="noopener">https://stanfordmlgroup.github.io/</a></p>`
    },
    {
        title: "Future of Work",
        content: `<p>AI tools are transforming knowledge work. Instead of replacing jobs, they reshape tasks. Workers supervise systems, validate outputs, and focus on creative decision making.</p><p>New roles are emerging: AI trainers, prompt engineers, and model auditors. Education systems now include AI collaboration skills.</p><p>Productivity gains allow smaller teams to handle larger workloads. Companies prioritize employees who can guide AI rather than compete with it.</p><p>Human judgment remains essential — AI generates options, humans choose direction.</p><p><strong>Reference:</strong><br><a href="https://www.weforum.org/agenda/archive/artificial-intelligence/" target="_blank" rel="noopener">https://www.weforum.org/agenda/archive/artificial-intelligence/</a><br><a href="https://mitsloan.mit.edu/ideas-made-to-matter" target="_blank" rel="noopener">https://mitsloan.mit.edu/ideas-made-to-matter</a></p>`
    },
    {
        title: "Federated Learning Rise",
        content: `<p>Federated learning allows machine learning models to train across multiple devices without collecting raw data centrally. Instead of uploading sensitive data to servers, devices send only model updates. This approach significantly improves privacy while still benefiting from collective learning.</p><p>Smartphones already use federated learning for keyboard prediction and personalization. Healthcare institutions also adopt it to collaborate on disease prediction without sharing patient records. Banks similarly train fraud detection models while keeping customer data secure.</p><p>The biggest technical challenge is handling heterogeneous data distributions and unreliable network connections. Researchers are improving aggregation algorithms and communication efficiency to stabilize training.</p><p>Federated learning is expected to become essential as privacy regulations tighten worldwide. It provides a compromise between performance and confidentiality.</p><p><strong>Reference:</strong><br><a href="https://ai.googleblog.com/" target="_blank" rel="noopener">https://ai.googleblog.com/</a><br><a href="https://arxiv.org/" target="_blank" rel="noopener">https://arxiv.org/</a></p>`
    },
    {
        title: "AutoML Expansion",
        content: `<p>AutoML automates model selection, feature engineering, and hyperparameter tuning. This allows non-experts to build strong predictive systems without deep machine learning expertise.</p><p>In 2026, AutoML platforms are embedded inside analytics tools. Business analysts can upload datasets and receive predictions, dashboards, and explanations automatically. This reduces dependency on large data science teams.</p><p>However, AutoML does not eliminate experts. Professionals still design problem framing, evaluation criteria, and deployment architecture. AutoML accelerates iteration rather than replacing understanding.</p><p>The most powerful use is rapid prototyping — testing multiple approaches quickly before committing to custom models.</p><p><strong>Reference:</strong><br><a href="https://cloud.google.com/automl" target="_blank" rel="noopener">https://cloud.google.com/automl</a><br><a href="https://azure.microsoft.com/en-us/products/machine-learning/" target="_blank" rel="noopener">https://azure.microsoft.com/en-us/products/machine-learning/</a></p>`
    },
    {
        title: "Vector Databases Boom",
        content: `<p>Vector databases store embeddings instead of traditional rows and columns. They enable similarity search — finding meaning rather than exact matches.</p><p>Modern AI assistants rely on vector search to retrieve context documents. Recommendation systems also use embeddings to match user preferences with products.</p><p>Popular algorithms like HNSW optimize approximate nearest neighbor search, allowing fast retrieval even with billions of vectors. This makes real-time semantic search practical.</p><p>As language models grow, vector databases become a core infrastructure layer, similar to relational databases in traditional software systems.</p><p><strong>Reference:</strong><br><a href="https://pinecone.io/learn/" target="_blank" rel="noopener">https://pinecone.io/learn/</a><br><a href="https://weaviate.io/blog" target="_blank" rel="noopener">https://weaviate.io/blog</a></p>`
    },
    {
        title: "TinyML Devices",
        content: `<p>TinyML focuses on running machine learning on microcontrollers with extremely limited memory and power consumption. Devices like sensors and wearables can now perform inference for weeks on a battery.</p><p>Applications include fall detection in elderly care, wildlife monitoring, and predictive maintenance in remote locations. The benefit is continuous intelligence without network connectivity.</p><p>Model pruning and quantization are essential techniques, compressing models to kilobyte scale. Developers design models specifically for constraints rather than adapting large networks.</p><p>TinyML is critical for scaling IoT because transmitting raw data continuously would be inefficient and expensive.</p><p><strong>Reference:</strong><br><a href="https://tinyml.org/" target="_blank" rel="noopener">https://tinyml.org/</a><br><a href="https://blog.tensorflow.org/" target="_blank" rel="noopener">https://blog.tensorflow.org/</a></p>`
    },
    {
        title: "Reinforcement Learning Robotics",
        content: `<p>Reinforcement learning trains machines through trial and error rather than labeled data. Robotics benefits greatly because manual labeling of physical movement is difficult.</p><p>Modern robots learn grasping and navigation in simulation first, then transfer knowledge to the real world using domain randomization. Warehouses deploy robots that adapt to new object shapes without reprogramming.</p><p>Safety constraints remain important. Engineers combine classical control systems with learned policies for reliability.</p><p>The future includes collaborative robots that work alongside humans rather than isolated industrial machines.</p><p><strong>Reference:</strong><br><a href="https://deepmind.google/discover/blog/" target="_blank" rel="noopener">https://deepmind.google/discover/blog/</a><br><a href="https://robotics.sciencemag.org/" target="_blank" rel="noopener">https://robotics.sciencemag.org/</a></p>`
    },
    {
        title: "Data Privacy Computing",
        content: `<p>Privacy-preserving computation techniques allow analysis on encrypted data. Homomorphic encryption and secure enclaves enable organizations to collaborate without exposing sensitive information.</p><p>Financial institutions analyze joint risk patterns without sharing raw transaction records. Healthcare research benefits from combining datasets while maintaining compliance.</p><p>Though computationally expensive, hardware acceleration is improving feasibility. Cloud providers now offer confidential computing environments as standard features.</p><p>Privacy computing will become foundational infrastructure for cross-organization AI collaboration.</p><p><strong>Reference:</strong><br><a href="https://confidentialcomputing.io/blog/" target="_blank" rel="noopener">https://confidentialcomputing.io/blog/</a><br><a href="https://research.microsoft.com/" target="_blank" rel="noopener">https://research.microsoft.com/</a></p>`
    },
    {
        title: "Multimodal Models",
        content: `<p>Multimodal AI processes text, images, audio, and video simultaneously. Instead of separate models, one system understands multiple information types.</p><p>Applications include visual search, automated video editing, and accessible interfaces for visually impaired users. These models connect speech to objects and actions in real environments.</p><p>Training requires massive aligned datasets and advanced attention mechanisms. Evaluation is complex because correctness depends on context understanding.</p><p>Multimodal systems represent a step toward general-purpose intelligence by bridging perception and reasoning.</p><p><strong>Reference:</strong><br><a href="https://openai.com/research" target="_blank" rel="noopener">https://openai.com/research</a><br><a href="https://ai.facebook.com/blog/" target="_blank" rel="noopener">https://ai.facebook.com/blog/</a></p>`
    },
    {
        title: "Serverless Data Pipelines",
        content: `<p>Serverless computing allows data pipelines to run only when triggered by events. Instead of maintaining servers, developers define functions reacting to file uploads or database changes.</p><p>Streaming architectures integrate with serverless systems to process logs, transactions, and telemetry instantly. Companies pay only for execution time, reducing idle infrastructure costs.</p><p>Cold start latency remains a challenge, but caching and prewarming techniques mitigate delays.</p><p>Serverless pipelines accelerate experimentation and scale automatically during peak workloads.</p><p><strong>Reference:</strong><br><a href="https://aws.amazon.com/serverless/" target="_blank" rel="noopener">https://aws.amazon.com/serverless/</a><br><a href="https://cloud.google.com/serverless" target="_blank" rel="noopener">https://cloud.google.com/serverless</a></p>`
    },
    {
        title: "Explainable AI Demand",
        content: `<p>As AI decisions affect loans, hiring, and medical diagnosis, stakeholders require explanations. Explainable AI techniques reveal which inputs influenced predictions.</p><p>Methods like SHAP and LIME approximate feature importance. Interpretable models sometimes replace black-box networks in high-risk domains.</p><p>Transparency builds trust and simplifies debugging. Developers can detect bias and unexpected correlations earlier.</p><p>Regulators increasingly require explainability for automated decision systems.</p><p><strong>Reference:</strong><br><a href="https://christophm.github.io/interpretable-ml-book/" target="_blank" rel="noopener">https://christophm.github.io/interpretable-ml-book/</a><br><a href="https://www.ibm.com/topics/explainable-ai" target="_blank" rel="noopener">https://www.ibm.com/topics/explainable-ai</a></p>`
    },
    {
        title: "Sustainable Computing",
        content: `<p>AI models consume large energy resources. Researchers now focus on efficient architectures and renewable-powered data centers.</p><p>Sparse models activate only necessary neurons, reducing computation. Hardware accelerators improve performance per watt. Cloud providers publish carbon dashboards to track usage impact.</p><p>Sustainable AI balances innovation with environmental responsibility. Efficiency optimization becomes a design objective rather than an afterthought.</p><p>Green computing will shape future system design standards.</p><p><strong>Reference:</strong><br><a href="https://www.nature.com/articles/d41586-020-03448-5" target="_blank" rel="noopener">https://www.nature.com/articles/d41586-020-03448-5</a><br><a href="https://cloud.google.com/sustainability" target="_blank" rel="noopener">https://cloud.google.com/sustainability</a></p>`
    },
    {
        title: "Synthetic Data Era",
        content: `<p>Synthetic data is artificially generated information used to train machine learning models. It solves privacy and scarcity problems where real datasets are limited or sensitive. Industries like healthcare and finance use synthetic datasets to develop models without exposing personal records.</p><p>Generative models simulate realistic patterns while removing identifiable information. Autonomous driving companies create virtual traffic environments to train perception systems safely. This approach accelerates development while reducing legal risk.</p><p>The key challenge is maintaining statistical realism. Poor synthetic data produces misleading models. Researchers now measure fidelity using distribution similarity metrics and downstream model accuracy.</p><p>Synthetic data will become standard practice in regulated industries where collecting real data is expensive or restricted.</p><p><strong>Reference:</strong><br><a href="https://mostly.ai/blog" target="_blank" rel="noopener">https://mostly.ai/blog</a><br><a href="https://synthesis.ai/blog" target="_blank" rel="noopener">https://synthesis.ai/blog</a></p>`
    },
    {
        title: "AI Powered Search",
        content: `<p>Search engines are shifting from keyword matching to answer generation. Instead of returning links only, systems summarize information directly using large language models combined with retrieval systems.</p><p>Semantic search understands intent rather than literal wording. Enterprise knowledge bases now provide conversational interfaces where employees ask questions naturally.</p><p>Ranking is evolving from page authority to contextual relevance. However, verification remains important because generated answers may still contain inaccuracies.</p><p>Hybrid architectures combining search indexes with reasoning models are becoming the dominant pattern across software platforms.</p><p><strong>Reference:</strong><br><a href="https://blog.google/products/search/" target="_blank" rel="noopener">https://blog.google/products/search/</a><br><a href="https://elastic.co/blog" target="_blank" rel="noopener">https://elastic.co/blog</a></p>`
    },
    {
        title: "Graph Machine Learning",
        content: `<p>Graph machine learning analyzes relationships rather than isolated data points. Social networks, fraud detection, and recommendation systems benefit from modeling connections between entities.</p><p>Graph neural networks propagate information across neighbors to capture patterns like influence or anomaly clusters. Banks detect coordinated fraud rings that traditional models miss.</p><p>Data preparation is complex because building graphs requires defining meaningful relationships. Scalability also challenges large datasets.</p><p>As data becomes interconnected, graph-based approaches will increasingly outperform tabular methods in relational problems.</p><p><strong>Reference:</strong><br><a href="https://distill.pub/" target="_blank" rel="noopener">https://distill.pub/</a><br><a href="https://neo4j.com/blog" target="_blank" rel="noopener">https://neo4j.com/blog</a></p>`
    },
    {
        title: "AI Code Assistants",
        content: `<p>AI coding assistants now integrate directly into development environments. They generate functions, explain errors, and suggest architecture improvements.</p><p>Developers spend less time writing boilerplate and more time reviewing logic. Junior programmers learn faster because suggestions act like real-time mentorship.</p><p>However, reviewing generated code remains essential. Teams adopt guidelines for verification, testing, and security validation.</p><p>The main productivity gain comes from reducing repetitive work rather than replacing engineers. Software development becomes more design-oriented.</p><p><strong>Reference:</strong><br><a href="https://github.blog/ai-and-ml/" target="_blank" rel="noopener">https://github.blog/ai-and-ml/</a><br><a href="https://stackoverflow.blog/" target="_blank" rel="noopener">https://stackoverflow.blog/</a></p>`
    },
    {
        title: "Hybrid Cloud Strategy",
        content: `<p>Organizations increasingly combine private infrastructure with public cloud services. Sensitive workloads remain on-premise while scalable AI training runs in the cloud.</p><p>Container orchestration enables portability across environments. This prevents vendor lock-in and improves reliability during outages.</p><p>Networking and identity management are key challenges in hybrid setups. Secure connectivity and consistent access control policies are essential.</p><p>Hybrid cloud balances flexibility, compliance, and cost optimization, making it a common enterprise architecture.</p><p><strong>Reference:</strong><br><a href="https://www.redhat.com/en/topics/hybrid-cloud" target="_blank" rel="noopener">https://www.redhat.com/en/topics/hybrid-cloud</a><br><a href="https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-hybrid-cloud/" target="_blank" rel="noopener">https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-hybrid-cloud/</a></p>`
    },
    {
        title: "Time Series Forecasting",
        content: `<p>Time series machine learning predicts future values based on historical patterns. Applications include demand forecasting, energy consumption prediction, and financial analysis.</p><p>Deep learning models like temporal convolution networks and transformers now outperform classical statistical methods in complex datasets. However, simple models still perform well in stable environments.</p><p>Feature engineering such as seasonality and trend decomposition remains critical for accuracy.</p><p>Businesses rely on forecasting for inventory planning and operational efficiency, making it one of the most economically impactful AI applications.</p><p><strong>Reference:</strong><br><a href="https://otexts.com/fpp3/" target="_blank" rel="noopener">https://otexts.com/fpp3/</a><br><a href="https://huggingface.co/blog/time-series-transformers" target="_blank" rel="noopener">https://huggingface.co/blog/time-series-transformers</a></p>`
    },
    {
        title: "AI Security Defense",
        content: `<p>Cybersecurity systems increasingly use machine learning to detect anomalies in network traffic and user behavior. AI identifies attacks faster than signature-based methods.</p><p>Behavioral models detect compromised accounts even when attackers use valid credentials. Real-time monitoring systems automatically isolate suspicious activity.</p><p>Adversarial attacks remain a challenge because attackers attempt to fool models intentionally. Defensive techniques include ensemble detection and continuous retraining.</p><p>AI security will remain an arms race between attackers and defenders.</p><p><strong>Reference:</strong><br><a href="https://security.googleblog.com/" target="_blank" rel="noopener">https://security.googleblog.com/</a><br><a href="https://unit42.paloaltonetworks.com/" target="_blank" rel="noopener">https://unit42.paloaltonetworks.com/</a></p>`
    },
    {
        title: "Quantum Machine Learning",
        content: `<p>Quantum machine learning explores combining quantum circuits with classical training methods. Certain optimization problems may benefit from quantum sampling.</p><p>Current implementations remain experimental, but research suggests advantages in chemistry simulations and probabilistic modeling.</p><p>The main limitation is noise and limited qubit stability. Hybrid algorithms help mitigate these issues by offloading heavy computation to classical systems.</p><p>Practical impact will emerge gradually as hardware improves.</p><p><strong>Reference:</strong><br><a href="https://pennylane.ai/blog" target="_blank" rel="noopener">https://pennylane.ai/blog</a><br><a href="https://qiskit.org/documentation/" target="_blank" rel="noopener">https://qiskit.org/documentation/</a></p>`
    },
    {
        title: "Feature Store Adoption",
        content: `<p>Feature stores centralize reusable data features for machine learning models. They ensure consistency between training and inference environments.</p><p>Teams avoid duplicating preprocessing logic across projects. Real-time feature serving supports online prediction systems like recommendations and fraud detection.</p><p>Governance improves because feature lineage and ownership are tracked systematically.</p><p>Feature stores reduce production errors and accelerate collaboration across data teams.</p><p><strong>Reference:</strong><br><a href="https://feast.dev/" target="_blank" rel="noopener">https://feast.dev/</a><br><a href="https://tecton.ai/blog" target="_blank" rel="noopener">https://tecton.ai/blog</a></p>`
    },
    {
        title: "Human AI Collaboration",
        content: `<p>The future of AI is cooperative intelligence. Systems provide suggestions while humans provide judgment, ethics, and context.</p><p>In creative fields, AI generates drafts while professionals refine ideas. In business, analytics tools propose strategies that managers evaluate.</p><p>Organizations that train employees to work with AI outperform those treating it only as automation. Skill adaptation becomes more important than replacement fear.</p><p>The goal is augmentation — increasing human capability rather than eliminating it.</p><p><strong>Reference:</strong><br><a href="https://hbr.org/topic/artificial-intelligence" target="_blank" rel="noopener">https://hbr.org/topic/artificial-intelligence</a><br><a href="https://mitsloan.mit.edu/artificial-intelligence" target="_blank" rel="noopener">https://mitsloan.mit.edu/artificial-intelligence</a></p>`
    }
];

const blogExtra = [];

/* ========================================================================== */
/* 1) Core Utilities */
/* ========================================================================== */

function byId(id) {
    return document.getElementById(id);
}

function addListener(element, eventName, handler, options) {
    if (!element) return;
    element.addEventListener(eventName, handler, options);
}

// Device detection
function isMobileDevice() {
    return ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0);
}

function initializeParticleBackground() {
    const canvas = byId('particleBackgroundCanvas');
    const heroSection = byId('hero');
    if (!canvas || !heroSection) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const mouse = { x: -10000, y: -10000, active: false };
    let particles = [];
    let rafId = null;
    let width = 0;
    let height = 0;
    let paused = false;
    let isIntersecting = true;
    let heroRect = null;

    const colors = [
        '#2755d2',
        '#14b8a6',
        '#7c3aed',
        '#22d3ee',
        '#a78bfa'
    ];

    const areaToCount = () => {
        const area = Math.max(320, width) * Math.max(320, height);
        const target = Math.floor(area / (isMobileDevice() ? 1900 : 900));
        return Math.max(300, Math.min(target, isMobileDevice() ? 450 : 950));
    };

    const randomRange = (min, max) => min + Math.random() * (max - min);

    const createParticle = () => {
        const driftX = randomRange(-0.2, 0.2);
        const driftY = randomRange(-0.2, 0.2);
        return {
            x: Math.random() * width,
            y: Math.random() * height,
            vx: driftX,
            vy: driftY,
            driftX,
            driftY,
            radius: randomRange(0.7, 2.0),
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: randomRange(0.38, 0.85)
        };
    };

    const resize = () => {
        width = heroSection.clientWidth;
        height = heroSection.clientHeight;
        canvas.width = Math.max(1, Math.floor(width * dpr));
        canvas.height = Math.max(1, Math.floor(height * dpr));
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        heroRect = null;

        const desired = areaToCount();
        if (particles.length > desired) {
            particles = particles.slice(0, desired);
        } else {
            while (particles.length < desired) particles.push(createParticle());
        }
    };

    const onPointerMove = (event) => {
        if (!heroRect) heroRect = heroSection.getBoundingClientRect();
        mouse.x = event.clientX - heroRect.left;
        mouse.y = event.clientY - heroRect.top;
        mouse.active = true;
    };

    const onPointerLeave = () => {
        mouse.active = false;
        mouse.x = -10000;
        mouse.y = -10000;
    };

    const updatePlayState = () => {
        const shouldPlay = !document.hidden && isIntersecting;
        if (shouldPlay && paused) {
            paused = false;
            if (rafId === null) {
                rafId = requestAnimationFrame(frame);
            }
        } else if (!shouldPlay && !paused) {
            paused = true;
        }
    };

    const onVisibility = () => {
        updatePlayState();
    };

    const frame = () => {
        if (paused) {
            rafId = null;
            return;
        }

        ctx.clearRect(0, 0, width, height);

        const repelRadius = isMobileDevice() ? 70 : 110;
        const repelRadiusSq = repelRadius * repelRadius;
        const repelForce = isMobileDevice() ? 0.16 : 0.24;

        for (let i = 0; i < particles.length; i++) {
            const particle = particles[i];

            particle.vx += (particle.driftX - particle.vx) * 0.015;
            particle.vy += (particle.driftY - particle.vy) * 0.015;

            if (!prefersReduced && mouse.active) {
                const dx = particle.x - mouse.x;
                const dy = particle.y - mouse.y;
                const distSq = dx * dx + dy * dy;

                if (distSq > 0.01 && distSq < repelRadiusSq) {
                    const dist = Math.sqrt(distSq);
                    const strength = (1 - dist / repelRadius) * repelForce;
                    particle.vx += (dx / dist) * strength;
                    particle.vy += (dy / dist) * strength;
                }
            }

            particle.vx *= 0.985;
            particle.vy *= 0.985;
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < -8) particle.x = width + 8;
            if (particle.x > width + 8) particle.x = -8;
            if (particle.y < -8) particle.y = height + 8;
            if (particle.y > height + 8) particle.y = -8;

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.globalAlpha = particle.alpha;
            ctx.fill();
        }

        ctx.globalAlpha = 1;
        rafId = requestAnimationFrame(frame);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });
    heroSection.addEventListener('pointermove', onPointerMove, { passive: true });
    heroSection.addEventListener('pointerleave', onPointerLeave, { passive: true });
    document.addEventListener('visibilitychange', onVisibility, { passive: true });

    if (window.IntersectionObserver) {
        const observer = new IntersectionObserver((entries) => {
            isIntersecting = entries[0].isIntersecting;
            updatePlayState();
        }, { threshold: 0.01 });
        observer.observe(heroSection);
    }

    rafId = requestAnimationFrame(frame);
}

/* ========================================================================== */
/* 2) Cursor System */
/* ========================================================================== */

// Smooth cursor (SVG arrow) with velocity-smoothed rotation and eased scaling
function initializeSmoothCursor() {
    const el = document.getElementById('smooth-cursor');
    if (!el) return false;

    if (isMobileDevice()) {
        el.style.display = 'none';
        return false;
    }

    // Hide legacy cursor dots while smooth cursor is active
    document.body.classList.add('smooth-cursor-active');

    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');
    if (dot) dot.style.display = 'none';
    if (outline) outline.style.display = 'none';

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let scale = 1;
    let targetScale = 1;
    let lastMouseX = targetX;
    let lastMouseY = targetY;
    let lastTime = performance.now();
    // rotation in degrees
    let rot = 0;
    // smoothed velocity
    let smVx = 0, smVy = 0;
    let isUpdating = false;
    let rafId = null;

    // Tuning constants (smaller = smoother, more lag)
    const POS_LERP = 0.22;
    const ROT_LERP = 0.16;
    const SCALE_LERP = 0.22;
    const VEL_LERP = 0.22;
    const SPEED_THRESHOLD = 0.10;

    function onMouseMove(e) {
        targetX = e.clientX;
        targetY = e.clientY;
        wakeUp();
    }

    function lerpAngle(a, b, t) {
        // shortest-path interpolation around 360 wrap
        let diff = ((b - a + 540) % 360) - 180;
        return a + diff * t;
    }

    function wakeUp() {
        if (!isUpdating && !document.hidden) {
            isUpdating = true;
            lastTime = performance.now();
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(update);
        }
    }

    function update(now) {
        if (document.hidden) {
            isUpdating = false;
            rafId = null;
            return;
        }

        const dt = Math.max(1, now - lastTime); // ms
        // Lerp toward target for smooth following
        const dx = targetX - x;
        const dy = targetY - y;
        
        x += dx * POS_LERP;
        y += dy * POS_LERP;

        // Instantaneous velocity from last raw mouse position
        const vx = (targetX - lastMouseX) / dt;
        const vy = (targetY - lastMouseY) / dt;
        // Low-pass filter velocity to reduce jitter
        smVx += (vx - smVx) * VEL_LERP;
        smVy += (vy - smVy) * VEL_LERP;
        const speed = Math.hypot(smVx, smVy); // px/ms

        // Desired angle from smoothed velocity, default keep previous when almost stationary
        if (speed > 0.001) {
            const desired = Math.atan2(smVy, smVx) * 180 / Math.PI + 90;
            rot = lerpAngle(rot, desired, ROT_LERP);
        }

        // Smooth scale towards target based on speed
        targetScale = speed > SPEED_THRESHOLD ? 0.95 : 1.0;
        scale += (targetScale - scale) * SCALE_LERP;

        el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${rot}deg) scale(${scale})`;

        lastTime = now;
        lastMouseX = targetX;
        lastMouseY = targetY;

        // Check if settled (distance < 0.05px and speed is near 0 and scale is near targetScale)
        if (Math.abs(dx) < 0.05 && Math.abs(dy) < 0.05 && Math.abs(scale - targetScale) < 0.005 && speed < 0.001) {
            // Snap to final values
            x = targetX;
            y = targetY;
            scale = targetScale;
            el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${rot}deg) scale(${scale})`;
            isUpdating = false;
            rafId = null;
            return;
        }

        rafId = requestAnimationFrame(update);
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) wakeUp();
    }, { passive: true });

    wakeUp();
    return true;
}

/* ========================================================================== */
/* 3) Page Initialization */
/* ========================================================================== */

// Page initialization
function initializePage() {
    initializeParticleBackground();
    initializeThemeToggle();
    initializeRecruiterMode();
    initializeTypewriter();
    initializeSmoothCursor();
    initializeGooeyButtons();
    initializeMagneticButtons();
    initializeHeroNameWave();
    initializeIconSideReveal();
    initializeRightSidebar();
    initializeTopControlsReveal();
    initializeSectionTitlesWave();
    initializeBlogs();
    initializeCertificationsSlider();
    initializeGameHub();
    initializeCosmicClock();
    initializeCoursesExplorer();
    initializeProjectFilters();
}

// Delayed top reveal for theme toggle and header buttons
function initializeTopControlsReveal() {
    const themeToggle = byId('themeToggle');
    const topNav = document.querySelector('.top-right-nav');
    if (!themeToggle && !topNav) return;

    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
        if (themeToggle) themeToggle.classList.add('is-revealed');
        if (topNav) topNav.classList.add('is-revealed');
        return;
    }

    setTimeout(() => {
        if (themeToggle) themeToggle.classList.add('is-revealed');
        setTimeout(() => {
            if (topNav) topNav.classList.add('is-revealed');
        }, 120);
    }, 2500);
}

/* ========================================================================== */
/* 4) Global Event Wiring */
/* ========================================================================== */

// Event listeners setup
function initializeEventListeners() {
    // Contact form
    const footerContactTrigger = byId('footer-contact-trigger');
    const closeContactPopup = byId('closeContactPopup');
    const sendMessageBtn = byId('sendMessageBtn');
    const hireBtn = byId('hireMeBtn');

    addListener(footerContactTrigger, 'click', openContactForm);
    addListener(closeContactPopup, 'click', closeContactForm);
    addListener(sendMessageBtn, 'click', submitContactForm);
    addListener(hireBtn, 'click', openContactForm);

    // Privacy popup
    addListener(byId('privacy-trigger'), 'click', openPrivacyPopup);
    addListener(byId('closePrivacyPopup'), 'click', closePrivacyPopup);

    // Global event handlers
    document.addEventListener('click', handleOutsideClick);
    window.addEventListener('keydown', handleGlobalKeyDown, { passive: true });

    // About section speaker
    setupAboutSpeaker();

    // Header dropdown
    initializeHeaderDropdown();
}

function initializeHeaderDropdown() {
    // New Header Recruiter Mode button
    const recruiterBtn = byId('recruiter-trigger-btn');
    if (recruiterBtn) {
        recruiterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const enabled = !document.body.classList.contains('recruiter-mode');
            setRecruiterMode(enabled);
        });
    }

    // New Footer links
    const footerCoursesBtn = byId('footer-courses-btn');
    if (footerCoursesBtn) {
        footerCoursesBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openCoursesExplorer();
        });
    }

    const footerGamesBtn = byId('footer-games-btn');
    if (footerGamesBtn) {
        footerGamesBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openGameHub();
        });
    }

    const footerClockBtn = byId('footer-clock-btn');
    if (footerClockBtn) {
        footerClockBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openCosmicClockPopup();
        });
    }
}

/* ========================================================================== */
/* 5) Navigation & Micro-Interactions */
/* ========================================================================== */

// Gooey header nav interaction: track pointer on each .gooey element
function initializeGooeyButtons() {
    const elems = document.querySelectorAll('.gooey-btn');
    if (!elems || elems.length === 0) return;

    elems.forEach(el => {
        let rect = null;

        // ensure custom properties exist
        el.style.setProperty('--x', 50);
        el.style.setProperty('--y', 50);
        el.style.setProperty('--a', '0%');

        function moveBg(e) {
            if (!rect) rect = el.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width * 100;
            const y = (e.clientY - rect.top) / rect.height * 100;
            el.style.setProperty('--x', x);
            el.style.setProperty('--y', y);
        }

        el.addEventListener('pointermove', moveBg, { passive: true });

        el.addEventListener('pointerover', (e) => {
            rect = el.getBoundingClientRect();
            el.style.setProperty('--a', '100%');
        });

        el.addEventListener('pointerout', (e) => {
            rect = null;
            el.style.setProperty('--a', '0%');
        });

        // click navigation for buttons with data-target
        el.addEventListener('click', () => {
            const tgt = el.getAttribute('data-target');
            if (tgt) {
                const dest = document.querySelector(tgt);
                if (dest) dest.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // intro animation for first button (matches provided example)
    const first = elems[0];
    if (first) {
        let i = 4;
        let rafId = null;
        first.style.setProperty('--a', '100%');

        function anim() {
            first.style.setProperty('--x', ((Math.cos(i) + 2) / 3.6) * 100);
            first.style.setProperty('--y', ((Math.sin(i) + 2) / 3.6) * 100);
            i += 0.03;
            if (i > 11.5) {
                first.style.setProperty('--a', '0%');
                rafId = null;
            } else {
                rafId = requestAnimationFrame(anim);
            }
        }
        rafId = requestAnimationFrame(anim);

        first.addEventListener('pointerover', () => {
            if (rafId) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
        });
    }
}

// Magnetic micro-interaction: slightly attract elements toward the cursor
function initializeMagneticButtons() {
    // selectors to target for magnetic attraction
    const selectors = [
        '.nav-container .gooey-btn',
        '#hireMeBtn',
        '#themeToggle',
        '#sendMessageBtn',
        '.contact-form .gooey-btn',
        '.main-footer .gooey-btn',
        '.footer-nav .gooey-btn'
    ];

    const elems = document.querySelectorAll(selectors.join(','));
    if (!elems || elems.length === 0) return;

    elems.forEach(el => {
        let raf = null;
        let tx = 0, ty = 0;
        let targetTx = 0, targetTy = 0;
        let rect = null;

        // Default magnetic params (applies to buttons and most targets)
        const DEFAULT_MAX = 60;
        const DEFAULT_STRENGTH = 2;
        const DEFAULT_LERP = 0.32;
        const DEFAULT_SCALE_DIV = 100;

        // per-element params (start with defaults)
        let elMax = DEFAULT_MAX;
        let elStrength = DEFAULT_STRENGTH;
        let lerpFactor = DEFAULT_LERP;
        let scaleDiv = DEFAULT_SCALE_DIV;

        function update() {
            // lerp toward target for smooth motion (faster follow for smaller lerpFactor values)
            tx += (targetTx - tx) * lerpFactor;
            ty += (targetTy - ty) * lerpFactor;

            el.style.setProperty('--mag-x', `${tx}px`);
            el.style.setProperty('--mag-y', `${ty}px`);

            // small scale feedback based on distance
            const dist = Math.hypot(tx, ty);
            const scale = 1 + Math.min(0.22, dist / scaleDiv);
            // if element supports --mag-scale (theme-toggle, hire-me), set it
            if (getComputedStyle(el).getPropertyValue('--mag-scale') !== '') {
                el.style.setProperty('--mag-scale', scale);
            }

            if (Math.abs(targetTx - tx) > 0.1 || Math.abs(targetTy - ty) > 0.1) {
                raf = requestAnimationFrame(update);
            } else {
                raf = null;
            }
        }

        function onPointerMove(e) {
            if (!rect) rect = el.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = e.clientX - cx;
            const dy = e.clientY - cy;

            // compute target translation (attraction toward cursor) using per-element strength
            let nx = dx / elStrength;
            let ny = dy / elStrength;
            // clamp using per-element max
            if (nx > elMax) nx = elMax; if (nx < -elMax) nx = -elMax;
            if (ny > elMax) ny = elMax; if (ny < -elMax) ny = -elMax;

            targetTx = nx;
            targetTy = ny;

            if (!raf) raf = requestAnimationFrame(update);
        }

        function onPointerEnter() {
            el.style.willChange = 'transform';
            rect = el.getBoundingClientRect();
            // start listening for pointermove on this element
            el.addEventListener('pointermove', onPointerMove, { passive: true });
        }

        function onPointerLeave() {
            // clear target so element returns to origin
            targetTx = 0; targetTy = 0;
            rect = null;
            el.removeEventListener('pointermove', onPointerMove);
            if (!raf) {
                el.style.setProperty('--mag-x', `0px`);
                el.style.setProperty('--mag-y', `0px`);
                if (getComputedStyle(el).getPropertyValue('--mag-scale') !== '') {
                    el.style.setProperty('--mag-scale', 1);
                }
            }
        }

        el.addEventListener('pointerenter', onPointerEnter, { passive: true });
        el.addEventListener('pointerleave', onPointerLeave, { passive: true });
        window.addEventListener('resize', () => { rect = null; }, { passive: true });
    });
}

/* ========================================================================== */
/* 6) Text Effects */
/* ========================================================================== */

// Wave hover effect for hero name
function initializeHeroNameWave() {
    const container = document.querySelector('.hero-name');
    if (!container) return;

    // Build a safe snapshot of current nodes to preserve accent coloring
    const segments = [];
    container.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            if (node.nodeValue) segments.push({ text: node.nodeValue, accent: false });
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node;
            const isAccent = el.classList.contains('accent-color');
            segments.push({ text: el.textContent || '', accent: isAccent });
        }
    });

    // Replace content with per-letter spans
    const frag = document.createDocumentFragment();
    let index = 0;
    segments.forEach(seg => {
        const str = seg.text || '';
        for (const ch of str) {
            const span = document.createElement('span');
            span.className = 'wave-char';
            if (seg.accent) span.classList.add('accent-color');
            // preserve spaces
            span.textContent = ch === ' ' ? '\u00A0' : ch;
            frag.appendChild(span);
            index++;
        }
    });
    container.textContent = '';
    container.appendChild(frag);

    const letters = Array.from(container.querySelectorAll('.wave-char'));
    if (!letters.length) return;

    // Per-letter hover: only the actual hovered character lifts
    letters.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            el.classList.add('is-active');
        });
        el.addEventListener('mouseleave', () => {
            el.classList.remove('is-active');
        });
        // Touch support: brief lift on tap
        el.addEventListener('touchstart', () => {
            el.classList.add('is-active');
            setTimeout(() => el.classList.remove('is-active'), 300);
        }, { passive: true });
    });
}

// Apply the same per-letter hover effect to section headings (excluding About Me)
function initializeSectionTitlesWave() {
    const headings = document.querySelectorAll('.section-title');
    if (!headings || !headings.length) return;

    headings.forEach((el) => {
        if (el.dataset.waveApplied === '1') return;

        // Snapshot original text content; most titles are plain text
        const original = el.textContent || '';
        if (!original.trim()) return;

        const frag = document.createDocumentFragment();
        for (const ch of original) {
            const span = document.createElement('span');
            span.className = 'wave-char';
            // Preserve normal spaces as nbsp to maintain visual gaps inside inline-flex
            span.textContent = (ch === ' ') ? '\u00A0' : ch;
            frag.appendChild(span);
        }

        el.textContent = '';
        el.appendChild(frag);
        el.classList.add('text-wave');
        el.dataset.waveApplied = '1';

        // Touch support: quick tap lift for individual chars
        const letters = el.querySelectorAll('.wave-char');
        letters.forEach((letter) => {
            letter.addEventListener('touchstart', () => {
                letter.classList.add('is-active');
                setTimeout(() => letter.classList.remove('is-active'), 280);
            }, { passive: true });
        });
    });
}

// Delayed side reveal + fade-in for social icons
function initializeIconSideReveal() {
    const social = document.querySelector('.social-links');
    if (!social) return;

    const socialIcons = Array.from(social.querySelectorAll('.social-icon'));
    const revealIconsSequentially = () => {
        socialIcons.forEach((icon, index) => {
            setTimeout(() => {
                icon.classList.add('is-revealed');
            }, index * 90);
        });
    };

    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const reveal = () => {
        if (social) social.classList.add('is-revealed');
        revealIconsSequentially();
    };

    if (prefersReduced) {
        // Respect reduced motion: still delay visibility but skip animated transition
        setTimeout(() => {
            if (social) {
                social.style.transition = 'none';
                social.classList.add('is-revealed');
            }
            socialIcons.forEach((icon) => icon.classList.add('is-revealed'));
            // allow layout to apply then clear inline transition to not affect future responsive changes
            requestAnimationFrame(() => {
                if (social) social.style.transition = '';
            });
        }, 2500);
    } else {
        setTimeout(reveal, 2500);
    }
}

// Delayed reveal and interaction wiring for right quick sidebar
function initializeRightSidebar() {
    const sidebar = document.querySelector('.right-sidebar');
    if (!sidebar) return;
}



/* ========================================================================== */
/* 7) Recruiter Mode */
/* ========================================================================== */

function initializeRecruiterMode() {
    const panel = byId('recruiterModePanel');
    if (!panel) return;

    initializeRecruiterDashboardNav(panel);

    const closeBtn = byId('recruiterCloseBtn');
    if (closeBtn) {
        addListener(closeBtn, 'click', () => setRecruiterMode(false));
    }

    let saved = null;
    try {
        saved = localStorage.getItem('recruiterMode');
    } catch (_) {
        saved = null;
    }

    setRecruiterMode(saved === 'true');
}

function initializeRecruiterDashboardNav(panel) {
    const navItems = panel.querySelectorAll('.rec-nav-item[data-rec-nav]');
    const views = panel.querySelectorAll('.rec-view[data-rec-view]');
    if (!navItems.length || !views.length) return;

    navItems.forEach(item => {
        addListener(item, 'click', () => {
            const target = item.getAttribute('data-rec-nav');
            navItems.forEach(n => n.classList.remove('is-active'));
            item.classList.add('is-active');
            views.forEach(v => {
                v.classList.remove('is-active');
                if (v.getAttribute('data-rec-view') === target) {
                    v.classList.add('is-active');
                    animateRecruiterView(panel, v);
                }
            });
        });
    });
}

function setRecruiterMode(enabled) {
    const panel = byId('recruiterModePanel');
    const sidebarRecruiterItem = document.querySelector('.right-sidebar [data-action="recruiter"]');
    document.body.classList.toggle('recruiter-mode', enabled);

    if (sidebarRecruiterItem) {
        sidebarRecruiterItem.classList.toggle('is-active', enabled);
        sidebarRecruiterItem.setAttribute('data-label', enabled ? 'Exit Recruiter' : 'Recruiter');
        sidebarRecruiterItem.setAttribute('aria-label', enabled ? 'Exit recruiter mode' : 'Recruiter mode');
        sidebarRecruiterItem.setAttribute('title', enabled ? 'Exit Recruiter Mode' : 'Recruiter Mode');
    }

    if (panel) {
        panel.classList.remove('recruiter-animate-in');
        if (enabled) {
            panel.offsetHeight;
            panel.classList.add('recruiter-animate-in');

            // Reset to dashboard view
            const navItems = panel.querySelectorAll('.rec-nav-item[data-rec-nav]');
            const views = panel.querySelectorAll('.rec-view[data-rec-view]');
            navItems.forEach(n => n.classList.remove('is-active'));
            views.forEach(v => v.classList.remove('is-active'));
            const dashNav = panel.querySelector('[data-rec-nav="dashboard"]');
            const dashView = panel.querySelector('[data-rec-view="dashboard"]');
            if (dashNav) dashNav.classList.add('is-active');
            if (dashView) {
                dashView.classList.add('is-active');
                animateRecruiterView(panel, dashView);
            }

            if (window.scrollY > 100) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    }

    try {
        localStorage.setItem('recruiterMode', enabled ? 'true' : 'false');
    } catch (_) { }
}

function animateRecruiterView(panel, view) {
    if (!panel || !view) return;
    animateRecruiterMetrics(panel);
    animateRecruiterSkillFills(panel);
    animateRecruiterBars(view);
    animateRecruiterFunnel(view);
    animateRecruiterScoreRings(view);
    renderRecruiterCanvasCharts(view);
}

function animateRecruiterMetrics(panel) {
    const metrics = panel.querySelectorAll('.rec-view.is-active .recruiter-metric-number[data-value]');
    if (!metrics || metrics.length === 0) return;

    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const runId = String(Date.now());
    panel.dataset.metricsRunId = runId;

    metrics.forEach((metric, idx) => {
        const target = parseInt(metric.getAttribute('data-value') || '0', 10);
        const suffix = metric.getAttribute('data-suffix') || '';
        const delay = idx * 90;
        const duration = 900;

        if (!Number.isFinite(target) || target < 0) {
            metric.textContent = '0' + suffix;
            return;
        }

        if (prefersReduced) {
            metric.textContent = target + suffix;
            return;
        }

        metric.textContent = '0' + suffix;
        setTimeout(() => {
            const start = performance.now();
            const tick = (now) => {
                if (!panel || panel.dataset.metricsRunId !== runId) return;
                const progress = Math.min(1, (now - start) / duration);
                const eased = 1 - Math.pow(1 - progress, 3);
                const value = Math.round(target * eased);
                metric.textContent = value + suffix;
                if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        }, delay);
    });

    // Also animate donut center totals
    const totals = panel.querySelectorAll('.rec-view.is-active .rec-donut-total[data-value]');
    totals.forEach((el, idx) => {
        const target = parseInt(el.getAttribute('data-value') || '0', 10);
        if (!Number.isFinite(target) || target < 0) return;
        if (prefersReduced) { el.textContent = target; return; }
        el.textContent = '0';
        setTimeout(() => {
            const start = performance.now();
            const tick = (now) => {
                if (panel.dataset.metricsRunId !== runId) return;
                const progress = Math.min(1, (now - start) / 900);
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.round(target * eased);
                if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        }, 200 + idx * 100);
    });
}

function animateRecruiterSkillFills(panel) {
    const fills = panel.querySelectorAll('.rec-view.is-active .recruiter-skill-fill[data-level]');
    if (!fills || fills.length === 0) return;

    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const runId = String(Date.now());
    panel.dataset.skillsRunId = runId;

    fills.forEach((fill, idx) => {
        const level = Math.max(0, Math.min(100, parseInt(fill.getAttribute('data-level') || '0', 10)));
        fill.style.width = '0%';
        const delay = prefersReduced ? 0 : 180 + (idx * 90);
        setTimeout(() => {
            if (!panel || panel.dataset.skillsRunId !== runId) return;
            fill.style.width = level + '%';
        }, delay);
    });
}

function animateRecruiterBars(view) {
    const bars = view.querySelectorAll('.rec-bar[data-height]');
    if (!bars.length) return;
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    bars.forEach((bar, idx) => {
        const h = Math.max(0, Math.min(100, parseInt(bar.getAttribute('data-height') || '0', 10)));
        bar.style.height = '0%';
        const delay = prefersReduced ? 0 : 200 + idx * 80;
        setTimeout(() => { bar.style.height = h + '%'; }, delay);
    });
}

function animateRecruiterFunnel(view) {
    const steps = view.querySelectorAll('.rec-funnel-step[data-width]');
    if (!steps.length) return;
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    steps.forEach((step, idx) => {
        const w = Math.max(0, Math.min(100, parseInt(step.getAttribute('data-width') || '0', 10)));
        step.style.width = '0%';
        const delay = prefersReduced ? 0 : 300 + idx * 120;
        setTimeout(() => { step.style.width = w + '%'; }, delay);
    });
}

function animateRecruiterScoreRings(view) {
    const rings = view.querySelectorAll('.rec-cand-score-ring[data-score]');
    if (!rings.length) return;
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    rings.forEach((ring, idx) => {
        const score = Math.max(0, Math.min(100, parseInt(ring.getAttribute('data-score') || '0', 10)));
        const arc = ring.querySelector('.rec-score-arc');
        if (!arc) return;
        const circumference = parseFloat(arc.getAttribute('stroke-dasharray') || '220');
        const offset = circumference - (circumference * score / 100);
        arc.style.strokeDashoffset = circumference;
        if (prefersReduced) {
            arc.style.strokeDashoffset = offset;
            return;
        }
        setTimeout(() => {
            arc.style.strokeDashoffset = offset;
        }, 400 + idx * 200);
    });
}

function renderRecruiterCanvasCharts(view) {
    // Donut Charts (Skills donut)
    view.querySelectorAll('canvas[id*="DonutChart"]').forEach(canvas => {
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.parentElement.getBoundingClientRect();
        const size = Math.min(rect.width, rect.height) || 200;
        canvas.width = size * dpr;
        canvas.height = size * dpr;
        canvas.style.width = size + 'px';
        canvas.style.height = size + 'px';
        ctx.scale(dpr, dpr);
        drawDonut(ctx, size / 2, size / 2, size * 0.38, size * 0.09, [
            { value: 5, color: '#2755d2' },
            { value: 5, color: '#14b8a6' },
            { value: 5, color: '#7c3aed' },
            { value: 4, color: '#f59e0b' },
            { value: 4, color: '#10b981' }
        ]);
    });
}

function drawDonut(ctx, cx, cy, radius, thickness, segments) {
    const total = segments.reduce((s, seg) => s + seg.value, 0);
    if (total <= 0) return;
    let startAngle = -Math.PI / 2;
    const gap = 0.04;
    segments.forEach(seg => {
        const slice = (seg.value / total) * (Math.PI * 2 - gap * segments.length);
        ctx.beginPath();
        ctx.arc(cx, cy, radius, startAngle, startAngle + slice);
        ctx.strokeStyle = seg.color;
        ctx.lineWidth = thickness;
        ctx.lineCap = 'round';
        ctx.stroke();
        startAngle += slice + gap;
    });
}
/* ========================================================================== */
/* 8) Theme Management */
/* ========================================================================== */

// Theme toggle and persistence
function initializeThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;

    const getStoredTheme = () => {
        const t = localStorage.getItem('theme');
        return (t === 'dark' || t === 'light') ? t : null;
    };

    const getSystemTheme = () => {
        try {
            return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
        } catch (_) {
            return 'light';
        }
    };

    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        if (theme === 'dark') toggle.classList.add('is-dark');
        else toggle.classList.remove('is-dark');
        toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    };

    // Initialize: use stored preference if present; otherwise follow system
    const stored = getStoredTheme();
    const initial = stored || getSystemTheme();
    applyTheme(initial);

    // Follow system changes live (when no manual preference)
    let mql = null;
    const attachSystemListenerIfNeeded = () => {
        if (mql || !window.matchMedia) return;
        mql = window.matchMedia('(prefers-color-scheme: dark)');
        const onSystemChange = (e) => {
            if (!localStorage.getItem('theme')) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        };
        try {
            if (typeof mql.addEventListener === 'function') mql.addEventListener('change', onSystemChange);
            else if (typeof mql.addListener === 'function') mql.addListener(onSystemChange);
        } catch (_) { }
    };
    if (!stored) attachSystemListenerIfNeeded();

    let longPressTriggered = false;

    toggle.addEventListener('click', () => {
        if (longPressTriggered) {
            longPressTriggered = false;
            return;
        }
        const current = document.documentElement.getAttribute('data-theme') || getSystemTheme();
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        // Persist manual choice; this opt-out stops auto-following system
        try { localStorage.setItem('theme', next); } catch (e) { }
    });

    // Context menu (right-click) and long-press to open theme menu
    const menu = document.getElementById('themeMenu');
    const resetBtn = document.getElementById('resetSystemTheme');
    if (menu && resetBtn) {
        function positionMenu() {
            const r = toggle.getBoundingClientRect();
            const top = r.bottom + 8;
            const left = r.left;
            menu.style.top = `${Math.round(top)}px`;
            menu.style.left = `${Math.round(left)}px`;
        }

        function showMenu(e) {
            e && e.preventDefault && e.preventDefault();
            positionMenu();
            menu.classList.add('show');
            menu.setAttribute('aria-hidden', 'false');
            document.addEventListener('click', outsideClose, { once: true });
            document.addEventListener('keydown', escClose, { once: true });
        }
        function hideMenu() {
            menu.classList.remove('show');
            menu.setAttribute('aria-hidden', 'true');
        }
        function outsideClose(ev) {
            if (!menu.contains(ev.target) && ev.target !== toggle) hideMenu();
        }
        function escClose(ev) {
            if (ev.key === 'Escape') hideMenu();
        }

        // Right-click support
        toggle.addEventListener('contextmenu', showMenu);

        // Long-press for touch devices
        let pressTimer = null;
        const startPress = () => {
            clearTimeout(pressTimer);
            pressTimer = setTimeout(() => {
                longPressTriggered = true;
                showMenu();
            }, 600);
        };
        const endPress = () => { clearTimeout(pressTimer); };
        toggle.addEventListener('pointerdown', startPress);
        toggle.addEventListener('pointerup', endPress);
        toggle.addEventListener('pointerleave', endPress);

        resetBtn.addEventListener('click', () => {
            try { localStorage.removeItem('theme'); } catch (_) { }
            applyTheme(getSystemTheme());
            attachSystemListenerIfNeeded();
            hideMenu();
        });
    }
}

/* ========================================================================== */
/* 8) Typewriter */
/* ========================================================================== */

// Typewriter effect
function initializeTypewriter() {
    const TxtRotate = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.isDeleting = false;
        this.tick();
    };

    TxtRotate.prototype.tick = function () {
        const i = this.loopNum % this.toRotate.length;
        const fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        const that = this;
        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) delta /= 2;
        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 100;
        }

        setTimeout(() => that.tick(), delta);
    };

    // Initialize typewriter elements
    const elements = document.getElementsByClassName('typewriter-text');
    for (let i = 0; i < elements.length; i++) {
        const toRotate = elements[i].getAttribute('data-rotate');
        const period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }

    // Add cursor style
    const css = document.createElement("style");
    css.innerHTML = ".typewriter-text > .wrap { border-right: 0em solid #666; }";
    document.body.appendChild(css);
}

/* ========================================================================== */
/* 9) Contact Form */
/* ========================================================================== */

// Contact form functions
function openContactForm() {
    const popup = byId('contactPopup');
    const form = document.querySelector('.contact-form');
    if (!popup || !form) return;

    document.body.classList.add('freeze-scroll');
    popup.style.display = 'flex';
    void form.offsetWidth;
    form.classList.add('show');
    // Focus the first field for quicker input
    setTimeout(() => {
        const nameInput = byId('contactName');
        if (nameInput) try { nameInput.focus(); } catch (_) { }
        // Clear any prior error
        const err = byId('contactError');
        if (err) { err.textContent = ''; err.classList.remove('show'); }
        // Reset invalid markers
        ['contactName', 'contactEmail', 'contactMessage'].forEach(id => {
            const el = byId(id);
            if (el) el.removeAttribute('aria-invalid');
        });
    }, 120);
}

function closeContactForm() {
    const popup = byId('contactPopup');
    const form = document.querySelector('.contact-form');
    if (!popup || !form) return;

    form.classList.remove('show');
    setTimeout(() => {
        popup.style.display = 'none';
        document.body.classList.remove('freeze-scroll');
        const err = byId('contactError');
        if (err) { err.textContent = ''; err.classList.remove('show'); }
    }, 400);
}

function submitContactForm() {
    const nameInput = byId('contactName');
    const emailInput = byId('contactEmail');
    const messageInput = byId('contactMessage');
    if (!nameInput || !emailInput || !messageInput) return;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    const hpField = byId('hpField');
    const hp = (hpField && hpField.value.trim()) || '';
    const sendBtn = byId('sendMessageBtn');
    const err = byId('contactError');
    if (!sendBtn) return;
    if (err) { err.textContent = ''; err.classList.remove('show'); }

    // Honeypot check: if filled, silently accept and do not send
    if (hp) {
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
        showToast("Thanks! I'll get back to you soon.");
        setTimeout(closeContactForm, 600);
        return;
    }

    if (!name || !email || !message) {
        if (err) { err.textContent = 'Please fill in all fields.'; err.classList.add('show'); }
        // Mark empties as invalid
        if (!name) nameInput.setAttribute('aria-invalid', 'true');
        if (!email) emailInput.setAttribute('aria-invalid', 'true');
        if (!message) messageInput.setAttribute('aria-invalid', 'true');
        return;
    }

    // Validate email format using built-in validity (type="email") and a simple pattern fallback
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValidEmail = (emailInput.checkValidity && emailInput.checkValidity()) || emailPattern.test(email);
    if (!isValidEmail) {
        if (err) { err.textContent = 'Please enter a valid email address.'; err.classList.add('show'); }
        try { emailInput.focus(); } catch (_) { }
        emailInput.setAttribute('aria-invalid', 'true');
        return;
    } else {
        emailInput.removeAttribute('aria-invalid');
    }

    sendBtn.disabled = true;
    sendBtn.textContent = "Sending";

    const formData = {
        access_key: "58d451cd-5724-4305-8381-61e99bc9dff1",
        name: name,
        email: email,
        message: message,
        subject: "New Portfolio Message from " + name
    };

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(async (response) => {
        const json = await response.json();
        if (response.status === 200) {
            sendBtn.textContent = "Sent ✓";
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';
            showToast("Message sent! I'll reply shortly.");

            setTimeout(() => {
                closeContactForm();
                sendBtn.disabled = false;
                sendBtn.textContent = "Send";
            }, 1000);
        } else {
            throw new Error(json.message || "Something went wrong.");
        }
    })
    .catch((error) => {
        console.error("Email sending failed:", error);
        sendBtn.disabled = false;
        sendBtn.textContent = "Send";
        if (err) { err.textContent = 'Failed to send message. Please try again.'; err.classList.add('show'); }
    });
}

/* ========================================================================== */
/* 10) Toast */
/* ========================================================================== */

// Simple toast helper
let toastTimer = null;
function showToast(msg, duration = 2000) {
    const el = byId('toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        el.classList.remove('show');
    }, duration);
}

/* ========================================================================== */
/* 11) About Text-to-Speech */
/* ========================================================================== */

// Text-to-Speech: About description
function setupAboutSpeaker() {
    const btn = byId('aboutSpeakBtn');
    if (!btn) return;

    const supported = ('speechSynthesis' in window) && (typeof window.SpeechSynthesisUtterance !== 'undefined');
    if (!supported) {
        // Hide the control if TTS isn't supported
        btn.style.display = 'none';
        return;
    }

    // Preload voices if needed
    try {
        window.speechSynthesis.getVoices();
        if (typeof window.speechSynthesis.onvoiceschanged !== 'undefined') {
            // No-op handler to ensure voices are loaded on some browsers
            window.speechSynthesis.onvoiceschanged = () => { };
        }
    } catch (_) { }

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleSpeakAbout();
    });
}

function selectPreferredVoice() {
    const synth = window.speechSynthesis;
    const voices = (synth && typeof synth.getVoices === 'function') ? synth.getVoices() : [];
    if (!voices || voices.length === 0) return null;

    const by = (pred) => voices.find(pred);
    const has = (v, ...subs) => v && v.name && subs.every(s => v.name.toLowerCase().includes(s));

    // Priority: Google female English -> Google en-US -> Google English -> any Female en-US -> Microsoft Zira -> en-US -> any English
    return (
        by(v => has(v, 'google', 'female') && v.lang && v.lang.toLowerCase().startsWith('en')) ||
        by(v => has(v, 'google') && v.lang && v.lang.toLowerCase() === 'en-us') ||
        by(v => has(v, 'google') && v.lang && v.lang.toLowerCase().startsWith('en')) ||
        by(v => (has(v, 'female') || has(v, 'zira')) && v.lang && v.lang.toLowerCase() === 'en-us') ||
        by(v => has(v, 'zira')) ||
        by(v => v.lang && v.lang.toLowerCase() === 'en-us') ||
        by(v => v.lang && v.lang.toLowerCase().startsWith('en')) ||
        null
    );
}

function toggleSpeakAbout() {
    const btn = byId('aboutSpeakBtn');
    const desc = byId('aboutDescription');
    if (!btn || !desc) return;

    const synth = window.speechSynthesis;

    // If already speaking, cancel current speech
    if (synth.speaking) {
        try { synth.cancel(); } catch (_) { }
        btn.classList.remove('speaking');
        btn.setAttribute('aria-pressed', 'false');
        btn.setAttribute('aria-label', 'Speak description');
        return;
    }

    const text = (desc.getAttribute('data-fulltext') || desc.innerText || desc.textContent || '').trim();
    if (!text) return;

    const utter = new SpeechSynthesisUtterance(text);
    // Prefer a Google female English voice when available
    const preferred = selectPreferredVoice();
    if (preferred) {
        utter.voice = preferred;
        if (preferred.lang) utter.lang = preferred.lang;
    } else {
        utter.lang = 'en-US';
    }
    utter.rate = 1;
    utter.pitch = 1;

    utter.onend = () => {
        btn.classList.remove('speaking');
        btn.setAttribute('aria-pressed', 'false');
        btn.setAttribute('aria-label', 'Speak description');
    };
    utter.onerror = () => {
        btn.classList.remove('speaking');
        btn.setAttribute('aria-pressed', 'false');
        btn.setAttribute('aria-label', 'Speak description');
    };

    btn.classList.add('speaking');
    btn.setAttribute('aria-pressed', 'true');
    btn.setAttribute('aria-label', 'Stop speaking');

    try { synth.speak(utter); } catch (_) {
        btn.classList.remove('speaking');
        btn.setAttribute('aria-pressed', 'false');
        btn.setAttribute('aria-label', 'Speak description');
    }
}

/* ========================================================================== */
/* 12) Privacy Popup */
/* ========================================================================== */

// Privacy popup functions
function openPrivacyPopup(event) {
    event.preventDefault();
    const popup = byId('privacyPopup');
    if (popup) popup.style.display = 'flex';
}

function closePrivacyPopup() {
    const popup = byId('privacyPopup');
    if (popup) popup.style.display = 'none';
}

/* ========================================================================== */
/* 13) Blog Data */
/* ========================================================================== */

// Blog data and functions

const legacyBlogData = [];
const legacyBlogExtra = [];


/* ========================================================================== */
/* 14) Blog UI, Share & Popup */
/* ========================================================================== */

function initializeBlogs() {
    const wheel = byId('blogWheel');
    const track = byId('blogWheelTrack');
    const activeTitle = byId('blogActiveTitle');
    const readerPanel = document.querySelector('.blog-reader-panel');
    const readerTitle = byId('blogReaderTitle');
    const readerMeta = byId('blogReaderMeta');
    const readerContent = byId('blogReaderContent');

    if (!wheel || !track || !activeTitle || !readerPanel || !readerTitle || !readerMeta || !readerContent) return;
    if (!Array.isArray(blogData) || blogData.length === 0) return;

    const toPlainText = (html) => {
        const div = document.createElement('div');
        div.innerHTML = html || '';
        return (div.innerText || div.textContent || '').trim();
    };

    const estimateReadingTime = (html) => {
        const words = toPlainText(html).split(/\s+/).filter(Boolean).length;
        const minutes = Math.max(3, Math.round(words / 220));
        return `${minutes} min read`;
    };

    const getBlogIconSvg = (_title = '', index = 0) => {
        const svg = (path, viewBox = '0 0 24 24') =>
            `<svg viewBox="${viewBox}" width="30" height="30" fill="currentColor" aria-hidden="true"><path d="${path}"/></svg>`;

        // 30 unique, topic-aligned icons (one per blog, no duplicates)
        const iconPaths = [
            // 0: Generative AI Shift (Double sparkle / magic)
            'M9 4L10.5 7.5L14 9L10.5 10.5L9 14L7.5 10.5L4 9L7.5 7.5L9 4ZM17 12L18 14.5L20.5 15.5L18 16.5L17 19L16 16.5L13.5 15.5L16 14.5L17 12Z',
            // 1: Edge AI Growth (Mobile NPU)
            'M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-5-6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z',
            // 2: Quantum Advantage Near (Quantum Orbit Atom)
            'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 15c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z',
            // 3: Data Engineering Era (Data Lakehouse Stack)
            'M12 2C6.5 2 2 3.8 2 6v12c0 2.2 4.5 4 10 4s10-1.8 10-4V6c0-2.2-4.5-4-10-4zm0 2c4.4 0 8 1.3 8 2s-3.6 2-8 2-8-1.3-8-2 3.6-2 8-2zm0 14c-4.4 0-8-1.3-8-2v-3c1.5 1 4.5 1.5 8 1.5s6.5-.5 8-1.5v3c0 .7-3.6 2-8 2zm0-5c-4.4 0-8-1.3-8-2v-3c1.5 1 4.5 1.5 8 1.5s6.5-.5 8-1.5v3c0 .7-3.6 2-8 2z',
            // 4: MLOps Standardization (DevOps loop)
            'M18.5 6C16.8 6 15.2 6.8 14 8.2c-1.2-1.4-2.8-2.2-4.5-2.2C5.9 6 3 8.9 3 12.5S5.9 19 9.5 19c1.7 0 3.3-.8 4.5-2.2c1.2 1.4 2.8 2.2 4.5 2.2c3.6 0 6.5-2.9 6.5-6.5S22.1 6 18.5 6zm-9 11c-2.5 0-4.5-2-4.5-4.5S7 8 9.5 8c1.6 0 3 1.1 4 2.8c-1 1.7-2.4 2.8-4 2.8c-.8 0-1.5-.7-1.5-1.5S8.7 10.5 9.5 10.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5c1.4 0 2.6-.9 3.4-2.2c.4.6.8 1.2 1.3 1.7c-1.1 1.9-2.7 3-4.7 3zm9 0c-2 0-3.6-1.1-4.7-3c.5-.5.9-1.1 1.3-1.7c.8 1.3 2 2.2 3.4 2.2c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5c.3 0 .5.2.5.5s-.2.5-.5.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5z',
            // 5: Responsible AI Rules (Shield with core)
            'M12 2L3 6v6c0 5.55 3.8 10.74 9 12 5.2-1.26 9-6.45 9-12V6l-9-4zm0 10.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
            // 6: Cloud Native AI (Cloud Downward processor)
            'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM12 17l-4-4h2.5V9h3v4H16l-4 4z',
            // 7: Computer Vision Retail (Modern eye)
            'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
            // 8: AI in Healthcare (Medical cross in heart)
            'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6.02 6.02 0 0 1 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35zm-1.5-12.85h3v3h3v3h-3v3h-3v-3h-3v-3h3v-3z',
            // 9: Future of Work (Briefcase check)
            'M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM10 4h4v2h-4V4zm10 15H4V8h16v11zm-5-5l-2.5 2.5L10 14l-1.5 1.5 4 4 5-5z',
            // 10: Federated Learning Rise (Network cluster)
            'M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-8 12a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm16 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM11.5 7.5L5 13.5l1.3 1.4 6.5-6-1.3-1.4zm1.2 0l1.3 1.4 6.5 6 1.3-1.4-6.5-6z',
            // 11: AutoML Expansion (Auto gear and inner core)
            'M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z',
            // 12: Vector Databases Boom (Isometric 3D cube)
            'M12 2.06l-9 5.2v10.4l9 5.2 9-5.2V7.26l-9-5.2zM12 4.3l7 4.04-7 4.04-7-4.04 7-4.04zM5 9.77l6 3.46v6.93l-6-3.46V9.77zm14 0v6.93l-6 3.46v-6.93l6-3.46z',
            // 13: TinyML Devices (Silicon Chip / Microcontroller)
            'M19 9h2V7h-2V5c0-1.1-.9-2-2-2h-2V1h-2v2h-2V1H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9zm-4 6H9V9h6v6z',
            // 14: Reinforcement Learning Robotics (Robot face)
            'M19 8h-1.18c-.48-1.78-2.09-3-3.96-3H10.14c-1.87 0-3.48 1.22-3.96 3H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zM12 18c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6-6h-2v2h2v-2zm-10 0H6v2h2v-2z',
            // 15: Data Privacy Computing (Encrypted lock)
            'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z',
            // 16: Multimodal Models (Multimodal stack layers)
            'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
            // 17: Serverless Data Pipelines (Cloud lightning function)
            'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM11 18v-4H8l5-7v4h3l-5 7z',
            // 18: Explainable AI Demand (Search magnifying glass)
            'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5 11.99 14 9.5 14z',
            // 19: Sustainable Computing (Leaf shape)
            'M17 8C13 8 10 10.5 8 14c-.8-2-2-3.8-3.5-5.2C3 7.3 3.3 4 5 3c2.7-1.6 6.3-.5 8.5 2.2c.8-1 2-2 3.5-2.2c2.2-.3 4.2 1.3 4 3.5c-.2 1.8-1.5 3.3-3 3.5zM12 22s-2-5-2-7h4c0 2-2 7-2 7z',
            // 20: Synthetic Data Era (Double helix)
            'M8.2 3.2c.4 0 .7.3.7.7v1.1c2 .5 3.6 1.8 4.3 3.6h2.2c.4 0 .7.3.7.7s-.3.7-.7.7h-1.8c.2.6.3 1.3.3 2s-.1 1.4-.3 2h1.8c.4 0 .7.3.7.7s-.3.7-.7.7h-2.2c-.7 1.8-2.3 3.1-4.3 3.6V20c0 .4-.3.7-.7.7s-.7-.3-.7-.7v-1.1c-2-.5-3.6-1.8-4.3-3.6H1.5c-.4 0-.7-.3-.7-.7s.3-.7.7-.7h1.8c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2H1.5c-.4 0-.7-.3-.7-.7s.3-.7.7-.7h2.2c.7-1.8 2.3-3.1 4.3-3.6V4c0-.4.3-.7.7-.7zm3.1 6.3c-.6-.7-1.5-1.1-2.5-1.1S6.9 8.8 6.3 9.5c-.3.4-.3 1 0 1.4c.6.7 1.5 1.1 2.5 1.1s1.9-.4 2.5-1.1c.3-.4.3-1 0-1.4z',
            // 21: AI Powered Search (Search with internal star/sparkle)
            'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5c0-3.59-2.91-6.5-6.5-6.5S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-7l1 2h2l-1.5 1.2.7 2.3-2.2-1.5-2.2 1.5.7-2.3L5.5 8.5h2l1-2z',
            // 22: Graph Machine Learning (Interconnected node network)
            'M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-8 12a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm16 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM11.5 7.5L5 13.5l1.3 1.4 6.5-6-1.3-1.4zm1.2 0l1.3 1.4 6.5 6 1.3-1.4-6.5-6z',
            // 23: AI Code Assistants (Code brackets </>)
            'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4zM11.4 19.4l4-14.8-1.9-.5-4 14.8 1.9.5z',
            // 24: Hybrid Cloud Strategy (Cloud with core keyhole)
            'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM12 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4z',
            // 25: Time Series Forecasting (Growth chart columns)
            'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z',
            // 26: AI Security Defense (Shield with checkmark)
            'M12 2L3 6v6c0 5.55 3.8 10.74 9 12 5.2-1.26 9-6.45 9-12V6l-9-4zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z',
            // 27: Quantum Machine Learning (Orbital spheres / globe)
            'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z',
            // 28: Feature Store Adoption (Folder storage shelf)
            'M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2zm2 10h-2v-2h2v2zm0-4h-2V8h2v2zm4 4h-2v-2h2v2zm0-4h-2V8h2v2z',
            // 29: Human AI Collaboration (Cooperative circle plus)
            'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v4H7v2h4v4h2v-4h4v-2h-4V7z'
        ];

        return svg(iconPaths[index] || iconPaths[0]);
    };

    const makeEntry = (entry, index) => {
        const mergedHtml = `${entry.content || ''}${blogExtra[index] || ''}`;
        return {
            id: `blog-${index + 1}`,
            title: entry.title || 'Technical Insight',
            icon: String(index + 1).padStart(2, '0'),
            category: 'Technical Insight',
            readingTime: estimateReadingTime(mergedHtml),
            html: mergedHtml
        };
    };

    const entries = blogData.map(makeEntry);
    const total = entries.length;
    const step = (Math.PI * 2) / total;

    let rotation = Math.PI / 2;
    let velocity = 0;
    let dragging = false;
    let lastY = 0;
    let activeIndex = -1;
    let updateTimer = null;

    const buttons = entries.map((entry, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'blog-wheel-icon';
        button.setAttribute('role', 'option');
        button.setAttribute('aria-label', entry.title);
        button.setAttribute('title', entry.title);
        button.innerHTML = getBlogIconSvg(entry.title, index);
        button.addEventListener('click', () => {
            const target = Math.PI / 2 - index * step;
            const diff = Math.atan2(Math.sin(target - rotation), Math.cos(target - rotation));
            velocity += diff * 0.12;
            setActive(index);
        });
        track.appendChild(button);
        return button;
    });

    function buildArticle(entry) {
        return `<div>${entry.html}</div>`;
    }

    function setActive(index) {
        if (index < 0 || index >= total || index === activeIndex) return;
        activeIndex = index;
        const entry = entries[index];

        activeTitle.textContent = entry.title;
        buttons.forEach((button, i) => {
            const isActive = i === index;
            button.classList.toggle('is-active', isActive);
            button.setAttribute('aria-current', isActive ? 'true' : 'false');
        });

        if (updateTimer) clearTimeout(updateTimer);
        readerPanel.classList.add('is-updating');
        updateTimer = setTimeout(() => {
            readerTitle.textContent = entry.title;
            readerMeta.innerHTML = `
                <span class="blog-meta-pill">${entry.category}</span>
                <span class="blog-meta-pill">${entry.readingTime}</span>
            `;
            readerContent.innerHTML = buildArticle(entry);
            readerPanel.classList.remove('is-updating');
        }, 140);
    }

    function nearestIndex() {
        const raw = (Math.PI / 2 - rotation) / step;
        return ((Math.round(raw) % total) + total) % total;
    }

    let wheelWidth = 0;
    let wheelHeight = 0;
    function updateWheelSize() {
        const rect = wheel.getBoundingClientRect();
        wheelWidth = rect.width;
        wheelHeight = rect.height;
    }

    function layoutWheel() {
        if (wheelWidth === 0 || wheelHeight === 0) {
            updateWheelSize();
        }
        const centerX = wheelWidth * 0.5;
        const centerY = wheelHeight + 42;
        const radius = Math.min(wheelWidth * 0.5, wheelHeight * 0.72);

        buttons.forEach((button, index) => {
            const angle = index * step + rotation;
            const normalized = ((angle % (Math.PI * 2)) + (Math.PI * 2)) % (Math.PI * 2);
            const visible = normalized >= 0 && normalized <= Math.PI;
            const depth = Math.sin(normalized);

            const x = centerX + Math.cos(angle) * radius;
            const y = centerY - Math.sin(angle) * radius;
            const scale = 0.72 + depth * 0.45;
            const opacity = visible ? (0.22 + depth * 0.78) : 0;

            button.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${scale})`;
            button.style.opacity = String(opacity);
            button.style.zIndex = String(10 + Math.round(depth * 100));
            button.style.pointerEvents = visible ? 'auto' : 'none';
        });

        setActive(nearestIndex());
    }

    wheel.addEventListener('wheel', (e) => {
        e.preventDefault();
        velocity += e.deltaY * 0.00008;
    }, { passive: false });

    wheel.addEventListener('pointerdown', (e) => {
        dragging = true;
        lastY = e.clientY;
        try { wheel.setPointerCapture(e.pointerId); } catch (_) { }
    });

    wheel.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        const dy = e.clientY - lastY;
        lastY = e.clientY;
        rotation += dy * 0.01;
        velocity = dy * 0.006;
    });

    const endDrag = () => { dragging = false; };
    wheel.addEventListener('pointerup', endDrag);
    wheel.addEventListener('pointercancel', endDrag);
    wheel.addEventListener('pointerleave', endDrag);

    window.addEventListener('resize', () => {
        updateWheelSize();
        layoutWheel();
    }, { passive: true });

    function tick() {
        rotation += velocity;
        velocity *= 0.93;

        if (!dragging && Math.abs(velocity) < 0.0008) {
            const target = Math.PI / 2 - nearestIndex() * step;
            const diff = Math.atan2(Math.sin(target - rotation), Math.cos(target - rotation));
            rotation += diff * 0.14;
            if (Math.abs(diff) < 0.0002) velocity = 0;
        }

        layoutWheel();
        requestAnimationFrame(tick);
    }

    layoutWheel();
    setActive(0);
    requestAnimationFrame(tick);
}



/* ========================================================================== */
/* 15) Global Popup Controls */
/* ========================================================================== */

// Popup outside click handler
function handleOutsideClick(event) {
    // Contact form
    const contactPopup = byId('contactPopup');
    const contactForm = document.querySelector('.contact-form');
    if (contactPopup && contactForm && contactPopup.style.display === 'flex' && !contactForm.contains(event.target) &&
        !event.target.matches('#contact-trigger') && !event.target.matches('#footer-contact-trigger') &&
        !event.target.matches('#hireMeBtn') && !event.target.matches('#recruiterContactBtn')) {
        closeContactForm();
    }

    // Privacy popup
    const privacyPopup = byId('privacyPopup');
    const privacyContent = document.querySelector('.privacy-content');
    if (privacyPopup && privacyContent && privacyPopup.style.display === 'flex' && !privacyContent.contains(event.target) &&
        !event.target.matches('#privacy-trigger')) {
        closePrivacyPopup();
    }
}

/* ========================================================================== */
/* 15.5) Cosmic Clock Popup */
/* ========================================================================== */

const COSMIC_CLOCK = {
    overlay: null,
    popup: null,
    closeBtn: null,
    sidebarIcon: null,
    initialized: false,
    start: null,
    stop: null
};

function initializeCosmicClock() {
    COSMIC_CLOCK.overlay = byId('cosmicClockOverlay');
    COSMIC_CLOCK.popup = byId('cosmicClockPopup');
    COSMIC_CLOCK.closeBtn = byId('cosmicClockCloseBtn');
    COSMIC_CLOCK.sidebarIcon = document.querySelector('.right-sidebar [data-action="cosmic-clock"]');

    if (!COSMIC_CLOCK.overlay || !COSMIC_CLOCK.popup) return;
    if (COSMIC_CLOCK.initialized) return;

    const root = COSMIC_CLOCK.popup.querySelector('.cosmic-clock-root');
    const engine = createCosmicClockEngine(root, COSMIC_CLOCK.popup);
    COSMIC_CLOCK.start = engine.start;
    COSMIC_CLOCK.stop = engine.stop;

    if (COSMIC_CLOCK.closeBtn) {
        COSMIC_CLOCK.closeBtn.addEventListener('click', () => closeCosmicClockPopup());
    }

    COSMIC_CLOCK.overlay.addEventListener('click', (e) => {
        if (e.target === COSMIC_CLOCK.overlay) closeCosmicClockPopup();
    });

    COSMIC_CLOCK.initialized = true;
}

function openCosmicClockPopup() {
    initializeCosmicClock();
    if (!COSMIC_CLOCK.overlay) return;

    COSMIC_CLOCK.overlay.classList.add('show');
    COSMIC_CLOCK.overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('freeze-scroll');
    if (COSMIC_CLOCK.sidebarIcon) COSMIC_CLOCK.sidebarIcon.classList.add('is-active');
    if (typeof COSMIC_CLOCK.start === 'function') COSMIC_CLOCK.start();
}

function closeCosmicClockPopup() {
    if (!COSMIC_CLOCK.overlay) return;

    COSMIC_CLOCK.overlay.classList.remove('show');
    COSMIC_CLOCK.overlay.setAttribute('aria-hidden', 'true');
    const gamesOpen = byId('gamesOverlay') && byId('gamesOverlay').classList.contains('show');
    if (!gamesOpen) document.body.classList.remove('freeze-scroll');
    if (COSMIC_CLOCK.sidebarIcon) COSMIC_CLOCK.sidebarIcon.classList.remove('is-active');
    if (typeof COSMIC_CLOCK.stop === 'function') COSMIC_CLOCK.stop();
}

function createCosmicClockEngine(root, popup) {
    if (!root || !popup) return { start() { }, stop() { } };

    const canvas = root.querySelector('#canvas');
    const tooltip = root.querySelector('#tooltip');
    const currentTimeEl = root.querySelector('#current-time');
    const currentDateEl = root.querySelector('#current-date');
    if (!canvas || !tooltip || !currentTimeEl || !currentDateEl) {
        return { start() { }, stop() { } };
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return { start() { }, stop() { } };

    let width = canvas.width = popup.clientWidth;
    let height = canvas.height = popup.clientHeight;
    let centerX = width / 2;
    let centerY = height / 2;
    let speedMultiplier = 1;
    let running = false;
    let rafId = null;
    let lastFrameTimestamp = 0;
    let simulatedTime = new Date();

    const rings = [
        { name: 'Seconds', color: '#ef4444', divisions: 60, radius: 45, thickness: 4, labels: Array.from({ length: 60 }, (_, i) => i % 10 === 0 ? i.toString() : ''), labelInterval: 10, getValue: (d) => d.getSeconds() + d.getMilliseconds() / 1000, maxValue: 60 },
        { name: 'Minutes', color: '#f59e0b', divisions: 60, radius: 65, thickness: 5, labels: Array.from({ length: 60 }, (_, i) => i % 10 === 0 ? i.toString() : ''), labelInterval: 10, getValue: (d) => d.getMinutes() + d.getSeconds() / 60, maxValue: 60 },
        { name: 'Hours', color: '#06b6d4', divisions: 24, radius: 88, thickness: 6, labels: Array.from({ length: 24 }, (_, i) => i % 3 === 0 ? i.toString().padStart(2, '0') : ''), labelInterval: 3, getValue: (d) => d.getHours() + d.getMinutes() / 60, maxValue: 24 },
        { name: 'Day of Week', color: '#10b981', divisions: 7, radius: 115, thickness: 10, labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], labelInterval: 1, getValue: (d) => d.getDay() + d.getHours() / 24, maxValue: 7 },
        { name: 'Week', color: '#8b5cf6', divisions: 52, radius: 145, thickness: 7, labels: Array.from({ length: 52 }, (_, i) => (i + 1) % 4 === 0 ? `${i + 1}` : ''), labelInterval: 4, getValue: (d) => getWeekOfYear(d), maxValue: 52 },
        { name: 'Month', color: '#ec4899', divisions: 12, radius: 178, thickness: 12, labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], labelInterval: 1, getValue: (d) => d.getMonth() + d.getDate() / getDaysInMonth(d), maxValue: 12 },
        { name: 'Quarter', color: '#3b82f6', divisions: 4, radius: 215, thickness: 10, labels: ['Q1', 'Q2', 'Q3', 'Q4'], labelInterval: 1, getValue: (d) => Math.floor(d.getMonth() / 3) + (d.getMonth() % 3 + d.getDate() / getDaysInMonth(d)) / 3, maxValue: 4 },
        { name: 'Season', color: '#14b8a6', divisions: 4, radius: 248, thickness: 12, labels: ['Winter', 'Spring', 'Summer', 'Autumn'], labelInterval: 1, getValue: (d) => getSeasonValue(d), maxValue: 4, seasonColors: ['#64748b', '#22c55e', '#eab308', '#f97316'] },
        { name: 'Year', color: '#f97316', divisions: 12, radius: 285, thickness: 8, labels: [], labelInterval: 12, getValue: (d) => { const start = new Date(d.getFullYear(), 0, 1); const end = new Date(d.getFullYear() + 1, 0, 1); return ((d - start) / (end - start)) * 12; }, maxValue: 12, showPercentage: true }
    ];

    function handleResize() {
        width = canvas.width = popup.clientWidth;
        height = canvas.height = popup.clientHeight;
        centerX = width / 2;
        centerY = height / 2;
    }
    window.addEventListener('resize', handleResize, { passive: true });

    function getWeekOfYear(date) {
        const start = new Date(date.getFullYear(), 0, 1);
        const diff = date - start;
        const oneWeek = 604800000;
        return Math.floor(diff / oneWeek) + (date.getDay() + date.getHours() / 24) / 7;
    }

    function getDaysInMonth(date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    }

    function getSeasonValue(date) {
        const month = date.getMonth();
        const day = date.getDate();
        if ((month === 11 && day >= 21) || month === 0 || month === 1 || (month === 2 && day < 20)) {
            if (month === 11) return (day - 21) / 31 * 0.25;
            if (month === 0) return 0.25 + day / 31 * 0.25;
            if (month === 1) return 0.5 + day / 28 * 0.25;
            return 0.75 + day / 20 * 0.25;
        } else if ((month === 2 && day >= 20) || month === 3 || month === 4 || (month === 5 && day < 21)) {
            if (month === 2) return 1 + (day - 20) / 12 * 0.25;
            if (month === 3) return 1.25 + day / 30 * 0.25;
            if (month === 4) return 1.5 + day / 31 * 0.25;
            return 1.75 + day / 21 * 0.25;
        } else if ((month === 5 && day >= 21) || month === 6 || month === 7 || (month === 8 && day < 22)) {
            if (month === 5) return 2 + (day - 21) / 10 * 0.25;
            if (month === 6) return 2.25 + day / 31 * 0.25;
            if (month === 7) return 2.5 + day / 31 * 0.25;
            return 2.75 + day / 22 * 0.25;
        }
        if (month === 8) return 3 + (day - 22) / 9 * 0.25;
        if (month === 9) return 3.25 + day / 31 * 0.25;
        if (month === 10) return 3.5 + day / 30 * 0.25;
        return 3.75 + day / 21 * 0.25;
    }

    function drawRing(ring, value) {
        const { radius, thickness, divisions, color, labels, labelInterval, seasonColors, showPercentage } = ring;
        const baseRadius = Math.min(width, height) * 0.42 * (radius / 285);

        for (let i = 0; i < divisions; i++) {
            const startAngle = (i / divisions) * Math.PI * 2 - Math.PI / 2;
            const endAngle = ((i + 1) / divisions) * Math.PI * 2 - Math.PI / 2;

            let segmentColor = color;
            if (seasonColors) segmentColor = seasonColors[i];

            const segmentMidpoint = i + 0.5;
            const isBeforeCurrent = segmentMidpoint < value;
            const isCurrent = value >= i && value < i + 1;

            ctx.beginPath();
            ctx.arc(centerX, centerY, baseRadius, startAngle, endAngle);

            if (isBeforeCurrent) {
                ctx.strokeStyle = segmentColor;
            } else if (isCurrent) {
                const partialEnd = startAngle + ((value - i) / 1) * (endAngle - startAngle);
                ctx.strokeStyle = `${segmentColor}33`;
                ctx.lineWidth = thickness;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(centerX, centerY, baseRadius, startAngle, partialEnd);
                ctx.strokeStyle = segmentColor;
            } else {
                ctx.strokeStyle = `${segmentColor}22`;
            }

            ctx.lineWidth = isCurrent ? thickness * 1.1 : thickness;
            ctx.lineCap = 'butt';
            ctx.stroke();
        }

        if (labels.some((l) => l)) {
            ctx.font = `400 ${Math.max(6, thickness * 0.45)}px Inter, sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            for (let i = 0; i < divisions; i++) {
                if (i % labelInterval === 0 && labels[i]) {
                    const angle = ((i + 0.5) / divisions) * Math.PI * 2 - Math.PI / 2;
                    const labelRadius = baseRadius + thickness / 2 + 10;
                    const x = centerX + Math.cos(angle) * labelRadius;
                    const y = centerY + Math.sin(angle) * labelRadius;

                    ctx.save();
                    ctx.translate(x, y);
                    let textAngle = angle + Math.PI / 2;
                    if (angle > 0 && angle < Math.PI) textAngle += Math.PI;
                    ctx.rotate(textAngle);

                    ctx.fillStyle = value >= i && value < i + 1 ? '#fff' : 'rgba(255,255,255,0.25)';
                    ctx.fillText(labels[i], 0, 0);
                    ctx.restore();
                }
            }
        }

        const indicatorAngle = (value / ring.maxValue) * Math.PI * 2 - Math.PI / 2;
        ctx.beginPath();
        ctx.arc(
            centerX + Math.cos(indicatorAngle) * baseRadius,
            centerY + Math.sin(indicatorAngle) * baseRadius,
            thickness / 2 + 1, 0, Math.PI * 2
        );
        ctx.fillStyle = '#fff';
        ctx.fill();

        if (showPercentage) {
            const percentage = Math.round((value / ring.maxValue) * 100);
            ctx.font = '500 10px Inter, sans-serif';
            ctx.fillStyle = color;
            ctx.textAlign = 'center';
            ctx.fillText(`${percentage}%`, centerX, centerY + baseRadius + thickness + 16);
        }
    }

    function drawCenter() {
        const hubRadius = Math.min(width, height) * 0.024;

        ctx.beginPath();
        ctx.arc(centerX, centerY, hubRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#0a0a0a';
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.font = '500 11px Inter, sans-serif';
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(simulatedTime.getFullYear(), centerX, centerY);
    }

    function updateTimeDisplay() {
        currentTimeEl.textContent = simulatedTime.toLocaleTimeString('en-US', { hour12: false });
        currentDateEl.textContent = simulatedTime.toLocaleDateString('en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });
    }

    function frame(timestamp) {
        if (!running) return;
        ctx.clearRect(0, 0, width, height);

        if (!lastFrameTimestamp) lastFrameTimestamp = timestamp;
        const deltaMs = Math.max(0, Math.min(1000, timestamp - lastFrameTimestamp));
        lastFrameTimestamp = timestamp;

        ctx.fillStyle = 'rgba(255, 255, 255, 0.012)';
        for (let x = 50; x < width; x += 50) {
            for (let y = 50; y < height; y += 50) {
                ctx.beginPath();
                ctx.arc(x, y, 1, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = rings.length - 1; i >= 0; i--) {
            drawRing(rings[i], rings[i].getValue(simulatedTime));
        }
        drawCenter();

        if (speedMultiplier === 1) {
            simulatedTime = new Date();
        } else {
            simulatedTime = new Date(simulatedTime.getTime() + deltaMs * speedMultiplier);
        }

        updateTimeDisplay();
        rafId = requestAnimationFrame(frame);
    }

    root.querySelectorAll('.control-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            root.querySelectorAll('.control-btn').forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
            speedMultiplier = parseInt(btn.dataset.speed, 10);
            if (speedMultiplier === 1) simulatedTime = new Date();
        });
    });

    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rootRect = root.getBoundingClientRect();

        function placeTooltipNearCursor() {
            const offset = 12;
            const tooltipW = tooltip.offsetWidth || 240;
            const tooltipH = tooltip.offsetHeight || 100;
            const pad = 8;

            let left = (e.clientX - rootRect.left) + offset;
            let top = (e.clientY - rootRect.top) + offset;

            if (left + tooltipW > rootRect.width - pad) {
                left = (e.clientX - rootRect.left) - tooltipW - offset;
            }
            if (top + tooltipH > rootRect.height - pad) {
                top = (e.clientY - rootRect.top) - tooltipH - offset;
            }

            left = Math.max(pad, Math.min(left, rootRect.width - tooltipW - pad));
            top = Math.max(pad, Math.min(top, rootRect.height - tooltipH - pad));

            tooltip.style.left = `${left}px`;
            tooltip.style.top = `${top}px`;
        }

        const dx = x - centerX;
        const dy = y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let hoveredRing = null;
        for (const ring of rings) {
            const baseRadius = Math.min(width, height) * 0.42 * (ring.radius / 285);
            if (Math.abs(distance - baseRadius) < ring.thickness) {
                hoveredRing = ring;
                break;
            }
        }

        if (hoveredRing) {
            const angle = Math.atan2(dy, dx) + Math.PI / 2;
            const normalizedAngle = angle < 0 ? angle + Math.PI * 2 : angle;
            const segmentIndex = Math.floor((normalizedAngle / (Math.PI * 2)) * hoveredRing.divisions);
            const label = hoveredRing.fullLabels ? hoveredRing.fullLabels[segmentIndex] : hoveredRing.labels[segmentIndex];

            tooltip.style.display = 'block';
            tooltip.innerHTML = `
                    <h3>${hoveredRing.name}</h3>
                    <div class="detail">${label || `Segment ${segmentIndex + 1}`}</div>
                    <div class="detail" style="color:${hoveredRing.color}">${segmentIndex + 1} of ${hoveredRing.divisions}</div>
                `;
            placeTooltipNearCursor();
            canvas.style.cursor = 'default';
        } else {
            tooltip.style.display = 'none';
            canvas.style.cursor = 'default';
        }
    });

    canvas.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
        canvas.style.cursor = 'default';
    });

    return {
        start() {
            if (running) return;
            handleResize();
            simulatedTime = new Date();
            lastFrameTimestamp = performance.now();
            updateTimeDisplay();
            running = true;
            rafId = requestAnimationFrame(frame);
        },
        stop() {
            running = false;
            if (rafId) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
            lastFrameTimestamp = 0;
            tooltip.style.display = 'none';
            canvas.style.cursor = 'default';
        }
    };
}

const COURSES_EXPLORER = {
    overlay: null,
    modal: null,
    closeBtn: null,
    tree: null,
    stateEl: null,
    loadingEl: null,
    pdfViewer: null,
    textViewer: null,
    sidebarIcon: null,
    initialized: false,
    isOpen: false,
    manifestRoot: null,
    expanded: new Set(),
    selectedPath: null,
    lastOpenedPath: null,
    visibleRows: [],
    pathToNode: new Map()
};

function initializeCoursesExplorer() {
    COURSES_EXPLORER.overlay = byId('coursesOverlay');
    COURSES_EXPLORER.modal = byId('coursesModal');
    COURSES_EXPLORER.closeBtn = byId('coursesCloseBtn');
    COURSES_EXPLORER.tree = byId('coursesTree');
    COURSES_EXPLORER.stateEl = byId('coursesViewerState');
    COURSES_EXPLORER.loadingEl = byId('coursesViewerLoading');
    COURSES_EXPLORER.pdfViewer = byId('coursesPdfViewer');
    COURSES_EXPLORER.textViewer = byId('coursesTextViewer');
    COURSES_EXPLORER.sidebarIcon = document.querySelector('.right-sidebar [data-action="courses"]');

    if (!COURSES_EXPLORER.overlay || !COURSES_EXPLORER.tree || !COURSES_EXPLORER.pdfViewer || !COURSES_EXPLORER.textViewer) return;
    if (COURSES_EXPLORER.initialized) return;

    if (COURSES_EXPLORER.closeBtn) {
        COURSES_EXPLORER.closeBtn.addEventListener('click', () => closeCoursesExplorer());
    }

    COURSES_EXPLORER.overlay.addEventListener('click', (event) => {
        if (event.target === COURSES_EXPLORER.overlay) closeCoursesExplorer();
    });

    COURSES_EXPLORER.tree.addEventListener('click', (event) => {
        const row = event.target.closest('.courses-tree-node');
        if (!row) return;
        const path = row.getAttribute('data-path');
        const node = COURSES_EXPLORER.pathToNode.get(path);
        if (!node) return;

        if (node.type === 'folder') {
            toggleCoursesFolder(node.path);
            return;
        }
        openCoursesFile(node);
    });

    COURSES_EXPLORER.tree.addEventListener('keydown', (event) => handleCoursesTreeKeydown(event));
    COURSES_EXPLORER.initialized = true;
}

async function openCoursesExplorer() {
    initializeCoursesExplorer();
    if (!COURSES_EXPLORER.overlay) return;

    COURSES_EXPLORER.overlay.classList.add('show');
    COURSES_EXPLORER.overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('freeze-scroll');
    COURSES_EXPLORER.isOpen = true;
    if (COURSES_EXPLORER.sidebarIcon) COURSES_EXPLORER.sidebarIcon.classList.add('is-active');

    if (!COURSES_EXPLORER.manifestRoot) {
        setCoursesState('Loading courses explorer...');
        await loadCoursesManifest();
    }

    renderCoursesTree();
    if (COURSES_EXPLORER.lastOpenedPath) {
        const node = COURSES_EXPLORER.pathToNode.get(COURSES_EXPLORER.lastOpenedPath);
        if (node && node.type === 'file') {
            openCoursesFile(node, false);
        }
    }

    try { COURSES_EXPLORER.tree.focus(); } catch (_) { }
}

function closeCoursesExplorer() {
    if (!COURSES_EXPLORER.overlay) return;
    COURSES_EXPLORER.overlay.classList.remove('show');
    COURSES_EXPLORER.overlay.setAttribute('aria-hidden', 'true');
    COURSES_EXPLORER.isOpen = false;
    if (COURSES_EXPLORER.sidebarIcon) COURSES_EXPLORER.sidebarIcon.classList.remove('is-active');

    const gamesOpen = byId('gamesOverlay') && byId('gamesOverlay').classList.contains('show');
    const cosmicOpen = byId('cosmicClockOverlay') && byId('cosmicClockOverlay').classList.contains('show');
    if (!gamesOpen && !cosmicOpen) document.body.classList.remove('freeze-scroll');

    COURSES_EXPLORER.loadingEl.classList.remove('show');
    COURSES_EXPLORER.pdfViewer.src = 'about:blank';
    COURSES_EXPLORER.textViewer.innerHTML = '';
    showCoursesState('Select a file from Notes to open it here.');
}

async function loadCoursesManifest() {
    try {
        const response = await fetch(`Notes/notes-index.json?v=${Date.now()}`);
        if (!response.ok) throw new Error('Could not load Notes index');
        const payload = await response.json();
        COURSES_EXPLORER.manifestRoot = normalizeCoursesNode(payload.root || payload);
        if (COURSES_EXPLORER.manifestRoot && COURSES_EXPLORER.manifestRoot.path) {
            COURSES_EXPLORER.expanded.add(COURSES_EXPLORER.manifestRoot.path);
        }
        hideCoursesState();
    } catch (_) {
        setCoursesState('Unable to load Notes folder index. Please ensure Notes/notes-index.json exists.');
    }
}

function normalizeCoursesNode(node) {
    if (!node || typeof node !== 'object') return null;
    const normalized = {
        name: node.name || 'Untitled',
        type: node.type === 'folder' ? 'folder' : 'file',
        path: node.path || '',
        ext: (node.ext || '').toLowerCase(),
        children: []
    };
    if (normalized.type === 'folder') {
        if (Array.isArray(node.children)) {
            normalized.children = node.children.map(normalizeCoursesNode).filter(Boolean);
        } else if (node.children && typeof node.children === 'object') {
            const single = normalizeCoursesNode(node.children);
            normalized.children = single ? [single] : [];
        }
    }
    return normalized;
}

function renderCoursesTree() {
    const root = COURSES_EXPLORER.manifestRoot;
    if (!COURSES_EXPLORER.tree || !root) return;

    COURSES_EXPLORER.visibleRows = [];
    COURSES_EXPLORER.pathToNode.clear();

    const rows = [];
    const walk = (node, depth, parentPath = null) => {
        if (!node) return;
        COURSES_EXPLORER.pathToNode.set(node.path, node);

        const isFolder = node.type === 'folder';
        const isOpen = isFolder && COURSES_EXPLORER.expanded.has(node.path);
        COURSES_EXPLORER.visibleRows.push({ path: node.path, type: node.type, parentPath, isOpen });

        const selected = COURSES_EXPLORER.selectedPath === node.path ? ' is-selected' : '';
        const openClass = isOpen ? ' is-open' : '';
        const arrowClass = isFolder ? '' : ' is-file';
        const icon = isFolder ? '📁' : (node.ext === '.pdf' ? '📕' : (isCoursesImageExt(node.ext) ? '🖼️' : '📄'));

        rows.push(
            `<div class="courses-tree-node${selected}${openClass}" data-path="${escapeCoursesAttr(node.path)}" data-type="${node.type}" style="padding-left:${8 + depth * 16}px">` +
            `<span class="courses-tree-arrow${arrowClass}">▸</span>` +
            `<span class="courses-tree-icon">${icon}</span>` +
            `<span class="courses-tree-label">${escapeCoursesHtml(node.name)}</span>` +
            `</div>`
        );

        if (isFolder && isOpen && Array.isArray(node.children)) {
            node.children.forEach((child) => walk(child, depth + 1, node.path));
        }
    };

    walk(root, 0);
    COURSES_EXPLORER.tree.innerHTML = rows.join('');
}

function toggleCoursesFolder(path) {
    if (COURSES_EXPLORER.expanded.has(path)) {
        COURSES_EXPLORER.expanded.delete(path);
    } else {
        COURSES_EXPLORER.expanded.add(path);
    }
    COURSES_EXPLORER.selectedPath = path;
    renderCoursesTree();
}

async function openCoursesFile(node, showLoading = true) {
    if (!node || node.type !== 'file') return;
    COURSES_EXPLORER.selectedPath = node.path;
    COURSES_EXPLORER.lastOpenedPath = node.path;
    renderCoursesTree();

    const extension = (node.ext || '').toLowerCase();
    if (showLoading) showCoursesLoading();

    if (extension === '.pdf') {
        showCoursesPdf(node.path);
        return;
    }

    if (isCoursesImageExt(extension)) {
        showCoursesImage(node.path, node.name || 'Image preview');
        return;
    }

    if (extension === '.md' || extension === '.txt') {
        try {
            const response = await fetch(encodeURI(node.path));
            if (!response.ok) throw new Error('Failed to open text file');
            const raw = await response.text();
            if (extension === '.md') {
                showCoursesText(markdownToCoursesHtml(raw));
            } else {
                showCoursesText(`<pre>${escapeCoursesHtml(raw)}</pre>`);
            }
        } catch (_) {
            showCoursesState('Unable to open this text file.');
        } finally {
            hideCoursesLoading();
        }
        return;
    }

    hideCoursesLoading();
    showCoursesState('Preview is available for PDF, Markdown, text, and image files.');
}

function isCoursesImageExt(extension) {
    return ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.bmp', '.avif'].includes((extension || '').toLowerCase());
}

function showCoursesPdf(path) {
    hideCoursesState();
    COURSES_EXPLORER.textViewer.style.display = 'none';
    COURSES_EXPLORER.textViewer.innerHTML = '';
    COURSES_EXPLORER.pdfViewer.style.display = 'block';
    COURSES_EXPLORER.pdfViewer.onload = () => hideCoursesLoading();
    COURSES_EXPLORER.pdfViewer.onerror = () => {
        hideCoursesLoading();
        showCoursesState('Unable to load PDF preview.');
    };
    COURSES_EXPLORER.pdfViewer.src = `${encodeURI(path)}#toolbar=1&navpanes=1&scrollbar=1`;
}

function showCoursesText(html) {
    hideCoursesState();
    COURSES_EXPLORER.pdfViewer.style.display = 'none';
    COURSES_EXPLORER.pdfViewer.src = 'about:blank';
    COURSES_EXPLORER.textViewer.style.display = 'block';
    COURSES_EXPLORER.textViewer.innerHTML = html;
}

function showCoursesImage(path, altText) {
    hideCoursesState();
    COURSES_EXPLORER.pdfViewer.style.display = 'none';
    COURSES_EXPLORER.pdfViewer.src = 'about:blank';
    COURSES_EXPLORER.textViewer.style.display = 'block';
    COURSES_EXPLORER.textViewer.innerHTML =
        `<div class="courses-image-preview">` +
        `<img class="courses-image-preview-img" src="${encodeURI(path)}" alt="${escapeCoursesAttr(altText || 'Image preview')}" loading="lazy" />` +
        `</div>`;

    const imageEl = COURSES_EXPLORER.textViewer.querySelector('.courses-image-preview-img');
    if (!imageEl) {
        hideCoursesLoading();
        return;
    }
    imageEl.addEventListener('load', () => hideCoursesLoading(), { once: true });
    imageEl.addEventListener('error', () => {
        hideCoursesLoading();
        showCoursesState('Unable to load image preview.');
    }, { once: true });
}

function showCoursesState(message) {
    COURSES_EXPLORER.pdfViewer.style.display = 'none';
    COURSES_EXPLORER.textViewer.style.display = 'none';
    COURSES_EXPLORER.stateEl.style.display = 'flex';
    COURSES_EXPLORER.stateEl.textContent = message;
}

function setCoursesState(message) {
    showCoursesState(message);
}

function hideCoursesState() {
    COURSES_EXPLORER.stateEl.style.display = 'none';
}

function showCoursesLoading() {
    COURSES_EXPLORER.loadingEl.classList.add('show');
}

function hideCoursesLoading() {
    COURSES_EXPLORER.loadingEl.classList.remove('show');
}

function handleCoursesTreeKeydown(event) {
    if (!COURSES_EXPLORER.isOpen) return;
    if (!COURSES_EXPLORER.visibleRows.length) return;

    const currentIndex = Math.max(0, COURSES_EXPLORER.visibleRows.findIndex((row) => row.path === COURSES_EXPLORER.selectedPath));
    let nextIndex = currentIndex;

    if (event.key === 'ArrowDown') {
        event.preventDefault();
        nextIndex = Math.min(COURSES_EXPLORER.visibleRows.length - 1, currentIndex + 1);
        COURSES_EXPLORER.selectedPath = COURSES_EXPLORER.visibleRows[nextIndex].path;
        renderCoursesTree();
        ensureCoursesSelectionVisible();
        return;
    }

    if (event.key === 'ArrowUp') {
        event.preventDefault();
        nextIndex = Math.max(0, currentIndex - 1);
        COURSES_EXPLORER.selectedPath = COURSES_EXPLORER.visibleRows[nextIndex].path;
        renderCoursesTree();
        ensureCoursesSelectionVisible();
        return;
    }

    const currentRow = COURSES_EXPLORER.visibleRows[currentIndex];
    const currentNode = COURSES_EXPLORER.pathToNode.get(currentRow.path);

    if (event.key === 'ArrowRight') {
        event.preventDefault();
        if (currentNode && currentNode.type === 'folder' && !COURSES_EXPLORER.expanded.has(currentNode.path)) {
            COURSES_EXPLORER.expanded.add(currentNode.path);
            renderCoursesTree();
            ensureCoursesSelectionVisible();
        }
        return;
    }

    if (event.key === 'ArrowLeft') {
        event.preventDefault();
        if (currentNode && currentNode.type === 'folder' && COURSES_EXPLORER.expanded.has(currentNode.path)) {
            COURSES_EXPLORER.expanded.delete(currentNode.path);
            renderCoursesTree();
            ensureCoursesSelectionVisible();
            return;
        }
        if (currentRow.parentPath) {
            COURSES_EXPLORER.selectedPath = currentRow.parentPath;
            renderCoursesTree();
            ensureCoursesSelectionVisible();
        }
        return;
    }

    if (event.key === 'Enter') {
        event.preventDefault();
        if (!currentNode) return;
        if (currentNode.type === 'folder') {
            toggleCoursesFolder(currentNode.path);
            return;
        }
        openCoursesFile(currentNode);
    }
}

function ensureCoursesSelectionVisible() {
    const node = COURSES_EXPLORER.tree.querySelector('.courses-tree-node.is-selected');
    if (!node) return;
    try {
        node.scrollIntoView({ block: 'nearest' });
    } catch (_) { }
}

function escapeCoursesHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function escapeCoursesAttr(value) {
    return escapeCoursesHtml(value);
}

function markdownToCoursesHtml(markdownText) {
    const lines = String(markdownText || '').replace(/\r/g, '').split('\n');
    const html = [];
    let inList = false;

    const inline = (text) => {
        let out = escapeCoursesHtml(text);
        out = out.replace(/`([^`]+)`/g, '<code>$1</code>');
        out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        out = out.replace(/\*([^*]+)\*/g, '<em>$1</em>');
        out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
        return out;
    };

    lines.forEach((line) => {
        const trimmed = line.trim();
        if (!trimmed) {
            if (inList) {
                html.push('</ul>');
                inList = false;
            }
            return;
        }

        if (/^###\s+/.test(trimmed)) {
            if (inList) {
                html.push('</ul>');
                inList = false;
            }
            html.push(`<h3>${inline(trimmed.replace(/^###\s+/, ''))}</h3>`);
            return;
        }
        if (/^##\s+/.test(trimmed)) {
            if (inList) {
                html.push('</ul>');
                inList = false;
            }
            html.push(`<h2>${inline(trimmed.replace(/^##\s+/, ''))}</h2>`);
            return;
        }
        if (/^#\s+/.test(trimmed)) {
            if (inList) {
                html.push('</ul>');
                inList = false;
            }
            html.push(`<h1>${inline(trimmed.replace(/^#\s+/, ''))}</h1>`);
            return;
        }
        if (/^[-*]\s+/.test(trimmed)) {
            if (!inList) {
                html.push('<ul>');
                inList = true;
            }
            html.push(`<li>${inline(trimmed.replace(/^[-*]\s+/, ''))}</li>`);
            return;
        }

        if (inList) {
            html.push('</ul>');
            inList = false;
        }
        html.push(`<p>${inline(trimmed)}</p>`);
    });

    if (inList) html.push('</ul>');
    return html.join('');
}

// Close open popups on Escape key for accessibility and consistency
function handleGlobalKeyDown(e) {
    if (e.key !== 'Escape') return;
    const coursesOverlay = byId('coursesOverlay');
    const cosmicClockOverlay = byId('cosmicClockOverlay');
    const gamesOverlay = byId('gamesOverlay');
    const privacyPopup = byId('privacyPopup');
    const contactPopup = byId('contactPopup');
    if (coursesOverlay && coursesOverlay.classList.contains('show')) {
        closeCoursesExplorer();
        return;
    }
    if (cosmicClockOverlay && cosmicClockOverlay.classList.contains('show')) {
        closeCosmicClockPopup();
        return;
    }
    if (gamesOverlay && gamesOverlay.classList.contains('show')) {
        closeGameHub();
        return;
    }
    if (privacyPopup && privacyPopup.style.display === 'flex') closePrivacyPopup();
    if (contactPopup && contactPopup.style.display === 'flex') closeContactForm();
}

/* ========================================================================== */
/* 16) Games Hub (Snake / Ludo) */
/* ========================================================================== */

const GAME_HUB = {
    overlay: null,
    modal: null,
    canvas: null,
    ctx: null,
    viewport: null,
    loader: null,
    startOverlay: null,
    startBtn: null,
    statusText: null,
    highScoreText: null,
    pauseBtn: null,
    restartBtn: null,
    soundBtn: null,
    closeBtn: null,
    tabs: [],
    gamesIcon: null,
    isOpen: false,
    isPaused: false,
    activeGameId: 'snake',
    activeGame: null,
    rafId: null,
    lastTs: 0,
    soundOn: true,
    audioCtx: null,
    resizeHandler: null,
    keyHandler: null,
    keyUpHandler: null,
    waitingToStart: false,
    gameStats: {
        snake: { scoreKey: 'games.snake.highscore', skillKey: 'games.snake.skill' },
        ludo: { scoreKey: 'games.ludo.highscore', skillKey: 'games.ludo.skill' },
        breakout: { scoreKey: 'games.breakout.highscore', skillKey: 'games.breakout.skill' },
        dodger: { scoreKey: 'games.dodger.highscore', skillKey: 'games.dodger.skill' },
        targetrush: { scoreKey: 'games.targetrush.highscore', skillKey: 'games.targetrush.skill' },
        pong: { scoreKey: 'games.pong.highscore', skillKey: 'games.pong.skill' },
        memoryflip: { scoreKey: 'games.memoryflip.highscore', skillKey: 'games.memoryflip.skill' },
        laneescape: { scoreKey: 'games.laneescape.highscore', skillKey: 'games.laneescape.skill' },
        offlinerunner: { scoreKey: 'games.offlinerunner.highscore', skillKey: 'games.offlinerunner.skill' }
    }
};

function initializeGameHub() {
    const overlay = byId('gamesOverlay');
    const modal = byId('gamesModal');
    const canvas = byId('gamesCanvas');
    if (!overlay || !modal || !canvas) return;

    GAME_HUB.overlay = overlay;
    GAME_HUB.modal = modal;
    GAME_HUB.canvas = canvas;
    GAME_HUB.ctx = canvas.getContext('2d');
    GAME_HUB.viewport = byId('gamesViewport');
    GAME_HUB.loader = byId('gamesLoader');
    GAME_HUB.startOverlay = byId('gamesStartOverlay');
    GAME_HUB.startBtn = byId('gamesStartBtn');
    GAME_HUB.statusText = byId('gamesStatusText');
    GAME_HUB.highScoreText = byId('gamesHighScoreText');
    GAME_HUB.pauseBtn = byId('gamesPauseBtn');
    GAME_HUB.restartBtn = byId('gamesRestartBtn');
    GAME_HUB.soundBtn = byId('gamesSoundToggle');
    GAME_HUB.closeBtn = byId('gamesCloseBtn');
    GAME_HUB.tabs = Array.from(document.querySelectorAll('.games-tab'));
    GAME_HUB.gamesIcon = document.querySelector('.right-sidebar [data-action="games"]');

    try {
        const storedSound = localStorage.getItem('games.soundOn');
        GAME_HUB.soundOn = storedSound !== 'false';
    } catch (_) {
        GAME_HUB.soundOn = true;
    }
    updateGamesSoundButton();

    if (GAME_HUB.closeBtn) {
        GAME_HUB.closeBtn.addEventListener('click', () => closeGameHub());
    }
    if (GAME_HUB.pauseBtn) {
        GAME_HUB.pauseBtn.addEventListener('click', () => toggleGamePause());
    }
    if (GAME_HUB.restartBtn) {
        GAME_HUB.restartBtn.addEventListener('click', () => restartActiveGame());
    }
    if (GAME_HUB.soundBtn) {
        GAME_HUB.soundBtn.addEventListener('click', () => {
            GAME_HUB.soundOn = !GAME_HUB.soundOn;
            try { localStorage.setItem('games.soundOn', GAME_HUB.soundOn ? 'true' : 'false'); } catch (_) { }
            updateGamesSoundButton();
            playGameBeep(660, 0.04);
        });
    }
    if (GAME_HUB.startBtn) {
        GAME_HUB.startBtn.addEventListener('click', () => beginCurrentGame());
    }

    GAME_HUB.tabs.forEach((tab) => {
        tab.addEventListener('click', () => switchGameTab(tab.dataset.game || 'snake'));
    });

    GAME_HUB.resizeHandler = () => {
        if (!GAME_HUB.isOpen) return;
        resizeGamesCanvas();
        if (GAME_HUB.activeGame && typeof GAME_HUB.activeGame.resize === 'function') {
            GAME_HUB.activeGame.resize(getCanvasWidth(), getCanvasHeight());
        }
    };
    window.addEventListener('resize', GAME_HUB.resizeHandler, { passive: true });

    GAME_HUB.keyHandler = (e) => {
        if (!GAME_HUB.isOpen) return;
        if (GAME_HUB.waitingToStart && (e.key === 'Enter' || e.code === 'Space')) {
            e.preventDefault();
            beginCurrentGame();
            return;
        }
        if (e.key === 'Tab') return;
        if (GAME_HUB.activeGame && typeof GAME_HUB.activeGame.onKeyDown === 'function') {
            GAME_HUB.activeGame.onKeyDown(e);
        }
    };
    window.addEventListener('keydown', GAME_HUB.keyHandler);

    GAME_HUB.keyUpHandler = (e) => {
        if (!GAME_HUB.isOpen) return;
        if (GAME_HUB.activeGame && typeof GAME_HUB.activeGame.onKeyUp === 'function') {
            GAME_HUB.activeGame.onKeyUp(e);
        }
    };
    window.addEventListener('keyup', GAME_HUB.keyUpHandler);
}

function openGameHub() {
    if (!GAME_HUB.overlay || !GAME_HUB.modal || !GAME_HUB.canvas) return;

    GAME_HUB.overlay.classList.add('show');
    GAME_HUB.overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('freeze-scroll');
    GAME_HUB.isOpen = true;
    GAME_HUB.isPaused = false;
    if (GAME_HUB.gamesIcon) GAME_HUB.gamesIcon.classList.add('is-active');
    updateGamesPauseButton();

    switchGameTab(GAME_HUB.activeGameId || 'snake', true);
    if (GAME_HUB.viewport) {
        setTimeout(() => {
            try { GAME_HUB.viewport.focus(); } catch (_) { }
        }, 120);
    }
}

function closeGameHub() {
    if (!GAME_HUB.overlay) return;

    GAME_HUB.isOpen = false;
    GAME_HUB.overlay.classList.remove('show');
    GAME_HUB.overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('freeze-scroll');
    if (GAME_HUB.gamesIcon) GAME_HUB.gamesIcon.classList.remove('is-active');
    GAME_HUB.waitingToStart = false;
    if (GAME_HUB.startOverlay) {
        GAME_HUB.startOverlay.classList.remove('show');
        GAME_HUB.startOverlay.setAttribute('aria-hidden', 'true');
    }
    destroyActiveGame();
    stopGameLoop();
}

function switchGameTab(gameId, immediate = false) {
    const next = Object.prototype.hasOwnProperty.call(GAME_HUB.gameStats, gameId) ? gameId : 'snake';
    GAME_HUB.activeGameId = next;
    GAME_HUB.tabs.forEach((tab) => {
        const active = tab.dataset.game === next;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', active ? 'true' : 'false');
    });

    showGamesLoader(true);
    const wait = immediate ? 30 : 190;

    setTimeout(async () => {
        destroyActiveGame();
        resizeGamesCanvas();
        await createGameById(next);
        if (GAME_HUB.activeGame && typeof GAME_HUB.activeGame.resize === 'function') {
            GAME_HUB.activeGame.resize(getCanvasWidth(), getCanvasHeight());
        }
        GAME_HUB.isPaused = false;
        armGameStartOverlay();
        updateGamesPauseButton();
        updateGamesHighScoreText(next);
        showGamesLoader(false);
        startGameLoop();
    }, wait);
}

async function createGameById(gameId) {
    const width = getCanvasWidth();
    const height = getCanvasHeight();
    if (gameId === 'ludo') {
        GAME_HUB.activeGame = createLudoGame();
    } else if (gameId === 'breakout') {
        GAME_HUB.activeGame = createBreakoutGame();
    } else if (gameId === 'dodger') {
        GAME_HUB.activeGame = createDodgerGame();
    } else if (gameId === 'targetrush') {
        GAME_HUB.activeGame = createTargetRushGame();
    } else if (gameId === 'pong') {
        GAME_HUB.activeGame = createPongGame();
    } else if (gameId === 'memoryflip') {
        GAME_HUB.activeGame = createMemoryFlipGame();
    } else if (gameId === 'laneescape') {
        GAME_HUB.activeGame = createLaneEscapeGame();
    } else if (gameId === 'offlinerunner') {
        GAME_HUB.activeGame = createOfflineRunnerGame();
    } else {
        GAME_HUB.activeGame = createSnakeGame();
    }
    if (GAME_HUB.activeGame && typeof GAME_HUB.activeGame.init === 'function') {
        GAME_HUB.activeGame.init(GAME_HUB.ctx, width, height);
    }
}

function destroyActiveGame() {
    if (GAME_HUB.activeGame && typeof GAME_HUB.activeGame.destroy === 'function') {
        GAME_HUB.activeGame.destroy();
    }
    GAME_HUB.activeGame = null;
}

function startGameLoop() {
    stopGameLoop();
    GAME_HUB.lastTs = performance.now();
    const loop = (ts) => {
        if (!GAME_HUB.isOpen || !GAME_HUB.activeGame) return;
        const dt = Math.min(0.05, (ts - GAME_HUB.lastTs) / 1000);
        GAME_HUB.lastTs = ts;

        if (!GAME_HUB.waitingToStart && !GAME_HUB.isPaused && typeof GAME_HUB.activeGame.update === 'function') {
            GAME_HUB.activeGame.update(dt);
        }
        if (typeof GAME_HUB.activeGame.render === 'function') {
            GAME_HUB.activeGame.render();
        }
        if (typeof GAME_HUB.activeGame.getStatus === 'function') {
            const status = GAME_HUB.activeGame.getStatus();
            if (GAME_HUB.statusText) GAME_HUB.statusText.textContent = enrichGameStatusWithHint(status || '', GAME_HUB.activeGameId);
        }

        GAME_HUB.rafId = requestAnimationFrame(loop);
    };
    GAME_HUB.rafId = requestAnimationFrame(loop);
}

function armGameStartOverlay() {
    GAME_HUB.waitingToStart = true;
    if (GAME_HUB.startOverlay) {
        GAME_HUB.startOverlay.classList.add('show');
        GAME_HUB.startOverlay.setAttribute('aria-hidden', 'false');
    }
    if (GAME_HUB.startBtn) {
        const title = GAME_HUB.activeGameId ? GAME_HUB.activeGameId.replace(/(^\w)|(-\w)/g, (m) => m.replace('-', '').toUpperCase()) : 'Game';
        GAME_HUB.startBtn.textContent = `▶ Play ${title}`;
    }
}

function beginCurrentGame() {
    if (!GAME_HUB.waitingToStart) return;
    GAME_HUB.waitingToStart = false;
    if (GAME_HUB.startOverlay) {
        GAME_HUB.startOverlay.classList.remove('show');
        GAME_HUB.startOverlay.setAttribute('aria-hidden', 'true');
    }
    playGameBeep(700, 0.03);
    if (GAME_HUB.viewport) {
        try { GAME_HUB.viewport.focus(); } catch (_) { }
    }
}

function getGameControlHint(gameId) {
    if (gameId === 'snake') return 'Hint: Arrows/WASD or Swipe';
    if (gameId === 'ludo') return 'Hint: Click canvas or Space/Enter to roll';
    if (gameId === 'breakout') return 'Hint: Arrows/A-D or mouse move';
    if (gameId === 'dodger') return 'Hint: Arrows/WASD or mouse move';
    if (gameId === 'targetrush') return 'Hint: Click target (Enter/Space quick hit)';
    if (gameId === 'pong') return 'Hint: Up/Down or W/S';
    if (gameId === 'memoryflip') return 'Hint: Click cards to match pairs';
    if (gameId === 'laneescape') return 'Hint: Left/Right or A/D to switch lanes';
    if (gameId === 'offlinerunner') return 'Hint: Space/↑/W jump · ↓/S duck · Tap jump';
    return '';
}

function enrichGameStatusWithHint(status, gameId) {
    const hint = getGameControlHint(gameId);
    if (!hint) return status;
    if (!status) return hint;
    return `${status} · ${hint}`;
}

function stopGameLoop() {
    if (GAME_HUB.rafId) {
        cancelAnimationFrame(GAME_HUB.rafId);
        GAME_HUB.rafId = null;
    }
}

function toggleGamePause() {
    if (!GAME_HUB.activeGame) return;
    if (GAME_HUB.waitingToStart) return;
    GAME_HUB.isPaused = !GAME_HUB.isPaused;
    if (typeof GAME_HUB.activeGame.setPaused === 'function') {
        GAME_HUB.activeGame.setPaused(GAME_HUB.isPaused);
    }
    updateGamesPauseButton();
}

function restartActiveGame() {
    if (!GAME_HUB.activeGame || typeof GAME_HUB.activeGame.restart !== 'function') return;
    GAME_HUB.activeGame.restart();
    GAME_HUB.isPaused = false;
    armGameStartOverlay();
    updateGamesPauseButton();
    playGameBeep(480, 0.05);
}

function updateGamesPauseButton() {
    if (!GAME_HUB.pauseBtn) return;
    GAME_HUB.pauseBtn.textContent = GAME_HUB.isPaused ? 'Resume' : 'Pause';
}

function updateGamesSoundButton() {
    if (!GAME_HUB.soundBtn) return;
    GAME_HUB.soundBtn.textContent = GAME_HUB.soundOn ? 'Sound: On' : 'Sound: Off';
    GAME_HUB.soundBtn.setAttribute('aria-pressed', GAME_HUB.soundOn ? 'true' : 'false');
}

function showGamesLoader(show) {
    if (!GAME_HUB.loader) return;
    GAME_HUB.loader.classList.toggle('show', show);
}

function resizeGamesCanvas() {
    if (!GAME_HUB.canvas || !GAME_HUB.viewport) return;
    const rect = GAME_HUB.viewport.getBoundingClientRect();
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    GAME_HUB.canvas.width = Math.max(300, Math.floor(rect.width * dpr));
    GAME_HUB.canvas.height = Math.max(240, Math.floor(rect.height * dpr));
    if (GAME_HUB.ctx) {
        GAME_HUB.ctx.setTransform(1, 0, 0, 1, 0, 0);
        GAME_HUB.ctx.scale(dpr, dpr);
    }
}

function getCanvasWidth() {
    if (!GAME_HUB.canvas) return 0;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    return Math.floor(GAME_HUB.canvas.width / dpr);
}

function getCanvasHeight() {
    if (!GAME_HUB.canvas) return 0;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    return Math.floor(GAME_HUB.canvas.height / dpr);
}

function getStoredNumber(key, fallback = 0) {
    try {
        const raw = localStorage.getItem(key);
        if (raw == null) return fallback;
        const val = Number(raw);
        return Number.isFinite(val) ? val : fallback;
    } catch (_) {
        return fallback;
    }
}

function setStoredNumber(key, val) {
    try { localStorage.setItem(key, String(val)); } catch (_) { }
}

function updateGamesHighScoreText(gameId) {
    if (!GAME_HUB.highScoreText) return;
    const key = GAME_HUB.gameStats[gameId].scoreKey;
    const value = getStoredNumber(key, 0);
    GAME_HUB.highScoreText.textContent = `Highest Score: ${value}`;
}

function maybeUpdateHighScore(gameId, value) {
    const key = GAME_HUB.gameStats[gameId].scoreKey;
    const prev = getStoredNumber(key, 0);
    if (value > prev) {
        setStoredNumber(key, value);
        if (GAME_HUB.activeGameId === gameId) updateGamesHighScoreText(gameId);
    }
}

function playGameBeep(freq = 440, duration = 0.05) {
    if (!GAME_HUB.soundOn) return;
    try {
        if (!GAME_HUB.audioCtx) {
            const Ctx = window.AudioContext || window.webkitAudioContext;
            if (!Ctx) return;
            GAME_HUB.audioCtx = new Ctx();
        }
        const ctx = GAME_HUB.audioCtx;
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();
        oscillator.type = 'sine';
        oscillator.frequency.value = freq;
        gainNode.gain.value = 0.03;
        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);
        oscillator.start();
        oscillator.stop(ctx.currentTime + duration);
    } catch (_) { }
}

function createSnakeGame() {
    const state = {
        ctx: null,
        width: 0,
        height: 0,
        cell: 22,
        cols: 0,
        rows: 0,
        boardW: 0,
        boardH: 0,
        ox: 0,
        oy: 0,
        snake: [{ x: 6, y: 6 }],
        dir: { x: 1, y: 0 },
        nextDir: { x: 1, y: 0 },
        food: { x: 12, y: 8 },
        acc: 0,
        speed: 7,
        score: 0,
        level: 0,
        movesLeft: 3,
        gameOver: false,
        touchStart: null,
        onPointerDown: null,
        onPointerUp: null
    };

    function computeGrid() {
        const adaptiveCell = Math.floor(Math.min(state.width / 30, state.height / 20));
        state.cell = Math.max(14, Math.min(28, adaptiveCell));
        state.cols = Math.max(16, Math.floor(state.width / state.cell));
        state.rows = Math.max(12, Math.floor(state.height / state.cell));
        state.boardW = state.cols * state.cell;
        state.boardH = state.rows * state.cell;
        state.ox = Math.floor((state.width - state.boardW) / 2);
        state.oy = Math.floor((state.height - state.boardH) / 2);
    }

    function reset() {
        computeGrid();
        state.snake = [{ x: Math.floor(state.cols * 0.25), y: Math.floor(state.rows * 0.5) }];
        state.dir = { x: 1, y: 0 };
        state.nextDir = { x: 1, y: 0 };
        state.acc = 0;
        state.speed = 5;
        state.score = 0;
        state.level = 0;
        state.movesLeft = 3;
        state.gameOver = false;
        spawnFood();
    }

    function spawnFood() {
        let best = null;
        let bestDist = -1;
        for (let attempt = 0; attempt < 120; attempt++) {
            const x = Math.floor(Math.random() * state.cols);
            const y = Math.floor(Math.random() * state.rows);
            if (state.snake.some((s) => s.x === x && s.y === y)) continue;
            const head = state.snake[0];
            const dist = Math.abs(x - head.x) + Math.abs(y - head.y);
            if (dist > bestDist) {
                bestDist = dist;
                best = { x, y };
            }
        }
        state.food = best || { x: 3, y: 3 };
    }

    function normalizeAfterResize() {
        const maxX = Math.max(0, state.cols - 1);
        const maxY = Math.max(0, state.rows - 1);

        const seen = new Set();
        const nextSnake = [];
        state.snake.forEach((part) => {
            const x = Math.min(maxX, Math.max(0, part.x));
            const y = Math.min(maxY, Math.max(0, part.y));
            const key = `${x},${y}`;
            if (!seen.has(key)) {
                seen.add(key);
                nextSnake.push({ x, y });
            }
        });
        if (nextSnake.length === 0) {
            nextSnake.push({ x: Math.floor(state.cols * 0.5), y: Math.floor(state.rows * 0.5) });
        }
        state.snake = nextSnake;

        const foodOutside = state.food.x < 0 || state.food.y < 0 || state.food.x >= state.cols || state.food.y >= state.rows;
        const foodOnSnake = state.snake.some((s) => s.x === state.food.x && s.y === state.food.y);
        if (foodOutside || foodOnSnake) {
            spawnFood();
        }
    }

    function setDirection(x, y) {
        if (x === -state.dir.x && y === -state.dir.y) return;
        state.nextDir = { x, y };
        state.movesLeft = Math.max(1, 3 - state.level);
    }

    function onSwipe(dx, dy) {
        if (Math.abs(dx) > Math.abs(dy)) {
            setDirection(dx > 0 ? 1 : -1, 0);
        } else {
            setDirection(0, dy > 0 ? 1 : -1);
        }
    }

    return {
        init(ctx, width, height) {
            state.ctx = ctx;
            state.width = width;
            state.height = height;
            reset();
            if (GAME_HUB.canvas) {
                state.onPointerDown = (e) => {
                    state.touchStart = { x: e.clientX, y: e.clientY };
                };
                state.onPointerUp = (e) => {
                    if (!state.touchStart) return;
                    const dx = e.clientX - state.touchStart.x;
                    const dy = e.clientY - state.touchStart.y;
                    if (Math.hypot(dx, dy) > 14) onSwipe(dx, dy);
                    state.touchStart = null;
                };
                GAME_HUB.canvas.addEventListener('pointerdown', state.onPointerDown);
                GAME_HUB.canvas.addEventListener('pointerup', state.onPointerUp);
            }
        },
        resize(width, height) {
            state.width = width;
            state.height = height;
            computeGrid();
            normalizeAfterResize();
        },
        onKeyDown(e) {
            if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'w') setDirection(0, -1);
            if (e.key === 'ArrowDown' || e.key.toLowerCase() === 's') setDirection(0, 1);
            if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') setDirection(-1, 0);
            if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') setDirection(1, 0);
        },
        update(dt) {
            if (state.gameOver) return;
            state.acc += dt;
            const step = 1 / state.speed;
            if (state.acc < step) return;

            let guard = 0;
            while (state.acc >= step && guard < 3 && !state.gameOver) {
                state.acc -= step;
                guard += 1;

                state.dir = state.nextDir;
                const head = { x: state.snake[0].x + state.dir.x, y: state.snake[0].y + state.dir.y };

                if (head.x < 0 || head.y < 0 || head.x >= state.cols || head.y >= state.rows || state.snake.some((s) => s.x === head.x && s.y === head.y)) {
                    state.gameOver = true;
                    maybeUpdateHighScore('snake', state.score);
                    playGameBeep(180, 0.1);
                    return;
                }

                state.snake.unshift(head);
                if (head.x === state.food.x && head.y === state.food.y) {
                    state.score += 10;
                    state.level = Math.floor(state.score / 100);
                    state.speed = Math.min(11, 5 + state.level * 0.22);
                    spawnFood();
                    playGameBeep(780, 0.04);
                } else {
                    state.snake.pop();
                }
            }
        },
        render() {
            const ctx = state.ctx;
            if (!ctx) return;
            ctx.clearRect(0, 0, state.width, state.height);
            ctx.fillStyle = 'rgba(39, 85, 210, 0.08)';
            ctx.fillRect(0, 0, state.width, state.height);

            ctx.fillStyle = 'rgba(39, 85, 210, 0.10)';
            ctx.fillRect(state.ox, state.oy, state.boardW, state.boardH);
            ctx.strokeStyle = 'rgba(39, 85, 210, 0.34)';
            ctx.lineWidth = 1;
            ctx.strokeRect(state.ox + 0.5, state.oy + 0.5, Math.max(0, state.boardW - 1), Math.max(0, state.boardH - 1));

            ctx.strokeStyle = 'rgba(39, 85, 210, 0.14)';
            for (let x = 0; x <= state.cols; x++) {
                ctx.beginPath();
                const gx = state.ox + x * state.cell;
                ctx.moveTo(gx, state.oy);
                ctx.lineTo(gx, state.oy + state.boardH);
                ctx.stroke();
            }
            for (let y = 0; y <= state.rows; y++) {
                ctx.beginPath();
                const gy = state.oy + y * state.cell;
                ctx.moveTo(state.ox, gy);
                ctx.lineTo(state.ox + state.boardW, gy);
                ctx.stroke();
            }

            state.snake.forEach((part, idx) => {
                ctx.fillStyle = idx === 0 ? '#2755d2' : '#14b8a6';
                ctx.fillRect(state.ox + part.x * state.cell + 2, state.oy + part.y * state.cell + 2, state.cell - 4, state.cell - 4);
            });

            ctx.fillStyle = '#ef4444';
            ctx.fillRect(state.ox + state.food.x * state.cell + 3, state.oy + state.food.y * state.cell + 3, state.cell - 6, state.cell - 6);

            if (state.gameOver) {
                ctx.fillStyle = 'rgba(0,0,0,0.55)';
                ctx.fillRect(state.ox, state.oy, state.boardW, state.boardH);
                ctx.fillStyle = '#ffffff';
                ctx.font = '600 24px Poppins';
                ctx.textAlign = 'center';
                ctx.fillText('Game Over', state.ox + state.boardW / 2, state.oy + state.boardH / 2 - 8);
                ctx.font = '500 14px Poppins';
                ctx.fillText('Press Restart to play again', state.ox + state.boardW / 2, state.oy + state.boardH / 2 + 20);
            }
        },
        getStatus() {
            return `Snake · Score: ${state.score} · Speed: ${state.speed.toFixed(1)}x`;
        },
        restart() { reset(); },
        setPaused() { },
        destroy() {
            if (GAME_HUB.canvas && state.onPointerDown) {
                GAME_HUB.canvas.removeEventListener('pointerdown', state.onPointerDown);
            }
            if (GAME_HUB.canvas && state.onPointerUp) {
                GAME_HUB.canvas.removeEventListener('pointerup', state.onPointerUp);
            }
            state.onPointerDown = null;
            state.onPointerUp = null;
        }
    };
}

function createLudoGame() {
    const state = {
        ctx: null,
        width: 0,
        height: 0,
        track: 24,
        playerPos: 0,
        aiPos: 0,
        playerProgress: 0,
        aiProgress: 0,
        turn: 'player',
        rollCooldown: 0,
        score: 0,
        aiLevel: Math.max(1, getStoredNumber(GAME_HUB.gameStats.ludo.skillKey, 1)),
        message: 'Tap canvas or press Space to roll.',
        wins: 0
    };

    function reset() {
        state.playerPos = 0;
        state.aiPos = 12;
        state.playerProgress = 0;
        state.aiProgress = 0;
        state.turn = 'player';
        state.rollCooldown = 0;
        state.message = 'Tap canvas or press Space to roll.';
    }

    function strategicRoll(isAi) {
        const base = 1 + Math.floor(Math.random() * 6);
        if (!isAi) return base;
        const bonusRoll = 1 + Math.floor(Math.random() * 6);
        const captureNeed = (state.playerPos - state.aiPos + state.track) % state.track;
        if (state.aiLevel >= 2 && captureNeed >= 1 && captureNeed <= 6) return captureNeed;
        if (state.aiLevel >= 3) return Math.max(base, bonusRoll);
        return base;
    }

    function moveToken(who, value) {
        if (who === 'player') {
            state.playerPos = (state.playerPos + value) % state.track;
            state.playerProgress += value;
            if (state.playerPos === state.aiPos) {
                state.aiProgress = Math.max(0, state.aiProgress - 4);
                state.message = 'You captured AI token!';
                playGameBeep(760, 0.04);
            }
        } else {
            state.aiPos = (state.aiPos + value) % state.track;
            state.aiProgress += value;
            if (state.aiPos === state.playerPos) {
                state.playerProgress = Math.max(0, state.playerProgress - 4);
                state.message = 'AI captured your token!';
                playGameBeep(260, 0.06);
            }
        }
    }

    function checkWin() {
        const finish = 48;
        if (state.playerProgress >= finish) {
            state.score += 1;
            state.wins += 1;
            state.message = 'You won! AI adapts gradually.';
            if (state.wins % 3 === 0) {
                state.aiLevel = Math.min(4, state.aiLevel + 1);
            }
            setStoredNumber(GAME_HUB.gameStats.ludo.skillKey, state.aiLevel);
            maybeUpdateHighScore('ludo', state.score);
            playGameBeep(880, 0.08);
            reset();
            return true;
        }
        if (state.aiProgress >= finish) {
            state.message = 'AI won this round. Keep going!';
            playGameBeep(180, 0.08);
            reset();
            return true;
        }
        return false;
    }

    function playerRoll() {
        if (state.turn !== 'player' || state.rollCooldown > 0) return;
        const roll = strategicRoll(false);
        moveToken('player', roll);
        if (!checkWin()) {
            state.turn = 'ai';
            state.rollCooldown = 0.55;
            state.message = `You rolled ${roll}. AI thinking...`;
        }
    }

    return {
        init(ctx, width, height) {
            state.ctx = ctx;
            state.width = width;
            state.height = height;
            reset();
            if (GAME_HUB.canvas) {
                GAME_HUB.canvas.addEventListener('pointerdown', playerRoll);
            }
        },
        resize(width, height) {
            state.width = width;
            state.height = height;
        },
        onKeyDown(e) {
            if (e.code === 'Space' || e.key === 'Enter') {
                e.preventDefault();
                playerRoll();
            }
        },
        update(dt) {
            if (state.rollCooldown > 0) state.rollCooldown -= dt;
            if (state.turn === 'ai' && state.rollCooldown <= 0) {
                const roll = strategicRoll(true);
                moveToken('ai', roll);
                checkWin();
                state.turn = 'player';
                state.message = `AI rolled ${roll}. Your turn.`;
            }
        },
        render() {
            const ctx = state.ctx;
            if (!ctx) return;
            const w = state.width;
            const h = state.height;
            const cx = w * 0.5;
            const cy = h * 0.5;
            const radius = Math.min(w, h) * 0.33;

            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = 'rgba(20, 184, 166, 0.12)';
            ctx.fillRect(0, 0, w, h);

            for (let i = 0; i < state.track; i++) {
                const a = (i / state.track) * Math.PI * 2 - Math.PI / 2;
                const x = cx + Math.cos(a) * radius;
                const y = cy + Math.sin(a) * radius;
                ctx.fillStyle = i % 2 === 0 ? 'rgba(39,85,210,0.28)' : 'rgba(20,184,166,0.22)';
                ctx.beginPath();
                ctx.arc(x, y, 12, 0, Math.PI * 2);
                ctx.fill();
            }

            const playerAngle = (state.playerPos / state.track) * Math.PI * 2 - Math.PI / 2;
            const aiAngle = (state.aiPos / state.track) * Math.PI * 2 - Math.PI / 2;
            const px = cx + Math.cos(playerAngle) * radius;
            const py = cy + Math.sin(playerAngle) * radius;
            const ax = cx + Math.cos(aiAngle) * radius;
            const ay = cy + Math.sin(aiAngle) * radius;

            ctx.fillStyle = '#2755d2';
            ctx.beginPath(); ctx.arc(px, py, 10, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ef4444';
            ctx.beginPath(); ctx.arc(ax, ay, 10, 0, Math.PI * 2); ctx.fill();

            ctx.fillStyle = 'rgba(17,24,39,0.92)';
            ctx.font = '600 14px Poppins';
            ctx.textAlign = 'center';
            ctx.fillText(state.message, cx, h - 26);
        },
        getStatus() {
            return `Ludo · Wins: ${state.score} · AI Level: ${state.aiLevel} · Turn: ${state.turn}`;
        },
        restart() { reset(); },
        setPaused() { },
        destroy() {
            if (GAME_HUB.canvas) {
                GAME_HUB.canvas.removeEventListener('pointerdown', playerRoll);
            }
        }
    };
}

function createBreakoutGame() {
    const state = {
        ctx: null,
        width: 0,
        height: 0,
        paddle: { x: 0, y: 0, w: 120, h: 14, speed: 520, vx: 0 },
        ball: { x: 0, y: 0, r: 9, vx: 240, vy: -260 },
        bricks: [],
        rows: 5,
        cols: 10,
        brickGap: 8,
        brickH: 20,
        score: 0,
        lives: 3,
        level: 1,
        over: false,
        message: 'Break all bricks. Arrow keys or swipe to move.',
        pointerMove: null
    };

    function resetBall() {
        state.ball.x = state.paddle.x + state.paddle.w * 0.5;
        state.ball.y = state.paddle.y - state.ball.r - 2;
        const speedBoost = 1 + (state.level - 1) * 0.03;
        state.ball.vx = (Math.random() > 0.5 ? 1 : -1) * 230 * speedBoost;
        state.ball.vy = -260 * speedBoost;
    }

    function buildBricks() {
        state.bricks = [];
        const padX = Math.max(14, Math.floor(state.width * 0.06));
        const available = Math.max(260, state.width - padX * 2);
        const brickW = (available - state.brickGap * (state.cols - 1)) / state.cols;
        const topY = Math.max(24, Math.floor(state.height * 0.12));
        for (let r = 0; r < state.rows; r++) {
            for (let c = 0; c < state.cols; c++) {
                state.bricks.push({
                    x: padX + c * (brickW + state.brickGap),
                    y: topY + r * (state.brickH + state.brickGap),
                    w: brickW,
                    h: state.brickH,
                    hp: 1 + Math.floor(r / 2)
                });
            }
        }
    }

    function rebuildLayout() {
        state.paddle.w = Math.max(90, Math.min(150, Math.floor(state.width * 0.18)));
        state.paddle.h = Math.max(12, Math.floor(state.height * 0.028));
        state.paddle.y = state.height - state.paddle.h - 22;
        state.paddle.x = Math.min(Math.max(0, state.paddle.x || (state.width - state.paddle.w) * 0.5), state.width - state.paddle.w);
        state.ball.r = Math.max(7, Math.min(11, Math.floor(Math.min(state.width, state.height) * 0.014)));
        buildBricks();
        resetBall();
    }

    function fullReset() {
        state.score = 0;
        state.lives = 3;
        state.level = 1;
        state.over = false;
        rebuildLayout();
    }

    function hitPaddle() {
        const rel = (state.ball.x - state.paddle.x) / state.paddle.w;
        const clamped = Math.max(0.05, Math.min(0.95, rel));
        const angle = (clamped - 0.5) * 1.3;
        const speed = Math.hypot(state.ball.vx, state.ball.vy) * 1.008;
        state.ball.vx = Math.sin(angle) * speed;
        state.ball.vy = -Math.cos(angle) * speed;
        playGameBeep(630, 0.03);
    }

    function clearBricksIfNeeded() {
        if (state.bricks.length > 0) return;
        state.level += 1;
        if (state.level % 3 === 0) {
            state.rows = Math.min(8, state.rows + 1);
        }
        buildBricks();
        resetBall();
        state.message = `Level ${state.level} started`;
        playGameBeep(920, 0.06);
    }

    return {
        init(ctx, width, height) {
            state.ctx = ctx;
            state.width = width;
            state.height = height;
            fullReset();
            if (GAME_HUB.canvas) {
                state.pointerMove = (e) => {
                    const rect = GAME_HUB.canvas.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    state.paddle.x = Math.max(0, Math.min(state.width - state.paddle.w, x - state.paddle.w * 0.5));
                };
                GAME_HUB.canvas.addEventListener('pointermove', state.pointerMove);
            }
        },
        resize(width, height) {
            state.width = width;
            state.height = height;
            rebuildLayout();
        },
        onKeyDown(e) {
            const key = e.key.toLowerCase();
            if (e.key === 'ArrowLeft' || key === 'a') state.paddle.vx = -state.paddle.speed;
            if (e.key === 'ArrowRight' || key === 'd') state.paddle.vx = state.paddle.speed;
        },
        update(dt) {
            if (state.over) return;

            state.paddle.x += state.paddle.vx * dt;
            state.paddle.vx *= 0.84;
            if (Math.abs(state.paddle.vx) < 8) state.paddle.vx = 0;
            state.paddle.x = Math.max(0, Math.min(state.width - state.paddle.w, state.paddle.x));

            state.ball.x += state.ball.vx * dt;
            state.ball.y += state.ball.vy * dt;

            if (state.ball.x - state.ball.r <= 0) {
                state.ball.x = state.ball.r;
                state.ball.vx = Math.abs(state.ball.vx);
            }
            if (state.ball.x + state.ball.r >= state.width) {
                state.ball.x = state.width - state.ball.r;
                state.ball.vx = -Math.abs(state.ball.vx);
            }
            if (state.ball.y - state.ball.r <= 0) {
                state.ball.y = state.ball.r;
                state.ball.vy = Math.abs(state.ball.vy);
            }

            if (
                state.ball.y + state.ball.r >= state.paddle.y &&
                state.ball.y - state.ball.r <= state.paddle.y + state.paddle.h &&
                state.ball.x >= state.paddle.x &&
                state.ball.x <= state.paddle.x + state.paddle.w &&
                state.ball.vy > 0
            ) {
                state.ball.y = state.paddle.y - state.ball.r;
                hitPaddle();
            }

            for (let i = state.bricks.length - 1; i >= 0; i--) {
                const brick = state.bricks[i];
                if (
                    state.ball.x + state.ball.r < brick.x ||
                    state.ball.x - state.ball.r > brick.x + brick.w ||
                    state.ball.y + state.ball.r < brick.y ||
                    state.ball.y - state.ball.r > brick.y + brick.h
                ) {
                    continue;
                }
                const leftPen = Math.abs((state.ball.x + state.ball.r) - brick.x);
                const rightPen = Math.abs((brick.x + brick.w) - (state.ball.x - state.ball.r));
                const topPen = Math.abs((state.ball.y + state.ball.r) - brick.y);
                const bottomPen = Math.abs((brick.y + brick.h) - (state.ball.y - state.ball.r));
                const minPen = Math.min(leftPen, rightPen, topPen, bottomPen);
                if (minPen === leftPen || minPen === rightPen) {
                    state.ball.vx *= -1;
                } else {
                    state.ball.vy *= -1;
                }

                brick.hp -= 1;
                if (brick.hp <= 0) {
                    state.bricks.splice(i, 1);
                    state.score += 12;
                    maybeUpdateHighScore('breakout', state.score);
                }
                playGameBeep(520, 0.025);
                break;
            }

            clearBricksIfNeeded();

            if (state.ball.y - state.ball.r > state.height + 4) {
                state.lives -= 1;
                playGameBeep(190, 0.07);
                if (state.lives <= 0) {
                    state.over = true;
                    state.message = 'Game over. Press Restart.';
                    maybeUpdateHighScore('breakout', state.score);
                } else {
                    resetBall();
                }
            }
        },
        render() {
            const ctx = state.ctx;
            if (!ctx) return;
            ctx.clearRect(0, 0, state.width, state.height);
            ctx.fillStyle = 'rgba(39, 85, 210, 0.10)';
            ctx.fillRect(0, 0, state.width, state.height);

            state.bricks.forEach((brick) => {
                const tone = brick.hp === 1 ? 'rgba(20,184,166,0.8)' : 'rgba(39,85,210,0.82)';
                ctx.fillStyle = tone;
                ctx.fillRect(brick.x, brick.y, brick.w, brick.h);
            });

            ctx.fillStyle = '#ffffff';
            ctx.fillRect(state.paddle.x, state.paddle.y, state.paddle.w, state.paddle.h);

            ctx.fillStyle = '#ef4444';
            ctx.beginPath();
            ctx.arc(state.ball.x, state.ball.y, state.ball.r, 0, Math.PI * 2);
            ctx.fill();

            if (state.over) {
                ctx.fillStyle = 'rgba(0,0,0,0.55)';
                ctx.fillRect(0, 0, state.width, state.height);
                ctx.fillStyle = '#ffffff';
                ctx.font = '600 24px Poppins';
                ctx.textAlign = 'center';
                ctx.fillText('Breakout Over', state.width * 0.5, state.height * 0.5 - 8);
                ctx.font = '500 14px Poppins';
                ctx.fillText('Press Restart to try again', state.width * 0.5, state.height * 0.5 + 20);
            }
        },
        getStatus() {
            return `Breakout · Score: ${state.score} · Lives: ${state.lives} · Level: ${state.level}`;
        },
        restart() { fullReset(); },
        setPaused() { },
        destroy() {
            if (GAME_HUB.canvas && state.pointerMove) {
                GAME_HUB.canvas.removeEventListener('pointermove', state.pointerMove);
            }
            state.pointerMove = null;
        }
    };
}

function createDodgerGame() {
    const state = {
        ctx: null,
        width: 0,
        height: 0,
        player: { x: 0, y: 0, r: 13, vx: 0, vy: 0, speed: 300 },
        danger: [],
        spawnTimer: 0,
        score: 0,
        survival: 0,
        difficulty: 1,
        over: false,
        keys: new Set(),
        pointerMove: null
    };

    function reset() {
        state.player.x = state.width * 0.5;
        state.player.y = state.height * 0.7;
        state.player.vx = 0;
        state.player.vy = 0;
        state.danger = [];
        state.spawnTimer = 0;
        state.score = 0;
        state.survival = 0;
        state.difficulty = 1;
        state.over = false;
        state.keys.clear();
    }

    function spawnDanger() {
        const side = Math.floor(Math.random() * 4);
        const size = 10 + Math.random() * 10;
        const speed = 100 + Math.random() * 85 + state.difficulty * 8;
        let x = 0;
        let y = 0;
        let vx = 0;
        let vy = 0;
        if (side === 0) {
            x = -size;
            y = Math.random() * state.height;
            vx = speed;
            vy = (Math.random() - 0.5) * 80;
        } else if (side === 1) {
            x = state.width + size;
            y = Math.random() * state.height;
            vx = -speed;
            vy = (Math.random() - 0.5) * 80;
        } else if (side === 2) {
            x = Math.random() * state.width;
            y = -size;
            vx = (Math.random() - 0.5) * 80;
            vy = speed;
        } else {
            x = Math.random() * state.width;
            y = state.height + size;
            vx = (Math.random() - 0.5) * 80;
            vy = -speed;
        }
        state.danger.push({ x, y, vx, vy, r: size });
    }

    function applyControls(dt) {
        let ax = 0;
        let ay = 0;
        if (state.keys.has('arrowleft') || state.keys.has('a')) ax -= 1;
        if (state.keys.has('arrowright') || state.keys.has('d')) ax += 1;
        if (state.keys.has('arrowup') || state.keys.has('w')) ay -= 1;
        if (state.keys.has('arrowdown') || state.keys.has('s')) ay += 1;

        const length = Math.hypot(ax, ay) || 1;
        state.player.vx = (ax / length) * state.player.speed;
        state.player.vy = (ay / length) * state.player.speed;

        state.player.x += state.player.vx * dt;
        state.player.y += state.player.vy * dt;

        state.player.x = Math.max(state.player.r, Math.min(state.width - state.player.r, state.player.x));
        state.player.y = Math.max(state.player.r, Math.min(state.height - state.player.r, state.player.y));
    }

    function moveDanger(dt) {
        for (let i = state.danger.length - 1; i >= 0; i--) {
            const d = state.danger[i];
            d.x += d.vx * dt;
            d.y += d.vy * dt;
            if (
                d.x < -80 ||
                d.x > state.width + 80 ||
                d.y < -80 ||
                d.y > state.height + 80
            ) {
                state.danger.splice(i, 1);
            }
        }
    }

    function checkCollisions() {
        const p = state.player;
        for (let i = 0; i < state.danger.length; i++) {
            const d = state.danger[i];
            const dist = Math.hypot(d.x - p.x, d.y - p.y);
            if (dist <= d.r + p.r - 2) {
                state.over = true;
                maybeUpdateHighScore('dodger', state.score);
                playGameBeep(160, 0.09);
                return;
            }
        }
    }

    return {
        init(ctx, width, height) {
            state.ctx = ctx;
            state.width = width;
            state.height = height;
            reset();
            if (GAME_HUB.canvas) {
                state.pointerMove = (e) => {
                    const rect = GAME_HUB.canvas.getBoundingClientRect();
                    state.player.x = Math.max(state.player.r, Math.min(state.width - state.player.r, e.clientX - rect.left));
                    state.player.y = Math.max(state.player.r, Math.min(state.height - state.player.r, e.clientY - rect.top));
                };
                GAME_HUB.canvas.addEventListener('pointermove', state.pointerMove);
            }
        },
        resize(width, height) {
            state.width = width;
            state.height = height;
            state.player.x = Math.max(state.player.r, Math.min(state.width - state.player.r, state.player.x));
            state.player.y = Math.max(state.player.r, Math.min(state.height - state.player.r, state.player.y));
        },
        onKeyDown(e) {
            state.keys.add(e.key.toLowerCase());
            if (e.key === ' ' && state.over) {
                e.preventDefault();
                reset();
            }
        },
        onKeyUp(e) {
            state.keys.delete(e.key.toLowerCase());
        },
        update(dt) {
            if (state.over) return;

            state.survival += dt;
            state.score = Math.floor(state.survival * 10);
            maybeUpdateHighScore('dodger', state.score);
            state.difficulty = 1 + Math.floor(state.survival / 28);

            state.spawnTimer -= dt;
            const spawnEvery = Math.max(0.56, 1.36 - state.difficulty * 0.045);
            if (state.spawnTimer <= 0) {
                spawnDanger();
                if (Math.random() < Math.min(0.14, state.difficulty * 0.022)) spawnDanger();
                state.spawnTimer = spawnEvery;
            }

            applyControls(dt);
            moveDanger(dt);
            checkCollisions();
        },
        render() {
            const ctx = state.ctx;
            if (!ctx) return;
            ctx.clearRect(0, 0, state.width, state.height);
            ctx.fillStyle = 'rgba(20, 184, 166, 0.11)';
            ctx.fillRect(0, 0, state.width, state.height);

            state.danger.forEach((d) => {
                ctx.fillStyle = 'rgba(239, 68, 68, 0.82)';
                ctx.beginPath();
                ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
                ctx.fill();
            });

            ctx.fillStyle = '#2755d2';
            ctx.beginPath();
            ctx.arc(state.player.x, state.player.y, state.player.r, 0, Math.PI * 2);
            ctx.fill();

            if (state.over) {
                ctx.fillStyle = 'rgba(0,0,0,0.55)';
                ctx.fillRect(0, 0, state.width, state.height);
                ctx.fillStyle = '#ffffff';
                ctx.font = '600 24px Poppins';
                ctx.textAlign = 'center';
                ctx.fillText('Dodger Over', state.width * 0.5, state.height * 0.5 - 8);
                ctx.font = '500 14px Poppins';
                ctx.fillText('Press Restart to play again', state.width * 0.5, state.height * 0.5 + 20);
            }
        },
        getStatus() {
            return `Dodger · Score: ${state.score} · Difficulty: ${state.difficulty} · Hazards: ${state.danger.length}`;
        },
        restart() { reset(); },
        setPaused() { },
        destroy() {
            if (GAME_HUB.canvas && state.pointerMove) {
                GAME_HUB.canvas.removeEventListener('pointermove', state.pointerMove);
            }
            state.pointerMove = null;
        }
    };
}

function createTargetRushGame() {
    const state = {
        ctx: null,
        width: 0,
        height: 0,
        target: { x: 0, y: 0, r: 28 },
        timer: 45,
        score: 0,
        streak: 0,
        over: false,
        pulse: 0,
        pointerDown: null
    };

    function nextTarget() {
        const margin = Math.max(34, state.target.r + 8);
        state.target.x = margin + Math.random() * Math.max(1, state.width - margin * 2);
        state.target.y = margin + Math.random() * Math.max(1, state.height - margin * 2);
        state.target.r = Math.max(20, 28 - Math.min(8, Math.floor(state.score / 18)));
    }

    function reset() {
        state.timer = 45;
        state.score = 0;
        state.streak = 0;
        state.over = false;
        state.pulse = 0;
        state.target.r = 28;
        nextTarget();
    }

    function tryHit(clientX, clientY) {
        if (state.over) return;
        const rect = GAME_HUB.canvas ? GAME_HUB.canvas.getBoundingClientRect() : { left: 0, top: 0 };
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const hit = Math.hypot(x - state.target.x, y - state.target.y) <= state.target.r + 2;
        if (hit) {
            state.streak += 1;
            const bonus = state.streak >= 4 ? 2 : 1;
            state.score += bonus;
            state.timer = Math.min(60, state.timer + 0.55);
            maybeUpdateHighScore('targetrush', state.score);
            state.pulse = 1;
            playGameBeep(760, 0.03);
            nextTarget();
        } else {
            state.streak = 0;
            state.timer = Math.max(0, state.timer - 0.25);
            playGameBeep(260, 0.02);
        }
    }

    return {
        init(ctx, width, height) {
            state.ctx = ctx;
            state.width = width;
            state.height = height;
            reset();
            if (GAME_HUB.canvas) {
                state.pointerDown = (e) => {
                    tryHit(e.clientX, e.clientY);
                };
                GAME_HUB.canvas.addEventListener('pointerdown', state.pointerDown);
            }
        },
        resize(width, height) {
            state.width = width;
            state.height = height;
            nextTarget();
        },
        onKeyDown(e) {
            if (e.key === 'Enter' || e.code === 'Space') {
                e.preventDefault();
                tryHit(state.target.x + (GAME_HUB.canvas ? GAME_HUB.canvas.getBoundingClientRect().left : 0), state.target.y + (GAME_HUB.canvas ? GAME_HUB.canvas.getBoundingClientRect().top : 0));
            }
        },
        update(dt) {
            if (state.over) return;
            state.timer -= dt;
            state.pulse = Math.max(0, state.pulse - dt * 2.4);
            if (state.timer <= 0) {
                state.timer = 0;
                state.over = true;
                maybeUpdateHighScore('targetrush', state.score);
                playGameBeep(180, 0.1);
            }
        },
        render() {
            const ctx = state.ctx;
            if (!ctx) return;
            ctx.clearRect(0, 0, state.width, state.height);
            ctx.fillStyle = 'rgba(39, 85, 210, 0.09)';
            ctx.fillRect(0, 0, state.width, state.height);

            const glow = 8 + state.pulse * 10;
            ctx.save();
            ctx.shadowColor = 'rgba(20, 184, 166, 0.55)';
            ctx.shadowBlur = glow;
            ctx.fillStyle = '#14b8a6';
            ctx.beginPath();
            ctx.arc(state.target.x, state.target.y, state.target.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            ctx.strokeStyle = 'rgba(255,255,255,0.7)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(state.target.x, state.target.y, state.target.r + 6, 0, Math.PI * 2);
            ctx.stroke();

            if (state.over) {
                ctx.fillStyle = 'rgba(0,0,0,0.55)';
                ctx.fillRect(0, 0, state.width, state.height);
                ctx.fillStyle = '#ffffff';
                ctx.font = '600 24px Poppins';
                ctx.textAlign = 'center';
                ctx.fillText('Time Up', state.width * 0.5, state.height * 0.5 - 8);
                ctx.font = '500 14px Poppins';
                ctx.fillText('Press Restart for another round', state.width * 0.5, state.height * 0.5 + 20);
            }
        },
        getStatus() {
            return `Target Rush · Score: ${state.score} · Time: ${state.timer.toFixed(1)}s · Streak: ${state.streak}`;
        },
        restart() { reset(); },
        setPaused() { },
        destroy() {
            if (GAME_HUB.canvas && state.pointerDown) {
                GAME_HUB.canvas.removeEventListener('pointerdown', state.pointerDown);
            }
            state.pointerDown = null;
        }
    };
}

function createPongGame() {
    const state = {
        ctx: null,
        width: 0,
        height: 0,
        player: { x: 20, y: 0, w: 12, h: 92, speed: 360 },
        ai: { x: 0, y: 0, w: 12, h: 92, speed: 290 },
        ball: { x: 0, y: 0, r: 8, vx: 260, vy: 180 },
        playerScore: 0,
        aiScore: 0,
        rounds: 0,
        over: false,
        keys: new Set(),
        pointerMove: null
    };

    function resetBall(toPlayer = Math.random() > 0.5) {
        state.ball.x = state.width * 0.5;
        state.ball.y = state.height * 0.5;
        const dir = toPlayer ? -1 : 1;
        const speedMul = 1 + Math.min(0.1, state.rounds * 0.008);
        state.ball.vx = 260 * dir * speedMul;
        state.ball.vy = (Math.random() * 180 - 90) * speedMul;
    }

    function reset() {
        state.playerScore = 0;
        state.aiScore = 0;
        state.rounds = 0;
        state.over = false;
        state.keys.clear();
        state.player.h = Math.max(72, Math.min(100, Math.floor(state.height * 0.2)));
        state.ai.h = state.player.h;
        state.player.y = (state.height - state.player.h) * 0.5;
        state.ai.y = (state.height - state.ai.h) * 0.5;
        state.ai.x = state.width - state.ai.w - 20;
        resetBall(false);
    }

    function movePaddles(dt) {
        let dir = 0;
        if (state.keys.has('arrowup') || state.keys.has('w')) dir -= 1;
        if (state.keys.has('arrowdown') || state.keys.has('s')) dir += 1;
        state.player.y += dir * state.player.speed * dt;
        state.player.y = Math.max(0, Math.min(state.height - state.player.h, state.player.y));

        const aiMid = state.ai.y + state.ai.h * 0.5;
        const delta = state.ball.y - aiMid;
        const aiDir = Math.sign(delta);
        state.ai.y += aiDir * state.ai.speed * dt;
        state.ai.y = Math.max(0, Math.min(state.height - state.ai.h, state.ai.y));
    }

    function paddleBounce(paddle, isPlayer) {
        const rel = (state.ball.y - paddle.y) / paddle.h;
        const angle = (Math.max(0.05, Math.min(0.95, rel)) - 0.5) * 1.35;
        const speed = Math.min(460, Math.hypot(state.ball.vx, state.ball.vy) * 1.008);
        const dir = isPlayer ? 1 : -1;
        state.ball.vx = Math.cos(angle) * speed * dir;
        state.ball.vy = Math.sin(angle) * speed;
        playGameBeep(580, 0.025);
    }

    function checkRoundEnd() {
        if (state.ball.x < -30) {
            state.aiScore += 1;
            state.rounds += 1;
            playGameBeep(180, 0.07);
            resetBall(false);
        } else if (state.ball.x > state.width + 30) {
            state.playerScore += 1;
            state.rounds += 1;
            maybeUpdateHighScore('pong', state.playerScore);
            playGameBeep(760, 0.04);
            resetBall(true);
        }

        if (state.playerScore >= 7 || state.aiScore >= 7) {
            state.over = true;
            maybeUpdateHighScore('pong', state.playerScore);
        }
    }

    return {
        init(ctx, width, height) {
            state.ctx = ctx;
            state.width = width;
            state.height = height;
            reset();
            if (GAME_HUB.canvas) {
                state.pointerMove = (e) => {
                    const rect = GAME_HUB.canvas.getBoundingClientRect();
                    const y = e.clientY - rect.top;
                    state.player.y = Math.max(0, Math.min(state.height - state.player.h, y - state.player.h * 0.5));
                };
                GAME_HUB.canvas.addEventListener('pointermove', state.pointerMove);
            }
        },
        resize(width, height) {
            state.width = width;
            state.height = height;
            state.player.h = Math.max(72, Math.min(100, Math.floor(state.height * 0.2)));
            state.ai.h = state.player.h;
            state.ai.x = state.width - state.ai.w - 20;
            state.player.y = Math.max(0, Math.min(state.height - state.player.h, state.player.y));
            state.ai.y = Math.max(0, Math.min(state.height - state.ai.h, state.ai.y));
            state.ball.x = Math.max(state.ball.r, Math.min(state.width - state.ball.r, state.ball.x));
            state.ball.y = Math.max(state.ball.r, Math.min(state.height - state.ball.r, state.ball.y));
        },
        onKeyDown(e) {
            state.keys.add(e.key.toLowerCase());
        },
        onKeyUp(e) {
            state.keys.delete(e.key.toLowerCase());
        },
        update(dt) {
            if (state.over) return;

            movePaddles(dt);

            state.ball.x += state.ball.vx * dt;
            state.ball.y += state.ball.vy * dt;

            if (state.ball.y - state.ball.r <= 0) {
                state.ball.y = state.ball.r;
                state.ball.vy = Math.abs(state.ball.vy);
            }
            if (state.ball.y + state.ball.r >= state.height) {
                state.ball.y = state.height - state.ball.r;
                state.ball.vy = -Math.abs(state.ball.vy);
            }

            if (
                state.ball.x - state.ball.r <= state.player.x + state.player.w &&
                state.ball.y >= state.player.y &&
                state.ball.y <= state.player.y + state.player.h &&
                state.ball.vx < 0
            ) {
                state.ball.x = state.player.x + state.player.w + state.ball.r;
                paddleBounce(state.player, true);
            }

            if (
                state.ball.x + state.ball.r >= state.ai.x &&
                state.ball.y >= state.ai.y &&
                state.ball.y <= state.ai.y + state.ai.h &&
                state.ball.vx > 0
            ) {
                state.ball.x = state.ai.x - state.ball.r;
                paddleBounce(state.ai, false);
            }

            checkRoundEnd();
        },
        render() {
            const ctx = state.ctx;
            if (!ctx) return;
            ctx.clearRect(0, 0, state.width, state.height);
            ctx.fillStyle = 'rgba(39, 85, 210, 0.10)';
            ctx.fillRect(0, 0, state.width, state.height);

            ctx.strokeStyle = 'rgba(255,255,255,0.35)';
            ctx.setLineDash([10, 12]);
            ctx.beginPath();
            ctx.moveTo(state.width * 0.5, 0);
            ctx.lineTo(state.width * 0.5, state.height);
            ctx.stroke();
            ctx.setLineDash([]);

            ctx.fillStyle = '#ffffff';
            ctx.fillRect(state.player.x, state.player.y, state.player.w, state.player.h);
            ctx.fillRect(state.ai.x, state.ai.y, state.ai.w, state.ai.h);

            ctx.fillStyle = '#14b8a6';
            ctx.beginPath();
            ctx.arc(state.ball.x, state.ball.y, state.ball.r, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = 'rgba(255,255,255,0.9)';
            ctx.font = '600 26px Poppins';
            ctx.textAlign = 'center';
            ctx.fillText(`${state.playerScore} : ${state.aiScore}`, state.width * 0.5, 42);

            if (state.over) {
                ctx.fillStyle = 'rgba(0,0,0,0.55)';
                ctx.fillRect(0, 0, state.width, state.height);
                ctx.fillStyle = '#ffffff';
                ctx.font = '600 24px Poppins';
                ctx.fillText(state.playerScore > state.aiScore ? 'You Win' : 'AI Wins', state.width * 0.5, state.height * 0.5 - 8);
                ctx.font = '500 14px Poppins';
                ctx.fillText('Press Restart to play again', state.width * 0.5, state.height * 0.5 + 20);
            }
        },
        getStatus() {
            return `Pong · You ${state.playerScore} - ${state.aiScore} AI · First to 7`;
        },
        restart() { reset(); },
        setPaused() { },
        destroy() {
            if (GAME_HUB.canvas && state.pointerMove) {
                GAME_HUB.canvas.removeEventListener('pointermove', state.pointerMove);
            }
            state.pointerMove = null;
        }
    };
}

function createMemoryFlipGame() {
    const state = {
        ctx: null,
        width: 0,
        height: 0,
        cards: [],
        cols: 4,
        rows: 3,
        open: [],
        locked: false,
        lockTimer: 0,
        cardW: 0,
        cardH: 0,
        gap: 12,
        offsetX: 0,
        offsetY: 0,
        moves: 0,
        matches: 0,
        score: 0,
        over: false,
        pointerDown: null
    };

    function shuffle(values) {
        for (let i = values.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [values[i], values[j]] = [values[j], values[i]];
        }
        return values;
    }

    function layout() {
        const totalGapX = state.gap * (state.cols - 1);
        const totalGapY = state.gap * (state.rows - 1);
        const usableW = Math.max(280, state.width * 0.84);
        const usableH = Math.max(220, state.height * 0.74);
        state.cardW = Math.floor((usableW - totalGapX) / state.cols);
        state.cardH = Math.floor((usableH - totalGapY) / state.rows);
        const gridW = state.cardW * state.cols + totalGapX;
        const gridH = state.cardH * state.rows + totalGapY;
        state.offsetX = Math.floor((state.width - gridW) * 0.5);
        state.offsetY = Math.floor((state.height - gridH) * 0.5);
    }

    function reset() {
        state.open = [];
        state.locked = false;
        state.lockTimer = 0;
        state.moves = 0;
        state.matches = 0;
        state.over = false;
        const pairCount = (state.cols * state.rows) / 2;
        const pool = [];
        for (let i = 1; i <= pairCount; i++) {
            pool.push(i, i);
        }
        const vals = shuffle(pool);
        layout();
        state.cards = vals.map((val, i) => {
            const col = i % state.cols;
            const row = Math.floor(i / state.cols);
            return {
                value: val,
                revealed: false,
                matched: false,
                x: state.offsetX + col * (state.cardW + state.gap),
                y: state.offsetY + row * (state.cardH + state.gap)
            };
        });
    }

    function recalcPositions() {
        layout();
        state.cards.forEach((card, i) => {
            const col = i % state.cols;
            const row = Math.floor(i / state.cols);
            card.x = state.offsetX + col * (state.cardW + state.gap);
            card.y = state.offsetY + row * (state.cardH + state.gap);
        });
    }

    function pickCardAt(x, y) {
        if (state.over || state.locked) return;
        const card = state.cards.find((c) => (
            x >= c.x && x <= c.x + state.cardW && y >= c.y && y <= c.y + state.cardH
        ));
        if (!card || card.matched || card.revealed) return;

        card.revealed = true;
        state.open.push(card);
        playGameBeep(640, 0.02);

        if (state.open.length === 2) {
            state.moves += 1;
            if (state.open[0].value === state.open[1].value) {
                state.open[0].matched = true;
                state.open[1].matched = true;
                state.open = [];
                state.matches += 1;
                state.score += 20;
                maybeUpdateHighScore('memoryflip', state.score);
                playGameBeep(820, 0.04);
                if (state.matches >= (state.cols * state.rows) / 2) {
                    state.over = true;
                    const bonus = Math.max(0, 120 - state.moves * 4);
                    state.score += bonus;
                    maybeUpdateHighScore('memoryflip', state.score);
                }
            } else {
                state.locked = true;
                state.lockTimer = 0.65;
            }
        }
    }

    return {
        init(ctx, width, height) {
            state.ctx = ctx;
            state.width = width;
            state.height = height;
            reset();
            if (GAME_HUB.canvas) {
                state.pointerDown = (e) => {
                    const rect = GAME_HUB.canvas.getBoundingClientRect();
                    pickCardAt(e.clientX - rect.left, e.clientY - rect.top);
                };
                GAME_HUB.canvas.addEventListener('pointerdown', state.pointerDown);
            }
        },
        resize(width, height) {
            state.width = width;
            state.height = height;
            recalcPositions();
        },
        onKeyDown() { },
        update(dt) {
            if (!state.locked) return;
            state.lockTimer -= dt;
            if (state.lockTimer <= 0) {
                state.locked = false;
                state.open.forEach((card) => { card.revealed = false; });
                state.open = [];
            }
        },
        render() {
            const ctx = state.ctx;
            if (!ctx) return;
            ctx.clearRect(0, 0, state.width, state.height);
            ctx.fillStyle = 'rgba(20, 184, 166, 0.10)';
            ctx.fillRect(0, 0, state.width, state.height);

            state.cards.forEach((card) => {
                const faceUp = card.revealed || card.matched;
                ctx.fillStyle = faceUp ? 'rgba(39, 85, 210, 0.78)' : 'rgba(255,255,255,0.2)';
                ctx.fillRect(card.x, card.y, state.cardW, state.cardH);
                ctx.strokeStyle = 'rgba(255,255,255,0.25)';
                ctx.strokeRect(card.x + 0.5, card.y + 0.5, state.cardW - 1, state.cardH - 1);
                if (faceUp) {
                    ctx.fillStyle = '#ffffff';
                    ctx.font = `600 ${Math.max(18, Math.floor(state.cardH * 0.28))}px Poppins`;
                    ctx.textAlign = 'center';
                    ctx.fillText(String(card.value), card.x + state.cardW * 0.5, card.y + state.cardH * 0.62);
                }
            });

            if (state.over) {
                ctx.fillStyle = 'rgba(0,0,0,0.52)';
                ctx.fillRect(0, 0, state.width, state.height);
                ctx.fillStyle = '#ffffff';
                ctx.font = '600 24px Poppins';
                ctx.textAlign = 'center';
                ctx.fillText('All Pairs Matched', state.width * 0.5, state.height * 0.5 - 8);
                ctx.font = '500 14px Poppins';
                ctx.fillText('Press Restart for a new shuffle', state.width * 0.5, state.height * 0.5 + 20);
            }
        },
        getStatus() {
            return `Memory Flip · Score: ${state.score} · Moves: ${state.moves} · Pairs: ${state.matches}/${(state.cols * state.rows) / 2}`;
        },
        restart() { reset(); },
        setPaused() { },
        destroy() {
            if (GAME_HUB.canvas && state.pointerDown) {
                GAME_HUB.canvas.removeEventListener('pointerdown', state.pointerDown);
            }
            state.pointerDown = null;
        }
    };
}

function createLaneEscapeGame() {
    const state = {
        ctx: null,
        width: 0,
        height: 0,
        lanes: 3,
        laneCenters: [],
        playerLane: 1,
        playerY: 0,
        obstacles: [],
        spawnTimer: 0,
        speed: 240,
        score: 0,
        over: false,
        pointerDown: null
    };

    function updateLaneCenters() {
        const margin = Math.max(30, Math.floor(state.width * 0.1));
        const laneW = (state.width - margin * 2) / state.lanes;
        state.laneCenters = Array.from({ length: state.lanes }, (_, i) => margin + laneW * (i + 0.5));
    }

    function reset() {
        updateLaneCenters();
        state.playerLane = 1;
        state.playerY = state.height - Math.max(48, Math.floor(state.height * 0.13));
        state.obstacles = [];
        state.spawnTimer = 0;
        state.speed = 200;
        state.score = 0;
        state.over = false;
    }

    function spawnObstacle() {
        const lane = Math.floor(Math.random() * state.lanes);
        const w = Math.max(28, Math.floor(state.width * 0.06));
        const h = Math.max(36, Math.floor(state.height * 0.08));
        state.obstacles.push({ lane, y: -h - 8, w, h });
    }

    function shiftLane(dir) {
        if (state.over) return;
        state.playerLane = Math.max(0, Math.min(state.lanes - 1, state.playerLane + dir));
        playGameBeep(530, 0.02);
    }

    function playerRect() {
        const w = Math.max(30, Math.floor(state.width * 0.065));
        const h = Math.max(40, Math.floor(state.height * 0.085));
        return {
            x: state.laneCenters[state.playerLane] - w * 0.5,
            y: state.playerY - h * 0.5,
            w,
            h
        };
    }

    function collides(a, b) {
        return (
            a.x < b.x + b.w &&
            a.x + a.w > b.x &&
            a.y < b.y + b.h &&
            a.y + a.h > b.y
        );
    }

    return {
        init(ctx, width, height) {
            state.ctx = ctx;
            state.width = width;
            state.height = height;
            reset();
            if (GAME_HUB.canvas) {
                state.pointerDown = (e) => {
                    const rect = GAME_HUB.canvas.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const nearest = state.laneCenters.reduce((best, cx, i) => (
                        Math.abs(x - cx) < Math.abs(x - state.laneCenters[best]) ? i : best
                    ), 0);
                    if (nearest < state.playerLane) shiftLane(-1);
                    if (nearest > state.playerLane) shiftLane(1);
                };
                GAME_HUB.canvas.addEventListener('pointerdown', state.pointerDown);
            }
        },
        resize(width, height) {
            state.width = width;
            state.height = height;
            updateLaneCenters();
            state.playerY = state.height - Math.max(48, Math.floor(state.height * 0.13));
            state.playerLane = Math.max(0, Math.min(state.lanes - 1, state.playerLane));
        },
        onKeyDown(e) {
            const key = e.key.toLowerCase();
            if (e.key === 'ArrowLeft' || key === 'a') shiftLane(-1);
            if (e.key === 'ArrowRight' || key === 'd') shiftLane(1);
        },
        update(dt) {
            if (state.over) return;

            state.score += dt * 7.2;
            maybeUpdateHighScore('laneescape', Math.floor(state.score));
            state.speed = Math.min(340, 200 + state.score * 0.28);

            state.spawnTimer -= dt;
            const spawnEvery = Math.max(0.5, 1.12 - state.score * 0.0011);
            if (state.spawnTimer <= 0) {
                spawnObstacle();
                if (Math.random() < Math.min(0.12, state.score / 520)) spawnObstacle();
                state.spawnTimer = spawnEvery;
            }

            const player = playerRect();
            for (let i = state.obstacles.length - 1; i >= 0; i--) {
                const o = state.obstacles[i];
                o.y += state.speed * dt;
                const ox = state.laneCenters[o.lane] - o.w * 0.5;
                const rect = { x: ox, y: o.y, w: o.w, h: o.h };
                if (collides(player, rect)) {
                    state.over = true;
                    maybeUpdateHighScore('laneescape', Math.floor(state.score));
                    playGameBeep(170, 0.09);
                    return;
                }
                if (o.y > state.height + 24) {
                    state.obstacles.splice(i, 1);
                }
            }
        },
        render() {
            const ctx = state.ctx;
            if (!ctx) return;
            ctx.clearRect(0, 0, state.width, state.height);
            ctx.fillStyle = 'rgba(17,24,39,0.85)';
            ctx.fillRect(0, 0, state.width, state.height);

            for (let i = 0; i < state.lanes; i++) {
                const x = state.laneCenters[i];
                ctx.strokeStyle = 'rgba(255,255,255,0.18)';
                ctx.setLineDash([9, 10]);
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, state.height);
                ctx.stroke();
            }
            ctx.setLineDash([]);

            const player = playerRect();
            ctx.fillStyle = '#14b8a6';
            ctx.fillRect(player.x, player.y, player.w, player.h);

            state.obstacles.forEach((o) => {
                const ox = state.laneCenters[o.lane] - o.w * 0.5;
                ctx.fillStyle = '#ef4444';
                ctx.fillRect(ox, o.y, o.w, o.h);
            });

            if (state.over) {
                ctx.fillStyle = 'rgba(0,0,0,0.55)';
                ctx.fillRect(0, 0, state.width, state.height);
                ctx.fillStyle = '#ffffff';
                ctx.font = '600 24px Poppins';
                ctx.textAlign = 'center';
                ctx.fillText('Crash!', state.width * 0.5, state.height * 0.5 - 8);
                ctx.font = '500 14px Poppins';
                ctx.fillText('Press Restart to run again', state.width * 0.5, state.height * 0.5 + 20);
            }
        },
        getStatus() {
            return `Lane Escape · Score: ${Math.floor(state.score)} · Speed: ${Math.floor(state.speed)} · Obstacles: ${state.obstacles.length}`;
        },
        restart() { reset(); },
        setPaused() { },
        destroy() {
            if (GAME_HUB.canvas && state.pointerDown) {
                GAME_HUB.canvas.removeEventListener('pointerdown', state.pointerDown);
            }
            state.pointerDown = null;
        }
    };
}

function createOfflineRunnerGame() {
    const state = {
        ctx: null,
        width: 0,
        height: 0,
        groundY: 0,
        gravity: 2200,
        jumpImpulse: 760,
        baseSpeed: 290,
        speed: 290,
        scoreFloat: 0,
        score: 0,
        over: false,
        player: {
            x: 78,
            y: 0,
            standingW: 42,
            standingH: 46,
            duckingW: 56,
            duckingH: 28,
            w: 42,
            h: 46,
            vy: 0,
            onGround: true,
            isDucking: false,
            legPhase: 0
        },
        obstacles: [],
        clouds: [],
        groundBits: [],
        spawnTimer: 0,
        nextGap: 0,
        distanceToNextObstacle: 0,
        elapsed: 0,
        roadPhase: 0,
        highScore: 0,
        isNight: false,
        birdFlap: 0,
        pointerDown: null
    };

    function formatScore(value) {
        return String(Math.max(0, value | 0)).padStart(5, '0');
    }

    function syncPlayerFloor() {
        state.player.y = state.groundY - state.player.h;
        if (state.player.y < 0) state.player.y = 0;
    }

    function setDuck(isDucking) {
        const player = state.player;
        if (!player.onGround) return;
        if (isDucking === player.isDucking) return;

        player.isDucking = isDucking;
        player.w = isDucking ? player.duckingW : player.standingW;
        player.h = isDucking ? player.duckingH : player.standingH;
        syncPlayerFloor();
    }

    function reset() {
        state.groundY = Math.floor(state.height * 0.78);
        state.player.w = state.player.standingW;
        state.player.h = state.player.standingH;
        state.player.isDucking = false;
        syncPlayerFloor();
        state.player.vy = 0;
        state.player.onGround = true;
        state.player.legPhase = 0;
        state.obstacles = [];
        state.clouds = [];
        state.groundBits = [];
        state.spawnTimer = 0;
        state.nextGap = 0;
        state.distanceToNextObstacle = 340;
        state.elapsed = 0;
        state.roadPhase = 0;
        state.speed = state.baseSpeed;
        state.scoreFloat = 0;
        state.score = 0;
        state.over = false;
        state.isNight = false;
        state.birdFlap = 0;
        state.highScore = getGameHighScore('offlinerunner');

        for (let i = 0; i < 4; i++) {
            state.clouds.push({
                x: Math.random() * state.width,
                y: 28 + Math.random() * (state.height * 0.35),
                w: 34 + Math.random() * 26,
                v: 18 + Math.random() * 12
            });
        }

        for (let i = 0; i < 16; i++) {
            state.groundBits.push({
                x: Math.random() * state.width,
                y: state.groundY + 6 + Math.random() * 14,
                w: 4 + Math.random() * 10,
                h: 1 + Math.random() * 3,
                v: 0.72 + Math.random() * 0.5
            });
        }
    }

    function jump() {
        if (state.over) {
            reset();
            return;
        }
        if (!state.player.onGround) return;
        setDuck(false);
        state.player.vy = -state.jumpImpulse;
        state.player.onGround = false;
        playGameBeep(720, 0.03);
    }

    function spawnObstacle(type = 'cactus') {
        if (type === 'bird') {
            const flightBand = Math.random();
            const h = 20;
            const w = 38;
            const y = state.groundY - (flightBand < 0.28 ? 34 : flightBand < 0.72 ? 64 : 92);
            state.obstacles.push({ x: state.width + 12, y, w, h, type: 'bird', passed: false, flap: Math.random() * Math.PI * 2 });
            return;
        }

        const shape = Math.random();
        if (shape < 0.35) {
            const h = 34;
            const w = 16;
            state.obstacles.push({ x: state.width + 12, y: state.groundY - h, w, h, type: 'cactus', passed: false });
        } else if (shape < 0.7) {
            const h = 46;
            const w = 20;
            state.obstacles.push({ x: state.width + 12, y: state.groundY - h, w, h, type: 'cactus', passed: false });
        } else {
            const h = 38;
            const w = 14;
            state.obstacles.push({ x: state.width + 12, y: state.groundY - h, w, h, type: 'cactus', passed: false });
            state.obstacles.push({ x: state.width + 30, y: state.groundY - h, w, h, type: 'cactus', passed: false });
        }
    }

    function collide(a, b) {
        return (
            a.x < b.x + b.w &&
            a.x + a.w > b.x &&
            a.y < b.y + b.h &&
            a.y + a.h > b.y
        );
    }

    return {
        init(ctx, width, height) {
            state.ctx = ctx;
            state.width = width;
            state.height = height;
            reset();
            if (GAME_HUB.canvas) {
                state.pointerDown = () => jump();
                GAME_HUB.canvas.addEventListener('pointerdown', state.pointerDown);
            }
        },
        resize(width, height) {
            state.width = width;
            state.height = height;
            const prevGround = state.groundY || Math.floor(height * 0.78);
            state.groundY = Math.floor(state.height * 0.78);
            state.player.y += state.groundY - prevGround;
            if (state.player.y > state.groundY - state.player.h) {
                syncPlayerFloor();
                state.player.vy = 0;
                state.player.onGround = true;
            }
            state.groundBits.forEach((bit) => {
                bit.y = state.groundY + 6 + Math.random() * 14;
            });
        },
        onKeyDown(e) {
            const key = e.key.toLowerCase();
            if (e.key === 'ArrowUp' || e.code === 'Space' || key === 'w') {
                e.preventDefault();
                jump();
            } else if (e.key === 'ArrowDown' || key === 's') {
                e.preventDefault();
                setDuck(true);
            }
        },
        onKeyUp(e) {
            const key = e.key.toLowerCase();
            if (e.key === 'ArrowDown' || key === 's') {
                e.preventDefault();
                setDuck(false);
            }
        },
        update(dt) {
            if (state.over) return;

            state.elapsed += dt;
            state.scoreFloat += dt * 46;
            state.score = Math.floor(state.scoreFloat);
            const targetSpeed = Math.min(570, state.baseSpeed + state.elapsed * 11 + state.score * 0.07);
            state.speed += (targetSpeed - state.speed) * Math.min(1, dt * 3.2);
            state.isNight = Math.floor(state.score / 1000) % 2 === 1;
            state.roadPhase = (state.roadPhase + state.speed * dt) % 36;

            const gravityScale = state.player.vy > 0 ? 1.1 : 1;
            state.player.vy += state.gravity * gravityScale * dt;
            state.player.y += state.player.vy * dt;
            state.player.legPhase += dt * (state.speed / 120);
            if (state.player.y >= state.groundY - state.player.h) {
                syncPlayerFloor();
                state.player.vy = 0;
                state.player.onGround = true;
            }

            state.distanceToNextObstacle -= state.speed * dt;
            if (state.distanceToNextObstacle <= 0) {
                const canBird = state.score > 1200;
                const spawnBird = canBird && Math.random() < 0.08;
                spawnObstacle(spawnBird ? 'bird' : 'cactus');
                const baseGap = Math.max(240, 380 - state.score * 0.035);
                state.distanceToNextObstacle = baseGap + Math.random() * 190;
            }

            const playerBox = {
                x: state.player.x + 8,
                y: state.player.y + 6,
                w: Math.max(12, state.player.w - 14),
                h: Math.max(10, state.player.h - 8)
            };
            for (let i = state.obstacles.length - 1; i >= 0; i--) {
                const obstacle = state.obstacles[i];
                obstacle.x -= state.speed * dt;
                if (obstacle.type === 'bird') {
                    obstacle.flap += dt * 11;
                }

                if (!obstacle.passed && obstacle.x + obstacle.w < state.player.x) {
                    obstacle.passed = true;
                    playGameBeep(560, 0.012);
                }

                if (collide(playerBox, obstacle)) {
                    state.over = true;
                    maybeUpdateHighScore('offlinerunner', state.score);
                    playGameBeep(160, 0.09);
                    return;
                }

                if (obstacle.x + obstacle.w < -20) {
                    state.obstacles.splice(i, 1);
                }
            }

            state.highScore = maybeUpdateHighScore('offlinerunner', state.score);

            state.birdFlap += dt * 12;

            state.clouds.forEach((cloud) => {
                cloud.x -= cloud.v * dt;
                if (cloud.x + cloud.w < -10) {
                    cloud.x = state.width + Math.random() * 80;
                    cloud.y = 28 + Math.random() * (state.height * 0.35);
                    cloud.w = 34 + Math.random() * 26;
                    cloud.v = 18 + Math.random() * 12;
                }
            });

            state.groundBits.forEach((bit) => {
                bit.x -= state.speed * bit.v * dt;
                if (bit.x + bit.w < -12) {
                    bit.x = state.width + Math.random() * 40;
                    bit.y = state.groundY + 6 + Math.random() * 14;
                    bit.w = 4 + Math.random() * 10;
                    bit.h = 1 + Math.random() * 3;
                    bit.v = 0.72 + Math.random() * 0.5;
                }
            });
        },
        render() {
            const ctx = state.ctx;
            if (!ctx) return;
            ctx.clearRect(0, 0, state.width, state.height);

            const sky = state.isNight ? '#0b1020' : '#f8fafc';
            const ink = state.isNight ? '#e5e7eb' : '#111827';
            const subInk = state.isNight ? 'rgba(229, 231, 235, 0.45)' : 'rgba(17, 24, 39, 0.42)';

            ctx.fillStyle = sky;
            ctx.fillRect(0, 0, state.width, state.height);

            ctx.fillStyle = state.isNight ? 'rgba(255,255,255,0.15)' : 'rgba(100, 116, 139, 0.16)';
            state.clouds.forEach((cloud) => {
                ctx.fillRect(cloud.x, cloud.y, cloud.w, 12);
            });

            ctx.strokeStyle = subInk;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, state.groundY + 0.5);
            ctx.lineTo(state.width, state.groundY + 0.5);
            ctx.stroke();

            ctx.fillStyle = subInk;
            for (let x = -state.roadPhase; x < state.width + 36; x += 36) {
                ctx.fillRect(Math.round(x), state.groundY + 3, 20, 2);
            }

            ctx.fillStyle = subInk;
            state.groundBits.forEach((bit) => {
                ctx.fillRect(Math.round(bit.x), Math.round(bit.y), bit.w, bit.h);
            });

            ctx.fillStyle = ink;
            state.obstacles.forEach((obstacle) => {
                if (obstacle.type === 'bird') {
                    const wingUp = Math.sin(obstacle.flap || state.birdFlap) > 0;
                    const ox = Math.round(obstacle.x);
                    const oy = Math.round(obstacle.y);
                    ctx.fillRect(ox + 8, oy + 7, 18, 7);
                    ctx.fillRect(ox + 20, oy + 4, 10, 5);
                    ctx.fillRect(ox + 4, oy + (wingUp ? 2 : 10), 10, 3);
                    ctx.fillRect(ox + 12, oy + (wingUp ? 10 : 2), 12, 3);
                } else {
                    const ox = Math.round(obstacle.x);
                    const oy = Math.round(obstacle.y);
                    ctx.fillRect(ox + 3, oy + 8, obstacle.w - 6, obstacle.h - 8);
                    ctx.fillRect(ox, oy + 14, 6, 10);
                    ctx.fillRect(ox + obstacle.w - 6, oy + 20, 6, 10);
                }
            });

            const player = state.player;
            ctx.fillStyle = ink;
            if (player.isDucking) {
                const px = Math.round(player.x);
                const py = Math.round(player.y);
                ctx.fillRect(px + 4, py + 8, 34, 14);
                ctx.fillRect(px + 30, py + 4, 16, 10);
                ctx.fillRect(px + 46, py + 10, 8, 4);
                ctx.fillRect(px + 10, py + 20, 12, 6);
                ctx.fillRect(px + 26, py + 20, 12, 6);
            } else {
                const legSwap = Math.floor(player.legPhase) % 2 === 0;
                const px = Math.round(player.x);
                const py = Math.round(player.y);
                ctx.fillRect(px + 6, py + 6, 22, 30);
                ctx.fillRect(px + 22, py, 18, 14);
                ctx.fillRect(px + 38, py + 6, 6, 4);
                ctx.fillRect(px + 12, py + 36, 8, legSwap ? 10 : 6);
                ctx.fillRect(px + 22, py + 36, 8, legSwap ? 6 : 10);
            }

            ctx.textAlign = 'right';
            ctx.font = '700 18px ui-monospace, SFMono-Regular, Menlo, monospace';
            const scoreText = formatScore(state.score);
            const hiText = `HI ${formatScore(state.highScore)}`;
            ctx.fillStyle = subInk;
            ctx.fillText(hiText, state.width - 128, 30);
            ctx.fillStyle = ink;
            ctx.fillText(scoreText, state.width - 20, 30);

            if (state.over) {
                ctx.fillStyle = ink;
                ctx.font = '700 26px ui-monospace, SFMono-Regular, Menlo, monospace';
                ctx.textAlign = 'center';
                ctx.fillText('GAME OVER', state.width * 0.5, state.height * 0.47);
                ctx.font = '600 13px ui-monospace, SFMono-Regular, Menlo, monospace';
                ctx.fillText('Press Restart / Space / Tap', state.width * 0.5, state.height * 0.53);
            }
        },
        getStatus() {
            return `Offline Runner · ${state.isNight ? 'Night' : 'Day'} · Score: ${state.score} · HI: ${state.highScore}`;
        },
        restart() { reset(); },
        setPaused(paused) {
            if (!paused) return;
            setDuck(false);
        },
        destroy() {
            if (GAME_HUB.canvas && state.pointerDown) {
                GAME_HUB.canvas.removeEventListener('pointerdown', state.pointerDown);
            }
            state.pointerDown = null;
        }
    };
}



/* ========================================================================== */
/* 17) Loader & Hero Animation */
/* ========================================================================== */

// Page load animation
window.addEventListener('load', function () {
    const loader = byId('loader');
    const hero = byId('hero');

    if (loader) {
        gsap.to('#loader', {
            duration: 0,
            y: "-100%",
            opacity: 0,
            onComplete: function () {
                loader.style.display = "none";
                if (hero) {
                    hero.style.display = "block";
                    gsap.fromTo('#hero',
                        { scale: 0.6, opacity: 0 },
                        { duration: 1.5, scale: 1, opacity: 1, ease: "power2.out" }
                    );
                }
            }
        });
    } else if (hero) {
        hero.style.display = "block";
        gsap.fromTo('#hero',
            { scale: 0.6, opacity: 0 },
            { duration: 1.5, scale: 1, opacity: 1, ease: "power2.out" }
        );
    }
});

/* ========================================================================== */
/* 18) Certifications Slider */
/* ========================================================================== */

// Certifications slider
function initializeCertificationsSlider() {
    const sequenceElement = byId('sequence');
    if (!sequenceElement) return;

    let currentSlide = 0;
    const slides = document.querySelectorAll('.seq-canvas > li');
    const prevButton = document.querySelector('.cert-prev');
    const nextButton = document.querySelector('.cert-next');
    const totalSlides = slides.length;

    function updateSlide(newIndex) {
        if (newIndex < 0 || newIndex >= totalSlides) return;

        slides.forEach((slide, index) => {
            if (slide && slide.classList) {
                slide.classList.remove('seq-in');
                if (index !== newIndex) slide.classList.add('seq-out');
            }
        });

        currentSlide = newIndex;
        if (slides[currentSlide] && slides[currentSlide].classList) {
            slides[currentSlide].classList.remove('seq-out');
            slides[currentSlide].classList.add('seq-in');
        }
    }

    // Navigation event listeners
    if (nextButton) {
        nextButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            updateSlide((currentSlide + 1) % totalSlides);
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            updateSlide((currentSlide - 1 + totalSlides) % totalSlides);
        });
    }

    // Show arrows only when hovering near left/right edges
    function handleMove(e) {
        const rect = sequenceElement.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const leftZone = rect.width * 0.18;
        const rightZone = rect.width * 0.18;
        const nearLeft = x >= 0 && x <= leftZone;
        const nearRight = x >= rect.width - rightZone && x <= rect.width;

        if (nearLeft) {
            sequenceElement.classList.add('hover-left');
        } else {
            sequenceElement.classList.remove('hover-left');
        }

        if (nearRight) {
            sequenceElement.classList.add('hover-right');
        } else {
            sequenceElement.classList.remove('hover-right');
        }
    }

    function handleLeave() {
        sequenceElement.classList.remove('hover-left');
        sequenceElement.classList.remove('hover-right');
    }

    sequenceElement.addEventListener('mousemove', handleMove, { passive: true });
    sequenceElement.addEventListener('mouseleave', handleLeave, { passive: true });

    // Ensure visibility when focusing via keyboard
    if (prevButton) {
        prevButton.addEventListener('focus', () => sequenceElement.classList.add('hover-left'));
        prevButton.addEventListener('blur', () => sequenceElement.classList.remove('hover-left'));
    }
    if (nextButton) {
        nextButton.addEventListener('focus', () => sequenceElement.classList.add('hover-right'));
        nextButton.addEventListener('blur', () => sequenceElement.classList.remove('hover-right'));
    }

    function onArrowKey(e) {
        if (e.key === 'ArrowRight') {
            updateSlide((currentSlide + 1) % totalSlides);
            startAutoAdvance();
        } else if (e.key === 'ArrowLeft') {
            updateSlide((currentSlide - 1 + totalSlides) % totalSlides);
            startAutoAdvance();
        }
    }

    // Keyboard navigation
    document.addEventListener('keydown', onArrowKey);

    // Auto-advance and touch support
    let autoAdvance = null;

    function startAutoAdvance() {
        if (autoAdvance) clearInterval(autoAdvance);
        autoAdvance = setInterval(() => updateSlide((currentSlide + 1) % totalSlides), 5000);
    }
    let touchStartX = 0;

    // Keep auto-advance running even when hovered; only pause during touch/drag interactions

    sequenceElement.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        clearInterval(autoAdvance);
    });

    sequenceElement.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diffX = touchStartX - touchEndX;

        if (Math.abs(diffX) > 50) {
            diffX > 0 ? updateSlide((currentSlide + 1) % totalSlides)
                : updateSlide((currentSlide - 1 + totalSlides) % totalSlides);
        }

        startAutoAdvance();
    });

    // Restart timer after manual navigation (clicks or keys)
    if (nextButton) {
        nextButton.addEventListener('click', () => startAutoAdvance());
    }
    if (prevButton) {
        prevButton.addEventListener('click', () => startAutoAdvance());
    }

    updateSlide(0);
    startAutoAdvance();
}

/* ========================================================================== */
/* 19) Bootstrap */
/* ========================================================================== */

// Initialize when document is ready
(function () {
    const runInit = () => {
        initializePage();
        initializeEventListeners();

        // Scroll to top button
        const scrollTopBtn = document.getElementById('scrollTopBtn');
        if (scrollTopBtn) {
            let scrollTimeout;
            const checkScroll = function () {
                if (scrollTimeout) return;
                scrollTimeout = requestAnimationFrame(() => {
                    const scrolled = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                    scrollTopBtn.classList.toggle('visible', scrolled > 200);
                    scrollTimeout = null;
                });
            };
            window.addEventListener('scroll', checkScroll, { passive: true });
            document.addEventListener('scroll', checkScroll, { passive: true });
            checkScroll();
            scrollTopBtn.addEventListener('click', function () {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            });
        }

        // Scroll reveal animations
        (function initScrollReveal() {
            // Selectors for elements to animate
            var revealSelectors = [
                '.about-section .section-title',
                '.about-image-container',
                '.about-text-container',
                '.about-card',
                '.certifications-section .section-title',
                '.cert-grid',
                '.services-section .section-title',
                '.service-card',
                '.projects-section .section-title',
                '.project-accordion-item',
                '.blog-section .section-title',
                '.blog-page-wrap',
                '.main-footer'
            ];

            // Cards that should stagger
            var staggerGroups = [
                { parent: '.services-section', child: '.service-card' },
                { parent: '.projects-section', child: '.project-accordion-item' }
            ];

            // Add scroll-reveal class to all target elements
            revealSelectors.forEach(function (sel) {
                document.querySelectorAll(sel).forEach(function (el) {
                    if (!el.classList.contains('scroll-reveal')) {
                        el.classList.add('scroll-reveal');
                    }
                });
            });

            // Add image-specific: from-left for images, from-right for text
            document.querySelectorAll('.about-image-container').forEach(function (el) {
                el.classList.add('from-left');
            });
            document.querySelectorAll('.about-text-container').forEach(function (el) {
                el.classList.add('from-right');
            });

            // Add zoom-in for project cards
            document.querySelectorAll('.project-accordion-item').forEach(function (el) {
                el.classList.add('zoom-in');
            });

            // Add stagger delays
            staggerGroups.forEach(function (group) {
                document.querySelectorAll(group.parent).forEach(function (parent) {
                    parent.querySelectorAll(group.child).forEach(function (child, i) {
                        if (i < 7) child.classList.add('stagger-' + (i + 1));
                    });
                });
            });

            // IntersectionObserver
            if ('IntersectionObserver' in window) {
                var observer = new IntersectionObserver(function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('revealed');
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

                document.querySelectorAll('.scroll-reveal').forEach(function (el) {
                    observer.observe(el);
                });
            } else {
                // Fallback: show everything
                document.querySelectorAll('.scroll-reveal').forEach(function (el) {
                    el.classList.add('revealed');
                });
            }
        })();
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', runInit);
    } else {
        runInit();
    }
})();

function initializeProjectFilters() {
    const filters = document.querySelectorAll('.project-filters .filter-btn');
    const items = document.querySelectorAll('.projects-accordion .project-accordion-item');
    if (filters.length === 0 || items.length === 0) return;

    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            const filterValue = btn.getAttribute('data-filter');
            
            // Toggle active state on buttons
            filters.forEach(f => {
                f.classList.remove('active');
                f.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');

            // Collapse non-matching items to zero-width, keep matching items expanding smoothly
            items.forEach(item => {
                const category = item.getAttribute('data-category');
                const isMatch = filterValue === 'all' || category === filterValue;
                
                if (isMatch) {
                    item.classList.remove('is-collapsed-to-zero');
                } else {
                    item.classList.add('is-collapsed-to-zero');
                }
            });
        });
    });

    // --- Smooth JS-driven accordion hover ---
    let hoverTimer = null;
    let currentExpanded = null;

    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Clear any pending collapse
            if (hoverTimer) {
                clearTimeout(hoverTimer);
                hoverTimer = null;
            }

            // Skip if already expanded
            if (currentExpanded === item) return;

            // Small debounce to prevent rapid toggling when mouse crosses between items
            hoverTimer = setTimeout(() => {
                currentExpanded = item;
                items.forEach(other => {
                    if (other === item) {
                        other.classList.add('is-expanded');
                        other.classList.remove('is-contracted');
                    } else if (!other.classList.contains('is-collapsed-to-zero')) {
                        other.classList.remove('is-expanded');
                        other.classList.add('is-contracted');
                    }
                });
                hoverTimer = null;
            }, 60);
        });
    });

    // Single mouseleave on the container for clean reset
    const accordion = document.querySelector('.projects-accordion');
    if (accordion) {
        accordion.addEventListener('mouseleave', () => {
            if (hoverTimer) {
                clearTimeout(hoverTimer);
                hoverTimer = null;
            }
            currentExpanded = null;
            items.forEach(item => {
                item.classList.remove('is-expanded', 'is-contracted');
            });
        });
    }

    // Spotlight card mouse movement glow tracking
    const cards = document.querySelectorAll('.project-accordion-card');
    cards.forEach(card => {
        let rect = null;
        let updateRaf = null;

        card.addEventListener('pointerenter', () => {
            rect = card.getBoundingClientRect();
        }, { passive: true });

        card.addEventListener('pointerleave', () => {
            rect = null;
        }, { passive: true });

        card.addEventListener('mousemove', (e) => {
            if (updateRaf) return;
            if (!rect) rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            updateRaf = requestAnimationFrame(() => {
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
                updateRaf = null;
            });
        }, { passive: true });

        window.addEventListener('resize', () => { rect = null; }, { passive: true });
    });
}

// ==========================================================================
// 21) Interactive Console Dashboard for Areas of Expertise
// ==========================================================================
(function initExpertiseConsole() {
    const tabs = document.querySelectorAll('.console-nav .nav-item');
    const panels = document.querySelectorAll('.console-display .display-panel');
    const display = document.getElementById('expertise-display');
    
    if (!tabs.length || !display) return;

    // Define accent mappings for dynamic holographic coloring
    const accentColors = {
        software: { color: '#8b5cf6', rgb: '139, 92, 246', glow: 'rgba(139, 92, 246, 0.15)' },
        aiml: { color: '#f43f5e', rgb: '244, 63, 94', glow: 'rgba(244, 63, 94, 0.15)' },
        datasci: { color: '#10b981', rgb: '16, 185, 129', glow: 'rgba(16, 185, 129, 0.15)' }
    };

    // Tab Selection Logic
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            if (tab.classList.contains('active')) return;

            const discipline = tab.getAttribute('data-discipline');

            // Deactivate other tabs and panels
            tabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            panels.forEach(p => p.classList.remove('active'));

            // Activate current tab & panel
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            const targetPanel = document.getElementById(`panel-${discipline}`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }

            // Update Console custom properties
            const theme = accentColors[discipline];
            if (theme) {
                display.style.setProperty('--console-accent', theme.color);
                display.style.setProperty('--console-accent-rgb', theme.rgb);
                display.style.setProperty('--console-accent-glow', theme.glow);
            }
        });
    });

    // 3D Parallax Tilt and Mouse Spotlight Glow on the Screen Monitor
    let rect = null;
    let updateRaf = null;

    display.addEventListener('pointerenter', () => {
        rect = display.getBoundingClientRect();
    }, { passive: true });

    display.addEventListener('pointerleave', () => {
        rect = null;
        display.style.setProperty('--rx', '0deg');
        display.style.setProperty('--ry', '0deg');
    }, { passive: true });

    display.addEventListener('mousemove', (e) => {
        if (!rect) rect = display.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (updateRaf) return;

        updateRaf = requestAnimationFrame(() => {
            // Track spotlight glow coordinates
            display.style.setProperty('--mouse-x', `${x}px`);
            display.style.setProperty('--mouse-y', `${y}px`);

            // Compute pitch and yaw tilt angle values (max 8 degrees for clean display reading)
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const percentX = (x - centerX) / centerX;
            const percentY = (y - centerY) / centerY;

            const maxTilt = 8;
            const rx = -percentY * maxTilt;
            const ry = percentX * maxTilt;

            display.style.setProperty('--rx', `${rx}deg`);
            display.style.setProperty('--ry', `${ry}deg`);

            updateRaf = null;
        });
    }, { passive: true });

    window.addEventListener('resize', () => {
        rect = null;
    }, { passive: true });
})();

// Stream Paragraph Typing Animation
(function initParagraphStreaming() {
    const target = document.querySelector('.about-stream-paragraph');
    if (!target) return;

    const fullText = target.getAttribute('data-fulltext') || target.innerText;
    target.textContent = ''; // clear initially

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Small delay before typing starts
                setTimeout(startStreaming, 300);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    observer.observe(target);

    function startStreaming() {
        let charIdx = 0;
        const speed = 35; // Speed of typing characters in ms (35ms is smooth and natural)
        const timer = setInterval(() => {
            if (charIdx < fullText.length) {
                target.textContent += fullText[charIdx];
                charIdx++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }
})();



