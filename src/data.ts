import type { Resume } from './types';

export const resumeData: Resume = {
  person: {
    name: "Matt | Varghese Mathew", 
    title: "Software Architect",
    summary: "Visionary software architect and interoperability expert with 20 years of experience designing complex reusable systems and multi-party integrations. Demonstrated aptitude for delving deeply into new domains, crafting precise minimally invasive yet highly successful solutions to challenging problems. In search of new growth opportunities that leverage my massive trove of knowledge and skills to build fascinating and deeply impactful real-world solutions. ",
    connections: {
      email: "xxxxxxxxxxxxxxxxx@gmail.com",
      phone: "(555) 888 9696",
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
          skills: ["TypeScript", "React", ".NET/C#", "JSON/JWTs/JWKs", "IIS Hosting", "Nginx basics"]
        },
        {
          group: "AI Tools & LLMs",
          skills: ["orchestrating large projects with AI", "Maintainable Architecture", "LLM APIs", "LLM Connectors", "llama / ollama", "Jupyter Lab"]
        },
        {
          group: "Strong Knowledge of Networking",
          skills: ["ISO-OSI model", "OAuth2", "Familiarity with numerous RFCs", "Encryption standards", "Authentication standards"]
        },
        {
          group: "Avid GNU/Linux User",
          skills: ["Virtualization: KVM, VMware", "Docker","Hadoop", "Raspberry Pis", "SVN & Git"]
        }
      ]
    },
    jobs: [],
    projects: []
  }
};