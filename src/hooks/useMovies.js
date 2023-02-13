import { getMovies } from '../services/getMovies';
import { useCallback, useMemo, useRef, useState } from 'react';

export function useMovies({ search, sort }) {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const previousSearch = useRef(search);

    // useCallback() is used to avoid unnecessary re-renders
    const searchMovies = useCallback(async ({ search }) => {
      if (search === previousSearch.current) return;
      try {
        setIsLoading(true);
        setError(null);
        const newMovies = await getMovies({ search });
        setMovies(newMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
      
    }, []); 

    // useMemo() is used to avoid unnecessary re-renders
    const sortedMovies = useMemo(() => {
      return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies;
    }, [movies, sort]);

    return {movies : sortedMovies, searchMovies, isLoading};

}