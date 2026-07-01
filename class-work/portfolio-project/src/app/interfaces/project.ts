export interface IProject {
  id: number;
  name: string;
  imageUrl: string;
  categoryIds: number[];
  status: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface ICategory {
  id: number;
  name: string;
}
