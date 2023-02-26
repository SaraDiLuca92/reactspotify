import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeComponent from "./Components/HomeComponent";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <HomeComponent />
        </Route>
      </div>
    </Router>
  );
}

export default App;
