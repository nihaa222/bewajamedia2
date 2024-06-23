import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Landing from "./Pages/Landing";
import SignIn from "./Pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
