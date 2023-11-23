import { useEffect } from "react";
import "./App.css";
import { getMovieListThunk } from "./store/thunk";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getMovieListThunk());
  }, [dispatch]);
  return <></>;
}

export default App;
