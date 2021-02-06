export interface Movie {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
  id?: string;
}

export interface Tab {
  [key: string]: string;
  // key?: string;
  // value?: string;
  // id?: string;
}
