import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Header from "./components/Header/Header";

import { Routes, Route } from "react-router-dom";
import Homepage from "pages/Homepage";
import SingleCharacter from "pages/SingleCharacter";
import NotFound from "pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<SingleCharacter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
