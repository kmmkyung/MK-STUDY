interface IMovie {
  id: number;
  backdrop_path: string;
  posters_path: string;
  title: string;
  overview: string;
}

export interface INowPlaying {
  dates: {maximum: string, minimum: string};
  page: number;
  results: IMovie[]
  total_pages: number;
  total_results: number;
}