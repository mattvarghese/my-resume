import type { Resume } from './types';

export const resumeData: Resume = {
  person: {
    name: "Matt | Varghese Mathew",
    title: "Software Systems Architect",
    summary: "Software Systems Architect with 20 years of experience designing large-scale interoperable platforms. Delivered Epic's HL7 FHIR-based CMS 2027 regulatory implementation, standardizing health plan prior authorization workflows for hundreds of customers. Recognized for transforming fragmented integrations into unified, scalable platforms through deep domain expertise and rigorous system design.",
    connections: {
      email: "Ask Me || DM me on LinkedIn",
      phone: "Ask Me || DM me on LinkedIn",
      location: "Madison, WI",
      linkedIn: "https://www.linkedin.com/in/matt-varghese",
      github: "https://github.com/mattvarghese"
    },
    skillSet: {
      groups: [
        {
          group: "Architecture & Infrastructure",
          skills: ["SDLC", "Distributed Systems", "Microservices", "Azure", "CI/CD", "Docker", "Virtualization", "Hadoop", "Maintainable Architecture"]
        },
        {
          group: "Engineering Stack",
          skills: ["TypeScript", "React", "Web API", "Node", ".NET/C#", "Git & SVN", "SQL & NoSQL", "Linux & Windows"]
        },
        {
          group: "Interoperability & Standards",
          skills: ["HL7 FHIR", "SMART on FHIR", "CDS Hooks", "CRD/DTR/PAS", "ANSI X12 278", "OAuth2", "JSON/JWT/JWK"]
        },
        {
          group: "Specialized Expertise",
          skills: ["LLM API Integration", "Agentic Workflows", "Network Architecture & Routing"]
        }
      ]
    },
    jobs: [
      {
        company: "Epic - Verona, WI",
        title: "Software Systems Architect, Health Plans",
        timeFrame: "March 2021 - Present",
        summary: "Architect for Epic's HL7 FHIR-based CMS 2027 regulatory platform, defining how health plans implement real-time prior authorization workflows using HL7 CRD, DTR, and PAS standards. Systems adopted by hundreds of Epic customers, transforming authorization turnaround from days to near real-time.",
        experiences: [
          {
            title: "Led architecture and delivery",
            detail: "of Epic's payer interoperability platform for CMS 2027, collaborating with internal teams, HL7 Da Vinci workgroups, and external vendors to refine and operationalize evolving standards."
          },
          {
            title: "Established a unified \"source of truth\" for prior authorization requirements,",
            detail: "eliminating fragmentation across 12+ product modules and reducing new development lead time by ~80%."
          },
          {
            title: "Architected standardized data models and execution frameworks",
            detail: "to replace inconsistent one-off implementations, significantly improving maintainability and cross-team scalability."
          },
          {
            title: "Modernized Medical Necessity guideline integrations (MCG, InterQual)",
            detail: "using SMART on FHIR single sign-on, enabling real-time clinical decision workflows and reducing integration defects by ~60%."
          },
          {
            title: "Built internal simulation and testing frameworks",
            detail: "to emulate third-party systems, enabling end-to-end workflow validation, proactively eliminating defects, and accelerating partner onboarding."
          }
        ]
      },
      {
        company: "Epic - Verona, WI",
        title: "Senior Software Systems Developer, Clinical Informatics",
        timeFrame: "August 2010 - March 2021",
        summary: "Architect for mission-critical clinical decision support integrations and mobile infrastructure. Directed adoption of modern FHIR-based clinical decision support standards and pioneered Epic's first high-availability cloud service on Azure.",
        experiences: [
          {
            title: "Architect of Epic's high-availability mobile push notifications platform,",
            detail: "routing millions of weekly notifications via APNS and GCM. Oversaw deployment as one of Epic's first Azure-native production services, reducing operational costs by over 90%."
          },
          {
            needPadding: true,
            title: "Centralized 3rd-party web application integration frameworks",
            detail: "across the enterprise to improve security and maintainability. Developed a suite of validation tools for Content Security Policy (CSP), CORS, and Web Messaging APIs."
          },
          {
            title: "Architected Epic's clinical decision support (CDS) web services",
            detail: "leveraging HL7 FHIR, CDS Hooks, and CDA standards. Redesigned configuration models to align with clinical mental models and implemented efficacy feedback loops for providers."
          },
          {
            title: "Recognized as a Subject Matter Expert",
            detail: "in Web App Security and RESTful integrations at Epic, providing technical oversight for cross-application security standards and third-party vendor onboarding."
          }
        ]
      },
      {
        company: "University of Wisconsin - Madison, WI",
        title: "Research Assistant, Condor Distributed Computing",
        timeFrame: "Sept 2008 - May 2010",
        summary: "Virtualized Condor jobs with VMware achieving deterministic runtime environments.",
        experiences: []
      },
      {
        company: "Cisco Systems - Bangalore, India",
        title: "Software Engineer, Enterprise Routing",
        timeFrame: "June 2006 - July 2008",
        summary: "Platform engineering and configuration tooling for Cisco's enterprise class routers.",
        experiences: []
      }
    ],
    involvement: [
      {
        ItemTitle: "HL7 FHIR Connectathons",
        Description: "Developed prototypes of HL7 specifications in collaboration with participants from other vendors to improve interoperability."
      },
      {
        ItemTitle: "HL7 Da Vinci Burden Reduction",
        Description: "Represented Epic on public calls steering development of standards to reduce administrative burden in Prior Authorization."
      },
      {
        ItemTitle: "HL7 CDS Hooks and SMART on FHIR",
        Description: "Contributed to HL7 CDS Hooks and HL7 SMART Web Messaging specifications to enhance workflow integration and security."
      },
      {
        ItemTitle: "Epic App Orchard Conferences",
        Description: "Presented on CDS Hooks and CDS web service integration capabilities to educate and onboard third-party vendors."
      },
      {
        ItemTitle: "Epic Recruitment",
        Description: "Represented Epic at university career fairs and conducted candidate interviews to attract top talent to Epic."
      }
    ],
    projects: [
      {
        title: "FHIR-based AI Assistant",
        description: [
          "Integrate LLM APIs with electronic patient health record for agentic use-cases.",
          "LLM chat web app answers provider and patient questions using real FHIR data.",
          "Can be leveraged for AI driven forms, clinical decision support, care delivery, etc."
        ],
        timeFrame: "2025 Q2",
        url: ""
      },
      {
        title: "JSON Parser for M/Caché",
        description: [
          "Spotlights long-term vision in creating powerful generic reusable tooling.",
          "RFC 8259 compliant JSON Serializer and Deserializer for ANSI-M/Caché.",
          "Over 30 of Epic's database AI integrations leverage this serializer and deserializer."
        ],
        timeFrame: "2020",
        url: ""
      },
      {
        title: "Web Based SSH Client",
        description: [
          "Non-traditional solution for real world cost reduction avoiding remote-app licenses for moderated shell / text access to servers.",
          "Proof of concept fully browser-based SSH client for unix servers and Caché databases.",
        ],
        timeFrame: "2025 Q3",
        url: "https://github.com/mattvarghese/WebSSHClient"
      },
      {
        title: "HTTP Auto-responder",
        description: [
          "Development tooling for Web APIs, keeping traffic within the enterprise or local network.",
          "Configurable endpoint allows simultaneous multi-user testing of REST APIs.",
        ],
        timeFrame: "2024 Q4",
        url: "https://github.com/mattvarghese/HttpResponder"
      },
      {
        title: "MIPS Pipeline Simulator",
        description: [
          "Highlights expertise in low-level systems, architecture, parallelism, and performance.",
          "5-Stage pipeline simulation of a MIPS microprocessor, with cache simulation, assembler, and terminal app developed with POSIX APIs, C++, Flex, and Bison in 2005.",
          "In 2025, developed a Small-C compiler above the assembler with AI assistance."
        ],
        timeFrame: "2005, 2025",
        url: "https://github.com/mattvarghese/coconut"
      },
      {
        needPadding: true,
        title: "This Resume!",
        description: [
          "Think different! Resume developed as print-media web application with AI assistance."
        ],
        timeFrame: "2026 Q1",
        url: "https://github.com/mattvarghese/my-resume"
      }
    ],
    epicCertifications: [
      "Web Tech Camp",
      "Server Tech Camp",
      "Clarity Data Model",
      "EpicCare Inpatient Suite",
      "Order Transmittal",
      "Referrals and Authorizations",
      "Tapestry Health Plan Suite"
    ],
    misc: [
      "Novice (H2) rated hang-glider pilot",
      "Solo endorsed VFR student pilot",
      "ASA 101,103/104,105 rated sailor",
      "Learned Elementary Russian as an adult",
      "Avid reader, ice-skating, volleyball, XC-skiing, bicycling"
    ],
    degrees: [
      {
        degree: "Master of Science, Computer Science",
        school: "University of Wisconsin - Madison",
        timeFrame: "2008-2010",
        bulletPoints: [
          "GPA: 3.94 / 4.0 | Focus: Systems, Networking, Distributed Computing."
        ]
      },
      {
        degree: "Bachelor of Technology, Computer Science and Engineering",
        school: "National Institute of Technology - Calicut, India",
        timeFrame: "2002-2006",
        bulletPoints: [
          "CGPA: 9.60 / 10.0 | Department Topper and Gold Medalist."
        ]
      }
    ]
  },
  timeline: [
    {
      id: 'systems-era',
      title: 'Systems & Networking Foundations',
      subtitle: 'NIT Calicut & Cisco',
      timeFrame: '2002 — 2008',
      iconType: 'systems',
      knowledgePoints: ['Systems Programming', 'Networking Protocols', 'Performance']
    },
    {
      id: 'distributed-era',
      title: 'Distributed Computing & Virtualization',
      subtitle: 'UW Madison & Condor High-Throughput Computing',
      timeFrame: '2008 — 2010',
      iconType: 'distributed',
      knowledgePoints: ['Distributed Systems', 'Virtualization Technologies']
    },
    {
      id: 'clinical-era',
      title: 'Clinical Decision Support & Interoperability',
      subtitle: 'Epic Systems (Clinical Informatics)',
      timeFrame: '2010 — 2020',
      iconType: 'clinical',
      knowledgePoints: ['Healthcare Domain', 'FHIR', 'CDS Hooks', 'RESTful Web APIs', 'Authentication', 'Security']
    },
    {
      id: 'insurance-era',
      title: 'Health Insurance & Full Stack Mastery',
      subtitle: 'Epic Systems (Health Plans)',
      timeFrame: '2020 — 2026',
      iconType: 'insurance',
      knowledgePoints: ['Health Insurance Domain', 'Prior Authorizations', 'Medical Necessity Reviews', 'SMART on FHIR', 'CRD', 'DTR', 'PAS', 'Full Stack Expertise']
    },
    {
      id: 'future-era',
      title: 'The Next Adventure !',
      subtitle: 'Excitement & anticipation over what lies ahead :)',
      timeFrame: '2026 & Beyond',
      iconType: 'future',
      isFuture: true,
      knowledgePoints: ['Payer-Provider Convergence?', 'Health Tech Startups?', 'HL7 FHIR?', 'SMART on FHIR?', 'CDS Hooks?', 'CRD/DTR/PAS?', 'AI Orchestration?', 'Linux & Open Source?', 'Something altogether new / unanticipated?']
    }
  ]
};