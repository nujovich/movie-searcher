import { useCallback, useState } from 'react';
import './App.css';
import { Movies } from './components/Movie';
import { useMovies } from './hooks/useMovies';
import { useSearch } from './hooks/useSearch';
import debounce from 'just-debounce-it';

function App() {
  const { search, setSearch, error } = useSearch();
  const [sort, setSort] = useState(false);
  const { movies, searchMovies, isLoading} = useMovies({ search , sort });

  // useRef is a hook that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). 
  // The returned object will persist for the full lifetime of the component.
  // https://reactjs.org/docs/hooks-reference.html#useref
  // const inputRef = useRef();

  const debounceMovies = useCallback(debounce(search => {
    searchMovies({ search })
  }, 300), [searchMovies])

  const handleChange = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    debounceMovies(newSearch);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies({ search });
    // forma no controlada de obtener el valor del input
    // const fields = new FormData(e.target);
    // const query = fields.get('query');
    // console.log(query);
    
  };

  const handleSort = () => {
    setSort(!sort);
  }

  return (
    <div className="page">
      <header>
        <h1>Movie search</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} placeholder='Avengers, StarWars, etc.' />
          <input type='checkbox' checked={sort} onChange={handleSort} />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      <main className='main'>
        {isLoading ? <p>Loading...</p> : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
