import type { Resume } from './types';

export const resumeData: Resume = {
  person: {
    name: "Matt | Varghese Mathew",
    title: "Software Systems Architect",
    summary: "Software Systems Architect with 15+ years of hands-on experience engineering secure, multi-vendor distributed platforms and real-time API orchestration. Former UW-Madison Condor Research Assistant with a strong background in High Throughput Computing and deterministic runtime environments. Proven track record of translating complex requirement-specifications into production-ready systems for hundreds of enterprise clients. Strong interest in GNU/Linux, Open-Source, and contributing back to Condor!",
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
          skills: ["SDLC", "Distributed Systems", "Microservices", "Azure", "CI/CD", "Docker", "Virtualization", "Hadoop", "Maintainability", "Performance"]
        },
        {
          group: "Engineering Stack",
          skills: ["C/C++", "Python", "Git & SVN", "Web API", "TypeScript", "React", "Node", ".NET/C#", "ANSI-M", "SQL", "Linux", "Windows"]
        },
        {
          group: "Specialized Expertise",
          skills: ["LLM API Integration", "Agentic Development", "Regulatory Infrastructure", "Network Architecture & Routing"]
        }
      ]
    },
    jobs: [
      {
        company: "University of Wisconsin - Madison, WI",
        title: "Graduate Research Assistant, Condor HTC",
        timeFrame: "Sep 2008 - May 2010",
        summary: "Under the advisement of Prof. Miron Livny, engineered deterministic runtime environments by virtualizing Condor jobs within VMware, developing early (pre-docker) patterns for Infrastructure-as-a-Service (IaaS). Investigated two distinct virtual machine job-delivery patterns to achieve reliable execution across heterogeneous environments.",
        experiences: [
          {
            title: "Self-Contained Execution:",
            detail: "Packaged jobs directly within VMs to run upon startup."
          },
          {
            title: "Autonomous Pool Integration:",
            detail: "Dispatched VMs that dynamically joined the Condor pool at runtime to claim their own designated workloads."
          }
        ]
      }
    ],
    priorJobs: [
      {
        company: "Epic - Verona, WI",
        title: "Software Systems Architect, Interoperability",
        timeFrame: "Mar 2021 - Present",
        summary: "Architect for a large-scale, standards-based, regulatory integration platform, defining automated real-time decision workflows for enterprise-scale organizations. Engineered systems adopted by hundreds of major enterprise clients, reducing high-latency business process turnarounds from several days to near real-time.",
        experiences: [
          {
            title: "Led architecture and delivery of a regulatory interoperability platform",
            detail: "for real-time data exchange, collaborating with standards bodies and external vendors to transform emerging specifications into scalable, production-ready infrastructure."
          },
          {
            title: "Identified gaps and established a unified \"source of truth\"",
            detail: "replacing fragmented logic across 12+ product modules, reducing lead time for new feature development by ~80%, and improving long-term maintainability."
          },
          {
            title: "Recognized the need and architected standardized",
            detail: "data models and execution frameworks replacing inconsistent one-off implementations for maintainabilityy."
          },
          {
            title: "Modernized third-party decision-engine integrations",
            detail: "using OAuth2 SSO patterns, enabling real-time workflow execution and reducing integration defects by ~60%."
          },
          {
            title: "Mitigated tooling deficiencies by building web applications",
            detail: "to emulate third-party systems, validating workflows end-to-end, and accelerating partner onboarding."
          }
        ]
      },
      {
        company: "Epic - Verona, WI",
        title: "Senior Software Systems Developer, Decision Support",
        timeFrame: "Aug 2010 - Mar 2021",
        summary: "Senior developer responsible for distributed decision-support infrastructure, external web application integrations, and mobile push notifications services supporting large-scale enterprise applications. Directed adoption of modern interoperability standards and pioneered Epic's first high-availability cloud service on Azure.",
        experiences: [
          {
            title: "Created Epic's high-availability mobile push notifications platform,",
            detail: "routing millions of weekly notifications via APNS and GCM. Pioneered deployment as one of Epic's first Azure-native production services, reducing operational costs by over 90%."
          },
          {
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
          }
        ]
      },
      {
        company: "Cisco Systems - Bangalore, India",
        title: "Software Engineer, Enterprise Routing",
        timeFrame: "Jun 2006 - Jul 2008",
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
        ItemTitle: "Steering Industry Standards",
        Description: "Represented Epic on public calls steering development of three standards to reduce administrative overhead for high-latency B2B transaction approvals."
      },
      {
        needPadding: true,
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
        title: "Personal HTCondor Cluster",
        description: [
          "Designed and implemented a 10-node Raspberry Pi 3B cluster running HTCondor.",
          "Managed cluster and network architecture to simulate high-throughput computing workloads in a hardware-constrained ARM environment."
        ],
        timeFrame: "2016",
        url: ""
      },
      {
        title: "MIPS Microprocessor Pipeline Simulator",
        description: [
          "5-Stage pipeline simulation of a MIPS microprocessor, with cache simulation, assembler, and terminal app developed with POSIX APIs, C++, Flex, and Bison in 2005.",
          "In 2025, developed a Small-C compiler above the assembler with AI assistance.",
          "Demonstrates expertise in computer architecture, parallelism, and performance."
        ],
        timeFrame: "2005, 2025",
        url: "https://github.com/mattvarghese/coconut"
      },
      {
        title: "RFC-compliant JSON Serializer & Deserializer for ANSI-M",
        description: [
          "Created RFC 8259 compliant generic JSON Serializer and Deserializer for the ANSI-M language.",
          "Library enables 30+ database AI integrations and analytics across Epic, spotlighting architectural vision in creating powerful generic reusable tooling."
        ],
        timeFrame: "2020",
        url: ""
      }
    ],
    projects: [
      {
        title: "LLM-API Workflow Assistant",
        description: [
          "Single-sign-on AI assistant web application.",
          "Interfaces LLM APIs with enterprise data sources to support real-time chat-based interaction for in-workflow assistance."
        ],
        timeFrame: "2025",
        url: ""
      },
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