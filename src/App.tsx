import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Feed from "./pages/feed";
import Register from "./pages/register";
import { AuthContextProvider } from "./context/auth";

// when we work with router everything need to be inside the router
function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
