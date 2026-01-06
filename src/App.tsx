import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import ShowHide from "./pages/ShowHide";
import ToDo from "./pages/ToDo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/showhide" element={<ShowHide />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </>
  );
}

export default App;
