import { useEffect } from "react";
import "./App.css";
import { getMovieListThunk } from "./store/thunk";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getMovieListThunk());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MovieList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
