import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NFTDetails from "./pages/NFTDetails";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/frontend_with_contract" element={<Home />} />
          <Route exact path="/frontend_with_contract/:id" element={<NFTDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
