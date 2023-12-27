import logo from "./logo.svg";
import "./App.css";
import DateCounter from "./components/DateDisplay";
import DateDisplay from "./components/DateDisplay";
import DateSkipCounter from "./components/DateSkipCounter";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <DateSkipCounter></DateSkipCounter>
    </div>
  );
}

export default App;
