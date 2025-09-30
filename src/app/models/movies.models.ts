export interface IResponsMoviesTMDB {
    page:          number;
    results:       IMovies[];
    total_pages:   number;
    total_results: number;
}

export interface IMovies {
    adult:             boolean;
    backdrop_path:     null | string;
    genre_ids:         number[];
    id:                number;
    original_language: string;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      string;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}
export interface ICarteleraTMDB {
    dates:         Dates;
    page:          number;
    results:       IMovies[];
    total_pages:   number;
    total_results: number;
}

export interface Dates {
    maximum: string;
    minimum: string;
}
