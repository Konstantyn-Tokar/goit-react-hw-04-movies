import { Route } from "react-router-dom";
import AppBar from "./components/AppBar";
import HomeView from "./views/HomeView";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppBar />

      <Route path="/">
        <HomeView />
      </Route>
    </div>
  );
}

export default App;
