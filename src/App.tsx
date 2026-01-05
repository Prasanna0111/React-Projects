import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import ShowHide from "./pages/ShowHide";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/showhide" element={<ShowHide />} />
      </Routes>
    </>
  );
}

export default App;
