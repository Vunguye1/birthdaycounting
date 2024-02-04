import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import BirthdayGreeting from "./pages/birthday-greeting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index path="/birthdaycounting" element={<Home />} />
          <Route path="/birthdaygreeting" element={<BirthdayGreeting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
