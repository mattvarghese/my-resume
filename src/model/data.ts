import type { Resume } from './types';

export const resumeData: Resume = {
  person: {
    name: "Matt | Varghese Mathew",
    title: "Software Systems Architect",
    summary: "Software Systems Architect with 20 years of experience designing large-scale interoperable healthcare platforms. Technical lead for Epic's HL7 FHIR-based CMS 2027 regulatory implementation, standardizing prior-authorization workflows for hundreds of customers. Recognized for transforming fragmented integrations into unified, maintainable platforms, and for deep expertise in FHIR, SMART on FHIR, OAuth2, and modern web architectures.",
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
          group: "Healthcare and Health Insurance",
          skills: ["Domain knowledge", "HL7 FHIR", "SMART on FHIR", "CDS Hooks", "CRD/DTR/PAS", "ANSI X12 278"]
        },
        {
          group: " Full stack development",
          skills: ["TypeScript", "React", "Web API", "NPM and Node", ".NET/C#", "SVN", "Git", "JSON / JWTs / JWKs", "Azure", "IIS Hosting", "Nginx basics", "SQL"]
        },
        {
          group: "AI Tools & LLMs",
          skills: ["Orchestrating large solutions with AI", "Maintainable Architecture", "LLM APIs", "LLM Connectors", "llama / ollama", "Jupyter Lab"]
        },
        {
          group: "Systems & Networking Strength",
          skills: ["ISO-OSI model", "OAuth2", "Worked with several RFCs", "Encryption standards", "Authentication standards", "Network Architecture & Routing"]
        },
        {
          group: "Avid GNU/Linux User",
          skills: ["Virtualization", "KVM / Qemu", "VMware", "Docker", "Hadoop", "Raspberry Pis"]
        }
      ]
    },
    jobs: [
      {
        company: "Epic - Verona, WI",
        title: "Software Systems Architect, Health Plans",
        timeFrame: "March 2021 - Present",
        experiences: [
          {
            title: "Delivered CMS 2027 interoperability (HL7 CRD/DTR/PAS)",
            bulletPoints: [
              "Architect for Epic's payer implementation of HL7 Da Vinci CRD/DTR/PAS to automate prior authorization, reducing turnaround time from days to minutes.",
              "Refined specifications in collaboration with HL7 standards bodies and third-party vendors. Developed independent comprehensive testing suite for the same.",
              "Recognized expert on CRD, DTR, and PAS at Epic and in the industry."
            ]
          },
          {
            title: "Unified fragmented Prior Authorization requirements",
            bulletPoints: [
              "Architected centralized 'Source of Truth' for authorization requirements, eliminating data silos across all of Epic's health plan product lines.",
              "Engineered unified data models and processing logic to improve consistency and reduce overhead, decreasing development lead time by 80% for 12+ modules."
            ]
          },
          {
            title: "Modernized Medical Necessity guideline review integrations",
            bulletPoints: [
              "Payers use Medical Necessity Guideline integrations with MCG, InterQual etc. to review appropriateness of requested care for the patient's clinical scenario.",
              "Led modernization of Epic's Medical Necessity Guideline Review integrations using SMART on FHIR. Engineered full-stack emulator, reducing defects by 60%.",
              "Recognized expert on Medical Necessity Review and SMART on FHIR at Epic."
            ]
          }
        ]
      },
      {
        company: "Epic - Verona, WI",
        title: "Senior Software Systems Developer, Clinical Informatics",
        timeFrame: "Aug. 2010 - March 2021",
        experiences: [
          {
            title: "Enabled Push Notifications for all Epic Mobile Apps",
            bulletPoints: [
              "Led team of staff and interns developing broker service routing all Epic customer-generated push notifications on all Epic mobile apps to APNS and GCM.",
              "Designed with high-availability and redundancy. Among the first Epic production applications deployed on Azure reducing cost by over a factor of 10.",
              "Responsible for oversight and production deployment for three years with traffic in millions per week and minimal downtime.",
            ]
          },
          {
            needPadding: true,
            title: "Centralized 3ʳᵈ Party Web Application integrations across Epic",
            bulletPoints: [
              "Advocated for and centralized all third party web application integrations across Epic into a single framework for accountability, security, and maintainability.",
              "Developed and deployed web applications to validate Content Security Policy, Cross Origin Resource Sharing, and a Web Messaging API suite.",
              "Recognized expert in Web App Integrations and Security at Epic."
            ]
          },
          {
            title: "Architected Epic's CDS Web Service integration framework",
            bulletPoints: [
              "Architect of all Epic Clinical Decision Support (CDS) Web Service integration capabilities. Includes HL7 FHIR CDS-Hooks and HL7 CDA-based integrations.",
              "Redesigned the decision support configuration to mirror user mental-model. Developed feedback mechanism for providers to gauge efficacy of decision support.",
              "Recognized expert in CDS-Hooks and REST-ful Web Services at Epic."
            ]
          }
        ]
      },
      {
        company: "University of Wisconsin - Madison, WI",
        title: "Research Assistant, Condor Distributed Computing",
        timeFrame: "Sept. 2008 - May 2010",
        experiences: [
          {
            title: "",
            bulletPoints: [
              "Virtualized Condor jobs with VMware achieving deterministic runtime environments."
            ]
          }
        ]
      },
      {
        company: "Cisco Systems - Bangalore, India",
        title: "Software Engineer, Enterprise Routing",
        timeFrame: "June 2006 - July 2008",
        experiences: [
          {
            title: "",
            bulletPoints: [
              "Platform support and configuration tools for Cisco GSR, 7600, and 7500 routers."
            ]
          }
        ]
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
        ItemTitle: "Epic Recruitment",
        Description: "Represented Epic at university career fairs and conducted candidate interviews to attract top talent to Epic."
      }
    ],
    projects: [
      {
        title: "FHIR-based AI Assistant",
        description: [
          "Demonstrates seamless integration of LLM API with FHIR server for agentic use-cases.",
          "LLM chat web app to answer provider and patient questions using real EHR data.",
          "Provider or patient facing SMART on FHIR launch gives LLM access to FHIR server."
        ],
        timeFrame: "2025 Q2",
        url: ""
      },
      {
        needPadding: true,
        title: "JSON Parser for M/Caché",
        description: [
          "Spotlights long-term vision in creating powerful generic reusable tooling.",
          "RFC-compliant JSON Serializer and Deserializer for ANSI-M/Caché.",
          "Nearly Half of all Epic's Database AI integrations leverage this library."
        ],
        timeFrame: "2020",
        url: ""
      },
      {
        title: "Web Based SSH Client",
        description: [
          "Proof of concept allows Web Based SSH access to unix servers, Caché etc.",
          "Avoids Citrix licenses etc., saving money for organizations extending moderated text access to users."
        ],
        timeFrame: "2025 Q3",
        url: "https://github.com/mattvarghese/WebSSHClient"
      },
      {
        title: "HTTP Auto-responder",
        description: [
          "Web Service 'development tool' allowing preconfigured responses and logging for common HTTP verbs.",
          "Similar to Postman Mock Server, but keeps traffic within the enterprise or local network."
        ],
        timeFrame: "2024 Q4",
        url: "https://github.com/mattvarghese/HttpResponder"
      },
      {
        title: "MIPS Pipeline Simulator",
        description: [
          "5-Stage pipeline simulation of a MIPS microprocessor hardware. Includes cache simulation, assembler, and terminal app.",
          "Multithreaded application developed with POSIX APIs, C++, Flex, and Bison in 2005.",
          "In 2025, developed a Small-C compiler above the assembler with AI-assistance."
        ],
        timeFrame: "2005, 2025",
        url: "https://github.com/mattvarghese/coconut"
      },
      {
        title: "This Resume!",
        description: [
          "This resume is formatted using a print-media web app I developed with AI-assistance!"
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
      "Learned Elementary Russian as adult",
      "Avid reader, ice-skating, volleyball, XC-skiing, bicycling"
    ],
    degrees: [
      {
        degree: "Master of Science, Computer Science",
        school: "University of Wisconsin - Madison",
        timeFrame: "2008-2010",
        bulletPoints: []
      },
      {
        degree: "Bachelor of Technology, Computer Science and Engineering",
        school: "National Institute of Technology - Calicut, India",
        timeFrame: "2002-2006",
        bulletPoints: []
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