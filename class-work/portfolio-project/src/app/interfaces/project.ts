export interface IProject {
  id: number;
  title: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
  categoryId: number;
}

export interface ICategory {
  id: number;
  name: string;
}
