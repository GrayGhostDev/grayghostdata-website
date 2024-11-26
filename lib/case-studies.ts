import { LucideIcon } from 'lucide-react';

type IconName = "Shield" | "Database" | "Code" | "Brain" | "Blocks" | "Lock" | "Zap" | "Cloud" | "Server";

interface CaseStudy {
  title: string;
  client: string;
  description: string;
  image: string;
  challenge: string;
  solution: string;
  results: string[];
  implementation: Array<{
    title: string;
    description: string;
    icon: IconName;
  }>;
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  technologies: string[];
  metrics: Array<{
    label: string;
    value: string;
    trend: "up" | "down";
  }>;
  service: string;
}

export const caseStudies: Record<string, CaseStudy> = {
  cybersecurity: {
    title: "Enterprise Security Transformation",
    client: "Global Investment Bank",
    description: "Implemented quantum-resistant encryption and AI-powered threat detection",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
    challenge: `The client faced increasing sophisticated cyber threats:
      - Advanced persistent threats
      - Zero-day vulnerabilities
      - Quantum computing risks
      - Regulatory compliance`,
    solution: `We implemented a comprehensive security solution:
      1. Quantum-Safe Encryption
         - Post-quantum algorithms
         - Hybrid cryptography
         - Key management
      2. AI Threat Detection
         - Machine learning models
         - Behavioral analytics
         - Real-time monitoring
      3. Security Operations
         - 24/7 SOC
         - Incident response
         - Threat hunting`,
    results: [
      "Prevented 150+ potential breaches",
      "Reduced false positives by 60%",
      "Achieved SOC 2 compliance",
      "$50B+ in daily transactions secured"
    ],
    implementation: [
      {
        title: "Security Assessment",
        description: "Comprehensive analysis of existing security infrastructure",
        icon: "Shield"
      },
      {
        title: "Quantum-Safe Implementation",
        description: "Deployment of post-quantum cryptography",
        icon: "Lock"
      },
      {
        title: "AI Integration",
        description: "Implementation of machine learning-based threat detection",
        icon: "Brain"
      }
    ],
    testimonial: {
      quote: "The security transformation has given us confidence in our ability to protect against future threats.",
      author: "Chief Information Security Officer",
      role: "CISO",
      company: "Global Investment Bank"
    },
    technologies: [
      "Post-Quantum Cryptography",
      "TensorFlow",
      "Kubernetes",
      "SIEM",
      "Zero Trust Architecture"
    ],
    metrics: [
      {
        label: "Threats Prevented",
        value: "150+",
        trend: "up"
      },
      {
        label: "False Positive Reduction",
        value: "60%",
        trend: "down"
      },
      {
        label: "Daily Transactions Secured",
        value: "$50B+",
        trend: "up"
      }
    ],
    service: "cybersecurity"
  },
  "data-analytics": {
    title: "Healthcare Analytics Platform",
    client: "National Healthcare Network",
    description: "Built real-time patient care optimization platform using advanced analytics",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    challenge: `The healthcare network needed to improve patient outcomes:
      - Delayed diagnoses
      - Inefficient resource allocation
      - Data silos
      - Compliance requirements`,
    solution: `We developed a comprehensive analytics platform:
      1. Real-time Analytics
         - Patient monitoring
         - Resource optimization
         - Predictive modeling
      2. Data Integration
         - EMR integration
         - IoT device data
         - Lab results
      3. AI Diagnostics
         - Disease prediction
         - Treatment optimization
         - Risk assessment`,
    results: [
      "45% faster diagnoses",
      "30% reduction in readmissions",
      "40% improvement in care outcomes",
      "$2M annual cost savings"
    ],
    implementation: [
      {
        title: "Data Integration",
        description: "Comprehensive integration of EMR, IoT, and lab data",
        icon: "Database"
      },
      {
        title: "Real-time Analytics",
        description: "Development of real-time patient monitoring and predictive modeling",
        icon: "Zap"
      },
      {
        title: "AI Diagnostics",
        description: "Implementation of machine learning-based disease prediction and treatment optimization",
        icon: "Brain"
      }
    ],
    testimonial: {
      quote: "The predictive analytics platform has revolutionized how we deliver patient care.",
      author: "Dr. Michael Roberts",
      role: "Chief Medical Officer",
      company: "National Healthcare Network"
    },
    technologies: [
      "Machine Learning",
      "Big Data Analytics",
      "HIPAA Compliance",
      "Real-time Processing",
      "Predictive Modeling",
      "Healthcare APIs"
    ],
    metrics: [
      {
        label: "Diagnosis Speed Improvement",
        value: "45%",
        trend: "up"
      },
      {
        label: "Patient Outcomes",
        value: "+40%",
        trend: "up"
      },
      {
        label: "Cost Reduction",
        value: "$2M+",
        trend: "down"
      }
    ],
    service: "data-analytics"
  },
  blockchain: {
    title: "Blockchain Supply Chain",
    client: "Global Logistics Corporation",
    description: "Developed blockchain-based asset tracking and verification system",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
    challenge: `The client needed end-to-end supply chain visibility:
      - Asset tracking inefficiencies
      - Counterfeit products
      - Manual verification processes
      - Limited transparency`,
    solution: `We implemented a blockchain-based solution:
      1. Asset Tracking
         - Real-time monitoring
         - IoT integration
         - Automated verification
      2. Smart Contracts
         - Automated compliance
         - Digital certificates
         - Proof of authenticity
      3. Analytics Dashboard
         - Performance metrics
         - Predictive analytics
         - Real-time reporting`,
    results: [
      "100% supply chain transparency",
      "Real-time asset tracking",
      "60% faster verification process",
      "$2M+ annual savings"
    ],
    implementation: [
      {
        title: "Blockchain Development",
        description: "Development of blockchain-based asset tracking and verification system",
        icon: "Blocks"
      },
      {
        title: "Smart Contract Implementation",
        description: "Implementation of smart contracts for automated compliance and digital certificates",
        icon: "Code"
      },
      {
        title: "Analytics Dashboard",
        description: "Development of analytics dashboard for real-time performance metrics and predictive analytics",
        icon: "Cloud"
      }
    ],
    testimonial: {
      quote: "The blockchain solution has given us unprecedented visibility into our supply chain.",
      author: "James Wilson",
      role: "VP of Operations",
      company: "Global Logistics Corporation"
    },
    technologies: [
      "Blockchain",
      "IoT",
      "Smart Contracts",
      "Real-time Analytics",
      "Digital Certificates",
      "Supply Chain Management"
    ],
    metrics: [
      {
        label: "Transparency",
        value: "100%",
        trend: "up"
      },
      {
        label: "Process Speed",
        value: "+60%",
        trend: "up"
      },
      {
        label: "Cost Savings",
        value: "$2M+",
        trend: "down"
      }
    ],
    service: "blockchain"
  },
  "cloud-security": {
    title: "Cloud Security Modernization",
    client: "Enterprise SaaS Provider",
    description: "Modernized cloud infrastructure with zero-trust security architecture",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    challenge: `The client needed to modernize their security:
      - Legacy infrastructure
      - Security vulnerabilities
      - Scaling issues
      - Performance bottlenecks`,
    solution: `We implemented a zero-trust architecture:
      1. Cloud Security
         - Identity management
         - Access control
         - Encryption
      2. Infrastructure
         - Containerization
         - Microservices
         - Auto-scaling
      3. DevSecOps
         - CI/CD pipeline
         - Security automation
         - Monitoring`,
    results: [
      "75% reduction in security incidents",
      "Zero data breaches",
      "40% lower cloud costs",
      "$5M+ annual savings"
    ],
    implementation: [
      {
        title: "Cloud Security Assessment",
        description: "Comprehensive analysis of existing cloud security infrastructure",
        icon: "Shield"
      },
      {
        title: "Zero-Trust Implementation",
        description: "Deployment of zero-trust security architecture",
        icon: "Lock"
      },
      {
        title: "DevSecOps",
        description: "Implementation of CI/CD pipeline and security automation",
        icon: "Server"
      }
    ],
    testimonial: {
      quote: "The zero-trust implementation has dramatically improved our security posture while reducing operational costs.",
      author: "Lisa Martinez",
      role: "Head of Cloud Operations",
      company: "Enterprise SaaS Provider"
    },
    technologies: [
      "Zero Trust",
      "Cloud Security",
      "DevSecOps",
      "Containerization",
      "Microservices",
      "Infrastructure as Code"
    ],
    metrics: [
      {
        label: "Security Incident Reduction",
        value: "75%",
        trend: "down"
      },
      {
        label: "Cost Savings",
        value: "40%",
        trend: "down"
      },
      {
        label: "Annual Savings",
        value: "$5M+",
        trend: "down"
      }
    ],
    service: "cloud-security"
  },
  "iot-security": {
    title: "Smart City Security",
    client: "Metropolitan Government",
    description: "Secured IoT infrastructure for city-wide smart systems",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80",
    challenge: `The city needed comprehensive IoT security:
      - Device management
      - Data protection
      - Infrastructure security
      - Real-time monitoring`,
    solution: `We implemented an IoT security platform:
      1. Device Security
         - Authentication
         - Encryption
         - Firmware updates
      2. Network Protection
         - Segmentation
         - Traffic analysis
         - Threat detection
      3. Data Management
         - Edge computing
         - Data privacy
         - Analytics`,
    results: [
      "100% IoT device visibility",
      "90% faster threat response",
      "30% energy savings",
      "$1M+ annual savings"
    ],
    implementation: [
      {
        title: "IoT Security Assessment",
        description: "Comprehensive analysis of existing IoT security infrastructure",
        icon: "Shield"
      },
      {
        title: "Device Security Implementation",
        description: "Deployment of device security measures",
        icon: "Lock"
      },
      {
        title: "Network Protection",
        description: "Implementation of network protection measures",
        icon: "Server"
      }
    ],
    testimonial: {
      quote: "Gray Ghost's IoT security solution has been instrumental in making our smart city initiative a success.",
      author: "David Park",
      role: "Smart City Director",
      company: "Metropolitan Government"
    },
    technologies: [
      "IoT Security",
      "Edge Computing",
      "AI Analytics",
      "Network Security",
      "Data Privacy",
      "Real-time Monitoring"
    ],
    metrics: [
      {
        label: "Devices Secured",
        value: "100%",
        trend: "up"
      },
      {
        label: "Threat Response Time",
        value: "90%",
        trend: "down"
      },
      {
        label: "Energy Savings",
        value: "30%",
        trend: "down"
      }
    ],
    service: "iot-security"
  },
  "custom-development": {
    title: "Enterprise Trading Platform",
    client: "Global Investment Firm",
    description: "Built high-frequency trading system with microsecond latency",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
    challenge: `The client needed a high-performance trading platform:
      - Ultra-low latency
      - High reliability
      - Real-time analytics
      - Regulatory compliance`,
    solution: `We developed a custom trading solution:
      1. Core Platform
         - FPGA acceleration
         - Custom protocols
         - Memory optimization
      2. Analytics Engine
         - Real-time processing
         - ML-based predictions
         - Risk management
      3. Infrastructure
         - Global deployment
         - Redundancy
         - Monitoring`,
    results: [
      "Microsecond latency achieved",
      "1M+ trades per day",
      "99.999% uptime",
      "$10B+ daily volume"
    ],
    implementation: [
      {
        title: "Trading Platform Development",
        description: "Development of high-frequency trading platform",
        icon: "Code"
      },
      {
        title: "FPGA Acceleration",
        description: "Implementation of FPGA acceleration for ultra-low latency",
        icon: "Server"
      },
      {
        title: "Analytics Engine",
        description: "Development of real-time analytics engine",
        icon: "Zap"
      }
    ],
    testimonial: {
      quote: "The custom trading platform has given us a significant competitive advantage in the market.",
      author: "Alex Zhang",
      role: "Head of Trading Technology",
      company: "Global Investment Firm"
    },
    technologies: [
      "FPGA",
      "Custom Hardware",
      "Low Latency",
      "Machine Learning",
      "Real-time Analytics",
      "High Availability"
    ],
    metrics: [
      {
        label: "Trading Latency",
        value: "<1ms",
        trend: "down"
      },
      {
        label: "Daily Volume",
        value: "$10B+",
        trend: "up"
      },
      {
        label: "System Uptime",
        value: "99.999%",
        trend: "up"
      }
    ],
    service: "custom-development"
  }
};