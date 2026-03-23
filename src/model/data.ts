import type { Resume } from './types';

export const resumeData: Resume = {
  person: {
    name: "Matt | Varghese Mathew",
    title: "Software Systems Architect",
    summary: "Software Systems Architect with 20 years of hands-on experience designing large-scale distributed platforms and cross-platform data infrastructure. Expert at translating evolving requirements into production systems adopted across hundreds of enterprise customers. Recognized for unifying complex multi-system integrations into scalable architectures through deep domain research and rigorous system design.",
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
          skills: ["TypeScript", "React", "Web API", "Node", ".NET/C#", "C/C++", "Python", "Git & SVN", "ANSI-M", "SQL & NoSQL", "Linux & Windows"]
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
        summary: "Architect for a large-scale, standards-based integration platform, defining automated real-time decision workflows for enterprise-scale organizations. Engineered systems adopted by hundreds of major enterprise clients, reducing high-latency business process turnarounds from several days to near real-time.",
        experiences: [
          {
            title: "Led architecture and delivery of an enterprise interoperability platform",
            detail: "for real-time data exchange, collaborating with standards bodies and external vendors to transform emerging specifications into scalable, production-ready infrastructure."
          },
          {
            title: "Identified gaps and established a unified \"source of truth\"",
            detail: "replacing fragmented logic across 12+ product modules, reducing lead time for new feature development by ~80%, and improving long-term maintainability."
          },
          {
            title: "Recognized the need and architected standardized",
            detail: "data models and execution frameworks replacing inconsistent one-off implementations, significantly improving maintainability and cross-team scalability."
          },
          {
            title: "Modernized third-party decision-engine integrations",
            detail: "using OAuth2 SSO patterns, enabling real-time workflow execution and reducing integration defects by ~60%."
          },
          {
            title: "Mitigated tooling deficiencies by building simulation and testing frameworks",
            detail: "to emulate third-party systems, enabling end-to-end workflow validation, proactively eliminating defects, and accelerating partner onboarding."
          }
        ]
      },
      {
        company: "Epic - Verona, WI",
        title: "Senior Software Systems Developer, Clinical Informatics",
        timeFrame: "August 2010 - March 2021",
        summary: "Senior developer responsible for distributed decision-support infrastructure, external web application integrations, and mobile push notifications services supporting large-scale enterprise applications. Directed adoption of modern interoperability standards and pioneered Epic's first high-availability cloud service on Azure.",
        experiences: [
          {
            title: "Created Epic's high-availability mobile push notifications platform,",
            detail: "routing millions of weekly notifications via APNS and GCM. Pioneered deployment as one of Epic's first Azure-native production services, reducing operational costs by over 90%."
          },
          {
            needPadding: true,
            title: "Identified fragmentation and led enterprise-wide centralization",
            detail: "of 3rd-party web application integrations to establish standards for security and maintainability. Developed a suite of validation apps for CSP, CORS, and Web Messaging APIs."
          },
          {
            title: "Designed & Developed Epic's decision support web services framework,",
            detail: "enabling reusable standards-based workflow integrations across multiple enterprise applications using RESTful APIs and event-driven execution patterns."
          },
          {
            title: "Identified usability gaps and redesigned",
            detail: "decision support configuration to align with mental models, improving usability and enabling efficacy feedback loops for users."
          },
          {
            title: "Recognized subject matter expert in Web App Security and RESTful integrations,",
            detail: "providing architectural guidance to multiple teams and onboarding external vendors."
          }
        ]
      }
    ],
    priorJobs: [
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
        ItemTitle: "Standards-body Hackathons",
        Description: "Developed prototypes of industry specifications in collaboration with participants from other vendors to improve interoperability."
      },
      {
        ItemTitle: "Authoring Industry Standards",
        Description: "Contributed to two emerging industry specifications for interoperability towards improving workflow integration & security."
      },
      {
        needPadding: true,
        ItemTitle: "Steering Industry Standards",
        Description: "Represented Epic on public calls steering development of three standards to reduce administrative overhead for high-latency B2B transaction approvals."
      },
      {
        ItemTitle: "Epic Vendor Conferences",
        Description: "Presented for several years on Epic's web service integration capabilities to educate and onboard third-party vendors."
      },
      {
        ItemTitle: "Epic Mentoring",
        Description: "Mentored engineers and interns across multiple teams, driving adoption of architectural best practices and development of high-performing teams."
      },
      {
        ItemTitle: "Epic Recruitment",
        Description: "Attracted top talent to Epic by representing Epic at university career fairs and conducting candidate interviews."
      }
    ],
    keyProjects: [
      {
        title: "LLM-Integrated Workflow Assistant",
        description: [
          "Designed and implemented a single-sign-on AI assistant web application.",
          "App interfaces LLM APIs with structured enterprise data sources to support real-time chat-based interaction for in-workflow assistance.",
          "Demonstrates applied architecture for AI-based workflow orchestration over live API-backed data sources."
        ],
        timeFrame: "2025",
        url: ""
      },
      {
        title: "RFC-compliant JSON Serializer & Deserializer for ANSI-M",
        description: [
          "Created RFC 8259 compliant generic JSON Serializer and Deserializer for the ANSI-M language.",
          "Library enables 30+ database AI integrations and analytics across Epic.",
          "Initiative spotlights long-term vision in creating powerful generic reusable tooling."
        ],
        timeFrame: "2020",
        url: ""
      },
      {
        title: "MIPS Microprocessor Pipeline Simulator",
        description: [
          "Demonstrates expertise in computer architecture, parallelism, and performance.",
          "5-Stage pipeline simulation of a MIPS microprocessor, with cache simulation, assembler, and terminal app developed with POSIX APIs, C++, Flex, and Bison in 2005.",
          "In 2025, developed a Small-C compiler above the assembler with AI assistance."
        ],
        timeFrame: "2005, 2025",
        url: "https://github.com/mattvarghese/coconut"
      }
    ],
    projects: [
      {
        title: "Web Based SSH Client",
        description: [
          "Non-traditional solution for real world cost reduction avoiding remote-app licenses for moderated shell access to servers.",
          "Demonstrated proof of concept fully browser-based SSH client for unix servers.",
        ],
        timeFrame: "2025",
        url: "https://github.com/mattvarghese/WebSSHClient"
      },
      {
        title: "HTTP Auto-responder",
        description: [
          "Development tooling for Web APIs, keeping traffic within the enterprise or local network.",
          "Configurable endpoint allows simultaneous multi-user testing of RESTful APIs.",
        ],
        timeFrame: "2024",
        url: "https://github.com/mattvarghese/HttpResponder"
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
      "USHPA Novice (H2) rated hang-glider pilot",
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