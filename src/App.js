import { useEffect } from 'react';


import '../src/App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7';
 const App = () => {
     const searchMovies = async (title) => {
         const response = await fetch(`${API_URL}&s=${title}`);
         const data = await response.json();

         console.log(data.Search);
     }

     useEffect(() => {
        searchMovies('spiderman');
     }, []);

     return (
         <div className="app">
             <h1>MovieLand</h1>

             <div className="search">
                 <input
                   placeholder="Search for movies"
                   value="Superman"
                   onChange={() => {}}
                />
                <img
                src={SearchIcon}
                alt="search"
                onClick={() => {}}
                />
             </div>

             <div className="container">
                 <div className='movie'>
                     <div>
                         <p>
                             {Year}
                         </p>
                     </div>

                     <div>
                         <img src={Poster !== 'N/A' ? Poster : 'http://via.placeholder.com/400'} alt={Title}/>
                     </div>

                     <div>
                         <span>{Type} </span>
                         <h3>{Title} </h3>
                     </div>
                 </div>
             </div>
         </div>
     );
 }

 export default App;
