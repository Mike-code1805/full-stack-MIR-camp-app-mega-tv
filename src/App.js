import { Route, Routes } from "react-router-dom";
import Address from "./pages/Address.jsx";
import Contact from "./pages/Contact.jsx";
import Name from "./pages/Name.jsx";
import NotFound from "./pages/NotFound.jsx";
import SelectPlan from "./pages/SelectPlan.jsx";
import Thanks from "./pages/Thanks.jsx";

import Welcome from "./pages/Welcome.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/name" element={<Name />} />
        <Route path="/address" element={<Address />} />
        <Route path="/plan" element={<SelectPlan />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thanks" element={<Thanks />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
