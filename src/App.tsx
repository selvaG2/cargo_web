import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
