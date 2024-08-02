import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./ui/Loader";

const MovieList = lazy(() => import("./movie/MovieList"));
const Poster = lazy(() => import("./ui/Poster"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="poster/:poster" element={<Poster />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
