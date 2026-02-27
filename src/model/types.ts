
export interface Resume {
  person: Person;
}

export interface Person {
  name: string;
  title: string;
  summary: string;
  connections: Connections;
  skillSet: SkillSet;
  projects: Project[];
  jobs: Employment[];
  epicCertifications: string[];
  misc: string[];
  degrees: Education[];
}

export interface Connections {
  email: string;
  phone: string;
  location: string;
  linkedIn: string;
  github: string;
}

export interface SkillSet {
  groups: SkillGroup[];
}

export interface SkillGroup {
  group: string;
  skills: string[];
}

export interface Project {
  needPadding?: boolean,
  title: string;
  timeFrame: string;
  description: string[];
  url: string;
}

export interface Employment {
  title: string;
  company: string;
  timeFrame: string;
  experiences: Experience[];
}

export interface Experience {
  needPadding?: boolean,
  title: string;
  bulletPoints: string[];
}

export interface Education {
  degree: string;
  school: string;
  timeFrame: string;
  bulletPoints: string[];
}
