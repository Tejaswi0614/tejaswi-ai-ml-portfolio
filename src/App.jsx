import "./App.css";

function App() {
  const linkedInUrl = "https://www.linkedin.com/in/tejaswi-reddy-vallapu-375ab4395/";
  const githubUrl = "https://github.com/Tejaswi0614";
  const resumeUrl = "/Tejaswi_Reddy_Vallapu_Resume.pdf";

  const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "50M+", label: "Records Processed Daily" },
    { value: "200+", label: "Datasets Connected" },
    { value: "60%", label: "Review Time Reduced" }
  ];

  const projects = [
    {
      title: "Intelligent Financial Document Analyzer",
      type: "RAG + Document AI",
      stack: "LangChain · FAISS · FastAPI · Docker · RAG Evaluation",
      desc: "Built a financial document intelligence system with semantic retrieval, entity extraction, hallucination reduction, and RAG evaluation.",
      link: "https://github.com/Tejaswi0614/intelligent-financial-document-analyzer.git"
    },
    {
      title: "Real-Time Fraud Detection System",
      type: "Streaming ML",
      stack: "Kafka · PySpark · XGBoost · FastAPI",
      desc: "Designed a transaction monitoring pipeline for fraud scoring using behavioral features, anomaly detection, and low-latency APIs.",
      link: "https://github.com/Tejaswi0614/real-time-fraud-detection-system.git"
    },
    {
      title: "Multi-Model AI Retrieval System",
      type: "Text + Image Search",
      stack: "CLIP · FAISS · Sentence Transformers · BM25",
      desc: "Created a unified semantic retrieval system for text and image search using embeddings, vector search, hybrid retrieval, and re-ranking.",
      link: "https://github.com/Tejaswi0614/multi-model-ai-retrieval-system.git"
    },
    {
      title: "MLOps Pipeline for Credit Risk Prediction",
      type: "Production ML",
      stack: "MLflow · XGBoost · Docker · FastAPI",
      desc: "Built an ML pipeline for credit-risk prediction with preprocessing, model training, experiment tracking, model versioning, and deployment.",
      link: "https://github.com/Tejaswi0614/credit-risk-mlops.git"
    },
    {
      title: "Time-Series Forecasting",
      type: "Forecasting + Deep Learning",
      stack: "ARIMA · Prophet · LSTM · Python",
      desc: "Constructed forecasting models for climate and financial datasets using statistical and deep learning methods with feature engineering, stationarity analysis, and walk-forward validation.",
      link: "https://github.com/Tejaswi0614/ai-time-series-forecasting-dashboard-v2.git"
    }
  ];

  const skillGroups = [
  {
    title: "Generative AI & LLMs",
    skills: [
      "OpenAI GPT-4/4o",
      "Azure OpenAI",
      "Claude",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "AutoGen",
      "CrewAI",
      "RAG",
      "Prompt Engineering",
      "Agentic AI",
      "AI Evaluations",
      "Hallucination Reduction",
      "Gradio",
      "Hugging Face Transformers"
    ]
  },
  {
    title: "Machine Learning & Deep Learning",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "OpenCV",
      "NLP",
      "Deep Learning",
      "Time-Series Forecasting",
      "LSTM",
      "SHAP",
      "LIME",
      "Federated Learning",
      "CUDA",
      "CLIP",
      "ARIMA",
      "Prophet"
    ]
  },
  {
    title: "Vector Databases & Semantic Search",
    skills: [
      "FAISS",
      "Pinecone",
      "ChromaDB",
      "Sentence Transformers",
      "Semantic Search",
      "Embeddings",
      "CrossEncoder Re-ranking",
      "BM25",
      "CLIP Embeddings"
    ]
  },
  {
    title: "Cloud & MLOps",
    skills: [
      "Azure ML",
      "Databricks",
      "AWS SageMaker",
      "Docker",
      "Kubernetes",
      "MLflow",
      "Azure Data Factory",
      "Delta Lake",
      "Kafka",
      "CI/CD Pipelines",
      "Experiment Tracking",
      "Model Monitoring",
      "Azure Event Hubs",
      "PySpark"
    ]
  },
  {
    title: "Backend Engineering & Infrastructure",
    skills: [
      "FastAPI",
      "Flask",
      "REST APIs",
      "gRPC",
      "Git",
      "Linux",
      "Async APIs",
      "Microservices",
      "Event-Driven Systems",
      "Snowflake"
    ]
  },
  {
    title: "Languages & Data Tools",
    skills: [
      "Python",
      "C/C++",
      "Java",
      "R",
      "SQL",
      "Shell",
      "JavaScript",
      "Pandas",
      "NumPy",
      "Jupyter"
    ]
  }
  ];

  const experience = [
  {
    company: "JP Morgan Chase & Co.",
    role: "Machine Learning Engineer",
    period: "Jul 2025 – Present",
    link: "https://www.jpmorganchase.com/",
    desc: "Built AI-driven financial analytics, RAG systems, fraud detection models, Azure ML pipelines, Databricks workflows, and real-time ML microservices."
  },
  {
    company: "MetLife",
    role: "Machine Learning Engineer Intern",
    period: "Dec 2024 – Apr 2025",
    link: "https://www.metlife.com/",
    desc: "Designed insurance claims risk-scoring models, automated preprocessing pipelines, and deployed FastAPI plus Docker inference services."
  },
  {
    company: "Accenture",
    role: "ML Engineer / Associate Software Engineer",
    period: "Jan 2023 – Jun 2023",
    link: "https://www.accenture.com/in-en",
    desc: "Worked on Snowflake analytics, forecasting models, BI summarization, and revenue intelligence workflows."
  },
  {
    company: "LTI Mindtree",
    role: "Machine Learning Engineer",
    period: "Dec 2020 – Dec 2022",
    link: "https://www.ltm.com/",
    desc: "Built climate analytics and time-series forecasting systems using LSTM, PyTorch, TensorFlow, CUDA, and AWS SageMaker."
  }
  ];

  return (
    <main className="portfolio">
      <header className="hero" id="home">
        <nav className="navbar">
          <a href="#home" className="logoBox">
            <span className="logoIcon">✦</span>
            <div>
              <h3>Tejaswi</h3>
              <p>AI / ML Portfolio</p>
            </div>
          </a>

          <div className="navLinks">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="downloadBtn">Contact</a>
        </nav>

        <section className="heroBanner">
          <div className="heroLeftContent">
            <p className="heroSmallText">Generative AI · RAG · MLOps · Financial AI</p>

            <h1>
              Tejaswi Reddy
              <span>Vallapu</span>
            </h1>

            <h2>I’m an AI / ML Engineer</h2>

            <p className="heroDesc">
              Building production-ready AI systems for RAG pipelines, fraud detection,
              credit-risk modeling, document intelligence, time-series forecasting,
              and scalable MLOps workflows.
            </p>

            <div className="heroButtons">
              <a href="#projects">View Projects</a>
              <a href="#about">About Tejaswi</a>
            </div>
          </div>

          <div className="heroRightVisual">
            <div className="orangeBlock"></div>

            <div className="avatarCard">
              <div className="avatarCircle">
                <span>AI</span>
              </div>

              <div className="avatarText">
                <h3>Production AI Systems</h3>
                <p>Azure ML · LangChain · FastAPI · Docker</p>
              </div>
            </div>

            <div className="floatingTag tagOne">RAG</div>
            <div className="floatingTag tagTwo">MLOps</div>
            <div className="floatingTag tagThree">FastAPI</div>
            <div className="floatingTag tagFour">Azure ML</div>
          </div>

          <div className="heroBigText">AI/ML</div>
        </section>
      </header>

      <section className="introSection" id="about">
        <div className="introLeft">
          <p className="mutedTitle">HELLO</p>
          <h2>I’M TEJASWI</h2>
          <p>
            Machine Learning Engineer focused on building production-ready AI systems,
            RAG pipelines, fraud detection models, credit-risk solutions, financial
            document intelligence platforms, time-series forecasting models, and scalable
            MLOps workflows.
          </p>

          <div className="statsGrid">
            {stats.map((item) => (
              <div className="statItem" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="introRight">
          <div className="profilePanel">
            <div className="panelTop">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <h3>Production ML Snapshot</h3>

            <div className="progressItem">
              <div>
                <p>Model Precision</p>
                <strong>+25%</strong>
              </div>
              <div className="progressBar">
                <span></span>
              </div>
            </div>

            <div className="miniGrid">
              <div>
                <h4>RAG</h4>
                <p>200+ datasets</p>
              </div>
              <div>
                <h4>ETL</h4>
                <p>50M+ records/day</p>
              </div>
              <div>
                <h4>API</h4>
                <p>FastAPI + Docker</p>
              </div>
              <div>
                <h4>MLOps</h4>
                <p>Azure ML + MLflow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section experienceSection" id="experience">
        <p className="sectionTag">Career Timeline</p>
        <h2>Professional Experience</h2>

        <div className="timeline">
          {experience.map((item) => (
            <article className="timelineCard" key={item.company}>
              <div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="companyLink"
                >
                  {item.company}
                </a>
                <span>{item.period}</span>
              </div>
              <h4>{item.role}</h4>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section projectsSection" id="projects">
        <p className="sectionTag">Selected Work</p>
        <h2>Featured AI / ML Projects</h2>

        <div className="projectGrid">
          {projects.map((project, index) => (
            <article className="projectCard" key={project.title}>
              <span className="projectNumber">0{index + 1}</span>
              <p className="projectType">{project.type}</p>
              <h3>{project.title}</h3>
              <h4>{project.stack}</h4>
              <p>{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="caseStudyBtn"
              >
                View Case Study
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section skillsSection" id="skills">
        <p className="sectionTag">Technical Stack</p>
        <h2>Tools & Technologies</h2>

        <div className="skillsGroupGrid">
          {skillGroups.map((group) => (
            <div className="skillGroupCard" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skillsWrap">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="systemSection">
        <div>
          <p className="sectionTag">System Design</p>
          <h2>How I Build AI Systems</h2>
        </div>

        <div className="systemGrid">
          <div>
            <span>01</span>
            <h3>Data Layer</h3>
            <p>Azure Data Factory, Kafka, PySpark, Snowflake, Delta Lake, and large-scale ETL pipelines.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Model Layer</h3>
            <p>XGBoost, PyTorch, TensorFlow, Transformers, LSTM, SHAP, LIME, and model validation.</p>
          </div>
          <div>
            <span>03</span>
            <h3>AI App Layer</h3>
            <p>LangChain, RAG, FAISS, vector search, FastAPI, REST APIs, and prompt optimization.</p>
          </div>
          <div>
            <span>04</span>
            <h3>MLOps Layer</h3>
            <p>Docker, Kubernetes, Azure ML, MLflow, AWS SageMaker, monitoring, and CI/CD workflows.</p>
          </div>
        </div>
      </section>

      <section className="contactSection" id="contact">
        <p className="sectionTag">Contact</p>

        <p>Email: tejaswi.vallapu@outlook.com</p>
        <p>Phone: +1 (214) 795-8906</p>
        <p>Location: Denton, Texas, USA</p>

        <div className="contactButtons">
          <a href={linkedInUrl} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
          <a href={resumeUrl} download="Tejaswi_Reddy_Vallapu_Resume.pdf">Download Resume</a>
        </div>
      </section>

      <footer>
        <p>© 2026 Tejaswi Reddy Vallapu · AI / ML Engineering Portfolio</p>
      </footer>
    </main>
  );
}

export default App;