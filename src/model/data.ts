import type { Resume } from './types';

export const resumeData: Resume = {
  person: {
    name: "Matt | Varghese Mathew",
    title: "Software Architect",
    summary: "Visionary software architect and interoperability expert with 20 years of experience designing complex reusable systems and multi-party integrations. Demonstrated aptitude for delving deeply into new domains, crafting precise minimally invasive yet highly successful solutions to challenging problems. In search of new growth opportunities that leverage my massive trove of knowledge and skills to build fascinating and deeply impactful real-world solutions. ",
    connections: {
      email: "Masked / Ask Me",
      phone: "Masked / Ask Me",
      location: "Madison, WI",
      linkedIn: "https://www.linkedin.com/in/matt-varghese-b609979",
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
          skills: ["TypeScript", "React", "NPM and Node", ".NET/C#", "JSON / JWTs / JWKs", "IIS Hosting", "Nginx basics"]
        },
        {
          group: "AI Tools & LLMs",
          skills: ["Orchestrating large projects with AI", "Maintainable Architecture", "LLM APIs", "LLM Connectors", "llama / ollama", "Jupyter Lab"]
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
            title: "CMS 2027 Interfaces",
            bulletPoints: [
              "Technical lead for Epic's implementation of HL7 FHIR-based CMS 2027 regulatory requirements, spanning HL7 Da Vinci CRD, DTR, and PAS Specifications.",
              "Also led development of end-to-end testing application towards test-driven development.",
              "Mastery of CRD, DTR, PAS, FHIR, SMART on FHIR, OAuth2, and Web Technologies, as well as close coordination with HL7 Standards bodies and 3rd Party App developers."
            ]
          },
          {
            title: "Unified Authorization Requirements",
            bulletPoints: [
              "Led effort to model, build, and unify how health plan prior authorization requirements are captured and executed within Epic.",
              "Deep domain research and understanding, meticulous data-modeling, and reworking various one-off implementations into one consistent and unified whole across Epic.",
              "Consolidated diverse 'similar but different' configuration editors into a consistent reusable configuration editor framework, reducing future maintenance and development lead time."
            ]
          },
          {
            title: "Guideline Review Integrations",
            bulletPoints: [
              "Led effort to diagnose missing pieces / loose ends in a partially complete project I inherited. Planned and executed project successfully, delivering a mature, robust, and low-defect implementation used today at hundreds of Epic customers.",
              "Developed fully functional internal web app to test above project by emulating 3rd party vendor systems, using FHIR, SMART on FHIR, and OAuth2 standards."
            ]
          }
        ]
      },
      {
        company: "Epic - Verona, WI",
        title: "Sr. Software Systems Developer, Clinical Informatics",
        timeFrame: "Aug. 2010 - March 2021",
        experiences: [
          {
            title: "Epic Push Notification Broker Service",
            bulletPoints: [
              "High Availability and Redundancy, security, observability",
            ]
          },
          {
            title: "3rd party Web Application integration framework",
            bulletPoints: [
              "CORS, Security",
            ]
          },
          {
            title: "Web Service Decision Support Interfaces",
            bulletPoints: [
              "Led the development of multiple flavors of decision support web services integrations within Epic.",
              "Involved HL7 CDA, HL7 FHIR, and CDS Hooks standards.",
              "Became the Web Services guru at Epic in the process."
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
              "Developed a clinical content comparison utility to allow end users to quickly diff clinical content using DOM APIs and LCS diff algorithm."
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
              "Developed features to automatically transform regular batch jobs into virtualized jobs running inside VMware Virtual Machines on Condor High Throughput Computing pools.",
              "Involved strong understanding of Virtualization, VMware, File Systems, Python & C++."
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
              "Developed configuration interface for NetFlow and logging infrastructure for Traffic Accounting on Cisco GSR routers.",
              "Platform OS support for Cisco 7500 series routers including Distributed Multi-Link Protocol."
            ]
          }
        ]
      },
      {
        company: "DRDO - Bangalore, India",
        title: "Software Engineer Intern, Center for Artificial Intelligence and Robotics",
        timeFrame: "June 2005",
        experiences: [
          {
            title: "",
            bulletPoints: [
              "Developed software for objective psychological evaluations using Windows APIs, Visual C++.",
            ]
          }
        ]
      }
    ],
    projects: [
      {
        title: "FHIR-based AI Healthcare Assistant Chatbot",
        description: [
          "Provider or patient facing SMART on FHIR launch gives access to FHIR server.",
          "LLM tools allow GPT-model to execute FHIR queries to access real EHR data.",
          "Chat based interface with sliding context window for conversations.",
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
          "Avoids Citrix licenses etc., saving money for organizations extending moderated text access to users"
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
          "Example of long-term vision in creating generic reusable tooling."
        ],
        timeFrame: "2020",
        url: ""
      },
      {
        title: "MIPS Pipeline Simulator",
        description: [
          "5-stage pipeline simulaton of MIPS microprocesor. Includes cache simulation, assembler, and terminal.",
          "Multithreaded application developed with POSIX APIs, C++, Flex, and Bison in 2005.",
          "In 2025, Vibe-coded a Small-C compiler above the assembler as well."
        ],
        timeFrame: "2005, 2025",
        url: "https://github.com/mattvarghese/coconut"
      },
      {
        title: "This Resume!",
        description: [
          "Formatting of this resume was vibe-coded as a TypeScript React web app."
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
        degree: "",
        school: "",
        timeFrame: "",
        bulletPoints: []
      }
    ]
  }
};