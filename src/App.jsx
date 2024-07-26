// import MovieList from "./MovieList";

import { BrowserRouter, Route,Routes } from "react-router-dom";
// import Poster from './Poster'
import { Suspense ,lazy} from "react";
import Loader from './Loader'

const MovieList = lazy(() => import("./MovieList"));
const Poster = lazy(() => import("./Poster"));


function App() {

  return (
    <div>
      

      <BrowserRouter>
        <Suspense fallback = {<Loader/>}>
          <Routes>
            <Route path="/" element = {<MovieList/>}/>
            <Route path="poster/:poster" element = {<Poster/>}/>
          </Routes>
        </Suspense>
        </BrowserRouter>
    </div>
  );
}

export default App;
