import type { Resume } from './types';

export const resumeData: Resume = {
  person: {
    name: "Matt | Varghese Mathew",
    title: "Software Architect",
    summary: "Visionary software architect and interoperability expert with 20 years of experience designing complex reusable systems and standards-based integrations. Demonstrated aptitude for delving deeply into new domains, and crafting precise, minimally invasive, yet highly successful solutions to challenging problems. In search of new learning and growth opportunities that leverage my massive trove of experience and expertise to build fascinating and deeply impactful real-world solutions.",
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
          skills: ["TypeScript", "React", "NPM and Node", ".NET/C#", "JSON / JWTs / JWKs", "IIS Hosting", "Nginx basics", "SQL basics"]
        },
        {
          group: "AI Tools & LLMs",
          skills: ["Orchestrating large solutions with AI", "Maintainable Architecture", "LLM APIs", "LLM Connectors", "llama / ollama", "Jupyter Lab"]
        },
        {
          group: "Systems & Networking Strength",
          skills: ["ISO-OSI model", "OAuth2", "Familiarity with numerous RFCs", "Encryption standards", "Authentication standards", "Network Architecture & Routing"]
        },
        {
          group: "Avid GNU/Linux User",
          skills: ["Virtualization: KVM & VMware", "Docker", "Hadoop", "Raspberry Pis", "SVN & Git"]
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
            title: "CMS 2027 Interoperability (HL7 Da Vinci CRD/DTR/PAS)",
            bulletPoints: [
              "Technical lead for Epic's implementation of HL7 Da Vinci specifications to automate prior authorization, reducing turnaround time for patients and providers.",
              "Architected payer-end integration of CRD, DTR, and PAS, enabling real-time requirement discovery and electronic submission to meet CMS 2027 mandates.",
              "Collaborated with HL7 standards bodies and third-party vendors to refine specifications. Developed a separate comprehensive testing suite web application.",
              "Became a recognized expert on CRD, DTR, and PAS within Epic and in the industry."
            ]
          },
          {
            title: "Unified Authorization Requirements",
            bulletPoints: [
              "Architected centralized 'Source of Truth' for authorization requirements, eliminating data silos between provider queries, authorization review, and claims processing.",
              "Engineered unified data models and 'Gold-Carding' logic to improve consistency and reduce overhead - foundational layer for Epic's CMS 2027 interoperability suite.",
              "Consolidated fragmented, 'one-off' configuration tools into a reusable editor framework, decreasing development lead time and long-term maintenance."
            ]
          },
          {
            title: "Medical Necessity Guideline Review Integrations",
            bulletPoints: [
              "Payers use Medical Necessity Guideline integrations with MCG, InterQual etc. to review appropriateness of requested care for the patient's clinical scenario.",
              "Supported and later led effort to modernize Epic's Medical Necessity Guideline Review integrations with 3rd parties using a SMART on FHIR based approach.",
              "Engineered a full-stack emulator of vendor systems, using FHIR, SMART on FHIR, and OAuth2 standards, drastically reducing integration defects.",
              "Became a recognized expert on Medical Necessity Review integrations within Epic."
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
            title: "Epic Push Notification Broker Service for our Mobile Apps",
            bulletPoints: [
              "Led team of staff and interns developing mission-critical broker service routing all Epic customer-generated push notifications on all Epic mobile apps to APNS and GCM - a foundational requirement for push notifications across Epic.",
              "Designed with high-availability and redundancy from get go, with a load-balanced primary instance on Azure, and a load-balanced on-prem backup instance.",
              "Among the first high-stakes Epic production applications deployed on Azure.",
              "Responsible for oversight and production deployment for three years with traffic in hundreds of millions range and minimal downtime.",
            ]
          },
          {
            needPadding: true,
            title: "3ʳᵈ Party Web Application integration framework",
            bulletPoints: [
              "Advocated for and centralized all third party web application integrations across Epic into a single framework for accountability, security, and maintainability.",
              "Architectural advisor and code-reviewer to the team developing this framework, as an iframe hosted within the Epic web application, needing to address Content Security Policy, Cross Origin Resource Sharing, and a Web Messaging API suite.",
              "Developed and deployed web applications to test all aspects of this framework.",
              "Became a recognized expert in Web App Integrations and Security within Epic."
            ]
          },
          {
            title: "Clinical Decision Support (CDS) Web Service Interfaces",
            bulletPoints: [
              "Architect of all Epic Clinical Decision Support (CDS) Web Service integration capabilities. Includes HL7 FHIR CDS-Hooks and HL7 CDA-based integrations.",
              "Worked closely with standards bodies co-authoring HL7 CDS Hooks specification.",
              "Redesigned the decision support configuration to mirror analyst mental-model.",
              "Developed feedback mechanism for providers to gauge efficacy of decision support.",
              "Became a recognized expert in CDS-Hooks and REST-ful Web Services within Epic."
            ]
          }
        ]
      },
      {
        company: "Epic - Verona, WI",
        title: "Software Development Intern, Clinical Informatics",
        timeFrame: "June 2009 - Aug. 2009",
        experiences: [
          {
            title: "",
            bulletPoints: [
              "Developed a clinical content comparison utility to allow users to quickly diff clinical content using DOM APIs and LCS diff algorithm, improving content maintainability."
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
              "Developed capability to run jobs inside VMware Virtual Machines on Condor High Throughput Computing pools, allowing deterministic runtime environments."
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
              "Developed configuration interface for NetFlow and logging infrastructure for Traffic Accounting on Cisco GSR series routers.",
              "Platform support for 7500 series routers including Distributed Multi-Link Protocol."
            ]
          }
        ]
      }
    ],
    projects: [
      {
        title: "FHIR-based AI Healthcare Assistant Chatbot",
        description: [
          "LLM chat web app to answer provider and patient questions using real EHR data.",
          "Provider or patient facing SMART on FHIR launch gives access to FHIR server.",
          "LLM tools allow GPT-model to execute FHIR queries to access real EHR data.",
          "Personal learning project in Epic code-space."
        ],
        timeFrame: "2025 Q2",
        url: ""
      },
      {
        needPadding: true,
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
        title: "JSON Library for M/Caché",
        description: [
          "RFC-compliant JSON Serializer and Deserializer for ANSI-M/Caché.",
          "Nearly Half of all Epic's Database AI integrations leverage this library.",
          "Example of long-term vision in creating powerful generic reusable tooling."
        ],
        timeFrame: "2020",
        url: ""
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
        title: "This Resume! :)",
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
        bulletPoints: [
          "GPA: 3.94 / 4.0 | Fully funded Research Assistantship",
          "Focus: Systems, Networking, Distributed Computing"
        ]
      },
      {
        degree: "Bachelor of Technology, Computer Science and Engineering",
        school: "National Institute of Technology - Calicut, India",
        timeFrame: "2002-2006",
        bulletPoints: [
          "CGPA: 9.60 / 10.0 | Branch Topper | Gold Medalist"
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
      title: 'Clinical Informatics & Interoperability',
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
      knowledgePoints: ['Payer-Provider Convergence?', 'Health Tech Startups?', 'AI Orchestration?', 'Linux & Open Source?', 'Something altogether new / unanticipated?']
    }
  ]
};