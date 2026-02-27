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
          skills: ["Domain knowledge","HL7 FHIR", "SMART on FHIR", "CDS Hooks", "CRD/DTR/PAS", "ANSI X12 278"]
        },
        {
          group: " Full stack development",
          skills: ["TypeScript", "React", "NPM and Node", ".NET/C#", "JSON/JWTs/JWKs", "IIS Hosting", "Nginx basics"]
        },
        {
          group: "AI Tools & LLMs",
          skills: ["Orchestrating large projects with AI", "Maintainable Architecture", "LLM APIs", "LLM Connectors", "llama / ollama", "Jupyter Lab"]
        },
        {
          group: "Strong Knowledge of Networking",
          skills: ["ISO-OSI model", "OAuth2", "Familiarity with numerous RFCs", "Encryption standards", "Authentication standards"]
        },
        {
          group: "Avid GNU/Linux User",
          skills: ["Virtualization: KVM & VMware", "Docker","Hadoop", "Raspberry Pis", "SVN & Git"]
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
                "Led development of end-to-end testing application towards test driven development.",
                "Mastery of CRD, DTR, PAS, FHIR, SMART on FHIR, OAuth2, and Web Technologies, as well as close coordination with HL7 Standard Bodies and 3rd Party App Developers."
              ]
          },
          {
            title: "Unified Authorization Requirements",
            bulletPoints: [
              "Led the effort to model, build, and unify how health plan prior authorization requirements are captured and executed within Epic.",
              "Involved deep domain research and understanding, meticulous data-modeling, and reworking various one-off implementations into one consistent and unified whole across Epic.",
              "Consolidated diverse 'similar but different' configuration editors into a consistent reusable configuration editor framework, reducing maintenance and development lead time."
            ]
          },
          {
            title: "Guideline Review Integrations",
            bulletPoints: [
              "Led the effort to diagnose missing pieces and lose ends in a partially complete project I inherited. Planned and executed project successfully, delivering a mature, robust, and low-defect implementation used today at hundreds of Epic customers.",
              "Developed a fully functional internal application to test above framework by emulating 3rd party vendor systems, using FHIR, SMART on FHIR, and OAuth2 standards."
            ]
          }
        ]
      },
      {
        company: "Epic - Verona, WI",
        title: "Sr. Software Systems Developer, Clinical Informatics",
        timeFrame: "August 2010 - March 2021",
        experiences: [
          {
            title: "JSON Serializer/Deserializer for Cache/M",
            bulletPoints: [
              "Built an authoritative, efficient, and RFC-compliant JSON Serializer and Deserializer for use on Epic's ANSI-M/Cache database backend.",
              "This wasn't a task I was given. I could have just used a piece delimited string or a variety of other simpler alternatives. However, I saw a long-term need and rose up with a vision to build it proactively.",
              "Today, nearly half of Epic's AI and predictive modeling use-cases (as well as several other use-cases) leverage this serailizer and deserializer."
            ]
          },
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
        timeFrame: "June 2009 - August 2009",
        experiences: [
          {
            title: "Clinical Content Comparison Utility",
            bulletPoints: [
              "Developed a clinical content comparison utility to allow end users to quickly diff clinical content using DOM APIs and LCS diff algorithm."
            ]
          }
        ]
      }
    ],
    projects: []
  }
};