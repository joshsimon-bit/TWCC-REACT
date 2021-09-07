import "./styles.css";
import NavBar from "./components/navbar/index";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router className="App">
      <h1>Hello CodeSandbox</h1>
      <NavBar />
    </Router>
  );
}
