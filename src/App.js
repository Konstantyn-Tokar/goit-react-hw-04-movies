import { lazy, Suspense } from "react";
import Loader from "react-loader-spinner";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppBar from "./components/AppBar";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

const HomePage = lazy(() => import("./views/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./views/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage/MovieDetailsPage")
);

function App() {
  return (
    <div className="App">
      <AppBar />
      <Suspense
        fallback={
          <Loader
            type="ThreeDots"
            color="rgb(121, 70, 202)"
            height={"50vh"}
            width={80}
          />
        }
      >
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/movies">
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
        </Switch>
      </Suspense>
      <ToastContainer autoClose={2500} />
    </div>
  );
}

export default App;
