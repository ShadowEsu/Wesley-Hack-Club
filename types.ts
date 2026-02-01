
export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  type: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  github: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}
