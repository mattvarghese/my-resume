import type { Resume } from './types';

export const resumeData: Resume = {
  person: {
    name: "Matt | Varghese Mathew",
    title: "Software Systems Architect",
    summary: "Software Systems Architect specializing in large-scale distributed platforms, API ecosystems, and cross-system integrations. Proven track record of driving high-impact solutions across complex environments involving multiple teams, vendors, and evolving standards.",
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
        summary: "Architect for large-scale systems enabling expedited decision workflows across hundreds of customers, reducing turnaround from days to near real-time.",
        experiences: [
          {
            title: "Led architecture and delivery",
            detail: "of Epic's payer interoperability platform for CMS 2027, collaborating with internal teams, industry standards workgroups, and external vendors to refine and operationalize evolving standards."
          },
          {
            title: "Identified gap and established a unified \"source of truth\"",
            detail: "for prior authorization requirements, eliminating fragmentation across 12+ product modules and reducing new development lead time by ~80%."
          },
          {
            title: "Recognized need and architected standardized",
            detail: "data models and execution frameworks to replace inconsistent one-off implementations, significantly improving maintainability and cross-team scalability."
          },
          {
            title: "Modernized Medical Necessity guideline review integrations",
            detail: "using OAuth2 based single sign-on standards, enabling real-time clinical decision workflows and reducing integration defects by ~60%."
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
        summary: "Architect for clinical decision support (CDS) integrations, web app integrations, and mobile push notifications. Directed adoption of modern healthcare interoperability standards and pioneered Epic's first high-availability cloud service on Azure.",
        experiences: [
          {
            title: "Architect of Epic's high-availability mobile push notifications platform,",
            detail: "routing millions of weekly notifications via APNS and GCM. Pioneered deployment as one of Epic's first Azure-native production services, reducing operational costs by over 90%."
          },
          {
            needPadding: true,
            title: "Identified fragmentation and led enterprise-wide centralization",
            detail: "of 3rd-party web application integrations to establish standards for security and maintainability."
          },
          {
            title: "Architected Epic's decision support web services framework,",
            detail: "enabling standards-based clinical decision support across multiple clinical applications."
          },
          {
            title: "Identified usability gaps and redesigned",
            detail: "decision support configuration to align with mental models, improving usability and enabling efficacy feedback loops for doctors."
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
        ItemTitle: "Health Industry Hackathons",
        Description: "Developed prototypes of industry specifications in collaboration with participants from other vendors to improve interoperability."
      },
      {
        ItemTitle: "Prior Auth Burden Reduction",
        Description: "Represented Epic on public calls steering development of standards to reduce admin burden in Prior Authorization."
      },
      {
        ItemTitle: "Authoring Industry Standards",
        Description: "Contributed to HL7 CDS Hooks and HL7 SMART Web Messaging specifications to enhance workflow integration and security."
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
        title: "Healthcare AI Assistant",
        description: [
          "Integrates LLM APIs with electronic patient health record for agentic use-cases.",
          "LLM chat web app answers doctor and patient questions using real health data.",
          "Can be leveraged for AI driven forms, AI decision support, AI care delivery, etc."
        ],
        timeFrame: "2025 Q2",
        url: ""
      },
      {
        title: "JSON Parser for ANSI-M",
        description: [
          "Spotlights long-term vision in creating powerful generic reusable tooling.",
          "Created RFC 8259 compliant JSON Serializer and Deserializer for ANSI-M.",
          "Over 30 of Epic's database AI integrations leverage this serializer and deserializer."
        ],
        timeFrame: "2020",
        url: ""
      }
    ],
    projects: [
      {
        title: "Web Based SSH Client",
        description: [
          "Non-traditional solution for real world cost reduction avoiding remote-app licenses for moderated shell access to servers.",
          "Demonstrated proof of concept fully browser-based SSH client for unix servers.",
        ],
        timeFrame: "2025 Q3",
        url: "https://github.com/mattvarghese/WebSSHClient"
      },
      {
        title: "HTTP Auto-responder",
        description: [
          "Development tooling for Web APIs, keeping traffic within the enterprise or local network.",
          "Configurable endpoint allows simultaneous multi-user testing of RESTful APIs.",
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