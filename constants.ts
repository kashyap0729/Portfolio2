import type { Experience, Project, Education, SkillCategory, Testimonial, Publication, ProjectCategory } from './types';
import { ProjectCategoryEnum } from './types';

export const PROFILE = {
    name: 'Rama Chandra Kashyap Mamidipalli',
    title: 'Software Engineer',
    email: 'kashyapmrc@gmail.com',
    linkedin: 'https://www.linkedin.com/in/kashyapmrc/',
    github: 'https://github.com/kashyap0729',
    portfolio: 'https://kashyap0729.github.io/portfolio/',
    phone: '(508) 657-4350'
};

export const ABOUT_ME = [
    "Hi, I’m Kashyap :)  I build robust, scalable software systems. As a Software Engineer with over four years of experience, I specialize in the full development lifecycle, from system design and architecture to implementation and deployment. My background spans Python, Java, SQL, and modern cloud technologies, giving me a strong foundation in both backend services and data-intensive applications. I’ve engineered microservices, led complex data migrations, and built automated CI/CD pipelines that improve performance and accelerate release cycles—always with a focus on writing clean, maintainable, and efficient code.",
    "Beyond my professional roles, I'm driven by a passion for continuous learning and building. I enjoy diving into new technologies and have developed AI-driven prototypes, including a chatbot fine-tuned with Text-to-SQL and a custom image generation model. I've also explored end-to-end distributed systems using tools like Airflow, Kafka, and PySpark on AWS. For me, software engineering is about solving complex problems with elegant solutions that are built to last."
];


export const EXPERIENCES: Experience[] = [
  {
    role: 'Software Engineer (Data Backend)',
    company: 'Value Momentum',
    duration: 'Apr 2024 – Mar 2025',
    location: 'Piscataway, NJ',
    points: [
      'Architected and scaled dbt-based ELT pipelines in Snowflake, processing over 2TB of daily financial data to serve critical business intelligence dashboards, reducing end-to-end data latency by 32%.',
      'Engineered a Python-based data quality framework using Great Expectations and custom dbt tests, increasing data reliability by 40% and ensuring 100% compliance with regulatory reporting standards.',
      'Re-architected a high-throughput, event-driven data ingestion system using Kafka, optimizing consumer group configuration to slash p99 ingestion latency from 500ms to 150ms (a 70% reduction).',
      'Automated the entire software delivery lifecycle using a Jenkins-based CI/CD pipeline, deploying services to AWS EC2 and reducing manual deployment time from hours to minutes.'
    ]
  },
  {
    role: 'Software Engineer (Backend Data Migration)',
    company: 'Value Momentum',
    duration: 'Dec 2020 – Jun 2023',
    location: 'Piscataway, NJ',
    points: [
      'Developed and optimized core backend microservices in Java Spring Boot for a customer portal serving 500,000+ users, decreasing p99 API response times by 40%.',
      'Led the zero-downtime migration of 10TB of critical customer data from a legacy SQL database to MongoDB, achieving a 25% reduction in annual infrastructure and licensing costs.',
      'Engineered a ’Smart Mastering’ algorithm for customer data de-duplication, leveraging phonetic matching to boost accuracy by 65%, saving $50K annually in reduced overhead.',
      'Designed high-throughput asynchronous data pipelines using Kafka to decouple microservices, handling 10,000+ events per second during peak loads.'
    ]
  },
  {
    role: 'SQL Developer (Query Optimization, Report Automation)',
    company: 'Ridhan Technologies',
    duration: 'May 2020 – Nov 2020',
    location: 'Hyderabad, India',
    points: [
      'Refactored and optimized critical SQL queries using execution plan analysis, reducing average query time by 39% and directly improving application responsiveness.',
      'Developed and deployed automated SQL scripts to generate 15+ weekly business reports, eliminating 8 hours of manual work per week.',
      'Collaborated with business analysts on data integrity issues, implementing new validation rules that increased report accuracy by over 20%.'
    ]
  }
];

const ALL_PROJECTS: Project[] = [
  {
    title: 'Fine-Tuning a Latent Diffusion Model for Naruto-Style Art',
    category: ProjectCategoryEnum.AI,
    description: 'Fine-tuned Stable Diffusion v1.5 to generate Naruto-style images from text prompts. Optimized by updating only the U-Net component and built a Streamlit app for an intuitive user interface.',
    skills: ['Stable Diffusion', 'Fine-Tuning', 'PyTorch', 'Hugging Face', 'Streamlit', 'LDM'],
    links: {github: 'https://github.com/kashyap0729/Latent-Diffusion-Model-of-Modern-Disney-to-Naruto'}
  },
  {
    title: 'Fine-Tuning LLMs for Text-to-SQL Generation',
    category: ProjectCategoryEnum.AI,
    description: 'Fine-tuned LLaMA 3 and DeepSeek-R1 models on synthetic data from GretelAI to convert natural language queries into SQL. Deployed the optimized models for local inference using Ollama.',
    skills: ['LLM Fine-Tuning', 'Text-to-SQL', 'LLaMA 3', 'GretelAI', 'Ollama'],
    links: {github: 'https://github.com/kashyap0729/TextToSQL-Finetune'}
  },
  {
    title: 'LangChain RAG Demonstration',
    category: ProjectCategoryEnum.AI,
    description: 'An example application demonstrating LangChain for building applications powered by language models, specifically focusing on Retrieval-Augmented Generation (RAG) with structured input/output parsing.',
    skills: ['LangChain', 'RAG', 'LLM', 'Python', 'Output Parsing'],
    links: {}
  },
  {
    title: 'Airbnb Data Pipeline & MCP-Enabled Analytics',
    category: ProjectCategoryEnum.DataEngineer,
    duration: 'Mar 2025 - Apr 2025',
    description: 'Built an end-to-end pipeline from S3 to Snowflake using dbt, with SCD Type 2 snapshots. Orchestrated runs with Dagster and created dashboards in Preset for analytics on host activity and pricing trends.',
    skills: ['dbt', 'Dagster', 'Snowflake', 'AWS S3', 'Great Expectations', 'Preset'],
    links: { github: 'https://github.com/kashyap0729/Airbnb-Analytics-with-DBT-Data-Build-Tool' }
  },
  {
    title: 'AutoMACE: AI Marketing Content Engine',
    category: ProjectCategoryEnum.AI,
    duration: 'Sep 2025',
    description: 'A platform designed to empower marketers and creators to rapidly generate high-quality, AI-powered marketing content and video ads, automating the creative process from ideation to asset generation.',
    skills: ['Google Gemini', 'ElevenLabs', 'AI/ML', 'Content Generation'],
    links: { github: 'https://github.com/kashyap0729/automace-ai-marketing-content-engine' }
  },
  {
    title: 'AI Chatbot: Sentiment-Aware RAG',
    category: ProjectCategoryEnum.DataEngineer,
    duration: 'Jan 2025 - Mar 2025',
    description: 'Developed an AI chatbot to enhance customer support by retrieving insights from documentation. Fine-tuned with Snowflake Cortex and Mistral Large 2 to extract customer sentiment and identify praised menu items.',
    skills: ['Snowflake Cortex', 'RAG', 'LLM', 'Fine-Tuning', 'Vector Search', 'Streamlit'],
    links: {github: 'https://github.com/kashyap0729/FoodTruckAgent'}
  },
  {
    title: 'Predicting Star Classification',
    category: ProjectCategoryEnum.DataEngineer,
    duration: 'Jan 2024 - Apr 2024',
    description: 'Analyzed Hipparcos satellite data to predict whether stars are classified as Dwarf or Giant. Employed various machine learning models and used SHAP for model interpretability.',
    skills: ['Machine Learning', 'Data Science', 'Pandas', 'Scikit-learn', 'Shap Analysis'],
    links: { github: 'https://github.com/kashyap0729/DataScience/blob/main/DSEM_Full_Report.ipynb'}
  },
  {
    title: 'Binary MNIST classification using QCNN',
    category: ProjectCategoryEnum.QuantumComputing,
    duration: 'Jan 2024 - May 2024',
    description: 'Developed a Quantum Neural Network (QNN) integrated with a Streamlit interface for Quantum Machine Learning (QML) applications, making quantum-enhanced algorithms more accessible.',
    skills: ['Quantum Computing', 'Qiskit', 'PyTorch', 'CNN', 'Streamlit', 'QML'],
    links: { github: 'https://github.com/kashyap0729/Quantum_Machine_Learning' }
  },
  {
    title: 'Vivid Vibes - Event Management',
    category: ProjectCategoryEnum.FullStack,
    duration: 'Nov 2023 - Dec 2023',
    description: 'A full-stack MERN event management website. Features a mobile-friendly UI, MVC architecture, payment gateway integration, data consistency, and session management.',
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN', 'E-Commerce'],
    links: { github: 'https://github.com/kashyap0729/VividVibesProject'}
  },
  {
    title: 'The Cornetto Trilogy Fan Page',
    category: ProjectCategoryEnum.FullStack,
    description: 'A full-stack web application celebrating "The Cornetto Trilogy" films. Features a React frontend and an Express.js backend for user authentication and content management.',
    skills: ['React', 'Express.js', 'Node.js', 'Authentication'],
    links: { github: 'https://github.com/kashyap0729/CornettoTrio'}
  },
  {
    title: 'Super Kung-Fu Kitty',
    category: ProjectCategoryEnum.FullStack,
    description: 'A 2D platformer web-based game developed using Unity and C#. The game mechanics involve dodging falling objects and collecting coins. Deployed using WebGL.',
    skills: ['Unity', 'C#', 'WebGL', 'Game Development'],
    links: { live: 'https://simmer.io/@kashyap0729/super-kung-fu-kitty'}
  },
  {
    title: 'Communication Ecosystem Platform',
    category: ProjectCategoryEnum.FullStack,
    duration: 'Nov 2023 - Dec 2023',
    description: 'A Java-based platform enabling a collaborative ecosystem to connect NGOs, hospitals, and government agencies to provide comprehensive services to the needy, using DB4O and Bcrypt.',
    skills: ['Java', 'DB4O', 'Bcrypt', 'Software Development'],
    links: { github: 'https://github.com/kashyap0729/EcoSystem'}
  },
   {
    title: 'UI/UX: Amazon Connect',
    category: ProjectCategoryEnum.UIUX,
    description: 'A social commerce platform concept integrating live product discussions, influencer recommendations, and real-time shopping events to make online shopping more interactive and engaging.',
    skills: ['UI/UX Design', 'Figma', 'User Research'],
    links: { other: 'https://kashyapmrc.framer.website/' }
  },
  {
    title: 'UI/UX: Detox Quest',
    category: ProjectCategoryEnum.UIUX,
    description: 'A gamified app designed to help users reduce screen time. Promotes mindful tech habits through personalized challenges, progress tracking, and a rewarding user experience.',
    skills: ['UI/UX Design', 'Figma', 'Gamification', 'Mobile App Design'],
    links: { other: 'https://kashyap-detox-quest.framer.website/' }
  },
];


export const PROJECT_CATEGORIES: ProjectCategory[] = Object.values(ProjectCategoryEnum).map(categoryName => ({
    name: categoryName,
    projects: ALL_PROJECTS.filter(p => p.category === categoryName)
})).filter(c => c.projects.length > 0);


export const SKILLS: SkillCategory[] = [
    {
        name: "Languages & Frameworks",
        skills: ["Python", "Java", "SQL", "JavaScript", "TypeScript", "C++", "React", "Node.js", "Spring Boot", "Streamlit", "HTML5", "CSS3"]
    },
    {
        name: "Backend & Databases",
        skills: ["Kafka", "ETL/ELT", "MarkLogic", "MongoDB", "MySQL", "Elasticsearch", "Redis"]
    },
    {
        name: "Cloud & DevOps",
        skills: ["AWS (S3, EMR, Glue)", "Docker", "Terraform", "CI/CD", "GitHub Actions", "Jenkins", "Databricks"]
    },
    {
        name: "AI, ML & Data Tools",
        skills: ["PySpark", "Pandas", "dbt", "Dagster", "Airflow", "Snowflake", "MLflow", "Scikit-learn", "TensorFlow", "PyTorch", "RAG", "LLM Fine-Tuning"]
    }
];

export const EDUCATIONS: Education[] = [
    {
        institution: 'Northeastern University',
        degree: 'Master of Science, Information Systems',
        duration: 'Sep 2023 – May 2025',
        gpa: '3.6/4.0',
        details: ['Coursework: Web Technologies, Quantum Computing, Generative AI, C++, Parallel Machine Learning and AI']
    },
    {
        institution: 'GITAM Deemed University',
        degree: 'Bachelor of Technology, Computer Science',
        duration: 'Jun 2016 – Jun 2020',
        gpa: '3.5/4.0',
        details: ['Coursework: System Design, Networking, Data Structures and Algorithms']
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "Kashyap has been an invaluable member of our development team at ValueMomentum. He has consistently demonstrated exceptional skills, enthusiasm, and dedication. His ability to learn quickly and adapt to new technologies has significantly contributed to the success of our projects. His technical expertise, collaborative spirit, and strong work ethic make him an asset to any development team. I am confident that he will continue to excel in his career and make significant contributions wherever he goes.",
        author: "Kishan Das",
        role: "Marklogic || XQuery || ETL( Informatica) || Unix || SQL",
        context: "October 31, 2023, Kishan managed Rama Chandra Kashyap directly"
    },
    {
        quote: "I have had the privilege of collaborating with Kashyap during the development of our game, 'Super Kung Fu Kitty,' and I can confidently attest to his remarkable talent and his exceptional problem-solving abilities. Kashyap possesses a unique and creative approach to problem-solving that truly sets him apart. He has an uncanny ability to think 'out of the box,' consistently coming up with innovative and effective solutions to the challenges we encountered.",
        author: "Srikanth Ganti",
        role: "MS CS Student at University of Florida",
        context: "October 19, 2023, Srikanth worked with Rama Chandra Kashyap on the same team"
    }
];

export const PUBLICATIONS: Publication[] = [
    {
        title: "QKD Algorithm BB84 Protocol in Qiskit",
        journal: "IRJET",
        date: "Aug 18, 2020",
        link: "https://www.irjet.net/archives/V7/i8/IRJET-V7I8438.pdf",
        description: "Most of the encryption standards use keys for enciphering. The transmission of these keys will be exploited once a quantum computer shapes up. These keys can be transferred using QKD(Quantum Key Distribution) which cannot be cracked easily by any eavesdropper and also spots them."
    },
    {
        title: "Message Encryption using Hybrid Cryptography",
        journal: "IRJET",
        date: "Jan 12, 2020",
        link: "https://www.irjet.net/archives/V7/i1/IRJET-V7I168.pdf",
        description: "Encryption became important while transferring a message. To transfer secured messages we need different encryption standards. We have built a hybrid encryption model by combining AES (Advanced Encryption Standard) and Triple DES(Data Encryption Standard)."
    }
];