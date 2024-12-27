import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./Context/ContextProvider";
import NavBar from "./components/Header/NavBar/NavBar";
import Router from "./Router/Router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <NavBar />
        <Router />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
